import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import AOS from 'aos';
import 'aos/dist/aos.css';
import HeroCanvas from '../components/ui/HeroCanvas.jsx';
import SEO from '../components/SEO.jsx';
import CaseStudyCard from '../components/ui/CaseStudyCard.jsx';
import VideoEmbed from '../components/ui/VideoEmbed.jsx';
import { YoutubeIcon } from '../components/ui/PortfolioIcons.jsx';
import {
  PAGE_HERO,
  CASE_STUDIES,
  BRAND_LIBRARY,
  VIDEO_SECTION,
  YT_SECTION,
  CLOSING_CTA,
} from '../data/portfolio-data.js';
import '../styles/portfolio.css';

export default function Portfolio() {
  const navigate = useNavigate();
  const [lightbox, setLightbox] = useState(null); // { src, alt } | null
  const [zoom, setZoom] = useState(1);
  const [pan, setPan] = useState({ x: 0, y: 0 });

  // Initialize AOS (safe even if already initialized elsewhere)
  useEffect(() => {
    AOS.init({ duration: 700, easing: 'ease-out-cubic', once: true });
    AOS.refresh();
  }, []);

  // Lightbox: reset zoom/pan on open, Escape to close, lock scroll
  useEffect(() => {
    if (!lightbox) return;
    setZoom(1);
    setPan({ x: 0, y: 0 });
    const onKey = (e) => { if (e.key === 'Escape') setLightbox(null); };
    document.addEventListener('keydown', onKey);
    document.body.style.overflow = 'hidden';
    return () => {
      document.removeEventListener('keydown', onKey);
      document.body.style.overflow = '';
    };
  }, [lightbox]);

  return (
    <main className="pf-page">
      <SEO
        title="Portfolio & Case Studies | Mustard Digitals"
        description="Case studies from Mustard Digitals: brand systems, websites, and marketing campaigns for Virtual Spotter, Sprint Business Solutions, TRIFECTA, ALAN & CO, and more, with real results."
        path="/portfolio"
      />

      {/* PAGE HERO */}
      <section className="pf-hero">
        <HeroCanvas />
        <div className="pf-hero-shape" aria-hidden="true" />
        <div className="pf-container" data-aos="fade-up">
          <span className="pf-eyebrow">{PAGE_HERO.eyebrow}</span>
          <h1 className="pf-hero-title">
            {PAGE_HERO.title}
            <span className="hero-accent-word"> real results.</span>
          </h1>
          <p className="pf-lead pf-hero-lead">{PAGE_HERO.lead}</p>
        </div>
      </section>

      {/* CASE STUDIES */}
      <section className="pf-section">
        <div className="pf-container">
          {CASE_STUDIES.map((study, i) => (
            <div data-aos="fade-up" data-aos-delay={(i % 2) * 100} key={study.id}>
              <CaseStudyCard study={study} />
            </div>
          ))}
        </div>
      </section>

      {/* BRAND IDENTITY LIBRARY */}
      <section className="pf-section pf-bg-soft">
        <div className="pf-container">
          <div className="pf-section-head center" data-aos="fade-up">
            <span className="pf-eyebrow center">{BRAND_LIBRARY.eyebrow}</span>
            <h2>{BRAND_LIBRARY.heading}</h2>
            <p className="pf-lead center">{BRAND_LIBRARY.lead}</p>
          </div>

          {BRAND_LIBRARY.images.map((img, i) => (
            <button
              type="button"
              className="pf-logo-frame pf-logo-frame-btn"
              key={img.src}
              data-aos="fade-up"
              data-aos-delay={i * 100}
              onClick={() => setLightbox(img)}
              aria-label={`Open ${img.alt} full size`}
            >
              <img src={img.src} alt={img.alt} loading="lazy" />
              <span className="pf-zoom-hint" aria-hidden="true">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"
                     strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="11" cy="11" r="7" />
                  <path d="M21 21l-4.3-4.3M11 8v6M8 11h6" />
                </svg>
              </span>
            </button>
          ))}
        </div>
      </section>

      {/* VIDEO SAMPLES */}
      <section className="pf-section">
        <div className="pf-container">
          <div className="pf-section-head center" data-aos="fade-up">
            <span className="pf-eyebrow center">{VIDEO_SECTION.eyebrow}</span>
            <h2>{VIDEO_SECTION.heading}</h2>
          </div>

          {VIDEO_SECTION.groups.map((group) => (
            <div className="pf-video-group" key={group.label}>
              <h3 className="pf-video-group-label" data-aos="fade-up">{group.label}</h3>
              <div className="pf-video-row">
                {group.videos.map((v, i) => (
                  <div data-aos="fade-up" data-aos-delay={i * 100} key={v.youtubeId}>
                    <VideoEmbed {...v} orientation={group.orientation} />
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* YOUTUBE CHANNEL MANAGEMENT */}
      <section className="pf-section pf-bg-soft">
        <div className="pf-container">
          <div className="pf-section-head center" data-aos="fade-up">
            <span className="pf-eyebrow center">{YT_SECTION.eyebrow}</span>
            <h2>{YT_SECTION.heading}</h2>
            <p className="pf-lead center">{YT_SECTION.lead}</p>
          </div>

          <div className="pf-yt-grid">
            {YT_SECTION.channels.map((c, i) => (
              <div className="pf-yt-card" key={c.name} data-aos="fade-up" data-aos-delay={i * 100}>
                <div className="pf-yt-icon"><YoutubeIcon /></div>
                <div>
                  <h4>{c.name}</h4>
                  <p>{c.meta}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="pf-video-row pf-video-row-spaced">
            {YT_SECTION.videos.map((v, i) => (
              <div data-aos="fade-up" data-aos-delay={i * 100} key={`${v.youtubeId}-${i}`}>
                <VideoEmbed {...v} orientation="h" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CLOSING CTA */}
      <section className="cta-modern" data-aos="fade-up">
        <div className="cta-content">
          <div className="cta-icon">
            <i className="fas fa-phone"></i>
          </div>
          <h2>Want work like this for your  <span style={{ color: 'var(--primary)' }}>business?</span></h2>
          <p>Start with a free discovery call and see the quality firsthand.</p>
          <div className="svc-cta-btns">
            <button className="btn btn-primary-modern btn-lg" onClick={() => navigate('/free-trial')}>
              Claim Free Trial <i className="fas fa-arrow-right"></i>
            </button>
          </div>
        </div>
      </section>

      {/* LIGHTBOX */}
      {lightbox && (
        <div
          className="pf-lightbox"
          role="dialog"
          aria-modal="true"
          aria-label={lightbox.alt}
          onClick={() => setLightbox(null)}
          onWheel={(e) => {
            e.preventDefault();
            setZoom((z) => {
              const next = Math.min(4, Math.max(1, z - e.deltaY * 0.0015));
              if (next === 1) setPan({ x: 0, y: 0 }); // recenter at min zoom
              return next;
            });
          }}
        >
          <button
            type="button"
            className="pf-lightbox-close"
            onClick={(e) => { e.stopPropagation(); setLightbox(null); }}
            aria-label="Close"
          >
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"
                 strokeLinecap="round" strokeLinejoin="round">
              <path d="M6 6l12 12M18 6 6 18" />
            </svg>
          </button>

          <img
            src={lightbox.src}
            alt={lightbox.alt}
            className="pf-lightbox-img"
            draggable="false"
            style={{
              transform: `translate(${pan.x}px, ${pan.y}px) scale(${zoom})`,
              cursor: zoom > 1 ? 'grab' : 'default',
            }}
            onClick={(e) => e.stopPropagation()}
            onPointerDown={(e) => {
              if (zoom <= 1) return;
              e.stopPropagation();
              e.currentTarget.setPointerCapture(e.pointerId);
              const start = { x: e.clientX - pan.x, y: e.clientY - pan.y };
              e.currentTarget.style.cursor = 'grabbing';
              const move = (ev) => setPan({ x: ev.clientX - start.x, y: ev.clientY - start.y });
              const up = (ev) => {
                e.currentTarget.style.cursor = 'grab';
                e.currentTarget.releasePointerCapture(ev.pointerId);
                e.currentTarget.removeEventListener('pointermove', move);
                e.currentTarget.removeEventListener('pointerup', up);
              };
              e.currentTarget.addEventListener('pointermove', move);
              e.currentTarget.addEventListener('pointerup', up);
            }}
          />
        </div>
      )}
    </main>
  );
}