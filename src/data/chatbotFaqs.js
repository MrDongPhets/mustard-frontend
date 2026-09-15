/**
 * Curated Q&A for the site-wide chat widget (ChatWidget.jsx).
 * No AI involved — visitors click a topic, then a question, and get the
 * matching canned answer. Content sourced from "Mustard Digitals Planning.pdf"
 * (Full FAQ — for chat widget, website FAQ page, and outreach reference).
 */

export const CHATBOT_CATEGORIES = [
  {
    id: 'about',
    label: 'About Mustard',
    icon: 'fa-info-circle',
    questions: [
      {
        q: 'What is Mustard Digitals?',
        a: "We're a Philippines-based digital team helping businesses worldwide grow through creative design, web development, video production, and reliable operational support, all in one place.",
      },
      {
        q: 'Are you a virtual assistant service?',
        a: "Not quite, we're a full digital team. Instead of hiring one VA, you get access to a coordinated group covering admin, marketing, and technical work, so you're not managing multiple freelancers or agencies.",
      },
      {
        q: 'Where is your team based?',
        a: "We're based in the Philippines, working with businesses worldwide.",
      },
    ],
  },
  {
    id: 'services',
    label: 'Services',
    icon: 'fa-th-large',
    questions: [
      {
        q: 'What services do you offer?',
        a: 'We help with three things:\n🗂 Core Support — admin, ops, executive assistance\n📈 Growth Support — marketing, content, social media\n🛠 Expert Support — web design, dev, SEO, branding',
      },
      {
        q: "What's included in Core Support?",
        a: 'Executive assistance, administrative support, email & calendar management, meeting coordination, research & data entry, file management, customer support, CRM administration, project coordination, SOP documentation, and general business admin.',
      },
      {
        q: "What's included in Growth Support?",
        a: 'Social media management & content creation, graphics, content strategy & calendars, short-form video and YouTube editing, LinkedIn outreach, lead generation, and community management.',
      },
      {
        q: "What's included in Expert Support?",
        a: 'Website design & development, SEO, logo & brand identity design, advanced graphic design, advanced video/motion editing, UI/UX design, Shopify/e-commerce setup, CRM setup, workflow automation, and technical troubleshooting.',
      },
      {
        q: 'Can you handle multiple types of work at once (e.g. website + social media)?',
        a: "Yes, that's actually the point of working with a full team rather than a single freelancer. We can coordinate across Core, Growth, and Expert Support simultaneously depending on what you need.",
      },
    ],
  },
  {
    id: 'pricing',
    label: 'Pricing & Billing',
    icon: 'fa-tags',
    questions: [
      {
        q: 'How much does support cost?',
        a: 'We offer three support categories, Core, Growth, and Expert Support, each with flexible tiers starting as low as $180. Pricing depends on hours needed and the type of work.',
      },
      {
        q: 'What are your package tiers?',
        a: 'Each category (Core, Growth, Expert) offers four tiers: Lite (20 hrs), Basic (40 hrs, most popular), Standard (80 hrs), and Pro (160 hrs). Rates get lower per hour as you scale up.',
      },
      {
        q: 'How does billing work?',
        a: "Hours are purchased in blocks and are valid for 30 days from purchase. There are no hidden fees, you only pay for the hours you use.",
      },
      {
        q: 'Do you require a long-term contract?',
        a: 'No, packages are hour-based, not locked into long contracts. You can scale up, pause, or adjust based on your needs.',
      },
      {
        q: "What if I'm not sure which package I need?",
        a: "That's exactly what the discovery call is for, we'll figure out the right fit together before you commit to anything.",
      },
    ],
  },
  {
    id: 'getting-started',
    label: 'Getting Started & Trial',
    icon: 'fa-seedling',
    questions: [
      {
        q: 'How can I get started with Mustard?',
        a: 'Getting started is easy! Book a free 15-20 min discovery call so we can understand your goals and match you with the right support.',
      },
      {
        q: 'Can I try before I commit?',
        a: 'Yes! After your discovery call, our team completes a free 4-hour trial task so you can experience our quality, communication, and workflow firsthand, no commitment needed.',
      },
      {
        q: 'What happens after the trial?',
        a: "If you love the results, you select the support package that fits your business and we become an extension of your team. There's no pressure to continue if it's not the right fit.",
      },
      {
        q: 'How long does the discovery call take?',
        a: 'Just 15-20 minutes, enough time to understand your goals, answer your questions, and agree on the best trial task.',
      },
    ],
  },
  {
    id: 'working-together',
    label: 'Working Together',
    icon: 'fa-handshake',
    questions: [
      {
        q: 'How do we communicate once we start working together?',
        a: 'We keep communication clear and consistent, typically through email, chat tools, and project boards, whatever fits your existing workflow best. This gets confirmed during onboarding.',
      },
      {
        q: 'How do you handle access to my accounts/systems (email, Slack, calendar)?',
        a: "We typically set up direct access to the specific tools you want managed, rather than one blanket login, so you retain control over exactly what's shared and can revoke access anytime. This is mapped out together during onboarding.",
      },
      {
        q: 'How do you handle sensitive or confidential information?',
        a: "We take data handling seriously and can accommodate NDA agreements for sensitive engagements. Specific protocols are confirmed with our team as part of onboarding for each client's needs.",
      },
      {
        q: 'Do you work across different time zones?',
        a: 'Yes, we work with businesses worldwide and coordinate scheduling to fit your timezone during onboarding.',
      },
    ],
  },
  {
    id: 'results',
    label: 'Results & Portfolio',
    icon: 'fa-briefcase',
    questions: [
      {
        q: 'Can I see examples of your work?',
        a: 'Yes, check out our portfolio for recent projects across branding, web design, and content.',
        extraReply: { label: 'View Portfolio →', path: '/portfolio' },
      },
      {
        q: 'Do you have experience in my industry?',
        a: "We've worked across a range of industries. Happy to talk through relevant experience on your discovery call.",
      },
    ],
  },
];

const STOPWORDS = new Set([
  'a', 'an', 'the', 'is', 'are', 'am', 'was', 'were', 'be', 'been', 'do', 'does', 'did',
  'can', 'could', 'would', 'should', 'will', 'shall', 'may', 'might',
  'how', 'what', 'when', 'where', 'why', 'who', 'which',
  'i', 'we', 'you', 'your', 'my', 'me', 'us', 'our', 'it', 'its', 'they', 'their',
  'to', 'of', 'for', 'in', 'on', 'at', 'by', 'with', 'about', 'as', 'into', 'like',
  'and', 'or', 'but', 'if', 'so', 'than', 'this', 'that', 'these', 'those',
  'have', 'has', 'had', 'need', 'want', 'get', 'got', 'really', 'just',
]);

function tokenize(str) {
  return str
    .toLowerCase()
    .replace(/[^a-z0-9\s]/g, ' ')
    .split(/\s+/)
    .filter(w => w && !STOPWORDS.has(w));
}

/**
 * Very small local keyword matcher — no AI, no network call. Scores every
 * canned question by how many of the visitor's words it shares (question
 * words count double, answer words count once), and returns the best hit.
 * Returns null when nothing scores above the noise floor.
 */
export function findBestMatch(query) {
  const queryWords = tokenize(query);
  if (queryWords.length === 0) return null;

  let best = null;
  let bestScore = 0;

  CHATBOT_CATEGORIES.forEach(category => {
    category.questions.forEach(item => {
      const qWords = tokenize(item.q);
      const aWords = tokenize(item.a);
      let score = 0;
      queryWords.forEach(w => {
        if (qWords.includes(w)) score += 2;
        else if (aWords.includes(w)) score += 1;
      });
      if (score > bestScore) {
        bestScore = score;
        best = { category, item };
      }
    });
  });

  return bestScore > 0 ? best : null;
}
