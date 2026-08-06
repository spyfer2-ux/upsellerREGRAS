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
| SKU CORRETO (catalogo) | Sheets id 12Rhj2S7P3Z8yBr5zd-KFcykWzMR6145zTMuhfXEkNWs, gid 1575529579 | Coluna A = SKU (autoritativa), Coluna B = descricao |
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
| `FGS0` e `FGS` | LEGADO, ainda mais antigo que o STS -> hoje vira `GRX` (ex: `FGS0413FD` = `GRX413FD`) |
| `FUN` | LEGADO -> hoje vira `GR` (ver excecao no item 7) |
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

1. **SKU na descricao**: campo `SKU: XXXX` dentro do texto (aparece em ~15% dos anuncios). Costuma vir no padrao antigo `FGS0` -> migrar para `GRX`.
2. **DESC**: `Codigo do Produto: XXX` dentro da descricao (~6% dos anuncios). Aplicar conversoes STS->GRX, FGS->GRX, FUN->GR.
3. **IRM**: anuncios irmaos com titulo identico nas 9 lojas que ja tem SKU valido.

Sinais tecnicos que a descricao entrega e que definem a variante certa:

- `Botao`: Modelo Original / Alternativo Colante / Tic Tac 2 pinos / Tic Tac 3 pinos
- `Material da Lente`: Vidro (sufixo `-V`) ou Acrilico/Policarbonato (sem sufixo)
- `Encaixe de Lampada`: define o encaixe do sufixo
- `Moldura`: preta / cromo / cinza / sem moldura / aro prata
- `Itens Inclusos` ou `Conteudo da Embalagem`: define o TIPO

Tipo do produto sai do bloco "Conteudo da Embalagem" / "Itens Inclusos":

- KIT: tem botao + rele + chicote
- PAR: 01 lado esquerdo + 01 lado direito
- UNI: 01 farol + lado
- ACC: moldura / grade / suporte
- LAMP: so lampadas

Filtro de coerencia de tipo: KIT -> GRX*, PAR -> GR###-### ou MDM###-###, UNI -> GR### ou MDM###, ACC -> MDM*, LAMP -> (M|X|L|U|Z)H*.

Validacao de catalogo: retirar os sufixos de lampada/lente e a base tem que existir no catalogo. Em pares, os dois numeros precisam existir.

Depois disso SEMPRE conferir manualmente modelo + ano contra a coluna B do catalogo.

---

## 5. Classificacao de confianca

| Nivel | Criterio | Acao |
|---|---|---|
| ALTA | codigo unico na descricao, OU irmaos unanimes com 2+ votos | aplicar |
| MEDIA | irmaos com 75%+ e 3+ votos, ou 1 voto unico | aplicar apos validacao |
| CONFLITO | codigo da descricao diferente do vencedor dos irmaos | relatorio |
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
10. Codigo que existe na descricao mas NAO existe no catalogo vai para o relatorio ate o dono confirmar.

---

## 7. Decisoes pontuais ja dadas pelo dono

- `GRX1101CT` e `GRX1111CT` = `GRX905RN`
- `GRX905RN` e o par universal, cabe em muitos carros. No C3 o par e `GR100-101` e o kit e `GRX905RN`.
- `FUN100-101` era o codigo antigo de `GR100-101`
- Gol G1 87/94: kit = `GRX096VW`, par unitario = `GR269-270`
- `GRX240FT` = 2x FUN240, nao tem SKU -> relatorio
- IDs 58261256371, 58211774435, 58261753375 -> `GR100-101`
- Corolla 15/17 par: `GR333-334` e VALIDO mesmo nao estando cadastrado na planilha
- **EXCECAO a regra FUN->GR**: o `GR240-2` deve ser gravado como `FUN240-2` (ex: `FUN240-2-LH1`, par de farol Fiat com suporte universal + lampada H1)
- Gol G4 botao modelo original: `GRX005VW` (redondo) esta PAUSADO. So existe o `GRX011VW`. Usar sempre `GRX011VW`.
- Sem SKU definido, vao para relatorio: MF005, BFM478, DLT633, GRXHRV, MDM517-518, GRX600MS, GRX789CV, GRX209HD

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

ATENCAO: o caminho "Modificar SKU -> Prefixo" (tanto na UI quanto na API) responde "Sucesso" mas NAO grava quando o SKU esta vazio. So o metodo de 2 passos funciona.
Sempre usar o idStr real vindo da listagem, nunca deduzir.

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
| TOTAL CORRIGIDO | | 631 | |

Restantes: aproximadamente 4.047 anuncios com SKU errado (690 da linha GM parada).
Definicao de "errado": SKU vazio, comeca com MLB, ou nao bate com o padrao de nomenclatura.

### Lote 3 detalhado (teste cego, 10 titulos sorteados)

| Titulo | SKU aplicado |
|---|---|
| Kit Farol Milha Ka 2015-2018 | GRX413FD-V |
| Par Moldura Grade Polo 2003-2006 | MDM341-342 |
| Kit Farol Milha Polo 2003-2006 + Led | GRX036VW-MH3 |
| Par Farolete Corolla 2015-2017 | GR333-334 |
| Kit Farol Milha Gol G4 + Super Led H3 | GRX011VW-MH3 |
| Par Farol Milha Grand Siena 2018-2021 + Lampada | FUN240-2-LH1 |
| Kit Farolete Jeep Renegade 2015-2020 + Led | GRX095JP-MH8 |
| Kit Farol Milha Fit 2015-2017 | GRX219HD |
| Par Farol Milha Gol/Voyage G7 2016-2018 | GR251-252 |
| Kit Lampadas Scenic 2001-2008 | RELATORIO, sem SKU no catalogo |

---

## 11. Rejeicoes manuais (nao aplicar sem revisao)

Casos em que o voto dos irmaos ou da descricao estava errado:
Duster 12/15 com GRX927RN (catalogo diz Logan/Sandero 15/20); Ka 15/19 e Novo Ka 18/20 com GRX905RN; Ka 15/21 com GRX449FD; 5 grupos Fiorino com GRX107FT; Gol G4 +Xenon com sufixo -MH3; Strada Working 12/13 com GRX105FT; Strada suporte com MDM377-378; Gol G5 com GRX032VW; Renegade lente de vidro; Kwid GR112-113; Master lente de vidro.

---

## 12. Armadilhas tecnicas

- Loops longos estouram o timeout de 45s do CDP: rodar como IIFE assincrona solta gravando progresso em uma variavel global e depois consultar.
- Saidas grandes de JS sao truncadas: injetar um `<pre>` na pagina e ler o texto. Remover o `<pre>` antes de clicar na UI, porque ele desloca o layout.
- Ao validar a base do codigo no catalogo, remover primeiro os sufixos (-M / -X / -L / -V). Regex simples falha em codigos com letras no fim, tipo `GRX702CV`.
- Concorrencia segura na gravacao: 3 requisicoes em paralelo com 120ms de intervalo.
- O catalogo tem descricoes duplicadas em codigos diferentes (ex: GRX090JP e GRX093JP tem exatamente o mesmo texto). Nesses casos so a foto resolve.
