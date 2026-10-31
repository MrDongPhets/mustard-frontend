// Sends an event to GA4 through the gtag snippet already loaded in index.html.
// It does nothing if gtag is missing (for example when an adblocker removes it),
// so it can never break a form.
export function trackEvent(name, params = {}) {
  if (typeof window !== 'undefined' && typeof window.gtag === 'function') {
    window.gtag('event', name, params);
  }
}