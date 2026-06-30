import React from 'react';
import { Link } from 'react-router-dom';
import * as Icons from 'lucide-react';
import { ArrowRight } from 'lucide-react';
import PageHeader from '../components/PageHeader';
import { serviceCategories } from '../mock';

const Icon = ({ name, ...props }) => {
  const Comp = Icons[name] || Icons.Sparkles;
  return <Comp {...props} />;
};

const ServicesListPage = () => {
  return (
    <>
      <PageHeader
        eyebrow="Comprehensive Service Portfolio"
        title="Our end-to-end technology solutions"
        italicWord="technology solutions"
        description="Six practice areas. One accountable partner. We design, deploy and operate the systems that keep modern businesses secure and growing."
        ctaPrimary={{ label: 'Talk to us', to: '/#contact' }}
        ctaSecondary={{ label: 'About Us', to: '/about' }}
      />

      <section className="relative py-20 overflow-hidden">
        <div className="orb orb-3" />
        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-10">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {serviceCategories.map((s, i) => (
              <Link
                key={s.id}
                to={`/services/${s.id}`}
                className="card-3d group glass-card border border-[#22a884]/15 rounded-sm overflow-hidden reveal"
                style={{ transitionDelay: `${i * 0.08}s` }}
              >
                <div className="relative aspect-[16/10] overflow-hidden">
                  <img
                    src={s.heroImage}
                    alt={s.label}
                    className="w-full h-full object-cover img-tint group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#1a2520]/85 via-[#1a2520]/30 to-transparent" />
                  <div className="absolute top-4 right-4 w-11 h-11 rounded-full glass-card flex items-center justify-center">
                    <Icon name={s.icon} className="w-5 h-5 text-white" />
                  </div>
                  <div className="absolute bottom-4 left-5 right-5">
                    <div className="text-[10px] tracking-[0.28em] uppercase text-[#f5af50] mb-1">{s.tagline}</div>
                    <h3 className="font-serif text-2xl text-white">{s.label}</h3>
                  </div>
                </div>
                <div className="p-7">
                  <p className="text-[13.5px] leading-[1.7] text-[#1a2520]/70 mb-5 line-clamp-4">{s.overview}</p>
                  <div className="flex flex-wrap gap-1.5 mb-6">
                    {s.items.slice(0, 4).map((it) => (
                      <span
                        key={it.title}
                        className="text-[10px] tracking-[0.18em] uppercase text-[#22a884] border border-[#22a884]/25 px-2.5 py-1 rounded-sm bg-[#22a884]/5"
                      >
                        {it.title}
                      </span>
                    ))}
                  </div>
                  <div className="inline-flex items-center gap-2 text-[11px] tracking-[0.22em] uppercase text-[#22a884] font-medium group-hover:gap-3 transition-all duration-300">
                    Explore service <ArrowRight className="w-3.5 h-3.5" />
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="relative py-24 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-[#22a884] via-[#1c8d6f] to-[#16735a]" />
        <div className="absolute inset-0 grid-lines opacity-20" />
        <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
          <h2 className="font-serif text-[clamp(2rem,4vw,3.6rem)] leading-[1.05] text-white mb-6">
            Not sure where to <span className="font-italic text-[#f5af50]">start?</span>
          </h2>
          <p className="text-[15px] text-white/85 max-w-xl mx-auto mb-9">
            Get a free assessment of your current infrastructure, security posture and transformation opportunities.
          </p>
          <Link
            to="/#contact"
            className="inline-flex items-center gap-2 px-8 py-3.5 bg-[#f5af50] text-[#1a2520] text-[12px] font-medium tracking-[0.22em] uppercase rounded-sm hover:bg-white transition-all duration-300 hover:-translate-y-0.5"
          >
            Book Free Assessment <ArrowRight className="w-3.5 h-3.5" />
          </Link>
        </div>
      </section>
    </>
  );
};

export default ServicesListPage;
