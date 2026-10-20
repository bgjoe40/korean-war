// 전략 지도 · 연대기 · 세력 현황
const COLORS = { K: FACTIONS.rok.color, N: FACTIONS.nk.color };
const TYPE_INFO = {
  land:  { name: '육전', cls: 't-land' },
  sea:   { name: '상륙·해상', cls: 't-sea' },
  event: { name: '사건', cls: 't-event' },
};

const fmt = (n) => n.toLocaleString('ko-KR');
const llOf = (p) => (Array.isArray(p) ? p : PLACES[p].ll);

const App = {
  idx: -1,
  autoTimer: null,
  zones: {},
  labels: {},
};

// 사건별 누적 거점 지배 상태 (개전 전: 38° 이북은 북한)
const CONTROL = (() => {
  const cur = {};
  for (const id in PLACES) if (!PLACES[id].nozone) cur[id] = PLACES[id].ll[0] >= 38 ? 'N' : 'K';
  return EVENTS.map((e) => {
    Object.assign(cur, e.ch);
    return { ...cur };
  });
})();

// 막대 그래프 기준 최댓값
const MAX = (() => {
  const m = { k: 0, u: 0, n: 0, c: 0 };
  for (const e of EVENTS) for (const k in m) m[k] = Math.max(m[k], e.f[k][0]);
  return m;
})();

function initMap() {
  const map = L.map('map', { zoomControl: true, minZoom: 5, maxZoom: 13, zoomSnap: 0.25 })
    .setView([38.3, 127.3], 6.75);
  const imagery = L.tileLayer('https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}', {
    maxZoom: 17, attribution: 'Tiles &copy; Esri',
  });
  const terrain = L.tileLayer('https://server.arcgisonline.com/ArcGIS/rest/services/World_Terrain_Base/MapServer/tile/{z}/{y}/{x}', {
    maxZoom: 17, maxNativeZoom: 13, attribution: 'Tiles &copy; Esri',
  });
  imagery.addTo(map);
  L.control.layers({ '위성 지형': imagery, '지형도': terrain }, null, { position: 'topright' }).addTo(map);
  map.attributionControl.setPrefix(false);

  App.map = map;
  App.gZones = L.layerGroup().addTo(map);
  App.gFront = L.layerGroup().addTo(map);
  App.gLabels = L.layerGroup().addTo(map);
  App.gRoutes = L.layerGroup().addTo(map);
  App.gUnits = L.featureGroup().addTo(map);
  // 부대 카드가 열려 있는 동안 하단 사건 카드를 흐리게 해 가리지 않게 한다
  const dim = (on) => ['eventCard', 'mapLegend'].forEach((id) => document.getElementById(id).classList.toggle('dim', on));
  App.gUnits.on('tooltipopen', () => dim(true));
  App.gUnits.on('tooltipclose', () => dim(false));
  App.gPulse = L.layerGroup().addTo(map);
  App.gFac = L.featureGroup().addTo(map);
  App.gFac.on('tooltipopen', () => dim(true));
  App.gFac.on('tooltipclose', () => dim(false));

  // 38선 기준선
  L.polyline(FRONTS.p38, { color: '#fff', weight: 1, opacity: 0.45, dashArray: '2 6', interactive: false }).addTo(map);
  L.marker([38.0, 124.95], { interactive: false, icon: L.divIcon({ className: '', iconSize: [0, 0], html: '<div class="p38-label">38°선</div>' }) }).addTo(map);

  // 낮은 배율에서는 연대·대대 이름표를 숨겨 겹침을 줄인다
  // 중대급은 더 확대했을 때만 보인다
  const zoomClass = () => {
    map.getContainer().classList.toggle('z-low', map.getZoom() < 8);
    map.getContainer().classList.toggle('z-nodetail', map.getZoom() < 9.5);
  };
  map.on('zoomend', zoomClass);
  map.on('zoomend', declutter);
  zoomClass();
  // 모바일: 지도를 누르면 열린 부대 카드를 닫는다
  map.on('click', closeCards);

  for (const id in PLACES) {
    const p = PLACES[id];
    if (!p.nozone) {
      // 화면 픽셀 기준 반경 — 확대해도 원이 화면을 덮지 않는다
      App.zones[id] = L.circleMarker(p.ll, {
        radius: p.major ? 20 : 12, stroke: false, fillOpacity: 0.3, className: 'control-zone', interactive: false,
      }).addTo(App.gZones);
    }
    App.labels[id] = L.marker(p.ll, { icon: L.divIcon({ className: '', html: '', iconSize: [0, 0] }), interactive: false, keyboard: false })
      .addTo(App.gLabels);
  }
}

function buildTimeline() {
  const el = document.getElementById('timeline');
  let lastPeriod = '';
  el.innerHTML = EVENTS.map((e, i) => {
    let h = '';
    if (e.period !== lastPeriod) { h += `<div class="period">${e.period}</div>`; lastPeriod = e.period; }
    const t = TYPE_INFO[e.type];
    const res = e.result === 'south' ? '<span class="tag win-joseon">국군·유엔군 우세</span>'
      : e.result === 'north' ? '<span class="tag win-japan">북한·중공군 우세</span>' : '';
    const bt = (EVENT_BATTLES[e.id] || []).length ? '<span class="tag battle" title="전투 전개 재생">⚔ 전투 재생</span>' : '';
    h += `<div class="ev" data-i="${i}">
      <span class="dot ${t.cls}"></span>
      <div class="ev-date">${e.date}</div>
      <div class="ev-title">${e.title}</div>
      <div class="ev-tags"><span class="tag">${t.name}</span>${res}${bt}</div>
    </div>`;
    return h;
  }).join('');
  el.addEventListener('click', (ev) => {
    const item = ev.target.closest('.ev');
    if (!item) return;
    stopAuto();
    const i = +item.dataset.i;
    select(i);
    // "⚔ 전투 재생" 태그를 누르면 바로 첫 번째 전투 재생
    if (ev.target.classList.contains('battle')) setTimeout(() => startBattle(EVENT_BATTLES[EVENTS[i].id][0]), 300);
  });
}

function select(i) {
  if (i < 0 || i >= EVENTS.length) return;
  if (Battle.active) { Battle.stop(true); restoreStrategic(); }
  const prevIdx = App.idx;
  App.idx = i;
  const e = EVENTS[i];

  document.querySelectorAll('.ev').forEach((n) => {
    const k = +n.dataset.i;
    n.classList.toggle('active', k === i);
    n.classList.toggle('past', k < i);
  });
  document.querySelector(`.ev[data-i="${i}"]`)?.scrollIntoView({ block: 'nearest', behavior: 'smooth' });

  renderControl(prevIdx);
  renderFront(e);
  renderRoutes(e);
  renderUnits(e);
  renderFacilities();
  renderPulse(e);
  renderEventCard(e);
  renderPanel(i);
  renderProgress(i);
  closeCards();

  flyToVisible(llOf(e.place), e.zoom || 7, { duration: 0.9 });
  declutter();
}

// 하단 사건 카드에 가리지 않도록 목표 지점을 카드 위쪽 빈 공간의 가운데로 보낸다
function flyToVisible(ll, zoom, opts) {
  const map = App.map;
  const card = document.getElementById('eventCard');
  const covered = card.classList.contains('min') ? card.offsetHeight : card.offsetHeight + 16;
  const dy = Math.min(covered, map.getSize().y * 0.5) / 2;
  map.flyTo(map.unproject(map.project(ll, zoom).add([0, dy]), zoom), zoom, opts);
}

// ── 겹침 정리: 화면 픽셀 기준으로 기호를 살짝 비키고, 겹치는 이름표는 우선순위가 낮은 것부터 숨긴다
// (숨긴 이름도 마우스를 올리거나 오른쪽 목록에서 볼 수 있다)
const NUDGE = [[0, 0], [16, 0], [-16, 0], [0, -16], [0, 16], [16, -16], [-16, -16], [16, 16], [-16, 16],
  [32, 0], [-32, 0], [0, -32], [0, 32], [32, -24], [-32, -24], [32, 24], [-32, 24]];
const LABEL_RANK = { AG: 1, C: 1, D: 2, B: 4, R: 4, AF: 4, NV: 4, HQ: 5, CP: 5, TC: 5, BS: 5, Bn: 6, Co: 7 };

function declutter() {
  if (!App.map) return;
  const root = App.map.getContainer();
  const syms = [...root.querySelectorAll('.unit-sym, .fac-sym')];
  // 1) 이전 결과 초기화 후 한 번에 측정
  for (const s of syms) { s.style.setProperty('--dx', '0px'); s.style.setProperty('--dy', '0px'); }
  root.querySelectorAll('.lbl-off').forEach((n) => n.classList.remove('lbl-off'));
  const visible = (r) => r.width > 0 && r.height > 0;
  const items = syms.map((s) => {
    const fac = s.classList.contains('fac-sym');
    const ico = s.querySelector(fac ? '.fi' : '.box').getBoundingClientRect();
    const lbl = s.querySelector(fac ? '.fn' : '.nm');
    const lv = fac ? null : [...s.classList].find((c) => c.startsWith('lv-')).slice(3);
    if (!visible(ico)) return null;
    // 제대 표시(XX 등)가 상자 위에 붙으므로 아이콘 영역을 위로 넓힌다
    return { s, fac, lbl, ico: { left: ico.left, right: ico.right, top: ico.top - (fac ? 0 : 10), bottom: ico.bottom }, rank: fac ? 5 : LABEL_RANK[lv] ?? 5 };
  }).filter(Boolean);
  const places = [...root.querySelectorAll('.place-label')].map((p) => ({ dot: p.querySelector('b').getBoundingClientRect(), txt: p.querySelector('span'), major: p.classList.contains('major') }));
  const routes = [...root.querySelectorAll('.route-label')];

  const placed = [];
  const hit = (r) => placed.some((b) => !(r.right <= b.left + 1 || b.right <= r.left + 1 || r.bottom <= b.top + 1 || b.bottom <= r.top + 1));
  const move = (r, dx, dy) => ({ left: r.left + dx, right: r.right + dx, top: r.top + dy, bottom: r.bottom + dy });

  // 2) 기호 위치: 지명 점을 피하고, 큰 부대부터 자리를 잡는다
  for (const p of places) if (visible(p.dot)) placed.push(p.dot);
  items.sort((a, b) => a.rank - b.rank);
  for (const it of items) {
    const off = NUDGE.find(([dx, dy]) => !hit(move(it.ico, dx, dy)));
    // 자리가 없는 작은 부대(연대 이하·시설)는 확대해서 공간이 생길 때까지 숨긴다. 군단·사단은 겹쳐도 남긴다.
    if (!off && it.rank >= 4) { it.s.classList.add('lbl-off'); it.hidden = true; continue; }
    [it.dx, it.dy] = off || [0, 0];
    placed.push(move(it.ico, it.dx, it.dy));
  }
  // 3) 이름표: 주요 지명 → 군단·사단 → 진격로 이름 → 연대·여단 등 → 일반 지명 → 대대·중대
  const labels = [];
  for (const p of places) if (p.txt) labels.push({ el: p.txt, rank: p.major ? 0 : 5.5 });
  for (const it of items) if (!it.hidden) labels.push({ el: it.lbl, rank: it.rank === 1 ? 1 : it.rank === 2 ? 2 : it.rank + 0.5, dx: it.dx, dy: it.dy });
  for (const el of routes) labels.push({ el, rank: 3 });
  labels.sort((a, b) => a.rank - b.rank);
  for (const lb of labels) {
    const r0 = lb.el.getBoundingClientRect();
    if (!visible(r0)) continue;
    const r = move(r0, lb.dx || 0, lb.dy || 0);
    if (hit(r)) lb.el.classList.add('lbl-off'); else placed.push(r);
  }
  for (const it of items) if (!it.hidden) { it.s.style.setProperty('--dx', `${it.dx}px`); it.s.style.setProperty('--dy', `${it.dy}px`); }
}

function renderControl(prevIdx) {
  const st = CONTROL[App.idx];
  const prev = prevIdx >= 0 ? CONTROL[prevIdx] : null;
  for (const id in PLACES) {
    const p = PLACES[id];
    if (p.nozone) {
      App.labels[id].setIcon(L.divIcon({ className: '', iconSize: [0, 0],
        html: `<div class="place-label"><b style="background:#eee"></b><span>${p.name}</span></div>` }));
      continue;
    }
    const c = COLORS[st[id]];
    App.zones[id].setStyle({ fillColor: c, fillOpacity: st[id] === 'N' ? 0.34 : 0.24 });
    const changed = prev && prev[id] !== st[id];
    App.labels[id].setIcon(L.divIcon({
      className: '', iconSize: [0, 0],
      html: `<div class="place-label ${p.major ? 'major' : ''} ${changed ? 'flash' : ''}"><b style="background:${c}"></b><span>${p.name}</span></div>`,
    }));
  }
}

function renderFront(e) {
  App.gFront.clearLayers();
  const pts = FRONTS[e.front];
  L.polyline(pts, { color: '#000', weight: 8, opacity: 0.4, interactive: false }).addTo(App.gFront);
  L.polyline(pts, { color: '#fde68a', weight: 4, opacity: 0.95, className: 'front-line', interactive: false }).addTo(App.gFront);
  const label = e.front === 'mdl' ? '휴전선 (군사분계선)' : e.front === 'p38' ? '전선 (38°선)' : '전선';
  L.marker(pts[pts.length - 1], { interactive: false, icon: L.divIcon({ className: '', iconSize: [0, 0],
    html: `<div class="front-label">${label}</div>` }) }).addTo(App.gFront);
}

function routePoints(r) {
  let pts = ROUTES[r.id].path;
  if (r.upto !== undefined) {
    const cut = typeof r.upto === 'number' ? r.upto : pts.indexOf(r.upto);
    pts = pts.slice(0, cut + 1);
  }
  return pts.map(llOf);
}

function renderRoutes(e) {
  App.gRoutes.clearLayers();
  for (const r of e.routes) {
    const def = ROUTES[r.id];
    const pts = routePoints(r);
    if (pts.length < 2) continue;
    const color = FACTIONS[def.faction].color;
    L.polyline(pts, { color: '#000', weight: 6, opacity: 0.35, interactive: false }).addTo(App.gRoutes);
    L.polyline(pts, { color, weight: 3.5, opacity: 0.95, className: 'route-line', interactive: false }).addTo(App.gRoutes);
    // 화살촉
    const a = App.map.project(pts[pts.length - 2], 7), b = App.map.project(pts[pts.length - 1], 7);
    const ang = Math.atan2(b.y - a.y, b.x - a.x) * 180 / Math.PI;
    L.marker(pts[pts.length - 1], {
      interactive: false,
      icon: L.divIcon({ className: '', iconSize: [0, 0],
        html: `<svg width="22" height="22" viewBox="-11 -11 22 22" style="position:absolute;left:-11px;top:-11px;transform:rotate(${ang}deg);overflow:visible">
          <path d="M10 0 L-6 -7 L-2 0 L-6 7 Z" fill="${color}" stroke="#000" stroke-width="1"/></svg>` }),
    }).addTo(App.gRoutes);
    if (def.label) {
      const mid = pts[Math.min(1, pts.length - 1)];
      L.marker(mid, { interactive: false, icon: L.divIcon({ className: '', iconSize: [0, 0],
        html: `<div class="route-label" style="background:${color}${def.faction === 'cn' ? ';color:#1b1408' : ''};transform:translate(6px,6px)">${def.label}</div>` }) }).addTo(App.gRoutes);
    }
  }
}

// 부대 기호: NATO 군대부호를 단순화 — 세력색 상자 위에 제대 표시(XX 사단, III 연대 …)
function unitHtml(u) {
  const [f, lv, name] = u;
  const size = lv === 'R' || lv === 'Bn' || lv === 'Co' ? 'minor' : lv === 'AG' || lv === 'C' ? 'big' : '';
  return `<div class="unit-sym lv-${lv} ${size}" style="--c:${FACTIONS[f].color}">
    <span class="ech">${ECHELON[lv].mark}</span><span class="box"></span><span class="nm">${name}</span></div>`;
}

// 사건의 기준일 (YYYY.MM.DD) — 시기별 지휘관·편제를 고르는 데 쓴다
function asOf(e) {
  if (e.asof) return e.asof;
  const m = e.date.match(/(\d{4})(?:\.(\d{2}))?(?:\.(\d{2}))?/);
  return `${m[1]}.${m[2] || '01'}.${m[3] || '01'}`;
}

// [[시작일, 값], …] 형식이면 기준일에 해당하는 값, 아니면 그대로
function atDate(v, date) {
  if (!Array.isArray(v) || !Array.isArray(v[0]) || !/^\d{4}/.test(v[0][0])) return v;
  let cur = v[0][1];
  for (const [d, val] of v) if (d <= date) cur = val;
  return cur;
}

const unknown = (s) => (!s || s === '—' ? '<span class="uc-unk">자료 확인 필요</span>' : s.replace(/^— /, '<span class="uc-unk">자료 확인 필요</span> '));

function unitCard(u, e) {
  const [f, lv, name, , , note] = u;
  const key = `${f}|${name}`;
  const o = ORBAT[ORBAT_ALIAS[key] || key] || {};
  const d = asOf(e);
  const org = atDate(o.org, d);
  return `<div class="uc" style="--c:${FACTIONS[f].color}">
    <div class="uc-head"><span class="uc-ech">${ECHELON[lv].mark}</span>
      <div><b>${atDate(o.full, d) || name}</b><small>${FACTIONS[f].name} · ${ECHELON[lv].name}</small></div></div>
    <dl>
      <dt>지휘관</dt><dd>${unknown(atDate(o.cmd, d))}</dd>
      <dt>병력</dt><dd>${unknown(atDate(o.str, d))}</dd>
      <dt>구성</dt><dd>${Array.isArray(org) ? `<ul>${org.map((x) => `<li>${x}</li>`).join('')}</ul>` : unknown(org)}</dd>
      <dt>주요 장비</dt><dd>${unknown(atDate(o.eq, d))}</dd>
      <dt>현재 상황</dt><dd class="uc-now">${note}</dd>
    </dl>
    ${o.desc ? `<p class="uc-desc">${o.desc}</p>` : ''}
    <div class="uc-foot"><span class="uc-hint">클릭하면 하위 부대·보유 무기${o.src ? ` · 📚 출처 ${o.src.length}건` : ''}</span>${e.date} 기준</div>
  </div>`;
}

// 좁은 화면(터치)에서는 마우스 오버 카드 대신 지도 아래쪽 시트에 카드를 띄운다
const isSmall = () => window.matchMedia('(max-width: 820px)').matches;

// onClick이 있으면 클릭 시 그것을 실행(부대 → 편제 모달), 없으면 카드를 연다(비행장·항구)
function bindCard(m, html, onClick) {
  m.cardHtml = html;
  if (!isSmall()) m.bindTooltip(html, { direction: 'auto', offset: [0, -10], className: 'unit-tip' });
  m.on('click', (ev) => { L.DomEvent.stopPropagation(ev); if (onClick) onClick(); else openCard(m); });
  return m;
}

function openCard(m) {
  if (!isSmall()) return m.openTooltip();
  document.getElementById('sheetBody').innerHTML = m.cardHtml;
  document.getElementById('unitSheet').classList.remove('hidden');
  document.getElementById('eventCard').classList.add('dim');
}

function closeCards() {
  document.getElementById('unitSheet').classList.add('hidden');
  document.getElementById('eventCard').classList.remove('dim');
  App.gUnits?.eachLayer((l) => l.closeTooltip?.());
  App.gFac?.eachLayer((l) => l.closeTooltip?.());
}

function renderUnits(e) {
  App.gUnits.clearLayers();
  App.unitMarkers = [];
  for (const u of UNITS[e.id] || []) {
    const [, , , la, ln] = u;
    const m = L.marker([la, ln], { icon: L.divIcon({ className: '', iconSize: [0, 0], html: unitHtml(u) }) });
    bindCard(m, unitCard(u, e), () => UnitModal.open(u, e)).addTo(App.gUnits);
    App.unitMarkers.push(m);
  }
}

// 비행장·항구: 연결된 거점의 그 시점 지배 상태로 색을 칠한다
function renderFacilities() {
  App.gFac.clearLayers();
  const st = CONTROL[App.idx];
  for (const fc of FACILITIES) {
    const side = fc.own === 'japan' ? 'K' : fc.own === 'china' ? 'N' : st[fc.own];
    const color = fc.own === 'japan' ? FACTIONS.un.color : fc.own === 'china' ? FACTIONS.cn.color : COLORS[side];
    const t = FAC_TYPE[fc.type];
    const holder = fc.own === 'japan' ? '유엔군 후방 (일본)' : fc.own === 'china' ? '공산군 후방 (만주)'
      : side === 'K' ? '국군·유엔군 관할' : '북한·중공군 점령';
    const m = L.marker(fc.ll, { icon: L.divIcon({ className: '', iconSize: [0, 0],
      html: `<div class="fac-sym" style="--c:${color}"><span class="fi">${t.mark}</span><span class="fn">${fc.code ? fc.code + ' ' : ''}${fc.name}</span></div>` }) });
    bindCard(m, `<div class="uc" style="--c:${color}">
        <div class="uc-head"><span class="uc-ech">${t.mark}</span><div><b>${fc.name}</b><small>${t.name}${fc.code ? ` · ${fc.code}` : ''}</small></div></div>
        <dl><dt>현재</dt><dd class="uc-now">${holder}</dd></dl><p class="uc-desc">${fc.desc}</p></div>`).addTo(App.gFac);
  }
}

function focusUnit(k) {
  const m = App.unitMarkers[k];
  if (!m) return;
  stopAuto();
  flyToVisible(m.getLatLng(), Math.max(App.map.getZoom(), 9), { duration: 0.7 });
  App.map.once('moveend', () => openCard(m));
}

function renderPulse(e) {
  App.gPulse.clearLayers();
  L.marker(llOf(e.place), { interactive: false, icon: L.divIcon({ className: '', iconSize: [0, 0], html: '<div class="ev-pulse"></div>' }) })
    .addTo(App.gPulse);
}

function renderEventCard(e) {
  const card = document.getElementById('eventCard');
  card.style.animation = 'none'; void card.offsetWidth; card.style.animation = '';
  // 전투 현장 확대 버튼: 세부 배치(연대·대대·중대)는 확대해야 보이므로 바로 갈 수 있게 한다
  const spots = (EVENT_BATTLES[e.id] || []).map((id) => `<button class="btn battle" data-battle="${id}">⚔ ${BATTLES[id].title} 전개 보기</button>`).join('')
    + (e.detail || []).map((d, k) => `<button class="btn primary" data-spot="${k}">🔍 ${d.name} 현장 확대</button>`).join('');
  card.innerHTML = `
    <div class="ec-head"><h2>${e.title}</h2><span class="ec-date">${e.date} · ${PLACES[e.place].name}</span>
      <button class="btn collapse" id="ecMin" title="접기/펼치기">${card.classList.contains('min') ? '펼치기' : '접기'}</button></div>
    <p>${e.desc}</p>
    ${spots ? `<div class="ec-actions"><span class="ec-hint">현장을 확대하면 연대·대대·중대 배치가 보입니다</span>${spots}
      <button class="btn" data-spot="all">↺ 전체 보기</button></div>` : ''}`;
  document.getElementById('ecMin').onclick = () => {
    card.classList.toggle('min');
    document.getElementById('ecMin').textContent = card.classList.contains('min') ? '펼치기' : '접기';
  };
  card.querySelectorAll('[data-battle]').forEach((b) => { b.onclick = () => startBattle(b.dataset.battle); });
  card.querySelectorAll('[data-spot]').forEach((b) => {
    b.onclick = () => {
      stopAuto();
      const d = e.detail[b.dataset.spot];
      if (d) flyToVisible(d.ll, d.zoom, { duration: 0.9 });
      else flyToVisible(llOf(e.place), e.zoom || 7, { duration: 0.9 });
    };
  });
}

// 상단 진행 막대: 전체 연대기 중 현재 위치
function renderProgress(i) {
  document.getElementById('progressFill').style.width = `${((i + 1) / EVENTS.length) * 100}%`;
  document.getElementById('progressText').textContent = `${i + 1} / ${EVENTS.length}`;
}

function statRow(label, val, max, prev, unit = '') {
  const pct = max ? Math.min(100, (val / max) * 100) : 0;
  let d = '';
  if (prev !== undefined && prev !== val) {
    const diff = val - prev;
    d = `<span class="delta ${diff > 0 ? 'up' : 'down'}">${diff > 0 ? '▲' : '▼'}</span>`;
  }
  return `<div class="stat"><span class="lbl">${label}</span><div class="bar"><div style="width:${pct}%"></div></div>
    <span class="val">${fmt(val)}${unit}${d}</span></div>`;
}

function facCard(key, fac, e, p, extra = '') {
  const [n, mo] = e.f[key];
  const pv = (k) => (p ? p[key][k] : undefined);
  const active = n > 0 || (p && p[key][0] > 0);
  return `<div class="card fac" style="--c:${fac.color}${active ? '' : ';opacity:.55'}">
      <div class="fac-head"><span class="fac-name"><i></i>${fac.name}</span>
        <span class="fac-strong">${n ? `${fmt(n)}<small style="font-size:11px;color:var(--muted)"> 명</small>` : '미참전'}</span></div>
      ${active ? statRow('병력', n, MAX[key], pv(0), '명') + statRow('사기', mo, 100, pv(1), '%') : ''}
      ${extra}
      <div class="cmd"><b>지휘</b> ${e.c[key] || '—'}</div>
      ${e.n[key] ? `<div class="note">● ${e.n[key]}</div>` : ''}
    </div>`;
}

function renderPanel(i) {
  const e = EVENTS[i];
  const p = i > 0 ? EVENTS[i - 1].f : null;
  const st = CONTROL[i];
  const cnt = { K: 0, N: 0 };
  for (const id in st) cnt[st[id]]++;
  const total = cnt.K + cnt.N;
  const own = (side) => statRow('지배 거점', cnt[side], total, undefined, `/${total}`);

  document.getElementById('panel').innerHTML = `
    <h3>세력 현황 <small>${e.date}</small></h3>
    <div class="side-head south">국군 · 유엔군</div>
    ${facCard('k', FACTIONS.rok, e, p, own('K'))}
    ${facCard('u', FACTIONS.un, e, p)}
    <div class="side-head north">북한군 · 중공군</div>
    ${facCard('n', FACTIONS.nk, e, p, own('N'))}
    ${facCard('c', FACTIONS.cn, e, p)}
    ${unitList(e)}
    ${weaponList(e)}
    <h3>역사적 의의</h3>
    <div class="card meaning">${e.meaning}</div>
    <p class="disclaimer">※ 날짜는 양력 기준입니다. 병력·사기 수치는 자료마다 차이가 큰 추정치를 교육용으로 단순화한 값이며, 지도의 전선과 세력 범위는 주요 도시 기준의 개략적인 표시입니다. 부대 위치는 군사편찬연구소 전사 등을 바탕으로 한 개략 위치이며, 연대·대대급 일부는 추정입니다.</p>`;
}

// 오른쪽 패널: 세력별 부대 배치 목록 (클릭하면 지도에서 해당 부대로 이동)
function unitList(e) {
  const list = UNITS[e.id] || [];
  if (!list.length) return '';
  const groups = ['rok', 'un', 'nk', 'cn', 'su'].map((f) => {
    const rows = list.map((u, k) => [u, k]).filter(([u]) => u[0] === f);
    if (!rows.length) return '';
    return `<div class="ul-group" style="--c:${FACTIONS[f].color}"><div class="ul-head"><i></i>${FACTIONS[f].name}</div>
      ${rows.map(([u, k]) => {
        const key = `${u[0]}|${u[2]}`;
        const cmd = atDate((ORBAT[ORBAT_ALIAS[key] || key] || {}).cmd, asOf(e));
        return `<div class="ul-row" data-k="${k}"><span class="ul-ech">${ECHELON[u[1]].mark}</span>
        <span class="ul-name">${u[2]}${cmd && cmd !== '—' && !cmd.startsWith('— ') ? `<em>${cmd}</em>` : ''}<small>${u[5]}</small></span>
        <button class="ul-open" data-open="${k}" title="하위 부대·보유 무기 보기">편제 ▸</button></div>`;
      }).join('')}</div>`;
  }).join('');
  return `<h3>부대 배치 <small>${list.length}개 부대 · 클릭하면 위치로 이동</small></h3><div class="card units">${groups}</div>`;
}

// 오른쪽 패널: 이 사건에 등장한 무기 (누르면 무기도감 상세)
function weaponList(e) {
  const ws = Codex.forEvent(e.id);
  if (!ws.length) return '';
  // 실제 사진 썸네일(위키미디어 공용). 불러오지 못하면 실루엣으로 대신한다.
  const thumb = (w) => {
    const m = (typeof WEAPON_MEDIA !== 'undefined' && WEAPON_MEDIA[w.id]) || {};
    const img = m.img ? `<img src="${m.img.replace(/\/\d+px-/, '/120px-')}" alt="" loading="lazy" referrerpolicy="no-referrer" onerror="this.remove()">` : '';
    return `<span class="wp-pic">${img}${Codex.svg(w)}</span>`;
  };
  return `<h3>등장 무기 <small>누르면 무기도감</small></h3><div class="card wp-list">${ws.map((w) =>
    `<button class="wp-chip" data-wp="${w.id}" style="--c:${FACTIONS[w.f[0]].color}" title="${w.name}">${thumb(w)}<span class="wp-name">${w.name}</span></button>`).join('')}</div>`;
}

// ── 전투 재생 모드: 전략 지도 레이어를 숨기고 전투 재생 엔진에 지도를 넘긴다
const STRATEGIC_LAYERS = ['gZones', 'gFront', 'gLabels', 'gRoutes', 'gUnits', 'gPulse', 'gFac'];
function startBattle(id) {
  stopAuto();
  closeCards();
  if (Battle.active) Battle.stop(true);
  for (const g of STRATEGIC_LAYERS) App.map.removeLayer(App[g]);
  for (const elId of ['eventCard', 'mapLegend']) document.getElementById(elId).classList.add('hidden');
  Battle.start(BATTLES[id], App.map, endBattle);
}

function restoreStrategic() {
  for (const g of STRATEGIC_LAYERS) {
    if (g === 'gUnits' && !document.getElementById('toggleUnits').checked) continue;
    if (g === 'gFac' && !document.getElementById('toggleFac').checked) continue;
    App[g].addTo(App.map);
  }
  for (const elId of ['eventCard', 'mapLegend']) document.getElementById(elId).classList.remove('hidden');
}

function endBattle() {
  restoreStrategic();
  const i = App.idx;
  App.idx = -1;
  select(i);
}

// ── 연대기 자동 재생
function stopAuto() {
  if (!App.autoTimer) return;
  clearInterval(App.autoTimer);
  App.autoTimer = null;
  const b = document.getElementById('btnAuto');
  b.innerHTML = '▶ <span class="hide-sm">연대기 </span>재생';
  b.classList.remove('on');
}
function toggleAuto() {
  if (App.autoTimer) return stopAuto();
  const b = document.getElementById('btnAuto');
  b.innerHTML = '⏸ <span class="hide-sm">재생 </span>중지';
  b.classList.add('on');
  if (App.idx >= EVENTS.length - 1) select(0);
  App.autoTimer = setInterval(() => {
    if (App.idx >= EVENTS.length - 1) return stopAuto();
    select(App.idx + 1);
  }, 6000);
}

document.addEventListener('DOMContentLoaded', () => {
  initMap();
  buildTimeline();
  document.getElementById('btnPrev').onclick = () => { stopAuto(); select(App.idx - 1); };
  document.getElementById('btnNext').onclick = () => { stopAuto(); select(App.idx + 1); };
  document.getElementById('btnAuto').onclick = toggleAuto;
  document.getElementById('panel').addEventListener('click', (ev) => {
    const openBtn = ev.target.closest('.ul-open');
    if (openBtn) { stopAuto(); UnitModal.open(UNITS[EVENTS[App.idx].id][+openBtn.dataset.open], EVENTS[App.idx]); return; }
    const row = ev.target.closest('.ul-row');
    if (row) focusUnit(+row.dataset.k);
    const wp = ev.target.closest('.wp-chip');
    if (wp) { stopAuto(); Codex.open(wp.dataset.wp); }
  });
  document.getElementById('btnCodex').onclick = () => { stopAuto(); Codex.open(); };
  document.getElementById('toggleUnits').onchange = (ev) => {
    if (ev.target.checked) App.gUnits.addTo(App.map); else App.map.removeLayer(App.gUnits);
    declutter();
  };
  document.getElementById('toggleFac').onchange = (ev) => {
    if (ev.target.checked) App.gFac.addTo(App.map); else App.map.removeLayer(App.gFac);
    declutter();
  };
  document.getElementById('toggleMinor').onchange = (ev) => {
    App.map.getContainer().classList.toggle('hide-minor', !ev.target.checked);
    declutter();
  };
  document.getElementById('sheetClose').onclick = closeCards;
  // 좁은 화면에서는 사건 카드를 접은 채로 시작해 지도를 가리지 않게 한다
  if (isSmall()) document.getElementById('eventCard').classList.add('min');
  document.addEventListener('keydown', (ev) => {
    // 무기도감이 열려 있으면 지도 단축키를 막고 Esc로만 닫는다 (검색창 입력 보호)
    if (Codex.isOpen()) { if (ev.key === 'Escape') Codex.close(); return; }
    if (UnitModal.isOpen()) { if (ev.key === 'Escape') UnitModal.close(); return; }
    if (ev.target.matches('input, textarea, select')) return;
    if (Battle.active) {
      if (ev.code === 'Space') { ev.preventDefault(); Battle.toggle(); }
      if (ev.key === 'Escape') Battle.stop(false);
      if (ev.key === 'ArrowRight') Battle.step(1);
      if (ev.key === 'ArrowLeft') Battle.step(-1);
      return;
    }
    if (ev.key === 'ArrowDown' || ev.key === 'ArrowRight') { ev.preventDefault(); stopAuto(); select(App.idx + 1); }
    if (ev.key === 'ArrowUp' || ev.key === 'ArrowLeft') { ev.preventDefault(); stopAuto(); select(App.idx - 1); }
    if (ev.code === 'Space') { ev.preventDefault(); toggleAuto(); }
  });
  select(0);
});
