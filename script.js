// ===== TERMINAL BOOT ANIMATION =====

const terminalLines = [
  { type: 'cmd', html: '<span class="t-prompt">$</span> <span class="t-value">load_profile.sh --target=mamady_sidibe</span>' },
  { type: 'plain', html: '<span class="t-label">[OK]</span> <span class="t-value">Connexion établie — Abidjan, Côte d\'Ivoire</span>' },
  { type: 'plain', html: '<span class="t-label">[OK]</span> <span class="t-value">Statut : disponible immédiatement</span>' },
  { type: 'name', html: '<div class="t-name">MAMADY SIDIBÉ</div><span class="t-role">ANALYSTE CYBERSÉCURITÉ — BLUETEAM / REDTEAM</span>' },
  { type: 'plain', html: '<span class="t-label">core_skills ›</span> <span class="t-value">DFIR · IDS/IPS · Wireshark · Pentest · Audit ISO 27001</span>' },
  { type: 'plain', html: '<span class="t-status-ok">[✓]</span> <span class="t-value">Profil chargé avec succès.<span class="t-cursor"></span></span>' },
];

function typeTerminal() {
  const container = document.getElementById('terminal-body');
  if (!container) return;

  let delay = 200;
  terminalLines.forEach((line, i) => {
    const div = document.createElement('div');
    div.className = 't-line';
    div.innerHTML = line.html;
    container.appendChild(div);

    setTimeout(() => {
      div.classList.add('show');
    }, delay);

    delay += line.type === 'name' ? 380 : 260;
  });
}

// Run on load
window.addEventListener('DOMContentLoaded', () => {
  typeTerminal();
});

// Respect reduced motion: show everything immediately
if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
  document.addEventListener('DOMContentLoaded', () => {
    document.querySelectorAll('.t-line').forEach(el => el.classList.add('show'));
  });
}

// ===== SCROLL REVEAL FOR SECTIONS =====
const revealEls = document.querySelectorAll('.skill-card, .project-row, .timeline-item, .stat, .contact-card, .cert-card, .profile-frame');

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.style.opacity = '1';
      entry.target.style.transform = 'translateY(0)';
    }
  });
}, { threshold: 0.1 });

window.addEventListener('DOMContentLoaded', () => {
  revealEls.forEach(el => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(16px)';
    el.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
    observer.observe(el);
  });
});
