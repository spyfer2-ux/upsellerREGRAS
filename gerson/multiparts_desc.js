// gerson/multiparts_desc.js - MULTIPARTS (Shopee 1223200): titulos corrigidos + descricao no padrao SSS 35W (README secao 148)
// Uso (aba propria do app.upseller.com): gerson_lib.js + await __G.boot(); desc35.js; uniq_titles.js; este arquivo.
//   await __MPD.build(ativos /* [{id, sku}] */)  -> plano em IndexedDB MP35_PLAN
//   __MPD.cycleBg(N) a cada lote (ver __MPD.last); no fim __MPD.syncBg() e await __MPD.verify()
(() => {
const G = window.__G; const X35 = window.__G35; const D = window.__MPD = window.__MPD || {};
D.SHOP = '1223200';
D.NOPARAF = /^(SSS1305HY|SSS240FT-4)$/; // dono 25/11: parafusos so nos kits; nao vai em FUN, DRL/DLT, SSS240FT-4 nem SSS1305HY
const norm = s => String(s).toLowerCase().normalize('NFD').replace(/[̀-ͯ]/g, '');
const toks = s => new Set(norm(s).split(/[^a-z0-9]+/).filter(Boolean));
const delta = (a, b) => { let d = 0; a.forEach(x => { if (!b.has(x)) d++; }); b.forEach(x => { if (!a.has(x)) d++; }); return d; };
const contains = (big, small) => { let ok = true; small.forEach(w => { if (!big.has(w)) ok = false; }); return ok; };
D.kind = sku => { const b = G.splitSku(sku || '').base; return /^SSS\d/.test(b) || /^FUN240-4/.test(b) ? 'KIT' : (/^FUN\d+-\d+/.test(b) ? 'PAR' : ''); };
// titulo: so o que fere regra (Cibie, Farolete, H11, Original fora das 3 formas, Led/Xenon x SKU, Kit/Par)
D.fixTitle = (name, sku) => {
  const sp = G.splitSku(sku || ''); const kind = D.kind(sku);
  let t = ' ' + String(name).replace(/\s+/g, ' ').trim() + ' ';
  t = t.replace(/\scibi[eé]s?(?=\s)/gi, ' ');
  if (/\bfarolete?s?\b/i.test(t)) { const hasFarol = /\bfar(ol|[oó]is)\b/i.test(t.replace(/\bfarolete?s?\b/gi, '')); t = hasFarol ? t.replace(/\s(faroletes?)(?=\s)/gi, ' ') : t.replace(/\b(faroletes?)\b/i, 'Farol').replace(/\s(faroletes?)(?=\s)/gi, ' '); }
  t = t.replace(/\bH11\b/gi, 'H8').replace(/\s55\s*w(?=\s)/gi, ' ');
  const tic = /^(SSS069VW|SSS405FD)$/.test(sp.base);
  t = t.replace(/\s(bt|bot[aã]o)\s+(modelo\s+)?original(?=\s)/gi, tic ? ' Botão Tic Tac' : ' \u0001');
  t = t.replace(/\sencaixe\s+original(?=\s)/gi, ' \u0002').replace(/\s6000k\s+original(?=\s)/gi, ' \u0003');
  t = t.replace(/\s(similar\s+ao\s+|igual\s+ao\s+|tipo\s+|padr[aã]o\s+|modelo\s+)?origina(l|is)(?=\s)/gi, ' ');
  t = t.replace(/\u0001/g, 'Botão Modelo Original').replace(/\u0002/g, 'Encaixe Original').replace(/\u0003/g, '6000K Original');
  t = t.replace(/\s+/g, ' ').trim().replace(/(\s(e|com|\+|mais|de))+$/i, '').trim();
  const tl = G.titleLamp(t);
  if (sp.line === 'M' && tl !== 'M') t += ' Super Led';
  if (sp.line === 'X' && tl !== 'X') t += ' Xenon';
  if (kind === 'KIT') { let rest = t.replace(/^kit\s+/i, '').replace(/^par\s+(de\s+)?/i, ''); rest = rest.replace(/(^|\s)(kit|par)(?=\s|$)/gi, ' ').replace(/\s+/g, ' ').trim(); t = 'Kit ' + rest; }
  else if (kind === 'PAR') { if (!/^par\b/i.test(t)) t = 'Par ' + t.replace(/^kit\s+/i, ''); }
  if (t.length > 120) t = t.slice(0, 120).replace(/\s+\S*$/, '');
  return t;
};
// candidatos com palavras verdadeiras (marca, Milha/Neblina/Auxiliar, Completo so em kit, anos por extenso, faixa de anos)
const BR = [[/\b(focus|fiesta|ka|ecosport|ranger|courier|edge|fusion)\b/i, 'Ford'], [/\b(strada|palio|siena|uno|idea|punto|toro|argo|cronos|mobi|fiorino|doblo|weekend|linea|bravo|freemont|titano|ducato|stilo)\b/i, 'Fiat'], [/\b(polo|gol|voyage|saveiro|fox|golf|jetta|amarok|virtus|crossfox|spacefox|bora|passat|parati)\b/i, 'Volkswagen'], [/\b(celta|prisma|onix|cobalt|spin|s10|montana|agile|corsa|classic|cruze|tracker|captiva|sonic|joy|meriva|vectra)\b/i, 'Chevrolet'], [/\b(c4|c3|pallas|aircross|picasso|xsara)\b/i, 'Citroen'], [/\b(l200|triton|pajero|asx|outlander)\b/i, 'Mitsubishi'], [/\b(sandero|logan|duster|clio|kwid|fluence|master|oroch|captur)\b/i, 'Renault'], [/\b(civic|fit|city|hrv|hr-v)\b/i, 'Honda'], [/\b(corolla|hilux|etios|yaris)\b/i, 'Toyota'], [/\b(frontier|march|versa|sentra|kicks|livina)\b/i, 'Nissan'], [/\b(hb20|creta|tucson)\b/i, 'Hyundai'], [/\b(renegade|compass)\b/i, 'Jeep']];
D.cands = (base, sku) => {
  const kind = D.kind(sku); const has = w => toks(base).has(norm(w)); const adds = [];
  let br = null; for (const [re, b] of BR) if (re.test(base)) { br = [re, b]; break; }
  if (br && !has(br[1])) adds.push(t => { const m = t.match(br[0]); return m ? t.slice(0, m.index) + br[1] + ' ' + t.slice(m.index) : t; });
  for (const w of ['Milha', 'Neblina', 'Auxiliar']) if (!has(w)) adds.push(t => /\bFarol\b/.test(t) ? t.replace(/\bFarol\b/, 'Farol ' + w) : t.replace(/^(Kit|Par)\b/, '$1 Farol ' + w));
  if (kind === 'KIT' && !has('completo')) adds.push(t => /\bFarol\b/.test(t) ? t.replace(/\bFarol\b/, 'Farol Completo').replace(/Farol Completo (Milha|Neblina|Auxiliar)/, 'Farol $1 Completo') : t + ' Completo');
  const enc = G.splitSku(sku).enc || G.ENC[G.splitSku(sku).base] || ''; if (enc && !has(enc) && !has('encaixe')) adds.push(t => t + ' Encaixe ' + enc);
  if (kind === 'KIT' && !has('chicote')) adds.push(t => t + ' Com Chicote E Rele');
  if (kind === 'PAR' && !has('direito')) adds.push(t => t + ' Lado Direito E Esquerdo');
  const yrs = (() => { const p = base.split(' '); const y4 = x => /^(19|20)\d\d$/.test(x), y2 = x => /^\d\d$/.test(x); if (!(p.some(y4) || p.filter(y2).length >= 3)) return base; return p.map(x => (y2(x) ? '20' + x : x)).join(' '); })();
  const out = []; const bases = yrs !== base ? [base, yrs] : [base];
  for (const b of bases) { if (b !== base) out.push(b); for (const a of adds) out.push(a(b)); for (let i = 0; i < adds.length; i++) for (let j = i + 1; j < adds.length; j++) out.push(adds[j](adds[i](b))); for (let i = 0; i < adds.length; i++) for (let j = i + 1; j < adds.length; j++) for (let k = j + 1; k < adds.length; k++) out.push(adds[k](adds[j](adds[i](b)))); }
  return out.filter(c => c.length <= 120);
};
D.desc = (p, sku, title) => {
  const g = X35.gen({ name: title, description: p.description, itemSku: sku });
  let L = g.text.split('\n').filter(l => !/^- 01 Kit de Instala[cç][aã]o com Parafusos/.test(l));
  const base = G.splitSku(sku).base;
  if (/^SSS\d/.test(base) && !D.NOPARAF.test(base)) { const i = L.indexOf('Características dos Faróis:'); let j = i - 1; while (j > 0 && L[j] === '') j--; L.splice(j + 1, 0, '- 01 Kit de Parafusos e Porcas Rápidas'); }
  let text = L.join('\n');
  if (/^(SSS069VW|SSS405FD)$/.test(base)) text = text.replace(/Modelo (Touch|Colante|Original|Universal|Alternativo)/g, 'Modelo Tic Tac').replace(/modelo (touch|colante|original|universal|alternativo)/g, 'modelo tic tac'); // dono: SSS069VW e SSS405FD sao sempre botao tic tac
  return { text, g };
};
D.clean = (desc) => G.cleanDesc(desc).replace(/\b55\s*w(atts)?\b/gi, '35W').replace(/[ \t]*\bcibi[eé]s?\b/gi, '');
D.pullIdx = async () => { const rows = []; for (let p = 1; p <= 20; p++) { const d = await G.post('/api/shopee/product/index?pageNum=' + p, { state: 'online', sortName: 3, sortValue: 0, pageNum: p, pageSize: 300, shopIds: D.SHOP }); const L = (d.data || {}).list || []; L.forEach(x => { if (String(x.shopId) === D.SHOP) rows.push({ id: String(x.idStr || x.id), item: String(x.itemId), st: x.productStatus, sku: String(x.itemSku || ''), name: x.name, desc: x.description || '', pupd: String(x.platformUpdateTime || ''), hv: x.hasVariation }); }); if (L.length < 300) break; } return rows; };
// plano: A = [{id, sku}] (SKU final de cada anuncio; em anuncio com variacao, o SKU da variacao)
D.build = async (A, opt) => {
  opt = opt || {}; const minDelta = opt.minDelta || 3;
  const rows = await D.pullIdx(); const cur = new Map(rows.map(r => [r.id, r]));
  const taken = new Map(rows.map(r => [r.id, toks(r.name)]));
  const ids = A.map(a => a.id); const B = new Map();
  for (let k = 0; k < ids.length; k += 100) { const r = await G.pj('/api/shopee/product/batch-edit-index', ids.slice(k, k + 100)); (r.data || []).forEach(p => B.set(String(p.idStr || p.id), p)); }
  const plan = [], skip = []; let tch = 0, tuniq = 0, tkeep = 0;
  for (const a of A) {
    const p = B.get(a.id); if (!p) { skip.push({ id: a.id, why: 'nao lido' }); continue; }
    const kind = D.kind(a.sku); const why = X35.skip(a.sku);
    let title = p.name, how = '';
    if (kind) {
      const nt = D.fixTitle(p.name, a.sku);
      if (nt !== p.name) {
        tch++; const check = c => { const ct = toks(c); let dmin = 99, sub = false; for (const [id, t] of taken) { if (id === a.id) continue; const d = delta(ct, t); if (d < dmin) dmin = d; if (opt.noSuperset && contains(ct, t)) sub = true; } return dmin >= minDelta && !sub; };
        if (check(nt)) { title = nt; how = 'regra'; }
        else { const c = D.cands(nt, a.sku).find(check); if (c) { title = c; how = 'regra+unico'; tuniq++; } else { how = 'titulo mantido (sem candidato unico)'; tkeep++; } }
        if (title !== p.name) taken.set(a.id, toks(title));
      }
    }
    let desc, k;
    if (kind && !why) { const d = D.desc(p, a.sku, title); desc = d.text; k = (d.g.isKit ? 'KIT' : 'PAR') + '/' + (d.g.line || '-'); }
    else { desc = D.clean(p.description || ''); k = 'LIMPEZA' + (why ? ' (' + why + ')' : ''); }
    plan.push({ id: a.id, item: String(p.itemId), sku: a.sku, name: p.name, title: title !== p.name ? title : '', how, desc, k, old: String(p.description || '') });
  }
  await G.idb.set(opt.key || 'MP35_PLAN', plan); await G.idb.set((opt.key || 'MP35_PLAN') + '_SKIP', skip);
  const ks = {}; plan.forEach(x => ks[x.k] = (ks[x.k] || 0) + 1);
  return { plan: plan.length, skip: skip.length, titulosMudam: plan.filter(x => x.title).length, regra: tch, comPalavraExtra: tuniq, mantidos: tkeep, ks };
};
D.same = (p, P) => String(p.description || '').trim() === P.desc.trim() && (!P.title || p.name === P.title);
D.cycle = async (N, key) => {
  key = key || 'MP35_PLAN'; const SK = key.replace('PLAN', 'STATE');
  const plan = await G.idb.get(key); const byId = {}; plan.forEach(x => byId[x.id] = x);
  const S = (await G.idb.get(SK)) || { pending: null, done: {}, fail: {}, tries: {}, log: [] };
  const info = {}; const count = () => ({ done: Object.keys(S.done).length, fail: Object.keys(S.fail).length, total: plan.length });
  const readOk = async (ids) => { let ok = 0; const bad = []; for (let k = 0; k < ids.length; k += 100) { const r = await G.pj('/api/shopee/product/batch-edit-index', ids.slice(k, k + 100)); for (const p of (r.data || [])) { const P = byId[String(p.idStr)]; if (!P) continue; if (D.same(p, P)) ok++; else bad.push(P.id); } } return { ok, bad }; };
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
    for (const p of (r.data || [])) { const P = byId[String(p.idStr)]; if (!P) continue; if (D.same(p, P)) { S.done[P.id] = 1; continue; } items.push(G.buildSaveItem(p, { newTitle: P.title || p.name, newDesc: P.desc, newSku: '' })); ids.push(P.id); S.tries[P.id] = (S.tries[P.id] || 0) + 1; }
  }
  if (items.length) { const res = await G.saveBatch(items); if (res.code === 0) { S.pending = { key: res.data, ids, at: new Date().toISOString() }; S.log.push(new Date().toISOString().slice(11, 19) + ' enviado n' + ids.length); } else { info.saveErr = String(res.msg).slice(0, 150); ids.forEach(id => { S.tries[id]--; }); } }
  await G.idb.set(SK, S);
  return Object.assign(info, { submitted: S.pending ? ids.length : 0 }, count());
};
D.cycleBg = (N, key) => { D.last = { state: 'run', at: new Date().toISOString() }; D.cycle(N, key).then(r => { D.last = Object.assign({ state: 'ok' }, r); }).catch(e => { D.last = { state: 'erro', err: String(e).slice(0, 200) }; }); return 'started'; };
D.syncBg = (key) => { D.sync = { state: 'run', sent: 0 }; (async () => { const plan = await G.idb.get(key || 'MP35_PLAN'); D.syncFrom = new Date().toISOString(); for (let k = 0; k < plan.length; k += 100) { await G.post('/api/shopee/product/sync', { ids: plan.slice(k, k + 100).map(x => x.id).join(',') }); D.sync.sent = Math.min(plan.length, k + 100); await G.sleepF(6); } D.sync.state = 'fim'; })().catch(e => { D.sync = { state: 'erro', err: String(e).slice(0, 200) }; }); return 'started'; };
// conferencia final (depois do sync terminar): titulo e descricao da loja x plano
D.verify = async (key) => { const plan = await G.idb.get(key || 'MP35_PLAN'); const byId = {}; plan.forEach(x => byId[x.id] = x); const rows = await D.pullIdx(); const bad = []; let ok = 0; const seen = {}; for (const r of rows) { const P = byId[r.id]; if (!P) continue; seen[r.id] = 1; if (String(r.desc).trim() === P.desc.trim() && (!P.title || r.name === P.title)) ok++; else bad.push({ id: r.id, sku: r.sku, st: r.st, pupd: r.pupd, tit: !!P.title && r.name !== P.title, desc: String(r.desc).trim() !== P.desc.trim() }); } D.bad = bad; return { plan: plan.length, ok, bad: bad.length, sumiram: plan.filter(x => !seen[x.id]).length, badTitulo: bad.filter(b => b.tit).length }; };
})();
'mpd ok';
