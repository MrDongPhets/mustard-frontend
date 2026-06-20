import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import HeroCanvas from '../components/ui/HeroCanvas.jsx';
import '../styles/services.css';

const SERVICES = [
  {
    num: '01', icon: 'fa-laptop-code',
    title: 'Web Design & Development',
    desc: 'A professional, fast-loading website is often a customer\'s first impression of your business — and we make sure it\'s a strong one. We design and build business websites, landing pages, and custom web solutions engineered for performance, usability, and credibility.',
    tags: ['Business Websites', 'Landing Pages', 'Custom Web Apps'],
    bestFor: ['Startups launching online', 'Outdated site refreshes', 'Conversion-focused pages'],
  },
  {
    num: '02', icon: 'fa-palette',
    title: 'Branding & Creative Design',
    desc: 'Strong brands aren\'t accidental — they\'re designed. We create logos, brand identity systems, and marketing visuals that build recognition and keep your business looking consistent across every touchpoint, from your website to your social feed.',
    tags: ['Logo Design', 'Brand Identity', 'Marketing Visuals'],
    bestFor: ['New business launches', 'Brand refreshes', 'Pitch and sales decks'],
  },
  {
    num: '03', icon: 'fa-video',
    title: 'Video Editing & Multimedia',
    desc: 'Video is how modern businesses earn attention — and keep it. We produce short-form social videos, long-form content edits, promotional assets, and branded video production designed to perform across platforms and convert viewers into customers.',
    tags: ['Social Video', 'Promo Content', 'Branded Video'],
    bestFor: ['Social media growth', 'Product launches', 'Content repurposing'],
  },
  {
    num: '04', icon: 'fa-user-cog',
    title: 'Administrative & Executive Support',
    desc: 'Growth slows down when founders are buried in busywork. Our virtual assistance and operational support services cover documentation, CRM management, workflow optimization, and day-to-day coordination — so you can focus on running the business.',
    tags: ['Virtual Assistance', 'CRM Management', 'Workflow Support'],
    bestFor: ['Busy founders and execs', 'Scaling operations teams', 'Process clean-up'],
  },
  {
    num: '05', icon: 'fa-microchip',
    title: 'Emerging Technical Solutions',
    desc: 'When off-the-shelf tools don\'t fit, we build what does. Our technical team develops AI-assisted digital projects, database-driven applications, and specialized builds tailored to the specific operational challenges your business is facing right now.',
    tags: ['AI-Assisted Builds', 'Database Apps', 'Custom Tech'],
    bestFor: ['Niche tooling needs', 'Process automation', 'Data-driven systems'],
  },
];

const PROCESS = [
  {
    icon: 'fa-seedling', phase: 'Phase 1', title: 'Plant',
    desc: 'Book a call to discuss your goals, project requirements, and how our team can best support your business. Not ready to commit? Start with a free 2-hour trial task.',
    badge: true,
  },
  {
    icon: 'fa-hammer', phase: 'Phase 2', title: 'Build',
    desc: 'Our team executes the agreed scope of work — billed hourly to match the type and amount of support your project needs — with regular updates and clear communication throughout.',
  },
  {
    icon: 'fa-chart-line', phase: 'Phase 3', title: 'Grow',
    desc: 'We deliver the completed work, gather your feedback, and talk through opportunities for ongoing support — so the relationship keeps adding value well past launch day.',
  },
];

const WHY = [
  { n: '1', title: 'One coordinated team, not five vendors', desc: 'Design, development, content, and operations work side by side under one roof. No chasing freelancers across time zones or managing handoffs between agencies.', value: 'Unity in Team and Purpose' },
  { n: '2', title: 'Reliability you can actually plan around', desc: 'Consistent quality and dependable timelines aren\'t a bonus — they\'re the standard we hold ourselves to on every project.', value: 'Reliability and Excellence' },
  { n: '3', title: 'Honest communication, every step', desc: 'We handle your time, budget, and trust the way we\'d want ours handled — with clear updates, straightforward pricing, and zero surprises.', value: 'Stewardship and Integrity' },
  { n: '4', title: 'Built for startups and growing SMBs', desc: 'We work with entrepreneurs and small-to-medium businesses across the US and globally — sized and priced for teams that need agency-level work without agency-level overhead.', value: 'Mission-Driven Service' },
  { n: '5', title: 'A team genuinely invested in your growth', desc: 'Our goal isn\'t to wrap up a project and disappear. We aim to be the dependable digital partner that sticks around for the next phase of your business, too.', value: 'Transformational Growth' },
  { n: '6', title: 'Character you can feel in the work', desc: 'Humility, accountability, and follow-through show up in the small things — meeting deadlines, owning mistakes, doing the work right the first time.', value: 'Authenticity and Humility' },
];

const FAQS = [
  { q: 'Do you work with small businesses and startups in the US?', a: 'Yes — most of our clients are US-based and international entrepreneurs, startups, and small-to-medium businesses. We work across time zones with clear async communication and scheduled check-ins.' },
  { q: 'Can I hire you for just one service, like web design or branding?', a: 'Absolutely. While many clients use us across multiple services, each of our five core offerings can be engaged on its own depending on what your business needs right now.' },
  { q: 'What if our project doesn\'t fit your standard services?', a: "That's exactly what Custom Digital Solutions are for. Tell us what you're trying to solve, and we'll match you with the right specialist on our team to build a tailored plan, scoped hourly to fit." },
  { q: 'How does pricing work — is it a flat package or hourly?', a: 'Most of our engagements are billed hourly based on the type and amount of support your project needs, rather than locking you into a fixed package. You can also start with a free 2-hour trial task before committing to a larger scope.' },
  { q: 'How is Mustard Digitals different from a typical freelancer or agency?', a: "You get a coordinated, multidisciplinary team instead of a single freelancer's bandwidth or a large agency's overhead — combining creative, technical, and operational support in one place." },
];

export default function Services() {
  const navigate = useNavigate();
  const [openFaq, setOpenFaq] = useState(null);

  useEffect(() => { document.title = 'Services | MUSTARD Digitals'; }, []);

  return (
    <main>
      {/* HERO */}
      <section className="svc-hero">
        <HeroCanvas />
        <div className="svc-hero-inner" data-aos="fade-up">
          <div className="svc-eyebrow">
            <span className="svc-eyebrow-dot" /> Our Services
          </div>
          <h1>Digital Solutions Built for <span>Growing Businesses.</span></h1>
          <p className="svc-hero-sub">
            From brand identity to web development, video content to back-office support — Mustard Digitals gives entrepreneurs and small businesses one reliable team instead of five different vendors.
          </p>
          <div className="svc-badges">
            <span className="svc-badge"><i className="fas fa-th"></i> 5 Core Services</span>
            <span className="svc-badge"><i className="fas fa-wrench"></i> Custom Solutions Available</span>
            <span className="svc-badge"><i className="fas fa-users"></i> One Coordinated Team</span>
          </div>
        </div>
      </section>

      {/* SERVICES LIST */}
      <section className="svc-list-section" data-aos="fade-up">
        <div className="svc-list-inner">
          <div className="svc-section-label">What We Do</div>
          <h2 className="svc-section-title">Five core services. One dependable team.</h2>
          <p className="svc-section-sub">
            Most small businesses don't need five different freelancers and three monthly subscriptions — they need a digital partner who can handle it all, consistently and well.
          </p>

          <div className="svc-cards">
            {SERVICES.map((s, i) => (
              <div className="svc-card" key={s.num} data-aos="fade-up" data-aos-delay={`${i * 80}`}>
                <div className="svc-card-num">{s.num}</div>
                <div className="svc-card-body">
                  <div className="svc-card-icon"><i className={`fas ${s.icon}`}></i></div>
                  <h3 className="svc-card-title">{s.title}</h3>
                  <p className="svc-card-desc">{s.desc}</p>
                  <div className="svc-tags">
                    {s.tags.map(t => <span className="svc-tag" key={t}>{t}</span>)}
                  </div>
                </div>
                <div className="svc-card-side">
                  <div className="svc-side-label">Best for</div>
                  <ul className="svc-side-list">
                    {s.bestFor.map(b => <li key={b}>{b}</li>)}
                  </ul>
                </div>
              </div>
            ))}
          </div>

          {/* Custom Solutions Banner */}
          <div className="svc-custom-banner" data-aos="fade-up">
            <div>
              <h3>Need something that doesn't fit in a box?</h3>
              <p>Every business is different, and sometimes the right solution doesn't match a standard service line. Our Custom Digital Solutions are scoped hourly around your specific needs — we match you with the right specialist and build a tailored plan from there.</p>
            </div>
            <button className="svc-banner-btn" onClick={() => navigate('/contact')}>
              Tell Us What You Need <i className="fas fa-arrow-right"></i>
            </button>
          </div>
        </div>
      </section>

      {/* PROCESS */}
      <section className="svc-process-section">
        <div className="svc-process-inner" data-aos="fade-up">
          <div className="svc-section-label">Our Process</div>
          <h2 className="svc-section-title">Plant. Build. Grow.</h2>
          <p className="svc-section-sub">
            We don't lock you into rigid packages. Most of our work is scoped hourly based on what your business actually needs — and our three-phase process keeps every engagement clear from the first call to final delivery.
          </p>
          <div className="svc-process-grid">
            {PROCESS.map((p, i) => (
              <div className="svc-process-card" key={p.title} data-aos="fade-up" data-aos-delay={`${i * 100}`}>
                <div className="svc-process-icon"><i className={`fas ${p.icon}`}></i></div>
                <div className="svc-process-phase">{p.phase}</div>
                <h4 className="svc-process-title">{p.title}</h4>
                <p className="svc-process-desc">{p.desc}</p>
                {p.badge && (
                  <span className="svc-trial-badge">
                    <i className="fas fa-gift"></i> Free 2-hour trial task available
                  </span>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* WHY US */}
      <section className="svc-why-section">
        <div className="svc-why-inner" data-aos="fade-up">
          <div className="svc-section-label">Why Businesses Choose Us</div>
          <h2 className="svc-section-title">One team. Built on more than skill.</h2>
          <p className="svc-section-sub">
            We started small on purpose — a lean, multidisciplinary team built around the belief that excellent digital work and strong character don't have to be separate things.
          </p>
          <div className="svc-why-grid">
            {WHY.map((w, i) => (
              <div className="svc-why-card" key={w.n} data-aos="fade-up" data-aos-delay={`${i * 80}`}>
                <div className="svc-why-num">{w.n}</div>
                <h4 className="svc-why-title">{w.title}</h4>
                <p className="svc-why-desc">{w.desc}</p>
                <div className="svc-why-value">{w.value}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="svc-faq-section">
        <div className="svc-faq-inner" data-aos="fade-up">
          <div className="svc-section-label" style={{ justifyContent: 'center' }}>FAQs</div>
          <h2 className="svc-section-title" style={{ textAlign: 'center' }}>Common questions, answered.</h2>
          <div className="svc-faq-list">
            {FAQS.map((f, i) => (
              <div
                className={`svc-faq-item${openFaq === i ? ' open' : ''}`}
                key={i}
                onClick={() => setOpenFaq(openFaq === i ? null : i)}
              >
                <div className="svc-faq-q">
                  <span>{f.q}</span>
                  <i className={`fas fa-chevron-${openFaq === i ? 'up' : 'down'}`}></i>
                </div>
                {openFaq === i && <div className="svc-faq-a">{f.a}</div>}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="cta-modern" data-aos="fade-up">
        <div className="cta-content">
          <div className="cta-icon">
            <i className="fas fa-rocket"></i>
          </div>
          <h2>Let's find the right fit for your business.</h2>
          <p>Book a free discovery call — or start with a free 2-hour trial task — and tell us what you're working on.</p>
          <div className="svc-cta-btns">
            <button className="btn btn-primary-modern btn-lg" onClick={() => navigate('/free-trial')}>
              Claim Free Trial <i className="fas fa-arrow-right"></i>
            </button>
            <button className="btn btn-outline btn-lg" onClick={() => navigate('/contact')}
              style={{ color: '#fff', borderColor: 'rgba(255,255,255,0.3)' }}>
              <i className="fas fa-calendar"></i> Book a Discovery Call
            </button>
          </div>
        </div>
      </section>
    </main>
  );
}
