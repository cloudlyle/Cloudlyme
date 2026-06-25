/* ================================================================
   CLOUDLYME — main.js
   Pixel-faithful to Cloudlyme.dc.html interactivity
   ================================================================ */

'use strict';

// ================================================================
// Reduced-motion guard
// ================================================================
const prefersReducedMotion =
  window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;


// ================================================================
// Cloud layer — spawned programmatically (exactly as in design)
// ================================================================
(function spawnClouds() {
  if (prefersReducedMotion) return;

  const layer = document.getElementById('cloudLayer');
  if (!layer) return;

  const cloudSVG = `<svg viewBox="0 0 260 110" width="100%" height="100%">
    <g fill="#F2A7B5">
      <ellipse cx="80"  cy="70" rx="70" ry="40"/>
      <ellipse cx="150" cy="55" rx="60" ry="50"/>
      <ellipse cx="200" cy="75" rx="55" ry="34"/>
      <ellipse cx="120" cy="80" rx="80" ry="30"/>
    </g>
  </svg>`;

  // top (vh), scale, duration (s), delay (s), opacity
  const clouds = [
    [12, 1.1, 60,   0, 0.09],
    [34, 0.8, 80, -20, 0.07],
    [58, 1.3, 95, -45, 0.08],
    [76, 0.7, 70, -10, 0.06],
  ];

  clouds.forEach(([top, scale, dur, delay, opacity]) => {
    const el = document.createElement('div');
    el.style.cssText = [
      `position:absolute`,
      `top:${top}vh`,
      `left:0`,
      `width:${260 * scale}px`,
      `height:${110 * scale}px`,
      `opacity:${opacity}`,
      `filter:blur(2px)`,
      `animation:cloudDrift ${dur}s linear ${delay}s infinite`,
      `will-change:transform`,
    ].join(';');
    el.innerHTML = cloudSVG;
    layer.appendChild(el);
  });
})();


// ================================================================
// Lift / drop hover micro-interaction (matches design's lift/drop)
// ================================================================
document.querySelectorAll('.lift').forEach((el) => {
  const baseShadow = el.style.boxShadow || '';

  el.addEventListener('mouseenter', () => {
    el.style.transform  = 'translateY(-4px)';
    el.style.boxShadow  = '0 22px 44px -14px rgba(212,104,122,0.65)';
  });
  el.addEventListener('mouseleave', () => {
    el.style.transform  = '';
    el.style.boxShadow  = baseShadow;
  });
});


// ================================================================
// Navbar — active link tracking
// ================================================================
const navbar     = document.getElementById('navbar');
const navLinks   = document.querySelectorAll('.nav__link');
const sections   = document.querySelectorAll('main, section[id], header[id], #top');

function getNavHeight() {
  return navbar ? navbar.offsetHeight : 70;
}

function updateActiveLink() {
  const scrollY = window.scrollY;
  let current = '';

  document.querySelectorAll('[id]').forEach((section) => {
    if (scrollY >= section.offsetTop - getNavHeight() - 24) {
      current = section.id;
    }
  });

  navLinks.forEach((link) => {
    link.classList.toggle(
      'is-active',
      link.getAttribute('href') === `#${current}`
    );
  });
}

window.addEventListener('scroll', updateActiveLink, { passive: true });
updateActiveLink();


// ================================================================
// Mobile nav — hamburger toggle
// ================================================================
const navToggle    = document.getElementById('navToggle');
const navLinksEl   = document.getElementById('navLinks');
const navLinkItems = navLinksEl ? navLinksEl.querySelectorAll('.nav__link') : [];

function openNav() {
  navToggle.setAttribute('aria-expanded', 'true');
  navToggle.setAttribute('aria-label', 'Close navigation menu');
  navLinksEl.classList.add('is-open');
  document.body.style.overflow = 'hidden';
}

function closeNav() {
  navToggle.setAttribute('aria-expanded', 'false');
  navToggle.setAttribute('aria-label', 'Open navigation menu');
  navLinksEl.classList.remove('is-open');
  document.body.style.overflow = '';
}

if (navToggle && navLinksEl) {
  navToggle.addEventListener('click', () => {
    navToggle.getAttribute('aria-expanded') === 'true' ? closeNav() : openNav();
  });

  navLinkItems.forEach((link) => link.addEventListener('click', closeNav));

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && navToggle.getAttribute('aria-expanded') === 'true') {
      closeNav();
      navToggle.focus();
    }
  });

  window.addEventListener('resize', () => {
    if (window.innerWidth > 640) closeNav();
  }, { passive: true });
}


// ================================================================
// IntersectionObserver — scroll-reveal (.reveal → .reveal.in)
// ================================================================
const revealEls = document.querySelectorAll('.reveal');

if (!prefersReducedMotion && 'IntersectionObserver' in window && revealEls.length > 0) {
  const io = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        entry.target.classList.add('in');
        io.unobserve(entry.target);
      });
    },
    { threshold: 0.12 }
  );

  // Defer to next frame so initial layout is settled
  requestAnimationFrame(() => {
    revealEls.forEach((el) => io.observe(el));
  });
} else {
  revealEls.forEach((el) => el.classList.add('in'));
}


// ================================================================
// Contact form — success state toggle (matches design's onSubmit)
// ================================================================
const contactForm = document.getElementById('contactForm');
const submitBtn   = document.getElementById('submitBtn');

if (contactForm && submitBtn) {
  contactForm.addEventListener('submit', (e) => {
    e.preventDefault();
    submitBtn.textContent = 'Thank you — sent ♡';
    submitBtn.disabled = true;
    submitBtn.style.background = 'var(--color-accent)';
  });
}
