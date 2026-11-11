// gerson/uniq_titles.js - titulos UNICOS para a Shopee (secao 73.8 do README)
// A Shopee descarta EM SILENCIO a edicao (titulo E descricao) quando o titulo novo tem as mesmas
// palavras de outro anuncio da loja (mesmo em outra ordem). Esta funcao gera candidatos com palavras
// verdadeiras para o produto e escolhe o primeiro com Delta (palavras de diferenca, sem ordem e sem
// acento) >= minDelta contra TODOS os outros titulos da loja (inclusive pausados).
// Uso (na aba do app.upseller.com, depois do gerson_lib.js):
//   const res = __UT.plan([{ id, R, desc0 }], outros /* [{id, name}] */, 3);            // 1a tentativa
//   const res2 = __UT.plan(descartados, outros, 5, { noSuperset: true });               // se a Shopee descartou
//   R.newTitle = titulo planejado, R.newSku = SKU novo, desc0 = descricao no modelo (para encaixe/chicote)
window.__UT = (function () {
  const norm = s => String(s).toLowerCase().normalize('NFD').replace(/[̀-ͯ]/g, '');
  const toks = s => new Set(norm(s).split(/[^a-z0-9]+/).filter(Boolean));
  const delta = (a, b) => { let d = 0; a.forEach(x => { if (!b.has(x)) d++; }); b.forEach(x => { if (!a.has(x)) d++; }); return d; };
  const contains = (big, small) => { let ok = true; small.forEach(w => { if (!big.has(w)) ok = false; }); return ok; };
  const BR = [
    [/\b(focus|fiesta|ka|ecosport|ranger|courier|edge|fusion)\b/i, 'Ford'],
    [/\b(strada|palio|siena|uno|idea|punto|toro|argo|cronos|mobi|fiorino|doblo|weekend|linea|bravo|freemont|titano|ducato)\b/i, 'Fiat'],
    [/\b(polo|gol|voyage|saveiro|fox|golf|jetta|amarok|virtus|crossfox|spacefox|bora|passat)\b/i, 'Volkswagen'],
    [/\b(celta|prisma|onix|cobalt|spin|s10|montana|agile|corsa|classic|cruze|tracker|captiva|sonic|joy)\b/i, 'Chevrolet'],
    [/\b(c4|c3|pallas|aircross|picasso|xsara)\b/i, 'Citroen'],
    [/\b(l200|triton|pajero|asx|outlander)\b/i, 'Mitsubishi']
  ];
  const brandOf = t => { for (const [re, b] of BR) if (re.test(t)) return b; return null; };
  const hasWord = (t, w) => toks(t).has(norm(w));
  const afterFarol = (t, w) => (/\bFarol\b/.test(t) ? t.replace(/\bFarol\b/, 'Farol ' + w) : t.replace(/^Kit\b/, 'Kit ' + w));
  const insertBrand = (t, b) => { for (const [re, bb] of BR) if (bb === b) { const m = t.match(re); if (m) return t.slice(0, m.index) + b + ' ' + t.slice(m.index); } return t + ' ' + b; };
  const expandYears = t => { const p = t.split(' '); const y4 = x => /^(19|20)\d\d$/.test(x), y2 = x => /^\d\d$/.test(x); if (!(p.some(y4) || p.filter(y2).length >= 3)) return t; return p.map(x => (y2(x) ? '20' + x : x)).join(' '); };
  function candidates(base, R, desc0) {
    const sku = R.newSku || '', kit = /^SSS/.test(sku), adds = [], ex = [];
    const b = brandOf(base); if (b && !hasWord(base, b)) adds.push(['brand', t => insertBrand(t, b)]);
    for (const w of ['Milha', 'Neblina', 'Auxiliar']) if (!hasWord(base, w)) adds.push([w, t => afterFarol(t, w)]);
    if (kit && !hasWord(base, 'completo')) adds.push(['Completo', t => t.replace(/^Kit\b/, 'Kit Completo')]);
    if (/-M/.test(sku) && !hasWord(base, 'led')) adds.push(['Led', t => t + ' Super Led']);
    if (/-X/.test(sku) && !hasWord(base, 'xenon')) adds.push(['Xenon', t => t + ' Xenon']);
    const d0 = String(desc0 || '');
    const m = d0.match(/Encaixe de l.mpada ([A-Z0-9]+)/i); if (m && !hasWord(base, m[1]) && !/^H11$/i.test(m[1])) ex.push(['Encaixe', t => t + ' Encaixe ' + m[1].toUpperCase()]);
    if (kit && /Chicote El/i.test(d0) && /Rel[eé]/i.test(d0) && !hasWord(base, 'chicote')) { const bot = /Bot[aã]o/i.test(d0); ex.push(['Chicote', t => t + (bot ? ' Com Chicote Rele E Botao' : ' Com Chicote E Rele')]); }
    const out = [], yrs = expandYears(base), bases = [[base, '']];
    if (yrs !== base) bases.push([yrs, 'anos']);
    for (const [bt, bl] of bases) {
      if (bl) out.push([bt, bl]);
      for (const a of adds) out.push([a[1](bt), (bl ? bl + '+' : '') + a[0]]);
      for (let i = 0; i < adds.length; i++) for (let j = i + 1; j < adds.length; j++) out.push([adds[j][1](adds[i][1](bt)), (bl ? bl + '+' : '') + adds[i][0] + '+' + adds[j][0]]);
    }
    for (const e of ex) { out.push([e[1](base), e[0]]); for (const a of adds) out.push([e[1](a[1](base)), a[0] + '+' + e[0]]); if (yrs !== base) { out.push([e[1](yrs), 'anos+' + e[0]]); for (const a of adds) out.push([e[1](a[1](yrs)), 'anos+' + a[0] + '+' + e[0]]); } }
    if (ex.length === 2) out.push([ex[1][1](ex[0][1](base)), ex[0][0] + '+' + ex[1][0]]);
    for (let i = 0; i < adds.length; i++) for (let j = i + 1; j < adds.length; j++) for (let k = j + 1; k < adds.length; k++) out.push([adds[k][1](adds[j][1](adds[i][1](base))), adds[i][0] + '+' + adds[j][0] + '+' + adds[k][0]]);
    const ra = base.replace(/\b((?:19|20)\d\d)(?: (?:19|20)\d\d){1,}( (?:19|20)\d\d)\b/, (s, a, z) => a + ' A' + z);
    if (ra !== base) { out.push([ra, 'faixa']); for (const a of adds) out.push([a[1](ra), 'faixa+' + a[0]]); }
    return out;
  }
  // items: [{id, R, desc0}] na ordem de gravacao; others: [{id, name}] titulos ATUAIS da loja inteira
  // opts.noSuperset = true: tambem recusa candidato que contem TODAS as palavras de outro titulo (2a tentativa, quando a Shopee descartou)
  function plan(items, others, minDelta, opts) {
    opts = opts || {};
    const ids = new Set(items.map(x => x.id));
    const taken = others.filter(o => !ids.has(o.id)).map(o => ({ id: o.id, t: toks(o.name) }));
    const res = [];
    for (const it of items) {
      let pick = null;
      for (const [cand, how] of candidates(it.R.newTitle, it.R, it.desc0)) {
        if (cand.length > 120 || /farolete/i.test(cand) || /\bpar\b/i.test(cand)) continue;
        const ct = toks(cand); let dmin = 99, sub = false;
        for (const x of taken) { if (x.id === it.id) continue; const d = delta(ct, x.t); if (d < dmin) dmin = d; if (contains(ct, x.t)) sub = true; }
        if (dmin >= minDelta && !(opts.noSuperset && sub)) { pick = { cand, how, dmin }; break; }
      }
      if (pick) taken.push({ id: it.id, t: toks(pick.cand) });
      res.push({ id: it.id, base: it.R.newTitle, pick });
    }
    return res;
  }
  return { toks, delta, contains, candidates, plan, expandYears, brandOf };
})();
