/**
 * Performance & Device Spec Optimizer
 * Ensures 60/120fps responsiveness, async image decoding,
 * and buttery smooth page transitions without blank screen prefetch glitches.
 */

export function initPerformanceOptimizer() {
  // Check prefers-reduced-motion
  const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
  if (mediaQuery.matches) {
    document.documentElement.classList.add('reduced-motion');
  }

  // Ensure all existing images decode asynchronously for smooth main-thread responsiveness
  optimizeImageDecoding();
}

/**
 * Set decoding="async" and loading="lazy" on offscreen images
 */
function optimizeImageDecoding() {
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', () => applyImageOptimizations(), { once: true });
  } else {
    applyImageOptimizations();
  }
}

function applyImageOptimizations() {
  document.querySelectorAll('img').forEach((img, idx) => {
    if (!img.hasAttribute('decoding')) img.setAttribute('decoding', 'async');
    if (idx > 2 && !img.hasAttribute('loading')) {
      img.setAttribute('loading', 'lazy');
    }
  });
}

/**
 * Throttled requestAnimationFrame helper for high-frequency scroll/resize handlers
 */
export function throttleRAF(callback) {
  let isTicking = false;
  return function (...args) {
    if (!isTicking) {
      requestAnimationFrame(() => {
        callback.apply(this, args);
        isTicking = false;
      });
      isTicking = true;
    }
  };
}

/**
 * Fast visual feedback loading indicator for silky-smooth page transitions
 */
export function triggerPageLoadProgress() {
  let bar = document.getElementById('page-load-bar');
  if (!bar) {
    bar = document.createElement('div');
    bar.id = 'page-load-bar';
    document.body.appendChild(bar);
  }
  
  bar.style.opacity = '1';
  bar.style.width = '35%';
  
  requestAnimationFrame(() => {
    setTimeout(() => {
      if (bar) bar.style.width = '80%';
    }, 40);

    setTimeout(() => {
      if (bar) {
        bar.style.width = '100%';
        setTimeout(() => {
          bar.style.opacity = '0';
          setTimeout(() => {
            bar.style.width = '0%';
          }, 250);
        }, 160);
      }
    }, 140);
  });
}
