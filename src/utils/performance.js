// Performance optimization utilities

/**
 * Lazy load images using Intersection Observer
 */
export const useLazyLoadImage = (ref, placeholder = '') => {
  const loadImage = (img) => {
    const src = img.dataset.src;
    if (src) {
      img.src = src;
      img.classList.remove('loading');
      img.classList.add('loaded');
    }
  };

  const setupLazyLoading = () => {
    const images = ref.current?.querySelectorAll('img[data-src]');
    if (!images) return;

    const imageObserver = new IntersectionObserver(
      (entries, observer) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            loadImage(entry.target);
            observer.unobserve(entry.target);
          }
        });
      },
      { rootMargin: '50px' }
    );

    images.forEach((img) => imageObserver.observe(img));
  };

  return { setupLazyLoading };
};

/**
 * Performance metrics logging
 */
export const reportWebVitals = () => {
  // Cumulative Layout Shift
  let clsValue = 0;
  new PerformanceObserver((list) => {
    for (const entry of list.getEntries()) {
      if (!entry.hadRecentInput) {
        clsValue += entry.value;
        console.log('CLS:', clsValue);
      }
    }
  }).observe({ type: 'layout-shift', buffered: true });

  // Interaction to Next Paint
  new PerformanceObserver((list) => {
    for (const entry of list.getEntries()) {
      console.log('INP:', entry.duration);
    }
  }).observe({ type: 'interaction', buffered: true });

  // Largest Contentful Paint
  new PerformanceObserver((list) => {
    const entries = list.getEntries();
    const lastEntry = entries[entries.length - 1];
    console.log('LCP:', lastEntry.renderTime || lastEntry.loadTime);
  }).observe({ type: 'largest-contentful-paint', buffered: true });
};

/**
 * Code splitting hints
 */
export const performanceChecklist = {
  bundleSize: 'Keep main bundle < 100KB (gzipped)',
  lazyLoading: 'Lazy load images and below-fold components',
  compression: 'Enable gzip compression on server',
  caching: 'Implement service worker for offline support',
  cdnImages: 'Serve images from CDN or optimize with WebP/AVIF',
  minification: 'Minify CSS, JS, and HTML in production',
  criticalCss: 'Inline critical CSS for above-the-fold content',
  preload: 'Preload critical resources and fonts',
  monitoring: 'Monitor Core Web Vitals with Web Vitals library',
};

/**
 * Resource hints
 */
export const addResourceHints = () => {
  // DNS prefetch for external services
  const dnsPrefetch = document.createElement('link');
  dnsPrefetch.rel = 'dns-prefetch';
  dnsPrefetch.href = 'https://fonts.googleapis.com';
  document.head.appendChild(dnsPrefetch);

  // Preconnect to font servers
  const preconnect = document.createElement('link');
  preconnect.rel = 'preconnect';
  preconnect.href = 'https://fonts.gstatic.com';
  preconnect.crossOrigin = 'anonymous';
  document.head.appendChild(preconnect);
};

/**
 * Debounce utility for performance
 */
export const debounce = (func, wait) => {
  let timeout;
  return function executedFunction(...args) {
    const later = () => {
      clearTimeout(timeout);
      func(...args);
    };
    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
  };
};

/**
 * Throttle utility for performance
 */
export const throttle = (func, limit) => {
  let inThrottle;
  return function (...args) {
    if (!inThrottle) {
      func.apply(this, args);
      inThrottle = true;
      setTimeout(() => (inThrottle = false), limit);
    }
  };
};
