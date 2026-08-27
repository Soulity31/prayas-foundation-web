/**
 * Global Scroll Reveal Controller (Apple-Grade Fluid Staggered Physics)
 */
export function initScrollAnimations() {
  const elementsToAnimate = document.querySelectorAll('.scroll-reveal-item');
  if (!elementsToAnimate.length) return;

  // Auto-assign staggered delays to grouped siblings if not already set
  const grids = document.querySelectorAll('.programs-3col-grid, #work-albums-grid, .partners-large-grid, .stats-grid-card, .org-tier-cards-row');
  grids.forEach(grid => {
    const children = grid.querySelectorAll('.scroll-reveal-item, .work-album-card, .program-card-step, .partner-logo-item');
    children.forEach((child, index) => {
      const staggerClass = `stagger-${(index % 6) + 1}`;
      if (!child.classList.contains('scroll-reveal-item')) {
        child.classList.add('scroll-reveal-item');
      }
      child.classList.add(staggerClass);
    });
  });

  const allItems = document.querySelectorAll('.scroll-reveal-item');

  if (!('IntersectionObserver' in window)) {
    allItems.forEach(el => el.classList.add('scroll-revealed'));
    return;
  }

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('scroll-revealed');
          observer.unobserve(entry.target);
        }
      });
    },
    {
      threshold: 0.08,
      rootMargin: '0px 0px -30px 0px'
    }
  );

  allItems.forEach((el) => {
    observer.observe(el);
  });
}

