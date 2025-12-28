import { useLayoutEffect } from 'react';
import { useLocation } from 'react-router-dom';

export function ScrollToTop() {
  const { pathname } = useLocation();

  // Use layoutEffect to scroll before paint
  // biome-ignore lint/correctness/useExhaustiveDependencies: intentionally re-run on pathname change
  useLayoutEffect(() => {
    // Small delay to ensure DOM is ready
    requestAnimationFrame(() => {
      const containers = document.querySelectorAll('[data-scroll-container]');
      if (containers.length > 0) {
        containers.forEach((container) => {
          container.scrollTop = 0;
        });
      }
      // Also scroll window as fallback
      window.scrollTo(0, 0);
    });
  }, [pathname]);

  return null;
}
