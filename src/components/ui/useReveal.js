/* ============================================================
   MUSTARD DIGITALS - useReveal
   Version: v1.0  |  Last Updated: 09 Sep 2026
   Prepared By: Sergette Angela Napoles (Wibiz)

   React port of the scroll-reveal logic from the original
   portfolio-main.js. Adds the 'in-view' class to any element
   carrying '.reveal' or '.reveal-stagger' once it scrolls into
   view. The chatbot, mobile nav toggle, and FAQ accordion from
   the original script are intentionally NOT included - nav lives
   in the shared layout and the chatbot is a separate future build.

   Usage: call useReveal() once inside the page component. It
   observes on mount and re-scans if the DOM changes.
   ============================================================ */

import { useEffect } from 'react';

export default function useReveal() {
  useEffect(() => {
    const els = Array.from(document.querySelectorAll('.reveal, .reveal-stagger'));
    if (!els.length) return;

    // Fallback: if no observer support or reduced motion, show everything.
    const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (!('IntersectionObserver' in window) || prefersReduced) {
      els.forEach((el) => el.classList.add('in-view'));
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('in-view');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12, rootMargin: '0px 0px -60px 0px' }
    );

    els.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);
}
