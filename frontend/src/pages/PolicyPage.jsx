import React from 'react';
import { Link, useParams, Navigate } from 'react-router-dom';
import { ArrowRight, ArrowLeft, Calendar, Shield, Mail } from 'lucide-react';
import { policies, images } from '../mock';

const iconMap = {
  privacy: Shield,
  terms: Calendar,
  security: Shield,
  cookies: Calendar,
};

const bgImage = {
  privacy: images.abstract1,
  terms: images.abstract2,
  security: images.abstract1,
  cookies: images.abstract2,
};

const PolicyPage = ({ slug: forcedSlug }) => {
  const params = useParams();
  const slug = forcedSlug || params.slug;
  const policy = policies[slug];
  if (!policy) return <Navigate to="/" replace />;

  const HeroIcon = iconMap[slug] || Shield;
  const policyOrder = ['privacy', 'terms', 'security', 'cookies'];
  const others = policyOrder.filter((p) => p !== slug);
  const policyRoutes = { privacy: '/privacy', terms: '/terms', security: '/security', cookies: '/cookies' };

  return (
    <>
      {/* Hero */}
      <section className="relative pt-40 pb-20 smooth-bg overflow-hidden">
        <div className="orb orb-1" />
        <div className="orb orb-2" />
        <div className="grid-lines" />

        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-10">
          <Link
            to="/"
            className="inline-flex items-center gap-2 mb-10 text-[11px] tracking-[0.22em] uppercase text-[#22a884] hover:text-[#1c8d6f] transition"
          >
            <ArrowLeft className="w-3.5 h-3.5" /> Back home
          </Link>
          <div className="grid lg:grid-cols-[1.4fr_1fr] gap-12 items-center">
            <div className="reveal in-view">
              <div className="inline-flex items-center gap-3 px-4 py-2 mb-8 rounded-sm border border-[#22a884]/30 bg-white/40 backdrop-blur-sm">
                <HeroIcon className="w-4 h-4 text-[#22a884]" />
                <span className="text-[11px] tracking-[0.25em] uppercase text-[#22a884] font-medium">
                  {policy.eyebrow}
                </span>
              </div>
              <h1 className="font-serif text-[clamp(2.4rem,5.5vw,5rem)] leading-[1.02] text-[#1a2520] mb-6">
                {policy.title.split(' ').map((w, i) => (
                  <span key={i}>
                    {i === policy.title.split(' ').length - 1 ? (
                      <span className="font-italic text-gradient-teal">{w}</span>
                    ) : (
                      <>{w} </>
                    )}
                  </span>
                ))}
              </h1>
              <div className="text-[11px] tracking-[0.28em] uppercase text-[#1a2520]/55">{policy.updated}</div>
            </div>
            <div className="relative tilt-on-hover reveal in-view reveal-delay-2 hidden lg:block">
              <div className="relative rounded-sm overflow-hidden shadow-2xl shadow-[#22a884]/15 aspect-square border border-[#22a884]/20">
                <img src={bgImage[slug]} alt="" className="w-full h-full object-cover img-tint" />
                <div className="absolute inset-0 bg-gradient-to-br from-[#22a884]/40 via-transparent to-[#16735a]/60" />
                <div className="absolute inset-0 flex items-center justify-center">
                  <HeroIcon className="w-24 h-24 text-white/70" strokeWidth={1} />
                </div>
              </div>
              <div className="absolute -bottom-4 -right-4 w-32 h-32 border border-[#22a884]/30 rounded-sm -z-10" />
            </div>
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="relative py-20 overflow-hidden">
        <div className="relative z-10 max-w-4xl mx-auto px-6 lg:px-10">
          {/* Mini TOC */}
          <div className="glass-card border border-[#22a884]/15 rounded-sm p-6 mb-12 reveal">
            <div className="text-[10px] tracking-[0.3em] uppercase text-[#22a884] font-medium mb-4">
              On this page
            </div>
            <div className="grid sm:grid-cols-2 gap-1">
              {policy.sections.map((s, i) => (
                <a
                  key={s.heading}
                  href={`#section-${i}`}
                  className="py-1.5 px-2 text-[13px] text-[#1a2520]/75 hover:text-[#22a884] hover:bg-[#22a884]/5 rounded-sm transition-all"
                >
                  {String(i + 1).padStart(2, '0')}. {s.heading}
                </a>
              ))}
            </div>
          </div>

          {/* Sections */}
          <div className="space-y-10">
            {policy.sections.map((s, i) => (
              <div key={s.heading} id={`section-${i}`} className="reveal scroll-mt-32">
                <div className="flex items-baseline gap-4 mb-4">
                  <span className="font-italic font-serif text-2xl text-gradient-orange">
                    {String(i + 1).padStart(2, '0')}
                  </span>
                  <h2 className="font-serif text-2xl md:text-3xl text-[#1a2520]">{s.heading}</h2>
                </div>
                <p className="text-[14.5px] leading-[1.85] text-[#1a2520]/75 pl-10 border-l border-[#22a884]/20">
                  {s.body}
                </p>
              </div>
            ))}
          </div>

          {/* Contact box */}
          <div className="mt-16 p-8 glass-card border border-[#22a884]/15 rounded-sm flex flex-col md:flex-row items-start md:items-center justify-between gap-6 reveal">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-md bg-gradient-to-br from-[#22a884] to-[#1c8d6f] flex items-center justify-center flex-shrink-0">
                <Mail className="w-5 h-5 text-white" />
              </div>
              <div>
                <h4 className="font-serif text-xl text-[#1a2520] mb-1">Questions?</h4>
                <p className="text-[13.5px] text-[#1a2520]/70">
                  Reach out at <a href="mailto:info@ingrowlogy.com" className="text-[#22a884] font-medium">info@ingrowlogy.com</a>
                </p>
              </div>
            </div>
            <Link
              to="/#contact"
              className="inline-flex items-center gap-2 px-6 py-3 bg-[#22a884] text-white text-[12px] font-medium tracking-[0.22em] uppercase rounded-sm hover:bg-[#1c8d6f] transition-all duration-300 hover:-translate-y-0.5"
            >
              Contact Us <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>
        </div>
      </section>

      {/* Related policies */}
      <section className="relative py-20 bg-gradient-to-b from-[#e6f1e9] to-[#eef6f0] overflow-hidden">
        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-10">
          <div className="text-center mb-10 reveal">
            <div className="flex items-center justify-center gap-3 mb-6">
              <div className="section-line" />
              <span className="text-[11px] tracking-[0.3em] uppercase text-[#22a884] font-medium">Related Policies</span>
              <div className="section-line rotate-180" />
            </div>
          </div>
          <div className="grid sm:grid-cols-3 gap-5">
            {others.map((o) => (
              <Link
                key={o}
                to={policyRoutes[o]}
                className="card-3d group bg-white/65 backdrop-blur-sm border border-[#22a884]/15 p-7 rounded-sm"
              >
                <div className="w-11 h-11 rounded-md bg-gradient-to-br from-[#22a884]/15 to-[#22a884]/5 flex items-center justify-center mb-4 group-hover:from-[#22a884] group-hover:to-[#1c8d6f] transition-all duration-500">
                  {(() => {
                    const Ic = iconMap[o];
                    return <Ic className="w-5 h-5 text-[#22a884] group-hover:text-white transition-colors duration-500" />;
                  })()}
                </div>
                <h4 className="font-serif text-xl text-[#1a2520] mb-1 group-hover:text-[#22a884] transition">
                  {policies[o].title}
                </h4>
                <div className="text-[11px] tracking-[0.22em] uppercase text-[#1a2520]/55 mb-4">
                  {policies[o].eyebrow}
                </div>
                <div className="inline-flex items-center gap-2 text-[11px] tracking-[0.22em] uppercase text-[#22a884]">
                  Read <ArrowRight className="w-3.5 h-3.5" />
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default PolicyPage;
