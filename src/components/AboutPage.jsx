import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useFadeIn } from '../hooks/useFadeIn';
import { useSEO } from '../hooks/useSEO';

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "Who is Myron Melekson?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Myron Melekson is an Aventura community builder and a fact-first civic reporter. He serves on the board of the Greater North Miami Chamber of Commerce. He has spent 20 years building companies, teams, products, and communities. He is also Founder and CEO of Mpower, founded in 2022."
      }
    },
    {
      "@type": "Question",
      "name": "What community roles does Myron Melekson hold?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Myron Melekson serves on the Board of Directors, Greater North Miami Chamber of Commerce. He is a member of the Aventura Marketing Council / Chamber of Commerce and the Russian-Speaking American Chamber of South Florida, and a champion of the Aventura Tech Council. Hack Aventura ran in June 2026 with Aventura Charter High School. He also founded Mpower in 2022 (mpowersourcing.com and mpoweragents.ai)."
      }
    },
    {
      "@type": "Question",
      "name": "Where is Myron Melekson located?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Myron Melekson is based in Aventura, Florida (zip code 33180). He serves on the board of the Greater North Miami Chamber of Commerce and is active locally through the Aventura Marketing Council, NPI Advantage, Primetime Founders, and Pro Business Referrals."
      }
    },
    {
      "@type": "Question",
      "name": "What is Myron Melekson's background and education?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Myron Melekson holds an MBA from Technion — Israel Institute of Technology, a BS from Purdue University, and a certificate in Behavioral Economics from Yale School of Management. He has served as COO, fractional executive, and founder across multiple industries including technology, staffing, construction, and financial services."
      }
    },
    {
      "@type": "Question",
      "name": "How does Myron Melekson report on Aventura?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Aventura Watch is a brief published within 72 hours of each Aventura City Commission meeting. It covers the item, the motion, the vote by member, and links to the minutes and video. The method, including how issues are picked, how opinion is labeled, the right of reply, and the corrections log, is published at melekson.com/methodology."
      }
    },
    {
      "@type": "Question",
      "name": "How can I contact Myron Melekson?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "You can reach Myron Melekson by email at myron@melekson.com, through the contact form at melekson.com/contact, or on LinkedIn at linkedin.com/in/melekson."
      }
    }
  ]
};

export default function AboutPage() {
  const ref = useFadeIn();
  useSEO({
    title: 'About Myron Melekson — Aventura community builder',
    description: 'Myron Melekson is an Aventura community builder and civic reporter. Board of Directors, Greater North Miami Chamber of Commerce. MBA, Technion. BS, Purdue. Yale certificate in Behavioral Economics.',
    ogUrl: 'https://melekson.com/about',
  });

  useEffect(() => {
    const script = document.createElement('script');
    script.type = 'application/ld+json';
    script.id = 'faq-schema';
    script.textContent = JSON.stringify(faqSchema);
    document.head.appendChild(script);
    return () => {
      const el = document.getElementById('faq-schema');
      if (el) el.remove();
    };
  }, []);

  return (
    <section className="min-h-screen pt-32 pb-20 bg-warm-50" ref={ref}>
        <div className="max-w-3xl mx-auto px-6">
          <p className="fade-in text-sm font-medium text-warm-500 mb-3 tracking-wide uppercase">About</p>
          <h1 className="fade-in font-heading text-4xl sm:text-5xl text-warm-900 mb-8">
            Myron Melekson
          </h1>

          <div className="fade-in flex gap-6 items-start mb-12">
            <img
              src="/myron-hero-800.jpg"
              alt="Myron Melekson"
              width="112"
              height="112"
              loading="eager"
              decoding="async"
              onError={(e) => { e.currentTarget.src = '/myron-hero.png'; }}
              className="w-28 h-28 rounded-xl object-cover object-top shadow flex-shrink-0"
            />
            <p className="text-warm-600 text-lg leading-relaxed">
              Aventura community builder and civic reporter. Board of Directors, Greater North Miami Chamber of Commerce. Twenty years building companies, teams, and communities across technology, staffing, construction, and operations.
            </p>
          </div>

          <div className="space-y-10 fade-in">
            <div>
              <h2 className="font-heading text-2xl text-warm-900 mb-4">What I Do</h2>
              <div className="space-y-4 text-warm-600 leading-relaxed">
                <p>I live in Aventura and serve on the board of the Greater North Miami Chamber of Commerce. I work with founders, students, and neighbors on the civic life of this city, including a fact-first record of local government.</p>
                <p>Hack Aventura ran in June 2026 with Aventura Charter High School. Community roles are listed on the <Link to="/community" className="text-accent hover:underline">community page</Link>.</p>
                <p>Founder & CEO of Mpower (founded 2022). <a href="https://mpowersourcing.com" className="text-accent hover:underline" target="_blank" rel="noopener noreferrer">mpowersourcing.com</a> · <a href="https://mpoweragents.ai" className="text-accent hover:underline" target="_blank" rel="noopener noreferrer">mpoweragents.ai</a></p>
              </div>
            </div>

            <div>
              <h2 className="font-heading text-2xl text-warm-900 mb-4">Background</h2>
              <div className="space-y-4 text-warm-600 leading-relaxed">
                <p>My career started in enterprise technology — channel sales and partner roles at Arrow Electronics and Zebra Technologies — where I learned how big companies actually buy, sell, and scale. I grew up in Glenview, Illinois and later spent several years in Israel: an MBA at Technion — Israel Institute of Technology and co-founding Q-IT, an automated scheduling startup that raised $150K in seed funding.</p>
                <p>After returning to the US, I led growth and operations at companies across real estate, technology, and financial services.</p>
              </div>
            </div>

            <div>
              <h2 className="font-heading text-2xl text-warm-900 mb-4">Credentials</h2>
              <ul className="space-y-2 text-warm-600">
                <li className="flex items-center gap-3"><span className="w-1.5 h-1.5 rounded-full bg-accent flex-shrink-0" />MBA — Technion — Israel Institute of Technology</li>
                <li className="flex items-center gap-3"><span className="w-1.5 h-1.5 rounded-full bg-accent flex-shrink-0" />BS — Purdue University</li>
                <li className="flex items-center gap-3"><span className="w-1.5 h-1.5 rounded-full bg-accent flex-shrink-0" />Behavioral Economics Certificate — Yale School of Management</li>
                <li className="flex items-center gap-3"><span className="w-1.5 h-1.5 rounded-full bg-accent flex-shrink-0" />Board of Directors, Greater North Miami Chamber of Commerce</li>
              </ul>
            </div>

            <div>
              <h2 className="font-heading text-2xl text-warm-900 mb-4">Location</h2>
              <p className="text-warm-600">Aventura, Florida (33180) — South Florida</p>
            </div>

            <div className="border-t border-warm-200 pt-8 flex flex-col sm:flex-row gap-4">
              <a
                href="https://www.linkedin.com/in/melekson"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-accent text-warm-50 px-5 py-2.5 rounded-lg text-sm font-medium hover:bg-accent-light transition-colors"
              >
                Connect on LinkedIn
              </a>
              <a
                href="mailto:myron@melekson.com"
                className="inline-flex items-center gap-2 border border-warm-300 text-warm-700 px-5 py-2.5 rounded-lg text-sm font-medium hover:border-accent hover:text-accent transition-colors"
              >
                myron@melekson.com
              </a>
              <Link
                to="/"
                className="inline-flex items-center gap-2 text-warm-500 hover:text-accent text-sm font-medium transition-colors pt-2.5"
              >
                &larr; Back home
              </Link>
            </div>
          </div>
        </div>
      </section>
  );
}
