// 무기도감: 상단 버튼으로 여는 전체 화면 창
// 세력·분류 필터와 검색 → 카드 목록 → 상세(제원·이야기·등장 사건). 등장 사건을 누르면 지도에서 그 사건으로 이동한다.
const Codex = (() => {
  // 분류별 단순 실루엣 (viewBox 120×60, 세력색으로 칠함)
  const SIL = {
    tank: '<path d="M8 41h104l-7 11H15z"/><rect x="14" y="31" width="90" height="10" rx="2"/><path d="M38 19h36l6 12H32z"/><rect x="76" y="22" width="40" height="4" rx="1"/>',
    spg: '<path d="M8 41h104l-7 11H15z"/><rect x="14" y="31" width="90" height="10" rx="2"/><path d="M48 18h32v13H42z"/><rect x="78" y="21" width="38" height="3.5" rx="1"/>',
    prop: '<path d="M14 30Q20 24 40 24H92Q104 25 108 30Q104 35 92 36H40Q20 36 14 30z"/><path d="M15 30L9 13h10l10 13z"/><path d="M50 31h28l-8 16H56z"/><rect x="108" y="15" width="3" height="30" rx="1.5"/>',
    jet: '<path d="M10 32l14-6h66l24 5-24 5H24z"/><path d="M15 28L6 9h10l18 17z"/><path d="M46 32h24L54 51h-12z"/>',
    bomber: '<path d="M6 30Q12 25 30 25H100Q112 26 116 30Q112 35 100 35H30Q12 35 6 30z"/><path d="M8 29L3 12h9l12 14z"/><path d="M44 31h40l-12 20H54z"/><rect x="52" y="34" width="8" height="5" rx="2"/><rect x="70" y="34" width="8" height="5" rx="2"/>',
    heli: '<ellipse cx="40" cy="34" rx="20" ry="12"/><rect x="56" y="31" width="52" height="4" rx="2"/><rect x="104" y="24" width="4" height="14" rx="2"/><rect x="38" y="16" width="4" height="8"/><rect x="6" y="14" width="70" height="3" rx="1.5"/><rect x="24" y="48" width="34" height="3" rx="1.5"/>',
    cargo: '<path d="M10 33Q14 24 34 24H96Q110 26 114 33Q110 40 96 40H34Q14 40 10 33z"/><path d="M14 30L8 12h11l12 14z"/><path d="M52 32h26l-6 18H60z"/>',
    ship: '<path d="M4 37h112l-12 14H16z"/><rect x="40" y="25" width="34" height="12"/><rect x="50" y="15" width="12" height="10"/><rect x="74" y="31" width="26" height="3"/><rect x="20" y="31" width="20" height="3"/>',
    carrier: '<path d="M4 37h112l-10 13H14z"/><rect x="2" y="33" width="116" height="4"/><rect x="74" y="20" width="14" height="13"/><rect x="78" y="12" width="4" height="8"/>',
    mine: '<circle cx="60" cy="32" r="15"/><rect x="58" y="8" width="4" height="10"/><rect x="58" y="46" width="4" height="10"/><rect x="34" y="30" width="10" height="4"/><rect x="76" y="30" width="10" height="4"/><rect x="44" y="14" width="4" height="9" transform="rotate(-45 46 18)"/><rect x="72" y="14" width="4" height="9" transform="rotate(45 74 18)"/>',
    gun: '<circle cx="46" cy="44" r="9"/><path d="M40 36h20l46-16 3 5-48 17H40z"/><path d="M38 40L8 52l2 4 32-10z"/>',
    rocket: '<rect x="10" y="34" width="62" height="10" rx="2"/><rect x="72" y="28" width="24" height="16" rx="2"/><circle cx="24" cy="48" r="6"/><circle cx="60" cy="48" r="6"/><circle cx="86" cy="48" r="6"/><path d="M14 30l52-18 3 7-52 18z"/>',
    mortar: '<rect x="30" y="50" width="40" height="5" rx="2"/><path d="M46 50l26-40 6 3-26 40z"/><path d="M60 50l20-14 3 4-17 12z"/>',
    tube: '<path d="M8 26l100-8 1 6-100 8z"/><rect x="40" y="27" width="6" height="12" rx="1"/><rect x="58" y="25" width="6" height="12" rx="1"/><rect x="104" y="15" width="8" height="12" rx="2"/>',
    rifle: '<path d="M6 30h70v-4h38v5H76v3H40l-10 10H8l6-8z"/><rect x="44" y="34" width="4" height="7"/>',
    smg: '<path d="M10 30h56v-3h30v5H66v4H40l-8 8H12l5-8z"/><circle cx="52" cy="42" r="8"/>',
    lmg: '<path d="M6 30h66v-3h40v5H72v4H40l-10 10H8l6-8z"/><rect x="50" y="18" width="18" height="9" rx="4"/><path d="M90 34l-6 18h3l6-17zM96 34l6 18h-3l-6-17z"/>',
  };
  const svg = (w, cls = '') => `<svg class="cx-sil ${cls}" viewBox="0 0 120 60" aria-hidden="true" fill="currentColor">${SIL[w.icon] || SIL.gun}</svg>`;

  // 실제 사진(위키미디어 공용, 자유 라이선스). 사진이 없거나 불러오지 못하면 실루엣을 보여 준다.
  const media = (w) => (typeof WEAPON_MEDIA !== 'undefined' && WEAPON_MEDIA[w.id]) || {};
  const esc = (s) => String(s).replace(/[&<>"]/g, (c) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' }[c]));
  function picture(w, big) {
    const m = media(w);
    const fallback = svg(w, big ? 'big' : '');
    if (!m.img) return `<div class="cx-pic ${big ? 'big' : ''} no-photo">${fallback}</div>`;
    // 목록 카드는 작은 썸네일(330px), 상세는 큰 썸네일을 쓴다 (위키미디어 썸네일 주소의 폭만 바꿈)
    const src = big ? m.img : m.img.replace(/\/\d+px-/, '/330px-');
    return `<div class="cx-pic ${big ? 'big' : ''}">
      <img src="${esc(src)}" alt="${esc(w.name)} 사진" loading="lazy" referrerpolicy="no-referrer"
        onerror="this.parentNode.classList.add('no-photo');this.remove()">${fallback}</div>`;
  }
  function credit(w) {
    const m = media(w);
    if (!m.img) return '<p class="cx-credit">사진: 자유 라이선스 사진을 찾지 못해 실루엣으로 표시합니다.</p>';
    return `<p class="cx-credit">사진: ${esc(m.artist || '작자 미상')} · ${esc(m.license)} ·
      <a href="${esc(m.page)}" target="_blank" rel="noopener noreferrer">위키미디어 공용 원본 ↗</a></p>`;
  }
  // 나무위키: 확인된 문서가 있으면 문서로, 없으면 이름으로 검색
  function namuLink(w) {
    const m = media(w);
    const href = m.namu ? `https://namu.wiki/w/${encodeURIComponent(m.namu)}` : `https://namu.wiki/Go?q=${encodeURIComponent(w.name.replace(/\s*\(.*\)$/, ''))}`;
    return `<a class="btn cx-namu" href="${href}" target="_blank" rel="noopener noreferrer">📘 나무위키${m.namu ? '' : ' 검색'} ↗</a>`;
  }

  const SIDE = { all: '전체', south: '국군·유엔군', north: '북한·중공군·소련' };
  const sideOf = (w) => ({
    south: w.f.some((f) => f === 'rok' || f === 'un'),
    north: w.f.some((f) => f === 'nk' || f === 'cn' || f === 'su'),
  });
  // 실루엣 색은 첫 번째 사용 세력
  const colorOf = (w) => FACTIONS[w.f[0]].color;
  const facTags = (w) => w.f.map((f) => `<span class="cx-fac" style="--c:${FACTIONS[f].color}">${FACTIONS[f].name}</span>`).join('');

  const st = { side: 'all', cat: 'all', q: '', sel: null };
  let el;

  function filtered() {
    const q = st.q.trim().toLowerCase();
    return WEAPONS.filter((w) => (st.side === 'all' || sideOf(w)[st.side])
      && (st.cat === 'all' || w.cat === st.cat)
      && (!q || `${w.name} ${w.alias || ''} ${w.origin} ${w.desc}`.toLowerCase().includes(q)));
  }

  function chips(group, map, cur) {
    return Object.entries(map).map(([k, v]) => `<button class="cx-chip ${k === cur ? 'on' : ''}" data-${group}="${k}">${v}</button>`).join('');
  }

  function renderList() {
    const list = filtered();
    const cats = { all: '전체', ...Object.fromEntries(Object.entries(WEAPON_CAT).map(([k, v]) => [k, v.name])) };
    el.querySelector('.cx-filters').innerHTML = `
      <div class="cx-row">${chips('side', SIDE, st.side)}</div>
      <div class="cx-row">${chips('cat', cats, st.cat)}</div>`;
    el.querySelector('.cx-body').innerHTML = list.length
      ? `<div class="cx-count">${list.length}종</div><div class="cx-grid">${list.map((w) => `
        <button class="cx-card" data-id="${w.id}" style="--c:${colorOf(w)}">
          ${picture(w)}
          <b>${w.name}</b>${w.alias ? `<i>"${w.alias}"</i>` : ''}
          <small>${WEAPON_CAT[w.cat].name} · ${w.origin}</small>
          <span class="cx-dots">${w.f.map((f) => `<span style="background:${FACTIONS[f].color}" title="${FACTIONS[f].name}"></span>`).join('')}</span>
        </button>`).join('')}</div>`
      : '<p class="cx-empty">조건에 맞는 무기가 없습니다.</p>';
  }

  function renderDetail(w) {
    const evs = w.events.map((id) => EVENTS.findIndex((e) => e.id === id)).filter((i) => i >= 0);
    el.querySelector('.cx-filters').innerHTML = '<button class="btn" data-back>◀ 목록으로</button>';
    el.querySelector('.cx-body').innerHTML = `
      <article class="cx-detail" style="--c:${colorOf(w)}">
        <div class="cx-hero">
          <figure>${picture(w, true)}${credit(w)}</figure>
          <div><h3>${w.name}${w.alias ? ` <i>"${w.alias}"</i>` : ''}</h3>
            <div class="cx-meta">${WEAPON_CAT[w.cat].name} · ${w.origin}</div>
            <div class="cx-facs">${facTags(w)}</div>
            ${namuLink(w)}</div></div>
        <dl class="cx-specs">${w.specs.map(([k, v]) => `<dt>${k}</dt><dd>${v}</dd>`).join('')}</dl>
        <p>${w.desc}</p>
        ${w.note ? `<p class="cx-note">${w.note}</p>` : ''}
        <h4>등장 사건 <small>누르면 지도에서 이동</small></h4>
        <div class="cx-evs">${evs.map((i) => `<button class="cx-ev" data-ev="${i}"><small>${EVENTS[i].date}</small>${EVENTS[i].title}</button>`).join('')}</div>
        <p class="cx-disc">※ 제원은 자료마다 차이가 있어 반올림한 교육용 근사값입니다. 사진은 같은 계열 장비의 대표 사진으로, 6·25 전쟁 당시 사진이나 정확히 같은 형식이 아닐 수 있습니다.</p>
      </article>`;
    el.querySelector('.cx-body').scrollTop = 0;
  }

  function render() {
    const w = st.sel && WEAPONS.find((x) => x.id === st.sel);
    el.querySelector('.cx-search').classList.toggle('hidden', !!w);
    if (w) renderDetail(w); else renderList();
  }

  function onClick(ev) {
    if (ev.target.closest('a')) return; // 외부 링크는 그대로 새 탭에서 연다
    const t = ev.target.closest('button, .cx-backdrop');
    if (!t) return;
    if (t.classList.contains('cx-backdrop') || t.dataset.close !== undefined) return close();
    if (t.dataset.side) { st.side = t.dataset.side; return render(); }
    if (t.dataset.cat) { st.cat = t.dataset.cat; return render(); }
    if (t.dataset.id) { st.sel = t.dataset.id; return render(); }
    if (t.dataset.back !== undefined) { st.sel = null; return render(); }
    if (t.dataset.ev) { close(); stopAuto(); select(+t.dataset.ev); }
  }

  function init() {
    el = document.getElementById('codex');
    el.innerHTML = `
      <div class="cx-backdrop"></div>
      <section class="cx-win" role="dialog" aria-modal="true" aria-label="무기도감">
        <header class="cx-head"><h2>📖 무기도감</h2>
          <input class="cx-search" type="search" placeholder="이름·별명 검색 (예: 따발총, T-34)" aria-label="무기 검색">
          <button class="btn" data-close>닫기 ✕</button></header>
        <div class="cx-filters"></div>
        <div class="cx-body"></div>
      </section>`;
    el.addEventListener('click', onClick);
    el.querySelector('.cx-search').addEventListener('input', (ev) => { st.q = ev.target.value; renderList(); });
  }

  function open(id) {
    if (!el) init();
    st.sel = id || null;
    el.classList.remove('hidden');
    render();
    if (!id) el.querySelector('.cx-search').focus();
  }
  function close() { el?.classList.add('hidden'); }
  const isOpen = () => !!el && !el.classList.contains('hidden');

  // 사건에 등장한 무기 (오른쪽 패널용)
  const forEvent = (eventId) => WEAPONS.filter((w) => w.events.includes(eventId));

  return { open, close, isOpen, forEvent, svg };
})();
