// GERSON (Shopee, shopId 1188127) - revisao total para o padrao da empresa nova (10/11/2026)
// Uso na aba do app.upseller.com: carregar este arquivo e dar eval; depois await __G.boot()
window.__G = window.__G || {};
(() => {
const G = window.__G;
G.form = o => Object.entries(o).map(([k, v]) => encodeURIComponent(k) + '=' + encodeURIComponent(v)).join('&');
G.fixIds = t => t.replace(/"(id|idStr|puid|shopId|variantId|productId|variationId|itemId|fmId|upId|parentId|modelId)":\s*(\d{15,})/g, '"$1":"$2"');
G.post = async (url, body) => { const r = await fetch(url, { method: 'POST', headers: { 'Content-Type': 'application/x-www-form-urlencoded' }, body: G.form(body), credentials: 'include' }); return JSON.parse(G.fixIds(await r.text())); };
G.pj = async (url, body) => { const r = await fetch(url, { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify(body), credentials: 'include' }); return JSON.parse(G.fixIds(await r.text())); };
G.get = async (url) => { const r = await fetch(url, { credentials: 'include' }); return JSON.parse(G.fixIds(await r.text())); };
let dbp; const open = () => dbp || (dbp = new Promise((res, rej) => { const r = indexedDB.open('claude_work', 1); r.onupgradeneeded = () => r.result.createObjectStore('kv'); r.onsuccess = () => res(r.result); r.onerror = () => rej(r.error); }));
G.idb = {
  set: async (k, v) => { const db = await open(); return new Promise((res, rej) => { const tx = db.transaction('kv', 'readwrite'); tx.objectStore('kv').put(v, k); tx.oncomplete = () => res(true); tx.onerror = () => rej(tx.error); }); },
  get: async k => { const db = await open(); return new Promise((res, rej) => { const rq = db.transaction('kv').objectStore('kv').get(k); rq.onsuccess = () => res(rq.result); rq.onerror = () => rej(rq.error); }); }
};
G.show = (txt) => { let a = document.getElementById('__gart'); if (!a) { a = document.createElement('article'); a.id = '__gart'; a.style.cssText = 'position:fixed;top:0;left:0;z-index:99999;background:#fff;max-height:30px;max-width:120px;overflow:hidden;font-size:2px;opacity:0.02'; a.appendChild(document.createElement('pre')); document.body.appendChild(a); } a.firstChild.textContent = txt; return txt.length; };
G.norm = s => String(s || '').normalize('NFD').replace(/[̀-ͯ]/g, '').toLowerCase();

G.pullShopee = async (shopIds) => { const all = []; for (let p = 1; p <= 30; p++) { const body = { state: 'online', sortName: 3, sortValue: 0, pageNum: p, pageSize: 300 }; if (shopIds) body.shopIds = shopIds; const d = await G.post('/api/shopee/product/index?pageNum=' + p, body); if (d.code !== 0) throw new Error('sp p' + p); for (const it of d.data.list) all.push({ id: String(it.idStr || it.id), item: String(it.itemId), shop: it.shopName, name: it.name, sku: it.itemSku, st: it.productStatus, hv: it.hasVariation, desc: it.description, price: it.price, stock: it.stock }); if (d.data.list.length < 300) break; } return all; };

// ---------- SKU ----------
G.mapSku = (raw) => {
  let s = String(raw || '').trim().toUpperCase().replace(/\s+/g, '');
  const notes = [];
  if (!s) return { sku: '', ok: false, why: 'vazio' };
  if (/^MLBU?\d|^MLKIT|^\d+$|^\d+-\d+(-KIT)?$/.test(s)) return { sku: '', ok: false, why: 'MLB/numero' };
  s = s.replace(/-X8HB4$/, '-XHB4').replace(/-XBH4$/, '-XHB4').replace(/-TIC(?=-|$)/, '');
  s = s.replace(/-MH11$/, () => { notes.push('MH11->MH8'); return '-MH8'; }).replace(/-XH11$/, () => { notes.push('XH11->XH8'); return '-XH8'; }).replace(/-LH11$/, () => { notes.push('LH11->LH8'); return '-LH8'; });
  let m, out = null, type = null;
  if ((m = s.match(/^(GRX|GRW|STS|FGS0?|ATP)(\d{2,4})([A-Z]{2})((?:-[A-Z0-9]+)*)$/))) { out = 'SSS' + m[2] + m[3] + m[4]; type = 'KIT'; if (m[1] !== 'GRX') notes.push(m[1] + '->SSS'); }
  else if ((m = s.match(/^(GRX|GR|FUN|ATP)(\d{2,4})-(\d{1,4})((?:-[A-Z0-9]+)*)$/))) { out = 'FUN' + m[2] + '-' + m[3] + m[4]; type = 'PAR'; if (m[1] === 'GRX' || m[1] === 'ATP') notes.push(m[1] + ' com numeracao de par -> FUN'); }
  else if ((m = s.match(/^(GR|FUN)(\d{2,4})((?:-[A-Z0-9]+)*)$/))) { out = 'FUN' + m[2] + m[3]; type = 'UNI'; notes.push('unitario'); }
  else if ((m = s.match(/^(MDM|DLT|SFM)(.*)$/))) { out = s; type = 'ACC'; }
  else if (/^(SSS|FUN)/.test(s)) { out = s; type = /^SSS/.test(s) ? 'KIT' : (/-\d/.test(s) ? 'PAR' : 'UNI'); }
  else return { sku: '', ok: false, why: 'fora do padrao' };
  if (type === 'KIT' && /-L(H(B)?\d+)$/.test(out)) { out = out.replace(/-L(H(B)?\d+)$/, ''); notes.push('kit com halogena sem -L'); }
  return { sku: out, ok: true, type, notes };
};
G.ENC = { 'FUN102-103':'HB4','FUN104-105':'HB4','FUN975-976':'HB4','SSS014VW':'HB4','SSS414FD':'HB4','SSS712CV':'H27','SSS240FT-4':'H1','SSS702CV':'HB4','SSS710CV':'HB4','SSS405FD':'HB4','SSS707CV':'HB4','SSS013VW':'H3','SSS743CV':'H3','SSS726CV':'H3','SSS091VW':'H3','SSS057VW':'H3','SSS044VW':'H3','SSS218HD':'H3','SSS126FT':'H1','SSS101FT':'H1','SSS716CV':'H27','SSS002VW':'H8','SSS905RN':'H8','SSS905RN-DLT622':'H8','SSS1306HY':'H8','SSS313NS':'H8','SSS303NS':'H8','SSS1105CT':'H8','SSS130FT':'H8','FUN100-101':'H8','SSS240FT':'H1','FUN240-2':'H1','FUN240-4':'H1','FUN205-206':'H3','SSS507TA':'HB4','FUN152-153':'HB4','FUN117-118':'H8','SSS189-190':'H8','SSS1103CT':'H8','SSS907RN':'H8','SSS905RN-V':'H8','FUN249-250':'H8','SSS069VW':'H8','SSS004VW':'H8','FUN955-956':'H27','SSS036VW':'H3' };
G.splitSku = (s) => { const m = String(s).match(/^(.*?)-(M|X|L|U)(H|HB)(\d+)$/); return m ? { base: m[1], line: m[2], enc: m[3] + m[4] } : { base: String(s), line: '', enc: '' }; };
G.isWH = (base) => { const b = String(base).replace(/^MDM(\d+)-(\d+)$/, 'MDM$1-MDM$2'); return G.whSet.has(base) || G.whSet.has(b); };

// ---------- leitura da descricao ----------
G.feat = (p) => {
  const T = G.norm(p.name), D = G.norm(p.description); const f = {};
  const em = D.match(/encaixe[^\n:]{0,25}[:\-]?\s*(h\s?\d{1,2}|hb\s?\d)/) || D.match(/lampada utilizada\s*[:\-]?\s*(h\s?\d{1,2}|hb\s?\d)/) || D.match(/\b(hb4|h27|h16|h11|h8|h3|h1)\b/);
  f.encD = em ? em[1].replace(/\s/g, '').toUpperCase() : '';
  const et = T.match(/\b(hb4|h27|h16|h11|h8|h3|h1)\b/); f.encT = et ? et[1].toUpperCase() : '';
  f.sideVars = (p.variations || []).some(v => /direit|esquerd|passageiro|motorista/i.test((v.variationName || '') + ' ' + (v.option1 || '') + ' ' + (v.option2 || '')));
  f.farolT = /farol|farois|milha|neblina|farolete|cibie/.test(T);
  return f;
};
G.contents = (desc) => {
  const D = G.norm(desc).replace(/\r/g, '');
  const lines = D.split('\n').map(l => l.trim()).filter(Boolean);
  const out = { lamp: '', lampLine: '', items: [], kit: false, chicote: false, rele: false, botao: false, t10: false, moldura: false, paraf: false, reatores: false, nFarol: 0 };
  const itemRe = /^([-•>*·]\s*|\d{1,2}\s*[-x]?\s*|0\d\s)/;
  for (const l0 of lines) {
    const l = l0.replace(/^[-•>*·]+\s*/, '');
    if (!(itemRe.test(l0) || /^(acompanha|kit contem|contem|01|02|1|2)\b/.test(l))) continue;
    if (/^(nao|sem)\b/.test(l) || /nao acompanha/.test(l) || /\?/.test(l) || /^(e |obs|atencao|r:|suporta|garanta|aguardamos)/.test(l) || /resistente/.test(l)) continue;
    if (/(suporta|recomend|garantia|compativel|aplica|modelo e ano|material|textura|regulagem|encaixe|cor |lente|carcaca|marca|montadora|potencia|tensao|voltagem|watts|imagens)/.test(l)) continue;
    out.items.push(l);
    if (/chicote/.test(l)) out.chicote = true;
    if (/\brel[e]s?\b|\brele\b/.test(l)) out.rele = true;
    if (/botao|interruptor/.test(l)) out.botao = true;
    if (/t10|pingo/.test(l)) { out.t10 = true; continue; }
    if (/moldura|\bgrade\b|\baros?\b/.test(l)) out.moldura = true;
    if (/parafuso|porca|presilha/.test(l)) out.paraf = true;
    if (/reator/.test(l)) out.reatores = true;
    if (/farol|farois|farolete/.test(l)) { const q = l.match(/^(\d{1,2})/); out.nFarol = Math.max(out.nFarol, q ? +q[1] : (/par de/.test(l) ? 2 : 1)); }
    if (/lampada|xenon|super\s*-?led|halogen|reator/.test(l) && !/botao|interruptor/.test(l) && !/farol|farois/.test(l.replace(/farol (de )?milha/, ''))) {
      const t = /xenon|reator/.test(l) ? 'X' : (/super\s*-?led|led\s*(6000|6k|h\d|hb\d|2d)|lampadas?\s+(de\s+)?led|6000\s*k|\b6k\b/.test(l) ? 'M' : (/halogen|comum/.test(l) ? 'L' : '?'));
      if (!out.lamp || out.lamp === '?' || out.lamp === 'L') { out.lamp = t; out.lampLine = l.slice(0, 80); }
    }
  }
  out.kit = out.chicote && (out.rele || out.botao);
  return out;
};
G.titleLamp = (name) => { const T = G.norm(name).replace(/full\s*led/g, '').replace(/pingos?\s*(led)?/g, ''); if (/xenon|\b8k\b|8000\s*k|10000\s*k|12000\s*k/.test(T)) return 'X'; if (/\bled\b|\bleds\b|6000\s*k|\b6k\b|super\s*led/.test(T)) return 'M'; return ''; };

// ---------- plano por anuncio (SKU ja convertido no ar: o mapeamento e idempotente) ----------
G.plan1 = (p) => {
  const R = { id: String(p.idStr), old: p.itemSku || '', why: [], doubt: [] };
  const r = G.mapSku(p.itemSku);
  if (!r.ok) { R.newSku = null; R.why.push('sem SKU padrao (' + r.why + ')'); return R; }
  let sku = r.sku; R.type = r.type; if (r.notes && r.notes.length) R.why.push(...r.notes);
  const T = G.norm(p.name);
  let sp = G.splitSku(sku);
  if (r.type === 'KIT' && /\b(gol|saveiro|parati)\b/.test(T) && /\bg4\b/.test(T) && !/\bg[356]\b/.test(T) && sp.base !== 'SSS013VW') { R.why.push('Gol G4 kit = SSS013VW (regra do dono)'); sp.base = 'SSS013VW'; }
  if (/^SSS(744|757)CV$/.test(sp.base)) { R.why.push('S10 = SSS716CV (regra 57.6)'); sp.base = 'SSS716CV'; }
  const c = G.contents(p.description);
  if (r.type === 'PAR' && c.kit) { if (sp.base === 'FUN100-101') { R.why.push('descricao de KIT com SKU de par universal -> SSS905RN'); sp.base = 'SSS905RN'; R.type = 'KIT'; } else R.doubt.push('SKU de PAR mas a descricao e de KIT'); }
  if (r.type === 'KIT' && !c.kit && c.nFarol >= 2 && c.items.length >= 1 && !c.chicote) R.doubt.push('SKU de KIT mas a descricao nao lista chicote/rele/botao');
  const tL = G.titleLamp(p.name), dL = (c.lamp === 'M' || c.lamp === 'X' || c.lamp === 'L') ? c.lamp : '';
  let V = sp.line === 'U' ? 'U' : sp.line;
  if (sp.line !== 'U' && (r.type === 'KIT' || r.type === 'PAR')) {
    if (dL === 'M' || dL === 'X') { if (tL && tL !== dL) R.doubt.push('titulo diz ' + (tL === 'M' ? 'LED' : 'Xenon') + ' e descricao diz ' + (dL === 'M' ? 'LED' : 'Xenon')); else V = dL; }
    else if (tL) { if (dL === 'L') R.doubt.push('titulo diz ' + (tL === 'M' ? 'LED' : 'Xenon') + ' e descricao diz lampada halogena'); else V = tL; }
  }
  let enc = sp.enc;
  if (V === 'M' || V === 'X') {
    const tab = G.isWH(sp.base) ? G.ENC[sp.base] : null;
    let e2 = tab || (sp.enc ? sp.enc.replace(/^H11$/, 'H8') : '');
    if (!e2) { const f = G.feat(p); e2 = (f.encD || f.encT || '').replace(/^H11$/, 'H8'); }
    if (!e2) R.doubt.push('encaixe desconhecido');
    enc = e2 || sp.enc || 'H8';
  }
  if (V === 'L' && r.type === 'KIT') V = '';
  sku = sp.base + (V ? '-' + V + enc.replace(/^H11$/, 'H8') : '');
  R.newSku = sku; R.base = sp.base; R.line = V;
  return R;
};

// ---------- veiculos do titulo ----------
G.MODELS = (() => {
  const B = {
    'Volkswagen': ['gol','voyage','saveiro','parati','fox','spacefox','crossfox','polo','golf','jetta','up','amarok','virtus','nivus','t-cross','tcross','tiguan','bora','passat','santana','kombi'],
    'Chevrolet': ['celta','prisma','onix','corsa','classic','montana','meriva','agile','s10','spin','cobalt','sonic','vectra','astra','zafira','tracker','cruze','joy','captiva','blazer','trailblazer','kadett','monza','omega','equinox'],
    'Fiat': ['palio','siena','grand siena','strada','uno','idea','punto','doblo','ducato','argo','cronos','mobi','toro','fiorino','stilo','weekend','bravo','linea','titano','pulse','fastback','freemont'],
    'Ford': ['ka','fiesta','ecosport','ranger','focus','fusion','courier','transit','edge'],
    'Renault': ['sandero','logan','duster','oroch','clio','kwid','captur','fluence','megane','scenic','kangoo','master','symbol','stepway'],
    'Honda': ['civic','fit','city','hr-v','hrv','cr-v','crv','wr-v','wrv'],
    'Toyota': ['corolla','hilux','etios','yaris','sw4','fielder','rav4'],
    'Mitsubishi': ['l200','triton','pajero','asx','lancer','outlander'],
    'Nissan': ['frontier','march','versa','sentra','kicks','livina','grand livina','tiida','xterra','x-terra'],
    'Citroen': ['c3','c4','aircross','xsara','picasso','cactus','jumper','jumpy','c4 pallas'],
    'Peugeot': ['206','207','208','307','308','2008','3008','partner','boxer','expert','hoggar'],
    'Hyundai': ['hb20','hb20s','creta','tucson','ix35','azera','santa fe','i30'],
    'Jeep': ['renegade','compass','grand cherokee'],
    'Kia': ['soul','sportage','cerato','picanto'],
    'Iveco': ['daily'], 'Suzuki': ['grand vitara','vitara'], 'Land Rover': ['freelander'], 'Dodge': ['journey']
  };
  const m = {}; for (const [b, list] of Object.entries(B)) for (const x of list) m[x] = b; return m;
})();
G.PRETTY = { 'hr-v':'HR-V','hrv':'HR-V','cr-v':'CR-V','crv':'CR-V','wr-v':'WR-V','wrv':'WR-V','hb20':'HB20','hb20s':'HB20S','ix35':'ix35','sw4':'SW4','l200':'L200','s10':'S10','c3':'C3','c4':'C4','c4 pallas':'C4 Pallas','t-cross':'T-Cross','tcross':'T-Cross','xterra':'X-Terra','x-terra':'X-Terra','up':'Up','ka':'Ka','rav4':'RAV4','i30':'i30' };
G.pretty = (k) => G.PRETTY[k] || k.split(' ').map(w => w.charAt(0).toUpperCase() + w.slice(1)).join(' ');
G.parseVehicles = (title) => {
  let T = G.norm(title).replace(/[\/,;+()|]/g, ' ').replace(/(\d)\s*-\s*(\d)/g, '$1 a $2').replace(/\s+/g, ' ').trim();
  const toks = T.split(' ');
  const segs = []; let cur = null;
  const yr = (w) => { if (/^(19[89]\d|20[0-3]\d)$/.test(w)) return +w; if (/^\d{2}$/.test(w)) { const n = +w; if (n <= 30) return 2000 + n; if (n >= 85) return 1900 + n; } return null; };
  for (let i = 0; i < toks.length; i++) {
    const w = toks[i], w2 = w + ' ' + (toks[i + 1] || '');
    let model = null, adv = 0;
    if (G.MODELS[w2] && toks[i + 1]) { model = w2; adv = 1; } else if (G.MODELS[w]) model = w;
    if (model && /^\d+$/.test(model) && !/peugeot/.test(T)) model = null;
    if (model && !(model === 'up' && !/\bvw\b|volkswagen/.test(T) && i > 0 && !/^(kit|farol|milha|neblina|auxiliar)$/.test(toks[i - 1] || ''))) {
      if (!cur || cur.years.length) { cur = { models: [], gen: '', years: [] }; segs.push(cur); }
      if (!cur.models.includes(model)) cur.models.push(model); i += adv; continue;
    }
    if (cur && /^g[1-9]$/.test(w)) { cur.gen = w.toUpperCase(); continue; }
    const y = yr(w);
    if (cur && y) { if ((toks[i - 1] === 'a' || toks[i - 1] === 'ate') && cur.years.length) { const a = cur.years[cur.years.length - 1]; for (let k = a + 1; k <= y; k++) cur.years.push(k); } else cur.years.push(y); }
  }
  const out = [];
  for (const s of segs) { if (!s.models.length) continue; const ys = [...new Set(s.years)].filter(y => y >= 1985 && y <= 2027).sort((a, b) => a - b); let full = []; if (ys.length) { for (let k = ys[0]; k <= ys[ys.length - 1]; k++) full.push(k); if (full.length > 25) full = ys; } out.push({ models: s.models, gen: s.gen, years: full }); }
  return out;
};
G.vehLabel = (v) => v.models.map(m => G.MODELS[m] + ' ' + G.pretty(m) + (v.gen ? ' ' + v.gen : '')).join(' / ');
G.yrsLabel = (ys) => !ys.length ? '' : (ys.length === 1 ? String(ys[0]) : (ys[0] + ' a ' + ys[ys.length - 1]));
G.BOTAO = (D) => { if (/tic\s*-?\s*tac/.test(D)) return 'Modelo Tic Tac'; if (/touch|digital/.test(D)) return 'Modelo Touch'; if (/colante/.test(D)) return 'Modelo Colante'; if (/universal/.test(D) && /botao[^\n]{0,30}universal|universal[^\n]{0,10}botao/.test(D)) return 'Modelo Universal'; if (/alternativo/.test(D)) return 'Modelo Alternativo'; if (/modelo original|bt mod orig|botao original|bot\.? ?original|mod\.? orig/.test(D)) return 'Modelo Original'; return ''; };

// ---------- descricao modelo SSS Shopee ----------
G.genDesc = (p, R) => {
  const D = G.norm(p.description), T = G.norm(p.name);
  const c = G.contents(p.description);
  const isKit = R.type === 'KIT';
  const sp = G.splitSku(R.newSku);
  let enc = sp.enc || (G.isWH(sp.base) ? G.ENC[sp.base] : '') || '';
  if (!enc) { const f = G.feat(p); enc = (f.encD || f.encT || ''); }
  enc = enc.replace(/^H11$/, 'H8');
  const veh = G.parseVehicles(p.name);
  const vehTxt = veh.map(v => G.vehLabel(v) + (v.years.length ? ' ' + G.yrsLabel(v.years) : '')).join(' e ');
  const L = [];
  L.push(R.newTitle || p.name); L.push('');
  const lampTxt = sp.line === 'M' ? ' com lâmpadas Super LED 6000K' : sp.line === 'X' ? ' com kit xenon e reatores' : '';
  if (isKit) L.push('Kit de faróis auxiliares de milha completo' + lampTxt + (vehTxt ? ', desenvolvido para instalação no ' + vehTxt + '.' : '.'));
  else L.push('Par de faróis auxiliares de milha' + lampTxt + (vehTxt ? ', desenvolvido para instalação no ' + vehTxt + '.' : '.'));
  const comp = [];
  for (const v of veh) for (const m of v.models) { const nm = G.MODELS[m] + ' ' + G.pretty(m) + (v.gen ? ' ' + v.gen : ''); if (v.years.length) v.years.forEach(y => comp.push(nm + ' ' + y)); else comp.push(nm); }
  if (comp.length) { L.push(''); L.push('Compatível com:'); comp.slice(0, 40).forEach(x => L.push('- ' + x)); }
  L.push(''); L.push('Características:'); L.push('- Produto Novo');
  const ml = D.match(/(material|tipo)\s*(da\s*)?(lente|das lentes)\s*[:\-]?\s*(vidro|policarbonato|acrilico)/) || D.match(/lente\s*(lisa\s*)?(de|em)\s*(vidro|policarbonato|acrilico)/);
  const mlv = ml ? ml[ml.length - 1] : '';
  const vidro = /vidro/.test(T) || /-V$/.test(sp.base) || mlv === 'vidro' || (!mlv && /vidro/.test(D) && !/policarbonato|acrilico/.test(D));
  const poli = !vidro && (mlv === 'policarbonato' || mlv === 'acrilico' || (!mlv && /policarbonato|acrilico/.test(D) && !/vidro/.test(D)));
  L.push('- Lente lisa' + (vidro ? ' de vidro' : poli ? ' de policarbonato' : ''));
  if (enc) L.push('- Encaixe de lâmpada ' + enc);
  if (sp.line === 'M') L.push('- Lâmpadas Super LED 6000K (luz branca)');
  if (sp.line === 'X') L.push('- Kit xenon com 2 reatores');
  if (isKit) L.push('- Chicote elétrico com conectores');
  L.push(''); L.push('Conteúdo da Embalagem:'); L.push('- 02 Faróis de Milha');
  if ((c.moldura || /moldura/.test(T)) && !/sem moldura/.test(T)) L.push('- 02 Molduras');
  if (isKit) { L.push('- 01 Chicote Elétrico'); L.push('- 01 Relé'); const bt = G.BOTAO(D + ' ' + T); L.push('- 01 Botão de Acionamento' + (bt ? ' ' + bt : '')); }
  if (c.paraf) L.push('- 01 Kit de Parafusos e Presilhas');
  let lamps = false;
  if (sp.line === 'M') { L.push('- 01 Par de Lâmpadas Super LED 6000K' + (enc ? ' ' + enc : '')); lamps = true; }
  else if (sp.line === 'X') { L.push('- 02 Lâmpadas Xenon' + (enc ? ' ' + enc : '')); L.push('- 02 Reatores'); lamps = true; }
  else if (sp.line === 'L' || c.lamp === 'L') { L.push('- 01 Par de Lâmpadas Halógenas' + (enc ? ' ' + enc : '') + ' (brinde)'); lamps = true; }
  if (c.t10) L.push('- 01 Par de Pingo LED T10 (brinde)');
  L.push(''); L.push('Importante:');
  L.push(isKit ? '- Valor referente ao kit completo' : '- Valor referente ao par de faróis (não acompanha chicote, relé e botão)');
  if (lamps && c.t10) L.push('- As lâmpadas e os pingos LED T10 são brindes e, por isso, não possuem garantia');
  else if (lamps) L.push('- As lâmpadas são brindes e, por isso, não possuem garantia');
  else if (c.t10) L.push('- Os pingos LED T10 são brindes e, por isso, não possuem garantia');
  L.push('- Verifique o modelo e o ano do seu veículo antes da compra');
  L.push('- Recomendamos que a instalação seja realizada por profissional especializado');
  L.push('- Danos causados por instalação incorreta ou mau uso não são cobertos pela garantia');
  L.push('- Garantia de fábrica: 90 dias contra defeitos de fabricação');
  return L.join('\n');
};
G.isTemplate = (d) => /Garantia de f[aá]brica: 90 dias contra defeitos de fabrica[cç][aã]o/.test(d || '') && /Conte[uú]do da Embalagem:/.test(d || '') && /Importante:/.test(d || '');

// ---------- titulo ----------
G.fixTitle = (name, R) => {
  let t = ' ' + String(name).replace(/\s+/g, ' ').trim() + ' ';
  t = t.replace(/^\s*(par\s+de\s+|par\s+2\s+|par\s+)/i, ' Kit ');
  t = t.replace(/\s(par)(?=\s)/gi, ' ');
  if (/\bfarolete?s?\b/i.test(t)) { const hasFarol = /\bfar(ol|[oó]is)\b/i.test(t.replace(/\bfarolete?s?\b/gi, '')); t = hasFarol ? t.replace(/\s(faroletes?)(?=\s)/gi, ' ') : t.replace(/\b(faroletes?)\b/i, 'Farol').replace(/\s(faroletes?)(?=\s)/gi, ' '); }
  t = t.replace(/\bH11\b/gi, 'H8');
  const sp = G.splitSku(R.newSku || '');
  if (sp.line !== 'M') t = t.replace(/\s\+?\s*(kit\s+)?(super\s*-?\s*leds?|leds?\s*6000k|leds?\s*6k|leds?)(\s*2d)?(\s*6000\s*k|\s*6k|\s*branco)?(?=\s)/gi, (m) => /full/i.test(m) ? m : ' ');
  if (sp.line !== 'X') t = t.replace(/\s\+?\s*(kit\s+)?(xen[oô]n)(\s*(8000|10000|12000|6000)\s*k|\s*8k|\s*hb4|\s*h\d)?(?=\s)/gi, ' ').replace(/\s(8000k|8k|10000k|12000k)(?=\s)/gi, ' ');
  t = t.replace(/\s\+\s*(?=\+|\s*$)/g, ' ').replace(/\s+/g, ' ').trim();
  t = t.replace(/(\s(e|com|\+|mais))+$/i, '').trim();
  const startsKit = /^kit\b/i.test(t);
  let rest = startsKit ? t.replace(/^kit\s+/i, '') : t;
  rest = rest.replace(/\bkit\s+(?=completo\b)/i, '').replace(/(^|\s)kit(?=\s)/gi, ' ').replace(/\s+/g, ' ').trim();
  t = 'Kit ' + rest;
  if (t.length > 120) t = t.slice(0, 120).replace(/\s+\S*$/, '');
  return t;
};

// ---------- limpeza (produtos que nao seguem o modelo) ----------
G.STORE_RE = /(autoplus|auto plus|pepe\s*parts|carro\s*som\s*shop|carrosomshop|multi\s*parts|multiparts|reis\s+d[i]?(s)?tribuidora|jz\s+acess|virtual\s*kar|netmix|carros\s+pe[cç]as|maxgold|gb\s*autos?|gbautos|a grx|grupo de lojas|nossa loja|nossas lojas|nossa empresa|lojas? f[ií]sicas?|somos a |somos uma|mercado\s*livre|mercadolivre|mercado\s*l[ií]der|reputa[cç][aã]o|whats\s*app|instagram|nosso site)/i;
G.FITA_RE = /(fita|3m|dupla\s*face|adesiv)/i;
G.INSTALA_RE = /(realizamos a instala|fazemos a instala|instala[cç][aã]o (gr[aá]tis|gratuita|inclusa|na loja)|instalamos)/i;
G.cleanDesc = (desc) => {
  const out = [];
  for (let l of String(desc || '').replace(/\r/g, '').split('\n')) {
    if (G.STORE_RE.test(l)) continue;
    if (G.FITA_RE.test(l) && !/fita\s+led|fita\s+de\s+led|barra.{0,10}fita/i.test(l)) continue;
    if (G.INSTALA_RE.test(l)) continue;
    l = l.replace(/garantia do vendedor:\s*\d+\s*(meses|mes|m[eê]s|dias)/i, 'Garantia do vendedor: 90 dias');
    l = l.replace(/\b(3|03|tr[eê]s|6|06|seis)\s*(meses|m[eê]s)\s*de\s*garantia/i, '90 dias de garantia');
    l = l.replace(/garantia\s*(de|:|-)?\s*(3|03|6|06|12)\s*(meses|m[eê]s)/i, 'garantia de 90 dias');
    l = l.replace(/\bH11\b/g, 'H8').replace(/\bh11\b/g, 'h8');
    out.push(l);
  }
  let t = out.join('\n').replace(/\n{3,}/g, '\n\n').trim();
  if (!/90 dias/i.test(t)) t += '\n\nGarantia de fábrica: 90 dias contra defeitos de fabricação.';
  return t;
};

// ---------- montagem do plano a partir do estado atual ----------
G.buildPlanNow = (BEI, inactiveTitles) => {
  const P = [];
  for (const p of BEI) {
    const R = G.plan1(p);
    const f = G.feat(p); const T = G.norm(p.name);
    const both = /direit/.test(T) && /esquerd/.test(T);
    R.unit = (R.type === 'UNI') || (!both && (/\b(unitario|avulso)\b/.test(T) || /\b(direito|esquerdo)\b/.test(T))) || f.sideVars;
    R.farol = (R.type === 'KIT' || R.type === 'PAR') && f.farolT;
    R.name = p.name; R.hv = p.hasVariation; R.status = p.productStatus || '';
    R.newTitle = (R.newSku && !R.unit && !R.doubt.length && (R.farol || /^MDM/.test(R.newSku || ''))) ? G.fixTitle(p.name, R) : p.name;
    R.descMode = (R.newSku && !R.unit && !R.doubt.length && R.farol) ? 'modelo' : 'limpeza';
    P.push(R);
  }
  // titulos unicos na loja
  const key = s => G.norm(s).replace(/[^a-z0-9]+/g, ' ').trim();
  const seen = new Map((inactiveTitles || []).map(t => [key(t), 1]));
  const EXTRA = ['Neblina', 'Auxiliar', 'Completo', 'Milha', 'Novo', 'Plug and Play', 'Alta Qualidade', 'Pronta Entrega', 'Envio Imediato', 'Original Encaixe', 'Linha Nova', 'Modelo Novo'];
  for (const R of P) {
    let t = R.newTitle; if (!seen.has(key(t))) { seen.set(key(t), 1); continue; }
    for (const w of EXTRA) { if (new RegExp('\\b' + w + '\\b', 'i').test(t)) continue; let t2 = t + ' ' + w; if (t2.length > 120) t2 = (t.slice(0, 119 - w.length).replace(/\s+\S*$/, '') + ' ' + w); if (!seen.has(key(t2))) { t = t2; break; } }
    R.newTitle = t; seen.set(key(t), 1);
  }
  const byId = {}; BEI.forEach(p => byId[String(p.idStr)] = p);
  for (const R of P) { const p = byId[R.id]; R.newDesc = R.descMode === 'modelo' ? G.genDesc(p, R) : G.cleanDesc(p.description); }
  return P;
};

// ---------- gravacao (Editar em Massa da Shopee no UpSeller) ----------
G.varSkuMap = (p, R) => { const m = {}; for (const v of (p.variations || [])) m[String(v.idStr || v.id)] = R.newSku ? R.newSku : (v.variationSku || ''); return m; };
G.needsSave = (p, R) => {
  if ((R.newTitle || p.name) !== p.name) return true;
  if ((R.newDesc || '').trim() !== String(p.description || '').trim()) return true;
  if (R.newSku && R.newSku !== p.itemSku) return true;
  const vm = G.varSkuMap(p, R); for (const v of (p.variations || [])) if ((vm[String(v.idStr || v.id)] || '') !== (v.variationSku || '')) return true;
  return false;
};
G.buildSaveItem = (p, R) => {
  let attrs = p.attributes;
  try {
    const req = (G.REQ && G.REQ[p.categoryId]) || []; let a = JSON.parse(p.attributes || '[]') || []; let ch = false;
    if (req.includes(106664) && !a.some(x => x.attribute_id === 106664)) { a.push(JSON.parse(JSON.stringify(G.ATTR_TPL.bt))); ch = true; }
    if (req.includes(102293)) { const pnVal = R.newSku || p.itemSku || String(100000 + Math.floor(Math.random() * 899999)); const ex = a.find(x => x.attribute_id === 102293); if (!ex) { const t = JSON.parse(JSON.stringify(G.ATTR_TPL.pn)); t.attribute_value_list[0].original_value_name = pnVal; a.push(t); ch = true; } else if (R.newSku && ex.attribute_value_list && ex.attribute_value_list[0] && ex.attribute_value_list[0].original_value_name !== R.newSku) { ex.attribute_value_list[0].original_value_name = R.newSku; ex.attribute_value_list[0].value_id = 0; ch = true; } }
    if (ch) attrs = JSON.stringify(a);
  } catch (e) {}
  const it = { id: String(p.idStr), shopId: p.shopId, site: p.site, categoryId: p.categoryId, name: R.newTitle, description: R.newDesc, itemSku: R.newSku || p.itemSku || '', price: p.price, stock: p.stock, gtinCode: p.gtinCode, brandInfo: p.brandInfo, attributes: attrs, hasVariation: p.hasVariation, mainImage: p.mainImage };
  let weight = p.weight, L = p.packageLength, W = p.packageWidth, H = p.packageHeight;
  if (p.hasVariation && p.variations && p.variations.length) {
    const vt = Array.isArray(p.variantTheme) ? p.variantTheme : (function () { try { return JSON.parse(p.variantTheme || '[]'); } catch (e) { return []; } })();
    vt.forEach((name, k) => { it['option' + (k + 1)] = name; });
    const own = p.variations.some(v => v.weight || v.packageHeight || v.packageLength || v.packageWidth);
    if (own) { weight = p.variations[0].weight; L = p.variations[0].packageLength; W = p.variations[0].packageWidth; H = p.variations[0].packageHeight; }
    const vm = G.varSkuMap(p, R);
    it.variationsStr = JSON.stringify(p.variations.map(v => { const g = { option1: v.option1 == null ? undefined : v.option1, option2: v.option2 == null ? undefined : v.option2, id: String(v.idStr || v.id), variationName: v.variationName, variationSku: vm[String(v.idStr || v.id)] || v.variationSku || '', originPrice: v.originPrice, currentPrice: v.currentPrice, currentStock: v.currentStock, activityStatus: v.activityStatus, gtinCode: v.gtinCode }; if (own) Object.assign(g, { weight: v.weight, packageWidth: v.packageWidth, packageHeight: v.packageHeight, packageLength: v.packageLength }); return g; }));
  }
  Object.assign(it, { weight, packageLength: L, packageWidth: W, packageHeight: H, logistics: p.logistics, ncm: p.ncm, originDetail: p.originDetail, cest: p.cest, measureUnit: p.measureUnit, csosn: p.csosn, cfopSame: p.cfopSame, cfopDiff: p.cfopDiff });
  return it;
};
G.saveBatch = async (items) => {
  const blob = await G.zipFn(G.jsonStrFn(items), 'shopeeGlobalSave.txt');
  const fd = new FormData(); fd.append('file', blob); fd.append('isPublish', 2); fd.append('anyway', false);
  const r = await fetch('/api/shopee/product/save-batch-edit', { method: 'POST', body: fd, credentials: 'include' });
  return JSON.parse(G.fixIds(await r.text()));
};
// o servidor so roda UMA tarefa de Editar em Massa por vez: tarefa enviada com outra rodando e descartada; o resultado some logo depois de terminar
G.sleepF = async (n) => { for (let i = 0; i < n; i++) { try { await fetch('/robots.txt', { cache: 'no-store' }); } catch (e) {} } };
G.waitTask = async (key, n) => {
  let seen = false, last = null; const t0 = Date.now();
  while (Date.now() - t0 < Math.max(60000, n * 9000)) {
    await G.sleepF(4);
    const cp = await G.get('/api/check-process?uuid=' + encodeURIComponent(key)); const pm = cp.data && cp.data.processMsg;
    if (pm && pm.totalNum > 0) { seen = true; last = pm; if (pm.num >= pm.totalNum) return { state: 'done', pm }; }
    else if (seen) return { state: 'expired', pm: last };
    else if (Date.now() - t0 > 25000) return { state: 'dropped' };
  }
  return { state: seen ? 'timeout' : 'dropped', pm: last };
};
G.descJob = async (opts) => {
  const o = Object.assign({ batch: 40, key: 'GERSON_DESC_PROG3' }, opts || {});
  const st = window.__DJ3 = { running: true, stop: false, started: new Date().toISOString(), batches: 0, drops: 0, expired: 0, lastErr: '' };
  const prog = (await G.idb.get(o.key)) || { done: {}, fail: {}, dup: {}, skip: {}, maybe: {}, log: [] };
  const byId = {}; G.PL.forEach(R => byId[R.id] = R);
  let queue = G.PL.filter(R => !prog.done[R.id] && !prog.skip[R.id] && !prog.fail[R.id] && !prog.dup[R.id] && !prog.maybe[R.id]);
  queue.sort((a, b) => ((b.status === 'NORMAL') - (a.status === 'NORMAL')));
  queue = queue.map(R => R.id); st.queue = queue.length;
  while (queue.length && !st.stop) {
    const ids = queue.splice(0, o.batch);
    try {
      const fr = await G.pj('/api/shopee/product/batch-edit-index', ids);
      const items = [], sent = [];
      for (const p of (fr.data || [])) { const R = byId[String(p.idStr)]; if (!R) continue; if (!G.needsSave(p, R)) { prog.skip[R.id] = 1; continue; } items.push(G.buildSaveItem(p, R)); sent.push(R.id); }
      if (items.length) {
        let tries = 0, w = null, res = null;
        while (tries < 4) { tries++; await G.sleepF(20); res = await G.saveBatch(items); if (res.code !== 0) { w = { state: 'error' }; break; } w = await G.waitTask(res.data, items.length); if (w.state !== 'dropped') break; st.drops++; }
        if (w.state === 'error') sent.forEach(id => prog.fail[id] = 'save: ' + String(res.msg).slice(0, 120));
        else if (w.state === 'dropped') sent.forEach(id => prog.fail[id] = 'tarefa descartada 4x');
        else {
          const d = (w.pm || {}).data || {};
          (d.successList || []).forEach(x => prog.done[String(x.id)] = 1);
          (d.failList || []).forEach(x => prog.fail[String(x.id)] = String(x.msg || '') + ' ' + JSON.stringify(x.data || '').slice(0, 120));
          (d.duplicateList || []).forEach(x => prog.dup[String(x.id)] = String(x.msg || ''));
          sent.forEach(id => { if (!prog.done[id] && !prog.fail[id] && !prog.dup[id]) prog.maybe[id] = w.state; });
          if (w.state === 'expired') st.expired++;
        }
        prog.log.push(new Date().toISOString() + ' n' + items.length + ' ' + (w && w.state) + ' tries' + tries);
      }
    } catch (e) { st.lastErr = e.message; ids.forEach(id => prog.fail[id] = 'erro: ' + e.message); }
    st.batches++; st.queue = queue.length;
    st.done = Object.keys(prog.done).length; st.fail = Object.keys(prog.fail).length; st.dup = Object.keys(prog.dup).length; st.skip = Object.keys(prog.skip).length; st.maybe = Object.keys(prog.maybe).length;
    await G.idb.set(o.key, prog);
  }
  st.running = false; st.finished = new Date().toISOString();
};


// ---------- ciclo manual (o servidor processa 1 tarefa por vez, ~5 s por anuncio; aba em segundo plano congela) ----------
// Uso: a cada ~30 min, numa aba do app.upseller.com: await __G.cycle(300). Ele confere o lote anterior (pelos dados) e manda o proximo.
G.cycle = async (N) => {
  const S = (await G.idb.get('GERSON_CYCLE')) || { pending: null, done: {}, fail: {}, rounds: 0, log: [] };
  const byId = {}; G.PL.forEach(R => byId[R.id] = R);
  const same = (p, R) => p.name === R.newTitle && String(p.description || '').trim() === R.newDesc.trim() && (!R.newSku || p.itemSku === R.newSku);
  let info = {};
  if (S.pending) {
    const cp = await G.get('/api/check-process?uuid=' + encodeURIComponent(S.pending.key)); const pm = cp.data && cp.data.processMsg;
    if (pm && pm.totalNum === S.pending.ids.length && pm.num < pm.totalNum) return { running: pm.num + '/' + pm.totalNum, since: S.pending.at };
    let fl = [];
    if (pm && pm.totalNum === S.pending.ids.length && pm.num >= pm.totalNum) fl = ((pm.data || {}).failList || []).concat((pm.data || {}).duplicateList || []);
    const fr = []; for (let k = 0; k < S.pending.ids.length; k += 100) { const r = await G.pj('/api/shopee/product/batch-edit-index', S.pending.ids.slice(k, k + 100)); fr.push(...(r.data || [])); }
    let changed = 0;
    for (const p of fr) { const R = byId[String(p.idStr)]; if (same(p, R)) { S.done[R.id] = 1; changed++; } }
    fl.forEach(x => { S.fail[String(x.id)] = String(x.msg || '') + ' ' + JSON.stringify(x.data || '').slice(0, 100); delete S.done[String(x.id)]; });
    if (!changed && !fl.length) info.dropped = S.pending.ids.length;
    S.log.push(new Date().toISOString() + ' fim lote ' + S.pending.ids.length + ' ok ' + changed + ' falhas ' + fl.length);
    info.lastBatch = { n: S.pending.ids.length, ok: changed, fail: fl.length };
    S.pending = null;
  }
  const queue = G.PL.filter(R => !S.done[R.id] && !S.fail[R.id]).sort((a, b) => ((b.status === 'NORMAL') - (a.status === 'NORMAL')));
  const items = [], ids = [];
  for (let k = 0; k < queue.length && items.length < N; k += 100) {
    const r = await G.pj('/api/shopee/product/batch-edit-index', queue.slice(k, k + 100).map(R => R.id));
    for (const p of (r.data || [])) { const R = byId[String(p.idStr)]; if (items.length >= N) break; if (!G.needsSave(p, R)) { S.done[R.id] = 1; continue; } items.push(G.buildSaveItem(p, R)); ids.push(R.id); }
  }
  if (items.length) { const res = await G.saveBatch(items); if (res.code === 0) S.pending = { key: res.data, ids, at: new Date().toISOString() }; else info.saveErr = res.msg; }
  S.rounds++;
  await G.idb.set('GERSON_CYCLE', S);
  return Object.assign(info, { submitted: items.length, done: Object.keys(S.done).length, fail: Object.keys(S.fail).length, left: G.PL.length - Object.keys(S.done).length - Object.keys(S.fail).length });
};
// refazer o plano a partir do estado atual (se o IndexedDB sumir): ids revisados = NORMAL + UNLIST pausados em 10/11 a tarde
G.rebuildPlan = async () => {
  const idx = []; for (let p = 1; p <= 15; p++) { const d = await G.post('/api/shopee/product/index?pageNum=' + p, { state: 'online', sortName: 3, sortValue: 0, pageNum: p, pageSize: 300, shopIds: '1188127' }); if (d.code !== 0) break; d.data.list.forEach(it => idx.push({ id: String(it.idStr || it.id), st: it.productStatus, upd: it.updateTime, name: it.name })); if (d.data.list.length < 300) break; }
  const ids = idx.filter(x => x.st === 'NORMAL' || x.st === 'SOLDOUT' || (x.st === 'UNLIST' && String(x.upd) >= '2026-11-10T16')).map(x => x.id);
  const inactive = idx.filter(x => x.st === 'UNLIST' && String(x.upd) < '2026-11-10T16').map(x => x.name);
  const BEI = []; for (let k = 0; k < ids.length; k += 100) { const r = await G.pj('/api/shopee/product/batch-edit-index', ids.slice(k, k + 100)); BEI.push(...(r.data || [])); }
  G.PL = G.buildPlanNow(BEI, inactive); const st = {}; idx.forEach(x => st[x.id] = x.st); G.PL.forEach(R => R.status = st[R.id] || '');
  await G.idb.set('GERSON_PLAN_V2', G.PL); return G.PL.length;
};
// ---------- inicializacao ----------
G.boot = async () => {
  const vm = document.querySelector('#app').__vue__;
  G.zipFn = vm.$utils.webJsDataToZip.bind(vm.$utils); G.jsonStrFn = vm.$utils.jsonStr.bind(vm.$utils);
  const wh = []; for (let p = 1; p <= 5; p++) { const d = await G.pj('/api/sku/index-single', { pageNum: p, pageSize: 100 }); if (d.code !== 0) break; (d.data.list || []).forEach(x => wh.push(x.sku)); if ((d.data.list || []).length < 100) break; }
  G.whSet = new Set(wh.map(x => String(x).trim().toUpperCase()));
  const ba = await G.get('/api/shopee/product/batch-attribute?site=BR&categoryIds=102299,102295,102297,102301,102536,102242,100712,100719,101323,102010,102202,102294,102416,102518,102528,102539');
  G.REQ = {}; for (const [cat, list] of Object.entries(ba.data || {})) G.REQ[cat] = (list || []).filter(a => a.mandatory).map(a => a.attributeId);
  const sp = await G.pullShopee('1108318'); const ids = sp.filter(x => x.st === 'NORMAL').slice(0, 5).map(x => x.id);
  const r = await G.pj('/api/shopee/product/batch-edit-index', ids); const attrs = JSON.parse(r.data[0].attributes);
  G.ATTR_TPL = { bt: attrs.find(a => a.attribute_id === 106664), pn: attrs.find(a => a.attribute_id === 102293) };
  return { wh: G.whSet.size, req: Object.keys(G.REQ).length, tpl: !!(G.ATTR_TPL.bt && G.ATTR_TPL.pn) };
};
})();
'gerson lib ok';
