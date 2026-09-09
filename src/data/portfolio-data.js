/* ============================================================
   MUSTARD DIGITALS - PORTFOLIO DATA
   Document Name: Portfolio Page Content Data
   Version: v1.0
   Last Updated: 09 Sep 2026
   Prepared By: Sergette Angela Napoles (Wibiz)

   All portfolio content lives here (no backend yet). Edit these
   arrays to add/update case studies, videos, channels, or brand
   library images. Images are referenced from /assets or /images -
   adjust the import paths to match your project's asset pipeline.
   ============================================================ */

/*
  CASE STUDIES
  ------------
  banner.variant maps to a CSS class that paints the banner header:
    'cs-banner-a' .. 'cs-banner-e' are brand-tinted gradients defined
    in portfolio.css. Swap freely.
  stats: up to 3 headline figures.
  brief / research / delivered: the three content blocks.
  screenshot: image path (string) - shown below the content grid.
  links: array of { label, url } - rendered as outbound buttons.
*/

import virtualspotter_full from '../assets/portfolio/virtualspotter_full.jpg';
import sprint_full         from '../assets/portfolio/sprint_full.jpg';
import trifecta_marketing  from '../assets/portfolio/trifecta_marketing.jpg';
import alanandco_ads       from '../assets/portfolio/alanandco_ads.jpg';
import ecoway_trashvac     from '../assets/portfolio/ecoway_trashvac.jpg';
import terra_full          from '../assets/portfolio/terra_full.jpg';
import logo_grid_3         from '../assets/portfolio/logo_grid_3.jpg';
import branding_sheets_3   from '../assets/portfolio/branding_sheets_3.jpg';


// Case study screenshots
import alanco_full        from '../assets/portfolio/logo/ALAN&CO-Real-Estate-Social-Media-Content-Design.png.png';


// Brand identity library
import logo_portfolio     from '../assets/portfolio/logo/Logo-Design-Portfolio.png.png';
import branding_portfolio from '../assets/portfolio/logo/Branding-Design-Portfolio.png.png';
export const CASE_STUDIES = [
  {
    id: 'virtual-spotter',
    variant: 'cs-banner-a',
    tags: ['Website Design', 'UI/UX', 'Responsive Design', 'Web Development'],
    title: 'Virtual Spotter',
    summary:
      'A modern, conversion-focused website for a virtual assistant service built specifically for gyms, studios, and personal trainers.',
    stats: [
      { num: '300+', label: 'Gyms & studios supported' },
      { num: '$1.4K', label: 'Avg. monthly savings per client' },
      { num: '65+', label: 'Hours saved per month' },
    ],
    brief:
      'Virtual Spotter needed a site that could speak directly to fitness business owners drowning in admin, member follow-ups, scheduling, payment chasing, without sounding like a generic outsourcing agency.',
    research: {
      source: 'Researched Results (from virtualspotter.com.au)',
      body: 'Their live site now reports a 97% client retention rate and full onboarding in as little as 3 days, with clients citing savings of over $70,000/year on replacing a full-time studio manager role.',
    },
    delivered: [
      'Full website design, UI/UX, and responsive build',
      'Conversion-focused homepage with lead capture form',
      'About and Team pages built to build trust fast',
      'Testimonial and social-proof sections throughout',
    ],
    screenshot: virtualspotter_full,
    screenshotAlt: 'Virtual Spotter full website design pages by Mustard Digitals',
    links: [
      { label: 'View Live Site', url: 'https://virtualspotter.com.au/', icon: 'external' },
      { label: 'View Figma Design', url: 'https://www.figma.com/design/3CfYRvwQJX38yn5AEOCRdz/Virtual-Spotter', icon: 'figma' },
    ],
  },
  {
    id: 'sprint',
    variant: 'cs-banner-b',
    tags: ['Website Design', 'UI/UX', 'WordPress Development', 'Responsive Design'],
    title: 'Sprint Business Solutions',
    summary:
      'A fully responsive custom WordPress website for a bookkeeping and business advisory firm serving CPA firms, SMEs, and self-employed professionals.',
    stats: [
      { num: '4', label: 'Client segments served' },
      { num: 'Xero', label: 'Certified partner integration' },
      { num: '1', label: 'Seamless Calendly booking flow' },
    ],
    brief:
      "Sprint needed a site that felt trustworthy to CPA firms and healthcare businesses alike, while making it dead simple for a prospect to either book a call or send a quick email if they weren't ready yet.",
    research: {
      source: 'Researched Details (from sprintbizsolutions.com)',
      body: 'Sprint positions itself as a finance-driven operational partner, not just a bookkeeper, serving CPA & Accounting Firms, SMEs, Healthcare, Real Estate & VA Agencies, and Freelancers, with a full blog and Xero-certified credentials built into the site.',
    },
    delivered: [
      'Full custom WordPress build across Home, About, Services, Contact, and Blog',
      'Seamless Calendly integration for direct call booking',
      'Dynamic, easy-to-update blog with comment sections',
      'Client testimonial carousel and certification badges',
    ],
    screenshot: sprint_full,
    screenshotAlt: 'Sprint Business Solutions full website design pages by Mustard Digitals',
    links: [
      { label: 'View Live Site', url: 'https://sprintbizsolutions.com/', icon: 'external' },
      { label: 'View Figma Design', url: 'https://www.figma.com/design/9qy5iBcav8A7TSMyfb9H0h/Sprint-Bookkeeping-Solutions', icon: 'figma' },
    ],
  },
  {
    id: 'trifecta',
    variant: 'cs-banner-c',
    tags: ['Brand Identity', 'Marketing', 'Print', 'Web Design', 'Automations', 'Social Media'],
    title: 'TRIFECTA\u2122 Brand Ecosystem',
    summary:
      'A full brand system for a mission-critical workforce deployment company serving data centers, semiconductor fabs, defense, and utility infrastructure.',
    stats: [
      { num: '10', label: 'Mission-critical environments served' },
      { num: '4', label: 'Authority levels (L1-L4) defined' },
      { num: '3', label: 'Core disciplines unified' },
    ],
    brief:
      'TRIFECTA needed a single, consistent identity that could stretch across recruitment campaigns, client-facing marketing, print collateral, and a new website, without looking like four different companies.',
    research: {
      source: 'Researched Details (from trifectaglobal.com)',
      body: "TRIFECTA's positioning has since evolved into global mission-critical deployment across 10 environment types, from hyperscale data centers to defense installations, with a 4-tier authority-matching system (L1 to L4) that's core to how they differentiate from local staffing firms.",
    },
    delivered: [
      'Full brand guideline system with logo, color, and type rules',
      'Recruitment and B2B marketing collateral, print and digital',
      'Business cards, letterheads, and executive collateral for leadership',
      'Social media graphics and automation-ready templates',
    ],
    screenshot: trifecta_marketing,
    screenshotAlt: 'TRIFECTA web and digital marketing content design by Mustard Digitals',
    links: [
      { label: 'View Live Site', url: 'https://trifectaglobal.com/', icon: 'external' },
    ],
  },
  {
    id: 'alan-co',
    variant: 'cs-banner-d',
    tags: ['Marketing', 'Print', 'Social Media'],
    title: 'ALAN & CO Real Estate',
    summary:
      'Property marketing assets across Western Sydney and NSW, built to convert listings into real buyer activity.',
    stats: [
      { num: '400+', label: 'Buyer enquiries' },
      { num: '300+', label: 'Call backs generated' },
      { num: '8,000+', label: 'Online clicks' },
    ],
    brief:
      'ALAN & CO needed a repeatable system for turning new listings into polished, consistent marketing, fast, across print, digital, and on-the-ground signage.',
    research: {
      source: 'Researched Details (from alanandco.com.au)',
      body: 'Alan & Co has since built its entire positioning around a "we market it, not just list it" model, backed by an 8-business-hour campaign launch guarantee and a flat 1.5-2% commission, a direct extension of the campaign-first marketing approach built here.',
    },
    delivered: [
      'Property ad templates for every new listing',
      'Social media campaign graphics',
      'Signboards, brochures, and aerial land graphics',
      '11 open home promotional packages',
    ],
    screenshot: alanandco_ads,
    screenshotAlt: 'ALAN & CO real estate social media content design by Mustard Digitals',
    links: [
      { label: 'View Live Site', url: 'https://alanandco.com.au/', icon: 'external' },
    ],
  },
  {
    id: 'ecoway-trashvac',
    variant: 'cs-banner-e',
    tags: ['Marketing', 'Print', 'Advertising', 'Web'],
    title: 'EcoWay Pro & Trash Vac',
    summary:
      'A cohesive print and digital campaign for a pest control brand and its sister product line, built to defend market share against fast-moving local competitors.',
    stats: [
      { num: '2002', label: 'Field-tested since' },
      { num: 'EPA', label: 'Exempt product line' },
      { num: '2', label: 'Connected brands, one system' },
    ],
    brief:
      'EcoWay Pro needed to defend its territory against aggressive local competitors while launching new product lines, without diluting its established brand trust, and Trash Vac needed the same consistency for its own product site.',
    research: {
      source: 'Researched Details (from ecowaypro.com & thetrashvac.com)',
      body: "EcoWayPro now runs exclusive-territory offers for licensed pest control operators (PCOs) and free sample requests as its core lead-gen mechanic, while Trash Vac's site highlights its patented cyclonic-turbine system across parks, stadiums, and disaster restoration use cases, both consistent with the campaign direction built here.",
    },
    delivered: [
      'Product launch campaigns (Trash Vac, wearable sprayer)',
      'Direct mail and door-hanger campaigns',
      'Competitive territory-defense advertising',
      'Website presence for both connected brands',
    ],
    screenshot: ecoway_trashvac,
    screenshotAlt: 'EcoWay Pro and Trash Vac web and social media marketing content design by Mustard Digitals',
    links: [
      { label: 'View EcoWay Pro', url: 'https://ecowaypro.com/', icon: 'external' },
      { label: 'View Trash Vac', url: 'https://www.thetrashvac.com/', icon: 'external' },
    ],
  },
  {
    id: 'terra',
    variant: 'cs-banner-a',
    tags: ['Web', 'Copy', 'Content Strategy'],
    title: 'TERRA Collection',
    summary:
      'A full digital presence for a curated luxury wellness travel brand, spanning 9 global destinations from Malibu to Sardinia.',
    stats: [
      { num: '9', label: 'Global destinations' },
      { num: '1', label: 'Unified content system' },
      { num: '100%', label: 'CMS-managed property pages' },
    ],
    brief:
      'TERRA needed every property, from The Ranch Malibu to Cap Karoso in Indonesia, to feel part of one curated collection, with consistent copy, SEO, and visual storytelling.',
    research: null,
    delivered: [
      'Property page copywriting for all 9 destinations',
      'SEO structuring and CMS management',
      'Branded slide decks and marketing graphics',
      'Promotional video production',
    ],
    screenshot: terra_full,
    screenshotAlt: 'TERRA Collection web and social media management content design by Mustard Digitals',
    links: [],
  },
];

/*
  BRAND IDENTITY LIBRARY
  ----------------------
  A simple eyebrow + heading + lead, followed by full-width image frames.
*/
export const BRAND_LIBRARY = {
  eyebrow: 'Brand Identity Library',
  heading: '20+ logo & brand systems built',
  lead:
    'A growing library across coaching, compliance, hospitality, wellness, legal, and professional services businesses, each with a full guideline system: logo variations, color palette, typography, and brand mockups.',
  images: [
    { src: logo_portfolio, alt: 'Logo design portfolio by Mustard Digitals' },
    { src: branding_portfolio, alt: 'Brand guideline and identity design portfolio by Mustard Digitals' },
    { src: virtualspotter_full, alt: 'Virtual Spotter website UI/UX design by Mustard Digitals' },
    { src: sprint_full, alt: 'Sprint Business Solutions website design by Mustard Digitals' },
    { src: trifecta_marketing, alt: 'TRIFECTA web and digital marketing design by Mustard Digitals' },
    { src: alanco_full, alt: 'ALAN & CO real estate social media content design by Mustard Digitals' },
    { src: ecoway_trashvac, alt: 'EcoWay Pro and Trash Vac web and social media design by Mustard Digitals' },
    { src: terra_full, alt: 'TERRA Collection web and content design by Mustard Digitals' },
   
  ],
};

/*
  VIDEO SAMPLES
  -------------
  youtubeId: the embed id only (not the full URL).
  orientation: 'h' (16:9) or 'v' (9:16 vertical / reels).
*/
export const VIDEO_SECTION = {
  eyebrow: 'Video Samples',
  heading: 'Long-form edits & short-form content',
  groups: [
    {
      label: 'Full-Length Edits',
      orientation: 'h',
      videos: [
        { youtubeId: 'k87azaNockc', title: 'TRIFECTA', caption: 'Client feature video, full-length edit' },
        { youtubeId: 'vHooYKuvpXY', title: 'Fox News Feature Edit', caption: 'News feature video edit for a client' },
        { youtubeId: 'xSJL1WinezE', title: 'The Greater Value Series', caption: 'Promo edit for a mentorship program' },
        
      ],
    },
    {
      label: 'Short-Form & Reels',
      orientation: 'v',
      videos: [
        { youtubeId: 'GVZUEOSLUxw', title: 'Tiffany Joy Lanier', caption: 'Speaking highlight reel' },
        { youtubeId: 'NZY4IO6zKIA', title: 'Screw the Cubicle TV', caption: '3 tips on self-employment' },
        { youtubeId: 'Q5OlCNeON9k', title: 'TRIFECTA', caption: 'Behind the brand, short-form' },
      ],
    },
  ],
};

/*
  YOUTUBE CHANNEL MANAGEMENT
*/
export const YT_SECTION = {
  eyebrow: 'YouTube Channel Management',
  heading: 'Full YouTube real estate production',
  lead:
    'End-to-end YouTube support for real estate agents: video editing, thumbnails, banners, SEO, publishing support, and consistent branding and content organization across every upload.',
  channels: [
    { name: 'Hello Arizona Living & Real Estate', meta: 'Greater Phoenix, AZ - Mary Kay Marino, eXp Realty' },
    { name: 'Selling San Diego Real Estate', meta: 'San Diego, CA market updates & home tours' },
    { name: 'Fort Worth Home Tours', meta: 'Fort Worth / DFW, TX - Elizabeth Oliva, eXp Realty' },
  ],
  videos: [
    { youtubeId: 'OgX5-m4rWu8', title: 'Real Estate Channel Edit', caption: 'Full production: edit, thumbnail & publishing' },
    { youtubeId: 'RX_pmkE7BmI', title: 'Real Estate Channel Edit', caption: 'Full production: edit, thumbnail & publishing' },
    { youtubeId: 'fubLu1XTUhs', title: 'Real Estate Channel Edit', caption: 'Full production: edit, thumbnail & publishing' },
  ],
};

/* PAGE HERO */
export const PAGE_HERO = {
  eyebrow: 'Case Studies',
  title: 'Real work, real industries,',
  lead:
    'A closer look at the brand systems, websites, and campaigns built for clients across fitness tech, bookkeeping, energy, real estate, pest control, and luxury travel, backed by research into how each business actually operates.',
};

/* CLOSING CTA */
export const CLOSING_CTA = {
  heading: 'Want work like this for your business?',
  lead: 'Start with a free discovery call and see the quality firsthand.',
  buttonText: 'Claim Your Free Trial',
  buttonHref: '/free-trial',
};
