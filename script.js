// Gentle reveal-on-scroll for the case-file sections.
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
    el.style.transform = 'translateY(18px) rotate(-0.4deg)';
    el.style.transition = 'opacity 0.8s ease, transform 0.8s ease';
  });

  const io = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.style.opacity = '1';
        entry.target.style.transform = 'translateY(0) rotate(0deg)';
        io.unobserve(entry.target);
      }
    });
  }, { threshold: 0.08 });

  revealables.forEach(el => io.observe(el));
});
