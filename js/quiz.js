// 확인 퀴즈: 사건·전투마다 4지선다 문항을 하나씩 풀고, 해설과 관련 사건으로 바로 갈 수 있다.
// 문항은 data-quiz.js의 QUIZ (키: 사건 id 또는 'b:전투 id').
const Quiz = (() => {
  const $ = (id) => document.getElementById(id);
  let list = [], cur = 0, score = 0, wrong = [], answered = false, title = '';

  const shuffle = (a) => { for (let i = a.length - 1; i > 0; i--) { const j = Math.floor(Math.random() * (i + 1)); [a[i], a[j]] = [a[j], a[i]]; } return a; };
  const count = (key) => (QUIZ[key] || []).length;

  // 문항마다 출처(사건·전투)를 붙이고, 보기 순서도 섞는다
  function collect(keys) {
    const out = [];
    for (const key of keys) for (const q of QUIZ[key] || []) {
      const order = shuffle([0, 1, 2, 3]);
      out.push({ key, q: q.q, a: order.map((k) => q.a[k]), c: order.indexOf(q.c), why: q.why });
    }
    return out;
  }
  function source(key) {
    if (key.startsWith('b:')) { const b = BATTLES[key.slice(2)]; return b ? `⚔ ${b.title}` : ''; }
    const e = EVENTS.find((x) => x.id === key);
    return e ? `${e.date} · ${e.title}` : '';
  }

  // keys: 문항을 모을 사건·전투 키, n: 최대 문항 수 (없으면 전부)
  function open(keys, name, n) {
    list = shuffle(collect(keys));
    if (n) list = list.slice(0, n);
    if (!list.length) return;
    title = name; cur = 0; score = 0; wrong = [];
    $('quiz').classList.remove('hidden');
    show();
  }
  function retryWrong() {
    list = shuffle(wrong.map((w) => ({ ...w }))); cur = 0; score = 0; wrong = [];
    title = `${title.replace(/ · 틀린 문제$/, '')} · 틀린 문제`;
    show();
  }
  function close() { $('quiz').classList.add('hidden'); }
  const isOpen = () => !$('quiz').classList.contains('hidden');

  function frame(body) {
    $('quiz').innerHTML = `<div class="um-backdrop" data-close></div>
      <div class="um-win qz-win" role="dialog" aria-label="퀴즈">
        <div class="um-head qz-head"><div class="um-title"><h2>🧠 ${title}</h2><small>${list.length}문제 · 정답 ${score}</small></div>
          <button class="btn" data-close>닫기 ✕</button></div>
        <div class="qz-bar"><div style="width:${(Math.min(cur + (answered ? 1 : 0), list.length) / list.length) * 100}%"></div></div>
        <div class="um-body qz-body">${body}</div></div>`;
    $('quiz').querySelectorAll('[data-close]').forEach((b) => { b.onclick = close; });
  }

  function show() {
    answered = false;
    const q = list[cur];
    frame(`<div class="qz-meta"><span>${cur + 1} / ${list.length}</span><span>${source(q.key)}</span></div>
      <p class="qz-q">${q.q}</p>
      <div class="qz-opts">${q.a.map((t, k) => `<button class="qz-opt" data-k="${k}"><b>${k + 1}</b>${t}</button>`).join('')}</div>
      <div id="qzFeed"></div>`);
    $('quiz').querySelectorAll('.qz-opt').forEach((b) => { b.onclick = () => answer(+b.dataset.k); });
  }

  function answer(k) {
    if (answered) return;
    answered = true;
    const q = list[cur], ok = k === q.c;
    if (ok) score++; else wrong.push(q);
    $('quiz').querySelectorAll('.qz-opt').forEach((b, i) => {
      b.disabled = true;
      b.classList.toggle('right', i === q.c);
      b.classList.toggle('wrong', i === k && !ok);
    });
    $('quiz').querySelector('.qz-head small').textContent = `${list.length}문제 · 정답 ${score}`;
    $('quiz').querySelector('.qz-bar div').style.width = `${((cur + 1) / list.length) * 100}%`;
    const last = cur === list.length - 1;
    $('qzFeed').innerHTML = `<div class="qz-why ${ok ? 'ok' : 'no'}"><b>${ok ? '정답입니다!' : `오답 — 정답은 ${q.c + 1}번`}</b><p>${q.why}</p></div>
      <div class="qz-actions"><button class="btn" data-go="${q.key}">${q.key.startsWith('b:') ? '⚔ 전투 재생으로' : '🗺 지도에서 보기'}</button>
        <button class="btn primary" id="qzNext">${last ? '결과 보기' : '다음 문제 ▶'}</button></div>`;
    $('qzNext').onclick = next;
    $('qzNext').focus();
    $('qzFeed').querySelector('[data-go]').onclick = (ev) => { close(); go(ev.currentTarget.dataset.go); };
  }

  function next() {
    if (!answered) return;
    if (cur < list.length - 1) { cur++; show(); return; }
    const pct = Math.round((score / list.length) * 100);
    const msg = pct === 100 ? '만점! 흐름을 정확히 이해하고 있어요.' : pct >= 70 ? '잘했어요! 틀린 문제의 해설을 한 번 더 읽어 보세요.' : '지도와 전투 재생을 다시 보고 도전해 보세요.';
    answered = true;
    frame(`<div class="qz-result"><div class="qz-score">${score}<small> / ${list.length}</small></div><p>${msg}</p>
      ${wrong.length ? `<h3>틀린 문제</h3><ul class="qz-wrong">${wrong.map((w) => `<li><button data-go="${w.key}">${source(w.key)}</button><span>${w.q}<br><em>정답: ${w.a[w.c]}</em></span></li>`).join('')}</ul>` : ''}
      <div class="qz-actions">${wrong.length ? '<button class="btn" id="qzRetry">틀린 문제 다시 풀기</button>' : ''}
        <button class="btn primary" id="qzAgain">새로 풀기</button></div></div>`);
    if (wrong.length) $('qzRetry').onclick = retryWrong;
    $('qzAgain').onclick = () => open(lastKeys, title.replace(/ · 틀린 문제$/, ''), lastN);
    $('quiz').querySelectorAll('[data-go]').forEach((b) => { b.onclick = () => { close(); go(b.dataset.go); }; });
  }

  // 관련 사건·전투로 이동 (app.js의 함수 사용)
  function go(key) {
    if (key.startsWith('b:')) return openBattle(key.slice(2));
    const i = EVENTS.findIndex((e) => e.id === key);
    if (i >= 0) select(i);
  }

  let lastKeys = [], lastN = 0;
  function start(keys, name, n) { lastKeys = keys; lastN = n || 0; open(keys, name, n); }

  // 키보드: 1~4 선택, Enter 다음, Esc 닫기
  function key(ev) {
    if (ev.key === 'Escape') return close();
    if (!answered && /^[1-4]$/.test(ev.key)) answer(+ev.key - 1);
    else if (answered && ev.key === 'Enter' && $('qzNext')) { ev.preventDefault(); next(); }
  }

  return { start, close, isOpen, count, key, all: () => Object.keys(QUIZ) };
})();
