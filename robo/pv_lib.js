// Robo verificador de precos (UpSeller) - biblioteca para rodar na aba do app.upseller.com
// Uso: eval(localStorage.__PV_LIB); PV.syncAllBg() (esperar PV.syncStatus().finished + 20 s); await PV.pullAll(); PV.analyze(); PV.promoAudit();
//      PV.applyFixesBg() (esperar PV.applyStatus().finished); await PV.syncFixed(); (20 s) await PV.pullAll(); PV.verifyFixes(); PV.analyze(); PV.dump(PV.tsv())
// 03/11/2026: o cache do UpSeller pode estar DEFASADO em relacao ao marketplace (MLB5348074037 mostrava 54,99 e o ML tinha 118,88):
// sincronizar (sync) TODAS as lojas antes de ler. 1.712 anuncios do ML em lotes de 100 = 28 s.
window.PV = (() => {
  const form = o => Object.entries(o).map(([k, v]) => `${encodeURIComponent(k)}=${encodeURIComponent(v)}`).join('&');
  // ids com 16+ digitos perdem precisao no JSON.parse: viram string antes de parsear
  const fixIds = t => t.replace(/"(id|idStr|puid|shopId|variantId|productId|variationId)":\s*(\d{15,})/g, '"$1":"$2"');
  async function post(url, body) {
    const r = await fetch(url, { method: 'POST', headers: { 'Content-Type': 'application/x-www-form-urlencoded' }, body: form(body), credentials: 'include' });
    return JSON.parse(fixIds(await r.text()));
  }
  async function postJson(url, body) {
    const r = await fetch(url, { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify(body), credentials: 'include' });
    return JSON.parse(fixIds(await r.text()));
  }
  async function get(url) {
    const r = await fetch(url, { credentials: 'include' });
    return JSON.parse(fixIds(await r.text()));
  }

  const RE_MX = /^(.+?)-(M|X)(H(?:B)?\d+)$/i;      // base, linha (M led / X xenon), encaixe
  const RE_L = /^(.+?)-L(H(?:B)?\d+)$/i;           // linha halogena (sem regra de preco)
  const ADD = { M: 20, X: 40 };
  // SKUs em veiculos diferentes com 2 blocos de preco legitimos: NUNCA corrigir pelo preco modal, so reportar (lista vazia desde 03/11/2026:
  // FUN100-101 e SSS905RN ganharam preco-alvo do dono em TARGET_KIT; a deteccao automatica de 2 blocos continua valendo para os demais)
  const EXCL_PRICE = new Set([]);
  // PRECO-ALVO DO KIT definido pelo dono (03/11/2026): vale em todas as lojas e veiculos; o robo grava nos anuncios base fora de promocao
  // e calcula -M/-X a partir dele (nao do preco modal). Anuncio em promocao fica como esta ate a campanha acabar.
  //  - FUN100-101 (par universal): 54,99 ("139,99 e kit")  -> -MH8 74,99 / -XH8 94,99
  //  - SSS905RN (kit universal): 139,99 em tudo            -> -MH8 159,99 / -XH8 179,99
  const TARGET_KIT = { 'FUN100-101': 54.99, 'SSS905RN': 139.99 };
  // REGRA DO DONO (03/11/2026): desconto maximo de 8% em qualquer produto, em qualquer campanha. O robo NAO tira ninguem de promocao
  // (decisao 03/11: "os que estao em promocao vc deixa"), so lista no relatorio quem esta com desconto acima disso (PV.promoAudit).
  const MAX_DISCOUNT_PCT = 8;
  // TRAVA DE SEGURANCA (03/11/2026): o robo NAO grava sozinho mudanca de preco acima de 25% (para cima ou para baixo). Esses casos quase
  // sempre sao SKU errado no anuncio (ex.: "Par ..." com SKU de kit SSS905RN a 88,88/118,88; FUN100-101 a 139,99) e vao para o relatorio
  // como "conferir SKU/titulo". Mudanca grande so com o dono conferindo o anuncio.
  const MAX_AUTO_CHANGE_PCT = 25;
  // loja|SKU base em espera de decisao do dono: o robo nao mexe (67.6)
  const HOLD = { 'Isadora ML|SSS1306HY': 'kit a 699,88 nesta loja contra 887,00 nas outras 5: dono decide se iguala o kit ou se as versoes Led/Xenon descem (67.6)' };
  // deteccao automatica de SKU com 2 blocos de preco: 3+ anuncios base fora do preco modal e pelo menos 10% do total
  const MULTI_MIN_N = 3, MULTI_MIN_SHARE = 0.10;
  const KIT_PREFIX = /^(SSS|FUN|GRX|GR)\d/;        // farol de milha (kit ou par)
  const NOT_KIT = new Set(['SSS1305HY', 'SSS621DLT']); // construido em LED / DRL: nao leva lampada
  // farol de milha construido em LED (produto novo, sem lampada): nao gera aviso de variacao - confirmar com o dono
  const LED_FABRICA = new Set(['SSS981RN', 'FUN97CV', 'SSS110HD']);
  // ENCAIXE DA LAMPADA POR SKU BASE - manda na sugestao de -M/-X (dono 03/11/2026 + variacoes no ar + pesquisa; H11 vira H8 por regra da casa)
  const ENCAIXE = {
    // confirmados pelo dono em 03/11/2026
    'FUN102-103': 'HB4', 'FUN104-105': 'HB4', 'FUN975-976': 'HB4', 'SSS014VW': 'HB4', 'SSS414FD': 'HB4', 'SSS712CV': 'H27', 'SSS240FT-4': 'H1',
    // encaixe das variacoes que ja existem no ar
    'SSS702CV': 'HB4', 'SSS710CV': 'HB4', 'SSS405FD': 'HB4', 'SSS707CV': 'HB4',
    'SSS013VW': 'H3', 'SSS743CV': 'H3', 'SSS726CV': 'H3', 'SSS091VW': 'H3', 'SSS057VW': 'H3', 'SSS044VW': 'H3', 'SSS218HD': 'H3',
    'SSS126FT': 'H1', 'SSS101FT': 'H1', 'SSS716CV': 'H27',
    'SSS002VW': 'H8', 'SSS905RN': 'H8', 'SSS905RN-DLT622': 'H8', 'SSS1306HY': 'H8', 'SSS313NS': 'H8', 'SSS303NS': 'H8', 'SSS1105CT': 'H8', 'SSS130FT': 'H8', 'FUN100-101': 'H8',
    // pesquisa 03/11/2026 (tabela de lampadas de farol de milha; H11 vira H8)
    'SSS240FT': 'H1', 'FUN240-2': 'H1', 'FUN240-4': 'H1',                 // Fiat Palio / Strada / Idea / Uno Vivace: H1
    'FUN205-206': 'H3',                                                     // VW Fox / Gol G4 / Saveiro G4 / Parati G4: H3
    'SSS507TA': 'HB4', 'FUN152-153': 'HB4',                                 // Toyota Hilux 2005-2011: HB4
    'FUN117-118': 'H8', 'SSS189-190': 'H8', 'SSS1103CT': 'H8', 'SSS907RN': 'H8', 'SSS905RN-V': 'H8', // Versa, Civic 09-11, C4 Pallas, Logan/Sandero 08-13: H11 -> H8
    'FUN249-250': 'H8', 'SSS069VW': 'H8', 'SSS004VW': 'H8',                 // Gol / Voyage / Saveiro G6: H8 (igual ao SSS002VW)
    'FUN955-956': 'H27'                                                     // Onix Plus 2020-2021: H27
  };
  const ENCAIXE_CONFIRMAR = { 'SSS036VW': 'Polo 2003-2006: H3 ou HB4, confirmar' };
  const round2 = x => Math.round(x * 100) / 100;

  async function pullML() {
    const out = [];
    for (const st of ['active', 'under_review', 'paused']) {
      for (let p = 1; p <= 20; p++) {
        const d = await post('/api/mercado/user-product/index', { dataType: 2, hasCatalogProduct: 0, state: 'online', productState: st, sortName: 3, sortValue: 0, pageNum: p, pageSize: 300 });
        if (d.code !== 0) throw new Error('ML ' + st + ' p' + p + ': ' + JSON.stringify(d).slice(0, 200));
        // promocao ativa no ML = discountPrice menor que o preco, ou pricePromotionId de campanha que ainda nao terminou (priceInfoVo.endDate):
        // o ML recusa a troca de preco enquanto a promocao estiver ativa (confirmado 03/11/2026). Campanha com endDate passado (ex.: TORRES
        // e outubro, terminadas em 01/11) NAO trava mais - mas o cache do UpSeller so mostra isso depois do sync (PV.syncAllBg).
        const today = new Date().toISOString().slice(0, 10);
        for (const it of d.data.list) { const pv = it.priceInfoVo || {}; const pend = (pv.endDate || '').slice(0, 10); const camp = !!it.pricePromotionId && (!pend || pend >= today); out.push({ pl: 'ML', shop: it.shopName, sku: (it.itemSku || '').trim(), price: it.price, disc: it.discountPrice, promoId: it.pricePromotionId || null, promo: camp || !!(it.discountPrice && it.discountPrice < it.price), pname: pv.promotionName || '', ptype: pv.promotionType || '', pstatus: it.promotionStatus || '', pend: pv.endDate || '', id: String(it.id), item: it.itemId, title: it.title, created: it.platformCreateTime || it.createTime, upCreated: it.createTime, status: it.productStatus, active: it.productStatus === 'active', qty: it.availableQuantity }); }
        if (d.data.list.length < 300) break;
      }
    }
    return out;
  }
  async function pullShopee() {
    const out = [];
    for (let p = 1; p <= 20; p++) {
      const d = await post('/api/shopee/product/index', { productState: 'NORMAL', state: 'online', sortName: 3, sortValue: 0, pageNum: p, pageSize: 300 });
      if (d.code !== 0) throw new Error('Shopee p' + p + ': ' + JSON.stringify(d).slice(0, 200));
      for (const it of d.data.list) out.push({ pl: 'SP', shop: it.shopName, sku: (it.itemSku || '').trim(), price: it.price, sale: it.salePrice, promo: it.isPromotion === 1, id: String(it.idStr || it.id), item: String(it.itemId), title: it.name, created: it.platformCreateTime || it.createTime, upCreated: it.createTime, status: it.productStatus, active: it.productStatus === 'NORMAL', qty: it.stock });
      if (d.data.list.length < 300) break;
    }
    return out;
  }
  async function pullTikTok() {
    const out = [];
    for (let p = 1; p <= 20; p++) {
      const d = await post('/api/tiktok/product/index', { state: 'online', sortName: 3, sortValue: 0, pageNum: p, pageSize: 300 });
      if (d.code !== 0) throw new Error('TikTok p' + p + ': ' + JSON.stringify(d).slice(0, 200));
      for (const it of d.data.list) out.push({ pl: 'TK', shop: it.shopName, sku: (it.itemSku || '').trim(), price: it.price, promo: it.joinPromotionFlag === 1, pmin: it.minPromotionPrice, act: it.activityId ? String(it.activityId) : '', id: String(it.idStr || it.id), item: String(it.itemId), title: it.itemTitle, created: it.platformCreateTime || it.createTime, upCreated: it.createTime, status: it.productStatus, active: it.productStatus === 'active', review: it.reviewStatus, qty: it.stock });
      if (d.data.list.length < 300) break;
    }
    return out;
  }
  async function pullAll() {
    const t0 = Date.now();
    const ml = await pullML(); const sp = await pullShopee(); const tk = await pullTikTok();
    const all = [...ml, ...sp, ...tk];
    localStorage.__PV_RAW = JSON.stringify(all);
    localStorage.__PV_RAW_TS = new Date().toISOString();
    return { ml: ml.length, sp: sp.length, tk: tk.length, total: all.length, ms: Date.now() - t0 };
  }
  function raw() { return JSON.parse(localStorage.__PV_RAW || '[]'); }

  // SINCRONIZA TODAS AS LOJAS com o marketplace ANTES de ler (cache do UpSeller pode estar defasado, 03/11/2026).
  // Roda em segundo plano (chamada de JS acima de ~30 s derruba a extensao): PV.syncAllBg(); depois PV.syncStatus() ate finished,
  // esperar mais ~20 s (o sync e assincrono no servidor) e so entao PV.pullAll(). Usa os ids do ultimo __PV_RAW (ou le os index antes).
  function syncAllBg(pls = ['ML', 'SP', 'TK'], batch = 100, pauseMs = 1500) {
    const paths = { ML: '/api/mercado/product/sync', SP: '/api/shopee/product/sync', TK: '/api/tiktok/product/sync' };
    const st = { started: new Date().toISOString(), total: 0, done: 0, batches: 0, errors: [], finished: false };
    window.__PV_SYNC = st; localStorage.__PV_SYNC = JSON.stringify(st);
    (async () => {
      let all = raw();
      if (!all.length) { await pullAll(); all = raw(); }
      const jobs = pls.map(pl => [paths[pl], all.filter(i => i.pl === pl).map(i => i.id)]);
      st.total = jobs.reduce((s, j) => s + j[1].length, 0);
      for (const [path, ids] of jobs) {
        for (let k = 0; k < ids.length; k += batch) {
          try { const r = await post(path, { ids: ids.slice(k, k + batch).join(',') }); if (r.code !== 0) st.errors.push(path + ' ' + String(r.msg).slice(0, 80)); }
          catch (e) { st.errors.push(path + ' ' + String(e).slice(0, 80)); }
          st.done += Math.min(batch, ids.length - k); st.batches++; localStorage.__PV_SYNC = JSON.stringify(st);
          await new Promise(r => setTimeout(r, pauseMs));
        }
      }
      st.finished = true; st.finishedAt = new Date().toISOString(); localStorage.__PV_SYNC = JSON.stringify(st);
    })();
    return st;
  }
  function syncStatus() { return window.__PV_SYNC || JSON.parse(localStorage.__PV_SYNC || '{}'); }

  // AUDITORIA DE PROMOCOES: regra do dono (03/11/2026) = desconto maximo de 8% em qualquer produto. So lista; nunca tira de promocao.
  // ML: discountPrice x price (depois do sync); Shopee: salePrice x price; TikTok: minPromotionPrice x price (sem preco = so a flag).
  function promoAudit(maxPct = MAX_DISCOUNT_PCT) {
    const all = raw();
    const sum = {}; const rows = [];
    for (const i of all) {
      if (!i.promo) continue;
      const sale = i.pl === 'ML' ? i.disc : i.pl === 'SP' ? i.sale : i.pl === 'TK' ? i.pmin : null;
      const pct = (sale && i.price && sale < i.price) ? round2((1 - sale / i.price) * 100) : null;
      const s = sum[i.shop] = sum[i.shop] || { pl: i.pl, promo: 0, over: 0, upto: 0, semPreco: 0 };
      s.promo++; if (pct === null) s.semPreco++; else if (pct > maxPct + 0.05) s.over++; else s.upto++;
      if (pct !== null && pct > maxPct + 0.05) rows.push({ shop: i.shop, pl: i.pl, sku: i.sku, price: i.price, sale, pct, pname: i.pname || (i.pl === 'TK' ? ('atividade ' + (i.act || '')) : ''), pend: (i.pend || '').slice(0, 10), status: i.status, id: i.id, item: i.item, title: i.title });
    }
    rows.sort((a, b) => b.pct - a.pct || a.shop.localeCompare(b.shop) || a.sku.localeCompare(b.sku));
    const res = { ts: new Date().toISOString(), maxPct, summary: sum, over: rows.length, rows };
    localStorage.__PV_PROMO = JSON.stringify(res);
    return { maxPct, summary: sum, over: rows.length };
  }

  function classify(sku) {
    const s = (sku || '').trim().toUpperCase();
    let m = s.match(RE_MX);
    if (m) return { base: m[1], line: m[2].toUpperCase(), enc: m[3].toUpperCase() };
    m = s.match(RE_L);
    if (m) return { base: m[1], line: 'L', enc: m[2].toUpperCase() };
    return { base: s, line: 'BASE', enc: null };
  }
  function modal(prices) {
    const c = {};
    for (const p of prices) { const k = round2(p).toFixed(2); c[k] = (c[k] || 0) + 1; }
    let best = null;
    for (const [k, n] of Object.entries(c)) { if (!best || n > best.n || (n === best.n && +k > best.p)) best = { p: +k, n }; }
    return best;
  }
  function isKit(base) { return KIT_PREFIX.test(base) && !NOT_KIT.has(base) && !LED_FABRICA.has(base); }

  function analyze(hours = 24) {
    const all = raw();
    const now = Date.now(), since = now - hours * 3600e3;
    const res = { ts: new Date().toISOString(), pulledAt: localStorage.__PV_RAW_TS, hours, counts: {}, new24: [], diverg: [], missing: [], varNoBase: [], crossStore: [], notKit: [], multiBlock: [], noSku: {} };
    for (const r of all) {
      const k = r.shop; res.counts[k] = res.counts[k] || { total: 0, active: 0, noSku: 0 };
      res.counts[k].total++; if (r.active) res.counts[k].active++; if (!r.sku) res.counts[k].noSku++;
    }
    // anuncios criados nas ultimas N horas (qualquer estado)
    for (const r of all) {
      const t = Date.parse(r.created || ''); const t2 = Date.parse(r.upCreated || '');
      if ((t && t >= since) || (t2 && t2 >= since)) res.new24.push({ shop: r.shop, pl: r.pl, sku: r.sku, title: r.title, price: r.price, created: r.created, status: r.status, id: r.id, item: r.item, qty: r.qty });
    }
    res.new24.sort((a, b) => (b.created || '').localeCompare(a.created || ''));
    // ultimo dia com anuncio criado (para o relatorio dizer "os ultimos sao de DD/MM")
    const byDay = {}; for (const r of all) { const d = (r.created || r.upCreated || '').slice(0, 10); if (d) byDay[d] = (byDay[d] || 0) + 1; }
    const lastDay = Object.keys(byDay).sort().pop();
    res.lastCreated = lastDay ? { date: lastDay, n: byDay[lastDay] } : null;
    // grupos por loja x SKU base (so ativos)
    const shops = {};
    for (const r of all) {
      if (!r.active || !r.sku) continue;
      const c = classify(r.sku);
      const s = shops[r.shop] = shops[r.shop] || { pl: r.pl, groups: {} };
      const g = s.groups[c.base] = s.groups[c.base] || { base: c.base, items: [] };
      g.items.push({ ...r, ...c });
    }
    const basePriceByShop = {}; // base -> {shop: price}
    for (const [shop, s] of Object.entries(shops)) {
      for (const g of Object.values(s.groups)) {
        const baseItems = g.items.filter(i => i.line === 'BASE');
        const mx = g.items.filter(i => i.line === 'M' || i.line === 'X');
        const target = TARGET_KIT[g.base];
        const bp = target ? { p: target, n: baseItems.filter(i => Math.abs(i.price - target) < 0.005).length, target: true } : (baseItems.length ? modal(baseItems.map(i => i.price)) : null);
        if (bp) (basePriceByShop[g.base] = basePriceByShop[g.base] || {})[shop] = bp.p;
        // anuncios base fora do preco-alvo do dono
        if (target) for (const i of baseItems) {
          if (Math.abs(i.price - target) > 0.005) {
            let fixable = true, reason = '';
            if (i.pl === 'ML' && i.promo) { fixable = false; reason = 'ML em promocao (o ML recusa a troca de preco enquanto a promocao estiver ativa)'; }
            else if (i.pl === 'SP' && i.promo) { fixable = false; reason = 'Shopee em promocao (decisao 22/10: fica como esta)'; }
            else if (i.pl === 'TK' && i.promo) { fixable = false; reason = 'TikTok em promocao: fica como esta'; }
            else if (i.pl === 'TK' && i.review !== 1 && i.review !== undefined && i.review !== null) { fixable = false; reason = 'TikTok em revisao (reviewStatus=' + i.review + ')'; }
            else if (HOLD[shop + '|' + g.base]) { fixable = false; reason = 'aguardando decisao do dono: ' + HOLD[shop + '|' + g.base]; }
            else if (Math.abs(target - i.price) / i.price * 100 > MAX_AUTO_CHANGE_PCT) { fixable = false; reason = 'mudanca acima de ' + MAX_AUTO_CHANGE_PCT + '% (' + round2((target - i.price) / i.price * 100) + '%): conferir SKU/titulo do anuncio antes de mexer'; }
            res.diverg.push({ shop, pl: i.pl, sku: i.sku, base: g.base, line: 'BASE', basePrice: target, baseN: bp.n, baseTotal: baseItems.length, expected: target, current: i.price, diff: round2(i.price - target), id: i.id, item: i.item, title: i.title, promo: i.promo, fixable, reason: reason || 'preco-alvo do kit definido pelo dono' });
          }
        }
        if (!isKit(g.base) && g.base) { if (!res.notKit.find(x => x.base === g.base)) res.notKit.push({ base: g.base, title: g.items[0].title, why: LED_FABRICA.has(g.base) ? 'farol construido em LED, sem lampada (confirmar)' : NOT_KIT.has(g.base) ? 'DRL / construido em LED' : 'prefixo fora do padrao de kit' }); }
        // SKU com 2 blocos de preco (mesmo SKU em veiculos diferentes): so reporta, nunca corrige
        const offModal = bp ? baseItems.filter(i => Math.abs(i.price - bp.p) > 0.005).length : 0;
        const multi = bp && !target && (EXCL_PRICE.has(g.base) || (offModal >= MULTI_MIN_N && offModal / baseItems.length >= MULTI_MIN_SHARE));
        if (multi) {
          const blocks = {}; for (const i of baseItems) blocks[i.price.toFixed(2)] = (blocks[i.price.toFixed(2)] || 0) + 1;
          res.multiBlock.push({ shop, pl: s.pl, base: g.base, blocks: Object.entries(blocks).sort((a, b) => b[1] - a[1]).map(([p, n]) => p + 'x' + n).join(' '), nVar: mx.length, listed: EXCL_PRICE.has(g.base) ? 'lista fixa' : 'detectado' });
        }
        if (!bp) {
          if (mx.length) res.varNoBase.push({ shop, pl: s.pl, base: g.base, skus: [...new Set(mx.map(i => i.sku))].join(' '), n: mx.length, prices: [...new Set(mx.map(i => i.price))].join(' ') });
        } else {
          for (const i of mx) {
            const expected = round2(bp.p + ADD[i.line]);
            if (Math.abs(i.price - expected) > 0.005) {
              let fixable = true, reason = '';
              if (multi) { fixable = false; reason = 'SKU em veiculos diferentes (2 blocos de preco): conferir a mao, o preco modal nao serve de base'; }
              else if (i.pl === 'ML' && i.promo) { fixable = false; reason = 'ML em promocao (o ML recusa a troca de preco enquanto a promocao estiver ativa)'; }
              else if (i.pl === 'SP' && i.promo) { fixable = false; reason = 'Shopee em promocao (decisao 22/10: fica como esta)'; }
              else if (i.pl === 'TK' && i.promo) { fixable = false; reason = 'TikTok em promocao: fica como esta'; }
              else if (i.pl === 'TK' && i.review !== 1 && i.review !== undefined && i.review !== null) { fixable = false; reason = 'TikTok em revisao (reviewStatus=' + i.review + ')'; }
              else if (HOLD[shop + '|' + g.base]) { fixable = false; reason = 'aguardando decisao do dono: ' + HOLD[shop + '|' + g.base]; }
              else if (Math.abs(expected - i.price) / i.price * 100 > MAX_AUTO_CHANGE_PCT) { fixable = false; reason = 'mudanca acima de ' + MAX_AUTO_CHANGE_PCT + '% (' + round2((expected - i.price) / i.price * 100) + '%): conferir SKU/titulo do anuncio antes de mexer'; }
              res.diverg.push({ shop, pl: i.pl, sku: i.sku, base: g.base, line: i.line, basePrice: bp.p, baseN: bp.n, baseTotal: baseItems.length, expected, current: i.price, diff: round2(i.price - expected), id: i.id, item: i.item, title: i.title, promo: i.promo, fixable, reason });
            }
          }
        }
        // variacoes faltantes (so kit de farol de milha com base ativa na loja)
        if (bp && baseItems.length && isKit(g.base)) {
          const lines = new Set(mx.map(i => i.line));
          const miss = ['M', 'X'].filter(l => !lines.has(l));
          if (miss.length) {
            const encHere = [...new Set(mx.map(i => i.enc))];
            res.missing.push({ shop, pl: s.pl, base: g.base, title: baseItems[0].title, basePrice: bp.p, nBase: baseItems.length, has: [...lines].join('') || '-', missing: miss.join(''), encHere: encHere.join('/'), suggestM: round2(bp.p + 20), suggestX: round2(bp.p + 40) });
          }
        }
      }
    }
    // encaixe sugerido: 1) tabela ENCAIXE (dono/pesquisa) 2) variacao da propria loja 3) de outra loja 4) a confirmar
    const encByBase = {};
    for (const s of Object.values(shops)) for (const g of Object.values(s.groups)) for (const i of g.items) if (i.enc && i.line !== 'L') (encByBase[g.base] = encByBase[g.base] || new Set()).add(i.enc);
    for (const m of res.missing) {
      const tab = ENCAIXE[m.base]; const here = m.encHere; const other = encByBase[m.base] ? [...encByBase[m.base]].join('/') : '';
      if (tab) { m.enc = tab; m.encNote = 'tabela'; if (here && here !== tab) m.encNote = 'tabela ' + tab + ' (ATENCAO: no ar existe -' + here + ')'; else if (!here && other && other !== tab) m.encNote = 'tabela ' + tab + ' (outra loja usa ' + other + ')'; }
      else if (here) { m.enc = here; m.encNote = 'variacao desta loja'; }
      else if (other) { m.enc = other; m.encNote = 'de outra loja'; }
      else { m.enc = ''; m.encNote = ENCAIXE_CONFIRMAR[m.base] || 'encaixe nao conhecido: pesquisar antes de criar'; }
      m.suggestSkuM = m.enc && m.missing.includes('M') ? m.base + '-M' + m.enc : '';
      m.suggestSkuX = m.enc && m.missing.includes('X') ? m.base + '-X' + m.enc : '';
      delete m.encHere;
    }
    // preco do kit diferente entre lojas
    for (const [base, byShop] of Object.entries(basePriceByShop)) {
      const vals = [...new Set(Object.values(byShop))];
      if (vals.length > 1) res.crossStore.push({ base, prices: byShop });
    }
    res.diverg.sort((a, b) => a.shop.localeCompare(b.shop) || a.sku.localeCompare(b.sku));
    res.missing.sort((a, b) => a.shop.localeCompare(b.shop) || a.base.localeCompare(b.base));
    res.summary = { total: all.length, active: all.filter(r => r.active).length, new24: res.new24.length, diverg: res.diverg.length, divergFixable: res.diverg.filter(d => d.fixable).length, missing: res.missing.length, varNoBase: res.varNoBase.length, crossStore: res.crossStore.length, notKit: res.notKit.length, multiBlock: res.multiBlock.length };
    localStorage.__PV_RESULT = JSON.stringify(res);
    return res;
  }

  // gravacao de preco (um anuncio por chamada; code 0 nao garante: reler depois)
  async function setPrice(d) {
    // igual a tela do UpSeller (editar preco de 1 anuncio): sem mshopValue quando o anuncio nao tem Mercado Shops
    if (d.pl === 'ML') return postJson('/api/mercado/product/edit-online-price', { type: 0, idList: [d.id], value: d.expected });
    if (d.pl === 'SP') return postJson('/api/shopee/product/edit-online-price', { productId: d.id, price: d.expected });
    if (d.pl === 'TK') {
      const e = await get('/api/tiktok/product/edit?id=' + d.id);
      const v = e.data && e.data.variationList && e.data.variationList[0];
      if (!v) return { code: -1, msg: 'sem variationList', raw: JSON.stringify(e).slice(0, 200) };
      return postJson('/api/tiktok/product/online-edit-price', { productId: d.id, variantPriceList: [{ variantId: String(v.idStr || v.id), price: d.expected }] });
    }
  }
  async function applyFixes(list, maxMs = 20000) {
    const t0 = Date.now();
    const log = JSON.parse(localStorage.__PV_FIXLOG || '[]');
    const done = new Set(log.map(l => l.id));
    let n = 0;
    for (const d of list) {
      if (!d.fixable || done.has(d.id)) continue;
      if (Date.now() - t0 > maxMs) break;
      let r; try { r = await setPrice(d); } catch (e) { r = { code: -2, msg: String(e) }; }
      log.push({ id: d.id, pl: d.pl, shop: d.shop, sku: d.sku, from: d.current, to: d.expected, code: r.code, msg: r.msg || r.message || '', ts: new Date().toISOString() });
      n++;
    }
    localStorage.__PV_FIXLOG = JSON.stringify(log);
    const pending = list.filter(d => d.fixable && !log.find(l => l.id === d.id)).length;
    return { applied: n, logged: log.length, pending };
  }

  // GRAVACAO EM SEGUNDO PLANO (03/11/2026): centenas de anuncios levam minutos e uma chamada de JS longa derruba a extensao.
  // PV.applyFixesBg() grava 1 por vez (0,7 s entre eles, 4 tentativas quando o ML responde rate_limited), log em __PV_FIXLOG;
  // acompanhar com PV.applyStatus() ate finished. Depois: PV.syncFixed() -> esperar 20 s -> PV.pullAll() -> PV.verifyFixes().
  function applyFixesBg(list) {
    list = list || JSON.parse(localStorage.__PV_RESULT || '{}').diverg || [];
    list = list.filter(d => d.fixable);
    const st = { total: list.length, done: 0, ok: 0, err: 0, retries: 0, started: new Date().toISOString(), finished: false };
    window.__PV_APPLY = st;
    (async () => {
      const log = JSON.parse(localStorage.__PV_FIXLOG || '[]'); const done = new Set(log.map(l => l.id));
      for (const d of list) {
        if (done.has(d.id)) { st.done++; continue; }
        let r = null;
        for (let t = 0; t < 4; t++) {
          try { r = await setPrice(d); } catch (e) { r = { code: -2, msg: String(e) }; }
          if (r.code === 0 || !/rate_limited|limit/i.test(String(r.msg))) break;
          st.retries++; await new Promise(x => setTimeout(x, 4000));
        }
        log.push({ id: d.id, pl: d.pl, shop: d.shop, sku: d.sku, from: d.current, to: d.expected, code: r.code, msg: String(r.msg || r.message || '').slice(0, 80), ts: new Date().toISOString() });
        if (r.code === 0) st.ok++; else st.err++;
        st.done++; localStorage.__PV_FIXLOG = JSON.stringify(log);
        await new Promise(x => setTimeout(x, 700));
      }
      st.finished = true; st.finishedAt = new Date().toISOString();
    })();
    return st;
  }
  function applyStatus() { return window.__PV_APPLY || null; }

  // sincroniza do marketplace os anuncios gravados (o index so mostra o preco real depois do sync)
  async function syncIds(pl, ids) {
    const out = [];
    for (let i = 0; i < ids.length; i += 40) {
      const chunk = ids.slice(i, i + 40).join(',');
      try {
        if (pl === 'ML') out.push(await post('/api/mercado/product/sync', { ids: chunk }));
        else if (pl === 'SP') out.push(await post('/api/shopee/product/sync', { ids: chunk }));
        else if (pl === 'TK') out.push(await post('/api/tiktok/product/sync', { ids: chunk }));
      } catch (e) { out.push({ code: -2, msg: String(e) }); }
    }
    return out.map(o => o.code);
  }
  async function syncFixed() {
    const log = JSON.parse(localStorage.__PV_FIXLOG || '[]');
    const res = {};
    for (const pl of ['ML', 'SP', 'TK']) { const ids = [...new Set(log.filter(l => l.pl === pl && l.code === 0).map(l => l.id))]; if (ids.length) res[pl] = { n: ids.length, codes: await syncIds(pl, ids) }; }
    return res;
  }
  // confere o que foi gravado relendo o index (depois de pullAll): confirmado = preco atual igual ao preco gravado
  function verifyFixes() {
    const log = JSON.parse(localStorage.__PV_FIXLOG || '[]');
    const byId = {}; for (const r of raw()) byId[r.id] = r;
    for (const l of log) { const r = byId[l.id]; l.now = r ? r.price : null; l.ok = !!r && Math.abs(r.price - l.to) < 0.005; }
    localStorage.__PV_FIXLOG = JSON.stringify(log);
    return { total: log.length, ok: log.filter(l => l.ok).length, failed: log.filter(l => !l.ok) };
  }

  // leitura dos resultados pela ferramenta get_page_text (50 mil caracteres por leitura)
  function dump(obj, part = 0, size = 48000) {
    const s = typeof obj === 'string' ? obj : JSON.stringify(obj);
    const parts = Math.ceil(s.length / size);
    document.body.innerHTML = '<pre id="pvdump" style="white-space:pre-wrap;word-break:break-all;font:12px monospace">' + 'PVDUMP part ' + (part + 1) + '/' + parts + ' len=' + s.length + '\n' + s.slice(part * size, (part + 1) * size).replace(/&/g, '&amp;').replace(/</g, '&lt;') + '</pre>';
    return { parts, len: s.length };
  }
  // monta o TSV compacto que a sessao le com get_page_text (PV.dump(PV.tsv()))
  function tsv() {
    const r = JSON.parse(localStorage.__PV_RESULT || '{}'); const log = JSON.parse(localStorage.__PV_FIXLOG || '[]');
    const esc = s => String(s == null ? '' : s).replace(/[\t\n\r]+/g, ' ');
    const rc = s => /^ML em promocao/.test(s) ? 'ML_PROMO' : /^Shopee em promocao/.test(s) ? 'SP_PROMO' : /^TikTok em promocao/.test(s) ? 'TK_PROMO' : /^TikTok em revisao/.test(s) ? 'TK_REVIEW' : /^SKU em veiculos/.test(s) ? 'MULTI_BLOCK' : /^preco-alvo/.test(s) ? 'TARGET' : /^aguardando decisao/.test(s) ? 'HOLD' : /^mudanca acima/.test(s) ? 'BIG_CHANGE' : (s || '');
    const L = [];
    L.push('#META\t' + JSON.stringify({ ts: r.ts, pulledAt: r.pulledAt, summary: r.summary, counts: r.counts, lastCreated: r.lastCreated || null }));
    const g = {};
    for (const d of r.diverg || []) { const k = d.shop + '|' + d.sku; const o = g[k] = g[k] || { shop: d.shop, pl: d.pl, sku: d.sku, base: d.base, line: d.line, basePrice: d.basePrice, baseN: d.baseN, baseTotal: d.baseTotal, expected: d.expected, n: 0, fix: 0, cur: {}, reason: rc(d.reason), items: [] }; o.n++; if (d.fixable) o.fix++; o.cur[d.current] = (o.cur[d.current] || 0) + 1; o.items.push(d.item); }
    L.push('#DIVERG_G\tshop\tpl\tsku\tbase\tline\tbasePrice\tbaseN\tbaseTotal\texpected\tn\tfixable\tcurrents\treason\titems');
    for (const o of Object.values(g)) L.push(['G', o.shop, o.pl, o.sku, o.base, o.line, o.basePrice, o.baseN, o.baseTotal, o.expected, o.n, o.fix, Object.entries(o.cur).map(([p, n]) => p + 'x' + n).join(' '), o.reason, o.items.join(' ')].map(esc).join('\t'));
    L.push('#MISSING\tshop\tpl\tbase\tbasePrice\tnBase\thas\tmissing\tenc\tsuggestM\tsuggestX\ttitle\tencNote\tskuM\tskuX');
    for (const m of r.missing || []) L.push(['M', m.shop, m.pl, m.base, m.basePrice, m.nBase, m.has, m.missing, m.enc, m.suggestM, m.suggestX, (m.title || '').slice(0, 70), m.encNote || '', m.suggestSkuM || '', m.suggestSkuX || ''].map(esc).join('\t'));
    L.push('#VARNOBASE\tshop\tpl\tbase\tskus\tn\tprices');
    for (const v of r.varNoBase || []) L.push(['V', v.shop, v.pl, v.base, v.skus, v.n, v.prices].map(esc).join('\t'));
    L.push('#MULTIBLOCK\tshop\tpl\tbase\tblocks\tnVar\tlisted');
    for (const m of r.multiBlock || []) L.push(['B', m.shop, m.pl, m.base, m.blocks, m.nVar, m.listed].map(esc).join('\t'));
    L.push('#CROSS\tbase\tprices');
    for (const c of r.crossStore || []) L.push(['C', c.base, JSON.stringify(c.prices)].map(esc).join('\t'));
    L.push('#NOTKIT\tbase\ttitle\twhy');
    for (const n of r.notKit || []) L.push(['N', n.base, (n.title || '').slice(0, 70), n.why || ''].map(esc).join('\t'));
    L.push('#FIXLOG\tshop\tpl\tsku\tfrom\tto\tcode\tts\tnow\tok\tid\treverted\tnote');
    for (const l of log) L.push(['F', l.shop, l.pl, l.sku, l.from, l.to, l.code, l.ts, l.now, l.ok ? 1 : 0, l.id, l.reverted ? 1 : 0, l.note || ''].map(esc).join('\t'));
    L.push('#NEW24\tshop\tpl\tsku\tprice\tcreated\tstatus\titem\tid\tqty\ttitle');
    for (const n of r.new24 || []) L.push(['W', n.shop, n.pl, n.sku, n.price, n.created, n.status, n.item, n.id, n.qty, n.title].map(esc).join('\t'));
    // promocoes acima do desconto maximo (PV.promoAudit): resumo por loja + linhas agrupadas por loja/SKU/preco/promocao
    const pr = JSON.parse(localStorage.__PV_PROMO || '{}');
    L.push('#PROMO_SUM\tshop\tpl\tpromo\tover\tupto\tsemPreco\tmaxPct');
    for (const [shop, s] of Object.entries(pr.summary || {})) L.push(['S', shop, s.pl, s.promo, s.over, s.upto, s.semPreco, pr.maxPct].map(esc).join('\t'));
    const pg = {};
    for (const p of pr.rows || []) { const k = [p.shop, p.sku, p.price, p.sale, p.pname].join('|'); const o = pg[k] = pg[k] || { shop: p.shop, pl: p.pl, sku: p.sku, price: p.price, sale: p.sale, pct: p.pct, pname: p.pname, pend: p.pend, n: 0, items: [], title: p.title }; o.n++; o.items.push(p.item); }
    L.push('#PROMO_OVER\tshop\tpl\tsku\tprice\tsale\tpct\tpname\tpend\tn\titems\ttitle');
    for (const o of Object.values(pg)) L.push(['P', o.shop, o.pl, o.sku, o.price, o.sale, o.pct, o.pname, o.pend, o.n, o.items.join(' '), (o.title || '').slice(0, 70)].map(esc).join('\t'));
    return L.join('\n');
  }
  return { post, postJson, get, pullAll, pullML, pullShopee, pullTikTok, raw, classify, modal, isKit, analyze, setPrice, applyFixes, applyFixesBg, applyStatus, syncIds, syncFixed, verifyFixes, syncAllBg, syncStatus, promoAudit, dump, tsv, RE_MX, RE_L, ADD, EXCL_PRICE, TARGET_KIT, MAX_DISCOUNT_PCT, MAX_AUTO_CHANGE_PCT, HOLD, KIT_PREFIX, NOT_KIT, LED_FABRICA, ENCAIXE, ENCAIXE_CONFIRMAR };
})();
