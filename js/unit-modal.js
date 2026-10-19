// 부대 상세 모달: 부대를 누르면 하위 부대(편제)와 보유 무기를 보여 준다.
// 하위 부대 중 자료가 있는 부대는 다시 눌러 한 단계씩 내려갈 수 있다(위쪽 경로로 되돌아가기).

// ── 부대 → 보유 무기 (무기도감 id). 세력·제대·부대 성격·시기로 정하는 편제상 주요 무기(추정)
const NAMED_WEAPONS = [
  [/북한 공군/, ['yak9', 'il10']],
  [/대한민국 공군 전투비행단/, ['f51']],
  [/대한민국 공군/, (d) => (d >= '1950.07' ? ['f51'] : [])],
  [/미 극동공군/, ['f80', 'b26', 'b29', 'c54']],
  [/F-86/, ['f86']],
  [/미 5공군/, (d) => (d >= '1950.12' ? ['f80', 'f51', 'b26', 'f86'] : ['f80', 'f51', 'b26'])],
  [/B-29/, ['b29']],
  [/77기동부대 \(항모\)/, ['carrier', 'f9f', 'f4u']],
  [/항모 항공대/, ['f4u', 'f9f']],
  [/키디카/, ['c54']],
  [/소련 64|인민지원군 공군/, ['mig15']],
  [/백두산함/, ['pc701']],
  [/인천상륙 기동함대/, ['lst', 'carrier']],
  [/대한민국 해군/, ['lst']],
  [/동해 함포/, ['lst']],
  [/흥남 철수 선단/, ['missouri', 'lst', 'victory']],
  [/187공수/, ['m1', 'carbine', 'bar', 'bz35', 'c119']],
  [/105전차|107전차/, ['t34']],
  [/영국 29여단/, ['bren', 'centurion']],
  [/16포병대대/, ['m3how']],
  [/52포병대대|37야포대대/, (d, n) => (n.includes('37야포') ? ['m2a1', 'm114'] : ['m2a1'])],
  [/뉴질랜드 16야포/, []],
];
const COMMONWEALTH = /영국|영연방|호주|캐나다|글로스터|미들섹스|노섬벌랜드|얼스터|41해병코만도/;
const NO_WEAPONS = new Set(['CP', 'BS', 'TC', 'HQ']);

function unitWeapons(f, lv, name, date) {
  for (const [re, w] of NAMED_WEAPONS) if (re.test(name)) return typeof w === 'function' ? w(date, name) : w;
  if (NO_WEAPONS.has(lv) || lv === 'AF' || lv === 'NV') return [];
  const big = lv === 'AG' || lv === 'C' || lv === 'D';
  const out = [];
  if (f === 'rok') {
    out.push('m1', 'carbine', 'bar');
    if (date < '1950.09') out.push('type99');
    out.push(date < '1950.08' ? 'bz236' : 'bz35');
    if (date < '1951.07') out.push('at57');
    if (big) out.push(date < '1950.09' ? 'm3how' : 'm2a1', ...(date >= '1951' ? ['m114'] : []));
  } else if (f === 'un') {
    if (COMMONWEALTH.test(name)) out.push('bren');
    else out.push('m1', 'carbine', 'bar');
    out.push(date < '1950.07.20' ? 'bz236' : 'bz35', 'rr75');
    if (big) {
      out.push('m2a1', 'm114');
      if (/해병/.test(name)) out.push(date >= '1950.08' ? 'm26' : 'm24');
      else if (!COMMONWEALTH.test(name)) out.push(...(date < '1950.08' ? ['m24'] : ['m4', 'm26', 'm46']));
    }
  } else if (f === 'nk') {
    out.push('ppsh', 'mosin', 'dp28');
    if (big || lv === 'B') out.push('m30', 'zis3', 'mortar120');
    if ((lv === 'D' || lv === 'C') && date < '1950.10') out.push('su76', 't34');
  } else if (f === 'cn') {
    out.push('ppsh', 'mosin', 'dp28');
    if ((lv === 'AG' || lv === 'C') && date >= '1951.04') out.push('m30', 'katyusha');
  }
  return [...new Set(out)];
}

const UnitModal = (() => {
  let el, stack = [], ev = null;

  const keyOf = (f, name) => { const k = `${f}|${name}`; return ORBAT_ALIAS[k] || k; };
  // 이름의 마지막 제대 단어로 판단 (예: "호주 왕립연대 3대대 A중대" → 중대)
  const guessLv = (n) => {
    const s = n.replace(/\s*\(.*?\)\s*/g, ' ').trim();
    const tail = [[/(병단|집단)$/, 'AG'], [/(군단|군)$/, 'C'], [/사단$/, 'D'], [/여단$/, 'B'], [/(연대|연대전투단)$/, 'R'],
      [/(대대|코만도|부대)$/, 'Bn'], [/(중대|포대|소대|박격포대)$/, 'Co']].find(([re]) => re.test(s));
    if (tail) return tail[1];
    return /병단|집단/.test(s) ? 'AG' : /군단/.test(s) ? 'C' : /사단/.test(s) ? 'D' : /여단/.test(s) ? 'B'
      : /연대/.test(s) ? 'R' : /대대/.test(s) ? 'Bn' : /중대|포대/.test(s) ? 'Co' : 'D';
  };
  const short = (k) => String(atDate(ORBAT[k]?.full, asOf(ev)) || k.split('|')[1]).replace(/\s*\(.*?\)/g, '');

  function mapIndexOf(key) {
    return (UNITS[ev.id] || []).findIndex((u) => keyOf(u[0], u[2]) === key);
  }

  // 보유 무기: 항목에 지정(wp)이 있으면 그것, 없으면 세력·제대·시기 규칙
  function weaponsFor(cur, o, d) {
    if (o.wp !== undefined) return typeof o.wp === 'function' ? o.wp(cur.name, d, cur.f) : atDate(o.wp, d);
    return unitWeapons(cur.f, cur.lv, cur.name, d);
  }

  function weaponGrid(ids) {
    if (!ids.length) return '<p class="um-empty">이 부대 유형은 무기도감에 해당 무기가 없습니다.</p>';
    return `<div class="um-wps">${ids.map((id) => WEAPONS.find((w) => w.id === id)).filter(Boolean).map((w) => {
      const m = (typeof WEAPON_MEDIA !== 'undefined' && WEAPON_MEDIA[w.id]) || {};
      const img = m.img ? `<img src="${m.img.replace(/\/\d+px-/, '/330px-')}" alt="" loading="lazy" referrerpolicy="no-referrer" onerror="this.remove()">` : '';
      return `<button class="um-wp" data-wp="${w.id}" style="--c:${FACTIONS[w.f[0]].color}">
        <span class="um-wp-pic">${img}${Codex.svg(w)}</span><b>${w.name}</b><small>${WEAPON_CAT[w.cat].name}</small></button>`;
    }).join('')}</div>`;
  }

  // 편제: 이 전투에서 조사로 확인한 편제가 있으면 그것, 없으면 날짜별 편제
  const orgFor = (o) => o.battles?.[ev.id]?.org || atDate(o.org, asOf(ev));

  // 조사로 확인한 전투별 활동 (o.battles[사건 id] = { role, casualties })
  function battleBlock(o) {
    const b = o.battles && o.battles[ev.id];
    if (!b || !b.role) return '';
    return `<div class="um-battle"><h4>이 전투에서</h4><p>${b.role}</p>${b.casualties ? `<p class="um-cas">피해: ${b.casualties}</p>` : ''}</div>`;
  }

  // 출처 (조사 자료): 무엇을 확인했는지와 원문 링크
  function sourceList(o) {
    if (!o.src || !o.src.length) return '';
    const host = (u) => { try { return new URL(u).hostname.replace(/^www\./, ''); } catch { return u; } };
    return `<h3>출처 <small>${o.src.length}건 · 원문에서 확인한 내용</small></h3><ul class="um-src">${o.src.map((s) =>
      `<li><a href="${s.url}" target="_blank" rel="noopener noreferrer">${host(s.url)} ↗</a><span>${s.fact}</span></li>`).join('')}</ul>`;
  }

  // 상위 부대: 기준일에 소속된 부대 + 소속 이력
  function parentRow(key, d) {
    const list = PARENTS[key] || [];
    if (!list.length) return '';
    // 편제 자료가 겹치는 기간에는 가장 최근에 배속된 상위 부대를 현재 소속으로 본다
    const active = list.filter((p) => p.from <= d && d < p.to);
    const latest = active.reduce((m, p) => (p.from > m ? p.from : m), '');
    const now = active.filter((p) => p.from === latest).map((p) => p.key).filter((v, i, a) => a.indexOf(v) === i);
    const hist = [...new Set(list.map((p) => p.key))];
    const btn = (k) => `<button class="um-parent" data-key="${k}">${short(k)}</button>`;
    return `<dt>상위 부대</dt><dd>${now.length ? now.map(btn).join(' ') : '<span class="uc-unk">이 시점 소속 자료 없음</span>'}
      ${hist.length > 1 ? `<small class="um-hist">소속 이력: ${hist.map(short).join(' · ')}</small>` : ''}</dd>`;
  }

  function render() {
    const cur = stack[stack.length - 1];
    const { f, lv, key, name, note } = cur;
    const o = ORBAT[key] || {};
    const d = asOf(ev);
    const org = orgFor(o);
    const str = o.battles?.[ev.id]?.str || atDate(o.str, d);
    const title = atDate(o.full, d) || name;
    // 자료가 있는 하위 부대만 누를 수 있고, 나머지는 편제표 글자로만 보여 준다
    const items = (Array.isArray(org) ? org : []).map((raw, i) => ({ raw, i, r: resolveSub(f, raw, key) }));
    const linkedCount = items.filter((x) => x.r).length;
    const children = items.map(({ raw, i, r }) => {
      if (!r) return `<li class="um-child plain"><span class="um-ech">·</span><span>${raw}</span></li>`;
      const co = ORBAT[r.key];
      const cmd = atDate(co.cmd, d);
      const sub = atDate(co.org, d);
      const label = raw.replace(/\s*\(.*?\)\s*$/, '') + (raw.match(/\(.*?\)\s*$/) ? ` <i>${raw.match(/\((.*?)\)\s*$/)[1]}</i>` : '');
      const onMap = mapIndexOf(r.key);
      return `<li class="um-child"><button class="um-go" data-i="${i}" style="--c:${FACTIONS[r.f].color}">
          <span class="um-ech">${ECHELON[guessLv(r.name)].mark}</span>
          <span class="um-cname"><b>${label}</b><small>${cmd && !String(cmd).startsWith('—') ? `지휘 ${cmd} · ` : ''}${atDate(co.str, d) || ''}${Array.isArray(sub) ? ` · 하위 ${sub.length}` : ''}</small></span>
          <span class="um-more">편제 ▸</span></button>
        ${onMap >= 0 ? `<button class="um-map" data-k="${onMap}" title="지도에서 위치 보기">📍 지도</button>` : ''}</li>`;
    }).join('');
    const crumbs = stack.map((s, i) => (i < stack.length - 1 ? `<button class="um-crumb" data-up="${i}">${s.name}</button> ›` : `<b>${s.name}</b>`)).join(' ');
    const here = mapIndexOf(key);

    el.querySelector('.um-win').innerHTML = `
      <header class="um-head" style="--c:${FACTIONS[f].color}">
        <span class="uc-ech">${ECHELON[lv].mark}</span>
        <div class="um-title"><h2>${title}</h2><small>${FACTIONS[f].name} · ${ECHELON[lv].name} · ${ev.date} 기준</small></div>
        <button class="btn" data-close>닫기 ✕</button>
      </header>
      ${stack.length > 1 ? `<nav class="um-crumbs">${crumbs}</nav>` : ''}
      <div class="um-body">
        <dl class="um-sum">
          ${parentRow(key, d)}
          <dt>지휘관</dt><dd>${unknown(atDate(o.cmd, d))}</dd>
          <dt>병력</dt><dd>${unknown(str)}</dd>
          ${o.eq ? `<dt>주요 장비</dt><dd>${atDate(o.eq, d)}</dd>` : ''}
          ${note ? `<dt>현재 상황</dt><dd class="uc-now">${note}</dd>` : ''}
        </dl>
        ${o.desc ? `<p class="um-desc">${o.desc}</p>` : ''}
        ${battleBlock(o)}
        ${here >= 0 && stack.length > 1 ? `<button class="btn um-map" data-k="${here}">📍 이 부대를 지도에서 보기</button>` : ''}
        <h3>하위 부대 <small>${Array.isArray(org) ? `${org.length}개${linkedCount ? ` · 자료가 있는 ${linkedCount}개는 눌러서 더 볼 수 있습니다` : ''}` : ''}</small></h3>
        ${children ? `<ul class="um-children">${children}</ul>` : `<p class="um-empty">${org && !Array.isArray(org) ? unknown(org) : '하위 부대 자료가 없습니다.'}</p>`}
        <h3>보유 무기 <small>편제상 주요 무기(추정) · 누르면 무기도감</small></h3>
        ${weaponGrid(weaponsFor(cur, o, d))}
        ${sourceList(o)}
        <p class="um-disc">※ 하위 부대는 그 시점의 개략 편제이며, 보유 무기는 세력·제대·시기로 추정한 대표 무기입니다. 실제 보유 수량과 종류는 부대마다 달랐습니다.</p>
      </div>`;
    el.querySelector('.um-body').scrollTop = 0;
  }

  // 지도에 같은 부대가 있으면 그 제대·현재 상황을 이어받는다
  function entryFor(f, key, name, lvHint) {
    const onMap = (UNITS[ev.id] || []).find((u) => keyOf(u[0], u[2]) === key);
    return { f, key, name, lv: onMap ? onMap[1] : (ORBAT[key]?.lv || lvHint), note: onMap ? onMap[5] : '' };
  }

  function onClick(e) {
    if (e.target.closest('a')) return;
    const t = e.target.closest('button, .um-backdrop');
    if (!t) return;
    if (t.classList.contains('um-backdrop') || t.dataset.close !== undefined) return close();
    if (t.dataset.up !== undefined) { stack = stack.slice(0, +t.dataset.up + 1); return render(); }
    if (t.dataset.wp) return Codex.open(t.dataset.wp);
    if (t.dataset.k !== undefined) { close(); return focusUnit(+t.dataset.k); }
    if (t.dataset.key) { // 상위 부대로 올라가기: 상위 부대를 새 출발점으로
      const k = t.dataset.key, f = k.split('|')[0], n = k.split('|')[1];
      stack = [entryFor(f, k, n, guessLv(n))];
      return render();
    }
    if (t.dataset.i !== undefined) {
      const cur = stack[stack.length - 1];
      const raw = orgFor(ORBAT[cur.key])[+t.dataset.i];
      const r = resolveSub(cur.f, raw, cur.key);
      const disp = raw.replace(/\s*\(.*?\)\s*/g, ' ').trim(); // 편제표에 적힌 이름 그대로 (예: "11연대")
      stack.push(entryFor(r.f, r.key, disp, guessLv(disp)));
      render();
    }
  }

  function open(u, e) {
    if (!el) {
      el = document.getElementById('unitModal');
      el.innerHTML = '<div class="um-backdrop"></div><section class="um-win" role="dialog" aria-modal="true" aria-label="부대 편제"></section>';
      el.addEventListener('click', onClick);
    }
    ev = e;
    stack = [{ f: u[0], key: keyOf(u[0], u[2]), name: u[2], lv: u[1], note: u[5] }];
    closeCards();
    el.classList.remove('hidden');
    render();
  }
  function close() { el?.classList.add('hidden'); }
  const isOpen = () => !!el && !el.classList.contains('hidden');
  return { open, close, isOpen, resolve: resolveSub };
})();
