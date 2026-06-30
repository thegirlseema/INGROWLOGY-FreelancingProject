import React from 'react';
import { Link } from 'react-router-dom';
import { Zap, Mail, Phone, MapPin, Linkedin, Twitter, Facebook, ArrowRight } from 'lucide-react';
import { serviceCategories, partners, offices } from '../mock';

const Footer = () => {
  return (
    <footer className="relative pt-20 pb-8 bg-gradient-to-b from-[#eef6f0] to-[#dde9e0] border-t border-[#22a884]/15">
      <div className="absolute inset-0 grid-lines opacity-30 pointer-events-none" />
      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-10">
        {/* Offices row */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 pb-10 mb-10 border-b border-[#22a884]/15">
          {offices.map((o, i) => (
            <div
              key={o.name}
              className="bg-white/55 backdrop-blur-sm border border-[#22a884]/15 p-5 rounded-sm hover:border-[#22a884]/35 transition-all duration-500"
            >
              <div className="flex items-center gap-2.5 mb-3">
                <span
                  className="w-2.5 h-2.5 rounded-full"
                  style={{ background: o.flagColor }}
                />
                <span className="text-[10px] tracking-[0.28em] uppercase text-[#22a884] font-medium">
                  {o.country}
                </span>
              </div>
              <div className="font-semibold text-[#1a2520] text-[13.5px] mb-1.5 leading-snug">
                {o.name}
              </div>
              <div className="text-[12px] text-[#1a2520]/65 leading-[1.6]">
                {o.address}
                <br />
                {o.region}
              </div>
            </div>
          ))}
        </div>

        <div className="grid lg:grid-cols-12 gap-10 pb-12 border-b border-[#22a884]/15">
          {/* Brand */}
          <div className="lg:col-span-4">
            <Link to="/" className="flex items-center gap-2 mb-5">
              <div className="w-9 h-9 rounded-md bg-gradient-to-br from-[#f5af50] to-[#e8902a] flex items-center justify-center shadow-md">
                <Zap className="w-5 h-5 text-white" strokeWidth={2.5} />
              </div>
              <span className="text-[#22a884] font-semibold tracking-[0.18em] text-sm">INGROWLOGY</span>
            </Link>
            <p className="text-[13px] leading-[1.7] text-[#1a2520]/70 max-w-sm">
              Ingrowlogy Private Limited — a trusted partner in cybersecurity, cloud,
              network infrastructure and DevSecOps for Indian enterprises.
            </p>
            <div className="mt-6 space-y-3 text-[12.5px] text-[#1a2520]/75">
              <div className="flex items-center gap-3">
                <Mail className="w-3.5 h-3.5 text-[#22a884]" />
                <span>info@ingrowlogy.com</span>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="w-3.5 h-3.5 text-[#22a884]" />
                <span>+91 987 111 5677</span>
              </div>
              <div className="flex items-center gap-3">
                <MapPin className="w-3.5 h-3.5 text-[#22a884]" />
                <span>India</span>
              </div>
            </div>
            <div className="flex gap-3 mt-6">
              {[Linkedin, Twitter, Facebook].map((Ic, i) => (
                <a
                  key={i}
                  href="#"
                  className="w-9 h-9 rounded-md border border-[#22a884]/25 flex items-center justify-center text-[#22a884] hover:bg-[#22a884] hover:text-white hover:border-[#22a884] transition-all duration-300"
                >
                  <Ic className="w-4 h-4" />
                </a>
              ))}
            </div>
          </div>

          {/* Services */}
          <div className="lg:col-span-3">
            <div className="text-[10px] tracking-[0.3em] uppercase text-[#22a884] font-medium mb-4">Services</div>
            <ul className="space-y-2.5">
              {serviceCategories.slice(0, 6).map((s) => (
                <li key={s.id}>
                  <Link
                    to={`/services/${s.id}`}
                    className="text-[13px] text-[#1a2520]/75 hover:text-[#22a884] transition-colors duration-300"
                  >
                    {s.label}
                  </Link>
                </li>
              ))}
              <li>
                <Link to="/services" className="text-[12px] text-[#22a884] hover:text-[#1c8d6f] font-medium inline-flex items-center gap-1">
                  All Services <ArrowRight className="w-3 h-3" />
                </Link>
              </li>
            </ul>
          </div>

          {/* Partners */}
          <div className="lg:col-span-3">
            <div className="text-[10px] tracking-[0.3em] uppercase text-[#22a884] font-medium mb-4">Partners</div>
            <ul className="space-y-2.5">
              {partners.slice(0, 6).map((p) => (
                <li key={p.id}>
                  <Link
                    to={`/partners/${p.id}`}
                    className="text-[13px] text-[#1a2520]/75 hover:text-[#22a884] transition-colors duration-300"
                  >
                    {p.name}
                  </Link>
                </li>
              ))}
              <li>
                <Link to="/partners" className="text-[12px] text-[#22a884] hover:text-[#1c8d6f] font-medium inline-flex items-center gap-1">
                  All Partners <ArrowRight className="w-3 h-3" />
                </Link>
              </li>
            </ul>
          </div>

          {/* Company */}
          <div className="lg:col-span-2">
            <div className="text-[10px] tracking-[0.3em] uppercase text-[#22a884] font-medium mb-4">Company</div>
            <ul className="space-y-2.5">
              {[
                { label: 'About', to: '/about' },
                { label: 'Contact', to: '/#contact' },
                { label: 'Privacy', to: '/privacy' },
                { label: 'Terms', to: '/terms' },
                { label: 'Security', to: '/security' },
                { label: 'Cookies', to: '/cookies' },
              ].map((l) => (
                <li key={l.label}>
                  <Link
                    to={l.to}
                    className="text-[13px] text-[#1a2520]/75 hover:text-[#22a884] transition-colors duration-300"
                  >
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="text-[11px] tracking-[0.22em] uppercase text-[#1a2520]/55">
            © 2025 Ingrowlogy Private Limited — All rights reserved
          </div>
          <div className="flex flex-wrap gap-5 text-[11px] tracking-[0.22em] uppercase text-[#1a2520]/55">
            <Link to="/privacy" className="hover:text-[#22a884] transition">Privacy Policy</Link>
            <Link to="/terms" className="hover:text-[#22a884] transition">Terms of Service</Link>
            <Link to="/security" className="hover:text-[#22a884] transition">Security</Link>
            <Link to="/cookies" className="hover:text-[#22a884] transition">Cookies</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
