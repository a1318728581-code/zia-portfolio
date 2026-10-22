/* 小知 × 玛丽猫 作品集 — 共享交互 */
(function () {
  document.querySelectorAll('.marie-slot').forEach(el => {
    el.innerHTML = '<img src="assets/xiaozhi-marie.png" alt="白色长毛猫玛丽，系着蝴蝶结">';
  });

  /* ---------- 滚动显现 ---------- */
  const revealIO = new IntersectionObserver((es) => {
    es.forEach((e) => {
      if (e.isIntersecting) { e.target.classList.add('in'); revealIO.unobserve(e.target); }
    });
  }, { threshold: 0.12 });
  document.querySelectorAll('.reveal').forEach((el) => revealIO.observe(el));

  /* ---------- 能力条动画 ---------- */
  const barIO = new IntersectionObserver((es) => {
    es.forEach((e) => {
      if (e.isIntersecting) {
        e.target.querySelectorAll('.bar i').forEach((b) => { b.style.width = (b.dataset.w || 80) + '%'; });
        barIO.unobserve(e.target);
      }
    });
  }, { threshold: 0.4 });
  document.querySelectorAll('.skill-card').forEach((el) => barIO.observe(el));

  /* ---------- 卡片 3D 倾斜 ---------- */
  document.querySelectorAll('.tilt').forEach((card) => {
    card.addEventListener('mousemove', (e) => {
      const r = card.getBoundingClientRect();
      const x = (e.clientX - r.left) / r.width - 0.5;
      const y = (e.clientY - r.top) / r.height - 0.5;
      card.style.transform = `perspective(900px) rotateY(${x * 6}deg) rotateX(${-y * 6}deg) translateY(-4px)`;
    });
    card.addEventListener('mouseleave', () => { card.style.transform = ''; });
  });

  /* ---------- 图片放大 Lightbox（img.zoomable，data-full 指定高清图） ---------- */
  const lb = document.getElementById('lightbox');
  if (lb) {
    const lbImg = lb.querySelector('img');
    document.querySelectorAll('img.zoomable').forEach((img) => {
      img.style.cursor = 'zoom-in';
      img.addEventListener('click', () => {
        lbImg.src = img.dataset.full || img.src;
        lb.classList.add('open');
      });
    });
    const close = () => lb.classList.remove('open');
    lb.querySelector('.close').addEventListener('click', close);
    lb.addEventListener('click', (e) => { if (e.target === lb) close(); });
    document.addEventListener('keydown', (e) => { if (e.key === 'Escape') close(); });
  }

  /* ---------- 复制邮箱 ---------- */
  document.querySelectorAll('[data-copy]').forEach((btn) => {
    btn.addEventListener('click', async () => {
      const text = btn.dataset.copy;
      try {
        await navigator.clipboard.writeText(text);
      } catch (err) {
        const ta = document.createElement('textarea');
        ta.value = text; document.body.appendChild(ta); ta.select();
        document.execCommand('copy'); ta.remove();
      }
      const old = btn.textContent;
      btn.textContent = '已复制 ✓';
      setTimeout(() => { btn.textContent = old; }, 1600);
    });
  });

})();
/* Native anchors preserve direct linking, browser history and keyboard access. */
(() => {
  const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  if ('IntersectionObserver' in window && !reduced) {
    document.documentElement.classList.add('motion-ready');
    document.querySelectorAll('.nav-cards, .case-list').forEach(group => {
      group.querySelectorAll('.reveal').forEach((item, i) => item.style.transitionDelay = `${Math.min(i, 2) * 70}ms`);
    });
  }
  const header = document.querySelector('header');
  if (header && 'ResizeObserver' in window) new ResizeObserver(() => {
    document.documentElement.style.setProperty('--header-height', `${header.offsetHeight}px`);
  }).observe(header);
  const top = document.createElement('button');
  top.className = 'back-top';
  top.textContent = '↑';
  top.setAttribute('aria-label', '返回顶部');
  document.body.append(top);
  top.addEventListener('click', () => { window.scrollTo({top: 0, behavior: reduced ? 'instant' : 'smooth'}); });
  const updateTop = () => top.classList.toggle('visible', window.scrollY > 500);
  window.addEventListener('scroll', updateTop, {passive: true});
  updateTop();
  const links = [...document.querySelectorAll('.track-nav a')];
  const syncTrack = () => {
    if (!links.length) return;
    const second = document.getElementById('operations');
    const current = second && second.getBoundingClientRect().top < window.innerHeight * .5 ? '#operations' : '#product';
    links.forEach(link => link.hash === current ? link.setAttribute('aria-current', 'location') : link.removeAttribute('aria-current'));
  };
  window.addEventListener('scroll', syncTrack, {passive: true});
  syncTrack();
})();

