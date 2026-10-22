/* Marie's optional, visitor-paced tour. No automatic page advancement. */
(() => {
  const pet = document.getElementById('narrator');
  const button = document.getElementById('catBtn');
  const bubble = document.getElementById('narratorBubble');
  if (!pet || !button || !bubble) return;
  const catMarkup = "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 160 180\" fill=\"none\" aria-label=\"白色长毛猫玛丽\">\n<defs><linearGradient id=\"marie-fur\" x1=\"45\" y1=\"35\" x2=\"115\" y2=\"170\" gradientUnits=\"userSpaceOnUse\"><stop stop-color=\"#fffefa\"/><stop offset=\".7\" stop-color=\"#fffaf9\"/><stop offset=\"1\" stop-color=\"#eae2ef\"/></linearGradient><linearGradient id=\"marie-ear\" x1=\"30\" y1=\"15\" x2=\"55\" y2=\"60\"><stop stop-color=\"#f3c4d4\"/><stop offset=\"1\" stop-color=\"#fbe5e6\"/></linearGradient><linearGradient id=\"marie-eye\" x1=\"0\" y1=\"0\" x2=\"0\" y2=\"1\"><stop stop-color=\"#6d7caf\"/><stop offset=\"1\" stop-color=\"#b4d7ec\"/></linearGradient></defs>\n<g stroke=\"#c8b5c6\" stroke-width=\"1.8\" stroke-linecap=\"round\" stroke-linejoin=\"round\">\n<g class=\"cat-tail\"><path d=\"M105 150C145 164 156 131 147 111C143 102 133 103 133 115C135 129 124 130 116 124\" fill=\"url(#marie-fur)\"/><path d=\"M141 112Q149 133 132 142\" stroke=\"#e4d6e5\"/></g>\n<g class=\"cat-body\"><path d=\"M54 103C40 116 36 138 43 156L36 160L48 164Q75 180 109 163L123 158L115 151C121 130 109 111 99 104Z\" fill=\"url(#marie-fur)\"/>\n<path d=\"M67 126Q61 141 63 159M94 126Q100 143 97 159\" stroke=\"#e1d3e1\"/><path class=\"cat-paw-left\" d=\"M60 151C44 150 44 168 60 168C74 169 74 153 60 151Z\" fill=\"#fffdfb\"/><path class=\"cat-paw-right\" d=\"M101 151C85 150 85 168 100 168C115 168 115 152 101 151Z\" fill=\"#fffdfb\"/><path d=\"M56 161V165M62 162V166M97 161V165M103 162V166\" stroke=\"#d8c8d7\"/></g>\n<g class=\"cat-head\"><path d=\"M30 65Q17 43 24 16Q44 18 59 39M100 37Q118 16 138 18Q143 47 128 66\" fill=\"url(#marie-fur)\"/>\n<path d=\"M31 42L30 26Q43 29 49 41M112 41Q123 27 132 28L129 48\" fill=\"url(#marie-ear)\" stroke=\"#e1b9c8\"/>\n<path d=\"M40 43L35 37L35 48Q22 58 23 76L17 83L25 85L20 94L32 94L29 103L42 102Q52 120 81 120Q108 120 119 103L132 104L129 95L141 95L134 85L143 82L134 76Q136 55 119 45L123 37L112 42Q104 34 91 34L84 26L80 35L72 29L66 37Q52 35 40 43Z\" fill=\"url(#marie-fur)\"/>\n<path d=\"M72 39L68 45M79 37L76 44M87 40L84 45\" stroke=\"#e4d6e5\"/>\n<g class=\"cat-eyes\"><ellipse cx=\"55\" cy=\"75\" rx=\"12\" ry=\"16\" fill=\"url(#marie-eye)\" stroke=\"#86778e\"/><ellipse cx=\"105\" cy=\"75\" rx=\"12\" ry=\"16\" fill=\"url(#marie-eye)\" stroke=\"#86778e\"/><ellipse cx=\"57\" cy=\"75\" rx=\"6\" ry=\"12\" fill=\"#4b425e\" stroke=\"none\"/><ellipse cx=\"103\" cy=\"75\" rx=\"6\" ry=\"12\" fill=\"#4b425e\" stroke=\"none\"/><ellipse cx=\"52\" cy=\"68\" rx=\"4\" ry=\"5\" fill=\"white\" stroke=\"none\"/><ellipse cx=\"100\" cy=\"68\" rx=\"4\" ry=\"5\" fill=\"white\" stroke=\"none\"/><circle cx=\"60\" cy=\"83\" r=\"2\" fill=\"white\" stroke=\"none\"/><circle cx=\"109\" cy=\"83\" r=\"2\" fill=\"white\" stroke=\"none\"/></g>\n<path class=\"cat-closed-eyes\" d=\"M44 77Q55 66 66 77M94 77Q105 66 116 77\" stroke=\"#86778e\" stroke-width=\"2.5\"/>\n<ellipse cx=\"41\" cy=\"92\" rx=\"9\" ry=\"4\" fill=\"#f3d1d9\" opacity=\".65\" stroke=\"none\"/><ellipse cx=\"119\" cy=\"92\" rx=\"9\" ry=\"4\" fill=\"#f3d1d9\" opacity=\".65\" stroke=\"none\"/>\n<path d=\"M75 91Q80 87 85 91Q84 97 80 97Q76 97 75 91Z\" fill=\"#df9eae\" stroke=\"#cf94a8\"/><path d=\"M80 97V100Q73 108 68 100M80 100Q87 108 92 100\" stroke=\"#ba8fa4\"/>\n<path d=\"M43 93L24 89M43 98L22 101M117 93L137 89M117 98L140 101\" stroke=\"#cdb9cc\" stroke-width=\"1.2\"/>\n<g class=\"cat-bow\"><path d=\"M74 118Q53 103 51 116Q48 137 74 126M86 118Q107 103 110 117Q112 137 86 126\" fill=\"#c9a9e4\" stroke=\"#aa89c4\"/><path d=\"M75 125L67 140L79 135L83 141L86 125\" fill=\"#cfb1e7\" stroke=\"#aa89c4\"/><path d=\"M60 118L72 122M101 118L87 122\" stroke=\"#ead8f5\"/><rect x=\"73\" y=\"116\" width=\"15\" height=\"12\" rx=\"5\" fill=\"#b691d4\" stroke=\"#aa89c4\"/></g></g>\n<g class=\"cat-guide-paw\"><path d=\"M50 130Q30 123 28 108C26 98 15 99 16 111Q18 137 46 144\" fill=\"url(#marie-fur)\"/><path d=\"M18 106L22 108M20 103L24 106\" stroke=\"#d8c8d7\"/></g>\n</g></svg>\n";
  document.querySelectorAll('.marie-slot').forEach(slot => slot.innerHTML = catMarkup);
  const reduce = matchMedia('(prefers-reduced-motion: reduce)').matches;
  const key = 'marie-tour-v2';
  const steps = [{"page": "index.html", "target": ".profile-copy", "title": "认识我", "text": "这是我的主人王静，也是 Zia 的创作者。金融工程与数字经济，是她理解业务和数据的起点。"}, {"page": "index.html", "target": ".home-guide", "title": "看看她的作品", "text": "接下来分两站看作品：先看家庭用药管理小程序，再看紫衣小人的 xiaozhi-skill。"}, {"page": "projects.html", "target": "#medication-app", "title": "作品一 · 家庭用药小程序", "text": "从用药录入、提醒、异常反馈到家属查看，看看她怎样把照护问题拆成产品方案。"}, {"page": "projects.html", "target": "#code-story", "title": "作品二 · 我的 Skill", "text": "紫衣 Zia 会带你看资料分析、动作图解和网页交付三段流程，这个网站也延续了同一形象。"}, {"page": "experience.html", "target": ".exp-tl", "title": "工作与实习经历", "text": "御龙财务是工作经历，慧博是 AI 产品运营实习。两段实践各自展示任务、做法与结果。"}, {"page": "skills.html", "target": ".capability-list", "title": "看看我的能力", "text": "将能力放回真实任务中，看她用哪些工具、做过哪些产出，也可以点进对应项目。"}, {"page": "about.html", "target": "#make-ideas-real", "title": "把问题想清楚，也把想法做出来", "text": "从数据到内容，从工具到产品，她希望每次探索都留下具体作品。谢谢你跟着玛丽逛到这里。"}];
  let current = -1, target = null, raf = 0;
  const save = value => { try { value === null ? sessionStorage.removeItem(key) : sessionStorage.setItem(key, String(value)); } catch {} };
  const read = () => { try { const value = sessionStorage.getItem(key); return value === null ? -1 : Number(value); } catch { return -1; } };
  const pageName = () => location.pathname.split('/').pop() || 'index.html';
  const clearTarget = () => { document.querySelectorAll('.marie-tour-target').forEach(el => el.classList.remove('marie-tour-target')); target = null; };
  const show = () => { bubble.hidden = false; pet.classList.remove('hide'); button.setAttribute('aria-expanded','true'); };
  const hide = () => { bubble.hidden = true; pet.classList.add('hide'); button.setAttribute('aria-expanded','false'); };
  const home = () => { pet.classList.remove('touring','walking'); pet.style.removeProperty('left'); pet.style.removeProperty('top'); pet.style.removeProperty('right'); pet.style.removeProperty('bottom'); };
  const end = (focus = true) => { current = -1; save(null); clearTarget(); home(); hide(); if (focus) button.focus({preventScroll:true}); };
  const makeButton = (text, action, secondary = false) => { const el=document.createElement('button'); el.type='button'; el.textContent=text; el.className=secondary?'tour-secondary':'tour-primary'; el.addEventListener('click',action); return el; };
  const content = (title,text) => {
    bubble.replaceChildren();
    const heading=document.createElement('strong'); heading.className='tour-heading'; heading.textContent=title;
    const copy=document.createElement('p'); copy.textContent=text;
    bubble.append(heading,copy);
    const actions=document.createElement('div'); actions.className='tour-actions'; bubble.append(actions); return actions;
  };
  const place = () => {
    if (current < 0 || !target) return;
    const rect=target.getBoundingClientRect();
    const width=pet.offsetWidth || 270, height=pet.offsetHeight || 250;
    const narrow=innerWidth<650;
    let x=narrow?innerWidth-width-12:(rect.right+width+24<innerWidth?rect.right+18:rect.left-width-18);
    if (!narrow && x<12) x=innerWidth-width-18;
    let y=narrow?innerHeight-height-14:rect.top+rect.height/2-height/2;
    x=Math.max(12,Math.min(x,innerWidth-width-12)); y=Math.max(12,Math.min(y,innerHeight-height-12));
    pet.style.left=`${x}px`; pet.style.top=`${y}px`; pet.style.right='auto'; pet.style.bottom='auto';
  };
  const render = () => {
    const step=steps[current]; if(!step){end();return;}
    save(current);
    if(pageName()!==step.page){location.assign(step.page);return;}
    clearTarget(); target=document.querySelector(step.target);
    if(!target){end();return;}
    target.classList.add('marie-tour-target');
    const actions=content(step.title,step.text);
    const count=document.createElement('span');count.className='tour-count';count.textContent=`${current+1} / ${steps.length}`;bubble.prepend(count);
    if(current>0)actions.append(makeButton('上一步',()=>go(current-1),true));
    actions.append(makeButton(current===steps.length-1?'逛完啦':'继续 →',()=>current===steps.length-1?end():go(current+1)));
    actions.append(makeButton('结束',()=>end(),true));
    show();
    if (!pet.classList.contains('touring')) {
      const start=pet.getBoundingClientRect();
      pet.style.left=`${start.left}px`; pet.style.top=`${start.top}px`;
      pet.style.right='auto'; pet.style.bottom='auto';
      pet.getBoundingClientRect();
    }
    pet.classList.add('touring','walking');
    target.scrollIntoView({behavior:reduce?'instant':'smooth',block:'center'});
    place();
    setTimeout(()=>{pet.classList.remove('walking');place();},reduce?0:650);
    bubble.querySelector('.tour-primary').focus({preventScroll:true});
  };
  function go(index){current=index;render();}
  const menu = () => {
    home(); const actions=content('要玛丽带你逛逛吗？','七个小停靠点：认识我、看作品、用药小程序、Skill、工作与实习、能力，最后看看她的创作信念。你随时可以结束。');
    actions.append(makeButton('带我逛逛',()=>go(0)),makeButton('我自己看',()=>end(),true));show();
    bubble.querySelector('.tour-primary').focus({preventScroll:true});
  };
  button.addEventListener('click',()=> { if(current>=0){if(bubble.hidden)show();else hide();}else if(bubble.hidden)menu();else hide(); });
  document.addEventListener('keydown',e=>{if(e.key==='Escape')end();});
  document.addEventListener('click',e=>{if(current<0&&!pet.contains(e.target))hide();});
  const schedule=()=>{if(!raf)raf=requestAnimationFrame(()=>{raf=0;place();});};
  addEventListener('scroll',schedule,{passive:true});addEventListener('resize',schedule);
  const remembered=read();
  if(Number.isInteger(remembered)&&remembered>=0&&remembered<steps.length){current=remembered;requestAnimationFrame(render);}
  let blinkTimer;
  const blink=()=>{if(document.hidden||current>=0||reduce)return; pet.classList.add('blinking');clearTimeout(blinkTimer);blinkTimer=setTimeout(()=>pet.classList.remove('blinking'),180);};
  setInterval(blink,6200);
  document.addEventListener('visibilitychange',()=>pet.classList.remove('blinking'));
  addEventListener('pageshow', e=>{if(e.persisted){const value=read();if(value>=0&&value<steps.length){current=value;render();}else end(false);}});
})();

