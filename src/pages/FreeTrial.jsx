import { useState, useEffect } from 'react';
import { submitFreeTrial } from '../api/index.js';
import HeroCanvas from '../components/ui/HeroCanvas.jsx';
import '../styles/free-trial.css';

const INITIAL = {
  name: '', email: '', businessName: '', country: '',
  serviceType: '', taskDescription: '', expectedOutput: '',
  referenceLinks: '', notes: '', agreed: false,
};

export default function FreeTrial() {
  useEffect(() => { document.title = 'Free Trial | MUSTARD Digitals'; }, []);

  const [form, setForm]       = useState(INITIAL);
  const [sending, setSending] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError]     = useState('');

  useEffect(() => {
    if (!success) return;
    const t = setTimeout(() => setSuccess(false), 5000);
    return () => clearTimeout(t);
  }, [success]);

  useEffect(() => {
    if (!error) return;
    const t = setTimeout(() => setError(''), 5000);
    return () => clearTimeout(t);
  }, [error]);

  function handleChange(e) {
    const { name, value, type, checked } = e.target;
    setForm(prev => ({ ...prev, [name]: type === 'checkbox' ? checked : value }));
  }

  async function handleSubmit(e) {
    e.preventDefault();
    if (!form.agreed) { setError('Please confirm the agreement before submitting.'); return; }
    setSending(true);
    setError('');
    try {
      await submitFreeTrial(form);
      setSuccess(true);
      setForm(INITIAL);
    } catch (err) {
      setError(err.message || 'Something went wrong. Please try again.');
    } finally {
      setSending(false);
    }
  }

  return (
    <>
    {success && (
      <div className="ft-toast">
        <div className="ft-toast-inner">
          <i className="fas fa-check-circle ft-toast-icon"></i>
          <div>
            <div className="ft-toast-title">Trial request submitted!</div>
            <div className="ft-toast-sub">Check your email for confirmation and book your discovery call.</div>
          </div>
          <button className="ft-toast-close" onClick={() => setSuccess(false)}>
            <i className="fas fa-times"></i>
          </button>
        </div>
      </div>
    )}
    {error && (
      <div className="ft-toast ft-toast-error">
        <div className="ft-toast-inner">
          <i className="fas fa-exclamation-circle ft-toast-icon"></i>
          <div>
            <div className="ft-toast-title">Submission failed</div>
            <div className="ft-toast-sub">{error}</div>
          </div>
          <button className="ft-toast-close" onClick={() => setError('')}>
            <i className="fas fa-times"></i>
          </button>
        </div>
      </div>
    )}
    <main>
      {/* HERO */}
      <section className="ft-hero">
        <HeroCanvas />
        <div className="ft-hero-inner" data-aos="fade-up">
          <div className="ft-eyebrow">
            <span className="ft-eyebrow-dot" /> Limited Availability
          </div>
          <h1>Claim Your <span>Free 2-Hour</span><br />Trial Task</h1>
          <p className="ft-hero-sub">
            Let the work speak for itself. Submit a task, we deliver.{' '}
            <b>No payment, no commitment, no risk.</b> This is how we earn your trust before you spend a single dollar.
          </p>
          <div className="ft-badges">
            <span className="ft-badge"><i className="fas fa-clock"></i> 2 Hours Free</span>
            <span className="ft-badge"><i className="fas fa-credit-card"></i> No Payment Required</span>
            <span className="ft-badge"><i className="fas fa-hand-paper"></i> Zero Commitment</span>
            <span className="ft-badge"><i className="fas fa-building"></i> One Trial Per Business</span>
          </div>
        </div>
      </section>

      {/* HOW IT WORKS */}
      <section className="ft-hiw" data-aos="fade-up">
        <div style={{ textAlign: 'center' }}>
          <div className="ft-section-label">The Process</div>
          <h2 className="ft-section-title">How Your Free Trial Works</h2>
        </div>
        <div className="ft-steps">
          {[
            { n: '01', active: true,  title: 'Claim Your Free Trial',         desc: 'Tell us about one task you\'d like help with, anything reasonably completable within 2 hours. Fill out the form below.' },
            { n: '02', active: true,  title: 'Book a Call & Submit Your Task', desc: 'Book a quick 15–20 min discovery call. We\'ll discuss your task, clarify requirements, and align on expectations.', note: 'Trial only begins after call is attended.' },
            { n: '03', active: false, title: 'We Deliver. You Review.',        desc: 'Your task is completed within 2 trial hours. Review the output and experience our quality firsthand.' },
            { n: '04', active: false, title: 'Choose Your Package. Grow.',     desc: 'Happy with the results? Choose the hourly package that fits, 20, 40, or 80 hours. No pressure.' },
          ].map(s => (
            <div className="ft-step" key={s.n}>
              <div className={`ft-step-num ${s.active ? 'active' : 'inactive'}`}>{s.n}</div>
              <div className="ft-step-title">{s.title}</div>
              <div className="ft-step-desc">{s.desc}</div>
              {s.note && <div className="ft-step-note"><i className="fas fa-exclamation-triangle"></i> {s.note}</div>}
            </div>
          ))}
        </div>
      </section>

      {/* FORM */}
      <section className="ft-form-section">
        {[...Array(20)].map((_, i) => (
          <span key={i} className={`ft-particle ft-particle-${i + 1}`} />
        ))}
        <div className="ft-form-card" data-aos="fade-up">
          <div className="ft-form-h">Submit Your Trial Task</div>
          <p className="ft-form-sub">
            Fill in the details below. The more context you give us, the better we can deliver.
            After submitting, book your discovery call to confirm your trial.
          </p>


          <form onSubmit={handleSubmit}>
            <div className="ft-form-grid">
              <div className="ft-form-group">
                <label className="ft-form-label">Full Name <span>*</span></label>
                <input className="ft-form-input" type="text" name="name" required
                  placeholder="Your full name" value={form.name} onChange={handleChange} />
              </div>
              <div className="ft-form-group">
                <label className="ft-form-label">Email Address <span>*</span></label>
                <input className="ft-form-input" type="email" name="email" required
                  placeholder="your@email.com" value={form.email} onChange={handleChange} />
              </div>
              <div className="ft-form-group">
                <label className="ft-form-label">Business Name <span>*</span></label>
                <input className="ft-form-input" type="text" name="businessName" required
                  placeholder="Your business or brand name" value={form.businessName} onChange={handleChange} />
              </div>
              <div className="ft-form-group">
                <label className="ft-form-label">Country <span>*</span></label>
                <select className="ft-form-select" name="country" required value={form.country} onChange={handleChange}>
                  <option value="">Select your country</option>
                  <option>United States</option>
                  <option>Australia</option>
                  <option>United Kingdom</option>
                  <option>Canada</option>
                  <option>Philippines</option>
                  <option>Other</option>
                </select>
              </div>
              <div className="ft-form-group full">
                <label className="ft-form-label">Service Type <span>*</span></label>
                <select className="ft-form-select" name="serviceType" required value={form.serviceType} onChange={handleChange}>
                  <option value="">What type of task is this?</option>
                  <option>Graphics &amp; Branding</option>
                  <option>Video Editing</option>
                  <option>Website Design &amp; Development</option>
                  <option>Content Creation &amp; Media</option>
                  <option>Admin &amp; VA Support</option>
                  <option>Customized Tech Solutions</option>
                  <option>Not Sure — Help Me Decide</option>
                </select>
              </div>
              <div className="ft-form-group full">
                <label className="ft-form-label">Task Description <span>*</span></label>
                <textarea className="ft-form-textarea" name="taskDescription" required
                  placeholder="Describe the task clearly, what's the output, what's the goal, any details we need to know. The more specific, the better."
                  value={form.taskDescription} onChange={handleChange} />
              </div>
              <div className="ft-form-group full">
                <label className="ft-form-label">Expected Output</label>
                <input className="ft-form-input" type="text" name="expectedOutput"
                  placeholder="e.g. 2 Instagram posts in PNG, 1 edited 60-sec Reel, logo concept in AI format"
                  value={form.expectedOutput} onChange={handleChange} />
              </div>
              <div className="ft-form-group full">
                <label className="ft-form-label">Reference Links</label>
                <input className="ft-form-input" type="text" name="referenceLinks"
                  placeholder="Google Drive, Dropbox, website links, inspiration examples, paste here"
                  value={form.referenceLinks} onChange={handleChange} />
              </div>
              <div className="ft-form-group full">
                <label className="ft-form-label">Anything Else We Should Know?</label>
                <textarea className="ft-form-textarea" name="notes" style={{ minHeight: '80px' }}
                  placeholder="Deadline preferences, tone, style notes, brand guidelines, or anything that helps us deliver better."
                  value={form.notes} onChange={handleChange} />
              </div>
            </div>

            <hr className="ft-divider" />

            <div className="ft-cal-box">
              <div className="ft-cal-icon"><i className="fas fa-calendar-alt"></i></div>
              <div className="ft-cal-text">
                <div className="ft-cal-title">Book Your Discovery Call <span>*</span></div>
                <div className="ft-cal-sub">Required before your trial begins, 15 to 20 minutes. We'll align on your task and set expectations before we start.</div>
              </div>
              <a className="ft-cal-btn" href="https://calendly.com/mustarddigitalsolutions/30min" target="_blank" rel="noreferrer">
                Choose a Time →
              </a>
            </div>

            <div className="ft-notice">
              <b>Please note:</b> Your trial task will only be scheduled after a discovery call has been booked and attended. This ensures we fully understand your needs before we begin.
            </div>

            <div className="ft-agree">
              <input type="checkbox" id="agreed" name="agreed" checked={form.agreed} onChange={handleChange} />
              <label htmlFor="agreed">
                I understand that my trial task will only begin after a discovery call is completed. I confirm this is my first trial request for my business.
              </label>
            </div>

            <button type="submit" className="ft-submit-btn" disabled={sending}>
              <i className={`fas ${sending ? 'fa-spinner fa-spin' : 'fa-rocket'}`}></i>
              {sending ? ' Submitting...' : ' Submit My Free Trial Task'}
            </button>
            <p className="ft-submit-note">No payment required · No commitment · One trial per business · Limited availability</p>
          </form>
        </div>
      </section>
    </main>
    </>
  );
}
