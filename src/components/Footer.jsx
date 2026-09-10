/* ============================================================
   MUSTARD DIGITALS - Footer
   Version: v1.0  |  Last Updated: 09 Sep 2026
   Prepared By: Sergette Angela Napoles (Wibiz)

   Site-wide footer: brand blurb, nav columns, socials, legal links.
   Uses react-router <Link> for internal routes and <a> for external.
   ============================================================ */

import { Link } from 'react-router-dom';
import '../styles/footer.css';
import logoWhite from '../assets/mustard.png'; // adjust path if different


const SERVICES = [
  { label: 'Web Design & Development', to: '/services' },
  { label: 'Branding & Creative', to: '/services' },
  { label: 'Video Production', to: '/services' },
  { label: 'Virtual Support', to: '/services' },
];

const COMPANY_LINKS = [
  { label: 'Home', to: '/' },
  { label: 'About', to: '/about' },
  { label: 'Portfolio', to: '/portfolio' },
  { label: 'Contact', to: '/contact' },
];

const LEGAL_LINKS = [
  { label: 'Privacy Policy', to: '/privacy' },
  { label: 'Terms of Service', to: '/terms' },
  { label: 'Cookie Notice', to: '/cookies' },
];

const SOCIALS = [
  { label: 'Facebook',  icon: 'fa-facebook-f', url: 'https://www.facebook.com/profile.php?id=61588532360783' },
  { label: 'Instagram', icon: 'fa-instagram',  url: 'https://www.instagram.com/mustard_digitals' },
  { label: 'LinkedIn',  icon: 'fa-linkedin-in',url: 'https://www.linkedin.com/company/mustard-digitals/' },
  { label: 'WhatsApp',  icon: 'fa-whatsapp',   url: 'https://wa.me/639949674922' },
];

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="footer-container">

        {/* Brand column */}
        <div className="footer-brand">
          <img src={logoWhite} alt="Mustard Digitals" className="footer-logo" />
          <p className="footer-blurb">
            A Philippines-based digital solutions team helping businesses worldwide grow
            through web design, branding, video, and reliable operational support.
          </p>
          <div className="footer-socials">
            {SOCIALS.map((s) => (
              
             <a   key={s.label}
                href={s.url}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={s.label}
              >
                <i className={`fab ${s.icon}`}></i>
              </a>
            ))}
          </div>
        </div>

        {/* Link columns */}
        <div className="footer-col">
          <h4>Services</h4>
          <ul>
            {SERVICES.map((l) => (
              <li key={l.label}><Link to={l.to}>{l.label}</Link></li>
            ))}
          </ul>
        </div>

        <div className="footer-col">
          <h4>Company</h4>
          <ul>
            {COMPANY_LINKS.map((l) => (
              <li key={l.label}><Link to={l.to}>{l.label}</Link></li>
            ))}
          </ul>
        </div>

        <div className="footer-col">
          <h4>Get in Touch</h4>
          <ul>
            <li>
              <a href="mailto:hello@mustarddigitals.com">
                <i className="fas fa-envelope"></i> hello@mustarddigitals.com
              </a>
            </li>
            <li>
              <a href="tel:+639949674922">
                <i className="fas fa-phone"></i> +63 9949674922
              </a>
            </li>
            <li>
              
               <a href="https://calendly.com/mustarddigitalsolutions/30min"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="fas fa-calendar"></i> Book a Discovery Call
              </a>
            </li>
          </ul>
        </div>

      </div>

      {/* Bottom bar */}
      <div className="footer-bottom">
        <div className="footer-bottom-inner">
          <p className="footer-copy">
            © {new Date().getFullYear()} Mustard Digitals. All rights reserved.
          </p>
          <ul className="footer-legal">
            {LEGAL_LINKS.map((l) => (
              <li key={l.label}><Link to={l.to}>{l.label}</Link></li>
            ))}
          </ul>
        </div>
      </div>
    </footer>
  );
}