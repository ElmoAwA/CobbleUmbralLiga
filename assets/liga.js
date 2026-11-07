(() => {
const ROSTER = globalThis.ROSTER_DATA;
const base = location.hostname === 'liga.cobbleumbral.fun' || location.protocol === 'file:' ? 'https://cobbleumbral.fun/cobblemon/' : '../cobblemon/';
const $ = id => document.getElementById(id);
const CATS = { prision: 'Prisión Umbral', reclutamiento: 'Reclutamiento Umbral', prohibicion: 'Prohibición Umbral', comun: 'Comunes', pseudo: 'Pseudo-legendarios', legendario: 'Legendarios', ultraente: 'Ultra Entes' };
const ORDEN = Object.keys(CATS);
const NOTAS = { prision: 'Baneados por esta temporada. No se pueden reclutar hasta la siguiente.', reclutamiento: 'Elegido por la comunidad.', prohibicion: 'Elegido por la comunidad.' };
const TIPOS = { normal: 'Normal', fire: 'Fuego', water: 'Agua', electric: 'Eléctrico', grass: 'Planta', ice: 'Hielo', fighting: 'Lucha', poison: 'Veneno', ground: 'Tierra', flying: 'Volador', psychic: 'Psíquico', bug: 'Bicho', rock: 'Roca', ghost: 'Fantasma', dragon: 'Dragón', dark: 'Siniestro', steel: 'Acero', fairy: 'Hada' };
const STATS = [['hp', 'PS'], ['attack', 'Ataque'], ['defense', 'Defensa'], ['special-attack', 'At. Esp.'], ['special-defense', 'Def. Esp.'], ['speed', 'Velocidad']];
const esc = s => String(s).replace(/[&<>"]/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' }[c]));
const st = { cat: 'todos', tipos: new Set(), q: '', orden: '' };
let dex = {};

// El placeholder de una categoría comunitaria todavía sin elegir es Unown.
const sinElegir = e => e[0] === 'Unown' && (e[1] === 'reclutamiento' || e[1] === 'prohibicion');
const sobra = e => sinElegir(e) && ROSTER.some(o => o[1] === e[1] && !sinElegir(o));
function info(slug) {
  let s = slug.toLowerCase();
  if (dex[s]) return dex[s];
  if (dex[s.replace(/-/g, '')]) return dex[s.replace(/-/g, '')];
  while (s.includes('-')) { s = s.slice(0, s.lastIndexOf('-')); if (dex[s]) return dex[s]; }
  return null;
}
const total = d => Object.values(d.stats).reduce((a, b) => a + b, 0);
const valor = (d, k) => !d ? -1 : k === 'total' ? total(d) : d.stats[k];

function pestanas() {
  const p = $('pest'); p.innerHTML = '';
  const mk = (k, l, n) => { const b = document.createElement('button'); b.type = 'button'; b.setAttribute('aria-pressed', st.cat === k); b.innerHTML = `${l}${n === null ? '' : `<b>${n}</b>`}`; b.onclick = () => { st.cat = k; pestanas(); pinta(); }; p.append(b); };
  mk('todos', 'Todos', null);
  ORDEN.forEach(c => mk(c, CATS[c], new Set(ROSTER.filter(e => e[1] === c && !sinElegir(e)).map(e => e[0])).size));
}
function tipos() {
  Object.entries(TIPOS).forEach(([k, l]) => {
    const b = document.createElement('button'); b.type = 'button'; b.textContent = l; b.style.setProperty('--c', `var(--t-${k})`); b.setAttribute('aria-pressed', 'false');
    b.onclick = () => { st.tipos.has(k) ? st.tipos.delete(k) : st.tipos.add(k); b.setAttribute('aria-pressed', st.tipos.has(k)); pinta(); };
    $('tipos').append(b);
  });
}
function pasa(e) {
  if (sobra(e)) return false;
  if (st.cat !== 'todos' && st.cat !== e[1]) return false;
  if (st.q && !e[0].toLowerCase().includes(st.q)) return false;
  if (st.tipos.size) { const d = info(e[2]); if (sinElegir(e) || !d || !d.types.some(t => st.tipos.has(t))) return false; }
  return true;
}
function carta(e) {
  if (sinElegir(e)) { const v = document.createElement('div'); v.className = 'carta vacia'; v.textContent = 'Sin elegir todavía. La comunidad lo decide por votación.'; return v; }
  const d = info(e[2]), [nombre, cat, slug, forma] = e;
  const b = document.createElement('button'); b.type = 'button'; b.className = 'carta px' + (cat === 'prision' ? ' preso' : '');
  const tag = cat === 'prision' ? 'Prisión' : cat === 'prohibicion' ? 'Prohibido' : '';
  const val = st.orden && d ? valor(d, st.orden) : '';
  b.innerHTML = `${tag ? `<span class="et">${tag}</span>` : ''}${val !== '' ? `<span class="val">${val}</span>` : ''}<img alt="" loading="lazy" width="160" height="160" src="${d?.m ? `${base}i/${d.m}.webp` : 'nmi8a7.png'}"><span class="n">${esc(nombre)}</span>${forma ? `<span class="fm">${esc(forma)}</span>` : ''}<span class="ts">${(d?.types || []).map(t => `<i style="--c:var(--t-${t})" title="${TIPOS[t]}"></i>`).join('')}</span>`;
  b.querySelector('img').onerror = ev => { ev.target.onerror = null; ev.target.src = 'nmi8a7.png'; };
  b.onclick = () => abrir(e);
  return b;
}
function pinta() {
  const lista = ROSTER.filter(pasa), real = lista.filter(e => !sinElegir(e)).length, m = $('main');
  $('cuenta').textContent = `${real} Pokémon mostrados`;
  m.innerHTML = '';
  if (!lista.length) { m.innerHTML = '<p class="vacio">Ningún Pokémon coincide. Prueba quitar un filtro de tipo o cambiar la búsqueda.</p>'; return; }
  ORDEN.filter(c => lista.some(e => e[1] === c)).forEach(c => {
    const g = document.createElement('section'); g.className = 'grupo'; g.style.padding = 0;
    g.innerHTML = `<h2>${CATS[c]}</h2>${NOTAS[c] ? `<p>${NOTAS[c]}</p>` : ''}`;
    const q = document.createElement('div'); q.className = 'cuadro';
    let it = lista.filter(e => e[1] === c);
    if (st.orden) it = [...it].sort((a, b) => valor(info(b[2]), st.orden) - valor(info(a[2]), st.orden));
    it.forEach(e => q.append(carta(e)));
    g.append(q); m.append(g);
  });
}
// Movimientos que aprende: se cargan al abrir la ficha.
let movs = null, fichaId = null;
const GRUPOS = [['n', 'Por nivel'], ['tm', 'MT'], ['tutor', 'Tutor'], ['egg', 'Huevo'], ['legacy', 'Legado']];
const CATEG = { f: 'Físico', e: 'Especial', s: 'Estado' };
async function movimientos(d) {
  const caja = $('f-m'); fichaId = d?.id || null;
  if (!d?.id) { caja.innerHTML = '<p class="m-nota">Este Pokémon no tiene movimientos cargados.</p>'; return; }
  const id = d.id; caja.innerHTML = '<p class="m-nota">Cargando movimientos…</p>';
  try {
    const [catalogo, ap] = await Promise.all([movs || (movs = fetch(base + 'movimientos.json').then(r => r.json())), fetch(`${base}ap/${id}.json`).then(r => r.json())]);
    if (fichaId === id) pintaMovs(ap, catalogo);
  } catch { movs = null; if (fichaId === id) caja.innerHTML = '<p class="m-nota">No se pudieron cargar los movimientos. Cierra la ficha y vuelve a abrirla.</p>'; }
}
function pintaMovs(ap, cat) {
  const caja = $('f-m');
  const grupos = GRUPOS.filter(([k]) => ap[k].length);
  if (!grupos.length) { caja.innerHTML = '<p class="m-nota">Este Pokémon no tiene movimientos cargados.</p>'; return; }
  let actual = grupos[0][0], q = '';
  caja.innerHTML = `<div class="m-tabs">${grupos.map(([k, l]) => `<button type="button" data-k="${k}">${l} <b>${ap[k].length}</b></button>`).join('')}</div><input class="m-buscar" type="search" placeholder="Buscar movimiento" aria-label="Buscar movimiento"><p class="m-nota" id="f-mn" hidden></p><div class="m-lista"></div>`;
  const lista = caja.querySelector('.m-lista'), nota = caja.querySelector('#f-mn');
  const ver = () => {
    caja.querySelectorAll('.m-tabs button').forEach(b => b.setAttribute('aria-pressed', b.dataset.k === actual));
    nota.hidden = actual !== 'legacy'; nota.textContent = 'Heredados de juegos anteriores.';
    const filas = ap[actual].map(x => actual === 'n' ? x : [null, x]).filter(([, id]) => cat[id] && cat[id].n.toLowerCase().includes(q));
    lista.innerHTML = filas.length ? filas.map(([nv, id]) => { const m = cat[id]; return `<details class="m-fila"><summary>${nv !== null ? `<span class="m-nv">${nv === 0 ? 'Evo' : 'Nv ' + nv}</span>` : ''}<span class="m-n">${esc(m.n)}</span><span class="m-t" style="--c:var(--t-${m.t})">${TIPOS[m.t] || m.t}</span></summary><div class="m-det"><span>${CATEG[m.c]}</span><span>Potencia ${m.p || '—'}</span><span>Precisión ${m.a ?? '—'}</span><span>PP ${m.pp}</span>${m.d ? `<p>${esc(m.d)}</p>` : ''}</div></details>`; }).join('') : '<p class="m-nota">Ningún movimiento coincide con esa búsqueda.</p>';
  };
  caja.querySelectorAll('.m-tabs button').forEach(b => b.onclick = () => { actual = b.dataset.k; ver(); });
  caja.querySelector('.m-buscar').oninput = e => { q = e.target.value.trim().toLowerCase(); ver(); };
  ver();
}
// Ficha
let vis = null, actual = null, shiny = false;
function abrir(e) {
  const d = info(e[2]); actual = d;
  $('f-n').textContent = e[0] + (e[3] ? ` (${e[3]})` : '');
  $('f-t').innerHTML = (d?.types || []).map(t => `<span style="--c:var(--t-${t})">${TIPOS[t]}</span>`).join('');
  $('f-d').innerHTML = d ? `<span>Altura ${(d.ht / 10).toFixed(1)} m</span><span>Peso ${(d.wt / 10).toFixed(1)} kg</span>` : '';
  $('f-p').textContent = d?.desc || 'Este Pokémon todavía no tiene datos en Cobblemon.';
  $('f-b').innerHTML = d ? [...STATS.map(([k, l]) => [l, d.stats[k], 255]), ['Total', total(d), 720]].map(([l, v, mx]) => `<div class="bar"><span>${l}</span><div class="pista"><i style="width:${Math.min(100, v / mx * 100)}%"></i></div><b>${v}</b></div>`).join('') : '';
  $('f-h').innerHTML = (d?.ab || []).map(a => `<div class="hab"><b>${esc(a.n)}${a.h ? ' (oculta)' : ''}</b><span>${esc(a.d)}</span></div>`).join('');
  movimientos(d);
  shiny = false; $('f-s').setAttribute('aria-pressed', 'false');
  $('ficha').showModal();
  $('f-c').parentElement.style.display = d?.m ? '' : 'none';
  if (d?.m) {
    (vis ? Promise.resolve() : import('./cobble-viewer.js').then(x => { vis = new x.CobbleViewer($('f-c'), { base }); }))
      .then(() => { vis.resize(); return vis.load(d.m); }).then(() => { vis.resize(); vis.start(); })
      .catch(() => { $('f-c').parentElement.style.display = 'none'; });
  }
}
$('f-s').onclick = e => { shiny = !shiny; e.currentTarget.setAttribute('aria-pressed', shiny); vis?.load(actual.m, shiny); };
$('f-x').onclick = () => $('ficha').close();
$('ficha').addEventListener('close', () => vis?.stop());
$('ficha').addEventListener('click', e => { if (e.target === $('ficha')) $('ficha').close(); });
$('buscar').addEventListener('input', e => { st.q = e.target.value.trim().toLowerCase(); pinta(); });
$('orden').addEventListener('change', e => { st.orden = e.target.value; pinta(); });

pestanas(); tipos(); pinta();
fetch(base + 'pokedex.json').then(r => r.json()).then(d => { dex = d; pinta(); }).catch(() => {
  const a = document.createElement('p'); a.className = 'aviso px'; a.textContent = 'No se pudieron cargar las imágenes y los stats. Recarga la página; si abriste el archivo directo, usa ver-en-local.bat.'; $('main').prepend(a);
});
fetch('liga-feed.json', { cache: 'no-store' }).then(r => r.json()).then(f => {
  if (f.temporada) { $('titulo').textContent = f.temporada.replace(/\s*·\s*/, ': '); }
  if (f.ultima_actualizacion) { $('novedad').hidden = false; $('novedad').textContent = 'Última novedad: ' + f.ultima_actualizacion; }
}).catch(() => { });
})();
