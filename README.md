# 0. TRABALHO EM ANDAMENTO (LER PRIMEIRO AO RETOMAR)

Atualizado 15/10/2026. Esta secao e o ponto de retomada: se a tela do Claude fechar, abrir o repo, ler esta secao e continuar daqui. Sempre atualizar esta secao ao terminar cada etapa (editar pelo GitHub web: README > lapis > Commit changes).

## 0.1 Ultima sessao concluida
- Secao 56 (15/10/2026): H titulos repetidos Shopee FEITO, C garantia ML FEITO (94/94), D compatibilidade ML FEITO (427 enviados), E categoria Shopee FEITO (586 para 102299). G promocoes o dono ja fez.
- ATUALIZADO 15/10/2026: o Mercado Livre (MLB) NAO esta mais pausado. O dono LIBEROU e esta mexendo no ML agora (duplicacao de anuncios SSS303NS-MH8/XH8, SSS726CV e SSS726CV-MH3 para SS LIGHT e Isadora ML, e correcao de titulos que violam as regras: brinde, farolete, original, Full LED em lampada LED, acima de 60 caracteres, Creta Smart/Sport). Pode trabalhar no ML seguindo as regras deste repo.
- REGRA DO DONO (15/10/2026), vale para todas as plataformas: NA DUVIDA, SEMPRE DEIXAR PAUSADO. Anuncio com SKU, titulo, preco ou aplicacao incerta fica pausado (ou em rascunho, sem publicar) ate o dono responder.

## 0.2 Proximos itens possiveis (do diagnostico 56.1)
- F: 234 titulos da Shopee com menos de 85 caracteres (alongar para 85 a 120, sem repetir dentro da loja).
- J: 14 SKUs acima do teto de 6 anuncios por loja na Shopee (precisa decisao do dono: pausar excedentes?).
- I: TikTok: FEITO em 15/10/2026 (secao 57).
- Respostas do dono pendentes na 56.7 (SKUs numericos da Shopee, 16 anuncios com variacao, SKUs errados do ML).

## 0.3 EM ANDAMENTO AGORA: secao 58, igualar 6 por SKU em todas as lojas (15/10/2026)
- Ler a 58.3 para ver em que etapa parou (itens 1 a 5 FEITOS, menos os 4 SKUs da Shopee para o ML que esperam o dono; ver 58.4). Decisoes do dono na 58.1, contagem e faltas na 58.2.
- Antes disso (15/10): TikTok 6 por SKU (57), SKU do par (57.5), SKUs numericos (57.6), S10 = SSS716CV, policarbonato x vidro (57.8). ML liberado.

## 0.4 Como retomar na aba do UpSeller
- Scripts salvos em localStorage do app.upseller.com: __DOONE (titulo e Part Number Shopee: eval(localStorage.__DOONE) e __runQ(lista,2)), __EC (categoria Shopee, ecat.js), progresso em __ECAT_DONE. Sao seguros de repetir.
- Conferir sempre lendo o servidor (index/edit), nunca so o contador do script.
- Nao navegar a aba do UpSeller do dono: abrir aba nova para scripts.

---

# 58. IGUALAR: 6 ANUNCIOS POR SKU EM TODAS AS LOJAS (15/10/2026, EM ANDAMENTO)

## 58.1 Decisoes do dono (15/10/2026)
- Meta: 6 por SKU em cada loja ONDE FALTA. NAO pausar os que passam de 6.
- Entram todos os SKUs, inclusive os que so existem no ML (SSS303NS, SSS303NS-MH8, SSS303NS-XH8, SSS726CV, SSS726CV-MH3, SSS218HD-MH3, SSS218HD-XH3, SSS130FT, SSS132FT-MH8) e os que so existem na Shopee/TikTok (FUN253-254, FUN341-342, SSS707CV-XHB4, SSS091VW-MH3).
- SSS716CV (S10, tem estoque): REATIVAR os pausados (ML 12+12, Shopee 4+4) ate 6; nao criar novos enquanto houver pausado.
- SSS101FT: fica pausado e NAO entra na igualada.
- No ML, anuncio EM REVISAO conta como existente (ex.: SSS126FT-MH1 tem 1+10 e 1+9, nao criar mais).
- Continuam fora (decisoes antigas): SFM405-406, GRDL01, GRDL08, GR97CV, GR110HD (55.5); SKUs numericos, vazios e MLBU (56.7/57.6).

## 58.2 Contagem de 15/10/2026 (ativos; ML ativos + em revisao) e o que falta
Lojas: ML SS LIGHT, ML Isadora, Shopee JhonJhon (1099666), Shopee SSS (1108318), TikTok (1111840).
- ML (falta por loja SS LIGHT/Isadora): FUN104-105 +1/+1; FUN240 +5/+5; FUN253-254 +6/+6 (vem da Shopee); FUN341-342 +6/+6 (Shopee); FUN955-956 +2/+2; MDM371-372 +3/+3; SSS069VW +3/+3; SSS091VW-MH3 +6/+6 (Shopee); SSS1103CT +4/+4; SSS1105CT-MH8 +2/+2; SSS117-118 +5/+6; SSS130FT +5/+1; SSS132FT-MH8 +1/+5; SSS189-190 +5/+6; SSS240FT-4 +4/+4; SSS414FD-LHB4 +5/+5; SSS707CV-XHB4 +6/+6 (Shopee); SSS907RN +1/+1; SSS716CV reativar 6/6. Total ~142 novos.
- Shopee (JhonJhon/SSS): FUN253-254 +5/+5; FUN341-342 +4/+4; SSS091VW-MH3 +5/+6; SSS707CV-XHB4 +5/+5; SSS716CV reativar 4/4 e +2/+2; do ML: SSS130FT, SSS132FT-MH8, SSS218HD-MH3, SSS218HD-XH3, SSS303NS, SSS303NS-MH8, SSS303NS-XH8, SSS726CV, SSS726CV-MH3 +6/+6 cada. Total ~151 novos.
- TikTok: FUN249-250 +3; FUN253-254 +5; FUN341-342 +4; SSS004VW +1; SSS091VW-MH3 +5; SSS707CV-XHB4 +5; SSS716CV +2; os 9 SKUs do ML +6 cada (depois de existirem na Shopee). Total ~79 novos.
- Ja iguais (6 nas 5 lojas): FUN100-101-MH8, FUN240-2, FUN240-2-LH1, FUN240-4, FUN975-976, SSS002VW, SSS002VW-MH8, SSS013VW, SSS014VW, SSS036VW, SSS126FT, SSS702CV, SSS702CV-MHB4, SSS707CV-MHB4, SSS710CV, SSS710CV-MHB4, SSS710CV-XHB4, SSS905RN-DLT622-MH8, SSS905RN-MH8, SSS905RN-V. Acima de 6 em alguma loja (ficam): FUN100-101, FUN249-250 (Shopee 8), MDM343-344, SSS055VW*, SSS091VW, SSS1305HY, SSS1306HY*, SSS218HD, SSS240FT, SSS303NS* (ML 10/11), SSS712CV, SSS713CV*, SSS726CV* (ML), SSS905RN-DLT622*.

## 58.3 Ordem de trabalho e progresso
1. Reativar SSS716CV: ML 6+6 e Shopee 4+4. [FEITO 15/10] ML: one-update-unlist flag=true (form, productId=idStr) reativou na hora; ficaram 6 ativos + 6 pausados por loja (ids ativados em localStorage __S10ML_ON). Shopee: updateUnlist flag=true ids=... -> 4+4 NORMAL.
2. Shopee, copias dentro da propria loja: FUN253-254 +5/+5, FUN341-342 +4/+4 (2 da origem Versa: March e Sentra; 2 da origem Livina: Clio e Master), SSS091VW-MH3 +5 JhonJhon e +6 SSS (copy-shopee-product aceita copiar para a OUTRA loja: shopCountVoList com o shopId dela), SSS707CV-XHB4 +5/+5, SSS716CV +2/+2 (origem = o anuncio de R$139,99, preco do ML). Titulos novos em localStorage __EQ_TITLES, fila __EQQ. [FEITO 15/10: 43 copias publicadas] LICAO: copia para a outra loja vem com a logistica da loja de origem e o Salvar da tela falha; corrigir por POST /api/shopee/product/add (form) com logistics da loja certa (script __SPDRAFT: __spSaveDraft({id,title,desc,pn,price}); JhonJhon 91003+91006 ligados e 90024 desligado; SSS 90006).
3. Shopee, SKUs vindos do ML. [FEITO 16/10: 7 SKUs x 2 lojas x 6 = 84 anuncios NORMAL + Strada 12] Feito por API: POST /api/move/batch-collect JSON {ids:[idStr do ML],shopIds:[1099666,1108318],platform:'mercado'} -> rascunhos nas 2 lojas com preco do ML, categoria 100712, estoque 50, sem peso/envio/atributo/descricao. Arrumados com __spSaveDraft (categoria 102299, estoque 10, 0,85 kg, 25x35x30, Part Number, titulo, descricao escrita pelo modelo 53.4 e pelas fotos; descricoes em localStorage __DESC7, titulos em __T7). 7 SKUs: SSS303NS, SSS303NS-MH8, SSS303NS-XH8, SSS726CV, SSS726CV-MH3, SSS218HD-MH3, SSS218HD-XH3 (14 originais publicados; faltam as 5 copias de cada por loja). STRADA 2020-2024 (decisao do dono 16/10): o kit vai com Super LED H11, SKU certo e SSS132FT-MH11 (SSS130FT e SSS132FT-MH8 nao existem mais). ML: 12 anuncios renomeados (batch-online-sku), titulos trocados para versao com 'Super Led' (ate 60) e Numero de peca = SKU pela tela up-edit (botao Atualizar -> POST /api/mercado/user-product/batch-update com a familia inteira; o update-family-name responde Product_existed em anuncio publicado, so serve para rascunho). Shopee: 6+6 SSS132FT-MH11 (R$198,88) com descricao e titulos Super LED 6000K H11.
4. TikTok. [FEITO 16/10] Copias internas: FUN253-254 +4, FUN341-342 +3, SSS091VW-MH3 +5, SSS707CV-XHB4 +5, SSS716CV +2 (19; titulos = os novos da Shopee; fila __TTQ4). FUN249-250 e SSS004VW ja tinham 6 contando os em retificacao/revisao. Importados da Shopee (batch-collect platform shopee, 1 por SKU, origem JhonJhon) + categoria 942344 e Publicar pela tela (__TT8STEP) + 5 copias cada (__TTQ8): SSS303NS, SSS303NS-MH8, SSS303NS-XH8, SSS726CV, SSS726CV-MH3, SSS218HD-MH3, SSS218HD-XH3, SSS132FT-MH11 = 48. Total TikTok: 67 novos, todos online (revisao do TikTok).
5. ML. [EM ANDAMENTO 16/10] (a) Copias dentro do ML FEITAS: 85 rascunhos criados e publicados (FUN104-105 +1/+1, FUN240 +5/+5, FUN955-956 +2/+2, MDM371-372 +3/+3, SSS069VW +3/+3, SSS1103CT +4/+4, SSS1105CT-MH8 +5/+2, SSS117-118 +5/+6, SSS189-190 +5/+6, SSS240FT-4 +4/+4, SSS414FD-LHB4 +5/+5, SSS907RN +1/+1; os +6 de SSS117-118 e SSS189-190 na Isadora vieram de origem da SS LIGHT). Titulos novos ate 60 em localStorage __MLT; fila __MLQ. (b) FEITO: os 85 ficaram ativos; compatibilidade copiada da origem em 31 (get-vehicle da origem devolve [{brandId,modelName,versionList:[{vehicleId,...}]}]; mandar add-vehicle com todos os vehicleId); os outros 54 tem origem SEM compatibilidade (anuncios antigos do dono), ficaram iguais a origem. Mapa novo->origem em localStorage __MLCOMP. Depois, mais 4 copias (FUN102-103, SSS013VW-MH3, SSS044VW-MH3 e SSS905RN na SS LIGHT, +1 cada) porque anuncios em revisao do ML sumiram e a loja ficou com 5. (c) PENDENTE (esperando o dono): importar da Shopee para o ML os 4 SKUs FUN253-254, FUN341-342, SSS707CV-XHB4 (tem variacao de lado/cor) e SSS091VW-MH3 (simples): perguntar ao dono como quer no ML (variacao ou 2 anuncios).
   COMO (ML): copiar = POST /api/mercado/user-product/copy JSON {id:idStr da origem ATIVA, shopCountVoList:[{count:'N',shopId:'1079313'|'1104549'}]} (aceita copiar para a outra loja); a copia vem com atributos, Numero de peca, embalagem, garantia, preco, fotos, envio e SKU, mas SEM compatibilidade e com o familyName da origem (as vezes cortado). Rascunho se le em GET /api/mercado/user-product/edit?id=&dataType=2 (parsear ids grandes como string, inclusive fmId; usar fmIdStr). Trocar o titulo do rascunho: POST /api/mercado/user-product/add JSON com a familia inteira (fmId=fmIdStr, familyCode, state, shopId, siteId, categoryId, familyName NOVO, sourceUrl, sourceVideoUrl '', userProductList:[{id, attributes, hasVariation, availableQuantity, itemSku, sourceVideoUrl '', upc, noUpcReasonType '17055160' se sem upc, noUpcReasonTxt '', upcNot, quantity, mainImage, itemList:[{id, channels, price, mshopPrice, listingTypeId, tags, conditionInfo, saleTerms, preOrder, description, shipping, mshopShipping, flexShipping}], shippingList, flexShipping}], op 1) -> script localStorage __MLSAVE (__mlSaveDraft(id,titulo)). update-family-name responde Product_existed (nao serve). Publicar rascunho: POST /api/mercado/family-product/batch-publish FORM ids=<fmIdStr,...> (o id da FAMILIA, nao do anuncio). Titulo de anuncio ATIVO: so pela tela up-edit (botao Atualizar -> user-product/batch-update).

## 58.4 Situacao em 16/10/2026 (fim da rodada) e o que ficou para o dono
- 61 SKUs com 6 ou mais nas 5 lojas. Novos nesta rodada: Shopee 128 (43 copias + 7 SKUs do ML x12 + Strada 12 + 1 FUN240-2), TikTok 67, ML 89 (85 + 4).
- FUN240-2 na SSS Shopee: 1 anuncio BANNED pela Shopee ('Par Farol De Milha Fiat Palio Stilo Idea 2001 A 2012 Vidro', R$88,88); criada 1 copia nova (Strada 2005-2012) para voltar a 6.
- SSS126FT-MH1 no ML: a SS LIGHT ficou com 0 (os 10 em revisao sumiram; o ML bloqueava como identicos) e a Isadora com 1 ativo + 9 em revisao. NAO criei mais (o ML bloqueia): decisao do dono.
- SSS716CV no ML: o dono publicou os proprios rascunhos em 16/10 (44 ativos). Fora da meta de 6, fica.
- Faltam no ML (precisa decisao do dono: variacao de lado/cor no ML ou 2 anuncios): FUN253-254, FUN341-342, SSS707CV-XHB4; e SSS091VW-MH3 (simples, pode ir pela Migracao Shopee > ML com atributos da 50.1).
- SSS101FT continua pausado em tudo (decisao do dono). SKUs numericos (Ducato, par+moldura Gol) pausados. SFM405-406, GRDL01, GRDL08, GR97CV, GR110HD fora.
- Scripts desta rodada em localStorage do app.upseller.com: __SPDRAFT (Shopee: __spSaveDraft), __MLSAVE (ML: __mlEdit, __mlSaveDraft), __TTDO2 (TikTok), __TTFIX/__TT8STEP (TikTok importados), __MLT/__T7/__EQ_TITLES (titulos), __DESC7 (descricoes).
- LICAO: abas em segundo plano morrem (Chrome descarta); so a aba ativa do dono aguenta scripts longos. Chamadas de JS acima de ~35 s caem: trabalhar em lotes curtos e guardar progresso em localStorage.

# 57. TIKTOK: 6 ANUNCIOS POR SKU (15/10/2026)

Sessao 15/10/2026. Item I do diagnostico 56.1. Loja TikTok: SSS LIGHT TIKTOK, shopId 1111840.

## 57.1 Decisoes do dono (15/10/2026)
- TikTok com 6 anuncios por SKU, igual a Shopee.
- Titulos curtos que ja existem no TikTok (116 abaixo de 85): NAO mexer agora.

## 57.2 Resultado
- Antes: 330 anuncios (310 ativos, 13 revisando, 7 inativos), 14 SKUs da Shopee sem anuncio no TikTok, 49 SKUs com menos de 6.
- Etapa 1: 32 SKUs que ja existiam completados ate 6 = 139 anuncios novos. Origem = anuncio ativo do proprio SKU no TikTok. Titulo novo = titulo da Shopee do mesmo SKU que ainda nao existia no TikTok, sem a palavra "Original" (91 a 117 caracteres, nenhum repete). FUN104-105 so tinha 3 titulos livres. Mais 1 de teste no SSS002VW.
- Etapa 2: 10 SKUs novos trazidos da Shopee (SSS117-118, SSS091VW-MH3, SSS069VW, SSS126FT-MH1, SSS189-190, SSS218HD, SSS713CV, SSS713CV-MH3, SSS713CV-XH3, SSS414FD-LHB4) + 45 copias deles (5 por SKU). SSS091VW-MH3 ficou com 1 porque a Shopee so tem 1 titulo dele.
- Total: 194 anuncios novos, todos online/reviewing (revisao do TikTok). Ao vivo no TikTok (ativo + revisando): 512.
- Preco, estoque (10), peso e medidas vieram iguais da origem.

## 57.3 Como fazer (fluxo que funcionou)
- Listar: POST /api/tiktok/product/index?pageNum=N com corpo FORM (state online ou draft, productState active/reviewing/inactive, sortName 3, sortValue 0, vagueSearchType 0, pageSize 100). Com JSON o productState e ignorado e o pageSize trava em 50. Titulo no campo itemTitle; SKU de anuncio com variacao fica na variation-list (40.2).
- Duplicar dentro do TikTok: POST /api/tiktok/product/copy JSON {"id":idStr,"shopCountVoList":[{"count":"N","shopId":"1111840"}]}. As copias caem em Rascunhos com o MESMO titulo da origem (achar por esse titulo).
- Trocar titulo do rascunho SEM abrir tela (rapido, 1 por segundo): script localStorage __TTDO2 (eval e __ttSave(id,titulo) ou __ttRun2(lista)). Le GET /api/tiktok/product/edit?id= (trocar ids grandes por string antes do JSON.parse, senao perdem precisao) e manda POST /api/tiktok/product/add (form) com: id, shopId, site, itemTitle, categoryId, description, externalProductId, sourceUrl, categoryVersion, brandInfo, attributes (so se nao for null), hasVariation, auction; sem variacao: stock, inventoryItem vazio, startingBidPrice, itemSku, price, barcodeType, barcode; com variacao: variationListStr (lista com id string, variationSku, barcode, barcodeType, price, startingBidPrice, stock, inventoryItem, imageUrl, salesAttributesJson) e variationTheme; depois imgUrl, packageWeight, weightUnit, packageLength/Width/Height, certifications [{"id":"7216311839301306117","fileList":[]}], op 1, anyway false.
- NAO usar iframe na tela de edicao do TikTok: travou a aba depois de 4 anuncios.
- Publicar copias: POST /api/tiktok/product/batch-publish FORM ids=id,id&anyway=false (blocos de 50, 20 s entre blocos). Em 30 a 70 s ficam online/reviewing.
- Trazer da Shopee para o TikTok: POST /api/move/batch-collect JSON {"ids":[idStr da Shopee],"shopIds":[1111840],"platform":"shopee"} (e o "Copiar para Lojas" da Migracao de Anuncios > Shopee). Cai em Rascunhos do TikTok com categoria vazia ou 930696, variacao que o TikTok nao aceita e fotos da Shopee.
- Arrumar esse rascunho importado: abrir /pt/products/tiktok/edit/<id>, Categoria > Usado Recentemente > "Carro e moto > Luzes do veiculo > Barras de luz e luzes de trabalho" (942344, a dos outros 305), OK no aviso, Tipo "Simples" quando vier como Variantes com 1 variante (SKU, preco e estoque continuam), botao Publicar da tela. O batch-publish NAO serve aqui (da Error.Category_empty); o Publicar da tela sobe as fotos para o TikTok. Script localStorage __TTFIX (__ttFix() e __ttPub()).

## 57.4 Pendencias do TikTok (precisam do dono)
- 1 rascunho importado da Shopee e NAO publicado: 27379422213502799 (o anuncio Shopee com SKU SSS707CV-XHB4 traz variacoes 58204302622-6000k e 58204302622-10000k, Celta Prisma xenon). Os rascunhos de FUN341-342 e FUN253-254 foram resolvidos na 57.5.
- SKU 58204365785 (Palio Siena Celebration) nao foi trazido: SKU numerico, ver 56.7.
- 6 anuncios com numero no lugar do SKU: 27379422146587381 (58204302622 Celta Prisma 2012-2014 xenon, variantes 6000k/10000k), 27379422149688901 e 27379422149689181 (Gol Voyage G6 par), 27379422149688895 (par + moldura Gol Voyage G6 branco), 27379422149688903 (Ducato Jumper Boxer), 27379422149689175 (Palio Siena Celebration).
- Fora da meta de 6: SFM405-406 (fora por decisao do dono, 55.5), unitarios FUN100, FUN101, FUN104, FUN105, FUN253, FUN254, FUN341, FUN342 (nao existem como anuncio na Shopee, sem titulos de referencia) e SSS091VW-MH3 (so 1 titulo).
- Rascunho antigo que nao e nosso: 27379422204555142 (Frontier, SKU MLBU2966387389). Nao foi mexido.
- 116 titulos curtos antigos do TikTok continuam como estavam (decisao do dono).

## 57.5 Regra do dono: anuncio com os dois lados usa o SKU do par (15/10/2026)
- Palavras do dono: "FUN253-254 e o FUN253-FUN254. O padrao e FUN253-254, pode alterar os outros que achar nesse padrao."
- Regra: anuncio com variacao de lado (Direito Passageiro / Esquerdo Motorista) cujas variantes tinham SKU de unitario (FUN253 e FUN254) passa a ter o SKU do par (FUN253-254) nas DUAS variantes. FUN240 continua como esta (ver 40.6). Mercado Livre nao foi mexido nesta rodada (na hora estava pausado; o dono liberou o ML depois, em 15/10/2026).
- TikTok: 8 anuncios. FUN341-342 em 3 (27379422146578022, 27379422146581367 e o rascunho 27379422213502802), FUN253-254 em 2 (27379422146579943 e o rascunho 27379422213502805), FUN100-101 em 2 (27379422146580451, 27379422146582397), FUN104-105 em 1 (27379422146582941). Os 2 rascunhos foram publicados (online/reviewing); na categoria 930696 o TikTok pede o atributo ANATEL: marcado Nao.
- Shopee: 14 anuncios (todos NORMAL). FUN100-101 em 6, FUN104-105 em 2, FUN341-342 em 4, FUN253-254 em 2.
- Como: POST /api/shopee/product/batch-online-sku e /api/tiktok/product/batch-online-sku (JSON, type 1, isVariantSku 1, prefixType 0, suffixType 0, idList) em 2 passos por par: oldReplaceStr FUN253 -> FUN253-254 e depois FUN254 -> FUN253-254. O oldReplaceStr aceita ancora (^FUN100$), use para nao pegar SKU maior. Em 2 da Shopee o primeiro passo nao pegou: repetir resolveu. Conferido relendo variation-list (TikTok) e /api/shopee/product/edit (Shopee). batch-online-sku NAO grava em rascunho do TikTok: rascunho so pela tela de edicao (campo SKU de cada variante).
- Revisao 15/10/2026 (ML liberado): no Mercado Livre nao existe anuncio com variacao de lado (o User Product nao tem variacoes); o unico SKU de unitario e o FUN240 (2 anuncios), que fica como esta.
- Mesmo padrao aplicado no formato do SKU: MDM343-MDM344 virou MDM343-344 em 79 anuncios (ML 12 ativos, Shopee 44 NORMAL, TikTok 23 ativos). Conferido relendo cada anuncio. Regra: SKU de par se escreve PREFIXO + numero-numero (FUN253-254, MDM343-344), nunca repetindo o prefixo. Nenhum outro SKU no formato PREFIXO123-PREFIXO124 nas 3 plataformas (anuncio e variacao).
- LAMBANCA corrigida (15/10/2026): na Shopee o batch-online-sku com isVariantSku 1 e oldReplaceStr FUN100 (sem ancora) tambem alterou o SKU PRINCIPAL do anuncio, que era FUN100-101 e virou FUN100-101-101 (14 anuncios: FUN100-101-101 x6, FUN104-105-105 x2, FUN341-342-342 x4, FUN253-254-254 x2). Corrigido com o mesmo endpoint, isVariantSku 0 e oldReplaceStr ancorado (^FUN100-101-101$ -> FUN100-101): com isVariantSku 0 ele grava o SKU principal sem mexer nas variantes. Conferido nos 14. LICAO: oldReplaceStr SEMPRE com ^ e $, e conferir o SKU principal alem das variantes.
- Dono avisou (15/10/2026) que havia SKUs numericos no TikTok: resolvido na 57.6.

## 57.6 SKUs numericos do TikTok e da Shopee (15/10/2026)
Pedido do dono: "pegue os SKU da Shopee e do ML e confira os do TikTok". Conferencia: cada anuncio do TikTok foi ligado ao da Shopee pelo externalProductId (itemId da Shopee) e ao do ML pelo titulo. Dos 528 do TikTok, so 5 nao batiam.
- Corrigidos (ML e Shopee concordam):
  - Par Gol/Voyage G6 2012-2016 (TikTok 27379422149688901 e 27379422149689181; Shopee 27379420215329408/409/410/411): 23098712818 e 22494220824 -> FUN249-250 (o ML usa FUN249-250 nos 4 anuncios desse par).
  - Kit Palio/Siena Celebration Fire 2008-2011 (TikTok 27379422149689175; Shopee 27379420215329222/446/447): 58208081527 e 58204365785 -> SSS101FT (o ML usa SSS101FT em "Siena Celebration 2008 A 2011").
  - Kit Celta/Prisma 2012-2014 xenon (TikTok 27379422146587381; Shopee 27379420215329384/385): variantes 58204302622-6000k/10000k -> SSS707CV-XHB4 (o SKU principal da Shopee ja era SSS707CV-XHB4).
  - Fiesta Rocam (TikTok 27379422146582996, estava em rectification, por isso escapou da 57.5): FUN100/FUN101 -> FUN100-101.
- PAUSADOS por duvida (regra do dono: na duvida, pausado):
  - Kit Ducato/Jumper/Boxer 2005-2012 (TikTok 27379422149688903; Shopee 27379420215329416/417, SKU 22299450082): nao existe no ML; SSS240FT e dos kits Fiat pequenos (Uno, Doblo, Punto, Idea).
  - Par farol + moldura Gol/Voyage G6 branco (TikTok 27379422149688895; Shopee 27379420215329364/365, SKU 58254055500): nenhum SKU de par com moldura no ML.
- REGRA DO DONO (15/10/2026): S10 2017-2024 e SSS716CV. SSS744CV nao existe mais: trocado por SSS716CV em 12 anuncios do ML (SS LIGHT e Isadora ML) e nas variantes de 3 anuncios do TikTok (27379422146581570, 27379422146580861, 27379422146578318), que continuam inativos como estavam. CUIDADO: o batch-online-sku do TikTok mudou o productStatus de inactive para active no UpSeller (no TikTok seguia seller_deactivated); repausado com one-update-unlist. Depois de gravar SKU em anuncio pausado, conferir o status.
- Rascunho 27379422213502799 (xenon Celta com variantes numericas) continua em rascunho, sem publicar.
- Pausar: TikTok POST /api/tiktok/product/one-update-unlist JSON {flag:false,productId}; Shopee POST /api/shopee/product/updateUnlist FORM flag=false&ids=a,b (vira UNLIST).

## 57.7 TikTok: anuncio com variantes mostra "-" na coluna SKU (15/10/2026)
- O traco na coluna SKU do TikTok NAO e SKU vazio: e anuncio com variantes, e o SKU fica dentro de cada variante (44.6). Em 15/10/2026 sao 168 anuncios assim, todos com o mesmo SKU nas variantes (conferido pela variation-list).
- O dono pediu para converter esses anuncios para "Simples" (perdendo a escolha de lado/cor) para o SKU aparecer na coluna. TESTE em 1 anuncio inativo (27379422146580861, S10): na tela de edicao, marcar Tipo "Simples" e clicar Atualizar responde code 0 mas NAO converte: o anuncio continua com variacao (hasVariation 1), o SKU principal fica "-1" e, pior, o anuncio foi REATIVADO no TikTok (platformActiveStatus activate). Repausado com one-update-unlist (precisou de 2 chamadas) e conferido: inactive / seller_deactivated. O TikTok nao deixa tirar as variantes de um anuncio ja publicado.
- Dono decidiu (15/10/2026): NAO converter. Deixar os 168 como estao.
- Dono (15/10/2026): "o kit SSS716CV ja tenho em estoque, pode ativar". Ativados no TikTok os 3 kits S10 (SSS716CV): 27379422146581570 e 27379422146578318 estao active/activate; 27379422146580861 (o do teste) ficou em REVISAO do TikTok (reviewing, seller_deactivated) por causa do Atualizar; o one-update-unlist flag true responde All.Error_failed_product_status enquanto estiver em revisao. Reativar quando sair da revisao. Ativar: one-update-unlist com flag true.
- CONCLUSAO: nao converter anuncio ativo do TikTok para Simples pelo UpSeller. Se o dono quiser a coluna preenchida, o caminho e criar anuncio novo Simples (copia) e pausar o antigo, o que precisa de decisao dele. NUNCA clicar Atualizar na tela de edicao de anuncio pausado do TikTok: reativa.

## 57.8 REGRA DO DONO: lente de policarbonato e FUN100-101, lente de vidro e FUN100-101-V (15/10/2026)
- Palavras do dono: "policarbonato FUN100-101 / vidro FUN100-101-V". Conferir titulo E descricao em todas as lojas.
- Conferencia em 15/10/2026 (139 anuncios FUN100-101 e FUN100-101-MH8): nenhum titulo cita vidro. Descricao: ML 46 (40 policarbonato, 4 vidro, 2 sem material: ASX MLB7764678856 e MLB7764666008); Shopee 58 (todas policarbonato); TikTok 29 (13 policarbonato, 12 vidro, 4 sem material: C3 Picasso, Toro, Fiesta 2011-13, Duster).
- Decisao do dono: opcao 1, trocar "vidro" por "policarbonato" na descricao e manter FUN100-101 (a Shopee dos mesmos produtos ja dizia policarbonato; as descricoes com vidro eram antigas).
- TikTok: 12 corrigidos e conferidos (Fiesta 2010-12, Renegade 2016-19, Renegade 2015-19, Fluence 2011-17, Fluence 2011-18, Ranger 2012-16, Frontier 2007-18, City/Civic 2015-19, Peugeot 207, Ecosport 2013-17, Citroen C3 2010-13, Farolete Logan). Todos continuaram active/activate (a atualizacao de descricao de anuncio ATIVO nao manda para revisao). Metodo: abrir /pt/products/tiktok/edit/<id>, interceptar o XMLHttpRequest do /api/tiktok/product/add e trocar so o campo description do corpo (form), clicar Atualizar (op 2, state online). Script em localStorage __VIDROFIX e __VSTEP (fila __VQ, progresso __VDONE).
- ML: 4 anuncios com vidro na descricao, todos EM REVISAO no ML (MLB5348100113 e MLB5348100037 Farolete Logan, "Vidro Aro Prata"; MLB7764668290 e MLB7764681114 Ranger 2012-16, "Lente lisa de vidro"). Endpoint POST /api/mercado/product/update-description (form id e description, texto puro) responde Error.Error_failed_product_status enquanto o anuncio esta em revisao. PENDENTE: rodar quando sairem da revisao (lista em localStorage __VIDRO_ML_PEND). Descricao do ML se le em GET /api/mercado/user-product/edit?id=&dataType=1 (com dataType=2 nao vem).
- Shopee: nada a corrigir.
- Os 6 sem material na descricao ficaram como estavam (nao foi pedido).

# 56. DIAGNOSTICO DA CONTA E CORRECOES EM MASSA (15/10/2026)

Sessao 15/10/2026. O dono pediu um diagnostico completo e depois escolheu a ordem: C (garantia ML) > D (compatibilidade ML) > E (categoria Shopee). G (promocoes) o dono ja fez. H (titulos repetidos) e prioridade: nao pode existir. No meio da sessao o dono mandou PAUSAR tudo que comeca com MLB (Mercado Livre) para ver depois: os itens de ML abaixo ficaram como estavam. ATUALIZACAO 15/10/2026: o dono suspendeu essa pausa, o ML esta liberado de novo.

## 56.1 Numeros do diagnostico (15/10/2026, antes das correcoes)
- ML: 729 ativos (SS LIGHT 364, Isadora ML 365), 60 pausados, 36 em revisao (19 SSS126FT-MH1 bloqueados pelo ML como identicos entre si, 17 por "fotos com marca d'agua"), 432 sem compatibilidade, 158 sem descricao, 162 titulos com mais de 60 caracteres, 94 sem garantia, 7 SKUs errados (vazio ou MLBU), 10 vendas no total.
- Shopee: 1036 NORMAL (JhonJhon 519, SSS 517), 23 UNLIST; 602 fora das categorias de iluminacao (578 em "Grade de Farol de Milha" 102295 sem ser MDM + 24 em "Bolsas de Gelo" 100712); 14 SKUs acima do teto de 6; 234 titulos com menos de 85; 11 anuncios com SKU numerico; 0 vendas, 63 visitas.
- TikTok: 310 ativos, 60 SKUs, 13 em revisao, 116 titulos curtos, 6 com id no lugar do SKU.

## 56.2 H - Titulos repetidos na Shopee (feito)
- Conferir sempre pelo index com state=online, pageSize=300 (4 paginas), agrupando por nome dentro de cada loja.
- Tinha 3 repetidos: renomeados pelo __DOONE. Resultado: 0 grupos repetidos em 1061 anuncios.

## 56.3 C - Garantia do ML em 94 anuncios (feito)
- O "Editar em Massa" do ML (family-product/save-batch-edit) falha nesses anuncios ("Falha na atualizacao do anuncio"). Nao usar.
- O que funciona: POST /api/mercado/user-product/batch-warranty, JSON {"idList":[idStr...],"warrantyType":"SELLER_WARRANTY","warrantyTimeUnit":"DAY","warrantyValue":90,"isOnline":1}. Responde code 0 com chave de tarefa; e assincrono.
- Conferir relendo o index: saleTerms (string JSON) tem que trazer "90 dias". No primeiro lote 16 de 94 nao pegaram: reenviar um por um (2 precisaram de um terceiro envio). Final: 94 de 94 com "Garantia do vendedor: 90 dias".
- Os 7 SKUs errados ficaram para depois (ver 56.7); o ML esta liberado desde 15/10/2026.

## 56.4 D - Compatibilidade do ML em 432 anuncios (feito, 427 enviados)
Endpoints (todos JSON, mesma origem app.upseller.com):
- Marcas/modelos/anos: POST /api/mercado/product-vehicle/vehicle {"site":"BR","type":1|2|3,"paramMap":{"BRAND":[id],"MODEL":[id]}} (1 marcas, 2 modelos, 3 anos). Mapas salvos em localStorage __VBR (marca->id) e __VMD ("modelo-marca"->id).
- Versoes/veiculos: POST /api/mercado/product-vehicle/list {"site":"BR","paramMap":{"BRAND":[b],"MODEL":[m],"VEHICLE_YEAR":[ids dos anos],"SHORT_VERSION":[],"ENGINE":[]}} -> data[].vehicleList[].vehicleId (MLB...) e versionName.
- Gravar: POST /api/mercado/product/add-vehicle {"compatibilities":"[{\"vehicleId\":\"MLB...\",\"position\":\"[]\",\"note\":\"\"}]","id":idStr}. Substitui a lista inteira e ja envia ao ML. Ler: GET /api/mercado/product/get-vehicle?id=idStr (null quando nao tem).
- Sincronizar do ML: POST /api/mercado/product/sync (form) ids=idStr,idStr,... (aceita varios).
- Regra usada: carro e anos vem do TITULO do anuncio (nunca inventar). Geracao do VW (G3/G4/G5/G6) limita os anos. Versao filtrada quando o titulo cita (Fiesta Supercharger, Creta Ultimate, Corolla Xrs...).
- Conferido no site do ML: MLB7813287378 mostra "Compativel com seu veiculo" para Honda Civic 1999 1.6 Ex 4p e o titulo ganhou "Compativel com Honda Civic 1999".
- Depois do sync o index mostra compatibilitiesState 2, mas a tag incomplete_compatibilities do ML pode demorar para sumir.
- Ficaram de fora (precisam do dono): FUN975-976 Polo/Golf (MLB5358844539, MLB7777005760, MLB5358822873, MLB7777005544) e FUN240-2-LH1 "Fiat Universal" (MLB5358266743, MLB5357808221). Prisma foi limitado a 2012 nos titulos "Celta/Prisma 2012 a 2016". (Estava pausado; liberado pelo dono em 15/10/2026.)

## 56.5 E - Categoria da Shopee: 602 anuncios para "Farois de Neblina" (102299)
- Categorias Shopee: 102299 Iluminacao > Farois de Neblina (certa para farol de milha); 102297 Farois e Kit Frontal; 102295 Carroceria > Grade de Farol de Milha (so para MDM, que e grade/moldura); 102287 Grades de Para-choques; 100712 Casa e Decoracao > Bolsas de Gelo (errada).
- O index da Shopee NAO traz categoryId: ler cada anuncio com POST /api/shopee/product/edit (form id=idStr) -> data.product.categoryId e attributes (string JSON: attribute_id 102293 = Part Number, valor em attribute_value_list[0].original_value_name).
- So o Part Number e obrigatorio em 102299 (POST /api/shopee/product/get-category-attribute, form shopId e categoryId).
- Salvar um anuncio ATIVO = POST /api/shopee/product/add (form) com o produto inteiro: id (idStr), shopId, site, categoryId, itemSku, name, preOrder (0/1), daysToShip, conditionInfo NEW, sourceUrl, description, descriptionType, brandInfo {"brand_id":"0","original_brand_name":"Sem marca"}, attributes (so o Part Number), hasVariation 0, price, stock, gtinCode, isPromotion, promotionId (so quando tem promocao), salePrice, salePriceDiscount (% inteiro), purchaseLimit, promotionStockSet 0, wholesales [], mainImage (urls com |), sizeChart, videoUrl, weight, packageLength/Width/Height, logistics (JSON), compatibilityInfo [], ncm, originDetail, measureUnit, cest, cfopDiff, cfopSame, csosn, op 2, state online, anyway false. Tudo vem igual do /edit; null vira vazio.
- Conferir do lado da Shopee: POST /api/shopee/product/sync (form) ids=idStr,idStr e GET /api/check-process?uuid=<chave>; depois reler o /edit. Categoria, Part Number e promocao continuaram certos.
- Anuncios com variacao (Direito/Esquerdo) pedem "transferir variacao da Shopee para variacao personalizada" na troca de categoria: 16 ficaram de fora para o dono decidir.
- Script __EC (ecat.js): __EC.one(idStr) le, monta e salva; __EC.runK(chave, lista, 1500) roda uma fila; progresso em localStorage __ECAT_DONE (seguro repetir). 4 filas em paralelo deram conta.
- Resultado: 586 de 586 trocados para 102299 (JhonJhon 294, SSS Shopee 292), 0 falhas no add. Na conferencia pelo sync 19 ainda estavam em 102295: reenviados um a um (3 s entre eles), sincronizados e confirmados. 1 ficou em REVIEWING na Shopee depois da troca (FUN205-206 JhonJhon id 27379420215329245, titulo antigo com "Farolete"). Index final: 1061 online, 0 titulos repetidos.
- Fora da troca: 16 com variacao (lista em localStorage __ECAT_LIST.V) e 7 UNLIST.
- Tempo: 4 filas em paralelo, cerca de 35 min para 586. Cada add demora de 3 a 8 s (a Shopee reprocessa as fotos: os ids das imagens mudam, e normal).

## 56.6 Lambancas e licoes desta sessao
- A pagina de edicao da Shopee prende a aba com "sair sem salvar": antes de navegar, rodar window.onbeforeunload = null e um listener de beforeunload em captura com stopImmediatePropagation, ou abrir outra aba.
- Abas abertas pelo agente somem sozinhas as vezes (id muda). Guardar tudo em localStorage e conferir tabs_context antes de cada acao.
- Um teste de compatibilidade pela tela sobrescreveu MLB7775813298 com um unico ano: o add-vehicle substitui a lista inteira, entao sempre mandar a lista completa.
- Part Numbers repetidos nos anuncios antigos do dono (12333 em 76, 12333223 em 158, 12312223321 em 21): mantidos como estavam na troca de categoria.

## 56.7 Pendente para o dono (nao mexer sem resposta)
- ML (pausa SUSPENSA pelo dono em 15/10/2026, o ML esta liberado): 7 SKUs errados (MLB7634801400 -> GRDL01?, MLB7767070474 -> SSS1306HY-XH8?, MLB7758765398 MLBU3885476516 -> FUN240-2-LH1?, MLB5342935201 MLBU607695834 -> FUN102-103?, MLB5339094649 moldura Onix -> ?, MLB5266536537 MLBU607930871 -> FUN205-206 ou MDM341-342?, MLB7586072048 -> SSS710CV?); compatibilidade de FUN975-976 e FUN240-2-LH1; 36 em revisao; 158 sem descricao; 162 titulos longos.
- Shopee: 11 anuncios com SKU numerico (23098712818 x2 e 22494220824 x2 = par Gol/Voyage G6 2012-2016 -> FUN249-250?; 58254055500 x2 = par + moldura Gol/Voyage G6 branco -> ?; 22299450082 x2 = kit Ducato/Jumper/Boxer -> ?; 58208081527 x2 e 58204365785 = kit Palio/Siena Celebration -> ?); 16 anuncios com variacao fora da troca de categoria; 234 titulos curtos (F); 14 SKUs acima do teto (J).
- TikTok: 13 SKUs da Shopee faltando, 38 SKUs abaixo de 6, 6 com id no lugar do SKU (I).

# 55. COPIA ML PARA SHOPEE - RODADA 3 (UNIVERSAIS, FUN/MDM E SSS NOVOS)

Sessao 14/10/2026. Decisoes do dono nesta rodada:
- FUN e MDM entram na copia. SFM405-406, GRDL01, GRDL08, GR97CV e GR110HD NAO entram.
- Universais (SSS905RN-MH8, SSS905RN-V, SSS907RN): pode fazer um anuncio por aplicacao veicular ate 6 por loja.
- SSS sem nenhum anuncio na Shopee: pode copiar, mesmo fluxo da 53.

## 55.1 Resultado (tudo NORMAL, 6 por SKU em cada loja)
- Universais: SSS905RN-MH8 (+4: Sandero Logan, Duster, Kwid, Mobi), SSS905RN-V (+3: Mobi, Logan Sandero 2015-2019, Kwid), SSS907RN (+4: Sandero e Logan 2008-2013).
- FUN/MDM: FUN205-206, FUN240-2, FUN240-2-LH1, FUN240-4, FUN104-105, FUN975-976, FUN249-250, FUN955-956, FUN240, MDM371-372, FUN100-101-MH8 e +1 FUN102-103 na SSS Shopee.
- FUN100-101 (23 por loja) e MDM343-MDM344 (23/21) ja passavam do teto: nao foram mexidos.
- SSS novos via Migracao: SSS069VW, SSS126FT-MH1, SSS414FD-LHB4, SSS117-118, SSS189-190, SSS218HD.

## 55.2 Como escolher a origem nos universais e FUN
- Cada titulo novo usa a aplicacao (carro e anos) que aparece nos titulos do ML do mesmo SKU. Nunca inventar carro.
- Origem = anuncio Shopee ativo do mesmo SKU cuja descricao ja traz a lista de compatibilidade com aquele carro. Ex.: SSS905RN-MH8 copiou o anuncio Argo/Cronos, cuja descricao lista Kwid, Logan, Sandero, Duster e Mobi.
- Quando a descricao da origem e de um carro so (SSS905RN-V Oroch, Master), a copia recebe descricao nova escrita para a aplicacao do titulo. O script __DOONE aceita o campo desc.
- FUN104-105 e MDM371-372 tem duas origens diferentes no mesmo SKU (Ka/Fiesta x Ecosport; moldura C4 Pallas x grade C4 Hatch/VTR). Copiar de cada origem so os titulos daquela aplicacao.

## 55.3 SSS novos pela Migracao: o que corrigir
- Selecionar 1 anuncio por SKU na Migracao (Pesquisar em Massa por SKU) e usar o "Copiar para Lojas" do topo.
- Categoria veio errada em 4 de 6 (100712 e 102010): Editar Categoria para "Farois e Kit Frontal". Nessa tela o Part Number vale para o grupo inteiro, entao colocar um valor provisorio (111111) e trocar depois pelo script.
- Estoque veio 50, 100 e ate 1000: Editar Quantidade 10.
- SSS189-190 veio com preco diferente do ML (156,28 x 169,88): Editar Preco.
- SSS218HD e SSS069VW vieram sem descricao: descricao escrita pelas fotos. Os outros 4 ja tinham descricao do ML.
- SSS117-118 veio com variacao (1 variante). O script funcionou igual.
- Ordem: Quantidade, Categoria + Part Number provisorio, Envio, Preco; depois titulo + Part Number + descricao pelo script; publicar o original; copiar 5 por loja com copy-shopee-product; trocar titulo e Part Number das copias; publicar.

## 55.4 Travamento da aba (licao importante)
- A aba que roda o script trava sozinha depois de algumas dezenas de anuncios (a ferramenta de JS deixa de responder). Provavel dialogo da pagina de edicao dentro do iframe.
- O que ajudou: iframe com sandbox (allow-scripts allow-same-origin allow-forms allow-popups), remover o iframe sem navegar para about:blank, e no maximo 2 workers.
- Se travar: fechar a aba, abrir outra no app.upseller.com, eval(localStorage.__DOONE) e rodar de novo a mesma lista. O script pula quem ja esta certo, entao e seguro repetir.
- Conferir o progresso por outra aba, lendo o servidor (titulo e Part Number de cada id), nunca confiando so no contador do script.

## 55.5 Fora do escopo por decisao do dono
SFM405-406, GRDL01, GRDL08, GR97CV, GR110HD. Anuncios do ML com SKU vazio ou MLBU continuam sem copia ate o SKU ser corrigido.

# 54. COPIA ML PARA SHOPEE - RODADA 2 (18 SKUs, 174 ANUNCIOS NOVOS)

Sessao 14/10/2026, continuacao da secao 53. Dono: "pode continuar com as copias".

## 54.1 Resultado
18 SKUs SSS completados para 6 anuncios em CADA loja (JhonJhon Parts e SSS Shopee): SSS002VW, SSS002VW-MH8, SSS004VW, SSS013VW, SSS013VW-MH3, SSS014VW, SSS036VW, SSS044VW-MH3, SSS126FT, SSS702CV, SSS702CV-MHB4, SSS710CV, SSS710CV-MHB4, SSS710CV-XHB4, SSS1103CT, SSS240FT-4, SSS707CV-MHB4, SSS1105CT-MH8.
174 copias publicadas, todas NORMAL, conferidas uma a uma (titulo, Part Number, estoque 10, peso 0,85, descricao). Online nas duas lojas: 880 anuncios.
Nenhum titulo novo repete dentro da loja. Os 3 grupos repetidos que existem sao antigos (secao 52.4).

## 54.2 Atalho: SKU que ja tem 1 anuncio ativo na Shopee
Nao precisa da Migracao. Usar o anuncio ativo da propria loja como origem do copy-shopee-product (53.2 passo 8) com count = 6 menos o que ja existe. A copia herda descricao, categoria, peso, envio, estoque e preco. Depois so trocar titulo e Part Number (53.2 passo 9). Preco das origens conferido contra o ML: todos iguais.

## 54.3 Licoes tecnicas novas
- Part Number nem sempre tem 6 digitos: o SSS014VW e outros vinham com 9 (ex.: 252353253). Achar o input do Part Number pelo VALOR atual lido do /api/shopee/product/edit (atributo 102293, campo original_value_name), nao por regex de 6 digitos. Se vier vazio, achar pelo rotulo "Part Number".
- O campo attributes do /edit as vezes vem como STRING JSON. Tratar os dois formatos.
- O script de edicao fica salvo em localStorage na chave __DOONE do app.upseller.com: em aba nova basta eval(localStorage.__DOONE) e chamar __runQ(lista, 2). Lista = [{id, title, pn}]. Ele pula quem ja esta certo.
- Rodar 2 workers em paralelo (cerca de 15 anuncios por minuto). Com 3 a aba travou. Ao terminar, matar o iframe com src about:blank antes de remover.
- A ferramenta de JS cai se a chamada passar de uns 45 s (await longo ou loop grande): rodar em segundo plano e consultar o progresso em chamadas curtas.
- Publicar em blocos de 50 com 20 s entre blocos. Leva uns 5 minutos para todos sairem de "publishing".
- 2 de 174 voltaram para Falhou com "Error.Image_API_error". Republicar o mesmo id resolveu na hora.

## 54.4 Pendencias (ainda sem 6 por loja)
- Universais com aplicacoes diferentes: SSS905RN-MH8 (2 por loja), SSS905RN-V (3), SSS907RN (2). Cada copia precisa da origem da aplicacao certa (Logan, Sandero, Kwid, Duster, Mobi, Argo, C4 Pallas, Master, Oroch, Clio).
- SSS sem nenhum anuncio na Shopee (precisa Migracao + descricao): SSS069VW, SSS126FT-MH1, SSS414FD-LHB4, SSS117-118, SSS189-190, SSS218HD.
- Fora do padrao SSS nas lojas do ML: FUN205-206, FUN249-250, FUN240-4, FUN100-101-MH8, FUN240-2, FUN975-976, FUN240-2-LH1, FUN102-103, FUN104-105, FUN955-956, FUN240, MDM371-372, SFM405-406, GRDL01, GRDL08, GR97CV, GR110HD. Esperando o dono dizer se entram.
- 6 anuncios do ML com SKU vazio ou MLBU no lugar do SKU: corrigir o SKU antes de copiar.

# 53. COPIA DO MERCADO LIVRE PARA A SHOPEE - FLUXO RAPIDO (SSS713CV)

Sessao 14/10/2026. Pedido do dono: todos os anuncios iguais em todas as lojas, copiando do ML (SS LIGHT e Isadora ML) para a Shopee (JhonJhon Parts shopId 1099666 e SSS Shopee shopId 1108318). Primeiro SKU feito: SSS713CV e variantes. Resultado: 36 anuncios NORMAL, 6 por SKU por loja.

## 53.1 Decisoes do dono (14/10/2026)
- 6 anuncios por SKU em cada loja Shopee (teto da 29.3).
- Preco na Shopee = preco do ML, sem mudar centavos.
- Estoque 10 em cada anuncio.
- Peso, medidas, envio e Part Number seguem a 52.1. Garantia 90 dias (50.1) vai na descricao.
- Mesmo conjunto de titulos nas duas lojas. Titulo nunca repete dentro da loja.

## 53.2 Fluxo que funcionou (na ordem)
1. Levantar o SKU no ML: POST /api/mercado/user-product/index (form) com searchType=5, searchValue=SKU, vagueSearchType=1, productState=active, state=online, dataType=2. Agrupar por itemSku e shopName para ver variantes e precos.
2. Conferir que nao existe na Shopee: POST /api/shopee/product/index (form) com searchType=4, searchValue=SKU, vagueSearchType=1, state=online e state=draft.
3. Copiar 1 anuncio de origem por variante: Produtos > Migracao de Anuncios > Mercado Livre > User Product. Busca por SKU fica no icone de lista (Pesquisar em Massa, um SKU por linha). "Copiar para..." na linha, marcar JhonJhon Parts e SSS Shopee, Confirmar. Cai em Rascunhos da Shopee.
4. A copia vem com problemas fixos: descricao VAZIA (o ML do SSS nao tem descricao), categoria as vezes errada (o kit basico veio como "Bolsas de Gelo", id 100712), peso, medidas, envio e Part Number vazios, estoque 50 e titulo com "Brindes".
5. Rascunhos da Shopee > selecionar > Acoes em Massa:
   - Editar Quantidade: 10.
   - Editar Categoria: "Farois e Kit Frontal" (id 102297, Pecas e Acessorios para Veiculos > Pecas de Reposicao para Automoveis > Iluminacao). Marca "Sem marca". Ja abre o Part Number.
   - Editar Atributos: Part Number. Um anuncio por loja por vez, porque o valor vale para o grupo.
   - Editar envio: ja abre preenchido com 0,85 kg, 35x25x30 e os metodos certos. So Confirmar.
6. Titulo e descricao: abrir /pt/products/shopee/edit/<idStr>, setar o input do titulo e a textarea com o setter nativo + eventos input/change/blur (os contadores 114/120 atualizam) e clicar Salvar. Toast "Com sucesso".
7. Publicar: POST /api/shopee/product/batch-publish (form) ids=<idStr separados por virgula>&anyway=false. Fica em "publishing" de 1 a 3 minutos e depois NORMAL. Durante o publishing o /api/shopee/product/edit pode falhar: conferir pelo index com state=publishing e state=online.
8. Duplicar ate 6: POST /api/shopee/product/copy-shopee-product, corpo JSON {"id":"<idStr do anuncio ATIVO>","shopCountVoList":[{"count":"5","shopId":"<shopId>"}]}. Responde uma chave PRODUCT:SHOPEE_COPY_PRODUCT. As copias vao para Rascunhos com tudo igual: estoque, peso, envio, categoria, descricao, fotos e o MESMO Part Number.
9. Nas 5 copias, trocar titulo e Part Number juntos: iframe invisivel com /pt/products/shopee/edit/<idStr>, esperar a textarea e o input do titulo, mais 2,5 s (em 2 de 30 o Part Number nao tinha carregado: com 6 s funcionou). Achar o Part Number como o unico input com 6 digitos. Setar, clicar Salvar, remover o iframe e reler o /edit. Cerca de 7 s por anuncio, rodar em segundo plano.
10. Publicar as copias em um batch-publish so e conferir pelo index: 36 NORMAL.

## 53.3 Checagens que valeram
- Titulos contra TODOS os anuncios online das duas lojas (672 em 14/10/2026, cabem em 3 paginas de 300): zero colisao.
- Por anuncio: estoque 10, peso 0,85, categoria 102297, descricao com mais de 1000 caracteres, titulo de 85 a 120 e Part Number unico (36 de 36).
- LED so no titulo do -M, Xenon so no -X.
- Saida de JS com "=" ou "&" e bloqueada pela ferramenta ("Cookie/query string data"): trocar esses caracteres antes de devolver o resultado.

## 53.4 Modelo de descricao (o ML do SSS nao tem descricao)
Linha de abertura com o titulo curto. Paragrafo "Kit de farois auxiliares de milha completo, desenvolvido para instalacao no <modelo> <anos>". "Compativel com:" um ano por linha. "Caracteristicas:" Produto Novo, encaixe da lampada, chicote com conectores originais. "Conteudo da Embalagem:" conforme as fotos. "Importante:" valor do kit completo, brindes sem garantia, instalacao por profissional, mau uso fora da garantia, "Garantia de fabrica: 90 dias contra defeitos de fabricacao".
Conteudo do SSS713CV pelas fotos: 2 farois com suportes, chicote, rele, botao, kit de parafusos e presilhas, 2 pingos LED T10 (brinde). No basico vao 2 halogenas H3 (brinde). No -MH3 vao 2 Super LED 6000K H3. No -XH3 vai o kit xenon H3 com 2 reatores. Os "4 brindes" dos titulos do ML sao as 2 H3 e os 2 T10. Brinde nao entra no titulo.

## 53.5 Publicado: SSS713CV (Corsa Classic 2010 a 2016)
| Loja | SKU | itemIds |
|---|---|---|
| JhonJhon Parts | SSS713CV | 23695383025, 23699879661, 58220457234, 58220461789, 58220461815, 58270474351 |
| SSS Shopee | SSS713CV | 23995373207, 58220461860, 58270473444, 58270474364, 58270474370, 58270474381 |
| JhonJhon Parts | SSS713CV-MH3 | 58270473468, 58270474491, 58270474499, 58270474510, 58270474523, 58270477939 |
| SSS Shopee | SSS713CV-MH3 | 58220457337, 58220461753, 58270474257, 58270474273, 58270474290, 58270474300 |
| JhonJhon Parts | SSS713CV-XH3 | 58220461899, 58270473453, 58270474401, 58270474409, 58270474419, 58270474431 |
| SSS Shopee | SSS713CV-XH3 | 58220461929, 58270473460, 58270474458, 58270474482, 58270477872, 58270477894 |

Precos: R$ 229,98, R$ 249,98 e R$ 269,98. Os 6 titulos de cada SKU sao os mesmos nas duas lojas.

# 52. PESO E MEDIDAS PADRAO DO PACOTE NA SHOPEE (0,85 KG E 35 X 25 X 30 CM)

Sessao 06/10/2026. Lojas Shopee JhonJhon Parts e SSS Shopee. Regras dadas pelo dono durante a correcao de 28 anuncios que estavam em Falhou com o erro "Campo obrigatorio em falta: [Numero da Peca (Part Number)]".

## 52.1 Regras do dono (06/10/2026)

- PESO PADRAO DO PACOTE: 0,85 kg (850 g).
- MEDIDAS PADRAO DA EMBALAGEM: 35 x 25 x 30 cm. No UpSeller a ordem dos campos e Largura 35, Comprimento 25, Altura 30.
- O peso e as medidas acima sao o padrao quando o dono nao informar outro valor.
- METODO DE ENVIO: marcar todos, menos Retirada pelo Comprador. Hoje isso da Shopee Xpress e Expresso Aereo na JhonJhon Parts e Correios na SSS Shopee.
- NUMERO DA PECA (PART NUMBER) NA SHOPEE: numero aleatorio de ate 6 digitos. Palavras do dono: "isso nao e importante".
- COMPATIBILIDADE DE AUTOPECAS: nao e usada na Shopee. Palavras do dono: "desconsidere por enquanto". A regra 50.1 de preencher por ano continua valendo no Mercado Livre.
- GARANTIA: continua 90 dias em todo anuncio (regra 50.1).
- QUANTIDADE: o dono escolheu 10 para este lote. Nao foi dada como padrao.

## 52.2 O que foi feito

28 anuncios, 14 produtos em cada loja. Em todos: Part Number aleatorio de 6 digitos (um diferente por anuncio), peso 0,85 kg, medidas 35 x 25 x 30, envio conforme a 52.1 com Envio Gratis desmarcado, e quantidade 10. O Part Number foi conferido nos 28 relendo a tela de edicao.

Publicados e ativos (productStatus NORMAL): 27, sendo 14 na JhonJhon Parts e 13 na SSS Shopee.

Ficou em Falhou: 1, na SSS Shopee, "Par Farol De Milha Celta Prisma 2007 2008 2009 2010 2011 2012 2013 2014 2015" (SKU FUN102-103). Na primeira tentativa deu "Erro de API de imagem, por favor, reapresentar mais tarde". Na segunda o UpSeller avisou que o anuncio se repete com outro da loja e a publicacao foi cancelada.

Garantia: nas 14 descricoes conferidas (uma por produto) o prazo aparece como 3 meses ou 90 dias, ou nao e citado. Os 21 anuncios ativos do SKU SSS712CV tambem foram conferidos e estao com "Garantia de fabrica: 90 dias".

## 52.3 Fluxo que funcionou no UpSeller (Shopee, aba Falhou)

- O botao Salvar da edicao individual e o da tela Editar em Massa NAO gravam enquanto Quantidade, Peso do Pacote e Envio estiverem vazios ("O Quantidade nao pode estar vazio"). Nao adianta preencher so o atributo.
- Acoes em Massa grava um campo por vez, sem validar o resto do anuncio:
  - Editar Atributos: uma aba por loja e um grupo por categoria. Marcar a caixa do atributo para liberar o campo. O valor vale para todos os anuncios do grupo, entao para dar um numero diferente a cada anuncio e preciso selecionar um de cada loja por vez.
  - Editar envio: uma aba por loja, com Peso do Pacote, Tamanho do Pacote e os metodos de envio. Marcar o metodo clicando no NOME dele. A linha marcada cresce e empurra as de baixo, entao conferir a tela antes de clicar na proxima.
  - Editar Quantidade: campo Nova Quantidade.
- Depois, Publicar em Massa. O anuncio passa por Publicando e cai em Ativo ou volta para Falhou.
- A mensagem de erro da aba Falhou e a da ultima tentativa de publicar. Ela nao some ao corrigir o campo, so ao publicar de novo.
- Ao republicar um anuncio igual a outro ja ativo na loja, o UpSeller pergunta "Voce quer mesmo publicar?". No lote de 28 esse aviso nao apareceu e titulos iguais subiram juntos.

## 52.4 Pendencias

- Titulos repetidos na mesma loja entre os publicados (secao 29: duplicado na mesma loja conta como spam na Shopee):
  - "Par Farol De Milha Neblina Gol Voyage G6 2012 2013 2014 2015 2016": itemIds 58219853372 e 58269877161 na JhonJhon Parts, 58269877168 e 58269877143 na SSS Shopee.
  - "Par Farol De Milha Celta Prisma 2007 2008 2009 2010 2011 2012 2013 2014 2015": itemIds 58269872398 e 58219853280 na JhonJhon Parts. Na SSS Shopee o ativo e o 58219853272 e o repetido e o que ficou em Falhou.
- 17 dos 27 ativos mostram a etiqueta vermelha "Esgotado" ao lado do SKU no UpSeller (SKUs SSS702CV, SSS702CV-MHB4, SSS002VW-MH8, FUN102-103, FUN104-105 e FUN975-976). Os dados do anuncio dizem productStatus NORMAL e estoque 10. O armazem do UpSeller esta vazio e a Sincronizacao de Estoque esta desativada. Nao foi conferido na Shopee, porque a pagina do produto pediu captcha.
- Continuam em Falhou outros 208 anuncios das duas lojas, a maioria com "Campo obrigatorio em falta:Atributos".

# 51. REGRA DO FULL LED: PRODUTO CONSTRUIDO EM LED (SSS1305HY NA SHOPEE)

Sessao 05/10/2026. Regra dada pelo dono durante a replica do SSS1305HY nas lojas Shopee JhonJhon Parts e SSS Shopee.

## 51.1 A regra

Produto CONSTRUIDO em LED leva "Full LED" no titulo, mesmo quando o SKU nao tem o sufixo M. O dono mandou usar "Full LED" em vez de "Led", porque o produto e construido em LED.

Sao duas coisas diferentes e as duas regras valem juntas:
- LED, Super LED, LED 6000K, LED 6K: e a lampada LED que acompanha o kit. Continua valendo o item 3.4: so entra no titulo se o SKU tiver o sufixo M.
- Full LED: a propria peca e de LED, como o DRL e a seta do SSS1305HY. Entra no titulo por causa do produto, nao do SKU. Nao gera sufixo M e nao muda o SKU.

Como escrever:
- "Full LED" uma unica vez no titulo, junto da parte da peca que e LED. Exemplos: "DRL Full LED", "DRL Daylight e Seta Full LED", "Daylight DRL Full LED".
- Nao escrever "LED" solto, "Led" nem "Super LED" nesses produtos.
- So usar quando a descricao do anuncio de origem ou o dono confirmar que a peca e de LED. Na duvida, perguntar antes de publicar.

## 51.2 Onde foi aplicada: SSS1305HY

Par de farol auxiliar Hyundai Creta 2020 a 2024 com grade e moldura, DRL e seta, R$ 499,88. A descricao do anuncio de origem diz "DRL FULL LED" e o titulo dele ja trazia "Drl E Seta Full Led" (itemId 58269786068, JhonJhon Parts, nao foi mexido).

Publicados em 05/10/2026: 20 anuncios, 10 na JhonJhon Parts e 10 na SSS Shopee, com os 10 titulos da 51.3. E o mesmo conjunto nas duas lojas e nenhum repete dentro da loja. O dono foi avisado do teto de 6 por SKU por loja (regra 29.3) e autorizou os 10 em cada loja. A JhonJhon Parts ficou com 11 anuncios desse SKU contando o original.

itemIds na ordem dos titulos da 51.3:
- JhonJhon Parts: 58269795379, 58219776765, 58269801022, 58269801036, 58269795875, 58269795886, 58219776802, 58269795907, 58219776824, 58219776833
- SSS Shopee: 58219776701, 58269795958, 58219776880, 58219776888, 58269795983, 58219776905, 58219776914, 58269796007, 58219776937, 58269796025

## 51.3 Titulos validados com Full LED (ate 120 caracteres, servem de modelo)

- Par Farol de Milha Hyundai Creta 2020 2021 2022 2023 2024 Grade Moldura DRL Daylight e Seta Full LED Plug and Play (114)
- Par Farol Milha Neblina Creta 2020 21 22 23 24 Hyundai Moldura Grade Luz Diurna DRL Full LED com Pisca Plug and Play (116)
- Par Farol Auxiliar Neblina Hyundai Creta 2020 a 2024 Grade Moldura DRL Daylight Full LED com Seta Lente Policarbonato (117)
- Par Farol de Milha Creta Attitude 2020 2021 Hyundai Moldura Grade DRL Full LED Luz Diurna e Pisca Chicote Plug and Play (119)
- Par Farol Neblina Hyundai Creta Action 2021 2022 2023 2024 Grade Moldura Daylight DRL Full LED Seta Lente Policarbonato (119)
- Par Farol Milha Auxiliar Creta Limited 2021 a 2024 Hyundai Moldura Grade DRL Full LED Luz Diurna e Pisca Plug and Play (118)
- Par Farol de Milha Hyundai Creta Comfort 2022 2023 2024 Grade Moldura DRL Daylight Full LED com Seta Integrada Chicote (118)
- Par Farol Neblina Creta Platinum 2022 23 24 Hyundai Moldura Grade Luz Diurna DRL Full LED e Pisca Lente Policarbonato (117)
- Par Farol Auxiliar Milha Hyundai Creta 2020 2021 2022 2023 2024 Moldura Grade DRL Full LED Função Pisca Plug and Play (117)
- Par Farol de Neblina Creta 2020 21 22 23 24 Hyundai Grade Moldura Daylight DRL Full LED e Seta Lente Policarbonato (114)

Versoes e anos do Creta conforme a 50.4.

---

# 50. COPIA DA SHOPEE PARA O MERCADO LIVRE (LOJA ISADORA ML): TITULO 60, GARANTIA 90 DIAS, COMPATIBILIDADE POR ANO

Sessao 05/10/2026. Empresa nova (prefixo SSS). Loja nova no Mercado Livre: Isadora ML, shopId 1104549. O dono tinha 30 rascunhos do SSS1306HY (Kit Creta 2020 a 2024, grade preta com DRL + pisca, lampada H8, R$ 887,00) copiados da Shopee, com titulo de 69 a 120 caracteres.

## 50.1 Regras novas do dono (05/10/2026)

- GARANTIA: sempre 90 dias, em todo anuncio. No ML foi gravado como Garantia do Vendedor, 90 dias, que e o que os anuncios da loja sslight ja usam.
- COMPATIBILIDADE: sempre preencher os veiculos compativeis de acordo com o ano.
- PADRAO DE TITULO NO ML: em cada palavra a primeira letra e maiuscula e as restantes sao minusculas, que e como o proprio ML padroniza (DRL vira Drl, de vira De, a vira A). Palavras do dono: "a primeira letra sempre e maiuscula e as restantes sao minusculas".
- O teto de 6 anuncios por SKU por loja (regra 29.3) valeu tambem no ML: dos 30 rascunhos, so 6 foram publicados.
- O kit SSS1306HY serve nas duas carrocerias do Creta. Palavras do dono: "Serve nas duas".
- Atributos obrigatorios do ML: Marca SSS LIGHT, Numero de peca igual ao SKU, Tipo de veiculo Carro/Caminhonete.
- Forma de entrega: Mercado Envios 2 com Mercado Envios Agencias (unica logistica que a conta Isadora ML oferece), sem frete gratis oferecido pelo vendedor e sem retirada pessoal.

## 50.2 Limite de titulo no ML (User Product)

O limite de 60 vale para o Nome da Familia. O campo do UpSeller aceita ate 200, mas o ML corta em 60 no meio da palavra (visto na loja sslight: "...Seta Sequencial Bran") e ainda acrescenta atributos como cor e lado no fim do titulo publico. Contar 60 antes de salvar.
O ML padroniza a caixa por conta propria: os 6 titulos foram digitados com DRL, de e a, e ficaram no ar com Drl, De e A. Por isso o padrao da regra 50.1 ja deve ser usado na digitacao.

## 50.3 SEO: palavras mais buscadas da categoria

Na edicao individual, ao clicar no campo Nome da Familia, o UpSeller abre o painel "Palavras mais buscadas por Categoria". Em Farois de Milha sao 44 termos. "farol de milha hyundai creta" esta entre os 10 primeiros. 39 dos 44 usam "milha", 1 usa "neblina", 1 usa "auxiliar", 11 trazem o ano exato e 3 trazem "drl".
Regra pratica: usar a frase exata Farol de Milha + Marca + Modelo sempre que couber, e o ano por extenso quando couber.
Por vendas nao deu para decidir: os 81 anuncios do Creta na JhonJhon Parts tinham 0 vendas nesta data.

## 50.4 Versoes do Creta e anos

Conferido no catalogo de veiculos do ML: Attitude 2020 e 2021. Limited 2021 a 2024. Comfort e Platinum 2022 a 2024. Action 2021 a 2024 (o catalogo nao tem Action 2020).
Pelas noticias de lancamento, sem conferir ano a ano no catalogo: Prestige 2020 e 2021. Ultimate e N Line 2022 a 2024.
NAO usar Smart no titulo: dos 3 anuncios com Smart na JhonJhon Parts, 2 foram excluidos pela propria Shopee, e sao as unicas exclusoes da loja.
NAO usar Sport de 2020 em diante: o catalogo do ML nao lista essa versao de 2020 a 2024.
Sem LED no titulo quando o SKU nao tem o sufixo M. Sem Original e sem Farolete. Excecao: produto construido em LED leva "Full LED" (secao 51).

## 50.5 Publicado: 6 anuncios ativos na Isadora ML (SKU SSS1306HY, R$ 887,00)

| Anuncio | Titulo no ar | Compatibilidade gravada |
|---|---|---|
| MLB7751477154 | Kit Farol De Milha Hyundai Creta 2020 A 2024 Grade Drl Seta | Creta 2020 a 2024, todas as versoes, 51 veiculos |
| MLB5336161739 | Kit Farol De Milha Creta Action 2020 2021 2022 2023 2024 Drl | Action 2021 a 2024, 8 veiculos |
| MLB7751481564 | Kit Farol De Milha Hyundai Creta Comfort 2022 2023 2024 Drl | Comfort 2022 a 2024, 5 veiculos |
| MLB5336161773 | Kit Farol De Milha Hyundai Creta Attitude 2020 2021 Drl Seta | Attitude 2020 e 2021, 10 veiculos |
| MLB5336219757 | Kit Farol Milha Neblina Creta Limited 2021 A 2024 Drl Pisca | Limited 2021 a 2024, 7 veiculos |
| MLB5336161877 | Kit Farol De Milha Hyundai Creta Platinum 2022 2023 2024 Drl | Platinum 2022 a 2024, 5 veiculos |

Todos ativos, sem revisao e sem erro, conferidos relendo do servidor. Garantia do Vendedor de 90 dias nos 6. O ML marcou os 6 como Frete Gratis mesmo com a opcao de nao oferecer.
Os outros 24 rascunhos ficaram intocados, com titulo longo e atributos vazios. Nao publicar na Isadora ML.

## 50.6 Fluxo que funcionou no UpSeller (ML User Product)

1. Rascunho so salva com Marca, Numero de peca, Tipo de veiculo e Forma de entrega preenchidos. Os erros sao "O Atributos nao pode estar vazio" e "O Forma de entrega nao pode estar vazio". Vale na edicao individual e na edicao em massa.
2. Edicao em massa: marcar os rascunhos e clicar em Editar em Massa, que abre aba nova. Marcar so os campos que vai mexer. O lapis no cabecalho da coluna aplica em todas as linhas (Atributos, Forma de entrega, Tipo de Garantia). O titulo se edita clicando na celula. Usar o botao Salvar. O botao ao lado e Salvar & Publicar, cuidado.
3. Publicar: em Rascunhos, Mais e Publicar para um, ou Publicar em Massa para varios. Foi 1 primeiro para testar e depois os outros 5. Todos ficaram ativos em seguida.
4. Compatibilidade so existe para anuncio ATIVO: em Ativo, Mais e "Adicionar Compatilidades de Autopecas", ou direto em /pt/products/mercado/auto-parts-create/ID com upType=item. Adicionar Manualmente, filtrar Marca, Modelo, Ano e Versao, Confirmar e depois "Atualize ao Mercado Livre". O ML pode aceitar menos veiculos do que os selecionados: 54 viraram 51 e 6 viraram 5.
5. Conferencia: GET /api/mercado/user-product/edit com id e dataType=2 para rascunho ou anuncio, e GET /api/mercado/product/get-vehicle com id para a compatibilidade.

## 50.7 Reserva de titulos validados do SSS1306HY (ate 60 caracteres, ja no padrao de maiusculas, para OUTRAS lojas)

- Kit Farol Milha Hyundai Creta 2020 2021 2022 2023 2024 Drl
- Kit Farol De Milha Creta 2020 2021 2022 2023 2024 Drl Seta
- Kit Farol De Milha Hyundai Creta 2020 A 2024 Drl Com Pisca
- Kit Farol De Milha H8 Hyundai Creta 2020 A 2024 Moldura Drl
- Kit Farol De Milha Hyundai Creta 2020 21 22 23 24 Drl Seta
- Kit Completo Farol De Milha Hyundai Creta 2020 A 2024 Drl
- Kit Farol Milha Neblina Hyundai Creta 2020 A 2024 Drl E Seta
- Kit Farol De Neblina Hyundai Creta 2020 A 2024 Drl Com Seta
- Kit Farol Neblina Creta 2020 2021 2022 2023 2024 Grade Drl
- Kit Farol Milha Auxiliar Hyundai Creta 2020 A 2024 Grade Drl
- Kit Farol De Milha Creta 2020 A 2024 Chicote Relé Botão Drl
- Kit Farol De Milha Hyundai Creta 2020 A 2024 Luz Diurna Drl
- Kit Farol De Milha Hyundai Creta N Line 2022 2023 2024 Drl
- Kit Farol Milha Neblina Creta N Line 2022 A 2024 Drl E Seta
- Kit Farol De Milha Hyundai Creta Ultimate 2022 2023 2024 Drl
- Kit Farol Milha Neblina Creta Ultimate 2022 A 2024 Drl Seta
- Kit Farol De Milha Hyundai Creta Prestige 2020 2021 Drl Seta
- Kit Farol Milha Neblina Creta Prestige 2020 2021 Grade Drl
- Kit Farol De Milha Hyundai Creta Action 2020 A 2024 Drl Seta
- Kit Farol Milha Neblina Creta Action 2020 A 2024 Grade Drl
- Kit Farol Milha Creta Comfort 2022 2023 2024 Grade Drl Seta
- Kit Farol Milha Neblina Creta Attitude 2020 2021 Drl E Pisca
- Kit Farol De Milha Hyundai Creta Limited 2021 2022 2023 2024
- Kit Farol Milha Neblina Creta Platinum 2022 A 2024 Drl Seta

## 50.8 Pendencias

- A loja sslight esta com os 14 anuncios em revisao, status suspended_for_prevention.
- Na JhonJhon Parts (Shopee) o SSS1306HY tem 29 anuncios ativos, o SSS1306HY-MH8 tem 30 e o SSS1306HY-XH8 tem 20, todos acima do teto de 6.
- Sobram 24 rascunhos do SSS1306HY na Isadora ML.
- Atributos opcionais vazios nos 6 anuncios: conector da lampada, tipo de luz, lado e origem.
- O titulo do anuncio Action diz 2020, mas o catalogo do ML so tem Action de 2021 em diante.

---

# 49. REPLICA DO SSS905RN-DLT622-MH8 (5 COPIAS, TETO DE 6) E FLUXO DE DUPLICACAO NA SHOPEE

Sessao 01/10/2026. Loja JhonJhon Parts, que e a unica loja Shopee da empresa nova. O dono pediu 20 ou mais replicas. Foi alertado da secao 29 (duplicado na mesma loja conta como spam na Shopee) e escolheu ficar no teto de 6 da regra 29.3.

## 49.1 Resultado

O MH8 tem agora 6 anuncios ativos (NORMAL), todos com 6 fotos e preco R$ 849,88:
- 58269527410, o original
- 58269544077, XEi 2.0
- 58269544084, Altis
- 58269548857, XRS 2.0
- 58219534473, GLi Upper
- 58219534483, Sedan
Os titulos foram conferidos contra os 412 da loja: nenhum repete.

## 49.2 Fluxo que funcionou

1. Na listagem, Mais e depois "Duplicar como Novo Anuncio". Marcar a loja, colocar a quantidade e Confirmar. As copias vao para Rascunhos, com o mesmo titulo, as mesmas fotos e o mesmo SKU.
2. Para listar os rascunhos: POST /api/shopee/product/index (form) com state=draft.
3. Para trocar o titulo do rascunho: abrir /pt/products/shopee/edit/<idStr> num iframe (mesmo metodo da 48.3), interceptar o /api/shopee/product/add e trocar so o segmento name=. O botao a clicar e "Salvar". A tela de rascunho tem os botoes Salvar e Publicar.
4. Para publicar: POST /api/shopee/product/batch-publish (form), com ids separados por virgula e anyway=false. Os 5 ficaram NORMAL e ganharam itemId em cerca de 25 s.

## 49.3 Titulos reservas do MH8 (validados, ate 120 caracteres, nenhum repete na loja)

So usar se o anuncio for para OUTRA loja ou para substituir algum dos 6. Nao passar de 6 na JhonJhon Parts.

- Kit Farol de Milha Super LED 6000K Toyota Corolla GLi 1.8 2018 2019 Moldura Daylight DRL com Seta Completo (106)
- Kit Completo Farol de Milha Super LED 6000K + Daylight DRL Seta LED Toyota Corolla 2018 2019 Moldura (100)
- Kit Farol Auxiliar Super LED 6000K Corolla GLi 2018 19 com Moldura Daylight DRL Seta LED Chicote Relé Botão (107)
- Kit Farol de Milha Toyota Corolla XEi 2018 2019 Moldura DRL Daylight Seta LED e Lâmpada Super LED 6000K (103)
- Kit Farol Neblina Corolla Altis 2.0 2018 19 Daylight DRL com Seta LED + Super LED 6000K Moldura Completa (104)
- Kit Farol Milha Toyota Corolla 1.8 2.0 2018 2019 Super LED 6000K Luz Diurna DRL Seta Moldura Plug and Play (106)
- Kit Farol de Milha Neblina Super LED 6000K Toyota Corolla XRS 2018 2019 Moldura Daylight DRL Seta Completo (106)
- Kit Moldura Daylight DRL Seta LED + Farol de Milha Super LED 6000K Toyota Corolla 2018 2019 Kit Completo (104)
- Kit Farol Auxiliar Neblina Toyota Corolla GLi Upper 2018 19 Daylight DRL Seta Super LED 6000K Moldura (101)
- Kit Farol de Milha Corolla 2018 2019 Toyota Super LED 6000K com Moldura DRL Luz Diurna e Seta Chicote Relé (106)
- Kit Farol Milha Super LED Branco 6000K Toyota Corolla XEi 2.0 2018 19 Daylight DRL Seta Moldura Completa (104)
- Kit Farol Neblina Daylight DRL Seta LED Toyota Corolla GLi 1.8 2018 19 Super LED 6000K Moldura Botão Relé (105)
- Kit Farol de Milha Auxiliar Corolla Altis 2018 2019 Moldura Daylight DRL Seta LED Super LED 6000K Completo (106)
- Kit Completo Farol Neblina Super LED 6000K Toyota Corolla XRS 2.0 2018 19 Moldura Daylight DRL com Seta (103)
- Kit Farol Milha + Moldura DRL Daylight Seta LED Toyota Corolla Sedan 2018 2019 Super LED 6000K Chicote Relé (107)
- Kit Farol de Milha Neblina Toyota Corolla 2018 19 Super LED 6000K Daylight DRL Seta LED Moldura Plug and Play (109)
- Kit Farol Auxiliar Milha Corolla XEi GLi Altis 2018 2019 Super LED 6000K Moldura Daylight DRL Seta LED (102)

## 49.4 Pendencias

- O SSS905RN-DLT622 tem 21 anuncios na mesma loja, bem acima do teto de 6. Isso e risco de spam na Shopee e precisa de decisao do dono.
- Um titulo do DLT622 diz "Corolla 17 2018 2019". 2017 esta fora da faixa do produto. Corrigir.

---

# 48. TROCA DA FOTO DE CAPA EM MASSA NA SHOPEE (LOJA NOVA, PREFIXO SSS)

Sessao 01/10/2026. Loja JhonJhon Parts (empresa nova, SKU com prefixo SSS). O dono subiu a capa certa num anuncio e pediu para replicar nos outros com o mesmo SKU.

## 48.1 O que foi feito

SKU SSS905RN-DLT622 (Corolla 2018/2019, farol de milha + moldura DRL com seta): 21 anuncios ativos.
Modelo: itemId 58269531579, que ja estava com a capa certa.
Os outros 20 tiveram SO a primeira foto trocada. As outras 4 fotos de cada um continuaram como estavam. Zero falha, todos seguem NORMAL.
O SSS905RN-DLT622-MH8 (itemId 58269527410, versao LED) ja estava com as fotos certas, subidas pelo dono, e nao foi mexido.

## 48.2 Endpoints

Ler o anuncio completo: POST /api/shopee/product/edit, form-urlencoded, id=<idStr>. Devolve data.product com mainImage, que sao as URLs separadas por |, sendo a primeira a capa.
Salvar o anuncio: POST /api/shopee/product/add, form-urlencoded, com id preenchido. E o mesmo endpoint de criar. O corpo e montado pela tela de edicao, com cerca de 40 campos. Os campos attributes, logistics e brandInfo vao num formato DIFERENTE do que o /edit devolve, entao NAO da para montar o corpo a partir do /edit.
Reenviar o corpo fora da tela (fetch ou XHR limpo) deu HTTP 501 do nginx. Nao insistir nisso.

## 48.3 Metodo que funcionou (interceptar a propria tela)

1. Na pagina da listagem, abrir /pt/products/shopee/edit/<idStr> num iframe invisivel do mesmo dominio.
2. Esperar aparecer o botao "Atualizar" e aguardar uns 2,5 s para o formulario carregar.
3. Trocar o XMLHttpRequest.prototype.send DO IFRAME. Quando a URL for /api/shopee/product/add, trocar no corpo so o segmento mainImage=, colocando a URL da capa nova no lugar da primeira. O resto do corpo segue intacto.
4. Clicar no botao. Resposta {"code":0} = ok. O iframe e removido depois.
Cada anuncio leva uns 6 a 8 segundos. Dentro de uma chamada de tool cabem uns 4 anuncios, entao rodar o loop em segundo plano (sem await) e ir consultando o andamento.

## 48.4 Armadilhas

- A Shopee hospeda de novo a imagem que voce manda. A capa nova volta com um ID diferente do anuncio modelo (exemplo: mtsikg93hceebe virou mtsiug740qv494). Isso e normal. Para conferir, olhe se a capa mudou em relacao a antiga e compare visualmente, nao pelo ID.
- A tela de edicao tem beforeunload. Para sair dela via JS: window.onbeforeunload=null e depois location.replace(...).
- Na listagem o campo id vem como numero e perde precisao (passa de 2^53). Usar sempre idStr.
- Se um interceptor que BLOQUEIA o envio for instalado na aba principal, a tela fica travada no spinner. Recarregar antes de tentar de novo.

---

# 47. COROLLA PAUSADO EM TODAS AS PLATAFORMAS

Sessao 10/08/2026. O dono mandou pausar os Corollas.

## 47.1 Escopo levantado

544 anuncios estavam no ar com Corolla no titulo: 126 ativos no Mercado Livre, 389 com productStatus NORMAL na Shopee e 29 no TikTok (28 ativos mais 1 em revisao).

Fora do ar e nao mexidos: 135 pausados e 127 em revisao no ML, 12 UNLIST e 104 SELLER_DELETE na Shopee, 19 em retificacao no TikTok.

Por tipo: 282 farol/milha/farolete, 200 lampada e kit LED/xenon, 41 moldura e grade, 20 tapete, 1 outro.

Conferido que nenhum dos 544 era anuncio universal citando Corolla junto de outros carros. Todos eram especificos de Corolla.

## 47.2 Resultado

Pausados 543: 126 no Mercado Livre, 389 na Shopee e 28 no TikTok. Zero falha.

Verificado revarrendo as tres plataformas: 0 anuncio de Corolla ativo no ML, 0 com status NORMAL na Shopee, 0 ativo no TikTok.

Sobrou 1 anuncio de Corolla no TikTok em Revisando, que nao foi tocado.

## 47.3 Endpoints de pausa (mapeados nesta sessao)

Mercado Livre: POST /api/mercado/product/one-update-unlist, form-urlencoded, campos flag=false e productId com o id interno. Um anuncio por chamada, efeito imediato.

Shopee: POST /api/shopee/product/updateUnlist, form-urlencoded, campos flag=false e ids com varios ids separados por virgula. Aceita lote, usei 20 por chamada. Pausado na Shopee aparece como productStatus UNLIST.

TikTok: POST /api/tiktok/product/one-update-unlist, corpo em JSON {flag:false, productId:"id"}. Nao aceita form-urlencoded, se mandar form devolve Error_failed. Um por chamada.

Em todos, flag=false pausa. Para republicar a expectativa e flag=true, mas isso nao foi testado.

CUIDADO: /api/mercado/product/updateBatch-product-status NAO e pausar, e encerrar o anuncio (close). No bundle o nome da funcao e mercadoProductBatchClose. Nao usar para pausa.

## 47.4 DESCOBERTA: o filtro productState quebra a listagem da Shopee

O endpoint /api/shopee/product/index aceita o parametro productState sem reclamar, mas devolve total=0 e lista vazia. Nao da erro, so retorna nada.

O jeito certo e mandar apenas pageNum, pageSize e state=online, e depois filtrar pelo campo productStatus do resultado (NORMAL, UNLIST, SOLDOUT, SELLER_DELETE, SHOPEE_DELETE).

Isso invalida as consultas da Shopee feitas nas secoes 45 e 46, onde a conclusao foi "nao existe esse SKU na Shopee". A consulta estava furada. Precisa revarrer a linha CV do Celta na Shopee.

O pageSize maximo e 300, mesmo pedindo 500.

## 47.5 Como identificar o modelo pelo titulo

Nao usar busca por substring: FIT casa dentro de GRAFITE, o que gerou 60 falso positivos de "anuncio universal" na primeira contagem. Usar limite de palavra, tipo (inicio ou caractere nao alfanumerico) + MODELO + (fim ou caractere nao alfanumerico), e testar o criterio em exemplos conhecidos antes de confiar.

## 47.6 Pendencias

Um anuncio de Corolla no TikTok em Revisando.

Revarrer a linha CV do Celta na Shopee com o metodo correto da secao 47.4.

# 46. CELTA LINHA CV - RODADA 2 (ATP710CV, STS710CV-UHB4, GR702CV/GR703CV)

Sessao 10/08/2026. Continuacao da secao 45, com tres regras novas ditadas pelo dono.

## 46.1 Regras novas do dono

ATP710CV e o GRX710CV. A familia ATP entra no padrao GRX igual STS e FGS0.

STS710CV-UHB4 pode pausar. E da linha ULTRALED, que o dono nao vende mais.

GR702CV: se o anuncio for KIT vira GRX702CV; se for PAR vira GR102-103.

Definicao final do dono (10/08/2026): GR702CV e o GR102 (direito) e GR703CV e o GR103 (esquerdo). O sufixo CV cai, porque a numeracao 102/103 ja e a do Celta.

## 46.2 O que foi aplicado

ATP710CV virou GRX710CV. Como o servidor faz replace por regex, a mesma regra corrigiu o sufixo junto. Dois anuncios alvo: MLB3454482259 (ATP710CV-XHB4 virou GRX710CV-XHB4, pausado) gravou; MLB4586688273 (ATP710CV) esta em revisao e ficou bloqueado.

STS710CV-UHB4 (MLB3707696475) ja estava pausado. Nada a fazer.

Varredura extra de legado do Celta: 20 jobs montados sobre STS730CV, STS731CV, STS734CV, STS735CV, STS736CV, STS742CV, STS746CV, STS754CV, STS763CV e STS765CV. Todos viraram GRX mantendo numero e sufixo. Cerca de 14 anuncios pausados gravados.

O sufixo -TIC foi removido no mesmo passo: STS735CV-TIC-LH3 virou GRX735CV-LH3.

X8HB4 continua sendo normalizado para XHB4.

Na Shopee e no TikTok nao existe nenhum desses SKUs. Tudo era do Mercado Livre.

## 46.3 GR702CV e GR703CV - RESOLVIDO

MLB4586678093, SKU GR702CV, titulo Farolete Celta 2007 a 2015 Direito, ativo.

MLB4586703821, SKU GR703CV, titulo Farolete Celta 2007 a 2015 Esquerdo, ativo.

Nenhum dos dois era KIT nem PAR: sao unitarios de um lado so. O dono decidiu que GR702CV e o GR102 (direito) e GR703CV e o GR103 (esquerdo), sem o sufixo CV.

Aplicado e verificado em 10/08/2026: 4398048078645984 (MLB4586678093) virou GR102 e 4398048078645985 (MLB4586703821) virou GR103. Os dois seguem ativos. Nao existia esse SKU na Shopee nem no TikTok.

## 46.4 DESCOBERTA: batch-online-sku e assincrono

O endpoint responde code 0 com msg success e uma chave de tarefa no campo data, tipo PRODUCT:MERCADO_USER_PRODUCTACTION_PRODUCT_BATCH_SKUONLINE:3161:64000.

Ou seja, code 0 significa apenas que a tarefa foi enfileirada, NAO que o SKU foi gravado. Sempre reconsultar a lista depois para confirmar. Isso explica os falsos sucessos das secoes anteriores.

## 46.5 DESCOBERTA: oldReplaceStr diferencia maiuscula de minuscula

O SKU sts704cv-mh27, gravado em minusculo, nao foi atingido pela regra STS704CV-MH27 em maiusculo. Antes de montar o job, conferir a caixa exata do SKU como esta gravado.

## 46.6 Estados que continuam bloqueando gravacao

Anuncio em revisao (under_review) segue recusando alteracao de SKU. No Celta sobraram 9 nesse estado.

Alem disso apareceu um caso novo: MLB4127196406 (STS742CV), pausado, sem variacao, recusa gravar nos dois endpoints e nos dois niveis de isVariantSku. Caso isolado, tratar na mao.

## 46.7 Efeito colateral a revisar

O anuncio 4398047682551480, titulo Kit Farol Auxiliar Onix Prisma Lt 2018 Super Led 6k E Pingo Branco, entrou na varredura porque o titulo tem a palavra Prisma, e o SKU foi de STS704CV-MH27 para GRX704CV-MH27.

E um anuncio de ONIX, linha que o dono mandou deixar para depois. A troca so aplicou a regra STS vira GRX, entao nao ficou errado, mas fica registrado caso ele queira reverter.

Licao: filtrar por CELTA sozinho nao serve, porque Prisma aparece tanto no Celta quanto no Onix.

## 46.8 Pendencias do Celta

Nove anuncios em revisao: ATP710CV, STS710CV-XHB4 (2), STS710CV-X8HB4 (2), STS730CV, STS735CV-LH1-TIC, STS736CV, STS742CV, STS742CV-MHB4, STS763CV.

Um pausado teimoso: MLB4127196406 (STS742CV).

GR702CV e GR703CV: RESOLVIDO, viraram GR102 e GR103 (secao 46.3).

Confirmar se GRX765CV, que e Celta 1999 a 2005 com Kit Super Led 6000k no titulo, precisa de sufixo -M mais encaixe.

Confirmar qual kit e qual entre GRX702CV, GRX703CV, GRX707CV e GRX710CV, porque hoje os titulos se misturam entre milha, neblina e auxiliar.




# 45. LINHA CV DO CELTA AJUSTADA

Sessao 09/08/2026, rodada 5. O dono confirmou que o Celta esta bem na linha CV e que sao os unicos da linha GM que ja estao ok.

## 45.1 Conversoes aplicadas

STS702CV, STS707CV e STS710CV, com todos os sufixos, viraram GRX mantendo numero e sufixo.

FGS0707CV virou GRX707CV.

STS710CV-X8HB4 virou GRX710CV-XHB4, seguindo a regra de que X8 mais encaixe e o mesmo que X mais encaixe.

GRX707CV-XBH4 era erro de digitacao e virou GRX707CV-XHB4.

GRX102-103 virou GR102-103, porque numeracao de par nao pode ter o X.

## 45.2 Resultado

Trinta e um registros gravados: 15 no Mercado Livre, 5 na Shopee e 11 na TikTok. Dez ficaram bloqueados.

## 45.3 DESCOBERTA sobre estados que bloqueiam gravacao

No Mercado Livre, anuncio em revisao nao aceita alteracao de SKU. Foram 5 casos.

Na TikTok, anuncio congelado e anuncio em retificacao tambem nao aceitam. Foram 5 casos. Anuncio inativo aceita normalmente.

Em todos esses casos a API responde code 0 com success e nao grava nada. Confirmar sempre relistando.

## 45.4 DESCOBERTA sobre os dois niveis de SKU

O SKU pode estar no nivel do anuncio ou no nivel da variante. O campo isVariantSku decide qual dos dois e alterado. Para garantir, mandar a mesma substituicao duas vezes, uma com isVariantSku 0 e outra com 1.

## 45.5 Endpoints da Shopee

Listagem: POST em api barra shopee barra product barra index, form-urlencoded, com searchType igual 4 para buscar por SKU e productState igual NORMAL ou UNLIST ou BANNED. No Mercado Livre o searchType do SKU e 5.

Gravacao: POST em api barra shopee barra product barra batch-online-sku, mesmo corpo JSON do Mercado Livre.

## 45.6 Pendencias do Celta

Convivem quatro codigos de kit: GRX702CV, GRX703CV, GRX707CV e GRX710CV. Falta o dono dizer qual e qual, por tipo de botao, para poder corrigir os anuncios que hoje tem MLB ou numero no lugar do SKU.

STS735CV para Celta 1999 a 2006, STS742CV e STS765CV nao tem equivalente GRX na base. Aguardando definicao.

ATP710CV e ATP710CV-XHB4 usam prefixo desconhecido.

STS710CV-UHB4 e ultraled, produto que o dono nao tem mais.

GR702CV e GR703CV estao em anuncio de farol unitario direito e esquerdo, mas o unitario do Celta deveria ser GR102 e GR103.

# 44. PARRN99 RESOLVIDO E REGEX NA GRAVACAO DO MERCADO LIVRE

Sessao 09/08/2026, rodada 4.

## 44.1 Regra do dono

PARRN99 e o GR100-101. O sufixo LED2D quer dizer LED, ou seja e o M de MH8 e MHB4. Portanto PARRN99 mais LED2D e o GR100-101-MH8.

Regra pratica: PARRN99 com LED no titulo vira GR100-101-MH8. PARRN99 sem LED no titulo vira GR100-101 limpo.

## 44.2 O que foi aplicado

Doze anuncios do Mercado Livre tinham PARRN99. Nove viraram GR100-101-MH8 e tres viraram GR100-101. Sobrou zero PARRN99 na base. Os tres sem LED eram Sandero Stepway 2011 a 2015, Ford Ranger 2013 a 2015 e Peugeot 307 2011 a 2012.

## 44.3 Tela nova do Mercado Livre

As lojas AUTOPLUS, Jz acessorios, Ama Ecommerce, MACHADO e FAROIS BR migraram para User Product. A tela antiga mostra so 149 ativos. A tela nova fica em barra pt barra products barra mercado barra up-active e mostra 5406 ativos, 4877 pausados e 4757 em revisao.

## 44.4 Endpoints do User Product

Listagem: POST em api barra mercado barra user-product barra index. Corpo form-urlencoded. Campos: dataType igual 2, hasCatalogProduct igual 0, sortName igual 3, sortValue igual 0, vagueSearchType igual 0 para busca exata, searchType igual 5 para buscar por SKU, searchValue, productState igual active ou paused ou under_review, state igual online, pageNum e pageSize.

Gravacao de SKU: POST em api barra mercado barra user-product barra batch-online-sku. Corpo JSON com type 1, startNumber vazio, isVariantSku 1, prefixType 0, suffixType 0, idList com os ids internos, oldReplaceStr e newReplaceStr.

O id do idList nao e o MLB. E o campo id ou idStr que vem da listagem.

## 44.5 DESCOBERTA IMPORTANTE sobre o oldReplaceStr

O campo oldReplaceStr e tratado como expressao regular pelo servidor. Caractere especial precisa ser escapado com barra invertida. O sinal de mais enviado cru nunca casa, e a resposta ainda assim volta code 0 com success sem gravar nada. Foi isso que travou o PARRN99 mais LED2D. Depois de escapar o sinal de mais funcionou na hora. Regra: sempre relistar depois de gravar para confirmar, nunca confiar so no code 0.

## 44.6 Numero azul da TikTok

O numero que comeca com 1734 ou 1735 na tela da TikTok e o item id da TikTok Shop, nao e SKU e nao da para editar. Quando o SKU aparece como traco e porque o anuncio tem variacao e o SKU esta dentro da variante.

## 44.7 Pendente

Duzentos e quarenta registros com GRX mais numeracao de par, sendo 121 no Mercado Livre e 119 na Shopee. A correcao e tirar o X. O maior grupo e GRX100-101-LH8 com 204 registros. Aguardando liberacao do dono.

Existem tambem 23 anuncios ativos na TikTok com SKU do produto pai ainda errado, herdado do Mercado Livre, sendo que em 5 deles a variante ja esta correta.

# 43. REGRAS NOVAS DO DONO E PAUSA NO TIKTOK

Sessao 09/08/2026, continuacao da rodada 3.

## 43.1 Regras confirmadas pelo dono

Uno em kit usa a familia FUN240, ou seja o codigo fica GRX240FT. Se for par segue a regra normal de par.

Punto em kit tambem fica GRX240FT.

Kangoo 1.6 Sce 2024 e 2025 em kit fica GRX905RN.

Fit 2015 a 2021 em par fica GR100-101. Atencao: GR181-182 e do Fit 2003 a 2006 e nao serve.

Fiat Titano 2025 em par fica GR100-101.

Palio Siena El 2008 a 2012 kit ficou como pular por enquanto.

## 43.2 Anuncios que o dono mandou pausar

Farol De Milha Barra Slim 12 Led 36w, dois anuncios. Farol Milha Auxiliar 9 Leds Quadrado 27w Amarelo Universal, um anuncio. Kit Fiat Fast Back 2022 a 2026 full led, um anuncio. Kit Fiat Pulse Drive 1.3 At Audace, um anuncio. Kit farol de Milha Neblina Auxiliar Lente de Vidro 2020 a 2023 sem modelo no titulo, dois anuncios. Total de sete anuncios pausados.

## 43.3 Endpoint de pausa do TikTok

Para pausar um anuncio de cada vez use /api/tiktok/product/one-update-unlist com corpo JSON contendo flag false e productId como string.

O endpoint /api/tiktok/product/update-unlist e a versao em massa e responde Common_Error.Select_at_least_one quando recebe productId, entao em script vale usar o one-update-unlist em laco.

Depois de pausar, o anuncio sai da aba Ativo, aparece na aba Arquivado e o productStatus na listagem passa a ser inactive.

## 43.4 Gravacoes desta rodada

Treze anuncios gravados e conferidos: GRX905RN em tres Kangoo, GRX240FT em quatro Uno Vivace Way Attractive, GRX240FT em tres Punto, GRX240FT em um Uno 2011 a 2016 sem led, GR100-101 no par do Fit 2015 a 2021 e GR100-101 no par do Titano 2025.

Situacao da loja TikTok depois desta rodada: 527 anuncios ativos, sendo 414 com SKU valido e 113 pendentes. Os pendentes se dividem em linha GM 49, acessorios 29, moldura e suporte 23 e farol 12.

## 43.5 Farois que ainda dependem do dono

March 2011 a 2020 unitario com duas variantes de lado. Civic 2015 a 2021 par. Palio Siena El 2008 a 2012 kit. Aircross Citroen 2011 a 2018 kit. Aircross 2018 e 2019 botao alternativo, dois anuncios. Uno 2011 a 2016 com led, dois anuncios, falta definir o sufixo de encaixe. Fiesta New 2015 a 2017 par com super led 6k. Amarok 2015 e 2016 com Jetta 2011 a 2014 par. Honda HRV 2019 e 2020 lado direito. Civic 2017 a 2019 lado direito unitario, onde pela regra de paridade cairia em GR192 mas esse codigo ainda nao existe na base.

# 42. API DO UPSELLER REMAPEADA E RODADA 3 DO TIKTOK

Sessao 09/08/2026. Reconstrucao total do estado depois que a navegacao apagou as variaveis da sessao anterior.

## 42.1 Paginacao das listagens

O parametro pageNum precisa ir na QUERY STRING da URL e nao no corpo do POST. Se pageNum for enviado dentro do corpo a API devolve sempre a pagina 1 e a loja parece muito menor do que e. Isso vale para TikTok, Mercado Livre e Shopee.

## 42.2 Formato do corpo das requisicoes

Os endpoints de catalogo do Mercado Livre e da Shopee usam corpo form-urlencoded e nao JSON. Enviando JSON o total sempre volta zero. Ja os endpoints do TikTok aceitam JSON normalmente.

## 42.3 Endpoints de catalogo que funcionam

O Mercado Livre migrou as lojas AUTOPLUS, Jz acessorios, Ama Ecommerce, MACHADO e FAROIS BR para User Product. A tela antiga mostra so 149 anuncios. O endpoint certo agora e /api/mercado/user-product/index com os campos dataType 2, hasCatalogProduct 0, sortName 3, sortValue 0, pageSize, productState e state online. Sem o dataType 2 o total volta zero.

Shopee usa /api/shopee/product/index com sortName 3, sortValue 0, productState NORMAL e state online.

TikTok usa /api/tiktok/product/index com state online, sortName 3, sortValue 0 e vagueSearchType 0. O titulo no TikTok vem no campo itemTitle e nao no campo title como nas outras plataformas.

## 42.4 Tamanho atual da base

Mercado Livre ativo 5406, pausado 4877 e em revisao 4757. Shopee NORMAL 14066. Somando da 29106 registros de referencia. TikTok tem 1373 registros no total sendo 534 ativos.

## 42.5 Contrato correto para gravar SKU no TikTok

Endpoint /api/tiktok/product/batch-online-sku com corpo JSON e os campos type 1, startNumber vazio, isVariantSku espelhando hasVariation, prefixType 0, suffixType 0, idList com a lista de ids, oldReplaceStr e newReplaceStr.

O campo se chama idList. Usando productId, productIds, ids ou productIdList a API responde Error.Select_one_product. Faltando prefixType e suffixType a API responde code zero e success mas nao grava nada, que era exatamente a falha silenciosa que estava atrapalhando.

O oldReplaceStr continua sendo interpretado como expressao regular pelo servidor, entao caractere especial precisa de escape. A gravacao e assincrona, entao vale esperar cerca de tres segundos antes de reler a variation-list. Quando uma variante falha, repetir a mesma chamada costuma resolver.

Esse contrato foi obtido interceptando a propria tela do UpSeller em Acoes em Massa e depois Editar SKU e depois a aba Modificar SKU.

## 42.6 Regra de lado em uso

Unitario direito recebe numero par e unitario esquerdo recebe numero impar. Aplicado no Corolla 2009 a 2014 onde direito ficou GR334 e esquerdo ficou GR333.

## 42.7 Sandero confirmado pelo dono

O codigo antigo PARRN99+LED2D equivale a GR100-101-MH8. O par de farol de milha do Sandero com super led fica GR100-101-MH8 e o kit continua GRX905RN ou GRX905RN-MH8 quando tem led.

## 42.8 Importancia do ano no funil de sugestao

O funil que so comparava palavras do titulo errou o HB20, sugerindo GRX036HY que e da geracao 2016 a 2019 para um anuncio de 2012 a 2015. Depois de exigir sobreposicao de ano entre o titulo do anuncio e o titulo dos anuncios do catalogo, a sugestao correta apareceu sozinha, GRX033HY-XH11. Ano agora e criterio obrigatorio antes de aceitar qualquer sugestao automatica.

O mesmo cuidado derrubou a sugestao GR181-182 para o Fit 2015 a 2021, porque GR181-182 e do Fit 2003 a 2006. Esse anuncio ficou pendente de decisao.

## 42.9 Correcoes gravadas nesta rodada

Foram 16 anuncios do TikTok corrigidos e conferidos um por um relendo a variation-list.

MDM475-476 no suporte do Fiorino. MDM371-372 no acabamento do C4 Pallas. GR102-103 no par Celta Prisma em dois anuncios. GRX710CV no kit Celta Prisma. GRX706CV no kit Montana em dois anuncios. GRX731CV no kit S10. GRX901RN no kit Clio 2003 a 2012. GRX402FD no kit Ranger. GR100-101-MH8 no par Ranger com led 6k. GR100-101 no par Ranger 2012 a 2021. GRX905RN no kit Duster Oroch. GRX033HY-XH11 no kit HB20 com xenon. GR334 e GR333 no Corolla em dois anuncios.

A loja TikTok saiu de 385 para 401 anuncios com SKU valido de um total de 534.

## 42.10 Pendentes do TikTok

Linha GM com 49 anuncios, que o dono pediu para deixar por ultimo. Acessorios como barra de led, lampada, tapete e afins com 29 anuncios. Moldura e suporte com 23 anuncios. Farol de milha ainda sem codigo definido com 32 anuncios, esses dependem de resposta do dono sobre modelos como Kangoo 2024, Titano 2025, Fast Back, Pulse, Uno Vivace, Punto, Aircross, Amarok com Jetta, Fiesta New, March, Civic e Fit.

# 41. TIKTOK SHOP RODADA 2: oldReplaceStr E REGEX E REGRA DA STRADA

Sessao 09/08/2026. Pedido do dono: A ESTRADA SE FOR 2020 E GRX132FT SE NAO E ESSE GRX126FT QUE VC ACHOU MESMO, PODE ALTERAR O RESTANTE DOS SKU DO tik tok.

## 41.1 Regra nova de nomenclatura da Strada

Strada 2020 em diante usa GRX132FT. Strada anterior a 2020, linha Working e Trecking de 2009 a 2019, usa GRX126FT. Essa regra do dono tem precedencia sobre o titulo identico encontrado no catalogo, que apontava GRX105FT. O anuncio 4 Farol Milha Palio Strada Siena Adventure nao entra nessa regra porque e produto multi modelo com codigo proprio FUN240-4.

## 41.2 Descobertas tecnicas da API TikTok

O parametro de paginacao de /api/tiktok/product/index e pageNum. Com page, pageNo, current, pageIndex ou offset a API responde 200 e devolve sempre a primeira pagina, dando a falsa impressao de que a loja tem apenas 50 anuncios.

O campo oldReplaceStr de /api/tiktok/product/batch-online-sku e interpretado como EXPRESSAO REGULAR pelo servidor. Por isso SKU com parenteses nunca era gravado. A solucao e escapar o parenteses com barra invertida dentro do oldReplaceStr. Assim da para limpar sufixos tipo PASSAGEIRO e MOTORISTA que vinham entre parenteses.

O campo isVariantSku precisa espelhar hasVariation. Anuncio com hasVariation zero exige isVariantSku zero, senao a API responde code zero e success mas nao grava nada.

Anuncio sem nenhum SKU nao pode ser gravado por replace direto, porque oldReplaceStr vazio e no-op. Solucao em dois passos: primeiro chamar com type zero e startNumber 1 para semear um SKU qualquer, depois ler variation-list e trocar o valor semeado pelo SKU correto com type um. Com type zero e isVariantSku um o valor semeado vira -default; com isVariantSku zero vira o proprio startNumber.

A gravacao e assincrona. Depois do POST espere cerca de tres segundos antes de reler variation-list, senao a verificacao acusa falso negativo.

## 41.3 Endpoints de catalogo

Mercado Livre usa /api/mercado/user-product/index e Shopee usa /api/shopee/product/index. Os dois exigem form urlencoded com sortName 3, sortValue 0, vagueSearchType 0, pageNum, pageSize, productState e principalmente state igual a online. Sem o campo state a API devolve total zero.

## 41.4 Funil novo: SOURCE

Cada anuncio TikTok guarda sourceId, sourcePlatform e sourceUrl apontando para o anuncio original de Mercado Livre ou Shopee de onde foi clonado. No Mercado o sourceId vem no formato puid, barra vertical, itemId. Esse funil identifica o mesmo anuncio fisico em outro canal e por isso e a evidencia mais forte que existe, acima de TITULO e de FUZZY.

Origem das 44 correcoes gravadas nesta rodada:

| Funil | Anuncios |
|---|---|
| TITULO exato unanime | 22 |
| SOURCE mesmo anuncio no ML ou Shopee | 9 |
| REGRA DO DONO Strada | 4 |
| FUZZY Jaccard 0.75 ou mais | 5 |
| ITEM, o SKU era id de anuncio ML | 2 |
| MECANICO GR905RN vira GRX905RN | 2 |

## 41.5 Resultado

A loja Autoplus Tik Tok tem 535 anuncios ativos. Antes desta rodada 331 estavam no padrao. Depois: 373. Foram gravados e verificados 44 anuncios, todos relidos via variation-list.

Restam 162 fora do padrao: 66 da linha GM Chevrolet, que continua parada por ordem do dono; 15 de outra linha de produto, tapete, bandeja, chicote e kit de lampada; 11 acessorios, moldura, grade, suporte, acabamento e botao, que precisam de codigo MDM proprio; e 70 farois sem evidencia suficiente.

## 41.6 Farois pendentes por modelo

| Modelo | Anuncios |
|---|---|
| Sem modelo identificado | 8 |
| Uno | 7 |
| Civic | 5 |
| Corolla | 5 |
| Etios | 4 |
| Fit | 4 |
| Ranger | 3 |
| Kangoo | 3 |
| HR-V | 3 |
| Punto | 3 |
| Aircross | 2 |
| Sandero | 2 |
| Demais modelos com 1 anuncio cada | 21 |

Etios continua na lista porque o dono mandou pausar essa linha, entao os anuncios nao foram renomeados.

## 41.7 Casos esperando decisao do dono

Kit Farol Milha mais 2 Super Led Golf Gti Sportline 2008 a 2014 recebeu GR207-208-MHB4. Duas evidencias independentes, o anuncio de origem e a imagem identica, apontam esse codigo, mas o titulo comeca com Kit, o que pela regra pediria prefixo GRX. Fica registrado para o dono confirmar.

Kit Farol Milha Ka 2015 2016 2017 Botao Modelo Alternativo tinha empate entre GRX413FD e GRX445FD por titulo. Foi gravado GRX413FD porque e o SKU do anuncio de origem.

Farol De Neblina Corolla 2018 2019 e unitario e o titulo nao diz o lado, entao nao foi alterado. Pela regra, direito seria GR334 e esquerdo GR333.

Par Farol Neblina Pajero Dakar 2009 tem no catalogo o SKU GR100-101-ZH8, com sufixo ZH8 que nao existe no padrao. Validos sao MHB4, MH8, MH11, MH3, LH e XH. Nao foi aplicado.

Par Acabamento Farol De Milha C4 Pallas e acabamento, nao farol, entao nao recebeu GR100-101.

## 41.8 Observacao sobre o catalogo geral

Ao reindexar o catalogo, 5407 ativos ML, 4876 pausados ML, 4757 em revisao ML e 14067 Shopee, apareceram varios anuncios de Shopee que ainda tem como SKU o proprio id do anuncio. Sao justamente as origens de boa parte dos 70 farois pendentes do TikTok. Corrigir essas origens no Shopee resolve o TikTok em cascata.

---

# 40. TIKTOK SHOP MAPEADO E PRIMEIRA CORRECAO EM MASSA

Sessao 07/08/2026 parte 4. Pedido do dono: "TENTE ARRUMAR O SKU DA LOJA tiktok SHOP, EU TE DOU AUTORIZACAO" e, na sequencia, "pode continuar arrumando esses" (os erros mecanicos de digitacao levantados no inventario da secao anterior).

## 40.1 A loja no UpSeller

TikTok Shop e canal AUTORIZADO. Loja unica: Autoplus Tik Tok, shopId 773197. Caminho: Produtos > TikTok Shop > Ativo, rota /pt/products/tiktok/active.

| Aba | Anuncios |
|---|---|
| Ativo | 518 |
| Arquivado | 54 |
| Revisando | 52 |
| Falha na Revisao | 696 |
| Congelado | 19 |
| Excluidos pela TikTok Shop | 34 |
| Total da sidebar | 1373 |

## 40.2 ACHADO PRINCIPAL: no TikTok o SKU mora na VARIACAO, nao no anuncio

No Mercado Livre e na Shopee o SKU util vem no campo itemSku do anuncio. No TikTok o itemSku do pai vem quase sempre nulo e o SKU real fica em variationSku. Lendo so a lista, 365 dos 518 ativos pareceriam estar sem SKU; lendo a variacao, o numero de vazios de verdade cai para 21. Quem ler so o grid vai concluir errado.

| Classificacao dos 518 ativos pelo SKU efetivo | Qtd |
|---|---|
| GRX | 205 |
| MLB (id de anuncio no lugar do SKU) | 194 |
| So numero | 44 |
| GR | 24 |
| Vazio de verdade | 21 |
| Outros | 20 |
| STS | 8 |
| FUN240 | 1 |
| FUN legado | 1 |

## 40.3 Endpoints do TikTok no UpSeller

| Acao | Metodo e rota | Corpo |
|---|---|---|
| Listar anuncios | POST /api/tiktok/product/index | form-urlencoded, productState active ou inactive, state online, shopIds, sortName, sortValue, pageNum, pageSize |
| Contadores | POST /api/tiktok/product/get-online-count | JSON |
| Variacoes de um anuncio | POST /api/tiktok/product/variation-list | JSON com productId |
| Editar SKU em massa | POST /api/tiktok/product/batch-online-sku | JSON |
| Pausar um | POST /api/tiktok/product/one-update-unlist | JSON com flag e productId |
| Pausar em massa | POST /api/tiktok/product/update-unlist | JSON com flag e productIdList |

Corpo real do batch-online-sku, capturado do botao Editar SKU aba Modificar SKU:

| Campo | Valor |
|---|---|
| type | 1 |
| startNumber | vazio |
| isVariantSku | 1 |
| prefixType e suffixType | 0 |
| idList | lista de idStr dos anuncios |
| oldReplaceStr | SKU antigo |
| newReplaceStr | SKU novo |

A aba Gerar SKU NAO serve para gravar um SKU exato: o campo Valor Inicial e obrigatorio e sempre concatena um numero no fim. Anuncio sem nenhum SKU so pela pagina de edicao individual.

## 40.4 Como o SKU certo foi descoberto

Tres funis, nesta ordem de confianca. ITEM: o proprio SKU errado e o ID de um anuncio do Mercado Livre, entao basta ler esse anuncio no ML e copiar o SKU ja corrigido; foi o funil mais forte. TITULO: titulo normalizado identico ao de um anuncio ML ou Shopee com SKU bom, exigindo resposta unanime. FUZZY: semelhanca de tokens (Jaccard) maior ou igual a 0,75 contra o catalogo bom, tambem exigindo unanimidade.

A imagem NAO funciona como evidencia no TikTok. A CDN e outra (ibyteimg.com) e nunca bate com mlstatic nem com susercontent. Zero casos resolvidos por imagem.

## 40.5 Resultado no TikTok Shop

Foram lidos 572 anuncios (518 ativos mais 54 arquivados). Desses, 239 ja tinham SKU bom e 333 estavam errados. Sairam 145 propostas e foram gravados 103 anuncios em 70 grupos. Todos foram reconferidos relendo variation-list: 103 de 103 corretos.

| Evidencia usada | Gravados |
|---|---|
| ITEM (id do ML dentro do SKU) | 45 |
| TITULO exato | 42 |
| FUZZY maior ou igual a 0,75 | 16 |

| Motivo de rejeicao | Qtd |
|---|---|
| Linha GM, adiada pelo dono | 22 |
| SKU vazio, precisa edicao individual | 4 |
| Base bloqueada pelo dono | 4 |
| Strada, precisa o dono confirmar | 4 |
| Tipo incoerente entre KIT, PAR e unitario | 3 |
| Etios, o dono mandou pausar | 2 |
| Anuncio de acabamento/moldura, nao e farol | 1 |
| LED incoerente com o sufixo M | 1 |
| Sufixo invalido ZH8 | 1 |

## 40.6 Faxina mecanica de SKU em Mercado Livre e Shopee

Segunda parte do pedido. Varredura do catalogo vivo (ML ativo, ML pausado, ML em revisao e Shopee NORMAL) aplicando so as regras mecanicas ja confirmadas pelo dono, sem inventar codigo novo. Resultado: 473 anuncios em 234 grupos, sendo 432 no ML e 41 na Shopee, mais 24 anuncios de repescagem em 12 grupos que estavam em estados nao varridos na primeira passada.

| Regra mecanica aplicada | Anuncios |
|---|---|
| STS para GRX | 239 |
| FUN para GR (FUN240 preservado) | 182 |
| Sufixo NH para MH (erro de digitacao) | 20 |
| Remocao do -TIC | 11 |
| Zero a mais no codigo, GRX0112VW para GRX112VW | 9 |
| FGS e FGS0 para GRX | 9 |
| Zero faltando, GRX15VW-MH3 para GRX015VW-MH3 | 3 |

Ficaram DE FORA de proposito: tudo que termina em CV (linha GM, adiada pelo dono), BFM (o dono mandou pausar, nao renomear), CHI-TIC-TAC (chicote, o TIC ali faz parte do nome do botao) e FUN112-113 (o dono nao trabalha mais).

## 40.7 Duas armadilhas tecnicas descobertas nesta sessao

O parametro do campo de busca chama searchValue, NAO searchContent. Com o nome errado a API responde 200 e devolve o catalogo inteiro, o que faz qualquer conferencia dar falso positivo. Sempre confirmar que o total voltou menor que o total geral.

No batch-online-sku, isVariantSku precisa ser 0 quando o anuncio NAO tem variacao. Com isVariantSku 1 em anuncio sem variacao a API responde code 0 e success mas nao grava nada. Foi exatamente isso que segurou 15 anuncios do ML na primeira rodada.

## 40.8 Pendencias abertas para o dono

Strada no TikTok: o funil aponta GRX126FT para "Strada Working", mas existe a regra antiga do dono de que "todas essas Stradas sao GRX132FT". 4 anuncios parados esperando definicao.

Etios no TikTok: 2 anuncios ainda no ar. O dono ja disse que nao tem mais Etios. Falta autorizacao para pausar no TikTok.

GR100-101-ZH8: sufixo ZH8 nao existe na tabela valida. Provavel XH8 ou LH8, nao da para adivinhar.

4 anuncios do TikTok sem nenhum SKU precisam de edicao individual, porque a tela de massa nao grava SKU exato.

Um anuncio da Shopee com SKU literalmente "sts" em minusculo e sem titulo, id 4398046602148961, nao foi tocado.

15 anuncios do Mercado Livre travados por ATRIBUTO, nao por SKU. Sao 1x FUN314-2, 9x FUN100-101, 2x STS145FT-LH1, 1x FUN103, 1x FUN313-314 e 1x FUN279-280. O ML recusa a gravacao com error-3510 invalid.item.attribute.values nos atributos SIDE_POSITION (valor "Ambos os lados") e VEHICLE_PARTS_POSITION (valor "Direito"). Enquanto o atributo nao for corrigido no anuncio, NENHUMA edicao de SKU passa. Isso liga direto com o reparo de atributos das secoes anteriores.

# 39. DECISOES DO DONO - GR117-118 E CLIO, AIRCROSS OPCAO B

## 39.1 GR117-118 = CLIO. NAO e universal.
Palavras do dono: "GR117-118 CLIO NAO E UNIVERSAL".
Isso fecha a pendencia da secao 35.7, mas ABRE uma bem maior.

**ACHADO GRAVE: 29 anuncios no ar usam GR117-118 em carro que NAO e Clio.**

| | Anuncios no ar (4 lojas) | No cronograma |
|---|---|---|
| GR117-118 em Clio - OK | 8 | 10 |
| GR117-118 em outro carro - CONFERIR | **29** | 25 (retirados) |
| Total | 37 | 35 |

Carros errados encontrados: Nissan March, Nissan Versa, Nissan Sentra, Nissan Livina,
Nissan Grand Livina e Renault Master.
Distribuicao no ar: AUTOPLUS 10 | MULTIPARTS 14 | REIS SHOPEE 12 | Jz acessorios 1.

**ESSES 29 ANUNCIOS SOMAM 106 VENDAS. NAO FOI MEXIDO EM NADA.**

Duas leituras possiveis, e NAO da pra decidir sem o dono:
- (1) O SKU esta errado nesses 29 e o certo e outro codigo. Nesse caso e correcao de SKU.
- (2) O GR117-118 tambem SERVE em March/Versa/Sentra/Livina. Faz sentido tecnico:
  Clio e Renault, March/Versa/Sentra/Livina sao Nissan, e Renault-Nissan e a mesma alianca -
  farol de milha compartilhado entre plataformas e comum. As 106 vendas sem reclamacao
  reforcam essa leitura.

Regra do repo: NUNCA inventar SKU, na duvida relatorio de erro. E: levantar vendas antes de
qualquer pausa. Cumprido. **Aguardando o dono dizer se e (1) ou (2).**

Enquanto isso: os 25 do cronograma que nao sao Clio foram RETIRADOS e ficaram em
`__HOLD_GR117` no localStorage. Os 10 de Clio ficaram e agora estao VALIDADOS.

## 39.2 AIRCROSS - opcao B aprovada pelo dono
Decisao: "pode com a letra B" = Aircross sai de vez, inclusive o que ja esta no ar.
Ja retirados do cronograma os 5 que eu tinha planejado (secao 38.3).

**Lista dos 16 no ar nas 4 lojas** (salva em `__AIRCROSS_OUT`):
AUTOPLUS 4 | Jz acessorios 3 | MULTIPARTS 4 | REIS SHOPEE 5. Vendas somadas: apenas 3.

Mas eles NAO sao todos a mesma coisa:

| Tipo | Qtd | O que fazer |
|---|---|---|
| Farol de milha de Aircross | 12 | SAIR - e o produto que o dono nao tem mais |
| **Lampada super LED** (produto universal, "Aircross" so no titulo) | **4** | **PERGUNTAR ANTES** |

As 4 lampadas sao: 3 na Jz acessorios (SKUs vazio, vazio e MH1-MH7) e 1 na REIS SHOPEE
(MLB3302767645). Sao lampada super LED 6000k / kit alto-baixo - produto universal que o dono
TEM. O "Aircross" ali e so o titulo puxando busca, nao e a peca especifica de Aircross.
Pausar essas 4 seria jogar fora anuncio de produto que existe no estoque.
As 3 unicas vendas do grupo Aircross estao justamente nessas 4.

**Nada foi pausado.** Confirmar com o dono se a opcao B pega tambem as lampadas.

## 39.3 Numeros atualizados

| | Antes | Agora |
|---|---|---|
| Cronograma - total | 2.698 | **2.673** |
| Cronograma - por dia | 190 a 195 | **189 a 194** |
| Fase 0 - retitulos | 423 | 423 (sem mudanca) |

O cronograma ficou abaixo dos 196/dia por causa das retiradas (Etios 23, Aircross 5,
GR117 nao-Clio 25 = 53 anuncios). Se o dono liberar os 25 do GR117-118, volta pra faixa de 196.

## 39.4 Fila de pendencias do dono
1. GR117-118 em March/Versa/Sentra/Livina/Master: SKU errado ou serve mesmo? (29 anuncios, 106 vendas)
2. Aircross opcao B pega tambem as 4 lampadas super LED universais?
3. Encurtar os 1.642 titulos do ML acima de 60 caracteres? (passivo separado, secao 35.5)

---

# 38. RECONCILIACAO COM A SECAO 36 (outra instancia do Claude)

O dono confirmou: a secao 36 foi escrita por OUTRA INSTANCIA do Claude rodando em paralelo,
na conta dele. Fonte legitima. As regras da 36 foram entao cruzadas com o lote da Fase 0
e com o cronograma. Resultado abaixo.

## 38.1 O que estava ERRADO no meu cronograma

**ETIOS - 23 anuncios removidos.** A secao 18.2 ja dizia "Etios, dono nao trabalha mais",
e a secao 36 confirma que o kit 26036-26037-KIT ja foi pausado.
Eu estava planejando CRIAR 23 anuncios de Etios. Bug meu, corrigido.
Removidos: AUTOPLUS 9 | Jz acessorios 9 | REIS SHOPEE 4 | MULTIPARTS 1.
SKUs envolvidos: GRX517TA, GRX517TA-MH16, GR159-160.
Tambem tirei 5 retitulos de Etios da Fase 0 (anuncio que vai ser pausado nao precisa
de titulo novo). Ficaram parkeados em `__FASE0.parkEtios`.

**AIRCROSS - 5 anuncios removidos, PENDENTE DECISAO.** Ver 38.3.

**MOBI KIT - 3 SKUs corrigidos.** Regra 36: kit do Mobi e GRX905RN.
Eu tinha 3 titulos com a palavra "Kit" carregando GR100-101, que e o PAR e nao o kit.
Trocados para GRX905RN (dias 6, 7 e 12). Nenhum deles tinha LED, entao nao levou -MH8.

## 38.2 O que estava CERTO (conferido, sem alteracao)
- **C3**: 18 anuncios no plano, todos na faixa 2009 a 2015 ou Picasso. A regra 36 manda
  pausar so C3 2022. Nenhum anuncio meu e 2022. Todos ficam.
- **TIC TAC**: 7 anuncios no plano com "tic tac" no titulo. Nenhum carrega GRX147FT
  (GRX147FT e o Argo ORIGINAL, tic tac e ALTERNATIVO). Regra respeitada.
- **Anuncios citados na secao 36**: nenhum aparece no lote da Fase 0 nem no cronograma.
  Sao de outras lojas, fora das 4 do foco.

## 38.3 PENDENCIA - Aircross com SKU do bloco universal
A outra instancia deixou isso em aberto e eu bati no mesmo ponto.
No meu cronograma havia 5 anuncios com titulo de Aircross carregando GR100 / GR101:
AUTOPLUS 1 | Jz acessorios 2 | MULTIPARTS 1 | REIS SHOPEE 1.

O conflito: o dono disse que **nao tem mais o produto Aircross**, mas o SKU desses anuncios
e o **bloco universal**, que ele TEM e que cabe no Aircross.
Ou seja, o produto existe em estoque; o que acabou foi a peca especifica de Aircross.

Tirei os 5 do plano por precaucao. **Decisao do dono:**
- (A) pode anunciar Aircross com o bloco universal - devolvo os 5 e libero o resto; ou
- (B) Aircross sai de vez - ficam fora e os ja no ar tambem devem sair.

## 38.4 Numeros atualizados

| | Antes | Agora |
|---|---|---|
| Fase 0 - retitulos prontos | 428 | **423** |
| Cronograma - total | 2.726 | **2.698** |
| Cronograma - por dia | 193 a 196 | **190 a 195** |

Fase 0 por loja: AUTOPLUS 184 | Jz acessorios 12 | MULTIPARTS 82 | REIS SHOPEE 145
localStorage: `__FASE0` v5, `__CRONO` ja limpo.

## 38.5 REGRA NOVA DE OPERACAO - duas instancias na mesma conta
Aconteceu de verdade nesta sessao: a outra instancia commitou no README no meio da minha
edicao e o GitHub recusou meu commit com "spyfer2-ux has committed since you started editing".
Tambem houve risco de numeracao de secao colidir (36 vs 37).

Regras para nao dar merda:
1. Antes de editar o README, reler o ultimo commit. Nunca reaproveitar aba de edicao antiga.
2. Se o GitHub acusar conflito, **descartar e refazer**. Nunca forcar por cima.
3. Numerar secao consultando a ultima existente na hora, nao no comeco da sessao.
4. Duas instancias NAO devem gravar na mesma loja ao mesmo tempo. Dividir por loja ou por hora.
5. Cache `__ML2`/`__SP2` de uma instancia fica velho quando a outra grava.
   **Sempre rebootstrap antes de aplicar lote**, mesmo que o cache pareca bom.

---

# 37. CORRECAO DA SECAO 35 - FASE 0 REGERADA COM GUARDA DE ANOS

A secao 35 foi escrita com numeros de uma versao anterior do lote. **Vale esta secao 37.**

## 37.1 O defeito encontrado depois de commitar a secao 35
O encurtador de titulo podia COMER ANOS. Exemplo real:
"Cibie Gol Saveiro Voyage G5 Interruptor 2008 2009 2010 Branco"
virava "Cibie Milha Auxiliar Gol Saveiro Voyage G5 Interruptor 2008".
O anuncio passava a cobrir 1 ano em vez de 3 - titulo mentindo a aplicacao.
A validacao antiga so exigia "tem pelo menos um ano", entao deixou passar.

## 37.2 A guarda nova - anosOk(original, novo)
Extrai o conjunto de anos dos dois titulos (expandindo abreviacao pelo seculo do ano anterior) e exige:
1. mesma ponta inicial e mesma ponta final da faixa;
2. nenhum ano inventado que nao existia no original;
3. ou a lista e identica, ou o novo usa forma de intervalo ("2011 A 2021").
Tambem normaliza "2008 A 10" para "2008 A 2010".

## 37.3 Numeros que VALEM (substituem os da secao 35)

| Situacao | Secao 35 (errado) | VALE AGORA |
|---|---|---|
| Novo titulo pronto | 423 | **428** |
| Sem SKU - vai antes para correcao de SKU | 130 | **130** |
| Sem candidato viavel - revisao manual | 11 | **6** |
| Grupos com SKU diferente (CONF=SIM) | 176 | **178** |

Por loja: AUTOPLUS 184 | Jz acessorios 12 | MULTIPARTS **85** | REIS SHOPEE **147**

Validacao dura, 428/428 zerado: excedeLimite 0, palavraProibida 0, colideComExistente 0,
colideEntreOsNovos 0, **anosErrados 0**, igualAoOriginal 0, sujeira 0, curtoDemais 0.
Comprimento medio: ML 59, Shopee 69. Encurtados por ja estarem acima do limite: 79.

localStorage `__FASE0` esta na versao **v4**. Se ler v1/v2/v3, esta desatualizado - regerar.

## 37.4 ATENCAO - sessao paralela mexendo nas mesmas contas
A secao 36 foi commitada por outra sessao ENQUANTO esta aqui estava rodando
(73 SKUs gravados, 48 anuncios pausados). Consequencias:
- Os caches `__ML2` (3.764) e `__SP2` (5.769) desta sessao sao ANTERIORES a esses writes.
- Conferido: nenhum dos anuncios citados na secao 36 aparece no lote da Fase 0 nem no
  cronograma (o foco aqui sao so as 4 lojas AUTOPLUS / Jz / MULTIPARTS / REIS SHOPEE).
- Mesmo assim: **rodar bootstrap de novo antes de aplicar qualquer coisa** e reconferir o lote,
  porque anuncio pausado nao deve ser retitulado.
- As "regras novas do dono" da secao 36 NAO foram ditas neste chat. Nao foram aplicadas aqui.
  Confirmar com o dono antes de usa-las.

## 37.5 Armadilha do editor do GitHub
Colar por ClipboardEvent depois de mexer na selecao via JS NAO funciona: o CodeMirror ignora
o range setado por JS e cola onde a selecao interna dele estava, no meio do arquivo.
Certo: clicar no editor, dar Ctrl+Home de verdade (tecla), e so entao colar.
Com Soft wrap ligado, seta pra baixo anda por linha VISUAL, nao por linha logica -
nao da pra contar linha com seta.

---

# 36. SESSAO 07/08/2026 parte 3 - REGRAS NOVAS DO DONO, CORRECOES E PAUSAS

## 36.1 Regras novas confirmadas pelo dono no chat

GR100 e GR101 sao IGUAIS e servem nos DOIS lados. Palavras do dono: GR100 e exatamente igual ao GR101 ele cabe em ambos os lados.
Consequencia pratica: o filtro de paridade por lado NAO e mais motivo de rejeicao no funil de evidencias. Anuncio unitario SEM lado no titulo pode receber GR100 com seguranca. A regra de nomenclatura antiga, direito par e esquerdo impar, continua valendo para escrever o codigo, mas nao trava mais a correcao.

GRX147FT e o Argo ORIGINAL. TIC TAC e ALTERNATIVO. Logo, titulo com botao tic tac NUNCA vira GRX147FT; no bloco universal vira GRX905RN.

Mobi kit e GRX905RN. Se o titulo tiver LED, o SKU tem que levar o sufixo -MH8, virando GRX905RN-MH8.

Aircross e C3 2022: o dono nao tem mais o produto, pausar tudo. O restante da linha C3, de 2009 a 2015 e Picasso, fica no ar e so corrige o SKU.

26036-26037-KIT do Etios: o dono ja pausou.

## 36.2 SKUs gravados nesta sessao - 73 anuncios em 9 grupos

| SKU antigo | SKU novo | Anuncios | Motivo |
|---|---|---|---|
| MLB4241023721 | GRX905RN-MH8 | 13 | Kit Mobi com Led |
| MLBU1463445622 | GRX905RN | 6 | Kit Mobi botao tic tac, alternativo |
| 41076011302 | GR100 | 4 | Farol unitario Mobi sem lado no titulo |
| MLB1992601853 | GRX905RN | 11 | Kit C3 2009 a 2012 |
| MLB5117936738 | GRX905RN | 10 | Kit C3 2009 a 2012 mais brinde |
| MLB5118186480 | GRX905RN-MH8 | 9 | Kit C3 2009 a 2012 mais super led |
| MLB3701142186 | GR100-101 | 8 | Par C3 Picasso |
| MLB5117955160 | GRX905RN | 8 | Kit C3 2009 a 2012 |
| 22697440002 | GRX905RN | 4 | Kit C3 2009 a 2012 |

Verificado depois de gravar: os 9 SKUs antigos retornam ZERO em Shopee NORMAL, Shopee UNLIST e ML ativo. Tambem confirmado que 18266239133 e 17648161339, do lote anterior, continuam zerados.

## 36.3 Pausas executadas

| Alvo | Plataforma | Anuncios | Situacao |
|---|---|---|---|
| Aircross, SKUs ruins MLB e UCMUNIAC | Shopee | 28 | pausados e conferidos |
| Aircross, SKUs ruins MLB e UCMUNIAC | Mercado Livre | 12 | pausados e conferidos |
| C3 2022, MLBU2088529107 e MLB3205262897 | Shopee | 8 | pausados e conferidos |
| C3 2022, familia GRX278CT | ambos | 0 | ja estavam pausados antes |
| Etios 26036-26037-KIT, loja PSHOP STORE | Shopee | 1 | FALHOU, anuncio esta em promocao |

## 36.4 Armadilhas novas descobertas nesta sessao

BUSCA POR SKU NA API. Shopee usa searchType 4 e Mercado Livre usa searchType 5. Nos dois, vagueSearchType 0 e busca exata, 1 e comeca com, 2 e contem. O campo de estado chama productState e nao productStatus. O corpo tem que ser form-urlencoded; com JSON o total volta certo mas a lista volta vazia, o que gera verificacao falsa.

ENUMERADOR ANTIGO. A funcao __enumML foi escrita com JSON e passou a devolver zero. Reescrever sempre com form-urlencoded.

PAUSAR NO MERCADO LIVRE. POST /api/mercado/product/update-unlist com corpo JSON, campos flag false e productIds em array. Depois o app consulta /api/check-process com o uuid retornado.

PAUSAR NA SHOPEE. POST /api/shopee/product/updateUnlist com corpo form, campos flag false e ids em CSV.

PROMOCAO TRAVA A PAUSA. A Shopee recusa pausar anuncio que esta em promocao. A mensagem so aparece na tela: The product cannot be delisted because the product has promotion. A API responde code 0 e success mesmo assim. Sempre reconferir relistando o SKU depois de pausar.

MENU LATERAL DERRUBA A SESSAO. Clicar em User Product no menu lateral recarrega tambem a outra aba do UpSeller e destroi todos os globais em memoria. Nao clicar no meio de um lote.

## 36.5 Pendencias abertas para o dono

ETIOS. O anuncio 26036-26037-KIT da loja PSHOP STORE, com 14 vendas, nao pausa porque esta em promocao. O dono precisa tirar a promocao no Seller Center da Shopee e depois avisar para pausar.

AIRCROSS COM SKU BOM. Sobraram 7 anuncios na Shopee com GRX905RN e 1 no ML com GR100 cujo titulo e de Aircross, mas o produto e o kit universal que o dono tem. Nao foram pausados. Decidir: pausar ou trocar o titulo.

LAMPADAS DE AIRCROSS. Tres anuncios no ML de lampada super led para Aircross, um com SKU MH1-MH7 e dois sem SKU. Sao lampada e nao farol, entao ficaram de fora da pausa. Decidir.

# 35. FASE 0 PRONTA + CRONOGRAMA VALIDADO (07/08/2026)

## 35.1 Onde esta o lote (memoria viva)
Tudo salvo no localStorage da aba de trabalho do UpSeller (app.upseller.com):
- `__FASE0` (120 KB) - { plano[423], semSku[130], falhou[11] }
- `__F0GEN` - codigo-fonte das funcoes geradoras, para reproduzir igual
- `__CRONO` - cronograma de 14 dias ja corrigido
- `__ANUNCIOS_PLANO` - plano bruto de 2.726 anuncios
Caches em memoria: `__ML2` (3.764) e `__SP2` (5.769).
localStorage sobrevive a reload; `__ML2`/`__SP2` NAO - rodar bootstrap da secao 33.

## 35.2 Resultado da Fase 0
514 grupos de titulo repetido / 564 anuncios excedentes.

| Situacao | Qtd |
|---|---|
| Novo titulo pronto | **423** |
| Sem SKU - vai antes para a fila de correcao de SKU | 130 |
| Sem candidato viavel - revisao manual | 11 |

Por loja (retitulos prontos): AUTOPLUS 184 | Jz acessorios 12 | MULTIPARTS 81 | REIS SHOPEE 146

Criterio de quem MANTEM o titulo original: maior venda; empate, maior visualizacao; empate, id menor.
176 dos 423 tem CONF=SIM: os dois anuncios do grupo tinham SKU DIFERENTE com titulo igual.
Nesses o titulo repetido pode ser sintoma de SKU errado - conferir na hora de aplicar.

## 35.3 Como o titulo novo e gerado (algoritmo, reproduzivel)
1. **limpa2** - corrige "Origina"->Original, "2cibie"->"2 Cibie", separa CamelCase, tira dois-pontos
   solto, remove "+brinde ...", "frete gratis", "promocao/desconto/parcelamento",
   troca "farolete"->"Farol" e colapsa "Farol" repetido.
2. **encurta(t, limite)** - so se passar do limite: abrevia anos -> remove enchimento
   (vidro, universal, completo, para, com, de, do, da, h1/h3/h7/h8/h11...) -> comprime faixa de anos
   para "2004 A 2016" -> ultimo recurso corta na palavra inteira. NUNCA remove veiculo nem anos.
3. **variacao** - troca/insere o conjunto MILHA / NEBLINA / AUXILIAR (8 combinacoes).
   So aplica se o anuncio E farol de milha (titulo casa farol|milha|neblina|auxiliar ou SKU GR/GRX/FUN/MDM).
   Em produto que nao e farol (ex.: rack de teto) NAO insere variacao - diferencia por formato de ano.
4. **formato de ano** - original, abreviado (2015 16 17) ou expandido (2015 2016 2017).
5. Escolhe o candidato MAIS LONGO que caiba no limite e que ainda nao exista naquela loja.

Limites: ML 60 / Shopee 120. Proibido: frete gratis, parcelamento, desconto, promocao, brinde, farolete.

## 35.4 Validacao dura do lote (tudo zerado)
excedeLimite 0 | palavraProibida 0 | colideComTituloExistente 0 | colideEntreOsNovos 0 |
perdeuOAnoDoOriginal 0 | ficouIgualAoOriginal 0.
Bonus: 79 dos 423 tambem foram ENCURTADOS porque ja estavam acima do limite.

## 35.5 ACHADO NOVO - 1.642 titulos do ML acima de 60 caracteres
Distribuicao de tamanho de titulo:
- ML: mediana 60, p90 82, **maximo 174**, acima de 60 = **1.642 de 3.764 (44%)**
- Shopee: mediana 57, p90 75, maximo 120, acima de 120 = 0 (a Shopee corta no limite)
O ML aceitou titulos longos, mas a regra do dono e 60. Isso e um passivo separado da Fase 0
(1.642 anuncios para encurtar). Nao entra no lote atual - precisa de decisao do dono.

## 35.6 Cronograma de 14 dias - revalidado
2.726 anuncios, 193 a 196 por dia, 295 SKUs distintos.
Por loja no total: AUTOPLUS 349 | Jz acessorios 939 | MULTIPARTS 672 | REIS SHOPEE 766.
Dia 1: 196 (AUTOPLUS 25 | Jz 68 | MULTIPARTS 48 | REIS 55), 80 SKUs distintos.
Teto de 12 anuncios do mesmo SKU na mesma loja no mesmo dia: respeitado (maximo exato = 12).
Colisao com titulo existente (ja considerando a Fase 0 aplicada): **2 encontradas e corrigidas**
(GRX905RN "Kit Farol de Milha Renault Sandero 2008 2009 2010 2011 LED" nos dias 6 e 13).
Agora: 0 colisoes.

## 35.7 UNICA PENDENCIA ABERTA - GR117-118
35 anuncios do plano usam GR117-118 e esse codigo continua sem aval de catalogo.
AUTOPLUS 9 | Jz acessorios 14 | MULTIPARTS 5 | REIS SHOPEE 7.
Perguntar ao dono: GR117-118 tambem e universal, ou tem aplicacao especifica?
Enquanto nao responder, esses 35 ficam FORA e o dia perde ~2 anuncios.

## 35.8 Ordem de execucao quando o dono voltar (segunda)
1. Bootstrap da secao 33 (reconstruir `__ML2` e `__SP2` com pageNum).
2. **Fase 0** - aplicar os 423 retitulos em blocos de 50, relendo para confirmar (code:0 nao prova).
3. So depois comecar o Dia 1 do cronograma (196 anuncios).
4. Atualizar a tabela de controle 32.9 a cada bloco.
5. FREIO: parar no primeiro cancelamento/suspensao ou 3 falhas seguidas.

Gatilho de retomada: **VAMOS FAZER ANUNCIOS**

---

# 34. SESSAO 07/08/2026 (parte 2) - CATALOGO DESBLOQUEADO PELO DONO E FASE 0

## 34.1 Confirmacoes do dono - conhecimento de produto
Fonte: o proprio dono, no chat. Tem PRIORIDADE sobre a planilha de catalogo.

**BLOCO UNIVERSAL - GR100 / GR101 / GR100-101**
Cabe em centenas de carros. Palavras do dono: "GR100-101 cabe em centenas de carros mesmo, pode confiar".
Nao precisa de aval do catalogo por veiculo.

**GRX905RN = UNIVERSAL (CORRIGE O CATALOGO)**
A planilha diz "LOGAN SANDERO OROCH". Esta errado/incompleto.
O dono confirmou por escrito: GRX905RN e UNIVERSAL.
Composicao da caixa: 1x GR100 + 1x GR101 + chicote + botao + rele + pingo LED.
E a versao KIT do bloco universal, com botao colante ou tic-tac alternativo.

**GRX240FT = UNIVERSAL**
Mesma logica do bloco universal. E formado por FUN240.
Quando sai como KIT o codigo e GRX240FT; o componente solto e FUN240 / FUN240-2.
Isso fecha a pendencia dos 779 anuncios sem aval de catalogo.

**GRX147FT = ORIGINAL do Fiat Argo**
Unico caso da lista abaixo em que existe peca ORIGINAL. Os demais sao alternativos.

**APLICACAO DECLARADA PELO DONO** para o bloco universal (GR100-101 / GRX905RN / GRX240FT):
Fiat Argo, Fiat Cronos, Fiat Mobi, Fiat Fiorino, Fiat Ducato,
Renault Kwid, Renault Master,
Jeep Renegade,
Ford Ka, Ford Ranger, Ford Fiesta, Ford EcoSport,
Citroen C4 Pallas,
Honda Civic.
Essa lista e PISO, nao teto - o bloco e universal.

## 34.2 Pendencias fechadas
| Pendencia | Antes | Agora |
|---|---|---|
| GRX905RN conflito de catalogo | 125 anuncios travados | LIBERADO - universal |
| 779 anuncios sem aval (GRX240FT + familia FUN240) | travados | LIBERADO - universal |
| GR117-118 | sem aval | CONTINUA TRAVADO - dono nao se manifestou |

## 34.3 Base liberada para o programa de anuncios
Familias universais nas 4 lojas do foco: **1.714 anuncios ja no ar**.
AUTOPLUS 771 | Jz acessorios 136 | MULTIPARTS 461 | REIS SHOPEE 346
Maiores: FUN240-2 392, GR100-101 390, GRX905RN 261, GRX240FT 206,
GR100-101-LH8 123, GR100-101-MH8 80, GRX905RN-MH8 51, FUN240-2-CHI-LH1 38.
Esta e a base que sustenta as 196/dia da secao 32.

## 34.4 FASE 0 - diagnostico de titulos repetidos na mesma loja
Regra do dono: "os titulos nunca devem se repetir na mesma loja, mas em outras pode repetir".
Varredura nas 4 lojas do foco (9.533 anuncios: AUTOPLUS 2.765, Jz 999, MULTIPARTS 2.753, REIS 3.016).
Comparacao por titulo normalizado (minusculo, sem acento, sem pontuacao).

**RESULTADO: 514 grupos de titulo repetido, 564 anuncios excedentes para retitular.**

| Loja | Grupos | Excedentes |
|---|---|---|
| AUTOPLUS | 178 | 194 |
| Jz acessorios | 123 | 124 |
| MULTIPARTS | 82 | 87 |
| REIS SHOPEE | 131 | 159 |

Tamanho dos grupos: 473 com 2, 33 com 3, 7 com 4, 1 com 5.
- 329 grupos tem o MESMO SKU nos dois anuncios (duplicata real de titulo).
- 185 grupos tem SKU DIFERENTE com titulo igual (erro de titulo OU erro de SKU - conferir um a um).
- 220 dos anuncios envolvidos estao com SKU VAZIO - entram antes na fila de correcao de SKU.

**Criterio de quem fica com o titulo original:** fica o de MAIOR venda; empate, o de maior
visualizacao; empate, o mais antigo. Os demais sao retitulados pela regra 32.10.

## 34.5 Proximo passo
1. Fase 0: retitular os 564 excedentes - lote montado, ESPERANDO GO DO DONO.
2. Depois: cronograma de 14 dias, 196/dia (secao 32).
Gatilho de retomada continua: **VAMOS FAZER ANUNCIOS**

---

# 33. SESSAO 07/08/2026 - ULTRALED PAUSADO E ATAQUE A LISTA DE MLBs DO DONO

## 33.1 Endpoints: form-urlencoded x JSON (nao confundir)
Os endpoints de LISTAGEM usam **form-urlencoded**. Mandar JSON retorna HTTP 200 com data.list vazio
e total 0 - falha silenciosa, parece que a conta esta vazia.
Os endpoints de ESCRITA em lote usam **JSON**.

- Listar ML: POST /api/mercado/user-product/index (form)
  dataType 2, hasCatalogProduct 0, sortName 3, sortValue 0, pageNum, pageSize 100, productState, state online
  productState: active, paused, under_review
- Listar Shopee: POST /api/shopee/product/index (form)
  sortName 3, sortValue 0, vagueSearchType 0, pageNum, pageSize 100, state online
  productState: NORMAL, UNLIST, SOLDOUT, SELLER_DELETE, SHOPEE_DELETE, BANNED, REVIEWING
  busca por SKU exato: searchType 4 mais searchValue
- Pausar Shopee: POST /api/shopee/product/updateUnlist (form) flag false e ids em CSV. flag true reativa.
- Gravar SKU Shopee: POST /api/shopee/product/batch-online-sku (JSON)
- Gravar SKU ML: POST /api/mercado/user-product/batch-online-sku (JSON)
  corpo: type 1, startNumber vazio, isVariantSku 1, prefixType 0, suffixType 0, idList, oldReplaceStr, newReplaceStr

## 33.2 BUG: oldReplaceStr nao aceita parenteses
Se o SKU antigo tem ( ou ), o batch-online-sku responde code 0 success mas NAO grava.
Caso real: MLB3551564480-ESQUERDO (MOTORISTA).
Solucao: pagina de edicao individual do anuncio. A parte sem parenteses funciona por API normalmente.

## 33.3 Regra ULTRALED - produto descontinuado, pausar tudo
O dono confirmou em 07/08/2026: acabou o estoque e nao vai repor.
Detector: regex /UT?HB?[0-9]+/i sobre o SKU.
Pega UH4 UH7 UH8 UH11 UH27 UHB4 UTH1 UTH4 UTH7 UTH11 UTH16 UTHB3 UTHB4 e combinacoes.
NAO casa com LED normal (MH8 MH11 MHB4 MH3 nao tem U) nem com FUN (exige H logo depois do U).

Situacao encontrada: 218 anuncios, 990 vendas historicas.
- ML: 157 anuncios, TODOS ja pausados (134) ou em revisao (23).
- Shopee: 61 anuncios, 40 ativos. Os 40 foram pausados e verificados (0 ativos restantes).
Os 23 do ML em revisao voltam a ficar ativos se o ML aprovar - reconferir depois.

## 33.4 Lista de SKUs ruins entregue pelo dono
168 valores distintos presentes em 1.362 anuncios (o mesmo SKU ruim se repete em varias lojas clonadas).
ML: 119 ativos, 2 pausados, 143 em revisao. Shopee: 829 ativos, 48 pausados, 220 excluidos, 1 esgotado.

Funil de evidencia:
- Base A (codigo na descricao): 15 casos, quase todos linha GM. Descartado.
- Base B (titulo normalizado identico a anuncio com SKU bom, e unanime): 103 propostas.
- Base C (titulo sem palavras de ligacao): 4 propostas. A versao agressiva foi REJEITADA porque
  remover DIREITO e ESQUERDO do titulo quebra a regra de paridade.
- Base D (MLB embutido no SKU): inutil aqui, os ids eram auto referentes.
- Base E (mesma imagem principal): 0 adicionais, a Base B ja tinha pego.

## 33.5 Trava nova: coerencia de LADO
Se o SKU antigo OU o titulo contem ESQUERDO ou MOTORISTA, o codigo alvo tem que ser IMPAR.
Se contem DIREITO ou PASSAGEIRO, tem que ser PAR.
Quando o match sugere o lado errado, troca pelo irmao (GR100 vira GR101) se o irmao existir no catalogo.
Se o anuncio e de um lado so e o match sugeriu SKU de par ou de kit, rejeita.
Essa trava pegou 3 erros reais nesta rodada.

## 33.6 Resultado
114 SKUs gravados e conferidos relendo do servidor:
- 106 do funil de evidencia (105 por API, 1 pela pagina de edicao por causa dos parenteses)
- 8 pela regra do Mobi (kit vira GRX905RN, par vira GR100-101)
Destaques: GRX402FD 21, GRX905RN 17, GR100-101-MH8 9, GRX107FT 9, FUN240-2 8, GRX133HY 7.

Caso especial: anuncio Shopee 4398046628667475 (Mitsubishi ASX) tem 2 variantes de lado.
Variante ESQUERDO virou GR101, variante DIREITO virou GR100, SKU principal virou GR100-101.
Anuncio com variante de lado precisa de confirmacao do dono sobre qual e o SKU principal correto.

## 33.7 O que sobrou
893 anuncios vivos em 152 grupos sem evidencia utilizavel: o produto inteiro esta com SKU ruim em
todas as lojas, nao existe irmao com codigo bom para copiar. So o dono consegue informar.
Mais 143 em revisao no ML (nao editaveis) e 220 excluidos na Shopee.

Top modelos entre os 893: C3 50, Corolla 50, Ka 49, Uno 45, Gol 42, Fit 38, Palio 37, Fiesta 34,
Onix 33, Mobi 31, S10 31, Strada 25, Ranger 23, Siena 22, Prisma 20, Sandero 20, Aircross 17, Etios 16.

Pendencias que dependem do dono:
- Etios 26036-26037-KIT: 16 anuncios, 148 vendas. Ele ja disse que nao tem mais Etios, mas o volume pede reconfirmacao.
- Mobi Botao Tic Tac: botao original (GRX147FT) ou alternativo (GRX905RN)?
- Mobi e Argo unitarios sem lado no titulo: nao da para escolher entre GR100 e GR101.
- Kit Mobi com LED: base GRX905RN mas falta saber o encaixe para montar o sufixo M.
- Aircross e C3: a instrucao antiga era pausar Aircross e C3 22, mas os anuncios achados sao 2009 a 2015.
- Linha GM (Montana, S10, Spin, Onix, Prisma, Cobalt, Celta, Cruze): segue fora de escopo por ordem do dono.

# 32. PROGRAMA DE CRIACAO DE ANUNCIOS - GATILHO "VAMOS FAZER ANUNCIOS" (07/08/2026)

## 32.0 COMO USAR ESTA SECAO
Quando o dono abrir um chat novo e escrever **VAMOS FAZER ANUNCIOS**, o agente deve:
1. Ler esta secao inteira ANTES de qualquer coisa.
2. Rodar o bootstrap 32.2 para reconstruir os caches.
3. Abrir o cronograma 32.8, achar o primeiro dia com status PENDENTE na tabela 32.9.
4. Mostrar o lote do dia ao dono e ESPERAR O GO. Nunca publicar sem OK.
5. Depois de publicar, atualizar a tabela 32.9 com o resultado.

## 32.1 ESCOPO FIXADO PELO DONO (07/08/2026)
Foco em 4 lojas: **AUTOPLUS** e **Jz acessorios** (Mercado Livre), **MULTIPARTS** e **REIS SHOPEE** (Shopee).
As outras 10 lojas continuam existindo mas nelas SO se corrige SKU - nao se cria anuncio.

| Loja | Plataforma | shopId |
|---|---|---|
| AUTOPLUS | Mercado Livre | 216172 |
| Jz acessorios | Mercado Livre | 560564 |
| MULTIPARTS | Shopee | 867015 |
| REIS SHOPEE | Shopee | 693152 |

## 32.2 BOOTSTRAP - ARMADILHAS DE API (CUSTOU HORAS, NAO REPETIR)
- A paginacao das DUAS plataformas usa **pageNum**, NAO `page`. Mandando `page` a API devolve sempre a primeira pagina e o cache sai truncado.
- `pageSize` maximo util = 100. Os campos `pages` e `hasNextPage` vem sempre 0/false. Paginar por `total`.
- Shopee: `/api/shopee/product/index` com `{pageNum, pageSize:100, state:'online', shopIds}`. Os filtros `searchType`/`productState` devolvem total=0 - nao usar.
- ML: `/api/mercado/user-product/index` com `{pageNum, pageSize:100, dataType:2, productState:'active', state:'online', shopIds}`.
- ML: o campo `attributes` vem como **string JSON**, precisa JSON.parse, e as chaves sao snake_case (`value_id`, `value_name`). Chamar `.find()` direto quebra a funcao inteira em silencio.
- Campos que importam na Shopee: `sales`, `views`, `deboost`, `isBanned`, `violationTime`, `repeatName`, `totalAvailableStock`.
- Campos que importam no ML: `soldQuantity`, `visit`, `health`, `underReviewStatus`.
- A aba de trabalho perde `window.__*` em qualquer reload. Persistir em `localStorage` (`__CRONO`, `__ANUNCIOS_PLANO`).

## 32.3 DIAGNOSTICO DA SHOPEE - POR QUE OS ANUNCIOS NAO RANQUEIAM
Levantamento de 5.769 anuncios online (MULTIPARTS 2.753 + REIS 3.016), 8.834 vendas.

**Nao ha punicao.** Zero deboost, zero violacao registrada, 3 banidos no total. A conta esta limpa.

**O problema e o comprimento do titulo.** 4.906 dos 5.769 (85%) tem titulo de ~52 caracteres, no padrao curto do ML. A busca da Shopee casa cauda longa; titulo curto nao aparece em consulta nenhuma.

Controlado por idade do anuncio:

| Idade | titulo ate 60 | titulo 61-90 | titulo 91-120 |
|---|---|---|---|
| 31-90 dias | 4,1 views / 0,10 vendas | 23,9 / 0,69 | 11,9 / 0,30 |
| 91-180 dias | 14,1 / 1,59 | 46,6 / 4,19 | **89,9 / 7,80** |
| 366+ dias | 16,9 / 10,58 | 82,6 / 29,52 | **121,0 / 30,38** |

O efeito se mantem em TODOS os grupos de idade. Titulo longo rende de 3x a 7x mais views.
**Regra: anuncio novo na Shopee nasce com 91-120 caracteres. Nunca com titulo curto de ML.**

## 32.4 MERCADO LIVRE - FAIXA OTIMA
Levantamento de 3.764 anuncios ativos (AUTOPLUS 2.781 + Jz 1.010), 18.037 vendas.

| Comprimento | anuncios | visitas/anuncio | vendas/anuncio |
|---|---|---|---|
| ate 45 | 398 | 8,8 | 1,82 |
| 46-55 | 762 | 30,7 | 3,56 |
| 56-60 | 975 | 54,1 | 6,12 |
| 61-70 | 667 | **66,7** | **8,17** |
| 71-80 | 517 | 49,3 | 4,11 |
| 81-90 | 369 | 34,7 | 2,17 |

O otimo medido e 61-70 caracteres. **Teto operacional em vigor: 60 caracteres (regra do dono).** Se o dono liberar, subir para 70.

## 32.5 FAROLETE - DESCARTADO, CONFIRMADO PELOS DADOS
Controlado por comprimento de titulo, "farolete" nao adiciona views (52,3 contra 52,0) e vem com MENOS vendas (5,41 contra 9,57).
No autocomplete do ML devolve lanterna (recarregavel, tatico, cabeca). Na Shopee configura termo irrelevante = spam.
**Nunca usar Farolete em titulo novo. Variacoes validas: MILHA, NEBLINA, AUXILIAR.**

## 32.6 A BASE LEGITIMA DO VOLUME - APLICACAO VEICULAR
Volume NAO se faz repetindo o mesmo produto com titulo trocado (o ML cancela e a Shopee marca como spam).
Faz-se com **um anuncio por aplicacao veicular**, que e como o mercado de autopeca funciona.

Exemplo real: GRX240FT tem 164 aplicacoes distintas (Uno Way, Uno Sporting, Strada Working, Strada Trekking, Palio G4...) e 1.916 vendas. Cada aplicacao e um anuncio legitimo, nao uma duplicata.

Fontes de volume, em ordem de seguranca:
1. **Loja diferente** - mesmo anuncio, mesmo titulo, em outra loja. 100% permitido.
2. **Aplicacao veicular diferente** - mesmo SKU, veiculo/geracao/ano diferente.
3. **Variante real** - botao, lente, moldura, lampada. So se existir no catalogo.

Nunca inventar veiculo, ano ou variante que o catalogo nao confirma.

## 32.7 INVENTARIO APURADO (07/08/2026)
- 471 SKUs validos nas 4 lojas (de 1.764 codigos brutos).
- 1.733 aplicacoes veiculares distintas mapeadas.
- Matriz (SKU x aplicacao x loja) em falta: 3.930 posicoes.
- Apos filtros: **2.728 anuncios novos prontos e validados**.

| Loja | Anuncios | SKUs | Titulo medio |
|---|---|---|---|
| AUTOPLUS | 349 | 96 | 56 chars |
| Jz acessorios | 941 | 225 | 55 chars |
| MULTIPARTS | 672 | 158 | 97 chars |
| REIS SHOPEE | 766 | 179 | 96 chars |

874 titulos sao reuso de titulo que ja vende em outra loja. 1.854 foram gerados.

## 32.8 CRONOGRAMA - 196/DIA POR 14 DIAS UTEIS
Cota diaria fixa: **AUTOPLUS 25 | Jz acessorios 68 | MULTIPARTS 48 | REIS SHOPEE 55 = 196/dia**.

Travas obrigatorias:
- Maximo **12 anuncios do mesmo SKU na mesma loja no mesmo dia**.
- Cada dia sai com ~80 SKUs distintos. Menos de 40 SKUs distintos = errado, refazer.
- Publicar em blocos de 50, espalhados no dia. Nunca despejar 196 de uma vez.
- Teto do dono: 2.000/dia e 300/hora. Sao teto ABSOLUTO, nao meta.
- Parar TUDO no primeiro cancelamento, suspensao ou 3 falhas seguidas, e avisar o dono.

## 32.9 CONTROLE DE EXECUCAO
| Dia | Data | Anuncios | Status | Moderacao? |
|---|---|---|---|---|
| 1 | | 196 | PENDENTE | |
| 2 | | 196 | PENDENTE | |
| 3 | | 196 | PENDENTE | |
| 4 | | 195 | PENDENTE | |
| 5 | | 195 | PENDENTE | |
| 6 | | 195 | PENDENTE | |
| 7 | | 195 | PENDENTE | |
| 8 | | 195 | PENDENTE | |
| 9 | | 195 | PENDENTE | |
| 10 | | 195 | PENDENTE | |
| 11 | | 194 | PENDENTE | |
| 12 | | 194 | PENDENTE | |
| 13 | | 194 | PENDENTE | |
| 14 | | 194 | PENDENTE | |

## 32.10 REGRAS DE TITULO (VALEM PARA TODO ANUNCIO NOVO)
- ML: 50 a 60 caracteres. Shopee: 85 a 120 caracteres.
- Estrutura: TIPO + VARIACAO + MODELO + GERACAO + ANOS + ESPECIFICACAO.
- Variacao: MILHA, NEBLINA, AUXILIAR. Nunca FAROLETE.
- Geracao antes do ano - o comprador busca "gol g4", nao "gol 2006".
- Ano completo (2003 2004 2005 2006) ou abreviado (2003 04 05 06), alternando. Sempre dentro da faixa do catalogo.
- Titulo NUNCA se repete dentro da mesma loja. Entre lojas pode.
- PROIBIDO: frete gratis, parcelamento, desconto, promocao, brinde como chamariz, cor/tamanho como enfeite, veiculo que o produto nao atende.
- LED so entra se estiver no SKU (M = super led 6000k, X = xenon, L = lampada comum). Pingo T10 nunca. Excecao: produto construido em LED leva "Full LED", sem sufixo M (secao 51).
- Limpeza obrigatoria antes de publicar: "Origina" truncado, "2cibie" colado, dois-pontos solto, CamelCase grudado, palavra "Farol" repetida. 24% dos titulos herdados tinham pelo menos um desses defeitos.

## 32.11 EXCLUSOES ATIVAS NESTE PROGRAMA
- Codigos bloqueados pelo dono: GRX010VW, GRX086VW, GRX322NS, GRX054VW, GRX005VW, GRX474FD, GRX068VW.
- Parqueados: STS010VW, STS010VW-MHB4, STS025VW-LH3, STS204HD-TIC, FUN314-2, FUN207-208-GG739-GG738, GRX025VW-LH3.
- Linha GM (sufixo CV): CONGELADA. Sufixo F (GR102F, GR103F...): proibido.
- ULTRALED (UH/UTH - secao 31.2): sem estoque, ordem de pausar. Nenhum entrou no plano.
- SKU comecando com MLB: e ID de anuncio no campo errado. Corrigir SKU antes, nunca replicar.
- FUN240 e familia: CORRETA, permanece FUN, nao converter (secao 30).

## 32.12 PENDENCIAS ANTES DO DIA 1
- **Fase 0 nao executada**: 158 grupos de titulo repetido dentro da mesma loja (Classe A), 104 titulos novos ja gerados e validados, aguardando GO do dono.
- **Risco a validar**: SKUs universais aparecem em veiculos muito diferentes (GRX905RN em Fiorino, Civic e Mobi; GR100-101 em L200 Triton, Sandero, Peugeot 2008 e Duster Oroch). Isso foi herdado dos anuncios que ja existem. Conferir na planilha do dono ANTES de multiplicar - se a aplicacao estiver errada, o programa multiplica o erro por 4 lojas.
- 790 anuncios Shopee estao sem estoque e levam metade das views. Repor ou pausar.
- 158 anuncios marcados com `repeatName` pela propria Shopee, com 0,09 vendas/anuncio.

# 31. REGRAS NOVAS DO DONO E ATAQUE AOS SKUs COM MLB (07/08/2026)

## 31.1 Codigos decididos nesta rodada

| SKU antigo | Decisao | Situacao |
|---|---|---|
| FUN106-107-LH27 | vira GR106-107-LH27 (Onix). LH27 = lampada H27, e par COM lampadas | 1 gravado, 1 em revisao |
| FUN100-101-h11 | vira GR100-101-LH8 | gravado |
| FUN100-101CRO | vira GR100-101 | gravado |
| FUN100-100tr | vira GR100-101 | gravado |
| STS132FT-Branco | vira GRX132FT | gravado |
| STS514TA | inativar | pendente |
| FUN117-118S | pausar | ja estava pausado |
| FUN207-208V | pausar | ja estava pausado |

## 31.2 NOVA REGRA - sufixo ULTRALED
`UH` e `UTH` seguidos do encaixe significam ULTRALED: UH4, UH7, UH8, UH11, UH27,
UTH4, UTH7, UTH8, UTH11, UTH27 e as variantes com HB3/HB4.
Nao ha mais ultraled no estoque - ordem do dono e pausar todos.
Nao confundir com `M` (super LED 6000k / LED 6k), `L` (lampada comum) e `X` (xenon).

Levantamento antes de pausar: 145 anuncios (92 ML + 53 Shopee), 547 vendas acumuladas.
Os campeoes de venda sao FUN187-188-UTH11 (204), UTH4-UTH11 (78), UTH11-2 UTHB3-1 (61)
e GRX409FD-UH8 (49). Precisa do OK do dono antes de pausar por causa do volume.

## 31.3 Funil de evidencia para SKU = ID MLB
Universo inicial: 1.215 anuncios no ML com MLB no lugar do SKU.

| Base | Criterio | Candidatos | Gravados |
|---|---|---|---|
| D | o MLB embutido no SKU e o itemId de outro anuncio nosso com SKU bom | 26 | incluidos em B |
| B | titulo identico a outro anuncio com SKU bom, e unanime | 222 | 75 |
| C | titulo igual apos remover stopwords e cores, e unanime | 179 | 6 |
| E | PRIMEIRA IMAGEM identica a de outro anuncio com SKU bom, e unanime | 141 | 10 |

Resultado: 1.215 -> 1.124. Dos 1.124 que sobraram, 451 estao em `under_review`
e 673 nao tem nenhuma evidencia utilizavel.

### Base E (nova) - casamento por imagem
O campo de imagem que vem da listagem e uma string com varias URLs separadas por `|`.
A PRIMEIRA URL identifica o produto: anuncios clonados entre lojas compartilham a mesma foto.
Indexar so os anuncios com SKU bom e exigir unanimidade. Foi o unico metodo que pegou
anuncios cujo titulo tinha sido reescrito.

### Filtros de seguranca aplicados em toda gravacao
1. Coerencia de TIPO: titulo "Kit" exige GRX, "Par" exige GR###-###, "Par Suporte/Moldura"
   exige MDM, unitario exige GR###.
2. Linha GM (base terminando em CV) fica fora.
3. Base bloqueada pelo dono ou marcada para relatorio fica fora.
4. Base tem que existir no catalogo (ou na allowlist manual).
5. Titulo com match ambiguo (mais de um SKU candidato) nunca grava.

## 31.4 O que ainda falta
1. OK do dono para pausar os 145 ULTRALED.
2. Inativar STS514TA-UTH11 (MLB3653166736, 4 vendas).
3. 673 anuncios com MLB sem evidencia - so resolve lendo a descricao. O UpSeller nao expoe
   endpoint de descricao; os caminhos testados (`user-product/description`, `/detail`, `/get`,
   `product/description`, `/edit-description`) todos retornam vazio.
4. 451 anuncios com MLB presos em revisao.

---

# 30. LOTE 10 - FECHAMENTO DA CONVERSAO DE FAMILIAS LEGADAS (07/08/2026)

## 30.1 Placar final dos 955 jobs de SKU

| Plataforma | Jobs | Gravados | Pendentes | Sumiram |
|---|---|---|---|---|
| Mercado Livre | 872 | 689 | 181 | 2 |
| Shopee | 83 | 83 | 0 | 0 |
| **Total** | **955** | **772** | **181** | **2** |

Dos 181 pendentes: 179 estao em `under_review` (Revisando) e 2 caem no bug de categoria
com variacao descrito em 30.4.

## 30.2 Placar da correcao de atributo SIDE_POSITION
De 2.222 anuncios com "Ambos os lados" / "Esquerdo" / "Direito" sem value_id, sobraram 383:

| Situacao | Anuncios | Da para corrigir por API |
|---|---|---|
| Corrigidos | 1.839 | - |
| Em under_review | 259 | nao, so quando sair da revisao |
| Categorias MLB194704 e MLB7863 | 114 | nao, ver 30.4 |
| Categorias que nao tem o atributo | 10 | nao se aplica |

## 30.3 A ordem que funciona (confirmada em producao)
Para desbloquear a gravacao de SKU em anuncio ML com atributo invalido, mandar UMA chamada
so, com dimensoes + SIDE_POSITION juntos, para `batch-attributes-edit-online`. Mandar so o
SIDE_POSITION resulta em `error-5402` porque o ML valida o item inteiro no mesmo push.
Depois disso a escrita de SKU (`batch-online-sku`) passa.

Rendimento medido: 925 chamadas / 1.299 anuncios, 100% de sucesso, ~35 minutos.

## 30.4 BUG: categorias onde SIDE_POSITION aceita variacao
Quando o atributo tem `tags.allow_variations = true` na categoria, o endpoint de atributos em
massa do UpSeller responde `successList` mas NAO propaga o valor para o Mercado Livre. Confere
em `api.mercadolibre.com/categories/<CAT>/attributes`:

| Categoria | allow_variations | batch funciona |
|---|---|---|
| MLB46659, MLB456915, MLB456167 | nao | SIM |
| MLB194704, MLB7863 | sim | NAO - grava local e reverte |

Sintoma tipico: o valor aparece certo se voce reler `user-product/edit`, mas a gravacao de SKU
seguinte volta com `error-3510-invalid.item.attribute.values ... item values [(null:Esquerdo)]`.
Esses 114 anuncios precisam ser corrigidos na tela de Editar em Massa da UI.

## 30.5 Outro achado: SKU em minusculo quebra o replace
`oldReplaceStr` e case sensitive. Um anuncio com `sts039hy` nunca casa com `STS039HY`.
Sempre comparar o SKU real lido do servidor, nao o SKU esperado.

## 30.6 Retrato atual do parque (07/08/2026)

| Padrao do SKU | Mercado Livre | Shopee |
|---|---|---|
| Correto | 10.697 | 16.028 |
| Vazio | 2.555 | 528 |
| MLB como SKU | 1.215 | 3.943 |
| STS | 383 | 63 |
| FUN (fora FUN240) | 175 | 4 |
| FGS | 11 | 0 |
| FXS | 3 | 0 |
| Total lido | 15.039 | 20.566 |

## 30.7 Os 355 legados que sobraram e por que nao foram tocados

| Motivo | Anuncios |
|---|---|
| Linha GM / sufixo CV (fora de escopo por ordem do dono) | 132 |
| Base nao existe no catalogo | 161 |
| Base bloqueada pelo dono | 21 |
| Sufixo fora da whitelist | 10 |
| Elegiveis mas com sufixo estranho - vao para relatorio | 31 |

Exemplos dos 31 que precisam de confirmacao do dono antes de gravar:
FUN106-107-LH27-P, STS514TA-UTH11, FUN100-101-h11, FUN117-118S, FUN207-208V,
FUN100-101CRO, FUN100-100tr, STS132FT-Branco.

## 30.8 Proximos passos
1. Reprocessar os 179 SKUs quando os anuncios sairem de `under_review`.
2. Corrigir os 114 SIDE_POSITION de MLB194704 e MLB7863 pela UI de Editar em Massa.
3. Confirmar com o dono os 31 sufixos estranhos.
4. Atacar os 5.158 anuncios com MLB no lugar do SKU pelo funil de evidencia (Padrao B).
5. Atacar os 3.083 anuncios com SKU vazio.

---

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
LED so entra no titulo se entrar no SKU pela regra do item 3.4 (Super LED / 6000K sim, pingo T10 nunca). Excecao: produto construido em LED leva "Full LED", sem sufixo M (secao 51).

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

Resumo: 6000k / 6k = LED de verdade = M. Pingo T10 = acessorio = ignorar no SKU. Produto construido em LED leva "Full LED" no titulo e nao gera M (secao 51).

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
