import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { useFadeIn } from '../hooks/useFadeIn';

export default function AboutPage() {
  const ref = useFadeIn();

  return (
    <>
      <Helmet>
        <title>About Myron Melekson — Founder, Builder, South Florida</title>
        <meta name="description" content="Myron Melekson is a founder, operator, and community leader based in Aventura, Florida. CEO of Mpower Sourcing and Mpower Agents. 20 years building companies, teams, and communities." />
        <link rel="canonical" href="https://melekson.com/about" />
        <meta property="og:title" content="About Myron Melekson" />
        <meta property="og:description" content="Founder, operator, and community leader based in Aventura, FL. CEO of Mpower Sourcing and Mpower Agents." />
        <meta property="og:url" content="https://melekson.com/about" />
        <meta property="og:image" content="https://melekson.com/myron-hero.png" />
        <script type="application/ld+json">{JSON.stringify({
          "@context": "https://schema.org",
          "@type": "FAQPage",
          "mainEntity": [
            {
              "@type": "Question",
              "name": "Who is Myron Melekson?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "Myron Melekson is a founder, operator, and community leader based in Aventura, Florida (zip code 33180). He is the CEO and founder of Mpower Sourcing, an AI-enhanced staffing and managed services company, and Mpower Agents, an AI automation platform. He has 20 years of experience building companies, teams, and products across staffing, technology, construction, and operations."
              }
            },
            {
              "@type": "Question",
              "name": "What companies has Myron Melekson founded?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "Myron Melekson founded Mpower Sourcing (mpowersourcing.com), an AI-enhanced staffing and managed services company; Mpower Agents (mpoweragents.ai), an AI automation and virtual assistant platform; and Q-IT, an automated scheduling startup co-founded in Israel that raised $150K in seed funding. He also founded Magen Builder Group, a South Florida construction company."
              }
            },
            {
              "@type": "Question",
              "name": "Where is Myron Melekson located?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "Myron Melekson is based in Aventura, Florida (zip code 33180), in the South Florida area. He is active in the local business and tech community through the Aventura Marketing Council, NPI Advantage, Primetime Founders, and Pro Business Referrals."
              }
            },
            {
              "@type": "Question",
              "name": "What is Myron Melekson's background and education?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "Myron Melekson holds an MBA from Technion Tel Aviv, a BS from Purdue University, and a certificate in Behavioral Economics from Yale School of Management. He has served as COO, fractional executive, and founder across multiple industries including technology, staffing, construction, and financial services."
              }
            },
            {
              "@type": "Question",
              "name": "What services does Myron Melekson offer?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "Through Mpower Sourcing, Myron offers AI-enhanced staffing, offshore talent placement, managed services, and operational consulting. Through Mpower Agents, he offers AI automation, agentic workflows, and virtual assistant services. He also takes select fractional COO and consulting engagements with growing businesses."
              }
            },
            {
              "@type": "Question",
              "name": "How can I contact Myron Melekson?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "You can reach Myron Melekson via LinkedIn at linkedin.com/in/melekson, by email at myron@melekson.com, or by booking a call at mpowersourcing.com."
              }
            }
          ]
        })}</script>
      </Helmet>

      <section className="min-h-screen pt-32 pb-20 bg-warm-50" ref={ref}>
        <div className="max-w-3xl mx-auto px-6">
          <p className="fade-in text-sm font-medium text-warm-500 mb-3 tracking-wide uppercase">About</p>
          <h1 className="fade-in font-heading text-4xl sm:text-5xl text-warm-900 mb-8">
            Myron Melekson
          </h1>

          <div className="fade-in flex gap-6 items-start mb-12">
            <img
              src="/myron-hero.png"
              alt="Myron Melekson"
              className="w-28 h-28 rounded-xl object-cover object-top shadow flex-shrink-0"
            />
            <p className="text-warm-600 text-lg leading-relaxed">
              Founder, operator, and community leader based in Aventura, Florida. CEO of Mpower Sourcing and Mpower Agents. 20 years building companies, teams, and communities across technology, staffing, construction, and operations.
            </p>
          </div>

          <div className="space-y-10 fade-in">
            <div>
              <h2 className="font-heading text-2xl text-warm-900 mb-4">What I Do</h2>
              <div className="space-y-4 text-warm-600 leading-relaxed">
                <p>I run <a href="https://mpowersourcing.com" className="text-accent hover:underline" target="_blank" rel="noopener noreferrer">Mpower Sourcing</a> — an AI-enhanced staffing and managed services company based in South Florida. We place skilled offshore professionals, trained on AI tools, to help growing businesses scale their operations at a fraction of the cost of traditional hiring.</p>
                <p>I also built <a href="https://mpoweragents.ai" className="text-accent hover:underline" target="_blank" rel="noopener noreferrer">Mpower Agents</a> — the AI automation arm of the Mpower ecosystem. Virtual assistants, agentic workflows, and automation for business operations.</p>
                <p>Beyond the businesses, I'm actively building a civic tech ecosystem in Aventura — connecting founders, students, and local leaders around technology and innovation. This includes Hack Aventura, two back-to-back student hackathons at Don Sofer High School in May 2026.</p>
              </div>
            </div>

            <div>
              <h2 className="font-heading text-2xl text-warm-900 mb-4">Background</h2>
              <div className="space-y-4 text-warm-600 leading-relaxed">
                <p>I grew up in Glenview, Illinois and spent several years in Israel — including an MBA at Technion Tel Aviv and co-founding Q-IT, an automated scheduling startup that raised $150K in seed funding.</p>
                <p>After returning to the US, I led growth and operations at multiple companies across real estate, technology, and financial services before founding Mpower Sourcing to solve the problem I kept running into: businesses need great people and great systems, not just one or the other.</p>
              </div>
            </div>

            <div>
              <h2 className="font-heading text-2xl text-warm-900 mb-4">Credentials</h2>
              <ul className="space-y-2 text-warm-600">
                <li className="flex items-center gap-3"><span className="w-1.5 h-1.5 rounded-full bg-accent flex-shrink-0" />MBA — Technion Tel Aviv</li>
                <li className="flex items-center gap-3"><span className="w-1.5 h-1.5 rounded-full bg-accent flex-shrink-0" />BS — Purdue University</li>
                <li className="flex items-center gap-3"><span className="w-1.5 h-1.5 rounded-full bg-accent flex-shrink-0" />Behavioral Economics Certificate — Yale School of Management</li>
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
    </>
  );
}
