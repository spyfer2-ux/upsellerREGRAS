// gerson/multiparts_mig.js - migracao SSS Shopee (1108318) -> MULTIPARTS (1223200), README secao 151 (mecanica da 76.2)
// Uso (aba PROPRIA do app.upseller.com): gerson_lib.js + await __G.boot(); MP35_CODE (desc35 + multiparts_desc); este arquivo.
//   await __MG.plan()   -> plano em IndexedDB MPMIG (novos + completar 10; fora: SKU pausado pelo dono, -XHB4, com variacao, sem titulo unico)
//   await __MG.load(); __MG.auto()   -> laco sozinho: pausa as fotos (window.__FOTO_PAUSE), bloco de teste de 2, depois blocos de 50
// Cada bloco: copy-shopee-product -> casa rascunho (so rascunho novo) -> save-batch-edit isPublish 1 (titulo unico, descricao padrao,
// fotos do padrao, logistica da MULTIPARTS) -> confere online NORMAL + titulo + SKU -> promocao 8%. FREIO: status estranho ou bloco ruim para tudo.
window.__MG_SRC = function () {
const G = window.__G, D = window.__MPD, X35 = window.__G35;
const M = window.__MG = window.__MG || {};
M.SRC = '1108318'; M.DST = '1223200'; M.KEY = 'MPMIG'; M.N = 50;
M.EXCL = /^(SSS710CV|SSS707CV|SSS044VW)(-|$)|-XHB4$/; // pausados pelo dono
M.PROMO = { id: '27379420801084024', promotionId: '530167953047567', name: 'OITO MULTI 2', startTime: 1795711838, endTime: 1796093940 };
const norm = s => String(s).toLowerCase().normalize('NFD').replace(/[̀-ͯ]/g, '');
const toks = s => new Set(norm(s).split(/[^a-z0-9]+/).filter(Boolean));
const delta = (a, b) => { let d = 0; a.forEach(x => { if (!b.has(x)) d++; }); b.forEach(x => { if (!a.has(x)) d++; }); return d; };
const now = () => new Date().toISOString(); const hh = () => now().slice(11, 19);
const sl = s => new Promise(r => setTimeout(r, s * 1000));
const idx = M.idx = async (state, shop) => { const all = []; for (let p = 1; p <= 30; p++) { const d = await G.post('/api/shopee/product/index?pageNum=' + p, { state, sortName: 3, sortValue: 0, pageNum: p, pageSize: 300, shopIds: String(shop) }); if (d.code !== 0) throw new Error('idx ' + state + ' code ' + d.code + ' ' + d.msg); const L = (d.data || {}).list || []; for (const it of L) if (String(it.shopId) === String(shop)) all.push(it); if (L.length < 300) break; } return all; };
const save = () => G.idb.set(M.KEY, M.S);
const BRN = new Set(['ford', 'fiat', 'volkswagen', 'chevrolet', 'citroen', 'mitsubishi', 'renault', 'honda', 'toyota', 'nissan', 'hyundai', 'jeep']);
M.plan = async () => {
  const src = (await idx('online', M.SRC)).filter(x => x.productStatus === 'NORMAL');
  const dst = await idx('online', M.DST); const dr = await idx('draft', M.DST); let other = [];
  for (const st of ['publishing', 'fail']) { try { other = other.concat(await idx(st, M.DST)); } catch (e) { } }
  const act = {}; dst.forEach(x => { if (x.productStatus === 'NORMAL') { const s = String(x.itemSku || ''); act[s] = (act[s] || 0) + 1; } });
  const taken = dst.concat(dr, other).map(x => toks(x.name));
  const bySku = {}; src.forEach(x => { const s = String(x.itemSku || ''); (bySku[s] = bySku[s] || []).push(x); });
  const items = [], semT = [], out = { origem: src.length, semSku: 0, excl: 0, variacao: 0, semTitulo: 0, ja10: 0, skusNovos: 0, skusCompletar: 0, novos: 0, completar: 0 };
  const skus = Object.keys(bySku).sort((a, b) => ((act[a] ? 1 : 0) - (act[b] ? 1 : 0)) || a.localeCompare(b));
  for (const sku of skus) {
    const L = bySku[sku]; if (!sku) { out.semSku += L.length; continue; } if (M.EXCL.test(sku)) { out.excl += L.length; continue; }
    const n = act[sku] || 0; let want = n === 0 ? L.length : Math.max(0, 10 - n); if (!want) { out.ja10 += L.length; continue; }
    let got = 0;
    for (const x of L) {
      if (want <= 0) break; if (x.hasVariation) { out.variacao++; continue; }
      const base = D.fixTitle(x.name, sku), bt = toks(base);
      const check = c => { const ct = toks(c); for (const t of taken) if (delta(ct, t) < 3) return false; return true; };
      let title = check(base) ? base : null;
      if (!title) { let cs = D.cands(base, sku); if (!D.kind(sku)) cs = cs.filter(c => { let ok = true; toks(c).forEach(w => { if (!bt.has(w) && !BRN.has(w) && !/^(19|20)\d\d$/.test(w)) ok = false; }); return ok; }); title = cs.find(check) || null; }
      if (!title) { out.semTitulo++; semT.push(sku + ' | ' + x.name); continue; }
      taken.push(toks(title)); items.push({ src: String(x.idStr || x.id), sku, title: x.name, newTitle: title, how: n === 0 ? 'novo' : 'completar', price: x.price }); want--; got++;
    }
    if (got) { if (n === 0) { out.skusNovos++; out.novos += got; } else { out.skusCompletar++; out.completar += got; } }
  }
  M.S = { items, pos: 0, blocks: [], pre: dr.map(x => String(x.idStr || x.id)), at: now(), out, semT, log: [] };
  await save(); return Object.assign({ itens: items.length, rascunhosAntes: dr.length }, out);
};
M.load = async () => {
  M.S = await G.idb.get(M.KEY); const g = (await idx('online', M.DST)).filter(x => x.productStatus === 'NORMAL').slice(0, 5).map(x => String(x.idStr));
  const fr = await G.pj('/api/shopee/product/batch-edit-index', g); M.LOG = (fr.data || []).map(p => p.logistics).find(Boolean);
  const pd = await G.post('/api/shopee/promotion/detail', { id: M.PROMO.id }); M.promoN = (pd.data || {}).productCount || ((pd.data || {}).shopeeProductList || []).length;
  return { itens: M.S.items.length, pos: M.S.pos, blocos: M.S.blocks.length, logi: !!M.LOG, promoN: M.promoN };
};
M.copy = async (blk) => { let c = 0; for (const it of blk) { if (it.draft || it.copyKey) continue; const j = await G.pj('/api/shopee/product/copy-shopee-product', { id: it.src, shopCountVoList: [{ count: '1', shopId: M.DST }] }); it.copyKey = j.data || ('code' + j.code); it.copyCode = j.code; c++; } await save(); return c; };
M.map = async (blk) => {
  const S = M.S, pre = new Set(S.pre), used = new Set(S.items.filter(x => x.draft).map(x => x.draft));
  const dr = (await idx('draft', M.DST)).map(x => ({ id: String(x.idStr || x.id), name: x.name, sku: String(x.itemSku || '') })).filter(x => !pre.has(x.id) && !used.has(x.id));
  for (const it of blk) { if (it.draft) continue; const c = dr.find(x => !used.has(x.id) && x.sku === it.sku && x.name === it.title); if (c) { it.draft = c.id; used.add(c.id); } }
  let miss = 0; for (const it of blk) { if (it.draft) continue; const t = toks(it.title); const c = dr.filter(x => !used.has(x.id) && x.sku === it.sku).map(x => ({ x, d: delta(t, toks(x.name)) })).sort((a, b) => a.d - b.d)[0]; if (c && c.d <= 3) { it.draft = c.x.id; it.draftName = c.x.name; used.add(c.x.id); } else miss++; }
  await save(); return { drafts: dr.length, miss };
};
M.build = async (blk) => {
  const ids = blk.map(x => x.draft), P = {}; for (let i = 0; i < ids.length; i += 100) { const fr = await G.pj('/api/shopee/product/batch-edit-index', ids.slice(i, i + 100)); (fr.data || []).forEach(p => P[String(p.idStr)] = p); }
  const fp = (await G.idb.get('FOTO_PLAN')) || [], fs = (await G.idb.get('FOTO_STATE')) || { done: {} }, FI = {}, srcs = new Set(blk.map(x => x.src)); fp.forEach(x => { if (srcs.has(String(x.id))) FI[String(x.id)] = x; });
  const items = [], bad = [];
  for (const it of blk) {
    const p = P[it.draft]; if (!p) { bad.push(it.src); continue; } p.logistics = M.LOG; if (p.categoryId === 100712) { p.categoryId = 102301; p.attributes = '[]'; it.catFix = 1; }
    const kind = D.kind(it.sku), why = X35.skip(it.sku); let desc;
    try { desc = (kind && !why) ? D.desc(p, it.sku, it.newTitle).text : D.clean(p.description || ''); } catch (e) { desc = D.clean(p.description || ''); it.descErr = String(e).slice(0, 80); }
    if (!desc || desc.length > 3000 || desc.length < 200) { desc = D.clean(p.description || ''); it.descErr = (it.descErr || '') + ' tamanho'; }
    const si = G.buildSaveItem(p, { newSku: it.sku, newTitle: it.newTitle, newDesc: desc }); const f = FI[it.src];
    if (f && f.img && !(fs.done || {})[it.src]) { si.mainImage = f.img; it.img = 'plano'; } else it.img = f ? 'origem pronta' : 'sem plano';
    it.nimg = String(si.mainImage || '').split('|').length; it.dlen = desc.length; it.price0 = p.price; items.push(si);
  }
  return { items, bad };
};
M.send = async (n) => {
  const S = M.S, all = S.items.slice(S.pos, S.pos + n), blk = all.filter(x => x.draft); const b = await M.build(blk); if (!b.items.length) return { code: -1, bad: b.bad };
  const blob = await G.zipFn(G.jsonStrFn(b.items), 'shopeeGlobalSave.txt'); const fd = new FormData(); fd.append('file', blob); fd.append('isPublish', 1); fd.append('anyway', false);
  const r = await fetch('/api/shopee/product/save-batch-edit', { method: 'POST', body: fd, credentials: 'include' }); const res = JSON.parse(G.fixIds(await r.text()));
  if (res.code !== 0) return { code: res.code, msg: String(res.msg).slice(0, 120) };
  S.blocks.push({ key: res.data, from: S.pos, n: all.length, ids: blk.map(x => x.draft), at: now(), bad: b.bad }); S.pos += all.length; S.log.push(hh() + ' bloco ' + S.blocks.length + ' enviado n' + b.items.length); await save(); return { code: 0, n: b.items.length, bad: b.bad };
};
M.check = async (b) => {
  const S = M.S, set = new Set(b.ids), st = { online: 0, publishing: 0, fail: 0, draft: 0 }, odd = [], byD = {}; S.items.forEach(x => { if (x.draft) byD[x.draft] = x; });
  for (const state of ['draft', 'publishing', 'fail', 'online']) for (const it of await idx(state, M.DST)) {
    const id = String(it.idStr || it.id); if (!set.has(id)) continue; st[state]++; const pi = byD[id]; if (!pi) continue;
    pi.state = state; pi.pst = it.productStatus || ''; pi.newItem = it.itemId ? String(it.itemId) : null; pi.okT = it.name === pi.newTitle; pi.okS = String(it.itemSku || '') === pi.sku; pi.pr = it.price;
    pi.done = (state === 'online' && it.productStatus === 'NORMAL') ? 1 : 0; pi.err = state === 'fail' ? String(it.errMsg || '').slice(0, 160) : '';
    if (state === 'online' && it.productStatus !== 'NORMAL') odd.push(it.productStatus + ' ' + id);
  }
  b.check = st; b.odd = odd; b.checkedAt = now(); await save(); return { st, odd };
};
M.repub = async (b) => { const S = M.S; const L = S.items.filter(x => b.ids.includes(x.draft) && x.state === 'fail' && /Image_API_error/i.test(x.err || '') && (x.rep || 0) < 2); if (!L.length) return 0; L.forEach(x => x.rep = (x.rep || 0) + 1); const r = await G.post('/api/shopee/product/batch-publish', { ids: L.map(x => x.draft).join(','), anyway: false }); await save(); return L.length + ' code ' + r.code; };
M.promo = async () => {
  const S = M.S, P = S.promoCur || M.PROMO; let n = 0;
  for (let g = 0; g < 6; g++) {
    const todo = S.items.filter(x => x.done && x.newItem && !x.promo).slice(0, 50); if (!todo.length) break;
    if ((M.promoN || 0) + todo.length > 1000) { S.promoCheia = now(); break; }
    const r = await G.post('/api/shopee/promotion/add', { shopId: M.DST, promotionName: P.name, startTime: P.startTime, endTime: P.endTime, enableAutoRenew: 0, promotionProductStr: JSON.stringify(todo.map(x => ({ itemId: Number(x.newItem), promotionPrice: (Math.round(Number(x.pr || x.price) * 92) / 100).toFixed(2), purchaseLimit: null, hasVariation: 0, editStatus: 'add', totalReservedStock: '' }))), deleteActivityProducts: '[]', promotionId: P.promotionId, id: P.id });
    if (r.code !== 0) { S.promoErr = String(r.code) + ' ' + String(r.msg).slice(0, 100); break; }
    todo.forEach(x => x.promo = P.name); M.promoN = (M.promoN || 0) + todo.length; n += todo.length; await save(); await sl(2);
  }
  return n;
};
M.release = () => { if (window.__FOTO_PAUSE === 'mig') window.__FOTO_PAUSE = null; };
M.stop = async (why) => { M.S.stop = hh() + ' ' + why; M.S.log.push(M.S.stop); await save(); M.release(); return { stop: M.S.stop }; };
M.step = async () => {
  const S = M.S; if (S.stop) { M.release(); return { stop: S.stop }; } if (S.fim) { M.release(); return { fim: S.fim }; }
  window.__FOTO_PAUSE = 'mig'; const fs = await G.idb.get('FOTO_STATE'); if (fs && fs.pending) return { wait: 'fotos', since: fs.pending.at };
  const b = S.blocks[S.blocks.length - 1];
  if (b && !b.closed) {
    const cp = await G.get('/api/check-process?uuid=' + encodeURIComponent(b.key)); const pm = cp.data && cp.data.processMsg;
    if (pm && pm.totalNum && pm.num < pm.totalNum) return { wait: 'tarefa ' + pm.num + '/' + pm.totalNum };
    const c = await M.check(b), age = (Date.now() - new Date(b.at).getTime()) / 1000;
    if (c.odd.length) return M.stop('FREIO status ' + c.odd.slice(0, 3).join(', '));
    if (c.st.draft >= Math.max(1, b.ids.length - 1) && age > 150 && !(pm && pm.totalNum)) { b.resend = (b.resend || 0) + 1; if (b.resend > 2) return M.stop('tarefa descartada 3x'); const keep = b.resend; S.pos = b.from; S.blocks.pop(); const s = await M.send(b.n); if (s.code === 0) S.blocks[S.blocks.length - 1].resend = keep; await save(); return { resend: s }; }
    if (c.st.publishing || (c.st.draft && age < 600)) return { wait: 'publicando', st: c.st };
    if (c.st.fail) { const rp = await M.repub(b); if (rp) return { repub: rp, st: c.st }; }
    const blk = S.items.filter(x => b.ids.includes(x.draft)); const bad = blk.filter(x => !x.done || !x.okT || !x.okS);
    b.closed = now(); b.ok = blk.length - bad.length; b.badN = bad.length; S.log.push(hh() + ' bloco ' + S.blocks.length + ' fim ok' + b.ok + ' ruim' + bad.length); await save();
    const pn = await M.promo();
    if (S.blocks.length === 1 && bad.length) return M.stop('bloco de teste com problema');
    if (bad.length > Math.max(3, blk.length * 0.2)) return M.stop('bloco com ' + bad.length + ' falhas');
    return { closed: S.blocks.length, ok: b.ok, bad: bad.length, promo: pn };
  }
  if (S.pos >= S.items.length) { await M.promo(); S.fim = now(); S.log.push(hh() + ' FIM'); await save(); M.release(); return { fim: S.fim }; }
  const n = S.blocks.length === 0 ? 2 : M.N, blk = S.items.slice(S.pos, S.pos + n);
  await M.copy(blk); await sl(8); let m = await M.map(blk); for (let t = 0; t < 5 && m.miss; t++) { await sl(8); m = await M.map(blk); }
  if (m.miss) { S.miss = (S.miss || 0) + 1; if (S.miss > 2) return M.stop('rascunho nao casou (' + m.miss + ')'); await save(); return { wait: 'rascunhos', m }; }
  const s = await M.send(n); if (s.code !== 0) { S.sendErr = (S.sendErr || 0) + 1; if (S.sendErr > 3) return M.stop('save-batch-edit ' + s.code + ' ' + (s.msg || '')); await save(); return { sendErr: s }; }
  return { sent: s, pos: S.pos, total: S.items.length };
};
M.auto = async () => {
  if (M.running) return 'ja rodando'; M.running = true; M.st = 'run';
  try { for (let i = 0; i < 4000; i++) { let r; try { r = await M.step(); } catch (e) { r = { err: String(e).slice(0, 160) }; if (/2001|validated/i.test(r.err)) { M.S.stop = hh() + ' sessao encerrada'; await save().catch(() => { }); M.release(); } M.errs = (M.errs || 0) + 1; }
      M.last = r; M.t = now(); if (r.stop || r.fim || M.halt) break; await sl(r.wait === 'fotos' ? 60 : 40); }
    M.st = M.halt ? 'parado' : 'fim'; } catch (e) { M.st = 'ERR ' + String(e).slice(0, 160); }
  M.running = false; return M.st;
};
return 'mg ok';
};
window.__MG_SRC();
