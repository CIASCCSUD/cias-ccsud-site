// ─── Navbar scroll ───
const navbar = document.getElementById('navbar');
if (navbar) {
  window.addEventListener('scroll', () => {
    navbar.classList.toggle('scrolled', window.scrollY > 20);
  }, { passive: true });
}

// ─── Mobile hamburger ───
const hamburger = document.getElementById('hamburger');
const mobileMenu = document.getElementById('mobile-menu');
if (hamburger && mobileMenu) {
  hamburger.addEventListener('click', () => {
    const isOpen = hamburger.classList.toggle('open');
    mobileMenu.classList.toggle('open', isOpen);
    hamburger.setAttribute('aria-expanded', isOpen);
  });
  mobileMenu.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
      hamburger.classList.remove('open');
      mobileMenu.classList.remove('open');
      hamburger.setAttribute('aria-expanded', 'false');
    });
  });
}

// ─── Scroll reveal (varied animations) ───
const revealObs = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
      revealObs.unobserve(entry.target);
    }
  });
}, { threshold: 0.08, rootMargin: '0px 0px -32px 0px' });

// Initialise l'observation sur tous les .reveal non encore visibles
window.initReveal = function(root) {
  (root || document).querySelectorAll('.reveal:not(.visible)').forEach(el => revealObs.observe(el));
};
window.initReveal();

// ─── Animated counters ───
document.querySelectorAll('[data-count]').forEach(el => {
  new IntersectionObserver(entries => {
    if (!entries[0].isIntersecting) return;
    const target = parseInt(el.dataset.count, 10);
    const start = performance.now();
    const duration = 1400;
    const tick = now => {
      const p = Math.min((now - start) / duration, 1);
      const ease = 1 - Math.pow(1 - p, 3);
      el.textContent = Math.round(ease * target);
      if (p < 1) requestAnimationFrame(tick);
    };
    requestAnimationFrame(tick);
    entries[0].target._counted = true;
  }, { threshold: 0.5 }).observe(el);
});

// ─── Spotlight effect on cards (desktop) ───
if (window.matchMedia('(pointer: fine)').matches) {
  document.querySelectorAll('.projet-card, .actu-card, .quick-card').forEach(card => {
    card.style.position = 'relative';
    const glow = document.createElement('div');
    glow.style.cssText = 'position:absolute;inset:0;pointer-events:none;opacity:0;transition:opacity 0.3s;background:radial-gradient(200px circle at var(--mx) var(--my), rgba(0,0,145,0.04), transparent 70%)';
    card.appendChild(glow);
    card.addEventListener('mousemove', e => {
      const r = card.getBoundingClientRect();
      glow.style.setProperty('--mx', (e.clientX - r.left) + 'px');
      glow.style.setProperty('--my', (e.clientY - r.top) + 'px');
      glow.style.opacity = '1';
    });
    card.addEventListener('mouseleave', () => { glow.style.opacity = '0'; });
  });
}

// ─── Parallax on hero image (desktop) ───
if (window.matchMedia('(pointer: fine)').matches) {
  const heroImg = document.querySelector('.hero-image img');
  if (heroImg) {
    window.addEventListener('scroll', () => {
      const y = window.scrollY;
      if (y < window.innerHeight) {
        heroImg.style.transform = 'scale(' + (1 + y * 0.0002) + ') translateY(' + (y * 0.15) + 'px)';
      }
    }, { passive: true });
  }
}

// ─── Contact form (Web3Forms) ───
const formBtn = document.getElementById('form-submit-btn');
if (formBtn) {
  formBtn.addEventListener('click', async () => {
    const nom = document.getElementById('contact-nom').value.trim();
    const email = document.getElementById('contact-email').value.trim();
    const tel = document.getElementById('contact-tel').value.trim();
    const sujet = document.getElementById('contact-sujet').value;
    const message = document.getElementById('contact-message').value.trim();

    if (!nom || !email || !message) {
      alert('Merci de remplir les champs obligatoires (nom, email, message).');
      return;
    }

    formBtn.disabled = true;
    formBtn.textContent = 'Envoi en cours…';

    try {
      const res = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify({
          access_key: 'bedd96f8-581d-4384-a3ce-7d21ce8c6b44',
          name: nom,
          email: email,
          phone: tel || '—',
          subject: sujet ? `[CIAS] ${sujet}` : '[CIAS] Nouveau message',
          message: message,
          from_name: 'Formulaire CIAS CCSUD'
        })
      });

      const data = await res.json();

      if (data.success) {
        document.getElementById('form-success').style.display = 'block';
        formBtn.style.display = 'none';
      } else {
        alert('Une erreur est survenue. Veuillez réessayer ou nous contacter par email.');
        formBtn.disabled = false;
        formBtn.textContent = 'Envoyer le message';
      }
    } catch {
      alert('Impossible d\'envoyer le message. Vérifiez votre connexion internet.');
      formBtn.disabled = false;
      formBtn.textContent = 'Envoyer le message';
    }
  });
}
