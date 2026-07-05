import { useState, useEffect } from 'react';
import { submitContact } from '../api/index.js';
import HeroCanvas from '../components/ui/HeroCanvas.jsx';
import '../styles/contact.css';

const NEXT_STEPS = [
  {
    num: 1,
    title: 'We review your message',
    desc: 'Someone from our team reads every inquiry personally — no bots, no auto-replies pretending to be human.',
  },
  {
    num: 2,
    title: 'We follow up within 1–2 business days',
    desc: "You'll hear back with next steps — usually an invite to book a free discovery call at a time that works for you.",
  },
  {
    num: 3,
    title: 'We talk through your project',
    desc: "On the call, we'll discuss your goals and how our team can help — whether that starts with a trial task or a full scope.",
  },
];

const FAQS = [
  {
    q: 'Do I need to know exactly what service I need before contacting you?',
    a: "Not at all. Many clients reach out with a general goal rather than a specific service in mind — we'll help you figure out the right fit during the discovery call.",
  },
  {
    q: 'Is the discovery call really free?',
    a: "Yes. There's no cost or obligation to book a call. You can also start with a free 2-hour trial task if you'd like a hands-on preview before committing.",
  },
  {
    q: 'Do you work with businesses outside the Philippines?',
    a: "Yes — most of our clients are based in the US and other countries. We're set up for async, cross-timezone communication as a standard part of how we work.",
  },
];

export default function Contact() {
  useEffect(() => { document.title = 'Contact | MUSTARD Digitals'; }, []);

  const [form, setForm] = useState({ name: '', email: '', company: '', service: '', message: '' });
  const [sending, setSending] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState('');

  function handleChange(e) {
    const { name, value } = e.target;
    setForm(prev => ({ ...prev, [name]: value }));
  }

  async function handleSubmit(e) {
    e.preventDefault();
    setSending(true);
    setError('');
    try {
      await submitContact(form);
      setSuccess(true);
      setForm({ name: '', email: '', company: '', service: '', message: '' });
    } catch (err) {
      setError(err.message || 'Something went wrong. Please try again.');
    } finally {
      setSending(false);
    }
  }

  return (
    <main>
      {/* Hero */}
      <section className="contact-hero-modern">
        <HeroCanvas />
        <div className="contact-hero-content" data-aos="fade-up">
          <div className="contact-pill">Get In Touch</div>
          <h1>Let&apos;s Talk About <em>What You&apos;re Building.</em></h1>
          <p>Whether you&apos;re ready to start a project or just want to ask a few questions, our team is here to help. Tell us a bit about your business, and we&apos;ll get back to you soon.</p>
        </div>
      </section>

      {/* Form + Info */}
      <div className="contact-main-modern">
        <div className="contact-grid-modern" data-aos="fade-up">
          <div className="form-side">
            <h3>Send us a message</h3>
            <p className="form-side-sub">Fill out the form and we&apos;ll follow up to schedule a free discovery call.</p>

            {success && (
              <div className="form-alert form-alert-success">
                <i className="fas fa-check-circle"></i>
                <span><strong>Message sent!</strong> We&apos;ll follow up within 1–2 business days.</span>
              </div>
            )}
            {error && (
              <div className="form-alert form-alert-error">
                <i className="fas fa-exclamation-circle"></i>
                <span>{error}</span>
              </div>
            )}

            <form onSubmit={handleSubmit}>
              <div className="frow">
                <div className="field">
                  <label htmlFor="name">Full Name</label>
                  <input
                    type="text" id="name" name="name" required
                    placeholder="Jane Doe"
                    value={form.name} onChange={handleChange}
                  />
                </div>
                <div className="field">
                  <label htmlFor="email">Email Address</label>
                  <input
                    type="email" id="email" name="email" required
                    placeholder="jane@company.com"
                    value={form.email} onChange={handleChange}
                  />
                </div>
              </div>
              <div className="frow">
                <div className="field">
                  <label htmlFor="company">Company / Business Name</label>
                  <input
                    type="text" id="company" name="company"
                    placeholder="Your business"
                    value={form.company} onChange={handleChange}
                  />
                </div>
                <div className="field">
                  <label htmlFor="service">What do you need help with?</label>
                  <select id="service" name="service" value={form.service} onChange={handleChange}>
                    <option value="">Select a service</option>
                    <option value="Web Design & Development">Web Design & Development</option>
                    <option value="Branding & Creative Design">Branding & Creative Design</option>
                    <option value="Video Editing & Multimedia">Video Editing & Multimedia</option>
                    <option value="Administrative & Executive Support">Administrative & Executive Support</option>
                    <option value="Emerging Technical Solutions">Emerging Technical Solutions</option>
                    <option value="Custom Solution / Not Sure Yet">Custom Solution / Not Sure Yet</option>
                  </select>
                </div>
              </div>
              <div className="frow">
                <div className="field full">
                  <label htmlFor="message">Tell us about your project</label>
                  <textarea
                    id="message" name="message" required
                    placeholder="A bit about your business, your goals, and what you're hoping to accomplish..."
                    value={form.message} onChange={handleChange}
                  ></textarea>
                </div>
              </div>

              <button type="submit" className="submit-btn" disabled={sending}>
                {sending ? 'Sending...' : 'Send Message'}
              </button>
              <p className="form-note">We typically respond within 1–2 business days.</p>
            </form>
          </div>

          <div className="info-side">
            <div className="info-block">
              <div className="info-label">Email Us</div>
              <div className="info-val"><a href="mailto:mustarddigitalsolutions@gmail.com">mustarddigitalsolutions@gmail.com</a></div>
              <div className="info-sub">For general inquiries, partnerships, and project requests.</div>
            </div>

            <div className="info-block">
              <div className="info-label">Call or Message Us</div>
              <div className="info-val">(032) 517-3074</div>
              <div className="info-sub" style={{ marginTop: 8 }}>Mobile: +63 949 674 922</div>
            </div>

            <div className="info-block">
              <div className="info-label">Based In</div>
              <div className="info-val">Cebu, Philippines, 6000</div>
              <div className="info-sub">Serving clients worldwide.</div>
            </div>

            <div className="info-block">
              <div className="info-label">Follow Along</div>
              <div className="social-row">
                <a className="social-icon" href="https://www.facebook.com/profile.php?id=61588532360783" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
                  <i className="fab fa-facebook-f"></i>
                </a>
                <a className="social-icon" href="https://www.linkedin.com/company/mustard-digitals/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                  <i className="fab fa-linkedin-in"></i>
                </a>
                <a className="social-icon" href="https://www.instagram.com/mustard_digitals" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
                  <i className="fab fa-instagram"></i>
                </a>
                <a className="social-icon" href="https://wa.me/639949674922" target="_blank" rel="noopener noreferrer" aria-label="WhatsApp">
                  <i className="fab fa-whatsapp"></i>
                </a>
              </div>
            </div>

            <div className="divider"></div>

            <div className="trial-box">
              <span className="trial-tag">🌱 Plant Phase</span>
              <p>Not sure where to start? Ask about our free 2-hour trial task — a low-risk way to experience how our team works before committing to a full project.</p>
            </div>
          </div>
        </div>
      </div>

      {/* What Happens Next */}
      <div className="contact-next">
        <div className="section-eyebrow">What Happens Next</div>
        <h2 className="section-title-modern" style={{ fontSize: 'clamp(26px,3.5vw,38px)' }}>From message to first call.</h2>
        <div className="next-grid">
          {NEXT_STEPS.map(step => (
            <div className="next-card" key={step.num} data-aos="fade-up" data-aos-delay={`${(step.num - 1) * 100}`}>
              <div className="next-num">{step.num}</div>
              <h4>{step.title}</h4>
              <p>{step.desc}</p>
            </div>
          ))}
        </div>
      </div>

      {/* FAQ mini */}
      <section className="contact-faqmini">
        <div className="faqmini-wrap">
          <div className="section-eyebrow" style={{ justifyContent: 'center' }}>Before You Reach Out</div>
          <h2 className="section-title-modern" style={{ fontSize: 'clamp(24px,3.5vw,34px)', textAlign: 'center' }}>Quick answers.</h2>
          <div className="faq-list">
            {FAQS.map((faq, i) => (
              <div className="faq-item" key={i} data-aos="fade-up" data-aos-delay={`${i * 100}`}>
                <div className="faq-q">{faq.q}</div>
                <div className="faq-a">{faq.a}</div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
