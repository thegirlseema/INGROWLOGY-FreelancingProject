import React, { useState, useEffect } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import { Menu, X, Zap, ChevronDown, ArrowRight } from 'lucide-react';
import { navLinks, serviceCategories, partners } from '../mock';

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [openDropdown, setOpenDropdown] = useState(null);
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    setOpen(false);
    setOpenDropdown(null);
  }, [location.pathname]);

  const isActive = (to) => {
    if (to === '/') return location.pathname === '/';
    return location.pathname.startsWith(to);
  };

  const onHome = location.pathname === '/';

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled || !onHome
          ? 'bg-white/75 backdrop-blur-xl shadow-[0_2px_30px_rgba(34,168,132,0.08)] py-3'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-10 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-2 group">
          <div className="w-9 h-9 rounded-md bg-gradient-to-br from-[#f5af50] to-[#e8902a] flex items-center justify-center shadow-md group-hover:scale-110 transition-transform duration-500">
            <Zap className="w-5 h-5 text-white" strokeWidth={2.5} />
          </div>
          <span className="text-[#22a884] font-semibold tracking-[0.18em] text-sm">INGROWLOGY</span>
        </Link>

        <ul className="hidden lg:flex items-center gap-9">
          {navLinks.map((link) => (
            <li
              key={link.label}
              className="relative"
              onMouseEnter={() => link.dropdown && setOpenDropdown(link.dropdown)}
              onMouseLeave={() => setOpenDropdown(null)}
            >
              {link.dropdown ? (
                <button
                  className={`flex items-center gap-1.5 text-[12px] tracking-[0.18em] uppercase transition-colors duration-300 ${
                    isActive(link.to) ? 'text-[#22a884]' : 'text-[#1a2520] hover:text-[#22a884]'
                  }`}
                >
                  {link.label}
                  <ChevronDown className="w-3 h-3" />
                </button>
              ) : (
                <NavLink
                  to={link.to}
                  className={({ isActive: a }) =>
                    `text-[12px] tracking-[0.18em] uppercase transition-colors duration-300 relative group ${
                      a ? 'text-[#22a884]' : 'text-[#1a2520] hover:text-[#22a884]'
                    }`
                  }
                >
                  {link.label}
                  <span className="absolute -bottom-1 left-0 w-0 h-[2px] bg-[#22a884] group-hover:w-full transition-all duration-300" />
                </NavLink>
              )}

              {link.dropdown === 'services' && openDropdown === 'services' && (
                <div className="absolute top-full left-1/2 -translate-x-1/2 pt-4 w-[640px]">
                  <div className="glass-card rounded-md border border-[#22a884]/15 shadow-2xl shadow-[#22a884]/15 p-6 grid grid-cols-2 gap-2">
                    {serviceCategories.map((s) => (
                      <Link
                        key={s.id}
                        to={`/services/${s.id}`}
                        className="flex items-start gap-3 p-3 rounded-sm hover:bg-[#22a884]/8 transition-all duration-300 group"
                      >
                        <div className="w-10 h-10 rounded-md bg-gradient-to-br from-[#22a884]/15 to-[#22a884]/5 flex items-center justify-center group-hover:from-[#22a884] group-hover:to-[#1c8d6f] transition-all duration-300">
                          <DynamicIcon name={s.icon} className="w-4 h-4 text-[#22a884] group-hover:text-white transition-colors duration-300" />
                        </div>
                        <div className="flex-1">
                          <div className="font-semibold text-[#1a2520] text-[13px] group-hover:text-[#22a884] transition-colors">{s.label}</div>
                          <div className="text-[11px] text-[#1a2520]/55 mt-0.5">{s.tagline}</div>
                        </div>
                      </Link>
                    ))}
                    <Link
                      to="/services"
                      className="col-span-2 mt-3 pt-3 border-t border-[#22a884]/15 text-[11px] tracking-[0.22em] uppercase text-[#22a884] hover:text-[#1c8d6f] flex items-center gap-2"
                    >
                      View all services <ArrowRight className="w-3.5 h-3.5" />
                    </Link>
                  </div>
                </div>
              )}

              {link.dropdown === 'partners' && openDropdown === 'partners' && (
                <div className="absolute top-full left-1/2 -translate-x-1/2 pt-4 w-[420px]">
                  <div className="glass-card rounded-md border border-[#22a884]/15 shadow-2xl shadow-[#22a884]/15 p-5 grid grid-cols-2 gap-1.5">
                    {partners.map((p) => (
                      <Link
                        key={p.id}
                        to={`/partners/${p.id}`}
                        className="px-3 py-2.5 rounded-sm hover:bg-[#22a884]/8 transition-all duration-300 group"
                      >
                        <div className="font-italic font-serif text-lg text-[#1a2520] group-hover:text-[#22a884] transition-colors">{p.name}</div>
                        <div className="text-[10px] tracking-[0.2em] uppercase text-[#1a2520]/55">{p.role}</div>
                      </Link>
                    ))}
                    <Link
                      to="/partners"
                      className="col-span-2 mt-2 pt-3 border-t border-[#22a884]/15 text-[11px] tracking-[0.22em] uppercase text-[#22a884] hover:text-[#1c8d6f] flex items-center gap-2"
                    >
                      View all partners <ArrowRight className="w-3.5 h-3.5" />
                    </Link>
                  </div>
                </div>
              )}
            </li>
          ))}
        </ul>

        <Link
          to="/#contact"
          className="hidden lg:inline-flex items-center gap-2 px-6 py-2.5 bg-[#22a884] text-white text-[12px] font-medium tracking-[0.2em] uppercase rounded-sm hover:bg-[#1c8d6f] transition-all duration-300 hover:shadow-lg hover:shadow-[#22a884]/30 hover:-translate-y-0.5"
        >
          Talk to us
        </Link>

        <button
          onClick={() => setOpen(!open)}
          className="lg:hidden text-[#1a2520]"
          aria-label="Toggle menu"
        >
          {open ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {open && (
        <div className="lg:hidden absolute top-full left-0 right-0 bg-white/95 backdrop-blur-xl border-t border-[#22a884]/10 shadow-lg max-h-[80vh] overflow-y-auto">
          <ul className="flex flex-col p-6 gap-3">
            {navLinks.map((link) => (
              <li key={link.label}>
                <Link
                  to={link.to}
                  className="block py-2 text-sm tracking-widest uppercase text-[#1a2520]"
                >
                  {link.label}
                </Link>
                {link.dropdown === 'services' && (
                  <ul className="pl-4 mt-1 mb-2 border-l border-[#22a884]/20 space-y-2">
                    {serviceCategories.map((s) => (
                      <li key={s.id}>
                        <Link to={`/services/${s.id}`} className="block py-1 text-xs tracking-wider uppercase text-[#1a2520]/70">
                          {s.label}
                        </Link>
                      </li>
                    ))}
                  </ul>
                )}
                {link.dropdown === 'partners' && (
                  <ul className="pl-4 mt-1 mb-2 border-l border-[#22a884]/20 space-y-2">
                    {partners.map((p) => (
                      <li key={p.id}>
                        <Link to={`/partners/${p.id}`} className="block py-1 text-xs tracking-wider uppercase text-[#1a2520]/70">
                          {p.name}
                        </Link>
                      </li>
                    ))}
                  </ul>
                )}
              </li>
            ))}
            <li>
              <Link
                to="/#contact"
                className="inline-block px-6 py-2.5 mt-2 bg-[#22a884] text-white text-xs tracking-widest uppercase rounded-sm"
              >
                Talk to us
              </Link>
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
};

const DynamicIcon = ({ name, ...props }) => {
  const Icons = require('lucide-react');
  const Comp = Icons[name] || Icons.Sparkles;
  return <Comp {...props} />;
};

export default Navbar;
