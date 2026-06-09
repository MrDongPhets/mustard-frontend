import { useEffect, useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/style-modern.css';
import HeroCanvas from '../components/ui/HeroCanvas.jsx';

const MUSTARD_VALUES = [
  { icon: 'fa-shield-alt',   title: 'Integrity',  desc: 'We do what we say. Always.' },
  { icon: 'fa-gem',          title: 'Excellence', desc: "Good enough isn't our standard." },
  { icon: 'fa-hands-helping',title: 'Service',    desc: 'We show up to give, not just to get.' },
  { icon: 'fa-seedling',     title: 'Growth',     desc: 'We invest in our people as much as our projects.' },
  { icon: 'fa-compass',      title: 'Faith',      desc: 'Our work is guided by purpose beyond the bottom line.' },
];

const TEAM = [
  { 
    category: 'Leadership',
    name: 'Arvie Buenaflor', 
    role: 'Founder · Creative Director', 
    desc: 'Arvie leads Mustard Digitals\' creative direction with a background in Architecture, bringing structural thinking to brand identity, web design, and digital storytelling.',
    img: 'src/assets/aboutpage_team/arvie.png' 
  },
   { 
    category: 'Leadership',
    name: 'Cath Ayacaide', 
    role: 'Founding Partner · Operations Lead', 
    desc: 'With a background in Business Administration and Finance, Cath ensures everything runs smoothly, from client coordination and project workflows to administrative operations. She\'s the reason things get done on time and every client feels genuinely looked after.',
    img: 'src/assets/aboutpage_team/cath.png' 
  },
  { 
    category: 'Development & Technical',
    name: 'Christian Mendoza', 
    role: 'Full-Stack Developer · UI/UX Designer', 
    desc: 'Christian bridges the gap between great design and solid engineering, building responsive, user-centered systems across both frontend and backend, with a sharp eye for usability and detail.',
     img: 'src/assets/aboutpage_team/christian.png' 
  },
    { 
    category: 'Development & Technical',
    name: 'William Marpa', 
    role: 'Web Developer · Website Designer', 
    desc: 'William builds functional, well-crafted websites on WordPress and Wix, aligned with business goals and designed to deliver a real, lasting user experience.',
     img: 'src/assets/aboutpage_team/william.png' 
  },
  { 
    category: 'Creative & Multimedia',
    name: 'JM Econar', 
    role: 'Graphic Designer · Video Editor · Web Designer', 
    desc: 'JM brings versatility to every creative brief: from graphic design and video editing to web development and AI-driven digital initiatives. A reliable creative hand across disciplines.',
    img: 'src/assets/aboutpage_team/jm.png' 
  },
  { 
    category: 'Creative & Multimedia',
    name: 'Aikem Buenaflor', 
    role: 'Graphic Designer · UI Designer · Front-End Developer', 
    desc: 'Aikem sits at the intersection of creative and technical, designing compelling visuals and bringing them to life through clean, purposeful front-end implementation.',
    img: 'src/assets/aboutpage_team/aikem.png' 
  },
   { 
    category: 'Creative & Multimedia',
    name: 'Christine Joy Daquiado', 
    role: 'Creative Team', 
    desc: 'Christine is joining the Mustard Digitals creative team. We\'re excited to share more about her role and the work she\'ll be contributing to very soon.',
    img: 'src/assets/aboutpage_team/joy.png' 
  }
];

export default function About() {
  const navigate = useNavigate();
  
  useEffect(() => { 
    document.title = 'About | MUSTARD Digitals'; 
    window.scrollTo(0, 0); 
  }, []);

  // --- Auto-Scroll & Drag Carousel Logic ---
  const carouselRef = useRef(null);
  const animationRef = useRef(null);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeftPos, setScrollLeftPos] = useState(0);

  // The continuous scrolling function
  const startAutoScroll = () => {
    if (carouselRef.current) {
      carouselRef.current.scrollLeft += 0.8; // Adjust this number for speed (higher = faster)
      
      // Infinite loop check: if scrolled halfway, reset to 0 seamlessly
      if (carouselRef.current.scrollLeft >= carouselRef.current.scrollWidth / 2) {
        carouselRef.current.scrollLeft = 0;
      }
    }
    animationRef.current = requestAnimationFrame(startAutoScroll);
  };

  const stopAutoScroll = () => {
    cancelAnimationFrame(animationRef.current);
  };

  // Start scrolling on mount
  useEffect(() => {
    animationRef.current = requestAnimationFrame(startAutoScroll);
    return () => cancelAnimationFrame(animationRef.current);
  }, []);

  // Drag Event Handlers
  const handleMouseDown = (e) => {
    setIsDragging(true);
    stopAutoScroll(); // Stop animation while dragging
    setStartX(e.pageX - carouselRef.current.offsetLeft);
    setScrollLeftPos(carouselRef.current.scrollLeft);
  };
  
  const handleMouseLeave = () => {
    if (isDragging) setIsDragging(false);
    stopAutoScroll();
    startAutoScroll(); // Resume animation
  };
  
  const handleMouseUp = () => {
    setIsDragging(false);
    stopAutoScroll();
    startAutoScroll(); // Resume animation
  };
  
  const handleMouseMove = (e) => {
    if (!isDragging) return;
    e.preventDefault();
    const x = e.pageX - carouselRef.current.offsetLeft;
    const walk = (x - startX) * 1.5; // Drag speed multiplier
    carouselRef.current.scrollLeft = scrollLeftPos - walk;
  };

  return (
    <main>

      {/* ── Hero ─────────────────────────────────────────────── */}
      <section className="hero-modern about-hero-modern">
        <HeroCanvas />
        <div className="hero-content-modern" data-aos="fade-up" data-aos-delay="200">
          <h1 className="hero-title-modern">
            We Started Small.<br />
            <span className="hero-accent-word"> On Purpose.</span>
          </h1>
          <p className="hero-subtitle-modern">
            Mustard Digitals is a Philippines-based digital solutions team serving entrepreneurs,
            startups, and growing businesses worldwide, built not just to deliver great work, but to develop great people in the process.
          </p>
        </div>
      </section>

     {/* ── Our Story ────────────────────────────────────────── */}
      <section className="about-modern growth-modern" id="story" style={{ padding: '100px 0', overflow: 'hidden' }}>
        <div 
          className="about-container growth-container" 
          style={{ display: 'flex', alignItems: 'center', gap: '64px', flexWrap: 'wrap' }}
        >

          {/* Left Side - Text Content */}
          <div className="about-content growth-content" style={{ flex: '1 1 500px' }}>
            
            <div data-aos="fade-up">
              <p className="service-num-label" style={{ display: 'inline-flex', alignItems: 'center', gap: '8px' }}>
                <i className="fas fa-seedling" style={{ color: 'var(--primary)' }}></i> The Story Behind the Seed
              </p>
              <h2 className="section-title-modern growth-title" style={{ marginTop: '0.5rem', marginBottom: '2rem' }}>
                Small by Design.
                <br />
                <span>Built to Grow.</span>
              </h2>
            </div>

            <p 
              className="about-description growth-description" 
              data-aos="fade-up" 
              data-aos-delay="200" 
              style={{ marginBottom: '24px', fontSize: '1.1rem', opacity: 0.85 }}
            >
              The name comes from Matthew 13:31–32: the parable of the mustard seed. The smallest of all seeds, planted with intention, that grows into something far greater than itself.
            </p>

            <p 
              className="about-description growth-description" 
              data-aos="fade-up" 
              data-aos-delay="200" 
              style={{ marginBottom: '24px', fontSize: '1.1rem', opacity: 0.85 }}
            >
              That's the conviction at the core of everything we do. We built Mustard Digitals around a simple but uncommon belief:
              <strong style={{ color: 'var(--text)', fontWeight: '600' }}> that excellent digital work and strong character don't have to be separate things.</strong>
            </p>

            {/* Blockquote style for the origin */}
            <div 
              data-aos="fade-up" 
              data-aos-delay="100"
              style={{
                padding: '16px 0 16px 32px',
                borderLeft: '4px solid var(--primary)',
                margin: '0 0 32px 0',
                background: 'linear-gradient(90deg, rgba(235, 185, 47, 0.05) 0%, transparent 100%)',
                borderRadius: '0 16px 16px 0'
              }}
            >
              <p className="about-description" style={{ fontSize: '1.25rem', fontStyle: 'italic', margin: 0, opacity: 0.9, lineHeight: '1.6' }}>
                "Though it is the smallest of all seeds, yet when it grows, it is the largest of garden plants."
                <br/>
                <span style={{ fontSize: '1rem', fontStyle: 'normal', opacity: 0.8, display: 'block', marginTop: '8px' }}>
                  — Matthew 13:32, the parable that named us
                </span>
              </p>
            </div>
          
          </div>

          {/* Right Side - Core Values & Differentiators Containers */}
          <div 
            className="growth-features-wrapper" 
            style={{ 
              flex: '1 1 400px', 
              display: 'flex', 
              flexDirection: 'column',
              gap: '24px'
            }}
          >
            {/* Container 1: Conviction & Verse */}
            <div 
              data-aos="fade-left" 
              data-aos-delay="200"
              style={{
                background: 'var(--card)',
                border: '1px solid var(--border)',
                borderRadius: '24px',
                padding: '32px',
                position: 'relative',
                overflow: 'hidden',
                boxShadow: '0 10px 30px rgba(0,0,0,0.05)'
              }}
            >
              {/* Subtle top border accent */}
              <div style={{ position: 'absolute', top: 0, left: 0, right: 0, height: '4px', background: 'var(--primary)' }}></div>
              
              <p style={{ fontSize: '1.15rem', lineHeight: '1.7', margin: 0, opacity: 0.9 }}>
                A lean, purposeful team that started with a conviction, that meaningful digital work and meaningful character development are not two separate pursuits, but one.
              </p>
              
              <div style={{ 
                marginTop: '20px', 
                display: 'inline-flex', 
                alignItems: 'center',
                gap: '8px',
                padding: '6px 16px', 
                background: 'var(--accent-2)', 
                color: 'var(--primary)', 
                borderRadius: '30px', 
                fontSize: '0.9rem', 
                fontWeight: '600' 
              }}>
                <i className="fas fa-book-open" style={{ fontSize: '0.8rem' }}></i> Matthew 13:31–32
              </div>
            </div>

            {/* Container 2: What Sets Us Apart */}
            <div 
              data-aos="fade-left" 
              data-aos-delay="300"
              style={{
                background: 'var(--card)',
                border: '1px solid var(--border)',
                borderRadius: '24px',
                padding: '32px',
                boxShadow: '0 10px 30px rgba(0,0,0,0.05)'
              }}
            >
              <h3 style={{ 
                fontSize: '1.3rem', 
                marginBottom: '24px', 
                display: 'flex', 
                alignItems: 'center', 
                gap: '12px',
                color: 'var(--text)'
              }}>
                <div style={{ 
                  width: '32px', 
                  height: '32px', 
                  borderRadius: '8px', 
                  background: 'var(--accent-2)', 
                  display: 'flex', 
                  alignItems: 'center', 
                  justifyContent: 'center',
                  color: 'var(--primary)'
                }}>
                  <i className="fas fa-star" style={{ fontSize: '0.9rem' }}></i>
                </div>
                What sets us apart
              </h3>
              
              <ul style={{ 
                listStyle: 'none', 
                padding: 0, 
                margin: 0, 
                display: 'flex', 
                flexDirection: 'column', 
                gap: '20px' 
              }}>
                <li style={{ display: 'flex', alignItems: 'flex-start', gap: '16px' }}>
                  <i className="fas fa-check-circle" style={{ color: 'var(--primary)', fontSize: '1.1rem', marginTop: '4px' }}></i>
                  <span style={{ opacity: 0.85, lineHeight: '1.5', fontSize: '1.05rem' }}>One coordinated team, no juggling multiple agencies or freelancers.</span>
                </li>
                <li style={{ display: 'flex', alignItems: 'flex-start', gap: '16px' }}>
                  <i className="fas fa-check-circle" style={{ color: 'var(--primary)', fontSize: '1.1rem', marginTop: '4px' }}></i>
                  <span style={{ opacity: 0.85, lineHeight: '1.5', fontSize: '1.05rem' }}>Multidisciplinary expertise: design, development, content, and operations.</span>
                </li>
                <li style={{ display: 'flex', alignItems: 'flex-start', gap: '16px' }}>
                  <i className="fas fa-check-circle" style={{ color: 'var(--primary)', fontSize: '1.1rem', marginTop: '4px' }}></i>
                  <span style={{ opacity: 0.85, lineHeight: '1.5', fontSize: '1.05rem' }}>Character-led culture that shows up in every client interaction.</span>
                </li>
              </ul>
            </div>
          </div>

        </div>
      </section>
      {/* ── Mission & Vision ─────────────────────────────────── */}
      <section className="services-modern" style={{ padding: '120px 5%', position: 'relative' }}>
        
        {/* Injecting CSS for premium hover effects */}
        <style>
          {`
            .mission-vision-card {
              transition: transform 0.4s cubic-bezier(0.25, 1, 0.5, 1), box-shadow 0.4s ease, border-color 0.4s ease !important;
            }
            .mission-vision-card:hover {
              transform: translateY(-12px);
              box-shadow: 0 25px 50px rgba(0,0,0,0.15), 0 0 40px rgba(235, 185, 47, 0.08) !important;
              border-color: rgba(235, 185, 47, 0.4) !important;
            }
            .mv-icon-wrapper {
              transition: transform 0.4s cubic-bezier(0.25, 1, 0.5, 1), background-color 0.4s ease !important;
            }
            .mission-vision-card:hover .mv-icon-wrapper {
              transform: scale(1.1) rotate(5deg);
              background-color: rgba(245, 194, 40, 0.2) !important;
            }
          `}
        </style>

        <div className="services-modern-container" style={{ maxWidth: '1200px', margin: '0 auto', position: 'relative', zIndex: 1 }}>
          
          {/* Section Header */}
          <div data-aos="fade-up" style={{ textAlign: 'center', marginBottom: '80px' }}>
            
              <p className="service-num-label" style={{ display: 'inline-flex', alignItems: 'center', gap: '8px' }}>
               <i className="fas fa-compass" style={{ color: 'var(--primary)', fontSize: '0.9rem' }}></i>
              Why We Exist
              </p>
            
            <h2 className="section-title-modern" style={{ marginTop: '0.5rem', marginBottom: '2rem' }}>
              Driven by Purpose,
              <br />
              <span style={{ color: 'var(--primary)', fontStyle: 'italic' }}>Guided by Principle.</span>
            </h2>
          </div>

          {/* Cards Grid */}
          <div 
            className="mission-vision-grid" 
            style={{ 
              display: 'grid', 
              gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))', 
              gap: '40px' 
            }}
          >

            {/* Mission Card */}
            <div 
              className="service-card-modern mission-vision-card"
              data-aos="fade-up" 
              data-aos-delay="100"
              style={{
                background: 'var(--card)',
                border: '1px solid var(--border)',
                borderRadius: '32px',
                padding: '48px',
                display: 'flex',
                flexDirection: 'column',
                position: 'relative',
                overflow: 'hidden',
                boxShadow: '0 20px 40px rgba(0,0,0,0.1)'
              }}
            >
              {/* Card Header: Icon + Title */}
              <div style={{ display: 'flex', alignItems: 'center', gap: '20px', marginBottom: '32px' }}>
                <div 
                  className="mv-icon-wrapper"
                  style={{ 
                    width: '64px', 
                    height: '64px', 
                    borderRadius: '16px', 
                    background: 'var(--accent-2)', 
                    display: 'flex', 
                    alignItems: 'center', 
                    justifyContent: 'center',
                    color: 'var(--primary)',
                    fontSize: '1.5rem',
                    boxShadow: 'inset 0 0 20px rgba(235, 185, 47, 0.05)'
                  }}
                >
                  <i className="fas fa-bullseye"></i>
                </div>
                <h3 style={{ fontSize: '2rem', fontWeight: '700', margin: 0, color: 'var(--text)' }}>
                  Our Mission
                </h3>
              </div>
              
              {/* Card Content */}
              <div style={{ flexGrow: 1, display: 'flex', flexDirection: 'column', gap: '24px' }}>
                
                {/* Highlighted Catchphrase */}
                <div style={{ 
                  borderLeft: '4px solid var(--primary)', 
                  paddingLeft: '24px',
                  background: 'linear-gradient(90deg, rgba(235, 185, 47, 0.05) 0%, transparent 100%)',
                  paddingTop: '8px',
                  paddingBottom: '8px',
                  borderRadius: '0 12px 12px 0'
                }}>
                  <h4 style={{ fontSize: '1.4rem', fontWeight: '600', margin: 0, lineHeight: '1.5', color: 'var(--text)' }}>
                    Do great work.<br/>
                    <span style={{ color: 'var(--primary)' }}>Build great people.</span>
                  </h4>
                </div>

                {/* Description */}
                <p style={{ fontSize: '1.125rem', lineHeight: '1.7', opacity: 0.85, margin: 0 }}>
                  To provide creative, reliable, and results-driven digital solutions, while building a team culture that develops integrity, servant leadership, and professional excellence from the inside out.
                </p>
              </div>
            </div>

            {/* Vision Card */}
            <div 
              className="service-card-modern mission-vision-card"
              data-aos="fade-up" 
              data-aos-delay="200"
              style={{
                background: 'var(--card)',
                border: '1px solid var(--border)',
                borderRadius: '32px',
                padding: '48px',
                display: 'flex',
                flexDirection: 'column',
                position: 'relative',
                overflow: 'hidden',
                boxShadow: '0 20px 40px rgba(0,0,0,0.1)'
              }}
            >
              {/* Card Header: Icon + Title */}
              <div style={{ display: 'flex', alignItems: 'center', gap: '20px', marginBottom: '32px' }}>
                <div 
                  className="mv-icon-wrapper"
                  style={{ 
                    width: '64px', 
                    height: '64px', 
                    borderRadius: '16px', 
                    background: 'var(--accent-2)', 
                    display: 'flex', 
                    alignItems: 'center', 
                    justifyContent: 'center',
                    color: 'var(--primary)',
                    fontSize: '1.5rem',
                    boxShadow: 'inset 0 0 20px rgba(235, 185, 47, 0.05)'
                  }}
                >
                  <i className="fas fa-eye"></i>
                </div>
                <h3 style={{ fontSize: '2rem', fontWeight: '700', margin: 0, color: 'var(--text)' }}>
                  Our Vision
                </h3>
              </div>
              
              {/* Card Content */}
              <div style={{ flexGrow: 1, display: 'flex', flexDirection: 'column', gap: '24px' }}>
                
                {/* Highlighted Catchphrase */}
                <div style={{ 
                  borderLeft: '4px solid var(--primary)', 
                  paddingLeft: '24px',
                  background: 'linear-gradient(90deg, rgba(235, 185, 47, 0.05) 0%, transparent 100%)',
                  paddingTop: '8px',
                  paddingBottom: '8px',
                  borderRadius: '0 12px 12px 0'
                }}>
                  <h4 style={{ fontSize: '1.4rem', fontWeight: '600', margin: 0, lineHeight: '1.5', color: 'var(--text)' }}>
                    A trusted partner.<br/>
                    <span style={{ color: 'var(--primary)' }}>A force for good.</span>
                  </h4>
                </div>

                {/* Description */}
                <p style={{ fontSize: '1.125rem', lineHeight: '1.7', opacity: 0.85, margin: 0 }}>
                  To become a globally trusted digital partner known not only for quality work, but for raising leaders who go on to impact businesses, communities, and lives long after the project ends.
                </p>
              </div>
            </div>

          </div>
        </div>
      </section>

  {/* ── Values ───────────────────────────────────────────── */}
      <section className="about-modern values-modern" style={{ padding: '120px 5%', overflow: 'hidden', position: 'relative' }}>
        
        {/* Injecting CSS Keyframes and Hover Effects */}
        <style>
          {`
            @keyframes floatMassiveLetter {
              0% { transform: translateY(0px) rotate(0deg); text-shadow: 0 10px 30px rgba(235, 185, 47, 0.2); }
              50% { transform: translateY(-20px) rotate(3deg); text-shadow: 0 25px 40px rgba(235, 185, 47, 0.4); }
              100% { transform: translateY(0px) rotate(0deg); text-shadow: 0 10px 30px rgba(235, 185, 47, 0.2); }
            }
            
            /* Premium Hover Effects for Value Cards */
            .value-card-hover {
              transition: transform 0.4s cubic-bezier(0.25, 1, 0.5, 1), box-shadow 0.4s ease, border-color 0.4s ease !important;
            }
            .value-card-hover:hover {
              transform: translateY(-10px);
              box-shadow: 0 25px 50px rgba(0,0,0,0.15), 0 0 40px rgba(235, 185, 47, 0.08) !important;
              border-color: rgba(235, 185, 47, 0.4) !important;
            }
            .value-icon-wrapper {
              transition: transform 0.4s cubic-bezier(0.25, 1, 0.5, 1), background-color 0.4s ease !important;
            }
            .value-card-hover:hover .value-icon-wrapper {
              transform: scale(1.1) rotate(5deg);
              background-color: rgba(245, 194, 40, 0.2) !important;
            }
          `}
        </style>

        <div className="about-container" style={{ flexDirection: 'column', maxWidth: '1100px', margin: '0 auto', position: 'relative', zIndex: 1 }}>

          {/* Section Header */}
          <div data-aos="fade-up" style={{ textAlign: 'center', marginBottom: '100px' }}>
            <p className="service-num-label" style={{ display: 'inline-flex', alignItems: 'center', gap: '8px' }}>
              <i className="fas fa-star" style={{ color: 'var(--primary)', fontSize: '0.9rem' }}></i>  Our Core Values
            </p>
            <h2 className="section-title-modern" style={{ fontSize: 'clamp(2.5rem, 5vw, 3rem)', lineHeight: '1.2', fontWeight: '700', marginBottom: '1rem' }}>
              What We <span style={{ color: 'var(--primary)' }}>Stand On.</span>
            </h2>
            <p className="section-subtitle" style={{ opacity: 0.85, maxWidth: '650px', margin: '0 auto', fontSize: '1.15rem', lineHeight: '1.7' }}>
              These aren't just words on a wall. They are the non-negotiable principles that guide every project, partnership, and decision we make.
            </p>
          </div>

          {/* Values Row-by-Row List */}
          <div className="values-list" style={{ display: 'flex', flexDirection: 'column', gap: '64px', width: '100%' }}>
            {[
              { letter: 'M', title: 'Meaningful Service', desc: 'We serve with purpose, excellence, and intentionality, seeing our work as both professional service and meaningful impact. Every deliverable is an act of service, not just a transaction.', icon: 'fa-hands-helping' },
              { letter: 'U', title: 'Unity in Team and Purpose', desc: "We cultivate collaboration, encouragement, and shared vision, building strong relationships within our team and with our clients. We don't just coordinate. We genuinely work together.", icon: 'fa-users' },
              { letter: 'S', title: 'Stewardship and Integrity', desc: 'We handle time, talent, resources, and client trust responsibly, honoring God through honesty, accountability, and excellence in every commitment we make.', icon: 'fa-shield-alt' },
              { letter: 'T', title: 'Transformational Growth', desc: "We commit to continuous growth, professionally, personally, and spiritually. We're developing leaders who don't just improve their craft, but positively influence everyone around them.", icon: 'fa-seedling' },
              { letter: 'A', title: 'Authenticity and Humility', desc: 'We work with sincerity, teachability, and humility. We believe character matters as much as competence, and we hold both to a high standard.', icon: 'fa-heart' },
              { letter: 'R', title: 'Reliability and Excellence', desc: 'We deliver consistent quality, dependable service, and professional results that clients can trust, not just once, but every time. Good enough has never been our standard.', icon: 'fa-check-double' },
              { letter: 'D', title: 'Discipleship Through Work', desc: 'We intentionally develop people, nurturing leadership, faith, character, and purpose while serving clients effectively. The work is the classroom. Growth is the goal.', icon: 'fa-book-reader' }
            ].map((v, i) => {
              return (
                <div
                  key={v.title}
                  style={{
                    display: 'flex',
                    flexWrap: 'wrap',
                    alignItems: 'center',
                    gap: '40px',
                    width: '100%'
                  }}
                >
                  
                  {/* LEFT SIDE: Massive Floating Letter */}
                  <div 
                    data-aos="fade-right"
                    data-aos-delay="100"
                    style={{
                      flex: '0 0 auto',
                      width: 'clamp(120px, 15vw, 180px)', // Keeps the left column width consistent so cards align perfectly
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      position: 'relative',
                    }}
                  >
                    <span style={{
                      fontSize: 'clamp(8rem, 12vw, 12rem)', // Made significantly bigger
                      fontWeight: '900',
                      color: 'var(--primary)',
                      lineHeight: '1',
                      animation: 'floatMassiveLetter 6s ease-in-out infinite',
                      animationDelay: `${i * 0.4}s`, // Staggers the animation down the list
                      display: 'inline-block'
                    }}>
                      {v.letter}
                    </span>
                  </div>

                  {/* RIGHT SIDE: Value Container Card */}
                  <div 
                    className="service-card-modern value-card-modern value-card-hover"
                    data-aos="fade-left"
                    data-aos-delay="200"
                    style={{
                      flex: '1 1 400px', // Takes up the remaining space
                      padding: '48px',
                      background: 'var(--card)',
                      border: '1px solid var(--border)',
                      borderRadius: '32px',
                      boxShadow: '0 20px 40px rgba(0,0,0,0.05)',
                      position: 'relative',
                      display: 'flex',
                      flexDirection: 'column',
                      justifyContent: 'center'
                    }}
                  >
                    {/* Small context icon */}
                    <div 
                      className="value-icon-wrapper"
                      style={{ 
                        display: 'inline-flex', 
                        alignItems: 'center', 
                        justifyContent: 'center',
                        width: '48px',
                        height: '48px',
                        borderRadius: '12px',
                        background: 'var(--accent-2)',
                        color: 'var(--primary)',
                        marginBottom: '20px'
                      }}
                    >
                      <i className={`fas ${v.icon}`} style={{ fontSize: '1.2rem' }}></i>
                    </div>

                    <h3 className="service-title" style={{ fontSize: '2rem', marginBottom: '16px', color: 'var(--text)', fontWeight: '700' }}>
                      {v.title}
                    </h3>
                    
                    <p className="service-description" style={{ fontSize: '1.15rem', margin: 0, opacity: 0.85, lineHeight: '1.7', color: 'var(--text)' }}>
                      {v.desc}
                    </p>
                  </div>

                </div>
              );
            })}
          </div>

        </div>
      </section>


    {/* ── Team ─────────────────────────────────────────────── */}
      <section className="testimonials-modern team-section" style={{ padding: '120px 5%', overflow: 'hidden' }}>
        
        {/* CSS for the premium slide-up card animation and grid layouts */}
        <style>
          {`
            .team-category-title {
              display: flex;
              align-items: center;
              gap: 16px;
              margin-bottom: 32px;
            }
            .team-category-title::after {
              content: '';
              flex-grow: 1;
              height: 1px;
              background: linear-gradient(90deg, var(--border) 0%, transparent 100%);
            }
            .team-grid {
              display: grid;
              /* Reduced min-width from 320px to 260px to make the cards significantly sleeker */
              grid-template-columns: repeat(auto-fill, minmax(260px, 1fr));
              gap: 32px;
              margin-bottom: 80px;
            }
            
            /* Card Container */
            .team-member-card {
              position: relative;
              border-radius: 20px;
              overflow: hidden;
              aspect-ratio: 3 / 4;
              background: var(--card);
              border: 1px solid var(--border);
              box-shadow: 0 10px 30px rgba(0,0,0,0.05);
              cursor: pointer;
            }
            
            /* Profile Image */
            .team-member-img {
              width: 100%;
              height: 100%;
              object-fit: cover;
              object-position: center 20%;
              transition: transform 0.6s cubic-bezier(0.25, 1, 0.5, 1), filter 0.6s ease;
            }
            .team-member-card:hover .team-member-img {
              transform: scale(1.05);
              filter: brightness(0.3) saturate(1.2);
            }
            
            /* Content Overlay wrapper */
            .team-info-wrapper {
              position: absolute;
              bottom: 0;
              left: 0;
              right: 0;
              /* Reduced padding to perfectly frame the new smaller card size */
              padding: 50px 24px 24px;
              background: linear-gradient(to top, rgba(10,10,10,0.95) 0%, rgba(10,10,10,0.7) 60%, transparent 100%);
              display: flex;
              flex-direction: column;
              justify-content: flex-end;
              transform: translateY(0);
            }
            
            /* Description Expand Animation using modern CSS Grid */
            .team-member-desc-wrapper {
              display: grid;
              grid-template-rows: 0fr;
              transition: grid-template-rows 0.5s cubic-bezier(0.25, 1, 0.5, 1);
            }
            .team-member-desc-inner {
              overflow: hidden;
              opacity: 0;
              transform: translateY(10px);
              transition: opacity 0.4s ease, transform 0.5s ease;
            }
            
            /* Hover Trigger */
            .team-member-card:hover .team-member-desc-wrapper {
              grid-template-rows: 1fr; /* Smoothly expands to fit content */
            }
            .team-member-card:hover .team-member-desc-inner {
              opacity: 1;
              transform: translateY(0);
              margin-top: 12px;
            }
          `}
        </style>

        <div className="about-container" style={{ maxWidth: '1200px', margin: '0 auto' }}>
          
          {/* Section Header */}
          <div data-aos="fade-up" style={{ textAlign: 'center', marginBottom: '80px' }}>
            <p className="service-num-label" style={{ display: 'inline-flex', alignItems: 'center', gap: '8px' }}>
              <i className="fas fa-users" style={{ color: 'var(--primary)', fontSize: '0.9rem' }}></i>
               The People Behind the Work
            </p>
            
            <h2 className="section-title-modern" style={{ fontSize: 'clamp(2.5rem, 5vw, 3rem)', lineHeight: '1.2', fontWeight: '700', marginBottom: '1rem' }}>
              A Team You'll Actually
              <br />
              <span style={{ color: 'var(--primary)' }}>Want To Work With.</span>
            </h2>
            <p className="section-subtitle" style={{ opacity: 0.85, maxWidth: '750px', margin: '0 auto', fontSize: '1.15rem', lineHeight: '1.7' }}>
              We're a multidisciplinary team combining creative design, technical development, multimedia production, and business operations, all working as one. No silos. No handoff delays. Just people who genuinely care about your project, collaborating to get it right.
            </p>
          </div>

          {/* Team Grid - All Members */}
          <div className="team-grid" style={{ gridTemplateColumns: 'repeat(4, 1fr)', justifyContent: 'center' }}>
            {TEAM.map((member, i) => (
              <div 
                className="team-member-card" 
                key={`${member.name}-${i}`}
                data-aos="fade-up"
                data-aos-delay={i * 100}
              >
                {/* Background Image */}
                <img
                  src={member.img}
                  alt={member.name}
                  loading="lazy"
                  className="team-member-img"
                />
                
                {/* Sliding Information Overlay */}
                <div className="team-info-wrapper">
                  
                  {/* Always Visible: Name and Role */}
                  <div>
                    <h4 style={{ 
                      fontSize: '1.4rem', /* Scaled down for the smaller card */
                      marginBottom: '4px', 
                      fontWeight: '700', 
                      color: '#ffffff',
                      margin: 0
                    }}>
                      {member.name}
                    </h4>
                    <p style={{ 
                      color: 'var(--primary)', 
                      fontSize: '0.8rem', /* Scaled down */
                      letterSpacing: '1px', 
                      textTransform: 'uppercase', 
                      margin: 0,
                      fontWeight: '600'
                    }}>
                      {member.role}
                    </p>
                  </div>

                  {/* Hidden by default, slides up on hover: Description */}
                  <div className="team-member-desc-wrapper">
                    <div className="team-member-desc-inner">
                      <p style={{ 
                        fontSize: '0.95rem', /* Scaled down */
                        lineHeight: '1.5', 
                        color: 'rgba(255,255,255,0.85)', 
                        margin: 0,
                        paddingTop: '12px',
                        borderTop: '1px solid rgba(255,255,255,0.1)'
                      }}>
                        {member.desc}
                      </p>
                    </div>
                  </div>
                  
                </div>
              </div>
            ))}
          </div>
          
        </div>
      </section>

      {/* ── Call To Action (CTA) ───────────────────────────────── */}
      <style>
        {`
          [data-theme='light'] .cta-modern {
            background: var(--card) !important;
            box-shadow: 0 10px 40px rgba(21, 22, 30, 0.06) !important;
          }
        `}
      </style>
      <section 
        className="cta-modern" 
        style={{ 
          padding: '120px 5%', 
          display: 'flex',
          justifyContent: 'center'
        }}
      >
        <div 
          className="cta-container" 
          data-aos="fade-up" 
          style={{ 
            maxWidth: '800px', 
            width: '100%',
            background: 'var(--card)', 
            padding: '64px 40px', 
            borderRadius: '24px', 
            border: '1px solid var(--border)',
            textAlign: 'center'
          }}
        >
          <h2 style={{ fontSize: '2.5rem', marginBottom: '20px', fontWeight: 'bold' }}>
            Readys to Work With a Team <br></br><span style={{ color: 'var(--primary)' }}>That Cares?</span>
          </h2>
          
          <p style={{ 
            fontSize: '1.125rem', 
            opacity: 0.8, 
            maxWidth: '600px', 
            margin: '0 auto 40px auto', 
            lineHeight: '1.6' 
          }}>
            Whether you need a fresh brand, a new website, or an extra set of hands to run your operations, we're ready to help.
          </p>

          <div style={{ 
            display: 'flex', 
            gap: '16px', 
            justifyContent: 'center', 
            flexWrap: 'wrap' 
          }}>
            <button
              className="btn btn-primary-modern"
              onClick={() => navigate('/free-trial')}
              style={{ 
                fontSize: '1.05rem', 
                padding: '16px 32px',
                display: 'inline-flex',
                alignItems: 'center',
                gap: '10px'
              }}
            >
              Claim Free Trial <i className="fas fa-arrow-right"></i>
            </button>
            
           <button
              className="btn btn-secondary-modern"
              onClick={() => navigate('/contact')}
              style={{
                fontSize: '1.05rem',
                padding: '16px 32px',
                display: 'inline-flex',
                alignItems: 'center',
                gap: '10px',
                background: 'transparent',
                color: 'var(--text)',
                border: '1px solid var(--border)',
                borderRadius: '8px',
                textDecoration: 'none',
                transition: 'all 0.3s ease',
                cursor: 'pointer'
              }}
              onMouseEnter={(e) =>
                (e.currentTarget.style.background = 'rgba(128, 128, 128, 0.1)')
              }
              onMouseLeave={(e) =>
                (e.currentTarget.style.background = 'transparent')
              }
            >
              <i className="fas fa-calendar-alt"></i>
              Book A Discovery Call
            </button>
          </div>
        </div>
      </section>

    </main>
  );
}