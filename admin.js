// Portfolio content editor — reads/writes data/projects.json via the GitHub API.
const CFG = { owner: 'molba2see', repo: 'research-portfolio', branch: 'main', path: 'data/projects.json' };
const TOKEN_KEY = 'pf_gh_token';
const $ = id => document.getElementById(id);
const state = { projects: [], sha: null, idx: -1 };

/* ---------- token ---------- */
const getToken = () => localStorage.getItem(TOKEN_KEY) || '';
function refreshTokenState() {
  const has = !!getToken();
  $('token-state').textContent = has ? '저장된 토큰이 있습니다.' : '토큰이 없습니다 (불러오기는 가능, 저장은 토큰 필요).';
}
$('save-token').onclick = () => {
  const v = $('token').value.trim();
  if (!v) { setStatus('토큰을 입력하세요.', 'err'); return; }
  localStorage.setItem(TOKEN_KEY, v); $('token').value = '';
  refreshTokenState(); setStatus('토큰을 저장했습니다.', 'ok');
};
$('clear-token').onclick = () => { localStorage.removeItem(TOKEN_KEY); refreshTokenState(); setStatus('토큰을 지웠습니다.', 'ok'); };

/* ---------- helpers ---------- */
const b64encode = s => btoa(unescape(encodeURIComponent(s)));
const b64decode = s => decodeURIComponent(escape(atob(s.replace(/\n/g, ''))));
const apiUrl = () => `https://api.github.com/repos/${CFG.owner}/${CFG.repo}/contents/${CFG.path}`;
function headers(write) {
  const h = { 'Accept': 'application/vnd.github+json', 'X-GitHub-Api-Version': '2022-11-28' };
  const t = getToken(); if (t) h['Authorization'] = 'Bearer ' + t;
  if (write) h['Content-Type'] = 'application/json';
  return h;
}
function setStatus(msg, cls) { const el = $('status'); el.textContent = msg; el.className = cls || ''; }
const splitComma = s => s.split(',').map(x => x.trim()).filter(Boolean);
const parsePairs = s => s.split('\n').map(l => l.trim()).filter(Boolean).map(l => {
  const i = l.indexOf('|'); return i < 0 ? [l.trim(), ''] : [l.slice(0, i).trim(), l.slice(i + 1).trim()];
});
const pairsToText = arr => Array.isArray(arr) ? arr.map(([a, b]) => `${a} | ${b}`).join('\n') : '';

/* ---------- load ---------- */
$('load').onclick = load;
async function load() {
  setStatus('불러오는 중…');
  try {
    const r = await fetch(apiUrl() + '?ref=' + CFG.branch + '&t=' + Date.now(), { headers: headers(false) });
    if (!r.ok) { const j = await r.json().catch(() => ({})); throw new Error(`${r.status} ${j.message || ''}`); }
    const j = await r.json();
    state.sha = j.sha;
    state.projects = JSON.parse(b64decode(j.content));
    state.idx = -1;
    fillEntrySelect();
    if (state.projects.length) { $('entry').value = '0'; selectEntry(0); }
    $('editor').hidden = false;
    $('meta').textContent = `불러온 항목 ${state.projects.length}개 · 프로젝트 ${state.projects.filter(p => p.kind === 'project').length} / 연구 ${state.projects.filter(p => p.kind === 'research').length}`;
    setStatus('불러왔습니다.', 'ok');
  } catch (e) { setStatus('불러오기 실패: ' + e.message, 'err'); }
}

/* ---------- entry select ---------- */
function fillEntrySelect() {
  const sel = $('entry');
  sel.innerHTML = state.projects.map((p, i) =>
    `<option value="${i}">[${p.kind === 'research' ? '연구' : '프로젝트'}] ${(p.title || '(제목 없음)').replace(/</g, '')}</option>`).join('');
}
$('entry').onchange = e => { if (state.idx >= 0) applyForm(); selectEntry(+e.target.value); };

function selectEntry(i) {
  state.idx = i;
  const p = state.projects[i] || {};
  $('f-kind').value = p.kind || 'project';
  $('f-id').value = p.id || '';
  $('f-category').value = p.category || '';
  $('f-type').value = p.type || '';
  $('f-title').value = p.title || '';
  $('f-benefit').value = p.benefitName || '';
  $('f-subtitle').value = p.subtitle || '';
  $('f-date').value = p.date || '';
  $('f-status').value = p.status || '';
  $('f-result').value = p.result || '';
  $('f-team').value = p.teamSize || '';
  $('f-role').value = p.myRole || p.role || '';
  $('f-tags').value = (p.skills || p.tags || []).join(', ');
  $('f-repo').value = p.repo || '';
  $('f-problem').value = p.problem || '';
  $('f-impact').value = p.impact || '';
  $('f-features').value = pairsToText(p.features);
  $('f-trouble').value = pairsToText(p.troubleshooting);
  $('f-links').value = pairsToText(p.links);
  $('f-note').value = p.note || '';
  $('f-okind').value = p.outcome_kind || '';
  $('f-outcome').value = p.outcome || '';
  $('f-competition').checked = !!p.competition;
  $('f-art').value = p.art || '';
  $('f-label').value = p.label || '';
  $('f-summary').value = p.summary || '';
  $('f-sections').value = pairsToText(p.sections);
}

/* ---------- form -> object (preserve unknown fields) ---------- */
function applyForm() {
  if (state.idx < 0) return;
  const p = { ...state.projects[state.idx] };
  p.kind = $('f-kind').value;
  p.id = $('f-id').value.trim();
  p.category = $('f-category').value.trim();
  p.type = $('f-type').value.trim();
  p.title = $('f-title').value.trim();
  p.subtitle = $('f-subtitle').value.trim();
  p.date = $('f-date').value.trim();
  p.status = $('f-status').value.trim();
  p.role = $('f-role').value.trim();
  p.note = $('f-note').value.trim();
  p.outcome_kind = $('f-okind').value.trim();
  p.outcome = $('f-outcome').value.trim();
  p.tags = splitComma($('f-tags').value);
  p.links = parsePairs($('f-links').value);
  p.competition = $('f-competition').checked;
  const repo = $('f-repo').value.trim(); p.repo = repo || null;
  // optional: empty => remove so UI shows '보완 필요' / 'X'
  optional(p, 'benefitName', $('f-benefit').value.trim());
  optional(p, 'result', $('f-result').value.trim());
  optional(p, 'teamSize', $('f-team').value.trim());
  optional(p, 'problem', $('f-problem').value.trim());
  optional(p, 'impact', $('f-impact').value.trim());
  optional(p, 'summary', $('f-summary').value.trim());
  optional(p, 'art', $('f-art').value.trim());
  optional(p, 'label', $('f-label').value.trim());
  arrOptional(p, 'features', $('f-features').value);
  arrOptional(p, 'troubleshooting', $('f-trouble').value);
  arrOptional(p, 'sections', $('f-sections').value);
  state.projects[state.idx] = p;
}
function optional(p, k, v) { if (v) p[k] = v; else delete p[k]; }
function arrOptional(p, k, text) { const a = parsePairs(text); if (a.length) p[k] = a; else delete p[k]; }

/* ---------- add / delete ---------- */
$('add').onclick = () => {
  if (state.idx >= 0) applyForm();
  const tpl = { id: 'new-' + (state.projects.length + 1), kind: 'project', category: '개인 프로젝트', type: 'software', art: 'research', label: 'PROJECT', title: '새 프로젝트', subtitle: '', date: '2026', status: '', role: '', tags: [], repo: null, note: '', outcome_kind: '', outcome: '', competition: false, links: [], problem: '', features: [] };
  state.projects.push(tpl);
  fillEntrySelect();
  const i = state.projects.length - 1; $('entry').value = String(i); selectEntry(i);
  setStatus('새 항목을 추가했습니다. 내용을 채운 뒤 저장하세요.', 'ok');
};
$('del').onclick = () => {
  if (state.idx < 0) return;
  const p = state.projects[state.idx];
  if (!confirm(`"${p.title}" 항목을 삭제할까요? (저장을 눌러야 실제 반영됩니다)`)) return;
  state.projects.splice(state.idx, 1);
  state.idx = -1; fillEntrySelect();
  if (state.projects.length) { $('entry').value = '0'; selectEntry(0); } else { $('editor').hidden = true; }
  setStatus('항목을 삭제했습니다. 저장을 눌러 반영하세요.', 'ok');
};

/* ---------- commit ---------- */
$('commit').onclick = async () => {
  if (!getToken()) { setStatus('먼저 GitHub 토큰을 저장하세요.', 'err'); return; }
  if (state.idx >= 0) applyForm();
  // guard: unique ids
  const ids = state.projects.map(p => p.id);
  const dup = ids.find((v, i) => ids.indexOf(v) !== i);
  if (dup) { setStatus(`ID가 중복됩니다: "${dup}" — 고유하게 바꾸세요.`, 'err'); return; }
  if (ids.some(x => !x)) { setStatus('ID가 비어 있는 항목이 있습니다.', 'err'); return; }
  setStatus('GitHub에 저장 중…');
  try {
    const body = {
      message: 'Edit portfolio content via admin editor',
      content: b64encode(JSON.stringify(state.projects, null, 1) + '\n'),
      sha: state.sha, branch: CFG.branch
    };
    const r = await fetch(apiUrl(), { method: 'PUT', headers: headers(true), body: JSON.stringify(body) });
    const j = await r.json();
    if (!r.ok) throw new Error(`${r.status} ${j.message || ''}`);
    state.sha = j.content.sha;
    setStatus('저장 완료 — 약 1분 뒤 사이트에 반영됩니다.', 'ok');
  } catch (e) { setStatus('저장 실패: ' + e.message + ' (토큰 권한/만료를 확인하세요)', 'err'); }
};

refreshTokenState();
load();
