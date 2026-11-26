// MULTIPARTS (Shopee, shopId 1223200) - migracao de SKU para o padrao SSS/FUN (26/11/2026)
// Uso: aba propria do app.upseller.com com G3 (G3_DAYLIB) e __G (gerson/gerson_lib.js + await __G.boot()) carregados e G3.pullAll() feito.
// __MPX.prep() monta os carros/anos por SKU das lojas no padrao; __MPX.plan(BEI) devolve o plano; __MPX.exec(P) grava SKU + pausa.
window.__MPX = window.__MPX || {};
(() => {
const X = window.__MPX; const G = window.__G;
X.SHOP = '1223200';
X.PRE = { 'GR110HD': 'SSS110HD', 'GRX110HD': 'SSS110HD', 'GRDL01': 'SSS1305HY', 'GRDL08': 'DLT624' };
X.AL = { 'SSS068VW': 'SSS069VW', 'SSS917RN': 'SSS907RN', 'SSS449FD': 'SSS905RN', 'SSS165FT': 'SSS101FT', 'SSS157FT': 'SSS130FT', 'SSS132FT': 'SSS130FT', 'SSS723CV': 'SSS712CV', 'SSS414FD': 'SSS405FD', 'SSS744CV': 'SSS716CV', 'SSS757CV': 'SSS716CV' };
X.PAUSED = /^(SSS710CV|SSS707CV|SSS044VW)$/; // pausados por ordem do dono (secoes 129 e 146)
X.valid = b => G.isWH(b) || b === 'SSS408FD';
X.pre = s => { const u = String(s || '').trim().toUpperCase(); const m = u.match(/^([A-Z0-9]+?)((?:-[A-Z0-9]+)*)$/); if (m && X.PRE[m[1]]) return X.PRE[m[1]] + m[2]; return s; };
X.fixBase = sku => { if (!sku) return sku; const sp = G.splitSku(sku); let b = sp.base; if (X.AL[b] && !G.isWH(b) && G.isWH(X.AL[b])) b = X.AL[b]; return b + (sp.line ? '-' + sp.line + sp.enc : ''); };
// carros e anos de cada SKU nas lojas ja no padrao (ativos)
X.prep = () => { const MAIN = /^(SSL|ISA|SSP|JJ|_1204662|STK|ITK|GER)$/; const BM = {}, BY = {}; for (const r of G3.rows) { if (!MAIN.test(r.shop) || !/^(active|NORMAL)$/.test(r.st) || !r.sku) continue; const b = G.splitSku(r.sku.trim().toUpperCase()).base; const v = G.parseVehicles(r.t || ''); (BM[b] = BM[b] || new Set()); (BY[b] = BY[b] || new Set()); for (const x of v) { x.models.forEach(m => BM[b].add(m)); x.years.forEach(y => BY[b].add(y)); } } X.BM = BM; X.BY = BY; return Object.keys(BM).length; };
X.plan = (BEI) => {
  const out = [];
  for (const p0 of BEI) {
    const p = Object.assign({}, p0, { itemSku: X.pre(p0.itemSku) });
    const R = G.plan1(p); R.id = String(p0.idStr || p0.id); R.name = p0.name || ''; R.old = p0.itemSku || ''; R.hv = !!p0.hasVariation;
    if (R.newSku) R.newSku = X.fixBase(R.newSku);
    const pv = G.parseVehicles(R.name); const M = new Set(), Y = new Set(); pv.forEach(x => { x.models.forEach(m => M.add(m)); x.years.forEach(y => Y.add(y)); }); R.M = [...M]; R.Y = [...Y];
    const m0 = G.mapSku(X.pre(R.old)); const ob = m0.ok ? G.splitSku(X.fixBase(m0.sku)).base : null;
    if (R.newSku) { const s = G.splitSku(R.newSku);
      if (s.base === 'SSS036VW' && M.has('polo') && Y.size && [...Y].every(y => y >= 2007 && y <= 2012)) { R.newSku = 'SSS037VW' + (s.line ? '-' + s.line + 'HB4' : ''); R.why.push('Polo 2007-2011 = SSS037VW (secao 99)'); }
      else if (/^SSS60[0-26]MS$|^SSS623MS$/.test(s.base) && (M.has('l200') || M.has('triton'))) { const nb = (Y.size && [...Y].every(y => y >= 2011 && y <= 2013)) ? 'SSS603MS' : 'SSS905RN'; R.newSku = nb + (s.line ? '-' + s.line + 'H8' : ''); R.why.push('L200 kit -> ' + nb + ' (regra do dono 73.10/76.7)'); }
      else if (s.base === 'SSS405FD' && Y.size && [...Y].every(y => y >= 2007 && y <= 2010)) { R.newSku = 'SSS408FD' + (s.line ? '-' + s.line + s.enc : ''); R.why.push('Fiesta 2007-2010 = SSS408FD (secao 123)'); }
    }
    const fb = R.newSku ? G.splitSku(R.newSku).base : null; R.base = fb;
    R.vars = []; const why = [];
    if (R.hv) {
      for (const v of (p0.variations || [])) {
        const vo = v.variationSku || ''; const vr = G.mapSku(X.pre(vo)); let vn = null;
        if (!vr.ok) vn = (String(vo).trim() === '' && R.newSku) ? R.newSku : null;
        else { let s2 = X.fixBase(vr.sku); const sp = G.splitSku(s2); if (fb && ob && sp.base === ob && fb !== ob) { const enc = sp.line ? (G.ENC[fb] || (fb === 'SSS037VW' ? 'HB4' : 'H8')) : ''; s2 = fb + (sp.line ? '-' + sp.line + enc : ''); } vn = s2; }
        if (String(vo).trim() === String(R.old).trim() && R.newSku) vn = R.newSku;
        R.vars.push({ id: String(v.idStr || v.id), old: vo, new: vn, type: vr.type, name: (v.variationName || '').slice(0, 40) });
        if (!vn) { why.push('variacao sem SKU'); continue; }
        const sp = G.splitSku(vn); if (vr.type === 'UNI') why.push('unitario'); if (sp.line === 'X' && sp.enc === 'HB4') why.push('XHB4');
      }
      if (R.vars.some(v => !String(v.old || '').trim())) why.push('variacao sem SKU gravado');
      if (R.newSku && R.vars.some(v => v.new && v.new !== R.newSku)) why.push('variacao com SKU diferente do principal');
    } else {
      if (!R.newSku) why.push('sem SKU'); else { const sp = G.splitSku(R.newSku); if (R.type === 'UNI') why.push('unitario'); if (sp.line === 'X' && sp.enc === 'HB4') why.push('XHB4'); }
    }
    if (R.doubt && R.doubt.length) why.push('duvida: ' + R.doubt.join('; '));
    const T = G.norm(R.name); const fv = R.vars.find(v => v.new); const b0 = fb || (fv ? G.splitSku(fv.new).base : null);
    if (b0) { const isPar = /^par\b|\bpar de\b|^kit par\b/.test(T), isKitT = /^kit\b/.test(T) && !/^kit par\b/.test(T); const sk = /^SSS/.test(b0) ? 'KIT' : (/^FUN\d+-\d+/.test(b0) && !/^FUN240-4/.test(b0) ? 'PAR' : ''); if (isPar && sk === 'KIT') why.push('titulo Par com SKU de kit'); if (isKitT && sk === 'PAR') why.push('titulo Kit com SKU de par'); }
    const bases = R.hv ? [...new Set(R.vars.map(v => v.new).filter(Boolean).map(x => G.splitSku(x).base))] : (R.newSku ? [G.splitSku(R.newSku).base] : []);
    for (const b of bases) {
      if (!X.valid(b)) why.push('fora do armazem ' + b);
      const bm = X.BM[b], by = X.BY[b];
      if (!bm || !bm.size) { why.push('SKU ' + b + ' nao existe nas lojas principais'); continue; }
      if (M.size && ![...M].some(m => bm.has(m))) why.push('carro do titulo (' + [...M].join('/') + ') nao e do ' + b);
      if (Y.size && by.size) { const mn = Math.min(...by) - 1, mx = Math.max(...by) + 1; if ([...Y].some(y => y < mn || y > mx)) why.push('anos do titulo (' + Math.min(...Y) + '-' + Math.max(...Y) + ') fora dos anos do ' + b + ' (' + (mn + 1) + '-' + (mx - 1) + ')'); }
      if (X.PAUSED.test(b)) why.push('pausado dono ' + b);
    }
    if (!bases.length && !why.length) why.push('sem SKU');
    R.motivo = [...new Set(why)]; R.act = R.motivo.length === 0;
    out.push(R);
  }
  return out;
};
// grava SKU (principal e variacao, ancorado) e pausa o que nao ficou certo
X.exec = async (P, E) => {
  const sl = ms => new Promise(r => setTimeout(r, ms)); const esc = s => s.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
  E = E || {}; Object.assign(E, { st: 'run', main: 0, vari: 0, pause: 0, err: [] });
  const main = {}, vari = {};
  for (const r of P) { const o = String(r.old || ''); if (o.trim() && r.newSku && r.newSku !== o) { const k = o + '\u0001' + r.newSku; (main[k] = main[k] || []).push(r.id); }
    if (r.hv) for (const v of r.vars) { const vo = String(v.old || ''); if (vo.trim() && v.new && v.new !== vo) { const k = vo + '\u0001' + v.new; (vari[k] = vari[k] || []); if (!vari[k].includes(r.id)) vari[k].push(r.id); } } }
  for (const [k, ids] of Object.entries(main)) { const [o, n] = k.split('\u0001'); for (let i = 0; i < ids.length; i += 50) { const j = await G.pj('/api/shopee/product/batch-online-sku', { type: 1, isVariantSku: 0, prefixType: 0, suffixType: 0, idList: ids.slice(i, i + 50), oldReplaceStr: '^' + esc(o) + '$', newReplaceStr: n }); j.code === 0 ? E.main++ : E.err.push(['main', o, n, j.code, j.msg]); await sl(250); } }
  E.st = 'var'; const groups = Object.entries(vari); const done = new Set();
  while (done.size < groups.length) { const used = new Set(); const round = []; for (const [k, ids] of groups) { if (done.has(k)) continue; if (ids.some(id => used.has(id))) continue; ids.forEach(id => used.add(id)); round.push([k, ids]); done.add(k); }
    for (const [k, ids] of round) { const [o, n] = k.split('\u0001'); const j = await G.pj('/api/shopee/product/batch-online-sku', { type: 1, isVariantSku: 1, prefixType: 0, suffixType: 0, idList: ids, oldReplaceStr: '^' + esc(o) + '$', newReplaceStr: n }); j.code === 0 ? E.vari++ : E.err.push(['var', o, n, j.code, j.msg]); await sl(250); } await sl(8000); }
  E.st = 'pause'; const pause = P.filter(r => !r.act).map(r => r.id);
  for (let i = 0; i < pause.length; i += 20) { const j = await G.post('/api/shopee/product/updateUnlist', { flag: false, ids: pause.slice(i, i + 20).join(',') }); j.code === 0 ? E.pause += Math.min(20, pause.length - i) : E.err.push(['pause', i, j.code, j.msg]); await sl(400); }
  E.st = 'fim'; return E;
};
})();
'mpx ok';
