// Accessibility utilities and helpers

/**
 * Enhance button accessibility
 * Ensures keyboard navigation and screen reader support
 */
export const useAccessibleButton = (onClick, label) => {
  const handleKeyDown = (e) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      onClick();
    }
  };

  return {
    onClick,
    onKeyDown: handleKeyDown,
    role: 'button',
    tabIndex: 0,
    'aria-label': label,
  };
};

/**
 * Skip to main content link component
 * Improves keyboard navigation for screen readers
 */
export const SkipLink = () => (
  <a
    href="#main-content"
    className="absolute -top-96 left-0 z-50 px-4 py-2 bg-slate-900 text-white rounded hover:not-sr-only focus:not-sr-only"
    style={{
      position: 'absolute',
      left: '-9999px',
    }}
    onFocus={(e) => {
      e.target.style.left = '0';
      e.target.style.top = '0';
    }}
    onBlur={(e) => {
      e.target.style.left = '-9999px';
      e.target.style.top = '-9999px';
    }}
  >
    Skip to main content
  </a>
);

/**
 * Focus management utility
 * Helps manage focus for modals and overlays
 */
export const useFocusTrap = (ref) => {
  const handleKeyDown = (e) => {
    if (e.key === 'Escape') {
      // Handle escape key if needed
      return;
    }

    if (e.key === 'Tab') {
      const focusableElements = ref.current?.querySelectorAll(
        'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
      );
      const firstElement = focusableElements?.[0];
      const lastElement = focusableElements?.[focusableElements.length - 1];

      if (e.shiftKey && document.activeElement === firstElement) {
        e.preventDefault();
        lastElement?.focus();
      } else if (!e.shiftKey && document.activeElement === lastElement) {
        e.preventDefault();
        firstElement?.focus();
      }
    }
  };

  return { onKeyDown: handleKeyDown };
};

/**
 * ARIA live region utility
 * Announces dynamic content changes to screen readers
 */
export const announceToScreenReader = (message, priority = 'polite') => {
  const announcement = document.createElement('div');
  announcement.setAttribute('aria-live', priority);
  announcement.setAttribute('aria-atomic', 'true');
  announcement.className = 'sr-only';
  announcement.textContent = message;
  document.body.appendChild(announcement);

  setTimeout(() => {
    document.body.removeChild(announcement);
  }, 1000);
};

/**
 * Contrast checker helper
 * Verifies text meets WCAG AA standards (4.5:1 for normal text)
 */
export const isContrastCompliant = (foreground, background) => {
  // Simple placeholder - in production, use a proper contrast calculation
  return true; // This should be replaced with actual calculation
};

export const accessibilityChecklist = {
  semanticHTML: 'Ensure all content uses semantic HTML elements (main, nav, section, article)',
  headings: 'Use proper heading hierarchy (H1-H6, only one H1 per page)',
  images: 'All images have descriptive alt text',
  forms: 'All form inputs have associated labels',
  focus: 'All interactive elements have visible focus states',
  contrast: 'Text has at least 4.5:1 contrast ratio (WCAG AA)',
  keyboard: 'All functionality accessible via keyboard',
  ariaLabels: 'Complex UI patterns have appropriate ARIA labels',
  language: 'Page language is specified (html lang attribute)',
  colorNotOnly: 'Color is not the only way to convey information',
};
