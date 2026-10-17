const email = 'salaarmahdi.official.pk@gmail.com';
const grid = document.querySelector('#project-grid');
const search = document.querySelector('#project-search');
const dialog = document.querySelector('#project-dialog');
const reducedMotion = matchMedia('(prefers-reduced-motion: reduce)').matches;
let filter = 'All';
let lastProjectButton;
let galleryCleanups = [];
const mockTitles = ['Try them on. In real time.','A smarter school day.','Explore anatomy in 3D.','Less reading. More clarity.','Explore. Assemble. Understand.','Your next chapter.','Find your next wristwatch.','Keep your words private.','Every part in its place.','A home for your brand.'];
const mockRows = [['Live AR view','Virtual shoe try-on'],['Academic records','Attendance overview'],['Organ atlas','Guided learning'],['Your document','Key takeaways'],['3D components','AI-assisted assembly'],['Experience','Live preview'],['3D watch collection','Live AR try-on'],['Your message','Encrypted output'],['Inventory','Order management'],['Responsive layouts','Custom themes']];
function el(tag, className, text) { const n = document.createElement(tag); if (className) n.className = className; if (text !== undefined) n.textContent = text; return n; }
function renderProjects() {
  const query = search.value.trim().toLowerCase();
  const shown = portfolioProjects.filter(p => (filter === 'All' || p.category === filter) && [p.title,p.description,...p.tags].join(' ').toLowerCase().includes(query));
  galleryCleanups.forEach(stop => stop()); galleryCleanups = [];
  grid.replaceChildren();
  shown.forEach(p => {
    const index = portfolioProjects.indexOf(p);
    const card = el('article','project-card');
    const visual = el('div','project-visual'); visual.setAttribute('aria-hidden','true');
    const mock = el('div','mock-window');
    const top = el('div','mock-top'); for(let i=0;i<3;i++) top.append(el('i')); top.append(el('span','',p.category.toUpperCase()));
    const layout = el('div','mock-layout'); const side = el('div','mock-sidebar');for(let i=0;i<5;i++) side.append(el('i'));
    const content = el('div','mock-content');content.append(el('span','','SALAAR / PROJECT '+String(index+1).padStart(2,'0')),el('div','mock-title',mockTitles[index]));
    if(index === 1 || index === 6 || index === 8){const bars=el('div','mock-bars');[30,60,45,80,65,95,72].forEach(h=>{const b=el('i');b.style.height=h+'%';bars.append(b)});content.append(bars);}
    mockRows[index].forEach((label,i)=>{const row=el('div','mock-row',label);row.append(el('b','',i?'↗':'●'));content.append(row)});
    layout.append(side,content);mock.append(top,layout);visual.append(mock,el('span','mock-note','CONCEPT PREVIEW'));
    if(p.id === 'ai-text-summarization') setupProjectGallery(visual,card,{title:p.title,folder:'summarizer',labels:['Dashboard','Input & Documents','Summarization Configuration','Results','History']});
    if(p.id === 'bioview-3d-system') setupProjectGallery(visual,card,{title:p.title,folder:'bioview',labels:['Interactive Anatomy','Organ Atlas','Guided Learning']});
    if(p.id === 'computer-explorer-3d') setupProjectGallery(visual,card,{title:p.title,folder:'computer-explorer',labels:['3D Component Explorer','PC Assembly Lab']});
    if(p.id === 'chronfit-ar') setupProjectGallery(visual,card,{title:p.title,folder:'chronfit',labels:['3D Watch Collection','Live AR Try-on']});
    if(p.id === 'fitfoot-ar') setupProjectGallery(visual,card,{title:p.title,folder:'fitfoot',labels:['Foot Measurements','Shoe Collection']});
    if(p.id === 'school-mgmt-system') setupProjectGallery(visual,card,{title:p.title,folder:'school',labels:['Sign-in Portal','Admin Dashboard','Teacher Dashboard']});
    if(p.id === 'tomato-care') {
      visual.replaceChildren();visual.removeAttribute('aria-hidden');visual.classList.add('tomato-visual');
      const screenshot=el('img','tomato-screenshot');screenshot.src='assets/tomato-care/analyze.webp';screenshot.alt='Tomato Care leaf photo upload and analysis screen';screenshot.loading='lazy';screenshot.decoding='async';visual.append(screenshot);
    }
    if(p.id === 'wordpress-frontend-projects') {
      setupProjectGallery(visual,card,{title:p.title,folder:'wordpress',files:['web-development.webp','web-design.webp'],labels:['Web Development Illustration','Web Design Illustration'],mediaType:'images'});
    }
    const meta=el('div','project-meta');const button=el('button','project-open','↗');button.setAttribute('aria-label','View '+p.title+' details');button.addEventListener('click',()=>openProject(p,button));meta.append(el('h3','',p.title),button);
    if(p.caseStudy){const study=el('button','case-study-link','Read case study ↗');study.type='button';study.setAttribute('aria-label','Read '+p.title+' case study');study.addEventListener('click',()=>openProject(p,study));card.append(study);}
    const tags=el('div','tags');p.tags.forEach(t=>tags.append(el('span','',t)));
    card.prepend(visual,meta,el('p','project-desc',p.description),tags);grid.append(card);
  });
  document.querySelector('#empty-state').hidden=shown.length>0;
  document.querySelector('#result-count').textContent=shown.length+' projects shown';
}
function openProject(p,button){lastProjectButton=button;document.querySelector('#dialog-title').textContent=p.title;document.querySelector('#dialog-category').textContent=p.category;document.querySelector('#dialog-description').textContent=p.detailedDescription;const tags=document.querySelector('#dialog-tags');tags.replaceChildren(...p.tags.map(t=>el('span','',t)));document.querySelector('#project-inquiry').href='mailto:'+email+'?subject='+encodeURIComponent('Let’s discuss '+p.title);renderCaseStudy(p);dialog.showModal();dialog.scrollTop=0;document.body.style.overflow='hidden';}
dialog.querySelector('.dialog-close').addEventListener('click',()=>dialog.close());
dialog.addEventListener('click',e=>{if(e.target===dialog){const r=dialog.getBoundingClientRect();if(e.clientX<r.left||e.clientX>r.right||e.clientY<r.top||e.clientY>r.bottom)dialog.close();}});
dialog.addEventListener('close',()=>{document.body.style.overflow='';lastProjectButton?.focus();});
document.querySelectorAll('[data-filter]').forEach(b=>b.addEventListener('click',()=>{filter=b.dataset.filter;document.querySelectorAll('[data-filter]').forEach(x=>{x.classList.toggle('active',x===b);x.setAttribute('aria-pressed',String(x===b))});renderProjects();}));
search.addEventListener('input',renderProjects);renderProjects();
const menu=document.querySelector('.menu-toggle');const nav=document.querySelector('#navigation');
function closeMenu(){nav.classList.remove('open');menu.setAttribute('aria-expanded','false');menu.setAttribute('aria-label','Open navigation');}
menu.addEventListener('click',()=>{const open=nav.classList.toggle('open');menu.setAttribute('aria-expanded',String(open));menu.setAttribute('aria-label',open?'Close navigation':'Open navigation');});
nav.querySelectorAll('a').forEach(a=>a.addEventListener('click',closeMenu));document.addEventListener('keydown',e=>{if(e.key==='Escape')closeMenu()});
document.querySelector('#copy-email').addEventListener('click',async()=>{const status=document.querySelector('#copy-status');try{await navigator.clipboard.writeText(email);status.textContent='Email copied to clipboard.'}catch{status.textContent='Please select and copy the email address above.'}});
document.querySelector('#contact-form').addEventListener('submit', e => {
  const form = e.currentTarget;
  for (const field of ['name', 'email', 'message']) {
    const input = form.elements.namedItem(field);
    input.value = input.value.trim();
  }
  if (!form.reportValidity()) { e.preventDefault(); return; }
  form.elements.namedItem('_subject').value = 'Portfolio message from ' + form.elements.namedItem('name').value;
  document.querySelector('#form-status').textContent = 'Opening secure submission. Follow the next page to finish sending your message.';
});
document.querySelector('#year').textContent=new Date().getFullYear();
if(!reducedMotion && 'IntersectionObserver' in window){document.documentElement.classList.add('motion-ready');const observer=new IntersectionObserver(entries=>entries.forEach(e=>{if(e.isIntersecting){e.target.classList.add('visible');observer.unobserve(e.target)}}),{threshold:0.08});document.querySelectorAll('.reveal').forEach(e=>observer.observe(e));}
let ticking=false;function progress(){const max=document.documentElement.scrollHeight-innerHeight;document.querySelector('.scroll-progress').style.width=(max>0?scrollY/max*100:0)+'%';ticking=false;}window.addEventListener('scroll',()=>{if(!ticking){requestAnimationFrame(progress);ticking=true}},{passive:true});progress();

// Three-photo portrait: hover slideshow and manual touch/keyboard navigation.
const portraitSwitch = document.querySelector('.portrait-switch');
if (portraitSwitch) {
  const photos = [...portraitSwitch.querySelectorAll('img')];
  const motion = matchMedia('(prefers-reduced-motion: reduce)');
  let current = 0, timer = null;
  const stop = () => { clearInterval(timer); timer = null; };
  const show = index => {
    current = index;
    photos.forEach((photo, i) => {
      if(i===current&&!photo.getAttribute('src'))photo.src=photo.dataset.src;photo.classList.toggle('is-active', i === current);
      photo.setAttribute('aria-hidden', 'true');
    });
    portraitSwitch.setAttribute('aria-label', `Salaar Mahdi, photo ${current + 1} of ${photos.length}. Show next photo`);
  };
  portraitSwitch.removeAttribute('aria-pressed');
  show(0);
  portraitSwitch.addEventListener('pointerenter', event => {
    if (event.pointerType !== 'mouse') return;
    stop(); show((current + 1) % photos.length);
    if (!motion.matches) timer = setInterval(() => show((current + 1) % photos.length), 2000);
  });
  portraitSwitch.addEventListener('pointerleave', event => {
    if (event.pointerType === 'mouse') { stop(); show(0); }
  });
  portraitSwitch.addEventListener('click', () => { stop(); show((current + 1) % photos.length); });
  portraitSwitch.addEventListener('keydown', event => {
    if (event.key === 'Escape') { stop(); show(0); }
  });
  portraitSwitch.addEventListener('blur', stop);
  document.addEventListener('visibilitychange', () => { if (document.hidden) { stop(); show(0); } });
  motion.addEventListener('change', stop);
}

function setupProjectGallery(visual,card,config) {
  const labels=config.labels;
  visual.replaceChildren();visual.removeAttribute('aria-hidden');visual.classList.add('screenshot-gallery');
  visual.setAttribute('role','region');visual.setAttribute('aria-label',config.title+' '+(config.mediaType || 'screenshots'));
  const stage=el('div','screenshot-stage');
  const images=labels.map((label,i)=>{const img=el('img','project-screenshot');img.dataset.src='assets/'+config.folder+'/'+(config.files?.[i] || (i+1)+'.webp');if(i===0)img.src=img.dataset.src;img.alt=config.title+' — '+label;img.loading='lazy';img.decoding='async';stage.append(img);return img;});
  const controls=el('div','screenshot-controls');
  const previous=el('button','screenshot-arrow','‹');previous.type='button';previous.setAttribute('aria-label','Previous screenshot');
  const next=el('button','screenshot-arrow','›');next.type='button';next.setAttribute('aria-label','Next screenshot');
  const caption=el('span','screenshot-label');
  const dots=el('div','screenshot-dots');
  const dotButtons=labels.map((label,i)=>{const dot=el('button','screenshot-dot');dot.type='button';dot.setAttribute('aria-label','Show '+label+' screenshot');dot.addEventListener('click',()=>{stop();show(i)});dots.append(dot);return dot;});
  const pause=el('button','screenshot-pause','Ⅱ');pause.type='button';pause.setAttribute('aria-label','Pause screenshot slideshow');pause.disabled=true;
  let index=0,timer=null,hovering=false,paused=false;
  function show(i){index=(i+images.length)%images.length;images.forEach((img,n)=>{if(n===index&&!img.getAttribute('src'))img.src=img.dataset.src;img.classList.toggle('is-current',n===index);img.setAttribute('aria-hidden',String(n!==index))});dotButtons.forEach((dot,n)=>dot.setAttribute('aria-pressed',String(n===index)));caption.textContent=(index+1)+' / '+images.length+' · '+labels[index];}
  function stop(){clearInterval(timer);timer=null;pause.disabled=true;}
  function start(){if(timer||paused||reducedMotion||document.hidden)return;pause.disabled=false;timer=setInterval(()=>show(index+1),1800);}
  card.addEventListener('pointerenter',e=>{if(e.pointerType==='mouse'){hovering=true;paused=false;start();}});
  card.addEventListener('pointerleave',e=>{if(e.pointerType==='mouse'){hovering=false;stop();show(0);}});
  controls.addEventListener('pointerenter',stop);
  controls.addEventListener('pointerleave',()=>{if(hovering&&!controls.contains(document.activeElement))start()});
  controls.addEventListener('focusin',stop);
  previous.addEventListener('click',()=>{stop();show(index-1)});next.addEventListener('click',()=>{stop();show(index+1)});
  pause.addEventListener('click',()=>{paused=true;stop()});
  const visibility=()=>{if(document.hidden)stop();};document.addEventListener('visibilitychange',visibility);
  galleryCleanups.push(()=>{stop();document.removeEventListener('visibilitychange',visibility)});
  controls.append(previous,caption,dots,next,pause);visual.append(stage,controls);show(0);
}

function renderCaseStudy(project){
  const container=document.querySelector('#dialog-case-study');
  container.replaceChildren();
  dialog.classList.toggle('has-case-study',Boolean(project.caseStudy));
  if(!project.caseStudy)return;
  container.append(el('p','case-study-label',project.caseStudy.label));
  project.caseStudy.sections.forEach(item=>{const section=el('section','case-study-section');section.append(el('h3','',item.title),el('p','',item.text));container.append(section);});
}
