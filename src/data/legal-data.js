/* ============================================================
   MUSTARD DIGITALS - LEGAL CONTENT DATA
   Document Name: Legal Pages Content (Terms, Privacy, Cookies)
   Version: v1.0
   Last Updated: 09 Sep 2026
   Prepared By: Sergette Angela Napoles (Wibiz)

   Plain-language legal content for the website, structured as data
   so the pages stay easy to edit. Covers PH Data Privacy Act
   (RA 10173), EU GDPR, and general US/AU expectations, scoped to a
   small digital agency that collects contact-form and chatbot input.

   IMPORTANT: This is a professional template, not legal advice.
   Have a qualified lawyer review before publishing, and update the
   COMPANY block below with the real registered details.

   Changelog
   Version  Date         Author                Changes
   v1.0     09 Sep 2026  Sergette A. Napoles    Initial release
   ============================================================ */

/* ---- Single source of truth for company details ----
   Edit these once and they flow into all three documents. */
export const COMPANY = {
  name: 'Mustard Digitals',
  legalName: 'Mustard Digitals', // replace with registered business name if different
  country: 'the Philippines',
  email: 'hello@mustarddigitals.com',
  phone: '+63 9949674922',
  website: 'https://mustarddigitals.com',
  address: '', // optional: add registered business address if you want it on record
  effectiveDate: '09 September 2026',
};

/* ============================================================
   TERMS OF SERVICE
   ============================================================ */
export const TERMS = {
  slug: 'terms',
  title: 'Terms of Service',
  intro:
    `Welcome to ${COMPANY.name}. These Terms of Service ("Terms") govern your use of our website and the services we provide. By accessing our website or engaging our services, you agree to these Terms. Please read them carefully.`,
  sections: [
    {
      heading: '1. Who We Are',
      body: [
        `${COMPANY.name} ("we", "us", or "our") is a digital solutions team based in ${COMPANY.country}, providing services that include web design and development, branding and creative design, video editing and production, administrative and virtual support, and related digital solutions.`,
        `You can reach us at ${COMPANY.email}.`,
      ],
    },
    {
      heading: '2. Use of Our Website',
      body: [
        'You may use our website for lawful purposes only. You agree not to use it in any way that could damage, disable, or impair the site, or interfere with anyone else\u2019s use of it.',
        'You agree not to attempt to gain unauthorized access to any part of the website, the server it runs on, or any connected database or system.',
      ],
    },
    {
      heading: '3. Services and Quotes',
      body: [
        'Descriptions of our services on the website are for general information. The specific scope, deliverables, timeline, and pricing for any engagement will be set out separately in a proposal, quote, or written agreement between you and us.',
        'Any free trial we offer is provided at our discretion, subject to the terms described at the time of the offer. A free trial does not create an obligation for either party to enter into a paid engagement.',
      ],
    },
    {
      heading: '4. Intellectual Property',
      body: [
        'All content on this website \u2014 including text, graphics, logos, images, and portfolio work \u2014 is owned by or licensed to us and is protected by intellectual property laws. You may not copy, reproduce, or reuse it without our written permission.',
        'Ownership of work we create for a client is governed by the specific agreement for that engagement. Unless otherwise agreed in writing, final deliverables transfer to the client upon full payment.',
        'Portfolio and case study work shown on this site is displayed with the understanding that we may reference completed work for promotional purposes. If you are a client and prefer we not feature your project, let us know.',
      ],
    },
    {
      heading: '5. Payment',
      body: [
        'Payment terms for paid services are set out in the applicable proposal or agreement. Unless stated otherwise, invoices are due within the period specified on the invoice.',
        'Late or missed payments may result in paused work or suspended deliverables until the account is settled.',
      ],
    },
    {
      heading: '6. Third-Party Links and Tools',
      body: [
        'Our website and services may reference or integrate third-party tools and platforms (for example, scheduling, hosting, or analytics services). We are not responsible for the content, policies, or practices of third parties. Your use of those services is governed by their own terms.',
      ],
    },
    {
      heading: '7. Disclaimer',
      body: [
        'Our website and its content are provided "as is" and "as available" without warranties of any kind, whether express or implied. While we work hard to deliver excellent results, we do not warrant that the website will be uninterrupted, error-free, or free of harmful components.',
        'Any results, figures, or outcomes shown in case studies reflect specific client situations and are not a guarantee of similar results for others.',
      ],
    },
    {
      heading: '8. Limitation of Liability',
      body: [
        'To the fullest extent permitted by law, we will not be liable for any indirect, incidental, or consequential damages arising from your use of our website. Our total liability for any claim relating to our services is limited to the amount you paid us for the specific service giving rise to the claim.',
        'Nothing in these Terms excludes liability that cannot be excluded under applicable law.',
      ],
    },
    {
      heading: '9. Changes to These Terms',
      body: [
        'We may update these Terms from time to time. The current version will always be posted on this page with its effective date. Continued use of our website after changes take effect means you accept the revised Terms.',
      ],
    },
    {
      heading: '10. Governing Law',
      body: [
        `These Terms are governed by the laws of ${COMPANY.country}, without regard to conflict-of-law principles. Any dispute relating to these Terms or our services will be handled in the appropriate courts of ${COMPANY.country}, unless a separate written agreement states otherwise.`,
      ],
    },
    {
      heading: '11. Contact',
      body: [
        `If you have questions about these Terms, contact us at ${COMPANY.email}.`,
      ],
    },
  ],
};

/* ============================================================
   PRIVACY POLICY
   ============================================================ */
export const PRIVACY = {
  slug: 'privacy',
  title: 'Privacy Policy',
  intro:
    `${COMPANY.name} ("we", "us", or "our") respects your privacy and is committed to protecting the personal information you share with us. This Privacy Policy explains what we collect, why, how we use it, and the rights you have. It is written to align with the Philippines Data Privacy Act of 2012 (RA 10173), the EU General Data Protection Regulation (GDPR), and comparable expectations for visitors in the US and Australia.`,
  sections: [
    {
      heading: '1. Information We Collect',
      body: [
        'We keep data collection to a minimum. We only collect what you choose to give us or what is needed for the website to function.',
      ],
      list: [
        'Contact form details: your name, email address, and any message you send us through the contact form.',
        'Chatbot input: any information you type into our on-site chat assistant. We recommend you do not enter sensitive personal information into the chat.',
        'Basic technical data: standard information your browser sends automatically, such as general device and browser type, used to keep the site secure and working properly.',
      ],
    },
    {
      heading: '2. How We Use Your Information',
      body: ['We use the information we collect only for clear, limited purposes:'],
      list: [
        'To respond to your enquiries and messages.',
        'To provide, quote, and coordinate the services you ask about.',
        'To improve our website and the experience of using it.',
        'To keep our website and systems secure.',
      ],
    },
    {
      heading: '3. Legal Basis for Processing',
      body: [
        'Where GDPR applies (for visitors in the EU/EEA), we process your personal data on the basis of your consent (which you give by submitting a form or using the chat), and our legitimate interest in responding to enquiries and running our business. Where the Philippines Data Privacy Act applies, we process data based on your consent and for the legitimate purposes described above.',
      ],
    },
    {
      heading: '4. How We Store and Protect Your Data',
      body: [
        'We apply reasonable organizational and technical measures to protect your information against loss, misuse, and unauthorized access. Contact enquiries are typically received by email and handled by our team.',
        'The chatbot on our site is rule-based and runs in your browser. It provides preset answers to common questions and does not require you to submit personal information to work.',
        'We keep personal information only as long as needed for the purpose it was collected, or as required by law, after which it is deleted or anonymized.',
      ],
    },
    {
      heading: '5. Sharing Your Information',
      body: [
        'We do not sell your personal information. We do not share it with third parties except:',
      ],
      list: [
        'With trusted service providers who help us operate (for example, email or hosting providers), only to the extent needed and under confidentiality obligations.',
        'When required by law, regulation, or valid legal process.',
        'To protect our rights, safety, or property, or that of others.',
      ],
    },
    {
      heading: '6. International Transfers',
      body: [
        'Because we work with clients and tools across different countries, your information may be processed outside your home country, including outside the EU/EEA or the Philippines. Where this happens, we take steps to ensure your data continues to receive an appropriate level of protection.',
      ],
    },
    {
      heading: '7. Your Rights',
      body: [
        'Depending on where you live, you have rights over your personal data. These generally include:',
      ],
      list: [
        'The right to access the personal data we hold about you.',
        'The right to correct inaccurate or incomplete data.',
        'The right to ask us to delete your data.',
        'The right to object to or restrict certain processing.',
        'The right to withdraw consent at any time.',
        'For EU/EEA visitors under GDPR: the right to data portability and to lodge a complaint with your local supervisory authority.',
        'For Philippine data subjects under RA 10173: the rights to be informed, to object, to access, to correct, to erasure or blocking, to damages, and to data portability.',
      ],
      after: [
        `To exercise any of these rights, contact us at ${COMPANY.email}. We will respond within the timeframe required by applicable law.`,
      ],
    },
    {
      heading: '8. Cookies',
      body: [
        'Our website may use cookies and similar technologies. For details on what we use and how to control them, please see our Cookie Notice.',
      ],
    },
    {
      heading: '9. Children\u2019s Privacy',
      body: [
        'Our website and services are intended for businesses and adults. We do not knowingly collect personal information from children. If you believe a child has provided us information, contact us and we will delete it.',
      ],
    },
    {
      heading: '10. Changes to This Policy',
      body: [
        'We may update this Privacy Policy from time to time. The current version will always be posted here with its effective date. We encourage you to review it periodically.',
      ],
    },
    {
      heading: '11. Contact Us',
      body: [
        `If you have questions about this Privacy Policy or how we handle your data, contact us at ${COMPANY.email}.`,
      ],
    },
  ],
};

/* ============================================================
   COOKIE NOTICE
   ============================================================ */
export const COOKIES = {
  slug: 'cookies',
  title: 'Cookie Notice',
  intro:
    `This Cookie Notice explains how ${COMPANY.name} uses cookies and similar technologies on our website, and how you can manage them.`,
  sections: [
    {
      heading: '1. What Are Cookies?',
      body: [
        'Cookies are small text files placed on your device when you visit a website. They help websites work properly, remember your preferences, and understand how the site is used.',
      ],
    },
    {
      heading: '2. How We Use Cookies',
      body: [
        'We aim to keep cookie use minimal. The cookies our site may use fall into these categories:',
      ],
      list: [
        'Essential cookies: needed for the website to function properly, such as remembering your theme (light or dark) preference. These cannot be switched off.',
        'Analytics cookies (if enabled): help us understand how visitors use the site so we can improve it. These are only set with your consent where required.',
      ],
    },
    {
      heading: '3. Third-Party Cookies',
      body: [
        'Some features may rely on third-party services (for example, embedded videos or scheduling tools). These providers may set their own cookies, governed by their own privacy and cookie policies. We recommend reviewing those policies for details.',
      ],
    },
    {
      heading: '4. Managing Cookies',
      body: [
        'You can control and delete cookies through your browser settings. Most browsers let you refuse or remove cookies, though some parts of the site may not work as intended if you disable essential ones.',
        'For more on how to manage cookies, check the help section of your specific browser.',
      ],
    },
    {
      heading: '5. Changes to This Notice',
      body: [
        'We may update this Cookie Notice as our use of cookies evolves. The current version will always be posted here with its effective date.',
      ],
    },
    {
      heading: '6. Contact',
      body: [
        `If you have questions about our use of cookies, contact us at ${COMPANY.email}.`,
      ],
    },
  ],
};

export const LEGAL_DOCS = { TERMS, PRIVACY, COOKIES };
