import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

export function ScrollToTop() {
  const { pathname } = useLocation();

  // biome-ignore lint/correctness/useExhaustiveDependencies: intentionally re-run on pathname change
  useEffect(() => {
    // Scroll all containers marked with data-scroll-container to top
    const containers = document.querySelectorAll('[data-scroll-container]');
    containers.forEach((container) => {
      container.scrollTo({ top: 0, behavior: 'smooth' });
    });
  }, [pathname]);

  return null;
}
