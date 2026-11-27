let projects = [];

const esc = s => String(s).replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
const graphArt='<svg viewBox="0 0 450 150" aria-hidden="true"><g stroke="currentColor" opacity=".35" fill="none"><path d="M50 75L160 30L265 75L380 38L400 115L265 75L155 120L50 75L380 38M160 30L155 120M155 120L400 115"/></g><g fill="currentColor" opacity=".7"><circle cx="50" cy="75" r="7"/><circle cx="160" cy="30" r="6"/><circle cx="155" cy="120" r="6"/><circle cx="380" cy="38" r="8"/><circle cx="400" cy="115" r="7"/></g><circle cx="265" cy="75" r="24" fill="none" stroke="currentColor"/><circle cx="265" cy="75" r="6" fill="currentColor"/><circle cx="265" cy="75" r="40" fill="none" stroke="currentColor" stroke-dasharray="2 6" opacity=".4"/></svg>';
const arts={match:graphArt,research:graphArt,language:'<div class="art-word">SFT <span style="font-size:24px;opacity:.5">→</span> DPO<small>ALIGNING A CONVERSATION</small></div>',financial:'<svg viewBox="0 0 450 150" aria-hidden="true"><g fill="none" stroke="#b48457" opacity=".3"><path d="M45 125H405M45 90H405M45 55H405M45 20H405"/></g><path d="M45 105L100 80L155 95L215 60L275 65L335 33L405 20" fill="none" stroke="#ad5a26" stroke-width="2"/><g fill="#ad5a26"><circle cx="100" cy="80" r="4"/><circle cx="215" cy="60" r="4"/><circle cx="335" cy="33" r="4"/></g><text x="290" y="130" fill="#93623d" font-size="10" font-family="monospace">PERSONAL PORT COLOR</text></svg>',sign:'<svg viewBox="0 0 450 150" aria-hidden="true"><g fill="none" stroke="#bd7740"><path d="M225 47V86L189 120M225 86L256 120M225 58L187 75L152 37M225 58L263 78L297 44M152 37L142 21M152 37L153 16M152 37L165 20M297 44L290 26M297 44L300 22M297 44L312 29" stroke-width="2"/><circle cx="225" cy="29" r="17"/></g><g fill="#984c1a"><circle cx="225" cy="58" r="4"/><circle cx="187" cy="75" r="4"/><circle cx="263" cy="78" r="4"/><circle cx="225" cy="86" r="4"/><circle cx="152" cy="37" r="4"/><circle cx="297" cy="44" r="4"/></g><text x="28" y="84" font-size="11" fill="#92643c" font-family="monospace">LANGUAGE</text><text x="340" y="84" font-size="11" fill="#92643c" font-family="monospace">MOTION</text></svg>',customs:'<div class="art-word" style="color:#b76536">HS <span style="font-size:30px;opacity:.55">/</span> Code<small>FROM DESCRIPTION TO CLASSIFICATION</small></div>',software:'<div class="art-word" style="color:#a36527">Portfolio OS<small>ONE RECORD, MANY POSSIBILITIES</small></div>'};
arts.moa='<div class="art-word" style="color:#a36527">모아<small>LOCAL FILES · HUMAN APPROVAL</small></div>';
arts.vehicle='<div class="art-word" style="color:#9a4d25">Hy! mate<small>VEHICLE SIGNAL · DRIVE REPORT</small></div>';
arts.mdae='<div class="art-word" style="color:#a3561f">Dual-Tower AE<small>MASKED · BILATERAL COLD-START</small></div>';
arts.feduf='<div class="art-word" style="color:#9a4d25">Unlearning<small>FEDERATED · FOOTPRINT REMOVAL</small></div>';
arts.musicrec='<div class="art-word" style="color:#a85a24">♪ Rec<small>SONG × MEMBER MATCHING</small></div>';
arts.crawl='<div class="art-word" style="color:#8f5a2a">Crawl<small>MULTI-PLATFORM · ONE SCHEMA</small></div>';
arts.timetable='<div class="art-word" style="color:#a36527">Timetable<small>EXCEL → SCHEDULE</small></div>';
arts.recreation='<div class="art-word" style="color:#a9521f">Quiz Night<small>EVENT · TEAM SCORES</small></div>';
arts.xai6='<div class="art-word" style="color:#9a5a26">Transformer<small>X:AI 6TH · U-NET</small></div>';
arts.xai7='<div class="art-word" style="color:#9a5a26">Attention<small>X:AI 7TH · TRANSFORMER·YOLO</small></div>';
arts.cicd='<div class="art-word" style="color:#8f5a2a">CI / CD<small>FLASK · DOCKER · ACTIONS</small></div>';
arts.recipe='<div class="art-word" style="color:#a85a24">Yakisoba<small>ONE-PAN RECIPE WEB</small></div>';
arts.blackjack='<div class="art-word" style="color:#a36527">21<small>PYTHON LEARNING · CONSOLE GAME</small></div>';
const grid=document.querySelector('#project-grid');
const renderCards = list => list.map((p,i)=>`<article class="project-card" data-type="${p.type}" data-competition="${!!p.competition}"><div class="project-art ${p.art}"><span class="art-label">${esc(p.label)}</span>${arts[p.art]}<span class="art-id">${p.kind==='research'?'RESEARCH':'PROJECT'} ${String(i+1).padStart(2,'0')}</span></div><div class="project-content"><div class="project-topline"><span>${esc(p.date)}</span><span class="status">${esc(p.status)}</span></div>${p.category?`<span class="card-cat">${esc(p.category)}</span>`:''}<h3>${esc(p.title)}</h3><p class="description">${esc(p.subtitle)}</p><p class="role-line"><b>기여</b>${esc(p.role)}</p><div class="outcome-box"><span>성과 · ${esc(p.outcome_kind)}</span><p>${esc(p.outcome)}</p></div><div class="tags">${p.tags.map(t=>`<span>${esc(t)}</span>`).join('')}</div><div class="project-bottom"><button data-project="${p.id}" aria-label="${esc(p.title)} 상세 보기">프로젝트 읽기 <span>↗</span></button>${p.repo?`<a href="${p.repo}" target="_blank" rel="noopener noreferrer">GitHub ↗</a>`:'<span style="font-size:10px;color:var(--muted)">프로젝트 기록</span>'}</div></div></article>`).join('');
function renderAll(){grid.innerHTML=renderCards(projects.filter(p=>p.kind==='project'));
document.querySelector('#research-experience-grid').innerHTML=renderCards(projects.filter(p=>p.kind==='research'));}
document.querySelectorAll('[data-filter]').forEach(btn=>btn.addEventListener('click',()=>{
 document.querySelectorAll('[data-filter]').forEach(b=>{b.classList.toggle('active',b===btn);b.setAttribute('aria-pressed',b===btn?'true':'false')});
 let count=0;grid.querySelectorAll('.project-card').forEach(card=>{card.hidden=btn.dataset.filter==='competition'?card.dataset.competition!=='true':btn.dataset.filter!=='all'&&card.dataset.type!==btn.dataset.filter;if(!card.hidden)count++});
 document.querySelector('#project-count').textContent=`${count} projects`;
}));
const workTabs=document.querySelectorAll('.work-tabs [data-tab]');
const workPanels={projects:document.querySelector('#projects-panel'),research:document.querySelector('#research-panel')};
function switchWorkTab(name){if(!workPanels[name])return;workTabs.forEach(t=>{const on=t.dataset.tab===name;t.classList.toggle('active',on);t.setAttribute('aria-selected',on?'true':'false')});Object.entries(workPanels).forEach(([k,el])=>{if(el)el.hidden=k!==name})}
workTabs.forEach(t=>t.addEventListener('click',()=>switchWorkTab(t.dataset.tab)));
document.querySelectorAll('[data-gototab]').forEach(a=>a.addEventListener('click',()=>switchWorkTab(a.dataset.gototab)));
const todoHtml='<span class="todo">보완 필요</span>';
const fieldVal=v=>(!v||v==='보완 필요')?todoHtml:esc(v);
const linkList=p=>`<div class="detail-links">${p.links.map(([label,url])=>`<a href="${url}" target="_blank" rel="noopener noreferrer">${esc(label)} ↗</a>`).join('')}</div>`;
const bulletList=rows=>(Array.isArray(rows)&&rows.length)?`<ul class="feature-list">${rows.map(([t,d])=>`<li><b>${esc(t)}</b>${esc(d)}</li>`).join('')}</ul>`:todoHtml;
function dialogV2(p){
 const specs=[['성과 · 결과',p.result?esc(p.result):'<span class="todo">X</span>'],['팀 구성',fieldVal(p.teamSize)],['내 역할',fieldVal(p.myRole||p.role)],['기술 스킬',`<span class="skill-row">${(p.skills||p.tags).map(s=>`<span class="spec-chip">${esc(s)}</span>`).join('')}</span>`]];
 return `<div class="dialog-tags-top"><span class="cat-badge">${esc(p.category)}</span>${p.competition?'<span class="cat-badge alt">대회·공모전</span>':''}</div><h2 id="dialog-title">${esc(p.title)}</h2><p class="dialog-benefit">${esc(p.benefitName||p.subtitle)}</p><div class="spec-grid">${specs.map(([k,v])=>`<div><span>${k}</span><p>${v}</p></div>`).join('')}</div><h3>문제 제시</h3><p class="detail-p">${fieldVal(p.problem)}</p><h3>사회 기여 · 경제적 이득</h3><p class="detail-p">${fieldVal(p.impact)}</p><h3>핵심 기능</h3>${bulletList(p.features)}<h3>집중한 문제 · 트러블슈팅</h3>${bulletList(p.troubleshooting)}<p class="detail-note">${esc(p.note)}</p>${linkList(p)}`;
}
function dialogLegacy(p){
 return `<p class="dialog-meta">${esc(p.date)} / ${esc(p.status)}</p><h2 id="dialog-title">${esc(p.title)}</h2><p class="dialog-summary">${esc(p.summary)}</p><div class="outcome-box"><span>성과 · ${esc(p.outcome_kind)}</span><p>${esc(p.outcome)}</p></div><div class="tags">${p.tags.map(t=>`<span>${esc(t)}</span>`).join('')}</div>${p.metrics?`<div class="project-metrics">${p.metrics.map(([value,label])=>`<div><strong>${esc(value)}</strong><span>${esc(label)}</span></div>`).join('')}</div>`:''}${p.sections.map(([title,text])=>`<h3>${esc(title)}</h3><p class="detail-p">${esc(text)}</p>`).join('')}<p class="detail-note">${esc(p.note)}</p>${linkList(p)}`;
}
const dialog=document.querySelector('#project-dialog');let lastTrigger=null;
document.querySelector('main').addEventListener('click',event=>{const btn=event.target.closest('[data-project]');if(!btn)return;const p=projects.find(p=>p.id===btn.dataset.project);lastTrigger=btn;
 document.querySelector('#dialog-content').innerHTML=p.category?dialogV2(p):dialogLegacy(p);
 dialog.showModal();dialog.scrollTop=0;document.body.classList.add('dialog-open');
});
document.querySelector('.dialog-close').addEventListener('click',()=>dialog.close());
dialog.addEventListener('click',event=>{if(event.target===dialog){const r=dialog.getBoundingClientRect();if(event.clientX<r.left||event.clientX>r.right||event.clientY<r.top||event.clientY>r.bottom)dialog.close()}});
dialog.addEventListener('close',()=>{document.body.classList.remove('dialog-open');lastTrigger?.focus()});
const values={recall:[.2653,.2097,.2283],ndcg:[.2099,.1690,.1883],mrr:[.2149,.1786,.2017]};const names=['BPR','NeuMF','LightGCN'];
function renderChart(metric){document.querySelector('#chart').innerHTML=values[metric].map((v,i)=>`<div class="bar-row"><div class="bar-heading"><span>${names[i]}</span><b>${v.toFixed(4)}</b></div><div class="bar-track" role="img" aria-label="${names[i]} ${metric}: ${v.toFixed(4)}"><div class="bar-fill" style="width:${v/.3*100}%"></div></div></div>`).join('')}
renderChart('recall');document.querySelectorAll('[data-metric]').forEach(btn=>btn.addEventListener('click',()=>{document.querySelectorAll('[data-metric]').forEach(b=>{b.classList.toggle('active',b===btn);b.setAttribute('aria-pressed',b===btn?'true':'false')});renderChart(btn.dataset.metric)}));
const menu=document.querySelector('.menu-toggle');const nav=document.querySelector('#nav');menu.addEventListener('click',()=>{const open=nav.classList.toggle('open');menu.setAttribute('aria-expanded',String(open));menu.setAttribute('aria-label',open?'메뉴 닫기':'메뉴 열기')});nav.querySelectorAll('a').forEach(a=>a.addEventListener('click',()=>{nav.classList.remove('open');menu.setAttribute('aria-expanded','false');menu.setAttribute('aria-label','메뉴 열기')}));
document.querySelector('#copy-email').addEventListener('click',async()=>{const status=document.querySelector('#copy-status');try{await navigator.clipboard.writeText('molba2see@gmail.com');status.textContent='복사했습니다.'}catch{status.textContent='이메일 주소를 선택해 복사해 주세요.'}setTimeout(()=>{status.textContent=''},4500)});
fetch('data/projects.json',{cache:'no-store'}).then(r=>r.json()).then(d=>{projects=d;renderAll();}).catch(e=>console.error('projects load failed',e));
