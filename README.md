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

REGRA DO LED (revisada 06/08/2026 pelo dono)

O que CONTA como LED e gera o sufixo M:

- SUPER LED, SUPER LED 6000K, LED 6K, LED 6000K.
- E a LAMPADA PRINCIPAL do farol, no encaixe do produto (HB4, H8, H11, H3...).
- TODO anuncio que inclui esse LED leva o M, inclusive quando o LED vai como BRINDE.
- Sufixos de LED em uso confirmados: -MHB4, -MH8, -MH11, -MH3.

O que NAO CONTA como LED e NUNCA gera M:

- PINGO LED T10, PINGO T10, LAMPADA T10.
- E outro produto: lampada de posicao/lanterna, minuscula, encaixe T10.
  Nao e a lampada do farol de milha.
- Se a lampada principal for halogena e o anuncio ainda trouxer pingo T10 de brinde,
  o sufixo continua -L<encaixe>. Ex: FUN240-2-LH1 + pingo T10 continua FUN240-2-LH1.
- NUNCA criar sufixo -PINGOT10, -T10 ou parecido. Codigos como STS165FT-LH1-PINGOT10 e
  STS903RN-LH11-PINGOT10 estao errados por construcao (ja foram pausados, ver item 14).

Resumo: 6000k / 6k = LED de verdade = M. Pingo T10 = acessorio = ignorar no SKU.

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

## 13. Mercado Livre - onde ficam os anuncios e como gravar

Os anuncios do ML ficam em **Produtos > Mercado Livre > User Product** (`/pt/products/mercado/up-active`).
Abas: Ativos, Pausados, Revisando, Inativos, Excluidos pelo ML. Visoes: Por Familia e Por Anuncio.

Listagem (form-urlencoded):

    POST /api/mercado/user-product/index
    dataType=2 hasCatalogProduct=0 sortName=3 sortValue=0 pageNum=N pageSize=50
    productState=active|paused|under_review  state=online
    (busca por anuncio: searchType=3 searchValue=MLBxxxxxxxx)

pageSize e limitado a 50. Campos uteis: id (idStr), itemId, userProductId, itemSku, title,
categoryPath, state, description, shopName, soldQuantity, visit, availableQuantity, health,
price, familyName, **errMsg**, hasVariation.

Gravacao de SKU (JSON) - mesmo formato da Shopee, so muda o caminho:

    POST /api/mercado/user-product/batch-online-sku
    {"type":1,"startNumber":"","isVariantSku":1,"prefixType":0,"suffixType":0,
     "idList":["<idStr>"],"oldReplaceStr":"<sku antigo>","newReplaceStr":"<sku novo>"}

Aceita varios ids no mesmo idList quando o par antigo/novo e igual.
Na interface: selecionar linhas > Acoes em Massa > Editar SKU > aba **Modificar SKU** >
"Caracter do SKU" + "Substituir com" > Atualize ao Mercado Livre.

Pausar: selecionar > Acoes em Massa > Mais > Pausar > confirmar.

### Cuidado: resposta code:0 nao garante gravacao

O endpoint sempre responde `{"code":0,"msg":"success"}` e enfileira um processo
(`PRODUCT:MERCADO_USER_PRODUCTACTION_PRODUCT_BATCH_SKUONLINE:...`). A gravacao pode falhar
depois, em silencio. **Sempre reconferir** relendo `/index` e comparando itemSku.
Reenviar ajuda nos casos transitorios; o que nao muda depois de 3 tentativas esta travado.

### Motivo real de travamento: atributo invalido no ML

Quando o campo `errMsg` traz

    error-3510-invalid.item.attribute.values: Attribute [SIDE_POSITION] is not valid,
    item values [(null:Ambos os lados)]

o Mercado Livre recusa **qualquer** atualizacao do anuncio, inclusive SKU. Nao e problema do
UpSeller. Precisa corrigir o atributo Lado/Posicao no anuncio antes.

## 14. Decisoes do dono - lote 6

| Codigo antigo | Decisao | Observacao |
|---|---|---|
| STS256FT, GRX230FT, STS230FT | **GRX132FT** | "TODOS ESSAS STRADAS SAO GRX132FT". Botao touch/universal nao existe mais no estoque |
| STS905K-MH11 | **GRX905RN-MH11** | Ford Ka botao alternativo; o -MH11 indica o LED |
| STS006VW | **GRX006VW** | Produto continua ATIVO, so troca o prefixo |
| GRX086VW-LH3 | **PAUSAR** | Golf 98/02. Unico ativo pausado: MLB6574344204 |
| STS165FT-LH1-PINGOT10 | PAUSADO | sem vendas (MLB4586708871) |
| STS903RN-LH11-PINGOT10 | PAUSADO | sem vendas (MLB4586681555) |
| STS010VW | GRX032VW (**em conferencia**) | ver secao 15 |
| Saveiro G6 sem moldura | mesmo bloco do Gol G5 = GR207-208 | ver secao 15 |

## 15. Pendencia aberta - STS010VW / Saveiro G6

O dono indicou `STS010VW = GRX032VW`, mas no catalogo:

- **GRX032VW** = KIT FAROL DE MILHA **POLO 12/16** MOLDURA CROMO BOTAO QUADRADO MODELO ORIGINAL
- **GRX014VW** = KIT FAROL DE MILHA **GOL G5** MOLDURA CROMO BOTAO MODELO ORIGINAL
- **GRX028VW** = KIT FAROL DE MILHA **GOL G5** MOLDURA CROMO BOTAO TIC TAC 2 PINOS
- **GR207 / GR208** = FAROL MILHA GOL G5 / POLO 07/11 / FOX 10/14 POLICARBONATO LE / LD

Todos os anuncios STS010VW tem titulo **Gol G5 2008 a 2012**, nao Polo 12/16.
Por isso nada foi gravado: aguarda confirmacao. Sao 14 anuncios (4 ML + 10 Shopee).

Dois anuncios Shopee do grupo nao sao Gol G5 e tambem esperam definicao:

- 23899335537 - Saveiro G6 2013/2016 "Sem Moldura", mas a descricao lista 2 farois +
  **2 molduras** + botao modelo original + halogena HB4 + pingo T10. E kit completo.
- 21197919410 - "Gol Polo Fox Golf Voyage", generico, sem modelo definido.

## 16. Resultado do lote 6

| Bloco | Enviados | Gravados |
|---|---|---|
| ML-1 limpo (STS/FGS/FXS0->GRX, FUN->GR, -TIC, codigos aposentados) | 239 | ver total |
| ML-2 pares GR + GRX905RN + STS905K-MH11 | 47 | ver total |
| ML-3 resolvidos por evidencia de botao | 7 | ver total |
| Stradas -> GRX132FT (ML) | 6 | 5 (1 em Revisando nao aceita) |
| Stradas -> GRX132FT (Shopee) | 2 | 2 |
| STS006VW -> GRX006VW | 1 | 1 |
| **Total** | **302** | **248** |

54 anuncios nao aceitaram a gravacao: 39 com o erro SIDE_POSITION do ML, 15 sem mensagem
mesmo apos 3 reenvios. Lista para conferir com foto:

| ID do anuncio | SKU atual | SKU desejado |
|---|---|---|
| MLB6627863170 | STS145FT | GRX145FT |
| MLB6627863234 | STS145FT | GRX145FT |
| MLB6627863186 | STS145FT | GRX145FT |
| MLB6627863208 | STS145FT | GRX145FT |
| MLB6627863228 | STS145FT | GRX145FT |
| MLB6627863178 | STS145FT | GRX145FT |
| MLB6627863172 | STS145FT | GRX145FT |
| MLB6627863196 | STS145FT | GRX145FT |
| MLB6627863216 | STS145FT | GRX145FT |
| MLB6627863158 | STS145FT | GRX145FT |
| MLB6627863198 | STS145FT | GRX145FT |
| MLB6627863218 | STS145FT | GRX145FT |
| MLB6627863160 | STS145FT | GRX145FT |
| MLB6627863230 | STS145FT | GRX145FT |
| MLB6627863238 | STS145FT | GRX145FT |
| MLB6627863212 | STS145FT | GRX145FT |
| MLB6627863174 | STS145FT | GRX145FT |
| MLB6627863184 | STS145FT | GRX145FT |
| MLB6627863206 | STS145FT | GRX145FT |
| MLB6627863200 | STS145FT | GRX145FT |
| MLB6627863220 | STS145FT | GRX145FT |
| MLB6627863162 | STS145FT | GRX145FT |
| MLB6627863168 | STS145FT | GRX145FT |
| MLB6627863232 | STS145FT | GRX145FT |
| MLB6627863226 | STS145FT | GRX145FT |
| MLB6627863154 | STS145FT | GRX145FT |
| MLB6627863202 | STS145FT | GRX145FT |
| MLB6627863222 | STS145FT | GRX145FT |
| MLB6627863188 | STS145FT | GRX145FT |
| MLB6627863210 | STS145FT | GRX145FT |
| MLB6627863190 | STS145FT | GRX145FT |
| MLB6627863182 | STS145FT | GRX145FT |
| MLB6627863214 | STS145FT | GRX145FT |
| MLB4455302919 | FUN112 | GR100-101 |
| MLB4650858208 | STS036VW | GRX036VW |
| MLB3484510335 | STS095JP | GRX095JP |
| MLB4650910482 | STS406FD-UHB4 | GRX406FD-UHB4 |
| MLB3504482145 | FGS0319NS | GRX319NS |
| MLB3688155717 | FUN205-206 | GR205-206 |
| MLB4658464840 | FUN205-206 | GR205-206 |
| MLB3696032215 | FUN205-206 | GR205-206 |
| MLB3526333829 | STS537TA | GRX537TA |
| MLB3307995739 | STS207HD-LH8 | GRX207HD-LH8 |
| MLB2080246362 | STS101FT | GRX101FT |
| MLB2070941163 | STS207HD | GRX207HD |
| MLB2012063205 | STS100FT | GRX100FT |
| MLB4696403604 | STS147FT-MH8 | GRX147FT-MH8 |
| MLB3496633197 | STS207HD | GRX207HD |
| MLB3491721601 | STS154FT | GRX154FT |
| MLB3485735595 | STS905RN-MH11 | GRX905RN-MH11 |
| MLB3479108887 | STS906RN | GRX906RN |
| MLB3479070441 | FUN100-101-MH8 | GR100-101-MH8 |
| MLB6627863738 | FUN118 | GR118 |
| MLB6627863740 | FUN117 | GR117 |
| MLB3923513762 | FUN207-208-XHB4 | GR207-208-XHB4 |
| MLB4456127595 | STS230FT | GRX132FT |
| MLB4818991419 | GRX230FT | GRX132FT |

Acumulado desde o lote 1: 856 Shopee + 248 Mercado Livre.

---

## 17. Escopo ativo de trabalho

Ordem do dono: "tudo que mexer de agora em diante so faz nessas lojas, as outras vou inativar".
Vale para correcao de SKU, pausa, inativacao, preco e promocao.

| Canal | Lojas EM ESCOPO |
|---|---|
| Mercado Livre | AUTOPLUS, Jz acessorios |
| Shopee | MULTIPARTS, REIS SHOPEE |

FORA DE ESCOPO, nao tocar: AUTOPLUS SHOPEE, Gerson, GB AUTO SHOPEE, MALVA, Machado Prime Auto,
PSHOP STORE, navattashop, Ama Ecommerce, MACHADO, FAROIS BR.

Aviso importante do UpSeller: os anuncios de ML das lojas AUTOPLUS, Jz acessorios, Ama Ecommerce,
MACHADO e FAROIS BR foram migrados para User Product. A lista antiga /products/mercado/active so
mostra 149 anuncios legados e a busca por SKU la retorna 0. Trabalhar sempre em
/products/mercado/up-active.

---

## 18. Pausas e inativacoes em massa (06/08/2026)

Regra do dono: "ANTES LEVANTE AS VENDAS". Nenhuma pausa sai sem levantamento de vendas antes.

### 18.1 Linha BFM - pausar tudo

| Canal | Filtro usado | Anuncios | Resultado |
|---|---|---|---|
| Shopee | SKU busca exata BFM468 | 102 | Sucesso 102 (REIS 51 / MULTIPARTS 51), falhou 0 |
| Shopee | SKU comeca com BFM | 38 | Sucesso 38 (REIS 16 / MULTIPARTS 22), falhou 0 |
| ML User Product | SKU comeca com BFM | 88 | Sucesso 88 (AUTOPLUS 87 / Jz acessorios 1), falhou 0 |

Total: 228 anuncios BFM pausados.

Vendas da linha BFM na Shopee: dos 140 anuncios, so 2 tiveram venda, somando 8 unidades.

EXCECAO PEDIDA: "menos o da TORO que nao sei o SKU". Levantamento feito antes de pausar:
nao existe nenhum anuncio BFM com Toro no titulo nas 4 lojas em escopo (ML e Shopee).
O unico botao de milha de Toro sem SKU e MLB4239045920 (Interrupror Farol Milha Fiat Toro Todas
Com Chicote Rele), da loja FAROIS BR, que esta FORA DE ESCOPO e nao foi tocado.
Conclusao: nenhum Toro foi pausado, a excecao foi respeitada.

Distribuicao dos SKUs BFM em escopo, para referencia futura:

| SKU | ML | Shopee |
|---|---|---|
| BFM468 | 62 | 102 |
| BFM-464 | 15 | 24 |
| BFM451 | 2 | 4 |
| BFM-CH-TIC | 2 | 3 |
| BFM-G6-CHI | 2 | 2 |
| BFM-ETIOS | 2 | 0 |
| BFMAS016 | 1 | 2 |
| BFM460-CH | 1 | 1 |
| BFM-CORSA-CHI | 1 | 0 |
| BFM478 | 0 | 2 |

### 18.2 Etios - dono nao trabalha mais

| Canal | Anuncio | SKU | Vendas | Acao |
|---|---|---|---|---|
| ML | MLB6681350548 | GRX159-160 | 0 | pausado |
| ML | MLB3348496554 | GR159-160 | 12 | pausado |
| ML | MLB4386427336 | GR159-160 | 3 | pausado |
| Shopee | 58261748042 | GRX159-160 | 0 | inativado |
| Shopee | 22099521542 | GRX159-160 | 0 | inativado |
| Shopee | 58261256567 | GR159-160 | 0 | inativado |
| Shopee | 58211405015 | GR159-160 | 0 | inativado |
| Shopee | 58261358005 | GR159-160 | 0 | inativado |

ML: sucesso 3, falhou 0 (conferido depois: Ativos 0 / Pausados 4).
Shopee: sucesso 5, falhou 0 (REIS 1 / MULTIPARTS 4).
GRX517TA (MLB3263985733) ja estava pausado antes.

PENDENCIA FISICA: MLB4386427336 tinha 27 unidades no Fulfillment do ML quando foi pausado.
Precisa decidir a retirada desse estoque.

### 18.3 GRX010VW - inativar o que nao tem venda

Inativados na Shopee, todos com 0 vendas: 58211775883, 58211773002, 58261435772, 58255157570.
MANTIDO ATIVO: 21197919410, porque tem 18 vendas.
O id 23899335537 nao aparece em nenhuma aba (Ativos, Esgotados, Inativos, Revisando, Violacao e
Excluidos todos em 0). Nada a fazer.

---

## 19. Decisoes do dono - lote 7

| Codigo antigo | Decisao do dono | Situacao |
|---|---|---|
| STS118VW | GRX019VW | APLICADO |
| STS125VW | sugeriu GRX033VW | EM ABERTO, ver 19.2 |

### 19.1 GRX019VW - codigo NOVO

Aplicado em 2 anuncios: ML MLB3752180279 (AUTOPLUS) e Shopee 58211393971 (MULTIPARTS).
O ML so gravou na 2a tentativa; a Shopee gravou de primeira. Ambos reconferidos via /index.

O slot estava livre: o catalogo pula de GRX018VW direto para GRX020VW.
CADASTRAR NA PLANILHA:

    GRX019VW = KIT FAROL DE MILHA GOL G5 09/13 MOLDURA PRETA BOTAO ALTERNATIVO COLANTE

Evidencia da descricao dos anuncios: "2 Farois de Milha, 2 Molduras Pretas, 1 Chicote,
1 Botao Alternativo Colante, 1 Rele", encaixe HB4.

ATENCAO PARA CONFERIR NA FOTO: o dono descreveu STS118VW como "G5 tic tac sem moldura", mas a
descricao dos anuncios diz moldura preta + botao colante. Os codigos de G5 que ja existiam sao:
GRX012VW (cromo + colante), GRX014VW (cromo + original), GRX016VW (preta + original),
GRX028VW (cromo + tic tac), GRX031VW (preta + tic tac). Nenhum era preta + colante, que e
exatamente o buraco que GRX019VW preenche.

### 19.2 STS125VW - NAO aplicar GRX033VW

O dono chutou GRX033VW ("acho que e"), mas o proprio catalogo desmente:

| Codigo | Descricao no catalogo |
|---|---|
| GRX033VW | KIT FAROL DE MILHA POLO 03/06 MOLDURA PRETA BOTAO MODELO ORIGINAL |
| GRX052VW | KIT FAROL DE MILHA POLO 07/12 MOLDURA PRETA BOTAO TIC TAC 2 PINOS |

Os anuncios STS125VW tem titulo "Kit Farol Milha Polo 2007 A 2010 11 Botao Modelo Tic Tac Branco"
e descricao "2 Molduras Pretas + 1 Botao Alternativo Tic Tac", encaixe HB4.
Ano bate, moldura bate, botao bate: o casamento correto e GRX052VW, nao GRX033VW.
GRX033VW erra no ano (03/06) e no botao (modelo original).

A regra "se nao tiver vendas ja sabe" NAO se aplica aqui, porque estes anuncios VENDEM:

| Anuncio | Loja | Vendas | Visitas | Estoque | Preco |
|---|---|---|---|---|---|
| MLB4793353904 | AUTOPLUS | 17 | 283 | 98 | 196,45 |
| MLB3743814673 | AUTOPLUS | 4 | 60 | 995 | 196,63 |
| id 4398046878538169 | AUTOPLUS | - | - | - | ja pausado |

Nada foi gravado e nada foi pausado. Aguarda o dono confirmar GRX052VW.

---

## 20. Mapa da API do UpSeller (base do agente de precos e promocoes)

Extracao automatica dos bundles JS do app: 2.345 endpoints em 74 arquivos.
Script para regerar o mapa quando quiser, rodando no console de app.upseller.com:

    const srcs=[...document.querySelectorAll('script[src]')].map(s=>s.src);
    const set=new Set();
    for (const s of srcs) {
      try {
        const t = await (await fetch(s)).text();
        (t.match(/\/api\/[A-Za-z0-9_\-\/]{3,}/g)||[]).forEach(m=>set.add(m));
      } catch(e) {}
    }
    window.__API=[...set].sort();

Convencao de nomes observada em todos os canais:

| Sufixo | Significa |
|---|---|
| index | listar |
| check-* | validar antes de gravar |
| batch-* | grava so no banco do UpSeller |
| batch-online-* | grava E publica no marketplace |
| sync* | puxa do marketplace para o UpSeller |
| get-count, all-state-count | contadores das abas |

Quase tudo e POST. Listagem usa x-www-form-urlencoded; gravacao em lote usa JSON.

### 20.1 Precos

| Canal | Endpoints |
|---|---|
| Shopee | /api/shopee/product/batch-price, /batch-online-price, /edit-online-price |
| Shopee | /api/shopee/product/check-price, /check-single-price, /check-edit-price |
| Shopee | /api/shopee/product/import-price, /export-price |
| ML User Product | /api/mercado/user-product/batch-price, /batch-online-price |
| ML User Product | /api/mercado/user-product/check-price, /check-edit-price |
| ML User Product | /api/mercado/user-product/batch-update-wholesale-price |
| ML Familia | /api/mercado/family-product/batch-price, /batch-online-price, /edit-online-price |
| ML anuncio | /api/mercado/product/edit-online-price, /batch-price, /batch-sync-price |
| ML apoio | /api/mercado/product/listing-price, /get-netPricing, /listing-estimated-cost |
| ML apoio | /api/mercado/product/sync-price-suggestion, /sync-price-win, /catalog-price |
| ML automatico | /api/mercado/product/save-auto-price, /sync-auto-adjust-price |
| Templates | /api/selling-price-template/list, /get, /save, /delete, /set-default |

### 20.2 Promocoes

| Canal | Endpoints |
|---|---|
| Shopee desconto | /api/shopee/product/batch-promotion-price, /edit-discount, /list-discount |
| Shopee desconto | /api/shopee/product/promotion-list, /batch-promotion-list, /check-promotion |
| Shopee campanha | /api/shopee/product/get-activity, /sync-activity |
| Shopee flash sale | /api/shopee/promotion/flash-sale/index, /detail, /sync, /get-count |
| Shopee flash sale | /api/shopee/promotion/flash-sale/batch-add-promotion, /batch-add-product |
| Shopee flash sale | /api/shopee/promotion/flash-sale/update-promotion-product, /update-status |
| Shopee flash sale | /api/shopee/promotion/flash-sale/delete, /batch-delete, /get-time-sale |
| Shopee renovacao | /api/shopee/promotion/edit-auto-renew, /renew-detail, /renew-usage |
| Shopee renovacao | /api/shopee/promotion/already-renew-or-in-progress, /list-fail-product |
| ML promocao | /api/mercado/promotion/seller-index, /seller-del, /seller-del-batch |
| ML promocao | /api/mercado/promotion/product/batch-add, /batch-delete, /get-count |
| ML promocao | /api/mercado/product/create-promotion, /batch-create-promotion |
| ML promocao | /api/mercado/product/batch-edit-promotion, /delete-promotion |
| ML promocao | /api/mercado/product/get-promotion-price, /get-promotion-count |
| ML campanha | /api/mercado/campaign/by-listing-type, /sync-one |
| ML desconto | /api/mercado/product/sync-discount, /sync-discount-id |
| Geral | /api/promotion/renew/edit-auto-renew, /query-execution-status, /list-add-fail-items |

### 20.3 Estoque

| Canal | Endpoints |
|---|---|
| Shopee | /api/shopee/product/batch-stock, /batch-online-stock, /online-stock |
| ML User Product | /api/mercado/user-product/batch-stock, /batch-online-stock |

---

## 21. Perfil do agente - como operar

Este repo e a memoria do trabalho. Um agente novo deve seguir esta ordem:

1. Ler este README inteiro ANTES de qualquer acao.
2. Confirmar o escopo do item 17. Nunca agir fora das 4 lojas.
3. Montar o cache em memoria antes de operar em lote:
   - window.__ML via /api/mercado/user-product/index (pageSize 50, paginar)
   - window.__SP via /api/shopee/product/index (pageSize 50, paginar)
   - guardar id/idStr, itemId, itemSku, title, description, shopName, state, soldQuantity, price
4. NUNCA usar navegacao de pagina cheia no UpSeller: recarregar destroi o cache.
   Navegar pelo menu Produtos, que e SPA.
5. Levantar VENDAS antes de qualquer pausa, inativacao ou mudanca de preco.
6. Mostrar a proposta completa e esperar OK do dono antes de gravar.
7. Depois de gravar, RECONFERIR relendo /index. code:0 nao e prova de gravacao.
   Reenviar ate 3x. O que nao mudar em 3 tentativas esta travado (ver SIDE_POSITION no item 13).
8. Quando o dono chutar um codigo ("acho que e X"), CONFERIR no catalogo antes de aplicar.
   Ja aconteceu de o chute estar errado (ver 19.2).

Instancia separada de precos e promocoes: pode rodar em paralelo com a de SKU, mas vale o mesmo
escopo do item 17 e a mesma regra de reconferencia. Preco e promocao mexem em dinheiro, entao
sempre mostrar a lista com preco atual -> preco novo e esperar aprovacao explicita.
Nunca aplicar desconto ou flash sale em lote sem a lista revisada.

---

## 22. Status consolidado

| Frente | Anuncios | Resultado |
|---|---|---|
| Lotes 1 a 5 (Shopee, SKU) | 856 | OK |
| Lote 6 (ML + Shopee, SKU) | 248 de 302 | 54 travados, 39 por SIDE_POSITION |
| Lote 7 - SKU GRX019VW | 2 | OK |
| Lote 7 - pausas BFM | 228 | OK, 0 falhas |
| Lote 7 - pausas Etios | 8 | OK, 0 falhas |
| Lote 7 - inativacoes GRX010VW | 4 | OK |

Lote 7 de correcao de SKU: 119 jobs montados e conferidos, aguardando GO do dono.
O lote 7 nao contem nenhum item BFM, Etios ou GRX010VW, entao as pausas acima nao o afetam.

Pendencias abertas:

- STS125VW: confirmar GRX052VW (item 19.2).
- GRX019VW: cadastrar na planilha de catalogo (item 19.1).
- MLB4386427336: 27 unidades paradas no Fulfillment do ML.
- Linha GM continua parada, por decisao do dono.
