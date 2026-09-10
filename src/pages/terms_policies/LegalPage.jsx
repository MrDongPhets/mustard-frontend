/* ============================================================
   MUSTARD DIGITALS - LegalPage layout
   Version: v1.0  |  Last Updated: 09 Sep 2026
   Prepared By: Sergette Angela Napoles (Wibiz)

   Shared layout for Terms, Privacy, and Cookie pages. Renders any
   document object from data/legal-data.js so all three stay
   consistent. Renders <main> only - header/footer come from your
   shared layout, matching your other pages.
   ============================================================ */

import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import SEO from '../../components/SEO.jsx';
import { COMPANY } from '../../data/legal-data.js';
import '../../styles/legal.css';

export default function LegalPage({ doc }) {
  useEffect(() => { window.scrollTo(0, 0); }, []);

  return (
    <main className="legal-page">
      <SEO
        title={`${doc.title} | ${COMPANY.name}`}
        description={`${doc.title} for ${COMPANY.name}.`}
        path={`/${doc.slug}`}
      />

      <section className="legal-hero">
        <div className="legal-container">
          <h1 className="legal-title">{doc.title}</h1>
          <p className="legal-meta">Effective date: {COMPANY.effectiveDate}</p>
        </div>
      </section>

      <section className="legal-body">
        <div className="legal-container">
          <p className="legal-intro">{doc.intro}</p>

          {doc.sections.map((s) => (
            <div className="legal-section" key={s.heading}>
              <h2>{s.heading}</h2>
              {s.body?.map((p, i) => <p key={i}>{p}</p>)}
              {s.list && (
                <ul className="legal-list">
                  {s.list.map((item, i) => <li key={i}>{item}</li>)}
                </ul>
              )}
              {s.after?.map((p, i) => <p key={`after-${i}`}>{p}</p>)}
            </div>
          ))}

          {/* Cross-links to the other legal docs */}
          <div className="legal-crosslinks">
            <Link to="/terms">Terms of Service</Link>
            <Link to="/privacy">Privacy Policy</Link>
            <Link to="/cookies">Cookie Notice</Link>
          </div>

          <p className="legal-disclaimer">
            This document is provided for general information and does not constitute legal advice.
          </p>
        </div>
      </section>
    </main>
  );
}
