/**
 * src/api/index.js
 * All API calls go through here — never call fetch() directly in a component.
 */

const BASE = '/api';

async function request(url) {
  const res = await fetch(url);
  if (!res.ok) {
    const err = await res.json().catch(() => ({ error: res.statusText }));
    throw new Error(err.error || `Request failed: ${res.status}`);
  }
  return res.json();
}

/** GET /api/home.php — all homepage data in one request */
export function getHomeData() {
  return request(`${BASE}/home`);
}

/** GET /api/portfolio.php — all portfolio items + categories
 *  @param {string} category — optional category filter ('all' or a category name)
 */
export function getPortfolio(category = 'all') {
  const params = category && category !== 'all'
    ? `?category=${encodeURIComponent(category)}`
    : '';
  return request(`${BASE}/portfolio${params}`);
}

/** GET /api/portfolio-detail.php?id= — single item + related */
export function getPortfolioDetail(id) {
  return request(`${BASE}/portfolio-detail?id=${encodeURIComponent(id)}`);
}

/** GET /api/services.php — all active services */
export function getServices() {
  return request(`${BASE}/services`);
}

/** GET /api/testimonials.php — active testimonials
 *  @param {number} limit — optional limit
 */
export function getTestimonials(limit = null) {
  const params = limit ? `?limit=${limit}` : '';
  return request(`${BASE}/testimonials${params}`);
}

/** POST to Web3Forms — works without PHP backend */
export async function submitContact(data) {
  const res = await fetch('https://api.web3forms.com/submit', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      access_key: 'c143c009-815d-4a18-b787-9db4e69b864a',
      ...data,
    }),
  });
  const result = await res.json().catch(() => ({}));
  if (!res.ok || !result.success) {
    throw new Error(result.message || 'Failed to send message');
  }
  return result;
}
