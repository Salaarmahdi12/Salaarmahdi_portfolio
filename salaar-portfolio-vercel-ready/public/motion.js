(() => {
  const header = document.querySelector('.header');
  let queued = false;
  const updateHeader = () => { header.classList.toggle('scrolled', window.scrollY > 50); queued = false; };
  addEventListener('scroll', () => { if (!queued) { queued = true; requestAnimationFrame(updateHeader); } }, {passive:true});
  updateHeader();
  const navLinks = [...document.querySelectorAll('#navigation a')];
  if ('IntersectionObserver' in window) {
    const navObserver = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          navLinks.forEach(a => { if (a.hash === '#' + entry.target.id) a.setAttribute('aria-current','location'); else a.removeAttribute('aria-current'); });
        }
      });
    }, {rootMargin:'-15% 0px -55% 0px',threshold:0});
    document.querySelectorAll('main section[id]').forEach(section => navObserver.observe(section));
  }
  const grid = document.querySelector('#project-grid');
  const motionAllowed = matchMedia('(prefers-reduced-motion: no-preference)');
  const finePointer = matchMedia('(hover: hover) and (pointer: fine)');
  function animateCards() {
    if (!motionAllowed.matches) return;
    [...grid.children].forEach((card,i) => { card.style.setProperty('--entry-delay',Math.min(i*45,225)+'ms');card.classList.add('enter-card');card.addEventListener('animationend',()=>card.classList.remove('enter-card'),{once:true}); });
  }
  animateCards();
  new MutationObserver(animateCards).observe(grid,{childList:true});
  let pointerFrame = 0;
  document.addEventListener('pointermove', event => {
    if (!motionAllowed.matches || !finePointer.matches) return;
    const card = event.target.closest('.project-card,.expertise-card');
    if (!card || pointerFrame) return;
    const x=event.clientX,y=event.clientY;
    pointerFrame=requestAnimationFrame(()=>{
      const r=card.getBoundingClientRect();
      card.style.setProperty('--spot-x',(x-r.left)+'px');card.style.setProperty('--spot-y',(y-r.top)+'px');
      card.style.setProperty('--tilt-x',((x-r.left)/r.width*6-3)+'deg');card.style.setProperty('--tilt-y',(-((y-r.top)/r.height*4-2))+'deg');pointerFrame=0;
    });
  },{passive:true});
})();
