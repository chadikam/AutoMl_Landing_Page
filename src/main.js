/**
 * AutoML Landing Page — main.js
 * Handles: scroll reveal, header scroll, FAQ accordion,
 * hero word animation, mobile menu, smooth scroll.
 */

/* ================================================================
   SCROLL REVEAL
   ================================================================ */
function initScrollReveal() {
  const els = document.querySelectorAll('.reveal');
  if (!els.length) return;

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.12, rootMargin: '0px 0px -40px 0px' }
  );

  els.forEach((el) => observer.observe(el));
}

/* ================================================================
   HEADER SCROLL BEHAVIOUR
   ================================================================ */
function initHeaderScroll() {
  const header = document.getElementById('site-header');
  if (!header) return;

  let ticking = false;
  const threshold = 32;

  function update() {
    if (window.scrollY > threshold) {
      header.style.background = 'rgba(8, 9, 10, 0.82)';
      header.style.backdropFilter = 'blur(16px) saturate(1.6)';
      header.style.borderBottom = '1px solid rgba(255,255,255,0.06)';
    } else {
      header.style.background = 'transparent';
      header.style.backdropFilter = 'none';
      header.style.borderBottom = '1px solid transparent';
    }
    ticking = false;
  }

  window.addEventListener('scroll', () => {
    if (!ticking) {
      requestAnimationFrame(update);
      ticking = true;
    }
  }, { passive: true });

  update();
}

/* ================================================================
   HERO WORD-BY-WORD ANIMATION
   ================================================================ */
function initHeroAnimation() {
  const heading = document.getElementById('hero-heading');
  if (!heading) return;

  // Preserve <br> tags by splitting on them first
  const lines = heading.innerHTML.split(/<br\s*\/?>/i);
  
  heading.innerHTML = lines.map((line, lineIdx) => {
    const words = line.trim().split(/\s+/).filter(Boolean);
    const offset = lineIdx * 4; // word offset for delay
    return words
      .map(
        (word, i) =>
          `<span class="hero-word" style="animation-delay:${0.12 + (offset + i) * 0.07}s">${word}</span>`
      )
      .join(' ');
  }).join('<br/>');
}

/* ================================================================
   FAQ ACCORDION
   ================================================================ */
function initFAQ() {
  const triggers = document.querySelectorAll('.faq-trigger');
  triggers.forEach((btn) => {
    btn.addEventListener('click', () => {
      const item = btn.closest('.faq-item');
      const wasOpen = item.classList.contains('open');

      // Close all
      document.querySelectorAll('.faq-item.open').forEach((el) => el.classList.remove('open'));

      // Toggle current
      if (!wasOpen) item.classList.add('open');
    });
  });
}

/* ================================================================
   MOBILE MENU
   ================================================================ */
function initMobileMenu() {
  const toggle = document.getElementById('mobile-toggle');
  const menu = document.getElementById('mobile-menu');
  if (!toggle || !menu) return;

  toggle.addEventListener('click', () => {
    const open = menu.classList.toggle('open');
    document.body.style.overflow = open ? 'hidden' : '';

    // Animate burger → X
    const bars = toggle.querySelectorAll('span');
    if (open) {
      bars[0].style.transform = 'rotate(45deg) translate(3px, 3px)';
      bars[1].style.transform = 'rotate(-45deg) translate(0px, -0px)';
    } else {
      bars[0].style.transform = '';
      bars[1].style.transform = '';
    }
  });

  // Close on link click
  menu.querySelectorAll('a').forEach((link) => {
    link.addEventListener('click', () => {
      menu.classList.remove('open');
      document.body.style.overflow = '';
      const bars = toggle.querySelectorAll('span');
      bars[0].style.transform = '';
      bars[1].style.transform = '';
    });
  });
}

/* ================================================================
   SMOOTH SCROLL
   ================================================================ */
function initSmoothScroll() {
  document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener('click', (e) => {
      const id = anchor.getAttribute('href');
      if (!id || id === '#') return;
      const target = document.querySelector(id);
      if (!target) return;
      e.preventDefault();
      target.scrollIntoView({ behavior: 'smooth', block: 'start' });
    });
  });
}

/* ================================================================
   INTERACTIVE DEMO
   ================================================================ */
function initDemo() {
  const navItems = document.querySelectorAll('[data-demo-tab]');
  const tabs = document.querySelectorAll('[data-demo-content]');
  if (!navItems.length) return;

  navItems.forEach((btn) => {
    btn.addEventListener('click', () => {
      const target = btn.getAttribute('data-demo-tab');
      navItems.forEach((n) => n.classList.remove('active'));
      tabs.forEach((t) => t.classList.remove('active'));
      btn.classList.add('active');
      const panel = document.querySelector(`[data-demo-content="${target}"]`);
      if (panel) panel.classList.add('active');
    });
  });

  // Back buttons go to dashboard
  document.querySelectorAll('.demo-back').forEach((btn) => {
    btn.addEventListener('click', () => {
      const dashBtn = document.querySelector('[data-demo-tab="dashboard"]');
      if (dashBtn) dashBtn.click();
    });
  });

  // Predict button mock
  const predictBtn = document.getElementById('demo-predict-btn');
  const predictResult = document.getElementById('demo-predict-result');
  if (predictBtn && predictResult) {
    predictBtn.addEventListener('click', () => {
      predictBtn.textContent = 'Predicting…';
      predictBtn.disabled = true;
      setTimeout(() => {
        predictResult.innerHTML = `
          <div class="demo-test-title">Prediction Result</div>
          <div class="demo-predict-show">
            <div class="demo-predict-class">setosa</div>
            <div class="demo-predict-conf">Confidence: 98.2%</div>
            <div class="demo-predict-probs">
              <div class="demo-bar-row"><span class="demo-bar-label">setosa</span><div class="demo-bar-track"><div class="demo-bar-fill" style="width:98%;background:#818cf8"></div></div><span class="demo-bar-val">98.2%</span></div>
              <div class="demo-bar-row"><span class="demo-bar-label">versicolor</span><div class="demo-bar-track"><div class="demo-bar-fill" style="width:1.5%;background:#22c55e"></div></div><span class="demo-bar-val">1.5%</span></div>
              <div class="demo-bar-row"><span class="demo-bar-label">virginica</span><div class="demo-bar-track"><div class="demo-bar-fill" style="width:0.3%;background:#f59e0b"></div></div><span class="demo-bar-val">0.3%</span></div>
            </div>
          </div>
        `;
        predictBtn.textContent = '⚡ Predict';
        predictBtn.disabled = false;
      }, 600);
    });
  }
}

/* ================================================================
   BOOT
   ================================================================ */
document.addEventListener('DOMContentLoaded', () => {
  initHeroAnimation();
  initScrollReveal();
  initHeaderScroll();
  initFAQ();
  initMobileMenu();
  initSmoothScroll();
  initDemo();
});
