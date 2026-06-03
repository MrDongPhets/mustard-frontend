import React from 'react';
import '../styles/testimonials.css';

/* ---- Default data ---- */
const DEFAULT_TESTIMONIALS = [
  {
    id: 1,
    rating: 5,
    testimonial: '"I honestly don\'t know how they pulled it off with the limitations we had, but the team created the best website and landing page possible for our brand. The final result was incredible, and I absolutely love it."',
    client_name: 'Troy S.',
    company: 'President & CEO, TRIFECTA™',
  },
  {
    id: 2,
    rating: 5,
    testimonial: '"The branding guidelines were thoroughly reviewed and approved. Everything was accurate, professional, and ready to move forward. I\'m excited to see the next phase come together."',
    client_name: 'Deshaun W.',
    company: 'CEO, Write to Stay™',
  },
  {
    id: 3,
    rating: 5,
    testimonial: '"I really enjoyed working with Cath and the team. She had a positive attitude and was always ready to learn new things. She was always very pleasant to work with. She was versatile on many platforms."',
    client_name: 'Kerri P.',
    company: 'Best-selling Author, Television and Film Actress',
  },
  {
    id: 4,
    rating: 5,
    testimonial: '"This is my team & what a great relationship we have as we work through difficult times. They have been an absolute dream & do a lot of the hard lifting behind the scenes. Thank you for your brilliant work and support!"',
    client_name: 'Donna M.',
    company: "In-House Lawyers' Coach",
  },
  {
    id: 5,
    rating: 5,
    testimonial: '"The team did an excellent job managing operations while I was away, especially during some panic client situations. Knowing everything was handled professionally gave me complete peace of mind."',
    client_name: 'Gabriel A.',
    company: 'Senior Manager, Passive Prospecting',
  },
  {
    id: 6,
    rating: 5,
    testimonial: '"The professionalism, diligence and hardworking nature makes them the perfect employees for a wide array of tasks. They learn quickly and aren\'t afraid to ask questions to make sure they do every job to a high standard."',
    client_name: 'William D.',
    company: 'Mindset & Health Coach',
  },
];

/* ---- Helpers ---- */
function getInitials(name = '') {
  return name.split(' ').map(n => n[0]).join('').toUpperCase().slice(0, 2);
}

/* ---- Stars ---- */
function Stars({ rating = 5 }) {
  return (
    <div className="rating-stars">
      {[1, 2, 3, 4, 5].map(s => (
        <i key={s} className={`fas fa-star${s <= rating ? ' active' : ''}`} />
      ))}
    </div>
  );
}

/* ---- Single card ---- */
function TestimonialCard({ t }) {
  return (
    <div className="testimonial-card-modern">
      <div className="testimonial-rating">
        <Stars rating={t.rating} />
        <span className="rating-number">{t.rating || 5}.0</span>
        <span className="rating-text">Excellent</span>
      </div>
      <p className="testimonial-text">{t.testimonial}</p>
      <div className="testimonial-author">
        <div className="author-avatar">
          {t.avatar_url ? (
            <img src={t.avatar_url} alt={t.client_name} />
          ) : (
            <div className="avatar-placeholder">{getInitials(t.client_name)}</div>
          )}
        </div>
        <div className="author-info">
          <h4>{t.client_name}</h4>
          <p>{t.company || 'Verified Customer'}</p>
        </div>
      </div>
    </div>
  );
}

/* ====================================================
   MAIN COMPONENT

   Props:
   - testimonials  array    Custom list. Falls back to DEFAULT_TESTIMONIALS.
   - title         string   Section heading.
   - sectionId     string   Anchor id.
   - speed         number   Animation duration in seconds. Default: 40.
                            Lower = faster, Higher = slower.
   ==================================================== */
export default function Testimonials({
  testimonials,
  title = 'Trusted By Growing Businesses',
  subtitle = 'Real partnerships. Real results.',
  sectionId = 'reviews',
  speed = 40,
}) {
  const data = testimonials || DEFAULT_TESTIMONIALS;

  // Duplicate cards for seamless infinite loop
  const doubled = [...data, ...data];

  return (
    <section id={sectionId} className="testimonials-modern">
      <div className="testimonials-modern-container">
        <div className="section-header" data-aos="fade-up">
          <h2 className="section-title-modern">{title}</h2>
          <p className="section-subtitle">{subtitle}</p>
        </div>
      </div>

      {/* Full-width marquee — intentionally outside the container */}
      <div className="testimonials-marquee-wrapper" data-aos="fade-up" data-aos-delay="100">
        <div
          className="testimonials-marquee-track"
          style={{ animationDuration: `${speed}s` }}
        >
          {doubled.map((t, i) => (
            <TestimonialCard key={`${t.id ?? i}-${i}`} t={t} />
          ))}
        </div>
      </div>

    </section>
  );
}