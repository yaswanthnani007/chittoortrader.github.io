// Gentle reveal-on-scroll for the ledger sections.
// No frameworks — this is a static site by design.

document.addEventListener('DOMContentLoaded', () => {
  const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  const revealables = document.querySelectorAll('.section, .closing');

  if (prefersReduced || !('IntersectionObserver' in window)) {
    revealables.forEach(el => el.style.opacity = 1);
    return;
  }

  revealables.forEach(el => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(16px)';
    el.style.transition = 'opacity 0.7s ease, transform 0.7s ease';
  });

  const io = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.style.opacity = '1';
        entry.target.style.transform = 'translateY(0)';
        io.unobserve(entry.target);
      }
    });
  }, { threshold: 0.08 });

  revealables.forEach(el => io.observe(el));
});
