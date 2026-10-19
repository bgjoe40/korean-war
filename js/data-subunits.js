// 사단 내부 부대(연대·대대·포병·전차) 세부 정보 — 자료로 확인한 부대만 담는다
// (미군 연대·전차대대, 영연방 대대, 중공군 군 등). 고유 자료가 없는 부대는 따로 항목을 만들지 않는다.
// wp: 보유 무기 지정(없으면 세력·제대·시기 규칙으로 추정). '—'는 자료로 확인하지 못한 항목.

Object.assign(ORBAT, {
  // ── 미군 보병연대
  'un|미 24연대': { ...T.usReg, full: '미 제25사단 제24보병연대', cmd: [['1950.06', '화이트'], ['1950.08', '챔피니'], ['1950.09', '코얼리']], org: ['3개 보병대대 (흑인 장병 중심)', '159야포대대 지원'],
    desc: '미 육군에 남아 있던 마지막 흑인 연대. 1950년 7월 예천을 되찾아 미군 초기 승리로 알려졌다. 1951년 해체되어 통합 부대로 재편되었다.' },
  'un|미 35연대': { ...T.usReg, full: '미 제25사단 제35보병연대', cmd: '피셔', org: ['3개 보병대대', '64야포대대 지원'], desc: '1950년 8~9월 마산 서부에서 낙동강 방어선 남쪽 끝을 지켰다.' },
  'un|미 38연대': { ...T.usReg, full: '미 제2사단 제38보병연대', cmd: [['1950.08', '페플로'], ['1951.01', '—']], org: ['3개 보병대대', '네덜란드 대대 (1950.12~ 배속)'],
    desc: '군우리 철수(1950.11)와 1951년 횡성·현리 일대 전투를 치렀다.' },
  'un|미 7연대': { ...T.usReg, full: '미 제3사단 제7보병연대', cmd: '—', org: ['3개 보병대대'], desc: '1950년 11월 원산에 상륙했고, 흥남 철수 때 교두보를 지켰다.' },
  'un|미 15연대': { ...T.usReg, full: '미 제3사단 제15보병연대', cmd: '—', org: ['3개 보병대대'], desc: '흥남 철수 엄호 후 서부·중부 전선에서 싸웠다.' },
  'un|미 65연대': { ...T.usReg, full: '미 제3사단 제65보병연대 ("보링키니어스")', cmd: [['1950.08', '해리스']], org: ['3개 보병대대 (푸에르토리코 출신 장병 중심)'],
    desc: '푸에르토리코 출신 장병이 중심인 연대. 흥남 철수 때 교두보를 지켰다.' },
  // ── 미군 전차·포병
  'un|미 78전차대대': { full: '미 제24사단 제78중전차대대', cmd: '—', org: ['A중대 (M24 경전차)'], str: '1950.7 투입 당시 M24 약 20대', eq: 'M24 채피 경전차', wp: ['m24'],
    desc: '이름은 중전차대대였지만 일본 점령군 시절의 M24 경전차만 갖고 있어 T-34를 당해 내지 못했다.' },
  'un|미 89전차대대': { full: '미 제25사단 제89중전차대대', cmd: '돌빈', org: ['전차중대 ×3', '본부중대'], str: '전차 약 70대 (편제)', eq: 'M4A3E8 셔먼', wp: ['m4'],
    desc: '1950년 9월 낙동강 돌파 뒤 돌빈 특수임무부대로 서남부를 빠르게 북진했다.' },
  'un|미 70전차대대': { full: '미 제1기병사단 제70중전차대대', cmd: '—', org: ['전차중대 ×3', '본부중대'], str: '전차 약 70대 (편제)', eq: 'M4A3E8 셔먼, M26 퍼싱', wp: ['m4', 'm26'],
    desc: '1기병사단의 북진과 평양 진입을 지원했다.' },
  'un|미 72전차대대': { full: '미 제2사단 제72중전차대대', cmd: '—', org: ['전차중대 ×3', '본부중대'], str: '전차 약 70대 (편제)', eq: 'M4A3E8 셔먼', wp: ['m4'], desc: '낙동강 돌출부와 군우리 철수에서 보병을 지원했다.' },
  'un|미 64전차대대': { full: '미 제3사단 제64중전차대대', cmd: '—', org: ['전차중대 ×3', '본부중대'], str: '전차 약 70대 (편제)', eq: 'M46 패튼, M4A3E8 셔먼', wp: ['m46', 'm4'], desc: '3사단과 함께 흥남 철수 후 서부 전선에서 싸웠다.' },
  'un|미 1해병전차대대': { full: '미 제1해병사단 제1해병전차대대', cmd: '—', org: ['전차중대 ×4', '본부중대'], str: 'M26 약 70대 (편제)', eq: 'M26 퍼싱', wp: ['m26'], desc: '인천상륙작전과 서울 시가전, 장진호 철수에서 해병 보병을 지원했다.' },
  'un|미 11해병연대': { full: '미 제1해병사단 제11해병연대 (포병)', cmd: '—', org: ['105mm 곡사포 대대 ×3', '155mm 곡사포 대대 ×1'], str: '약 2,500명 · 곡사포 약 70문', eq: 'M2A1 105mm, M114 155mm 곡사포', wp: ['m2a1', 'm114'],
    desc: '해병사단 포병연대. 장진호에서는 포위된 진지 안에서 사방으로 포격했다.' },
  'un|미 1해병항공단 근접지원': { full: '미 제1해병항공단 (근접항공지원)', cmd: '—', org: ['해병 전투비행대대들'], str: '항공기 수십~100여 대', eq: 'F4U 콜세어, F9F 팬서', wp: ['f4u', 'f9f'],
    desc: '해병 지상부대 바로 옆까지 내려와 공격하는 근접항공지원으로 유명했다.' },
  // ── 영연방
  'un|아가일·서덜랜드 하일랜더스 1대대': { full: '아가일·서덜랜드 하일랜더스 연대 제1대대', cmd: '—', org: ['4개 소총중대', '지원중대'], str: '약 600명', eq: '소총, 브렌 경기관총, 박격포', wp: ['bren'],
    desc: '1950년 8월 홍콩에서 온 영국 27여단 소속. 9월 낙동강 282고지에서 미군기의 오인 폭격으로 큰 피해를 입었다.' },
  'un|8왕립아일랜드후사르': { full: '제8왕립아일랜드후사르 연대 (전차)', cmd: '—', org: ['센추리온 전차 중대들', '크롬웰 관측전차'], str: '센추리온 약 60대 (추정)', eq: '센추리온 Mk.3', wp: ['centurion'],
    desc: '1951년 4월 임진강 전투 때 영국 29여단의 철수로를 엄호했다.' },
  'un|45야포연대': { full: '영국 제45야포연대', cmd: '—', org: ['3개 포대 (25파운드 야포)'], str: '25파운드 야포 24문', eq: '25파운드 야포', wp: [], desc: '임진강 전투에서 영국 29여단을 포격으로 지원했다.' },
  'un|영국 28여단': { full: '영연방 제28보병여단', cmd: '—', org: ['영국·호주 보병대대들'], str: '약 3,000~4,000명', eq: '소총, 브렌 경기관총, 박격포', wp: ['bren'], desc: '1951년 영국 27여단의 뒤를 이어 영연방 1사단에 편입되었다.' },
  'un|캐나다 25여단': { full: '캐나다 제25보병여단', cmd: '—', org: ['캐나다 보병대대 ×3 (PPCLI·RCR·R22eR)', '포병·기갑'], str: '약 5,000~6,000명', eq: '소총, 브렌 경기관총, 25파운드 야포, 셔먼 전차', wp: ['bren', 'm4'],
    desc: '1951년 5월 도착해 영연방 1사단의 한 축이 되었다.' },
  'un|네덜란드 대대': { full: '유엔군 네덜란드 대대 (반 회츠 대대)', cmd: [['1950.11', '오우덴 (1951.2 횡성에서 전사)'], ['1951.03', '—']], org: ['3개 보병중대', '중화기중대'], str: '약 600~700명', eq: '미군 장비',
    wp: ['m1', 'carbine', 'bar', 'bz35'], desc: '미 2사단 38연대에 배속되었다. 1951년 2월 횡성에서 대대장이 전사하는 격전을 치렀다.' },
  'un|777특수임무부대': { full: '777특수임무부대 (미 7기병연대 3대대 기반)', cmd: '—', org: ['7기병연대 3대대', '70전차대대 일부'], str: '약 1,000명 + 전차',
    eq: '소화기, M4 셔먼', wp: ['m1', 'carbine', 'bar', 'bz35', 'm4'], desc: '낙동강에서 북상해 1950년 9월 26일 오산 부근에서 인천 상륙 부대와 처음 연결했다.' },
  // ── 국군
  'rok|기갑연대': { full: '국군 수도사단 기갑연대', cmd: '—', org: ['기병대대', '장갑차대대 (M8 장갑차)', '보병대대'], str: '약 2,000명 · M8 장갑차 약 27대 (1950.6)', eq: 'M8 그레이하운드 장갑차, 소화기',
    desc: '개전 때 국군 유일의 기갑부대. 서울 방어와 안강–기계 전투에 참가했다.' },
  // ── 중공군 군
  'cn|12군': { ...T.cnArmy, full: '중국인민지원군 제12군', cmd: '쩡사오산', org: ['31사단', '34사단', '35사단'], desc: '1951년 춘계 공세에 3병단 소속으로 투입되었다.' },
  'cn|60군': { ...T.cnArmy, full: '중국인민지원군 제60군', cmd: '웨이제', org: ['179사단', '180사단', '181사단'], desc: '1951년 5월 180사단이 포위되어 크게 패했다. 1953년 금성 전투에 참가했다.' },
  'cn|64군': { ...T.cnArmy, full: '중국인민지원군 제64군', cmd: '쩡쓰위', org: ['190사단', '191사단', '192사단'], desc: '1951년 4월 임진강 도하 공격에 참가했다.' },
  'cn|65군': { ...T.cnArmy, full: '중국인민지원군 제65군', cmd: '샤오잉탕', org: ['193사단', '194사단', '195사단'], desc: '1951년 춘계 공세에 19병단 소속으로 참가했다.' },
  'cn|54군': { ...T.cnArmy, full: '중국인민지원군 제54군', cmd: '딩성', org: ['130사단', '134사단', '135사단'], desc: '1953년 7월 금성 전투에 증원 투입되었다.' },
});
// 7사단 1연대는 1950년 7월 재편 때 수도사단으로 옮겼다
ORBAT['rok|1연대'].full = [['1950.06', '국군 제7사단 제1연대'], ['1950.07', '국군 수도사단 제1연대']];
Object.assign(ORBAT_ALIAS, { 'un|글로스터 1대대': 'un|영국 글로스터 대대', 'un|프랑스 대대 배속': 'un|프랑스 대대', 'un|미 프랑스 대대 배속': 'un|프랑스 대대' });

// 편제 문자열 → 자료가 있는 부대 { key, f, name }
// 고유 자료가 없는 항목(이름 없는 편제, 번호만 아는 부대)은 연결하지 않고 편제표의 글자로만 보여 준다.
function resolveSub(f, raw, parentKey) {
  const s = raw.replace(/\s*\(.*?\)\s*/g, ' ').replace(/\s+/g, ' ').trim();
  if (!s) return null;
  const tries = [`${f}|${raw.trim()}`]; // 괄호까지 포함한 이름 그대로 (예: "1대대 (32연대)")
  // 상위 부대 이름을 붙인 하위 부대 (예: "미 5해병연대" 아래 "1대대" → "미 5해병연대 1대대")
  if (parentKey && parentKey.startsWith(`${f}|`)) tries.push(`${parentKey} ${s}`);
  if (s.startsWith('국군 ')) tries.push(`rok|${s.slice(3)}`);
  tries.push(`${f}|${s}`);
  if (f === 'un' && !s.startsWith('미 ')) tries.push(`un|미 ${s}`);
  if (f === 'cn') tries.push(`cn|중공군 ${s}`);
  if (f === 'nk') tries.push(`nk|북한 ${s}`, `nk|북 ${s}`);
  for (const t of tries) { const k = ORBAT_ALIAS[t] || t; if (ORBAT[k] && k !== parentKey) return { key: k, f: k.split('|')[0], name: k.split('|')[1] }; }
  return null;
}

// 소속 이력: 모든 상위 부대 편제를 훑어 하위 부대가 언제 어디에 속했는지 기록 (예: 국군 1연대 7사단 → 수도사단)
const PARENTS = {}; // 하위 key → [{ key: 상위 key, from, to }]
// 조사 자료(data-research.js)가 편제를 보탠 뒤 다시 계산할 수 있게 함수로 둔다
function buildParents() {
  for (const k of Object.keys(PARENTS)) delete PARENTS[k];
  const periods = (org) => {
    if (!org) return [];
    if (Array.isArray(org) && Array.isArray(org[0]) && /^\d{4}/.test(org[0][0])) {
      return org.map(([from, list], i) => ({ from, to: org[i + 1]?.[0] || '9999', list }));
    }
    return Array.isArray(org) ? [{ from: '0000', to: '9999', list: org }] : [];
  };
  for (const pk of Object.keys(ORBAT)) {
    const pf = pk.split('|')[0];
    // 전투별로 확인한 편제(battles[사건].org)도 그 사건 날짜부터의 소속으로 본다
    const battleOrgs = Object.values(ORBAT[pk].battles || {}).filter((b) => b.org).map((b) => ({ from: b.from, to: '9999', list: b.org }));
    for (const per of periods(ORBAT[pk].org).concat(battleOrgs)) for (const raw of per.list) {
      const r = resolveSub(pf, raw, pk);
      if (r) (PARENTS[r.key] = PARENTS[r.key] || []).push({ key: pk, from: per.from, to: per.to });
    }
  }
}
buildParents();

// ── 조사 자료 반영 (data-research.js가 호출)
// 전투별로 확인한 편제·병력·활동·피해는 그 전투에서만 보이게 battles[사건 id]에 두고,
// 지휘관은 날짜별 지휘관 목록에 넣고, 출처는 부대별로 모은다.
const LV_OF = { AG: 'AG', C: 'C', D: 'D', B: 'B', R: 'R', Bn: 'Bn', Co: 'Co', Bty: 'Co' };
function applyResearch(list) {
  const eventDate = (id) => {
    const e = EVENTS.find((x) => x.id === id);
    if (e.asof) return e.asof;
    const m = e.date.match(/(\d{4})(?:\.(\d{2}))?(?:\.(\d{2}))?/);
    return `${m[1]}.${m[2] || '01'}.${m[3] || '01'}`;
  };
  const asList = (v) => (v === undefined || v === null ? [] : Array.isArray(v) && Array.isArray(v[0]) && /^\d{4}/.test(v[0][0]) ? v.slice() : [['0000', v]]);
  const safeUrl = (u) => /^https?:\/\//.test(u);
  for (const { event, units } of list) {
    const from = eventDate(event);
    for (const u of units) {
      const k = ORBAT_ALIAS[u.key] || u.key;
      const o = ORBAT[k] || (ORBAT[k] = { full: u.full, lv: LV_OF[u.level] || 'Bn', researched: true });
      if (!o.full) o.full = u.full;
      if (u.cmd && u.cmd.length) {
        // 같은 달의 기존 지휘관 기록은 조사 결과로 바꾼다
        const cmd = asList(o.cmd).filter(([d]) => !u.cmd.some(([rd]) => d.slice(0, 7) === rd.slice(0, 7)));
        o.cmd = cmd.concat(u.cmd).sort((a, b) => a[0].localeCompare(b[0]));
        if (o.cmd.length === 1 && o.cmd[0][0] === '0000') o.cmd = o.cmd[0][1];
      }
      o.battles = o.battles || {};
      o.battles[event] = { from, role: u.role, casualties: u.casualties || null, org: u.org || null, str: u.str || null };
      if (!o.org && u.org) o.org = u.org;
      if (!o.str && u.str) o.str = u.str;
      o.src = (o.src || []).concat((u.sources || []).filter((s) => safeUrl(s.url)))
        .filter((s, i, a) => a.findIndex((x) => x.url === s.url && x.fact === s.fact) === i);
    }
    // 상위 부대의 이 전투 편제에 조사한 하위 부대가 빠져 있으면 보탠다 (모달에서 눌러 내려갈 수 있게)
    for (const u of units) {
      if (!u.parent) continue;
      const cf = u.key.split('|')[0];
      // 상위 부대는 다른 세력일 수 있다 (예: 국군 9사단 → 미 9군단)
      const pname = u.parent.replace(/\s*\(.*?\)\s*$/, '');
      const pk = [cf, 'un', 'rok', 'nk', 'cn', 'su'].flatMap((x) => [`${x}|${u.parent}`, `${x}|${pname}`])
        .map((x) => ORBAT_ALIAS[x] || x).find((x) => ORBAT[x]);
      if (!pk) continue;
      const f = pk.split('|')[0];
      const p = ORBAT[pk];
      p.battles = p.battles || {};
      const b = p.battles[event] || (p.battles[event] = { from, role: null, casualties: null, org: null, str: null });
      const base = b.org || (Array.isArray(p.org) && !Array.isArray(p.org[0]) ? p.org : (asList(p.org).filter(([d]) => d <= from).pop() || [])[1]) || [];
      const childKey = ORBAT_ALIAS[u.key] || u.key;
      if (base.some((raw) => resolveSub(f, raw, pk)?.key === childKey)) { b.org = base; continue; }
      if (cf !== f && cf !== 'rok') continue; // 국군 외 다른 세력 하위 부대는 편제표로 이름을 이을 방법이 없다
      const name = childKey.split('|')[1];
      const rel = cf !== f && cf === 'rok' ? `국군 ${name}` // 다른 세력 상위 아래의 국군 부대는 "국군 …"으로 적는다
        : name.startsWith(pk.split('|')[1] + ' ') ? name.slice(pk.split('|')[1].length + 1) : name;
      b.org = base.concat(rel);
    }
  }
  buildParents();
}
