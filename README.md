# upsellerREGRAS

Memoria de trabalho do projeto de correcao de SKUs dos anuncios **Shopee** no **UpSeller**.
Ultima atualizacao: 06/08/2026

---

## 1. Objetivo

Corrigir os SKUs errados dos anuncios Shopee no UpSeller (app.upseller.com) usando como fonte de verdade a planilha de catalogo "SKU CORRETO".
Universo: 14.337 anuncios ativos, 9 lojas.

---

## 2. Fontes de dados

| Fonte | Onde | Uso |
|---|---|---|
| SKU CORRETO (catalogo) | Sheets id 12Rhj2S7P3Z8yBr5zd-KFcykWzMR6145zTMuhfXEkNWs, gid 1575529579 | Coluna A = SKU (autoritativa), Coluna B = descricao. 795 codigos. INCOMPLETA: existem codigos em uso que nao estao nela. |
| sku errado | Sheets id 1sgsTkGBZudzoky_623OMANxyU0Kl2Xe4hVzl9F3w_Cw | ID do anuncio + SKU errado |
| UpSeller | app.upseller.com/pt/products/shopee/active | onde a correcao e aplicada |

Leitura rapida do catalogo sem abrir a planilha:

```
https://docs.google.com/spreadsheets/d/<ID>/gviz/tq?tqx=out:html&gid=<GID>&tq=select%20A,B
```

---

## 3. Nomenclatura de SKU

Padrao: PREFIXO + NUMERACAO + MONTADORA + sufixo opcional.

### 3.1 Prefixos (tipo de produto)

| Prefixo | Significado |
|---|---|
| `GRX` | KIT COMPLETO (farol + botao + rele + chicote) |
| `GR###` | FAROL UNITARIO |
| `GR###-###` | PAR DE FAROIS |
| `MDM` | Acessorio (moldura, grade, suporte) |
| `STS` | LEGADO -> hoje vira `GRX` |
| `FGS0` e `FGS` | LEGADO, anterior ao STS -> hoje vira `GRX` (ex: `FGS0413FD` = `GRX413FD`) |
| `FXS` | LEGADO. Ver item 7, tratado caso a caso |
| `FUN` | LEGADO -> hoje vira `GR` (ver excecoes no item 7) |
| `GR###F` | LEGADO da epoca de fabricacao propria: DESCONSIDERAR |

Exemplos: `GR100` = farol unitario, `GR100-101` = par, `GRX905RN` = kit completo.

### 3.2 Lado (unitario)

- DIREITO = numero PAR (GR100, GR270)
- ESQUERDO = numero IMPAR (GR101, GR269)
- Notacao de par: menor primeiro. `GR269-270` = 269 esquerdo / 270 direito.

### 3.3 Montadora (letras finais)

FT Fiat / VW Volkswagen / RN Renault / FD Ford / CV Chevrolet-GM / HY Hyundai / HD Honda / MS Mitsubishi / CT Citroen / PG Peugeot / TA Toyota / NS Nissan / JP Jeep

### 3.4 Sufixos (lampada / lente)

| Sufixo | Significado | Exemplo |
|---|---|---|
| `-M<encaixe>` | LED | `GRX905RN-MHB4`, `GRX011VW-MH3` |
| `-X<encaixe>` | XENON | `GRX103FT-XH1` |
| `-L<encaixe>` | Halogena | `FUN240-2-LH1`, `GR207-208-LHB4` |
| `-V` | Lente de vidro | `GRX413FD-V`, `GRX914RN-V-MH11` |

Encaixes validos: H1, H3, H4, H7, H8, H11, H13, H16, H27, HB3, HB4, HB5.

REGRA DO LED: **TODO anuncio que inclui LED leva o `M`**, inclusive quando o LED vai como BRINDE.
Sufixos de LED em uso confirmados: `-MHB4`, `-MH8`, `-MH11`, `-MH3`.

---

## 4. Logica de casamento

Ordem: modelo -> ANO DO CARRO -> lado (LD/LE) -> tipo (kit / par / unitario).
Frase do dono: "E POR ANO DE CARRO MINHA LOGICA".

Fontes de candidato, em ordem de forca:

1. **SKU na descricao**: campo `SKU: XXXX` dentro do texto. Costuma vir no padrao antigo `FGS0` -> migrar para `GRX`.
2. **DESC**: `Codigo do Produto: XXX` dentro da descricao. Aplicar conversoes STS->GRX, FGS->GRX, FUN->GR.
3. **IRM**: anuncios irmaos com titulo identico nas 9 lojas que ja tem SKU valido.

No total, 1.637 anuncios tem codigo na descricao (139 codigos distintos).

### PERIGO: descricao copiada de outro produto

Muitas descricoes foram copiadas entre anuncios de modelos diferentes. Exemplos reais encontrados:

- "Kit Farol De Milha **Ford Ranger** 2024 2025" com descricao e SKU FGS0142FT de **Argo/Cronos**
- "Par Farol De Milha **Argo**" com descricao de **Mobi**

OBRIGATORIO: antes de aceitar o codigo da descricao, cruzar o MODELO do titulo com o modelo citado
na descricao E com a coluna B do catalogo. Se nao bater, vai para o relatorio.
(O dono ja sinalizou que vai arrumar essas descricoes depois.)

Sinais tecnicos que a descricao entrega e que definem a variante certa:

- `Botao`: Modelo Original / Alternativo Colante / Tic Tac 2 pinos / Tic Tac 3 pinos / Universal
- `Material da Lente`: Vidro (sufixo `-V`) ou Acrilico/Policarbonato (sem sufixo)
- `Encaixe de Lampada`: define o encaixe do sufixo
- `Moldura`: preta / cromo / cinza / grafite / sem moldura / aro prata
- `Itens Inclusos` ou `Conteudo da Embalagem`: define o TIPO

Tipo do produto:

- KIT: tem botao + rele + chicote
- PAR: 01 lado esquerdo + 01 lado direito
- UNI: 01 farol + lado
- ACC: moldura / grade / suporte
- LAMP: so lampadas

Filtro de coerencia de tipo: KIT -> GRX*, PAR -> GR###-### ou MDM###-###, UNI -> GR### ou MDM###, ACC -> MDM*, LAMP -> (M|X|L|U|Z)H*.

---

## 5. Classificacao de confianca

| Nivel | Criterio | Acao |
|---|---|---|
| ALTA | codigo unico na descricao COM modelo batendo, OU irmaos unanimes com 2+ votos | aplicar |
| MEDIA | irmaos com 75%+ e 3+ votos, ou 1 voto unico | aplicar apos validacao |
| CONFLITO | codigo da descricao diferente do vencedor dos irmaos, ou modelo do titulo diferente do modelo da descricao | relatorio |
| BAIXA | o resto | relatorio |

---

## 6. REGRAS DE OURO (nunca violar)

1. Nunca inventar SKU. Na duvida, relatorio de erro.
2. Sempre mostrar a proposta antes de aplicar.
3. Somente anuncios Shopee.
4. Anuncio itemId 58261760339 (idStr 4398046628667344): NAO EDITAR, precisa ser pausado pelo dono.
5. Linha GM parada para depois: Celta, Prisma, Onix, Cobalt, Spin, S10, Corsa, Montana, Agile, Sonic, Tracker, Cruze, Vectra, Astra, Zafira, Meriva, Blazer, Captiva, Camaro, Classic, Kadett, Monza, Ipanema, Chevette, Trailblazer, Equinox, Joy, Omega, Silverado. Excecao aprovada: os grupos Celta/Prisma ja aplicados no Lote 1 ficam como estao.
6. Nunca usar codigos com sufixo F (GR102F, GR103F...).
7. Nunca escrever na planilha do dono sem autorizacao explicita.
8. SKU existente que nao e MLB TAMBEM pode estar errado. Voto de irmao e candidato, nao prova.
9. Editar so o SKU nao dispara o filtro de anuncio duplicado da Shopee: nao precisa reescrever titulo.
10. Codigo que existe na descricao mas nao existe no catalogo NAO e motivo automatico de recusa: a planilha esta incompleta. Confirmar com o dono e seguir.

---

## 7. Decisoes pontuais ja dadas pelo dono

### Codigos aposentados

- `GR112` / `GR113` / `GR112-113` (universal lente vidro aro prata): **NAO USAR MAIS**. Hoje e `GR100` (LD), `GR101` (LE), `GR100-101` (par).
- `GRX005VW` (Gol G4 botao redondo original): PAUSADO. So existe `GRX011VW`.

### Farol universal

- `GR100-101` e o par universal policarbonato aro prata. Serve C3, Symbol, Kwid, Clio, HR-V, Argo, Mobi, Fiesta Rocam e muitos outros.
- Kit universal correspondente: `GRX905RN`.
- Argo/Mobi com **botao original**: kit e `GRX147FT`. Com botao alternativo colante: `GRX134FT`.
- `FUN100-101` era o codigo antigo de `GR100-101`.

### Farol Fiat com suporte universal (antigo FXS0460)

- Sozinho (unitario) -> `FUN240`
- Par -> `FUN240-2`
- Kit -> `GRX240FT`
- Com lampada halogena H1 -> `FUN240-2-LH1`
- **EXCECAO a regra FUN->GR**: essa familia continua com o prefixo `FUN`, nao vira GR.

### Outros

- `GRX1101CT` e `GRX1111CT` = `GRX905RN`
- Gol G1 87/94: kit = `GRX096VW`, par unitario = `GR269-270`
- Corolla 15/17 par: `GR333-334` e VALIDO mesmo nao estando cadastrado na planilha
- `GRX449FD` e o unico Ka botao universal/tic tac sem led que existe: pode manter mesmo quando o titulo diz 2015 a 2021
- Sem SKU definido, vao para relatorio: MF003, MF004, MF005, BFM478, DLT633, GRXHRV, MDM517-518, GRX600MS, GRX789CV, GRX209HD

### Decisoes do lote 5 (dono, 06/08/2026)

- `FXS1000UN` e farol UNIVERSAL, cabe nos dois lados. Migra para `GR100` (LD), `GR101` (LE) ou `GR100-101` (par).
- `GRX014VW-X8K` estava errado: o correto e `GRX014VW-XHB4` (X de xenon, encaixe HB4). Anuncio continua ATIVO.
- `GRX460FD` e kit valido do Fiesta Rocam (nao esta na planilha de catalogo, mas existe).
- `GRX449FD` fica como esta: so existe a versao tic-tac sem LED.

### Prefixos ainda NAO definidos (relatorio)

`FXS1000UN`, `FXS6002VW`, `FXS188UND-FXS188UNE`, `FLU363-1-2`, `FLU436`, `FLU527YMC`, `RS742BL`, `CHI594`, `ATP907RN-LH8`, `DLHD19`, `DLT633`, `MF003/004/005`, `GRX014VW-X8K`, `GRX037HY-RB4`

---

## 8. API do UpSeller

### Listar anuncios (287 paginas, pageSize maximo 50)

```
POST /api/shopee/product/index      (x-www-form-urlencoded)
sortName=3&sortValue=0&pageNum=N&pageSize=50&searchType=1&searchValue=&productState=NORMAL&state=online
```

searchType=1 = nome do anuncio, searchType=3 = ID do anuncio.
Retorna: name, itemSku, itemId, idStr, description, shopName, price.
Atencao: `itemId` e o numero curto que o dono usa na planilha. `idStr` e o numero longo que a API exige para gravar.

### Gravar SKU quando JA EXISTE SKU antigo

```
POST /api/shopee/product/batch-online-sku      (application/json)
{"type":1,"startNumber":"","isVariantSku":1,"prefixType":0,"suffixType":0,
 "idList":["<idStr>"],"oldReplaceStr":"<antigo>","newReplaceStr":"<novo>"}
```

### Gravar SKU quando o SKU esta VAZIO (2 passos)

```
1) {"type":0,"prefix":"<SKU>","startNumber":"0","suffix":"","isVariantSku":0,
    "prefixType":0,"suffixType":0,"isCover":1,"idList":["<idStr>"]}    -> cria <SKU>0
2) esperar ~2,5s e entao type:1 substituindo <SKU>0 por <SKU>
```

ATENCAO: o caminho "Modificar SKU -> Prefixo" (UI e API) responde "Sucesso" mas NAO grava quando o SKU esta vazio. So o metodo de 2 passos funciona.

---

## 9. UI do UpSeller (fallback manual)

Lista: /pt/products/shopee/active. Abas: Ativos, Esgotados, Inativos, Revisando, Violacao, Excluidos.
Busca por tipo (Nome do Anuncio, SKU, ID do Anuncios, ID da Variante) e "Pesquisar em Massa" (maximo 300 linhas).
Selecionar linhas -> Acoes em Massa -> Editar SKU:

- aba "Gerar SKU": Prefixo, Valor Inicial (OBRIGATORIO), Sufixo, botao "Atualizar para Shopee"
- aba "Modificar SKU": Prefixo, Sufixo, Caracter do SKU -> Substituir com

Banner "Nova versao esta disponivel": fechar no X. NUNCA clicar em "Recarregar Agora" no meio de um lote.

---

## 10. Status

| Lote | Titulos | Anuncios | Resultado |
|---|---|---|---|
| Lote 1 | 49 | 166 | OK, 0 falhas |
| SKUs vazios | - | 72 | OK, 0 falhas |
| Lote 2 | 113 | 319 | OK, 0 falhas |
| Lote 3 (teste cego) | 9 | 74 | OK, 0 falhas |
| Lote 4 (codigo na descricao) | 38 | 225 | OK, 0 falhas |
| TOTAL CORRIGIDO | | 856 | |

Restam aproximadamente 3.836 anuncios com SKU errado, sendo 688 da linha GM (parada).
Definicao de "errado": SKU vazio, comeca com MLB, ou nao bate com o padrao de nomenclatura.

### Lote 3 (teste cego, 10 titulos sorteados)

GRX413FD-V (Ka 15/18) / MDM341-342 (moldura Polo 03/06) / GRX036VW-MH3 (kit Polo 03/06 + led) /
GR333-334 (Corolla 15/17) / GRX011VW-MH3 (Gol G4 + super led) / FUN240-2-LH1 (Grand Siena + lampada) /
GRX095JP-MH8 (Renegade 15/20 + led) / GRX219HD (Fit 15/17) / GR251-252 (Gol-Voyage G7).
Kit Lampadas Scenic 2001-2008 ficou sem SKU, no relatorio.

### Lote 4 (principais)

GRX011VW (Gol G4) / GR205-206 (Polo 02/06 e Saveiro G4) / GRX148FT (Toro) / GRX021VW (Golf 08/10) /
GRX134FT (Mobi/Argo bt alternativo) / GRX321NS (Kicks 21/22) / GRX435FD (EcoSport 18/20) /
GRX524TA (Corolla 2018 grafite) / GRX126FT (Strada Working) / GRX014VW (Gol G5) / GRX403FD (New Fiesta 13) /
GRX449FD (Ka botao universal) / GR333-334 e GR333-334-MH8 (Corolla) / FUN240-2 (Siena, Grand Siena, Punto, Ducato, Uno) /
GR100-101 (Symbol, Kwid, Argo, Fiesta Rocam, HR-V) + migracao de 15 anuncios que estavam com GR112-113.

---

### Lote 5 (14 anuncios, todos OK)

| Titulo | SKU aplicado | Anuncios |
| --- | --- | --- |
| Par Farol De Milha Ford Ranger 2013-2018 (desc: FXS1000UN) | `GR100-101` | 10 |
| Kit Farol De Milha Gol Saveiro Voyage G5 Xenon 8k | `GRX014VW-XHB4` | 3 |
| Kit Farol De Neblina Fiesta Rocam 2010-2014 Branco | `GRX460FD` | 1 |

Verificado na UI depois de gravar: os 3 grupos voltaram com o SKU novo.

## 11. Rejeicoes manuais (nao aplicar sem revisao)

Duster 12/15 com GRX927RN (catalogo diz Logan/Sandero 15/20); Ka 15/19 e Novo Ka 18/20 com GRX905RN;
5 grupos Fiorino com GRX107FT; Gol G4 +Xenon com sufixo -MH3; Strada Working 12/13 com GRX105FT;
Strada suporte com MDM377-378; Gol G5 com GRX032VW; Renegade lente de vidro; Master lente de vidro;
Ford Ranger 2024/2025 com descricao de Argo/Cronos (FGS0142FT).

---

### PAUSADOS pelo dono no lote 5 (67 anuncios, nao mexer)

Motivo geral: produto que ele nao fabrica/vende mais, ou que ainda nao tem codigo definido.

| Codigo na descricao | Produto | Anuncios |
| --- | --- | --- |
| GRX1105CT | Kit Aircross 2018/2019 | 7 |
| GRX1108CT | Kit Citroen C3 22 | 1 |
| GRX322NS | Kit Versa 2020/2022 | 6 |
| GRX474FD | Kit Ka 2015/2021 branco | 5 |
| GRX054VW | Kit Gol/Voyage G8 2018/2023 | 1 |
| FXS6002VW | Farol Up 12/20 lado direito (nao tem) | 9 |
| FXS188UND / FXS188UNE | Universal full LED (nao tem) | 8 |
| FLU363-1-2 | Shooter lateral strobo 36w | 6 |
| FLU436 | Barra slim 12 LED 36w | 5 |
| FLU527YMC | Quadrado 9 LED 27w amarelo | 1 |
| RS742BL | Redondo 14 LED 42w off-road | 7 |
| DLHD19 | DRL HR-V 2019/2020 | 3 |
| DLT633 | Moldura daylight Corolla 15/17 | 1 |
| MF005 | Moldura Gol G5 / Voyage | 5 |
| ZH11 | Par lampada super LED H11 | 5 |

## 12. Armadilhas tecnicas

- Loops longos estouram o timeout de 45s do CDP: rodar como IIFE assincrona solta gravando progresso em uma variavel global e depois consultar.
- Saidas grandes de JS sao truncadas: injetar um `<pre>` na pagina e ler o texto. Remover o `<pre>` antes de clicar na UI, porque ele desloca o layout.
- Regex de extracao do codigo: o trecho do par precisa aceitar 2 a 5 digitos. `-\d` com um digito so trunca `GR102-103` em `GR102-1`.
- O texto depois do codigo gruda no match se a regex for permissiva demais. Delimitar bem.
- Concorrencia segura na gravacao: 3 requisicoes em paralelo com 120ms de intervalo.
- O catalogo tem descricoes duplicadas em codigos diferentes (ex: GRX090JP e GRX093JP tem o mesmo texto). Nesses casos so a foto resolve.
