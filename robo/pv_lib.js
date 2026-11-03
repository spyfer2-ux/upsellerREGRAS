// Robo verificador de precos (UpSeller) - biblioteca para rodar na aba do app.upseller.com
// Uso: eval(localStorage.__PV_LIB); await PV.pullAll(); const r = PV.analyze(); PV.dump(r)
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
  // SKUs em veiculos diferentes, com 2 blocos de preco legitimos: NUNCA corrigir pelo preco modal (63.5.3 e licao de 03/11/2026)
  //  - FUN100-101: Pajero/L200 139,99 x C3/EcoSport/Fiesta/207/Renegade 54,99-75,59
  //  - SSS905RN: Peugeot 307/2008 e L200 139,99 (MH8 159,99 / XH8 179,99) x Logan/Sandero/Kwid/Duster/Mobi/Argo/C4 Pallas 168,88 (MH8 188,88)
  const EXCL_PRICE = new Set(['FUN100-101', 'SSS905RN']);
  // deteccao automatica de SKU com 2 blocos de preco: 3+ anuncios base fora do preco modal e pelo menos 10% do total
  const MULTI_MIN_N = 3, MULTI_MIN_SHARE = 0.10;
  const KIT_PREFIX = /^(SSS|FUN|GRX|GR)\d/;        // farol de milha (kit ou par)
  const NOT_KIT = new Set(['SSS1305HY', 'SSS621DLT']); // construido em LED / DRL: nao leva lampada
  const round2 = x => Math.round(x * 100) / 100;

  async function pullML() {
    const out = [];
    for (const st of ['active', 'under_review', 'paused']) {
      for (let p = 1; p <= 20; p++) {
        const d = await post('/api/mercado/user-product/index', { dataType: 2, hasCatalogProduct: 0, state: 'online', productState: st, sortName: 3, sortValue: 0, pageNum: p, pageSize: 300 });
        if (d.code !== 0) throw new Error('ML ' + st + ' p' + p + ': ' + JSON.stringify(d).slice(0, 200));
        // promocao ativa no ML = pricePromotionId preenchido ou discountPrice menor que o preco: o ML recusa a troca de preco (confirmado 03/11/2026)
        for (const it of d.data.list) out.push({ pl: 'ML', shop: it.shopName, sku: (it.itemSku || '').trim(), price: it.price, disc: it.discountPrice, promoId: it.pricePromotionId || null, promo: !!(it.pricePromotionId) || !!(it.discountPrice && it.discountPrice < it.price), id: String(it.id), item: it.itemId, title: it.title, created: it.platformCreateTime || it.createTime, upCreated: it.createTime, status: it.productStatus, active: it.productStatus === 'active', qty: it.availableQuantity });
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
      for (const it of d.data.list) out.push({ pl: 'TK', shop: it.shopName, sku: (it.itemSku || '').trim(), price: it.price, promo: it.joinPromotionFlag === 1, id: String(it.idStr || it.id), item: String(it.itemId), title: it.itemTitle, created: it.platformCreateTime || it.createTime, upCreated: it.createTime, status: it.productStatus, active: it.productStatus === 'active', review: it.reviewStatus, qty: it.stock });
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
  function isKit(base) { return KIT_PREFIX.test(base) && !NOT_KIT.has(base); }

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
        const bp = baseItems.length ? modal(baseItems.map(i => i.price)) : null;
        if (bp) (basePriceByShop[g.base] = basePriceByShop[g.base] || {})[shop] = bp.p;
        if (!isKit(g.base) && g.base) { if (!res.notKit.find(x => x.base === g.base)) res.notKit.push({ base: g.base, title: g.items[0].title }); }
        // SKU com 2 blocos de preco (mesmo SKU em veiculos diferentes): so reporta, nunca corrige
        const offModal = bp ? baseItems.filter(i => Math.abs(i.price - bp.p) > 0.005).length : 0;
        const multi = bp && (EXCL_PRICE.has(g.base) || (offModal >= MULTI_MIN_N && offModal / baseItems.length >= MULTI_MIN_SHARE));
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
              else if (i.pl === 'TK' && i.review !== 1 && i.review !== undefined && i.review !== null) { fixable = false; reason = 'TikTok em revisao (reviewStatus=' + i.review + ')'; }
              res.diverg.push({ shop, pl: i.pl, sku: i.sku, base: g.base, line: i.line, basePrice: bp.p, baseN: bp.n, baseTotal: baseItems.length, expected, current: i.price, diff: round2(i.price - expected), id: i.id, item: i.item, title: i.title, promo: i.promo, fixable, reason });
            }
          }
        }
        // variacoes faltantes (so kit de farol de milha com base ativa na loja)
        if (bp && isKit(g.base)) {
          const lines = new Set(mx.map(i => i.line));
          const miss = ['M', 'X'].filter(l => !lines.has(l));
          if (miss.length) {
            const encHere = [...new Set(mx.map(i => i.enc))];
            res.missing.push({ shop, pl: s.pl, base: g.base, title: baseItems[0].title, basePrice: bp.p, nBase: baseItems.length, has: [...lines].join('') || '-', missing: miss.join(''), encHere: encHere.join('/'), suggestM: round2(bp.p + 20), suggestX: round2(bp.p + 40) });
          }
        }
      }
    }
    // encaixe sugerido: da propria loja, senao de outras lojas, senao H8 padrao
    const encByBase = {};
    for (const s of Object.values(shops)) for (const g of Object.values(s.groups)) for (const i of g.items) if (i.enc && i.line !== 'L') (encByBase[g.base] = encByBase[g.base] || new Set()).add(i.enc);
    for (const m of res.missing) { m.enc = m.encHere || (encByBase[m.base] ? [...encByBase[m.base]].join('/') + ' (de outra loja)' : 'H8 (padrao, confirmar na descricao)'); delete m.encHere; }
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
    const rc = s => /^ML em promocao/.test(s) ? 'ML_PROMO' : /^Shopee em promocao/.test(s) ? 'SP_PROMO' : /^TikTok em revisao/.test(s) ? 'TK_REVIEW' : /^SKU em veiculos/.test(s) ? 'MULTI_BLOCK' : (s || '');
    const L = [];
    L.push('#META\t' + JSON.stringify({ ts: r.ts, pulledAt: r.pulledAt, summary: r.summary, counts: r.counts, lastCreated: r.lastCreated || null }));
    const g = {};
    for (const d of r.diverg || []) { const k = d.shop + '|' + d.sku; const o = g[k] = g[k] || { shop: d.shop, pl: d.pl, sku: d.sku, base: d.base, line: d.line, basePrice: d.basePrice, baseN: d.baseN, baseTotal: d.baseTotal, expected: d.expected, n: 0, fix: 0, cur: {}, reason: rc(d.reason), items: [] }; o.n++; if (d.fixable) o.fix++; o.cur[d.current] = (o.cur[d.current] || 0) + 1; o.items.push(d.item); }
    L.push('#DIVERG_G\tshop\tpl\tsku\tbase\tline\tbasePrice\tbaseN\tbaseTotal\texpected\tn\tfixable\tcurrents\treason\titems');
    for (const o of Object.values(g)) L.push(['G', o.shop, o.pl, o.sku, o.base, o.line, o.basePrice, o.baseN, o.baseTotal, o.expected, o.n, o.fix, Object.entries(o.cur).map(([p, n]) => p + 'x' + n).join(' '), o.reason, o.items.join(' ')].map(esc).join('\t'));
    L.push('#MISSING\tshop\tpl\tbase\tbasePrice\tnBase\thas\tmissing\tenc\tsuggestM\tsuggestX\ttitle');
    for (const m of r.missing || []) L.push(['M', m.shop, m.pl, m.base, m.basePrice, m.nBase, m.has, m.missing, m.enc, m.suggestM, m.suggestX, (m.title || '').slice(0, 70)].map(esc).join('\t'));
    L.push('#VARNOBASE\tshop\tpl\tbase\tskus\tn\tprices');
    for (const v of r.varNoBase || []) L.push(['V', v.shop, v.pl, v.base, v.skus, v.n, v.prices].map(esc).join('\t'));
    L.push('#MULTIBLOCK\tshop\tpl\tbase\tblocks\tnVar\tlisted');
    for (const m of r.multiBlock || []) L.push(['B', m.shop, m.pl, m.base, m.blocks, m.nVar, m.listed].map(esc).join('\t'));
    L.push('#CROSS\tbase\tprices');
    for (const c of r.crossStore || []) L.push(['C', c.base, JSON.stringify(c.prices)].map(esc).join('\t'));
    L.push('#NOTKIT\tbase\ttitle');
    for (const n of r.notKit || []) L.push(['N', n.base, (n.title || '').slice(0, 70)].map(esc).join('\t'));
    L.push('#FIXLOG\tshop\tpl\tsku\tfrom\tto\tcode\tts\tnow\tok\tid\treverted\tnote');
    for (const l of log) L.push(['F', l.shop, l.pl, l.sku, l.from, l.to, l.code, l.ts, l.now, l.ok ? 1 : 0, l.id, l.reverted ? 1 : 0, l.note || ''].map(esc).join('\t'));
    L.push('#NEW24\tshop\tpl\tsku\tprice\tcreated\tstatus\titem\tid\tqty\ttitle');
    for (const n of r.new24 || []) L.push(['W', n.shop, n.pl, n.sku, n.price, n.created, n.status, n.item, n.id, n.qty, n.title].map(esc).join('\t'));
    return L.join('\n');
  }
  return { post, postJson, get, pullAll, pullML, pullShopee, pullTikTok, raw, classify, modal, isKit, analyze, setPrice, applyFixes, syncIds, syncFixed, verifyFixes, dump, tsv, RE_MX, RE_L, ADD, EXCL_PRICE, KIT_PREFIX, NOT_KIT };
})();
