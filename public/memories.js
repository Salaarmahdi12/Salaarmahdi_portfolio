(() => {
  const albums = [...document.querySelectorAll('.memory-event')];
  const toolbar = document.createElement('div');
  toolbar.className = 'memory-explorer';
  toolbar.setAttribute('aria-label', 'Explore memories by category');
  const intro = document.createElement('p');
  intro.className = 'memory-explorer-label';
  intro.textContent = 'MY JOURNEY, THROUGH THE LENS';
  const filters = document.createElement('div'); filters.className = 'memory-filters';
  const status = document.createElement('p'); status.className = 'memory-filter-status';
  status.setAttribute('role', 'status');
  const choices = [['all','All moments'],['expos','Expos & showcases'],['seminars','Learning'],['celebrations','Milestones'],['personal','Campus life']];
  function apply(category) {
    let count = 0, photos = 0;
    albums.forEach(album => {
      album.hidden = category !== 'all' && album.dataset.memoryCategory !== category;
      if (!album.hidden) { count++; photos += album.querySelectorAll('[data-memory-photo]').length; }
    });
    filters.querySelectorAll('button').forEach(button => button.setAttribute('aria-pressed',String(button.dataset.category === category)));
    status.textContent = `${count} ${count === 1 ? 'album' : 'albums'} · ${photos} photographs`;
  }
  choices.forEach(([category,label]) => {
    const button = document.createElement('button'); button.type = 'button';
    button.textContent = label; button.dataset.category = category;
    button.addEventListener('click', () => apply(category)); filters.append(button);
  });
  toolbar.append(intro,filters,status); albums[0].before(toolbar); apply('all');
  addEventListener('hashchange', () => {
    const target = document.getElementById(location.hash.slice(1));
    if(target?.classList.contains('memory-event') && target.hidden) { apply('all'); target.scrollIntoView(); }
  });
  const allLinks = [...document.querySelectorAll('[data-memory-photo]')];
  let links = allLinks;
  const dialog = document.querySelector('#memory-dialog');
  const photo = document.querySelector('#memory-full');
  const caption = document.querySelector('#memory-caption');
  let index = 0, opener, previousOverflow;
  function show(next) {
    index = (next + links.length) % links.length;
    photo.src = links[index].href;
    photo.alt = links[index].querySelector('img').alt;
    caption.textContent = `${index + 1} / ${links.length} · ${photo.alt}`;
  }
  function openAlbum(album, trigger, selected = 0) {
    links = [...album.querySelectorAll('[data-memory-photo]')];
    dialog.setAttribute('aria-label', album.querySelector('h3').textContent + ' photo gallery');
    opener = trigger; show(selected);
    previousOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden'; dialog.showModal();
  }
  allLinks.forEach(link => link.addEventListener('click', event => {
    event.preventDefault();
    const album = link.closest('.memory-event');
    openAlbum(album, link, [...album.querySelectorAll('[data-memory-photo]')].indexOf(link));
  }));
  document.querySelectorAll('.memory-event').forEach(album => {
    const count = album.querySelectorAll('[data-memory-photo]').length;
    album.classList.add('compact-album');
    const button = document.createElement('button');
    button.type = 'button';
    button.className = 'button album-view-all';
    button.textContent = `View all ${count} photos ↗`;
    button.setAttribute('aria-label', `View all ${count} photos from ${album.querySelector('h3').textContent}`);
    button.setAttribute('aria-haspopup', 'dialog');
    button.addEventListener('click', () => openAlbum(album, button));
    const hint = album.querySelector('.memory-hint');
    hint.textContent = `3 previews · ${count} memories in this album`;
    hint.after(button);
  });
  dialog.querySelector('.memory-close').addEventListener('click', () => dialog.close());
  document.querySelector('#memory-prev').addEventListener('click', () => show(index - 1));
  document.querySelector('#memory-next').addEventListener('click', () => show(index + 1));
  dialog.addEventListener('keydown', event => {
    if (event.key === 'ArrowLeft') { event.preventDefault(); show(index - 1); }
    if (event.key === 'ArrowRight') { event.preventDefault(); show(index + 1); }
  });
  dialog.addEventListener('click', event => {
    const r = dialog.getBoundingClientRect();
    if (event.target === dialog && (event.clientX < r.left || event.clientX > r.right || event.clientY < r.top || event.clientY > r.bottom)) dialog.close();
  });
  dialog.addEventListener('close', () => { document.body.style.overflow = previousOverflow; opener?.focus(); });
})();
