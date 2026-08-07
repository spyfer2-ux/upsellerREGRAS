# 29. REGRA DE CRIACAO E DUPLICACAO DE ANUNCIOS (07/08/2026)

Autorizacao do dono: aceitou trocar "muitos titulos para o mesmo produto" por "um anuncio por
variante real, replicado entre lojas, com compatibilidades preenchidas". Termo FAROLETE descartado.

## 29.1 O QUE AS PLATAFORMAS PROIBEM (fontes oficiais, lidas em 07/08/2026)

MERCADO LIVRE - Central do Vendedor:
- "Por que evitar anuncios duplicados de autopecas": duplicado = mesmo produto com as MESMAS
  CONDICOES DE VENDA. Na categoria "Pecas de Carros e Caminhonetes" (a nossa) o duplicado e
  CANCELADO. Em Motos/Caminhoes/Agro/Nautica/Pneus e apenas pausado, e ali sim vale diferenciar
  por titulo, foto e descricao. A instrucao oficial: nao criar mais de um anuncio para o mesmo
  produto e adicionar os veiculos compativeis no anuncio com mais exposicao.
- "Anuncios duplicados: o que sao e como evita-los": nao sao permitidos e sao cancelados
  automaticamente por descumprir as Politicas de Cadastro de Anuncios. Se ja existirem, o ML
  OCULTA o duplicado e mantem ativo so o de melhor visibilidade. Caminhos permitidos: variacoes,
  kits, ou anuncios realmente diferenciados. "Anunciar semelhante" e "Vender um igual" copiam os
  dados mas EXIGEM mudar as condicoes de venda.
- "Como gerenciar os anuncios com eficiencia": escala de sancao = anuncio pausado, cancelado e,
  no pior caso, CONTA DESATIVADA. Existe a infracao "usar tecnicas proibidas", definida como
  acoes com o objetivo de contornar ou violar as politicas.
- "Como fazer um bom titulo": estrutura produto + marca + modelo + algumas especificacoes.
  Em autopecas os veiculos compativeis vao na secao de COMPATIBILIDADES, nao no titulo.
  Nao repetir info que ja esta na ficha; nao por cor/tamanho; nao por frete gratis, parcelamento
  nem promocao.

SHOPEE BRASIL - "[Orientacoes] Guia de Violacao de Anuncio" (help.shopee.com.br, artigo 76225):
- SPAM e uma das 4 violacoes e cobre TRES coisas ao mesmo tempo: praticas para manipular os
  resultados da pesquisa; termos de pesquisa IRRELEVANTES OU EXCESSIVOS no titulo ou descricao;
  e ANUNCIOS DUPLICADOS. A recomendacao deles e transformar anuncios muito parecidos em VARIACOES.
- Consequencia: anuncio suspenso ou deletado. Deletado gera PONTOS DE PENALIDADE. Muitos pontos
  restringem privilegios de venda e LIMITAM A COTA DE ANUNCIOS POR 28 DIAS.

CONCLUSAO: titulo diferente NAO transforma o mesmo produto em produto diferente. O plano de criar
milhares de anuncios do mesmo produto so variando palavra e exatamente o que gera cancelamento no
ML e congelamento de cota na Shopee. Esta secao 29 substitui aquele plano.

## 29.2 AS TRES BASES LEGITIMAS DE REPLICACAO

BASE 1 - VARIANTE REAL. Um anuncio por variante que o catalogo distingue de fato:
botao (original / alternativo colante / tic tac 2 pinos / tic tac 3 pinos / universal);
lente (vidro = sufixo -V / acrilico); moldura (preta / cromo / cinza / grafite / sem moldura /
aro prata); lampada (Super LED = M, xenon = X, halogena = L, por encaixe); tipo (KIT GRX /
PAR GR###-### / UNITARIO GR### / ACESSORIO MDM). Duas variantes = dois produtos, podem coexistir.

BASE 2 - LOJA DIFERENTE. Duplicidade e julgada dentro da mesma conta de vendedor. O mesmo anuncio,
com o mesmo titulo, replicado em OUTRA loja e permitido. O volume cresce na HORIZONTAL (14 lojas),
nunca na vertical dentro de uma loja.

BASE 3 - COMPATIBILIDADES. Nao e anuncio novo: e o canal oficial de descoberta em autopecas.
Preencher a ficha de compatibilidades do anuncio de maior exposicao rende mais que espalhar anos
no titulo, e e o que o proprio ML manda fazer.

NAO PODE: mesmo SKU + mesma loja + mesmas condicoes de venda, mudando so a palavra do titulo.

## 29.3 ELEGIBILIDADE (checar antes de criar)
1. SKU valido pela gramatica do item 3 e coerente com o catalogo em MODELO, ANO e TIPO.
2. Maximo 6 anuncios daquele SKU na loja alvo.
3. Fora de qualquer lista de bloqueio, parqueio, linha GM (sufixo CV) ou produto descontinuado.
4. Anuncio de ORIGEM sem atributo invalido (secao 28): SIDE_POSITION com value_id null ou
   dimensao de embalagem mal formada SE PROPAGA para a copia e trava o anuncio novo.
5. Origem nao pode estar under_review.
6. SKU errado, vazio ou legado: corrigir ANTES, replicar depois.

## 29.4 PRIORIDADE: CONCORRENCIA BAIXA ANTES DE VENDA ALTA
Ordenar por vendas-por-anuncio dividido pela concorrencia da busca. Nicho pequeno com venda alta e
muito mais barato que cabeca de cauda saturada. Concorrencia lida em lista.mercadolivre.com.br.

| Busca | Concorrencia | SKU nosso | Vendas | Anuncios |
|---|---|---|---|---|
| farol de milha oroch | 677 | GRX905RN-LH8 | 136 | 2 |
| farol de milha triton | 961 | GRX602MS | 61 | 4 |
| farol de milha master | 1.632 | GR342 | 57 | 4 |
| farol de milha hilux sw4 | 1.867 | GR306-307 | 89 | 4 |
| farol de milha onix plus | 2.560 | GR955-956 (GM congelado) | 111 | 4 |
| farol de milha fiesta | 5.498 | GRX406FD-MHB4 | 277 | 5 |
| farol de milha saveiro | 8.099 | GRX054VW-MH8 (bloqueado) | 460 | 4 |
| farol de milha (generico) | +9.999 | - | - | - |

## 29.5 TITULO
Limite duro: 60 caracteres no Mercado Livre, 120 na Shopee, contados ANTES de enviar.
Estrutura: TIPO + VARIACAO + MODELO + GERACAO + ANOS + ESPECIFICACAO TECNICA.

Variacoes permitidas, em ordem de forca medida no autocomplete do ML:
MILHA (forte) > NEBLINA (forte) > AUXILIAR (medio, puxa moto e universal).
FAROLETE DESCARTADO por ordem do dono (07/08/2026). Motivo: no autocomplete do ML o termo
"farolete" devolve lanterna (recarregavel, tatico, cabeca, moto), ou seja intencao errada. Na
Shopee isso se enquadra em "termo de pesquisa irrelevante", que e a definicao de spam deles.

GERACAO ANTES DO ANO. As buscas relacionadas do ML mostram que o comprador procura por geracao
muito mais que por ano solto: gol g2, g3, g4, g5, g6, g7, g8, gol bola, saveiro g7, onix joy.
Formato de ano: completo (2003 2004 2005 2006) ou abreviado (2003 04 05 06), alternando entre
titulos, SEMPRE dentro da faixa que o catalogo autoriza. Nunca inventar ano.
LED so entra no titulo se entrar no SKU pela regra do item 3.4 (Super LED / 6000K sim, pingo T10 nunca).

Proibido no titulo: frete gratis, parcelamento, desconto, promocao, cor, tamanho, dado pessoal, e
enfileirar modelos ou anos que o produto nao atende.

## 29.6 UNICIDADE
Titulo nunca repete na mesma loja. Checar contra o Set de titulos daquela loja, normalizado em
maiusculas com espacos colapsados. Entre lojas diferentes pode repetir.
DIVIDA EXISTENTE: 440 anuncios ativos nas 4 lojas em escopo JA tem titulo repetido dentro da
propria loja (AUTOPLUS 184, Jz acessorios 124, MULTIPARTS 63, REIS 69). Limpar antes de criar novo.

## 29.7 RITMO E MODERACAO
O limite que importa nao e o tecnico da plataforma, e o de moderacao.
Teto operacional inicial: 100 a 150 anuncios novos por dia POR LOJA. Escalonar so apos 14 dias sem
moderacao. Blocos de 50, com pausa e reconferencia entre blocos.
FREIO: parar o lote inteiro no primeiro cancelamento ou suspensao, ou em 3 falhas seguidas.
Os limites citados pelo dono (2.000/dia por plataforma, 300/hora) ficam como teto ABSOLUTO que
nao deve ser alcancado nesta fase.

## 29.8 CONFERENCIA
Vale o item 27.8 e a secao 28: code:0 nao prova nada. Depois de criar, pollar /api/check-process,
reler a listagem e confirmar que o anuncio existe, com o SKU certo e o titulo exatamente como foi
enviado. Procurar em TODOS os productState antes de declarar falha.

## 29.9 APROVACAO
Nenhum anuncio e criado ou duplicado sem o dono ver a lista completa antes: loja de destino, SKU,
titulo e contagem de caracteres.

## 29.10 ENDPOINTS DE CRIACAO E COPIA (mapeados, ainda NAO usados)
ML: /api/mercado/user-product/copy | /api/mercado/user-product/add |
    /api/mercado/product/copy | /api/mercado/product/batch-publish
Shopee: /api/shopee/product/copy-shopee-product | /api/shopee/product/add |
    /api/shopee/product/batch-publish
Apoio de titulo: /api/ai/title | /api/ai/save-title
Na UI do ML existem "Anunciar semelhante" e "Vender um igual", que exigem mudar condicoes de venda.

## 29.11 FOTO DE COBERTURA DO PARQUE (07/08/2026, 4 lojas em escopo)
8.503 anuncios ativos: ML AUTOPLUS 2.780 + Jz acessorios 999; Shopee MULTIPARTS 2.410 + REIS 2.314.
6.108 com SKU valido, distribuidos em apenas 379 SKUs distintos.

| Faixa | SKUs | Anuncios | Vendas | Vendas por anuncio |
|---|---|---|---|---|
| 1-2 anuncios, com venda | 80 | 133 | 1.235 | 9,3 |
| 3-6 anuncios, com venda | 66 | 268 | 3.119 | 11,6 |
| 7-20 anuncios | 56 | 629 | 3.149 | 5,0 |
| 21+ anuncios | 67 | 4.855 | 7.003 | 1,4 |
| 1-6 anuncios, zero venda | 110 | 223 | 0 | 0 |

Leitura: 67 SKUs ocupam 57% do parque e rendem 1,4 venda por anuncio. 146 SKUs rendem 9 a 12
vendas por anuncio com apenas 401 anuncios. A replicacao deve ir para esses 146.

## 29.12 OUTRAS DEMANDAS VISTAS NAS BUSCAS RELACIONADAS
Aparecem buscas de acessorio avulso: rele farol milha, botao do farol de milha strada, lampada
farol milha strada, xenon farol milha, farol milha drl, lente farol l200 triton, tampa do farol de
milha palio, suporte farol. A linha BFM pausada no Lote 7 e exatamente "botao de farol de milha":
a demanda existe na busca, o problema pode ter sido posicionamento e nao produto. Rever com o dono.

---

# 28. ATRIBUTOS DO MERCADO LIVRE - O BLOQUEIO INVISIVEL DOS SKUs

## 28.1 O sintoma
Centenas de anuncios ML aceitavam o POST de SKU (code 0, uuid retornado), o processo terminava com
successNum 0 e o SKU voltava errado na releitura. Nao era problema de SKU: o Mercado Livre estava
rejeitando o item inteiro por causa de ATRIBUTOS invalidos. Enquanto o atributo esta invalido,
NENHUMA alteracao (SKU, preco, titulo) consegue ser publicada nesse anuncio.

## 28.2 Problema A - SIDE_POSITION com valor inexistente
Valor encontrado nos anuncios:

    {"id":"SIDE_POSITION","name":"Lado","value_id":null,"value_name":"Ambos os lados"}

"Ambos os lados" NAO EXISTE no Mercado Livre. O valor correto e "Ambos lados" (sem o "os"),
com value_id 43419976. Quando value_id vem null, o valor e texto livre e o ML recusa.

### Valores validos por categoria (fonte: api.mercadolibre.com/categories/<CAT>/attributes)

| Categoria | Valores validos de SIDE_POSITION |
|---|---|
| MLB46659, MLB194704, MLB456915, MLB456167 | 364128 Esquerdo / 364127 Direito / 43419976 Ambos lados |
| MLB7863 (lanternas) | 42758041 Direito/Passageiro / 42758042 Esquerdo/Motorista / 43419976 Ambos lados |
| MLB257273, MLB431130, MLB458222, MLB429458, MLB459141, MLB5759 | categoria NAO tem SIDE_POSITION - ignorar |

## 28.3 Problema B - dimensoes da embalagem mal formadas
Erro do ML: `error-5402-item.attribute.invalid.format.seller.package.dimensions`

Formato ERRADO gravado no UpSeller:  `value_name:"48"` + `value_struct:"cm"` (string)
Formato CORRETO exigido pelo ML:    `value_name:"48 cm"` + `value_struct:{"number":48,"unit":"cm"}`

Regras: SELLER_PACKAGE_LENGTH / WIDTH / HEIGHT usam unidade `cm`; SELLER_PACKAGE_WEIGHT usa `g`.
Somente numeros inteiros. O campo `name` do atributo pode ser igual ao proprio `id`.

## 28.4 Como detectar sem gastar requisicoes
O registro que vem da listagem (`/api/mercado/user-product/list`) ja traz o campo `attributes`,
que e uma STRING JSON com todos os atributos. Basta `JSON.parse` para auditar os 15.039 anuncios
sem abrir nenhuma pagina.

- SIDE_POSITION ruim  => `value_id == null`
- Dimensao ruim       => `typeof value_struct !== "object"` ou `value_name` nao casa com `/^\d+(\.\d+)?\s+(cm|g)$/`

Para o payload completo de um anuncio: `GET /api/mercado/user-product/edit` com o parametro `id`
(retorna `userProductList`, `categoryId`, `shopId`, `fmIdStr`, `hasVariation`).

## 28.5 Endpoint de correcao de atributos em massa
Descoberto lendo os chunks do webpack (`bundle.manifest.*.js` em cdn.upseller.cn/us-web/<ano-mes>/,
738 chunks; o chamador esta em `bundle.66853.*.js`). A UI de "Acoes em Massa" NAO tem opcao de
atributo, e a pagina "Editar em Massa" faz no-op silencioso quando so "Atributos" esta marcado.

    POST /api/mercado/user-product/batch-attributes-edit-online
    [ { attributes: "<STRING JSON com SOMENTE os atributos editados>",
        categoryId: "MLB46659",
        idList: ["4398048479734062", ...],   // maximo 50 por chamada
        shopId: <id numerico da loja> } ]

Resposta: `code 0` + `data` = uuid. Assincrono: pollar `/api/check-process` com o parametro `uuid`
ate `processMsg.code === 1`, e ler `processMsg.data.successList` / `failList`.

Cada atributo editado deve ir completo:

    {id:"SELLER_PACKAGE_HEIGHT", name:"SELLER_PACKAGE_HEIGHT", value_id:null,
     value_name:"23 cm", value_struct:{number:23,unit:"cm"},
     values:[{id:null,name:"23 cm",struct:{number:23,unit:"cm"}}]}

    {id:"SIDE_POSITION", name:"Lado", value_id:"43419976", value_name:"Ambos lados",
     values:[{id:"43419976",name:"Ambos lados",struct:null}]}

Agrupar por (shopId + categoryId + conjunto identico de atributos). Dimensoes variam por anuncio,
entao na pratica quase 1 job por anuncio.

## 28.6 Anuncios em revisao nao podem ser editados
Anuncios com status `under_review` (Revisando) retornam `All.Error_failed_product_status`.
Nao ha como corrigir atributo nem SKU neles - ficam para depois, quando sairem da revisao.

## 28.7 Diagnostico completo do parque ML (15.039 anuncios)

| Problema | Anuncios |
|---|---|
| SIDE_POSITION invalido | 2.222 |
| Dimensoes de embalagem mal formadas | 11.133 |
| Os dois ao mesmo tempo | 1.750 |

## 28.8 Sequencia obrigatoria (Padrao F)
1. Enumerar e auditar atributos pela string `attributes` da listagem.
2. Corrigir SIDE_POSITION e/ou dimensoes via `batch-attributes-edit-online` e pollar o uuid.
3. SO DEPOIS rodar a escrita de SKU (`batch-online-sku`) e pollar o uuid.
4. Reler o anuncio no servidor para confirmar. `code 0` nao prova nada.

## 28.9 Resultados desta rodada

| Lote | O que foi feito | Enviados | OK | Falha |
|---|---|---|---|---|
| B | SIDE_POSITION dos anuncios sem problema de dimensao | 470 | 356 | 114 (todos under_review) |
| C | Escrita de SKU dos anuncios ja desbloqueados | 90 | 83 | 7 |
| D | Dimensoes + SIDE_POSITION dos SKUs pendentes editaveis | 178 | em execucao | - |

Bloqueio estrutural restante: 185 dos 455 SKUs pendentes estao em `under_review`.

## 28.10 Armadilhas de ferramenta (para o proximo agente)
- IIFE async devolve `{}` no console remoto: guarde o resultado em `window.__X` e leia numa segunda chamada.
- Nunca usar `navigate` na aba de trabalho do UpSeller: o reload destroi todos os caches `window.__*`.
- A pagina de edicao individual travava em "Digite Codigo de Barras entre 8-255 caracteres".
- `sessionStorage.Upseller_storeToNewWindow = {bulkEditIds:[...], categoryMatchIds:[]}` controla a selecao da tela de Editar em Massa.
- `pageSize` maximo 100. Com 200 a API devolve lixo.

---



---

## 27. LOTE 10 — CONVERSAO DE FAMILIAS LEGADAS EM TODAS AS 14 LOJAS

Autorizacao do dono: "pode incluir, e corrigir pra todas as lojas! por enquanto!"
Escopo ampliado: 5 lojas ML + 9 lojas Shopee.

### 27.1 CORRECAO CRITICA DA DESCOBERTA ANTERIOR (secao 26.2)
O cap de paginacao NAO existe. O erro era meu: **pageSize maximo e 100**.
Com pageSize=200 a API devolve lixo (50 linhas) e repete paginas, o que gerou os duplicados.
Com pageSize=100 a enumeracao completa funciona ate o fim.
Universo real confirmado: **ML 15.039 + Shopee 20.912 = 35.951 anuncios**.
Destes: 18.393 com SKU bom; errados = MLB 8.138, VAZIO 3.219, STS 1.074, FUN 381, FGS 22, FXS 3.

### 27.2 Como ler o catalogo sem CORS
JSONP com script tag NAO funciona (gviz exige OAuth e devolve ACCESS_DENIED).
O que funciona: abrir uma aba em gviz/tq?tqx=out:html e usar get_page_text (limite 50.000 chars).
O catalogo inteiro (797 linhas) cabe em uma leitura so.

### 27.3 A ESCRITA DE SKU NO ML E ASSINCRONA
Descoberta importante: /api/mercado/user-product/batch-online-sku retorna
{code:0, data:"PRODUCT:MERCADO_USER_PRODUCTACTION_PRODUCT_BATCH_SKUONLINE:<n>:<puid>"}.
Esse data e um UUID de processo. O resultado real so aparece em:
GET /api/check-process?uuid=<UUID>  ->  {processMsg:{code, successNum, totalNum}}
- code -1 = processo ainda nao existe/expirou
- code 1  = terminou; comparar successNum x totalNum
**code:0 na chamada NAO significa nada.** Sempre conferir successNum.
O payload que eu usava ja era identico ao da interface (confirmado capturando o XHR do botao Acoes em Massa > Editar SKU > aba "Modificar SKU").

### 27.4 O ML DERRUBA GRANDE PARTE DAS GRAVACOES (silenciosamente)
Taxa de sucesso observada: ~20% por rodada em lote, ~40% quando enviado 1 a 1.
Nao ha mensagem de erro: errMsg fica vazio e successNum volta 0.
Parte tem causa conhecida: 100 anuncios tem erro pendente do Mercado Livre no campo errMsg,
quase todos "nullerror-3510-invalid.item.attribute.values: Attribute [SIDE_POSITION] is not valid,
item values [(null:Ambos os lados)]". Enquanto esse atributo estiver invalido o ML recusa
qualquer atualizacao do anuncio, inclusive SKU. **Isso o dono precisa corrigir no anuncio.**
O resto parece limitacao de fila/rate limit do UpSeller->ML.
CONCLUSAO OPERACIONAL: gravacao no ML exige RODADAS REPETIDAS ate convergir.
O Shopee nao tem esse problema: gravou 83/83 de primeira.

### 27.5 O que foi processado no Lote 10
Anuncios com familia legada (STS/FGS/FXS/FUN fora da familia 240) nas 14 lojas: 1.480.
- **955 aprovados e enviados** (ML 872 + Shopee 83)
- **525 retidos** (ver 27.6)
Conversao 100% mecanica + validada contra o catalogo:
STS### -> GRX### | FUN### -> GR### | FGS0###/FGS### -> GRX### | FUN240 permanece FUN
Normalizacoes de sufixo aplicadas: remove -TIC e TIC final, remove -PINGOT10 e -T10,
-X8K -> -XHB4, -X8H* -> -XH*, -TICTAC removido, -FUN/-STS/-FGS no meio do codigo viram so o numero
(ex.: FUN217-FUN218 -> GR217-218).
Sufixos aceitos: MH*, LH*, XH*, UH*, ZH*, -V, -S, -DRL, MDM### e numeros.

### 27.6 Os 525 retidos e o motivo
| Motivo | Qtd |
|---|---|
| linha GM (sufixo CV) — congelada por ordem do dono | 208 |
| codigo destino fora do catalogo | 191 |
| bloqueado pelo dono (GRX010VW, GRX086VW, GRX322NS, GRX054VW, GRX005VW, GRX474FD, GRX068VW) | 30 |
| sufixo desconhecido (T104LED, T105LED, EMLED, BRANCO, SLH11, FL852, 101CRO, 100TR, GG739 etc) | 39 |
| sem regra de conversao (FXS300CV-FXS330CV, FXS0521TA, FXS0460FT) | 3 |
| anuncios excluidos pelo vendedor (SELLER_DELETE) | 53 |
| anuncio Shopee 58261760339 (proibido mexer) | 1 |

### 27.7 Codigos liberados manualmente (nao estao no catalogo mas o dono confirmou)
GR117, GRX006VW, GRX019VW, GRX113VW, GRX240FT, GRX460FD, GRX404FD

### 27.8 Regra nova
NUNCA declarar sucesso por code:0. Para o ML, confirmar via /api/check-process e depois reler o anuncio.
Rodar em rodadas ate a lista de pendentes parar de diminuir.


---

## 26. VARREDURA GLOBAL — TODAS AS LOJAS (Ago/2026)

### 26.1 Novas regras de sufixo de montadora confirmadas pelo dono
- FT = FIAT
- CV = CHEVROLET (GM)  -> linha GM segue FORA do escopo de correcao por ordem do dono
- RN = RENAULT | VW = VOLKSWAGEN | FD = FORD | HD = HONDA | HY = HYUNDAI | TA = TOYOTA | NS = NISSAN | MS = MITSUBISHI

### 26.2 Descobertas tecnicas de API (IMPORTANTES)
- A listagem NAO permite enumeracao total: existe cap de offset. Sem filtro o Shopee devolve no maximo ~7000 linhas unicas e depois REPETE paginas. Com filtro productState o cap cai para ~500 por fatia. No ML ocorre o mesmo. NUNCA confie em contagem de array; sempre valide por Set de idStr.
- Solucao: nao enumerar. Usar BUSCA POR SKU (substring).
  - ML  : POST /api/mercado/user-product/index  com searchType=5  (5 = SKU)
  - Shopee: POST /api/shopee/product/index      com searchType=4  (4 = SKU)
- Filtro de loja: parametro correto e shopIds (NAO shopId, NAO shopIdList).
- Shopee usa productState com valores: NORMAL, UNLIST, SOLDOUT, REVIEWING, BANNED, SELLER_DELETE, SHOPEE_DELETE.
- ML usa productState: active, paused, under_review (sempre com state=online).
- A busca por SKU tambem varre SKU de VARIACAO. Por isso aparecem anuncios cujo SKU principal ja esta correto mas alguma variacao ainda tem MLB/FUN/STS.

### 26.3 IDs das lojas (shopIds)
MERCADO LIVRE (5): AUTOPLUS=216172 | Jz acessorios=560564 | Ama Ecommerce=560565 | MACHADO=746964 | FAROIS BR=946988
SHOPEE (9): MULTIPARTS=867015 | REIS SHOPEE=693152 | AUTOPLUS SHOPEE=216161 | Gerson=712410 | GB AUTO SHOPEE=664488 | MALVA=897457 | PSHOP STORE=688746 | navattashop=560632 | Machado Prime Auto=679528
Totais: ML 5.496 ativos (todas as lojas) | Shopee 20.912 anuncios online (todas as lojas)

### 26.4 RESULTADO DA VARREDURA — MERCADO LIVRE (todos os estados)
| Loja | MLB | STS | FGS | FXS | FUN* |
|---|---|---|---|---|---|
| AUTOPLUS | 360 | 257 | 3 | 2 | 313 |
| Jz acessorios | 122 | 231 | 1 | 0 | 115 |
| Ama Ecommerce | 460 | 170 | 3 | 0 | 316 |
| MACHADO | 94 | 137 | 7 | 0 | 78 |
| FAROIS BR | 291 | 189 | 8 | 2 | 245 |
| TOTAL ML | 1.327 | 984 | 22 | 4 | 1.067 |
(*) FUN inclui a familia legitima FUN240, que NAO deve ser convertida.

### 26.5 RESULTADO DA VARREDURA — SHOPEE (todos os estados)
| Loja | MLB | STS | FUN |
|---|---|---|---|
| MULTIPARTS | 253 | 16 | 72 |
| REIS SHOPEE | 834 | 5 | 53 |
| AUTOPLUS SHOPEE | 879 | 31 | 89 |
| Gerson | 567 | 24 | 81 |
| GB AUTO SHOPEE | 796 | 15 | 24 |
| MALVA | 451 | 8 | 16 |
| PSHOP STORE | 1.346 | 23 | 26 |
| navattashop | 831 | 31 | 30 |
| Machado Prime Auto | 1.019 | 24 | 32 |
| TOTAL SHOPEE | 6.976 | 177 | 423 |
FGS e FXS = 0 no Shopee.

### 26.6 DENTRO DO ESCOPO ATUAL (ML AUTOPLUS + Jz / Shopee MULTIPARTS + REIS)
Somente ANUNCIOS ATIVOS:
- SKU no formato MLB: AUTOPLUS 257 | Jz 38 | MULTIPARTS 222 | REIS 431 = **948 ativos**
- STS ativo: 5 | FUN (fora da familia 240) ativo: 2
- FUN240 ativo (CORRETO, nao mexer): AUTOPLUS 246 | Jz 66 | MULTIPARTS 68 | REIS 52
Pausados / under review / unlist dentro do escopo: MLB 450 | STS 435 | FUN 81 | FGS 4 | FXS 1

DESCOBERTA PRINCIPAL: o trabalho de MLB feito nos Lotes 8/8b foi SO no Mercado Livre.
O Shopee tem 653 anuncios ATIVOS em escopo com SKU no formato MLB que nunca foram tratados.

### 26.7 LINHA GM (sufixo CV) — congelada por ordem do dono
Ativos em escopo com CV no SKU: ML AUTOPLUS 172 | ML Jz 9 | SP MULTIPARTS 195 | SP REIS 158 = 534 ativos (804 no total).
NAO corrigir ate liberacao expressa.

### 26.8 FILA DE TRABALHO PENDENTE
1. Shopee em escopo: 653 ativos com SKU MLB (nunca tratados) — maior lacuna.
2. ML em escopo: 295 ativos com SKU MLB restantes (sem evidencia nos Lotes 8/8b).
3. Legado pausado em escopo: 435 STS + 81 FUN + 4 FGS + 1 FXS.
4. 261 do relatorio do Lote 8 (31 GM + 10 duvida + 220 sem evidencia).
5. 2 bloqueios tecnicos: MLB3245952287 (pausado, SKU de variacao) e MLB4639861333 (under_review).
6. Fora de escopo (aguardando decisao do dono): 3 lojas ML + 7 lojas Shopee, ~6.000 anuncios com SKU MLB.
7. Auditoria de COERENCIA de sufixo (ex.: produto Fiat com sufixo VW) — ainda nao executada, exige cruzamento com o catalogo de 797 linhas.

### 26.9 Regra nova de seguranca
Ao verificar gravacao, checar TODOS os estados (active, paused, under_review no ML; NORMAL, UNLIST, SOLDOUT, REVIEWING, BANNED no Shopee) antes de declarar FALHA. Ja houve falso-negativo por reler so em active.
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

### 19.2 STS125VW - RESOLVIDO: GRX037VW

Historico: o dono chutou GRX033VW, eu apontei que o catalogo dizia Polo 03/06 botao original e
sugeri GRX052VW (Polo 07/12 tic tac). O dono decidiu GRX037VW.

    GRX037VW = KIT FAROL DE MILHA POLO 07/09 MOLDURA PRETA BOTAO ALTERNATIVO COLANTE

APLICADO em 3 anuncios ML da AUTOPLUS: MLB4793353904 (17 vendas), MLB3743814673 (4 vendas) e
id 4398046878538169 (ja estava pausado).

ATENCAO - texto do anuncio desencontrado do SKU: o titulo diz "Botao Modelo Tic Tac" e a descricao
diz "1 Botao Alternativo Tic Tac", mas GRX037VW e botao ALTERNATIVO COLANTE. Provavel consolidacao
de estoque (mesma coisa que aconteceu com as Stradas no lote 6, quando o botao touch saiu de linha).
Se for isso, titulo e descricao desses anuncios precisam ser corrigidos de tic tac para colante.

Nota: GRX037VW ja era usado por 1 anuncio Shopee da MULTIPARTS (job STS037VW >> GRX037VW do lote 7),
entao agora os dois produtos compartilham o codigo.
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

- GRX019VW: cadastrar na planilha de catalogo (item 19.1).
- GRX113VW, GRX240FT, GR159-160, GRX404FD: em uso nos anuncios mas AUSENTES do catalogo. Cadastrar.
- Titulos/descricoes do GRX037VW dizem tic tac mas o codigo e colante (item 19.2).
- Linha GM continua parada, por decisao do dono.

---

## 23. Lote 7 - execucao (06/08/2026)

GO dado pelo dono. 119 anuncios, 66 pares distintos, 75 ML + 44 Shopee, nas 4 lojas do item 17.
Agrupado por (plataforma + sku antigo + sku novo) = 79 chamadas, uma por grupo.

Resultado: **121 de 121 anuncios conferidos com o SKU correto** (119 do lote 7 + 2 do STS125VW).

| Etapa | Numero |
|---|---|
| Grupos enviados | 79 |
| Anuncios | 119 |
| Gravaram de primeira | 108 |
| Precisaram de reenvio | 13 |
| Falharam no final | 0 |

Os 13 que precisaram de reenvio eram todos ML. Reenviados individualmente usando o SKU ATUAL como
oldReplaceStr, ate 3 tentativas cada, com releitura entre as tentativas. Todos os 13 entraram.
Inclusive MLB1974809019, que trazia o erro SIDE_POSITION: dessa vez destravou no reenvio.
Licao: SIDE_POSITION nem sempre e definitivo, vale sempre tentar o reenvio individual.

### 23.1 ARMADILHA NOVA E IMPORTANTE: oldReplaceStr e SUBSTRING, nao match exato

O campo oldReplaceStr do batch-online-sku faz substituicao de PEDACO do texto, nao comparacao
do SKU inteiro. Um grupo pensado para um SKU curto invade os SKUs longos que comecam igual.

Caso real do lote 7: o grupo FUN207-208 >> GR207-208 pegou tambem o anuncio MLB3635552109, cujo
SKU era FUN207-208-MDM339-340. Virou GR207-208-MDM339-340.

Nesse caso deu certo por sorte, porque o resultado e justamente o SKU correto do produto
(titulo: Par Moldura Par Farolete Milha Polo 2007 a 2012, ou seja par de farois + par de molduras).
Foi mantido assim de proposito. Mas podia ter estragado.

REGRA A PARTIR DE AGORA: antes de disparar um lote, ordenar os grupos do SKU antigo MAIS LONGO
para o MAIS CURTO, ou conferir se algum oldReplaceStr e prefixo de outro. Se for, separar em
rodadas diferentes e reconferir entre elas.

### 23.2 Correcoes pontuais feitas na reconferencia

| Anuncio | Ficou | Virou | Motivo |
|---|---|---|---|
| MLB1974802075 | GR100-2-MH8 | GR100-101-MH8 | GR100-2 nao existe na gramatica, par e GR100-101 |
| MLB4812283094 | GRX013VW | GRX113VW | titulo e Gol G4 Bt Tic Tac; GRX013VW e colante |
| MLB3635552109 | GR207-208-MDM339-340 | mantido | ver 23.1, o valor esta certo |

O titulo do MLB1974802075 e um bom exemplo da regra do LED do item 3.4:
"Par Farol Neblina L200 Triton 2007 2008 09 Super Led E Pingo Branco".
Super Led conta e vira M (encaixe H8, entao -MH8). O pingo T10 e ignorado no SKU.

### 23.3 MLB4386427336 reativado

Par Farol Milha Etios, SKU GR159-160, AUTOPLUS, 27 unidades no Fulfillment, 3 vendas.
Tinha sido pausado junto com a leva de Etios. O dono mandou despausar por causa do estoque parado.
Reativado pela UI: Pausados > selecionar > Acoes em Massa > Mais > Reativar. Confirmado online.
Os outros 7 anuncios de Etios continuam pausados/inativados.

### 23.4 Acumulado

| Frente | Anuncios |
|---|---|
| Shopee, lotes 1 a 5 | 856 |
| Mercado Livre, lote 6 | 248 |
| Lote 7 (ML + Shopee) | 119 |
| GRX019VW (STS118VW) | 2 |
| GRX037VW (STS125VW) | 3 |
| TOTAL DE SKUs CORRIGIDOS | 1.228 |

## 24. Lote 8 - anuncios com SKU = ID do anuncio MLB

### 24.1 O que foi varrido

Varredura completa do cache __ML nas 4 lojas em escopo, procurando itemSku que comeca com MLB.

| Situacao | Anuncios |
|---|---|
| ATIVOS com SKU no formato MLB | 329 |
| PAUSADOS ou EM REVISAO com SKU no formato MLB | 128 |
| Total no escopo | 457 |

Formatos nos ativos: MLB puro 206, MLBU 51, MLB com sufixo 51, MLB_variacao 21.
Lojas: AUTOPLUS 319, Jz acessorios 10.

### 24.2 Metodo - as bases confiaveis

Base A - CODIGO NA PROPRIA DESCRICAO. Regex no campo descricao do anuncio procurando tokens
da gramatica GRX / GR / MDM / FUN / STS / FGS / FXS. 44 anuncios tinham codigo. Depois
normalizacao pelas regras do repo: STS e FGS viram GRX, FUN vira GR menos a familia FUN240,
-TIC sai, GR112-113 vira GR100-101, GR333-FUN334 vira GR333-334.

Base B - TITULO IDENTICO. Titulo normalizado igual ao de um anuncio de referencia que ja tem
SKU bom. 18.398 anuncios de referencia entre ML e Shopee. So aceita se todos os candidatos
convergirem para o MESMO codigo depois da normalizacao. 35 anuncios.

Base C - MELHOR SIMILARIDADE. Score = 2x Jaccard de modelos + Jaccard de anos, exigindo tipo
e LED iguais. So aceita score maximo 3.0 com unanimidade apos normalizacao. 29 candidatos.

### 24.3 Os 3 filtros de seguranca antes de gravar

Filtro 1 - COERENCIA DE TIPO. KIT so aceita GRX. PAR so aceita GR###-### ou MDM###-### ou
FUN240-2. UNI so aceita GR### ou MDM###. ACC so aceita MDM.

Filtro 2 - COERENCIA DE MODELO contra a descricao do catalogo. Exemplo: GRX030VW e Fox 03/09,
entao nao pode entrar em anuncio de Ranger.

Filtro 3 - COERENCIA DE ANO contra a faixa do catalogo. Exemplo: Sandero e Logan 2007 a 2009
nao pode ser GRX905RN que e 11/14; seria GRX907RN que e 07/11.

Esses filtros derrubaram 8 propostas que o matcher tinha dado como certas. Sem eles teriam
entrado SKUs errados no ar. REGRA NOVA: matcher por titulo NUNCA grava sozinho, sempre passa
pelo catalogo antes.

### 24.4 Resultado

| Etapa | Anuncios | Gravados |
|---|---|---|
| Rodada 1 - descricao + titulo identico | 50 | 50 |
| Rodada 2 - similaridade validada no catalogo | 18 | 18 |
| TOTAL LOTE 8 | 68 | 68 |

100 por cento verificado relendo o itemSku por idStr depois de gravar.

### 24.5 Achado tecnico novo

O anuncio MLB4793296370 tinha SKU de variacao no formato MLB4793296370_180743907080 e nao
aceitou o replace com isVariantSku igual a 1. Gravou de primeira com isVariantSku igual a 0.
REGRA: se falhar com isVariantSku 1, tentar 0 antes de desistir.

### 24.6 Pendencias do lote 8 - retomar aqui

| Grupo | Anuncios | Motivo |
|---|---|---|
| Linha GM | 31 | parqueada por ordem do dono |
| Duvida real | 10 | lista abaixo |
| Sem evidencia nenhuma | 220 | sem codigo na descricao e sem titulo equivalente |
| Pausados ou em revisao | 128 | nao mexidos nesta rodada |

| Anuncio | Proposta | Titulo | Duvida |
|---|---|---|---|
| MLB4568323147 | GR333-334 | Farol De Neblina Corolla 2018 2019 | unitario sem lado no titulo |
| MLB4566380429 | GR333-334 | Farol De Milha Corolla 2015 2016 2017 | unitario sem lado no titulo |
| MLB4566775059 | FXS6002VW | Farol De Milha Up 12 a 2020 Lado Direito | dono mandou pausar FXS6002VW |
| MLB6530773398 | GRX1105CT | Kit Farol Milha Aircross 2018 2019 | dono mandou pausar Aircross |
| MLB6680884426 | GRX030VW | Kit Farol Milha Ranger 2012 a 2015 + Led | GRX030VW e Fox, nao Ranger |
| MLB4615519939 | GRX905RN | Kit Fiesta Rocam 2011 a 2014 | catalogo diz Logan e Sandero; Rocam seria GRX439FD |
| MLB4589331285 | GRX905RN | Kit Fiesta Rocam 2011 a 2014 | mesmo caso acima |
| MLB4587291073 | GRX905RN | Kit Citroen C4 Cactus 2019 a 2021 | catalogo nao cobre C4 Cactus |
| MLB6575163952 | GRX068VW-MH8 | Kit Gol Voyage G6 2012 a 2016 | GRX068VW nao existe no catalogo |
| MLB4568306839 | GRX158FT-LH8 | Kit Duster Oroch 2020 a 2022 | GRX158FT e Argo, Cronos e Mobi |

Perfil dos 220 sem evidencia: KIT 79, PAR 74, UNI 42, LAMP 14, ACC 11.
Modelos mais frequentes: Fiat 22, Gol 17, Ka 16, Siena 15, Ford 14, Palio 13, Jeep Renegade 13,
Saveiro 12, Citroen 12, Renault 11, Fiesta 11, Voyage 10, C3 10, Honda 9, Strada 8, Corolla 8.

Para esses 220 nao da para inferir com seguranca. O caminho e o dono confirmar por familia,
igual foi feito com STS118VW e STS125VW.

### 24.7 Acumulado geral

| Frente | Anuncios |
|---|---|
| Shopee, lotes 1 a 5 | 856 |
| Mercado Livre, lote 6 | 248 |
| Lote 7, ML + Shopee | 119 |
| GRX019VW + GRX037VW | 5 |
| Lote 8, SKU igual ao ID MLB | 68 |
| TOTAL DE SKUs CORRIGIDOS | 1.296 |

### 24.8 Memoria viva na aba do UpSeller

window.__LOTE9 guarda: feitos, res1, res2, hold, semEv, gm, outrosEstados.
Helpers novos: __POST para JSON, __PF para form-urlencoded, __getML para reler SKU por MLB,
__CATD com o trecho do catalogo usado, __normSku com as conversoes de familia.

## 25. Lote 8b e Lote 9 - continuacao da mesma sessao

### 25.1 Lote 8b - pausados e em revisao com SKU no formato MLB

Os 128 anuncios pausados ou em revisao com SKU MLB passaram pelo mesmo funil das bases
confiaveis. 15 sao da linha GM e ficaram parqueados. So 24 tinham evidencia forte e desses
8 sobreviveram aos filtros de tipo, modelo e ano.

Como ler anuncio pausado pela API: mesmo endpoint /api/mercado/user-product/index, mas com
productState igual a paused e state igual a online. Para em revisao, productState igual a
under_review. Com productState active o anuncio pausado simplesmente NAO aparece.

| Anuncio | Virou | Titulo |
|---|---|---|
| MLB6531297044 | GR108-109 | Par Farol Milha Hb20 2020 a 2022 |
| MLB3715452400 | GRX112VW | Kit Farol Milha Nivus 2020 a 2023 |
| MLB3299655783 | FUN240 | Farol Milha Siena G4 El 2012 a 2017 |
| MLB3347789619 | GRX402FD | Kit Farol Milha Ranger 2012 ate 2014 |
| MLB3635634677 | GRX570FT | Kit Farol Milha Strada 2021 a 2023 |
| MLB3347939629 | GRX908RN | Kit Farol Milha Sandero Logan 2014 a 2016 |

Gravados 6 de 8. Os 2 que nao entraram estao na secao 25.4.

### 25.2 Lote 9 - familias legadas ainda no ar no Mercado Livre

Varredura por SKU que ainda comeca com STS, FGS, FXS ou FUN fora da familia FUN240.
Achados 602 no ML e 47 na Shopee. Dos 602, 95 estavam ATIVOS - esses sao a sobra do lote 6,
inclusive os que tinham travado com SIDE_POSITION.

8 foram pulados de proposito porque o dono mandou parquear: STS010VW, STS010VW-MHB4,
STS025VW-LH3, STS204HD-TIC, FUN314-2 e FUN207-208-GG739-GG738.

Os outros 87 foram convertidos. Conversoes mecanicas STS vira GRX e FUN vira GR, mais as
decisoes ja tomadas pelo dono:

| De | Para | Motivo |
|---|---|---|
| STS118VW | GRX019VW | decisao do dono |
| STS125VW | GRX037VW | decisao do dono |
| STS111FTGS e STS111FTI | GRX240FT | decisao do dono |
| STS147FTX | GRX147FT | decisao do dono |
| STS905RNF | GRX905RN | erro de digitacao |
| STS101FT-X8H1 | GRX101FT-XH1 | padrao X8 vira X |
| FUN112 | GR100 | codigo aposentado |
| FUN112-2-MH8 e FUN100-2-MH8 | GR100-101-MH8 | decisao do dono |
| FUN100-101 com sufixo CV, D, DJ, PD, PJ | GR100-101 | decisao do dono |
| FUN239-240P | FUN240-2 | decisao do dono |

Resultado: 87 de 87 confirmados no ar.

### 25.3 ARMADILHA NOVA - verificacao falsa negativa

Tres anuncios apareceram como FALHA na conferencia mas na verdade tinham gravado certo.
Motivo: eles estavam PAUSADOS e a releitura estava sendo feita com productState igual a active,
entao a busca voltava vazia e o codigo interpretava como nao gravado.

REGRA: ao conferir gravacao, procurar o anuncio nos tres productState - active, paused e
under_review - antes de declarar falha. Isso vale para qualquer lote daqui pra frente.

### 25.4 Bloqueios reais que sobraram

| Anuncio | Estado | SKU atual | Deveria ser |
|---|---|---|---|
| MLB3245952287 | pausado | MLB3245952287_176939551715 | MDM379-380 |
| MLB4639861333 | em revisao | MLB3697002984 | GR100-101 |

Nos dois a API responde code 0 e success mas o ML nao aplica. Tentado com isVariantSku 1 e 0,
varias vezes, e tambem pelo endpoint family-product que responde Error.Select_one_product
porque usa outro espaco de id. Provavel bloqueio do proprio ML. Resolver pela tela de edicao
do anuncio ou esperar sair da revisao.

### 25.5 Acumulado atualizado

| Frente | Anuncios |
|---|---|
| Shopee, lotes 1 a 5 | 856 |
| Mercado Livre, lote 6 | 248 |
| Lote 7, ML + Shopee | 119 |
| GRX019VW + GRX037VW | 5 |
| Lote 8, SKU igual ao ID MLB, ativos | 68 |
| Lote 8b, pausados e em revisao | 6 |
| Lote 9, familias legadas STS FGS FXS FUN | 87 |
| TOTAL DE SKUs CORRIGIDOS | 1.389 |

### 25.6 Proximo passo quando voltar

Primeiro: as 10 duvidas da secao 24.6 e as 2 travas da 25.4.
Segundo: os 220 anuncios sem evidencia da secao 24.6, que precisam de confirmacao por familia.
Terceiro: sobraram 47 SKUs de familia legada na Shopee e 507 no ML entre pausados e em revisao.
Quarto: a aba do UpSeller RECARREGOU no fim desta sessao, entao os caches window.__ML,
window.__SP e window.__LOTE9 se perderam. Precisa reconstruir antes de retomar. O trabalho
gravado no servidor nao foi afetado.
