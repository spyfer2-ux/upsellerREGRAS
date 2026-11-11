// gerson/desc35.js - descricao de farol no PADRAO SSS com reforco dos 35W e aviso das Super Brancas (README secao 75)
// Uso (aba propria do app.upseller.com/pt/products/shopee/active): eval do gerson/gerson_lib.js, setar G.zipFn/G.jsonStrFn pelo __vue__,
// eval deste arquivo; depois await __G35.buildPlan() (1 vez) e __G35.cycleBg(300) a cada lote (ver __G35.last / await __G35.status()).
// Estado no IndexedDB claude_work/kv: GER35_PLAN (id, st, sku, name, desc[, title]), GER35_STATE (pending, done, fail, tries, log), GER35_SKIP.
(() => {
const G = window.__G;
const X = window.__G35 = window.__G35 || {};
X.OPT = { lamp35: true }; // dono (11/11/2026): as lampadas que acompanham (halogena, Super LED, Xenon e reatores) sao de 35W
X.SHOP = '1188127';
X.joinE = a => a.length <= 1 ? a.join('') : a.slice(0, -1).join(', ') + ' e ' + a[a.length - 1];
X.vehLabel = v => { const gs = []; for (const m of v.models) { const b = G.MODELS[m]; let g = gs.find(x => x.b === b); if (!g) { g = { b, ms: [] }; gs.push(g); } g.ms.push(G.pretty(m)); } return gs.map(g => g.b + ' ' + g.ms.join(' / ')).join(' / ') + (v.gen ? ' ' + v.gen : ''); };
X.isNew = d => /N[aã]o utilize l[aâ]mpadas Super Brancas: elas aquecem acima do limite/.test(d || '');
X.skip = (sku) => { const sp = G.splitSku(G.mapSku(sku).sku || sku || ''); if (/^FUN240-4/.test(sp.base)) return 'kit de 4 farois'; if (sp.line === 'U') return 'linha ultraled'; if (/DLT|MDM/.test(sp.base)) return 'combo com DRL ou moldura'; if (!/^(SSS|FUN)\d/.test(sp.base)) return 'SKU fora do padrao'; return ''; };
X.gen = (p) => {
  const D = G.norm(p.description), T = G.norm(p.name);
  const c = G.contents(p.description);
  const sp = G.splitSku(G.mapSku(p.itemSku).sku || p.itemSku || '');
  const isKit = /^SSS/.test(sp.base);
  let enc = sp.enc || ''; if (!enc) { const f = G.feat(p); enc = f.encD || f.encT || G.ENC[sp.base] || ''; }
  enc = enc.replace(/^H11$/, 'H8');
  const W = X.OPT.lamp35 ? ' de 35W' : '';
  const veh = G.parseVehicles(p.name);
  const vehNames = veh.map(v => X.vehLabel(v)).join(' e ');
  const yrsOf = v => !v.years.length ? '' : (v.years.length <= 12 ? v.years.join(' ') : v.years[0] + ' a ' + v.years[v.years.length - 1]);
  const vehFull = veh.map(v => X.vehLabel(v) + (v.years.length ? ' ' + yrsOf(v) : '')).join(' e ');
  const ml = D.match(/(material|tipo)\s*(da\s*)?(lente|das lentes)\s*[:\-]?\s*(vidro|policarbonato|acrilico)/) || D.match(/lente\s*(lisa\s*)?(de|em)\s*(vidro|policarbonato|acrilico)/);
  const mlv = ml ? ml[ml.length - 1] : '';
  const vidro = /vidro/.test(T) || /-V$/.test(sp.base) || mlv === 'vidro';
  const poli = !vidro && (mlv === 'policarbonato' || mlv === 'acrilico' || /policarbonato|acrilico/.test(T));
  const lens = vidro ? 'vidro' : poli ? 'policarbonato' : '';
  const moldura = (c.moldura || /moldura/.test(T)) && !/sem moldura/.test(T);
  const suporte = (/\bcom suportes?\b/.test(T) || /\d\s*suportes?\b/.test(D)) && !/\bsem suportes?\b/.test(T);
  const bt = isKit ? G.BOTAO(D + ' ' + T) : '';
  const line = sp.line === 'M' ? 'M' : sp.line === 'X' ? 'X' : ((sp.line === 'L' || c.lamp === 'L') ? 'L' : '');
  const E = enc ? ' ' + enc : '';
  const L = [];
  if (vehFull) {
    if (isKit) { const parts = []; if (line === 'M') parts.push('Super LED' + E); if (line === 'X') parts.push('Xenon' + E); if (moldura) parts.push('Molduras'); parts.push('Botão' + (bt ? ' ' + bt : '')); if (line === 'L') parts.push('Lâmpadas Halógenas' + E); L.push('Kit Farol de Milha ' + vehFull + ' Completo com ' + X.joinE(parts)); }
    else L.push('Par de Faróis de Milha ' + vehFull + (line === 'M' ? ' com Lâmpadas Super LED' + E : line === 'X' ? ' com Kit Xenon' + E : line === 'L' ? ' com Lâmpadas Halógenas' + E : '') + (moldura ? (line ? ' e Molduras' : ' com Molduras') : ''));
  } else L.push(p.name);
  L.push('');
  const para = vehNames ? ' desenvolvido para ' + vehNames : '';
  if (isKit) L.push('Kit completo de faróis auxiliares de milha' + para + ', ideal para reposição ou instalação no veículo.');
  else L.push('Par de faróis auxiliares de milha, lado direito e esquerdo' + (para ? ',' + para : '') + ', ideal para reposição.');
  L.push('');
  const ac = [];
  if (line === 'M') ac.push('lâmpadas Super LED' + E + W); if (line === 'X') ac.push('lâmpadas Xenon' + E + ' com reatores' + W); if (line === 'L') ac.push('lâmpadas halógenas' + E + W);
  if (moldura) ac.push('molduras'); if (suporte) ac.push('suportes');
  if (isKit) { ac.push('chicote elétrico'); ac.push('relê'); ac.push('botão de acionamento' + (bt ? ' ' + bt.toLowerCase() : '')); }
  L.push('Possui faróis com lente lisa' + (lens ? ' em ' + lens : '') + (enc ? ' e encaixe para lâmpadas ' + enc : '') + ', com potência máxima suportada de 35W.' + (ac.length ? ' Acompanha ' + X.joinE(ac) + ', proporcionando iluminação auxiliar em condições de baixa visibilidade, chuva ou neblina.' : ''));
  let comp = [];
  for (const v of veh) for (const m of v.models) { const nm = G.MODELS[m] + ' ' + G.pretty(m) + (v.gen ? ' ' + v.gen : ''); if (v.years.length) v.years.forEach(y => comp.push(nm + ' ' + y)); else comp.push(nm); }
  if (comp.length > 24) { comp = []; for (const v of veh) for (const m of v.models) comp.push(G.MODELS[m] + ' ' + G.pretty(m) + (v.gen ? ' ' + v.gen : '') + (v.years.length ? ' ' + G.yrsLabel(v.years) : '')); }
  if (comp.length) { L.push(''); L.push('Compatível com:'); L.push(''); comp.forEach(x => L.push('- ' + x)); }
  L.push(''); L.push('Conteúdo da Embalagem:'); L.push('');
  L.push(isKit ? '- 02 Faróis de Milha' : '- 02 Faróis de Milha (lado direito e esquerdo)');
  if (moldura) L.push('- 02 Molduras para Faróis de Milha');
  if (suporte) L.push('- 02 Suportes para Faróis de Milha');
  if (isKit) { L.push('- 01 Chicote Elétrico'); L.push('- 01 Relê'); L.push('- 01 Botão de Acionamento' + (bt ? ' ' + bt : '')); }
  if (line === 'M') L.push('- 01 Par de Lâmpadas Super LED 6000K' + E + W);
  if (line === 'X') { L.push('- 01 Par de Lâmpadas Xenon' + E + W); L.push('- 01 Par de Reatores Xenon' + W); }
  if (line === 'L') L.push('- 01 Par de Lâmpadas Halógenas' + E + W + ' (Brinde sem garantia comercial adicional)');
  if (c.t10) L.push('- 01 Par de Pingo LED T10 (Brinde sem garantia comercial adicional)');
  if (c.paraf) L.push('- 01 Kit de Instalação com Parafusos e Porcas Rápidas');
  L.push(''); L.push('Características dos Faróis:'); L.push('');
  L.push('- Produto Novo'); L.push('- Tipo: Farol Auxiliar de Milha / Neblina');
  if (enc) L.push('- Encaixe da Lâmpada: ' + enc);
  L.push('- Potência Máxima Suportada: 35W (lâmpada halógena, LED ou Xenon)');
  if (lens) L.push('- Material da Lente: ' + (lens === 'vidro' ? 'Vidro' : 'Policarbonato'));
  L.push('- Lente Lisa');
  if (line === 'M') L.push('- Lâmpadas Super LED 6000K' + W + ' (luz branca)');
  if (line === 'X') L.push('- Kit Xenon' + W + ' com 2 reatores');
  L.push(''); L.push('Importante:'); L.push('');
  L.push('- Produto novo');
  L.push(isKit ? '- Valor referente ao kit completo' : '- Valor referente ao par de faróis');
  if (!isKit) L.push('- Não acompanha chicote elétrico, relê e botão de acionamento');
  L.push('- Imagens meramente ilustrativas');
  L.push('- Verifique o modelo do para-choque e o ano do veículo antes da compra');
  L.push('- O farol suporta no máximo 35W, seja com lâmpada halógena, LED ou Xenon');
  L.push('- Utilize somente lâmpadas de até 35W: potência maior aquece demais e danifica o farol');
  L.push('- Não utilize lâmpadas Super Brancas: elas aquecem acima do limite e podem derreter o farol');
  if (line === 'M' && X.OPT.lamp35) L.push('- As lâmpadas Super LED que acompanham o produto são de 35W e não são lâmpadas Super Brancas');
  if (line === 'X' && X.OPT.lamp35) L.push('- As lâmpadas Xenon e os reatores que acompanham o produto são de 35W');
  if (line === 'X') L.push('- A utilização de lâmpadas Xenon deve respeitar as normas de trânsito aplicáveis');
  if (line === 'L' && c.t10) L.push('- Lâmpadas halógenas e Pingos LED T10 são brindes, sem garantia comercial adicional');
  else if (line === 'L') L.push('- Lâmpadas halógenas são brindes, sem garantia comercial adicional');
  else if (c.t10) L.push('- Pingos LED T10 são brindes, sem garantia comercial adicional');
  L.push('- Danos causados por lâmpadas acima de 35W ou Super Brancas não são cobertos pela garantia');
  L.push('- Garantia do vendedor: 3 meses contra defeitos de fabricação');
  L.push('- Recomendamos que a instalação seja realizada por profissional especializado');
  L.push('- Danos causados por instalação incorreta ou mau uso não são cobertos pela garantia comercial');
  return { text: L.join('\n'), isKit, line, enc, lens, moldura, suporte, bt, nveh: veh.length, t10: c.t10, paraf: c.paraf, chicote: c.chicote };
};
X.pull = async () => { const rows = []; for (let p = 1; p <= 15; p++) { const d = await G.post('/api/shopee/product/index?pageNum=' + p, { state: 'online', sortName: 3, sortValue: 0, pageNum: p, pageSize: 300, shopIds: X.SHOP }); const L = (d.data || {}).list || []; L.forEach(x => rows.push({ id: String(x.idStr || x.id), item: String(x.itemId), st: x.productStatus, sku: String(x.itemSku || ''), name: x.name, desc: x.description || '', pct: String(x.platformCreateTime || ''), pupd: String(x.platformUpdateTime || ''), upd: String(x.updateTime || '') })); if (L.length < 300) break; } return rows; };
// plano: todo anuncio da loja que esta no modelo antigo (G.isTemplate) e nao e excecao
X.buildPlan = async () => {
  const rows = await X.pull(); const plan = [], skipped = [];
  for (const r of rows) { if (!G.isTemplate(r.desc)) continue; const why = X.skip(r.sku); if (why) { skipped.push({ id: r.id, sku: r.sku, name: r.name, why, st: r.st }); continue; } const g = X.gen({ name: r.name, description: r.desc, itemSku: r.sku }); plan.push({ id: r.id, item: r.item, st: r.st, sku: r.sku, name: r.name, desc: g.text, k: (g.isKit ? 'KIT' : 'PAR') + '/' + (g.line || '-') }); }
  plan.sort((a, b) => (b.st === 'NORMAL') - (a.st === 'NORMAL'));
  await G.idb.set('GER35_PLAN', plan); await G.idb.set('GER35_SKIP', skipped);
  return { rows: rows.length, plan: plan.length, active: plan.filter(x => x.st === 'NORMAL').length, skipped: skipped.length };
};
X.same = (p, P) => String(p.description || '').trim() === P.desc.trim() && (!P.title || p.name === P.title);
// um ciclo: confere o lote pendente (pelos dados) e manda o proximo. O servidor roda UMA tarefa de Editar em Massa por vez.
X.cycle = async (N) => {
  const plan = await G.idb.get('GER35_PLAN'); const byId = {}; plan.forEach(x => byId[x.id] = x);
  const S = (await G.idb.get('GER35_STATE')) || { pending: null, done: {}, fail: {}, tries: {}, log: [] };
  const info = {}; const count = () => ({ done: Object.keys(S.done).length, fail: Object.keys(S.fail).length, total: plan.length });
  const readOk = async (ids) => { let ok = 0; const bad = []; for (let k = 0; k < ids.length; k += 100) { const r = await G.pj('/api/shopee/product/batch-edit-index', ids.slice(k, k + 100)); for (const p of (r.data || [])) { const P = byId[String(p.idStr)]; if (!P) continue; if (X.same(p, P)) ok++; else bad.push(P.id); } } return { ok, bad }; };
  if (S.pending) {
    const cp = await G.get('/api/check-process?uuid=' + encodeURIComponent(S.pending.key)); const pm = cp.data && cp.data.processMsg;
    if (pm && pm.totalNum === S.pending.ids.length && pm.num < pm.totalNum) return Object.assign({ running: pm.num + '/' + pm.totalNum, since: S.pending.at }, count());
    let fl = []; if (pm && pm.totalNum === S.pending.ids.length) fl = ((pm.data || {}).failList || []).concat((pm.data || {}).duplicateList || []);
    let a = await readOk(S.pending.ids);
    if (a.bad.length && !(pm && pm.totalNum)) { await G.sleepF(12); const b = await readOk(S.pending.ids); if (b.ok > a.ok) return Object.assign({ running: 'sem status, ' + b.ok + '/' + S.pending.ids.length, since: S.pending.at }, count()); a = b; }
    const badSet = new Set(a.bad); S.pending.ids.forEach(id => { if (!badSet.has(id)) S.done[id] = 1; });
    fl.forEach(x => { const id = String(x.id); S.fail[id] = String(x.msg || '') + ' ' + JSON.stringify(x.data || '').slice(0, 100); delete S.done[id]; });
    info.last = { n: S.pending.ids.length, ok: a.ok, naoGravou: a.bad.length, fail: fl.length };
    S.log.push(new Date().toISOString().slice(11, 19) + ' fim lote n' + S.pending.ids.length + ' ok' + a.ok + ' nao' + a.bad.length + ' fail' + fl.length);
    S.pending = null;
  }
  const queue = plan.filter(x => !S.done[x.id] && !S.fail[x.id] && (S.tries[x.id] || 0) < 3).slice(0, N);
  const items = [], ids = [];
  for (let k = 0; k < queue.length; k += 100) {
    const r = await G.pj('/api/shopee/product/batch-edit-index', queue.slice(k, k + 100).map(x => x.id));
    for (const p of (r.data || [])) { const P = byId[String(p.idStr)]; if (!P) continue; if (X.same(p, P)) { S.done[P.id] = 1; continue; } if (!P.force && !G.isTemplate(p.description)) { S.fail[P.id] = 'descricao mudou por fora'; continue; } items.push(G.buildSaveItem(p, { newTitle: P.title || p.name, newDesc: P.desc, newSku: '' })); ids.push(P.id); S.tries[P.id] = (S.tries[P.id] || 0) + 1; }
  }
  if (items.length) { const res = await G.saveBatch(items); if (res.code === 0) { S.pending = { key: res.data, ids, at: new Date().toISOString() }; S.log.push(new Date().toISOString().slice(11, 19) + ' enviado n' + ids.length); } else { info.saveErr = String(res.msg).slice(0, 150); ids.forEach(id => { S.tries[id]--; }); } }
  await G.idb.set('GER35_STATE', S);
  return Object.assign(info, { submitted: S.pending ? ids.length : 0 }, count());
};
X.cycleBg = (N) => { X.last = { state: 'run', at: new Date().toISOString() }; X.cycle(N).then(r => { X.last = Object.assign({ state: 'ok' }, r); }).catch(e => { X.last = { state: 'erro', err: String(e).slice(0, 200) }; }); return 'started'; };
X.status = async () => { const plan = await G.idb.get('GER35_PLAN') || []; const S = (await G.idb.get('GER35_STATE')) || { done: {}, fail: {}, log: [] }; let run = null; if (S.pending) { const cp = await G.get('/api/check-process?uuid=' + encodeURIComponent(S.pending.key)); const pm = (cp.data && cp.data.processMsg) || {}; run = { num: pm.num, total: pm.totalNum, n: S.pending.ids.length, since: S.pending.at }; } return { total: plan.length, done: Object.keys(S.done).length, fail: Object.keys(S.fail).length, run, log: (S.log || []).slice(-4) }; };
// conferencia final: sincroniza com a Shopee (lotes de 100) e compara a descricao da loja com o plano
X.syncBg = () => { X.sync = { state: 'run', sent: 0 }; (async () => { const plan = await G.idb.get('GER35_PLAN'); for (let k = 0; k < plan.length; k += 100) { await G.post('/api/shopee/product/sync', { ids: plan.slice(k, k + 100).map(x => x.id).join(',') }); X.sync.sent = Math.min(plan.length, k + 100); await G.sleepF(6); } X.sync.state = 'fim'; })().catch(e => { X.sync = { state: 'erro', err: String(e).slice(0, 200) }; }); return 'started'; };
X.verify = async () => { const plan = await G.idb.get('GER35_PLAN'); const byId = {}; plan.forEach(x => byId[x.id] = x); const rows = await X.pull(); const bad = []; let ok = 0, miss = 0; const seen = {}; for (const r of rows) { const P = byId[r.id]; if (!P) continue; seen[r.id] = 1; if (String(r.desc).trim() === P.desc.trim() && (!P.title || r.name === P.title)) ok++; else bad.push({ id: r.id, item: r.item, sku: r.sku, st: r.st, upd: r.upd, novo: X.isNew(r.desc) }); } plan.forEach(x => { if (!seen[x.id]) miss++; }); X.bad = bad; return { plan: plan.length, ok, bad: bad.length, sumiram: miss, synced: rows.filter(r => byId[r.id] && r.upd >= (X.syncFrom || '')).length }; };
})();
'desc35 ok';
