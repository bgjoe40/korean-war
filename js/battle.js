// 전투 재생 엔진: 단계(phase)별 부대 상태를 보간해 전투 전개를 애니메이션으로 보여 준다.
// (C:\kopens\workspace\temp3\history 의 전투 재생 엔진을 6·25 전쟁용으로 옮기고 항공 활동을 더했다)
// - 항공기(t:'air')는 단계마다 나타났다 사라지며(v), 날아가는 방향으로 기수를 돌린다.
// - 사격 종류에 폭격·네이팜·기총소사·공중 보급·의무 후송을 더했다.
const Battle = (() => {
  const FIRE_STYLE = {
    rifle:  { color: '#f1f5f9', weight: 1.4, cls: 'fire-gun', boom: 'small' },
    mg:     { color: '#ffd27a', weight: 1.6, cls: 'fire-gun', boom: 'small' },
    art:    { color: '#ff8a3d', weight: 2.6, cls: 'fire-cannon', boom: '' },
    tank:   { color: '#ffb347', weight: 2.6, cls: 'fire-cannon', boom: '' },
    ship:   { color: '#ff8a3d', weight: 3, cls: 'fire-cannon', boom: 'big' },
    bomb:   { color: '#ffe08a', weight: 2, cls: 'fire-bomb', boom: 'big' },
    napalm: { color: '#ff5a1f', weight: 3, cls: 'fire-fire', boom: 'napalm' },
    strafe: { color: '#fff3a0', weight: 1.6, cls: 'fire-gun', boom: 'small' },
    drop:   { color: '#e5e7eb', weight: 1.6, cls: 'fire-drop', boom: 'chute' },
    evac:   { color: '#86efac', weight: 1.6, cls: 'fire-drop', boom: '' },
    melee:  { color: '#ffffff', weight: 2.2, cls: 'fire-melee', boom: 'smoke' },
  };
  const AIR_FIRE = new Set(['bomb', 'napalm', 'strafe', 'drop', 'evac']);

  let B, map, onExit, layer, fxLayer;
  let ids = [], markers = {}, states = [], starts = [], total = 0;
  let t = 0, playing = false, speed = 1, raf = 0, lastTs = 0, curPhase = -1, ended = false;
  let fireLines = [], movePaths = [], lastBoom = 0, lastPanel = 0;
  const heading = {};

  const $ = (id) => document.getElementById(id);
  const ease = (x) => (x < 0.5 ? 2 * x * x : 1 - Math.pow(-2 * x + 2, 2) / 2);
  const fmt = (n) => Math.round(n).toLocaleString('ko-KR');
  const unitOf = (u) => u.unit || (u.t === 'ship' ? '척' : u.t === 'air' || u.t === 'armor' ? '대' : '명');

  // ── 부대 아이콘 (SVG)
  function svgIcon(u) {
    const c = FACTIONS[u.f].color;
    const S = (body, cls = '') => `<svg class="ico ${cls}" viewBox="0 0 40 40">${body}</svg>`;
    const box = (inner) => `<rect x="5" y="12" width="30" height="18" rx="2" fill="${c}" stroke="#000" stroke-width="1.2"/>${inner}`;
    switch (u.t) {
      case 'armor': // 전차: 상자 안 궤도 모양
        return S(box('<rect x="10" y="16.5" width="20" height="9" rx="4.5" fill="none" stroke="#fff" stroke-width="2"/>'));
      case 'art': // 포병: 상자 안 점
        return S(box('<circle cx="20" cy="21" r="3.6" fill="#fff"/>'));
      case 'hq':
        return S(`<rect x="7" y="18" width="26" height="15" rx="2" fill="${c}" stroke="#000" stroke-width="1.2"/>
          <path d="M20 3 L20 18" stroke="#eee" stroke-width="1.8"/><path d="M21 3 L34 7.5 L21 12 Z" fill="${c}" stroke="#fff" stroke-width=".8"/>
          <circle cx="20" cy="3" r="2" fill="#ffd166"/><path d="M12 25 h16" stroke="#fff" stroke-width="2"/>`);
      case 'ship':
        return S(`<path d="M3 24 L37 24 L31 32 L9 32 Z" fill="${c}" stroke="#000" stroke-width="1.2"/>
          <rect x="13" y="17" width="12" height="7" fill="#3b4250" stroke="#000" stroke-width=".8"/><rect x="17" y="11" width="4" height="6" fill="#3b4250"/>
          <path d="M25 20 L34 18" stroke="#ddd" stroke-width="1.4"/>`);
      case 'air': { // 항공기: 위에서 본 모양, 동쪽(오른쪽)을 향해 그려 두고 진행 방향으로 회전
        const body = u.ac === 'jet'
          ? `<path d="M36 20 L28 18 L18 9 L15 9 L20 18 L9 18 L6 14 L4 14 L5 20 L4 26 L6 26 L9 22 L20 22 L15 31 L18 31 L28 22 Z" fill="${c}" stroke="#000" stroke-width="1"/>`
          : u.ac === 'cargo' || u.ac === 'bomber'
            ? `<path d="M37 20 L33 18.5 L22 18 L20 5 L16 5 L16 18 L8 18.5 L6 14 L3 14 L4 20 L3 26 L6 26 L8 21.5 L16 22 L16 35 L20 35 L22 22 L33 21.5 Z" fill="${c}" stroke="#000" stroke-width="1"/>`
            : u.ac === 'heli'
              ? `<ellipse cx="22" cy="20" rx="8" ry="5" fill="${c}" stroke="#000" stroke-width="1"/><path d="M14 20 L4 20" stroke="${c}" stroke-width="2.5"/>
                 <path d="M8 6 L36 34 M36 6 L8 34" stroke="#ddd" stroke-width="1.6"/>`
              : `<path d="M35 20 L30 18 L22 17.5 L20 6 L16 6 L16 17.5 L9 18 L6 15 L4 15 L5 20 L4 25 L6 25 L9 22 L16 22.5 L16 34 L20 34 L22 22.5 L30 22 Z" fill="${c}" stroke="#000" stroke-width="1"/>
                 <path d="M36 15 L36 25" stroke="#ddd" stroke-width="1.6"/>`;
        return S(body, 'air-ico');
      }
      case 'hill': // 고지·거점
        return S(`<path d="M3 33 L20 7 L37 33 Z" fill="#6b5e45" stroke="#000" stroke-width="1.2"/><path d="M20 7 L20 1" stroke="#eee" stroke-width="1.2"/>
          <path d="M20.5 1 L28 3.5 L20.5 6 Z" fill="${c}"/>`);
      case 'truck':
        return S(box('<path d="M10 25 h20" stroke="#fff" stroke-width="2"/><circle cx="13" cy="27" r="2" fill="#fff"/><circle cx="27" cy="27" r="2" fill="#fff"/>'));
      default: // 보병: 상자 안 X
        return S(box('<path d="M5 12 L35 30 M35 12 L5 30" stroke="#fff" stroke-width="2"/>'));
    }
  }

  // ── 단계별 상태 계산 (v: 화면에 보이는지 — 항공기는 기본적으로 숨겨 둔다)
  function buildStates() {
    ids = Object.keys(B.units);
    const s0 = {};
    for (const id of ids) {
      const u = B.units[id];
      s0[id] = { lat: u.p[0], lng: u.p[1], s: u.s, v: u.v ?? u.t !== 'air' };
    }
    states = [s0];
    B.phases.forEach((ph, k) => {
      if (k === 0) return;
      const prev = states[k - 1], nxt = {};
      for (const id of ids) nxt[id] = { ...prev[id] };
      for (const id in ph.u || {}) {
        const [la, ln, s, v] = ph.u[id];
        if (la !== null) { nxt[id].lat = la; nxt[id].lng = ln; }
        if (s !== undefined && s !== null) nxt[id].s = s;
        if (v !== undefined) nxt[id].v = v;
      }
      // 이 단계에서 사격하는 항공기는 자동으로 보이게 한다
      for (const [from] of ph.fire || []) if (B.units[from].t === 'air') nxt[from].v = true;
      states.push(nxt);
    });
    // 다음 단계에서 다시 언급되지 않은 항공기는 돌아간 것으로 본다
    for (let k = 1; k < states.length; k++) {
      for (const id of ids) {
        if (B.units[id].t !== 'air') continue;
        const ph = B.phases[k];
        const named = (ph.u && ph.u[id]) || (ph.fire || []).some(([a]) => a === id);
        if (!named) states[k][id].v = false;
        else if (!(ph.u && ph.u[id] && ph.u[id][3] === false)) states[k][id].v = true;
      }
    }
    starts = [];
    total = 0;
    for (const ph of B.phases) { starts.push(total); total += ph.dur; }
  }

  function phaseAt(time) {
    for (let k = starts.length - 1; k >= 0; k--) if (time >= starts[k]) return k;
    return 0;
  }

  function computeAt(time) {
    const k = phaseAt(time);
    const local = Math.min(1, (time - starts[k]) / B.phases[k].dur);
    const out = {};
    if (k === 0) {
      for (const id of ids) out[id] = { ...states[0][id], o: states[0][id].v ? 1 : 0 };
      return { k, local, st: out };
    }
    const a = states[k - 1], b = states[k];
    const pm = ease(Math.min(1, local / 0.7));
    const ps = Math.min(1, local / 0.9);
    for (const id of ids) {
      const air = B.units[id].t === 'air';
      // 항공기는 이 단계 동안 계속 비행하도록 이동을 단계 전체에 펼친다
      const pmove = air ? local : pm;
      out[id] = {
        lat: a[id].lat + (b[id].lat - a[id].lat) * pmove,
        lng: a[id].lng + (b[id].lng - a[id].lng) * pmove,
        s: a[id].s + (b[id].s - a[id].s) * ps,
        v: b[id].v,
        o: b[id].v ? (a[id].v ? 1 : Math.min(1, local * 4)) : (a[id].v ? Math.max(0, 1 - local * 4) : 0),
      };
    }
    return { k, local, st: out };
  }

  // ── 렌더링
  function createMarkers() {
    markers = {};
    for (const id of ids) {
      const u = B.units[id];
      const big = u.t === 'hq' || u.t === 'hill';
      const html = `<div class="unit ${big ? 'big' : ''} ${u.t === 'air' ? 'air' : ''}" style="--c:${FACTIONS[u.f].color}">
        ${svgIcon(u)}${u.s ? '<div class="hp"><div></div></div>' : ''}
        <div class="tag2">${u.n}${u.s ? ` <b></b>` : ''}</div></div>`;
      const m = L.marker(u.p, { icon: L.divIcon({ className: '', html, iconSize: [0, 0] }), keyboard: false,
        zIndexOffset: u.t === 'hill' ? -500 : u.t === 'air' ? 800 : 0 }).addTo(layer);
      m.bindTooltip(`<b>${u.n}</b>${u.cmd ? `<br>지휘: ${u.cmd}` : ''}<br>${FACTIONS[u.f].name}`, { direction: 'top', offset: [0, -22] });
      markers[id] = m;
    }
  }

  // 항공기 기수 방향: 이번 단계의 출발점 → 도착점 (화면 좌표)
  function airHeading(id, k) {
    if (k > 0) {
      const a = states[k - 1][id], b = states[k][id];
      if (Math.abs(a.lat - b.lat) + Math.abs(a.lng - b.lng) > 1e-5) {
        const pa = map.latLngToLayerPoint([a.lat, a.lng]), pb = map.latLngToLayerPoint([b.lat, b.lng]);
        heading[id] = Math.atan2(pb.y - pa.y, pb.x - pa.x) * 180 / Math.PI;
      }
    }
    return heading[id] ?? 0;
  }

  function updateMarkers(st, k) {
    for (const id of ids) {
      const u = B.units[id], s = st[id], m = markers[id];
      m.setLatLng([s.lat, s.lng]);
      const el = m.getElement();
      if (!el) continue;
      const box = el.querySelector('.unit');
      box.style.opacity = s.o;
      box.style.pointerEvents = s.o < 0.2 ? 'none' : '';
      if (u.t === 'air') el.querySelector('.ico').style.transform = `rotate(${airHeading(id, k)}deg)`;
      if (!u.s) continue;
      const max = maxStrength(id);
      el.querySelector('.tag2 b').textContent = fmt(s.s) + (unitOf(u) === '명' ? '' : unitOf(u));
      el.querySelector('.hp > div').style.width = `${Math.max(0, (s.s / max) * 100)}%`;
      box.classList.toggle('dead', s.s < 0.5);
    }
  }

  const maxCache = {};
  function maxStrength(id) {
    if (maxCache[id] === undefined) maxCache[id] = Math.max(...states.map((s) => s[id].s), 1);
    return maxCache[id];
  }

  function clearPhaseFx() {
    fireLines.forEach((f) => layer.removeLayer(f.line));
    movePaths.forEach((p) => layer.removeLayer(p));
    fireLines = [];
    movePaths = [];
  }

  function enterPhase(k) {
    curPhase = k;
    clearPhaseFx();
    const ph = B.phases[k];
    // 이동 경로 (항공기는 비행 경로를 점선으로)
    if (k > 0) {
      for (const id of ids) {
        const a = states[k - 1][id], b = states[k][id];
        if (!b.v && !a.v) continue;
        if (Math.abs(a.lat - b.lat) + Math.abs(a.lng - b.lng) > 0.0003) {
          const air = B.units[id].t === 'air';
          movePaths.push(L.polyline([[a.lat, a.lng], [b.lat, b.lng]], {
            color: FACTIONS[B.units[id].f].color, weight: air ? 1.4 : 2, opacity: air ? 0.45 : 0.55,
            className: air ? 'move-path air-path' : 'move-path', interactive: false,
          }).addTo(layer));
        }
      }
    }
    for (const [from, to, kind] of ph.fire || []) {
      const fs = FIRE_STYLE[kind] || FIRE_STYLE.rifle;
      const line = L.polyline([[0, 0], [0, 0]], { color: fs.color, weight: fs.weight, opacity: 0, className: fs.cls, interactive: false }).addTo(layer);
      fireLines.push({ from, to, kind, line });
    }
    // 해설
    $('narrTime').textContent = ph.t;
    $('narrTitle').textContent = ph.title;
    $('narrStep').textContent = `${k + 1} / ${B.phases.length} 단계`;
    const tx = $('narrText');
    tx.textContent = ph.text;
    tx.classList.remove('fade'); void tx.offsetWidth; tx.classList.add('fade');
    const q = $('narrQuote');
    q.classList.toggle('hidden', !ph.quote);
    q.textContent = ph.quote || '';
    const air = (ph.fire || []).some(([, , kd]) => AIR_FIRE.has(kd)) || ids.some((id) => B.units[id].t === 'air' && states[k][id].v);
    $('narrAir').classList.toggle('hidden', !air);
    document.querySelectorAll('#phaseList li').forEach((li, i) => li.classList.toggle('cur', i === k));
  }

  function updateFire(st, local, now) {
    const active = local > 0.08 && local < 0.97;
    for (const f of fireLines) {
      const a = st[f.from], b = st[f.to];
      const alive = (a.s > 0.5 || !B.units[f.from].s) && a.o > 0.5;
      f.line.setLatLngs([[a.lat, a.lng], [b.lat, b.lng]]);
      f.line.setStyle({ opacity: active && alive ? 0.9 : 0 });
    }
    if (!active || !fireLines.length || !playing) return;
    if (now - lastBoom < 230 / Math.sqrt(speed)) return;
    lastBoom = now;
    const f = fireLines[Math.floor(Math.random() * fireLines.length)];
    const tgt = st[f.to];
    if ((st[f.from].s < 0.5 && B.units[f.from].s) || st[f.from].o < 0.5) return;
    const kind = FIRE_STYLE[f.kind].boom;
    if (!kind && f.kind === 'evac') return;
    const jx = (Math.random() - 0.5) * 30, jy = (Math.random() - 0.5) * 24;
    const bm = L.marker([tgt.lat, tgt.lng], { interactive: false, icon: L.divIcon({ className: '', iconSize: [0, 0],
      html: `<div class="boom ${kind}" style="translate:${jx}px ${jy}px"></div>` }) }).addTo(fxLayer);
    setTimeout(() => fxLayer.removeLayer(bm), 1600);
    if (f.kind === 'drop' || f.kind === 'evac') return;
    const el = markers[f.to].getElement()?.querySelector('.unit');
    if (el) { el.classList.remove('hit'); void el.offsetWidth; el.classList.add('hit'); }
  }

  // ── 오른쪽 패널
  function buildPanel() {
    const facs = [...new Set(ids.filter((id) => counted(id)).map((id) => B.units[id].f))];
    const airs = ids.filter((id) => B.units[id].t === 'air');
    $('panel').innerHTML = `
      <h3>⚔ ${B.title} <small>${B.date}</small></h3>
      <div class="card bt-result" id="btResult">전투 진행 중…</div>
      ${B.why ? `<h3>승패의 이유 <small>왜 이기고 졌을까?</small></h3><div class="card why">${B.why.map(([k, v]) => `<div><b>${k}</b><span>${v}</span></div>`).join('')}</div>` : ''}
      <h3>병력 비교 <small>지상 병력</small></h3>
      <div class="card" id="btForces">${facs.map((f) => `<div class="force-row" data-f="${f}" style="--c:${FACTIONS[f].color}">
        <span><b style="color:${FACTIONS[f].color}">■</b> ${FACTIONS[f].name}</span><span class="val"></span><div class="bar"><div></div></div></div>`).join('')}</div>
      ${airs.length ? `<h3>항공 활동 <small>${B.airNote || '전투에 나온 항공기'}</small></h3><div class="card unit-list">${airs.map((id) => unitRow(id, false)).join('')}</div>` : ''}
      <h3>부대 현황 <small>아이콘을 누르면 무기도감</small></h3>
      <div class="card unit-list" id="btUnits">${ids.filter((id) => B.units[id].s && B.units[id].t !== 'air').map((id) => unitRow(id, true)).join('')}</div>
      <h3>전개 단계</h3>
      <div class="card"><ol class="phase-list" id="phaseList">${B.phases.map((p, i) => `<li data-k="${i}"><span>${p.t}</span>${p.title}</li>`).join('')}</ol></div>
      ${B.sources ? `<h3>출처 <small>전개 재구성에 쓴 자료</small></h3><ul class="um-src">${B.sources.map((s) => `<li><a href="${s.url}" target="_blank" rel="noopener noreferrer">${new URL(s.url).hostname.replace(/^www\./, '')} ↗</a><span>${s.fact}</span></li>`).join('')}</ul>` : ''}
      <p class="disclaimer">※ 부대 위치와 병력 변화는 기록을 바탕으로 전개 과정을 이해하기 쉽게 재구성한 것으로, 실제 배치·시각·수치는 자료마다 다릅니다. 항공기는 활동을 보여 주기 위한 표시이며 실제 편대 수와 다릅니다.</p>`;
    $('phaseList').onclick = (ev) => {
      const li = ev.target.closest('li');
      if (li) seek(starts[+li.dataset.k] + 0.001);
    };
    $('panel').querySelectorAll('[data-wp]').forEach((b) => { b.onclick = () => { setPlaying(false); Codex.open(b.dataset.wp); }; });
  }

  function unitRow(id, withVal) {
    const u = B.units[id];
    return `<div class="unit-item" data-id="${id}" style="--c:${FACTIONS[u.f].color}">
      <button class="u-ico" ${u.wp ? `data-wp="${u.wp}" title="무기도감에서 보기"` : 'disabled'}>${svgIcon(u)}</button>
      <span class="u-name">${u.n}${u.cmd ? `<small>${u.cmd}</small>` : ''}</span><span class="val">${withVal ? '' : (u.s ? `${fmt(u.s)}${unitOf(u)}` : '')}</span></div>`;
  }

  // 병력 합계에 넣을 부대: 사람 수로 센 지상 부대 (nc 표시 부대는 제외)
  function counted(id) {
    const u = B.units[id];
    return u.s && !u.nc && unitOf(u) === '명';
  }

  function updatePanel(st) {
    const sum = {}, init = {};
    for (const id of ids) {
      if (!counted(id)) continue;
      const f = B.units[id].f;
      sum[f] = (sum[f] || 0) + st[id].s;
      init[f] = (init[f] || 0) + states[0][id].s;
    }
    const maxInit = Math.max(...Object.values(init), 1);
    document.querySelectorAll('#btForces .force-row').forEach((row) => {
      const f = row.dataset.f;
      const cur = sum[f] || 0, ini = init[f] || 0;
      const loss = ini - cur;
      row.querySelector('.val').innerHTML = `${fmt(cur)}명${loss >= 1 ? ` <span class="delta down">−${fmt(loss)}</span>` : ''}`;
      row.querySelector('.bar > div').style.width = `${(cur / maxInit) * 100}%`;
    });
    document.querySelectorAll('#btUnits .unit-item').forEach((row) => {
      const id = row.dataset.id, u = B.units[id];
      row.querySelector('.val').textContent = fmt(st[id].s) + unitOf(u);
      row.classList.toggle('dead', st[id].s < 0.5);
    });
  }

  // ── 재생 루프
  function render(now = performance.now()) {
    const { k, local, st } = computeAt(Math.min(t, total - 1e-6));
    if (k !== curPhase) enterPhase(k);
    updateMarkers(st, k);
    updateFire(st, local, now);
    if (now - lastPanel > 120) { lastPanel = now; updatePanel(st); }
    $('scrubFill').style.width = `${(t / total) * 100}%`;
    const done = t >= total;
    if (done !== ended) {
      ended = done;
      $('btResult').innerHTML = done ? `<b style="color:var(--gold)">결과</b><br>${B.result}` : '전투 진행 중…';
    }
  }

  function loop(ts) {
    const dt = lastTs ? (ts - lastTs) / 1000 : 0;
    lastTs = ts;
    if (playing) {
      t = Math.min(total, t + dt * speed);
      if (t >= total) setPlaying(false);
    }
    render(ts);
    raf = requestAnimationFrame(loop);
  }

  function setPlaying(v) {
    playing = v;
    $('bPlay').textContent = v ? '⏸' : '▶';
  }

  function seek(time) {
    t = Math.max(0, Math.min(total, time));
    curPhase = -1;
    render();
  }

  function step(dir) {
    const k = phaseAt(Math.min(t, total - 1e-6));
    if (dir > 0) seek(k + 1 < starts.length ? starts[k + 1] + 0.001 : total);
    else {
      const into = t - starts[k];
      seek(into > 1.2 || k === 0 ? starts[k] + 0.001 : starts[k - 1] + 0.001);
    }
  }

  function toggle() {
    if (!playing && t >= total) seek(0);
    setPlaying(!playing);
  }

  function bindControls() {
    $('bPlay').onclick = toggle;
    $('bRestart').onclick = () => { seek(0); setPlaying(true); };
    $('bPrevPh').onclick = () => step(-1);
    $('bNextPh').onclick = () => step(1);
    $('bSpeed').onchange = (e) => { speed = +e.target.value; };
    $('bExit').onclick = () => stop(false);
    $('scrub').onclick = (e) => {
      const r = e.currentTarget.getBoundingClientRect();
      seek(((e.clientX - r.left) / r.width) * total);
    };
  }

  function start(battle, theMap, exitCb) {
    B = battle; map = theMap; onExit = exitCb;
    for (const k in maxCache) delete maxCache[k];
    for (const k in heading) delete heading[k];
    buildStates();
    layer = L.layerGroup().addTo(map);
    fxLayer = L.layerGroup().addTo(map);
    for (const [la, ln, text] of B.labels || []) {
      L.marker([la, ln], { interactive: false, icon: L.divIcon({ className: '', iconSize: [0, 0], html: `<div class="battle-label">${text}</div>` }) }).addTo(layer);
    }
    createMarkers();
    buildPanel();
    $('scrubTicks').innerHTML = starts.slice(1).map((s) => `<i style="left:${(s / total) * 100}%"></i>`).join('');
    $('battleHud').classList.remove('hidden');
    const bn = $('battleBanner');
    bn.innerHTML = `${B.title}<small>${B.date}</small>`;
    bn.classList.remove('hidden');
    bindControls();
    t = 0; curPhase = -1; ended = false; lastTs = 0; speed = +$('bSpeed').value;
    // 하단 HUD에 가려지지 않도록 지도 중심을 아래로 보정
    const hud = $('battleHud').offsetHeight || 0;
    const target = map.unproject(map.project(B.center, B.zoom).add([0, hud / 2 - 20]), B.zoom);
    map.flyTo(target, B.zoom, { duration: 1.6 });
    render();
    setPlaying(false);
    cancelAnimationFrame(raf);
    raf = requestAnimationFrame(loop);
    map.once('moveend', () => setTimeout(() => { if (B === battle && t === 0) setPlaying(true); }, 300));
  }

  function stop(silent) {
    if (!B) return;
    cancelAnimationFrame(raf);
    setPlaying(false);
    clearPhaseFx();
    map.removeLayer(layer);
    map.removeLayer(fxLayer);
    $('battleHud').classList.add('hidden');
    $('battleBanner').classList.add('hidden');
    B = null;
    if (!silent && onExit) onExit();
  }

  return { start, stop, toggle, step, get active() { return !!B; }, get playing() { return playing; } };
})();
