import React, { useState, useEffect } from "react";
import { ArrowUpRight, Menu, X, Sun, Moon } from "lucide-react";
import CodeNativeLogo from "./CodeNativeLogo";

export default function Navbar({ onOpenContact, isDark, onToggleTheme }) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Work", href: "#work" },
    { name: "Architecture", href: "#architecture" },
    { name: "Services", href: "#services" },
    { name: "Locations", href: "#locations" },
    { name: "Why Us", href: "#why-us" },
    { name: "Pricing", href: "#pricing" },
    { name: "FAQs", href: "#faqs" },
  ];

  const handleNavClick = (e, href) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    const element = document.querySelector(href);
    if (element) {
      const offsetTop = element.getBoundingClientRect().top + window.pageYOffset - 80;
      window.scrollTo({
        top: offsetTop,
        behavior: "smooth"
      });
    }
  };

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled
            ? "py-3 bg-white/90 dark:bg-[#08090E]/90 backdrop-blur-xl border-b border-slate-200/80 dark:border-white/10 shadow-[0_4px_30px_rgba(15,23,42,0.06)] dark:shadow-[0_4px_30px_rgba(0,0,0,0.6)]"
            : "py-5 bg-transparent"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-8 lg:px-12 flex items-center justify-between">
          {/* Brand Logo & Wordmark */}
          <a
            href="#"
            className="flex items-center group focus:outline-none"
            aria-label="CodeNative Home"
          >
            <CodeNativeLogo iconClassName="h-7 sm:h-8 w-auto" textClassName="h-4 sm:h-4.5 w-auto" gapClassName="gap-1 sm:gap-1.5" />
          </a>

          {/* Desktop Center Navigation Links */}
          <nav className="hidden md:flex items-center gap-1 bg-white/90 dark:bg-[#0F111A]/85 backdrop-blur-md px-4 py-1.5 rounded-full border border-slate-200/90 dark:border-white/10 shadow-[0_2px_16px_rgba(15,23,42,0.05)] dark:shadow-[0_2px_16px_rgba(0,0,0,0.4)]">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                className="px-3.5 py-1.5 text-[13px] font-medium text-slate-600 dark:text-[#9496A1] hover:text-slate-900 dark:hover:text-white transition-colors rounded-full hover:bg-slate-100 dark:hover:bg-white/[0.06]"
              >
                {link.name}
              </a>
            ))}
          </nav>

          {/* Right Action Button: Latency Status + Theme Switcher + CTA */}
          <div className="hidden sm:flex items-center gap-2.5">
            <div className="hidden lg:flex items-center gap-2 px-3 py-1.5 rounded-full bg-slate-100 dark:bg-white/[0.04] border border-slate-200 dark:border-white/10 text-[11px] font-mono text-slate-600 dark:text-[#9496A1]">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
              <span>14ms Edge Latency</span>
            </div>

            {/* Theme Toggle Button */}
            <button
              onClick={onToggleTheme}
              aria-label="Toggle color theme"
              className="p-2 rounded-full border border-slate-200 dark:border-white/10 bg-white dark:bg-[#0F111A] text-slate-600 dark:text-[#9496A1] hover:text-[#5145E6] dark:hover:text-white hover:border-[#5145E6] transition-all shadow-sm"
            >
              {isDark ? <Sun className="w-4 h-4 text-amber-400" /> : <Moon className="w-4 h-4 text-slate-700" />}
            </button>

            <button
              onClick={() => onOpenContact()}
              className="group relative inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-[#5145E6] text-white text-[13.5px] font-medium hover:bg-[#4135D4] active:scale-[0.98] transition-all duration-200 shadow-md shadow-[#5145E6]/25 hover:shadow-lg hover:shadow-[#5145E6]/40"
            >
              <span>Initialize Project</span>
              <span className="w-5 h-5 rounded-full bg-white/20 flex items-center justify-center transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5">
                <ArrowUpRight className="w-3 h-3 text-white" />
              </span>
            </button>
          </div>

          {/* Mobile Hamburger Toggle */}
          <div className="flex md:hidden items-center gap-2">
            <button
              onClick={onToggleTheme}
              aria-label="Toggle theme"
              className="p-2 rounded-full border border-slate-200 dark:border-white/10 bg-white dark:bg-[#0F111A] text-slate-700 dark:text-white"
            >
              {isDark ? <Sun className="w-4 h-4 text-amber-400" /> : <Moon className="w-4 h-4" />}
            </button>
            <button
              onClick={() => onOpenContact()}
              className="px-3.5 py-1.5 rounded-full bg-[#5145E6] text-white text-[12px] font-medium sm:hidden shadow-sm shadow-[#5145E6]/30"
            >
              Contact
            </button>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-full border border-slate-200 dark:border-white/10 bg-white dark:bg-[#0F111A] text-slate-800 dark:text-white hover:bg-slate-100 dark:hover:bg-white/10 transition-colors"
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Drawer Overlay */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-40 bg-slate-900/40 dark:bg-black/70 backdrop-blur-md md:hidden animate-fade-in">
          <div className="absolute top-[68px] left-4 right-4 bg-white dark:bg-[#0F111A] rounded-2xl p-6 border border-slate-200 dark:border-white/10 shadow-2xl flex flex-col gap-4 text-slate-900 dark:text-white">
            <div className="flex items-center justify-between pb-3 border-b border-slate-100 dark:border-white/10">
              <span className="text-xs font-mono uppercase tracking-wider text-slate-500 dark:text-[#9496A1]">System Navigation</span>
              <span className="flex items-center gap-1.5 text-xs text-emerald-600 dark:text-emerald-400 font-mono bg-emerald-50 dark:bg-emerald-950/40 border border-emerald-200 dark:border-emerald-500/30 px-2.5 py-1 rounded-full">
                <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
                ONLINE • 99.99% UPTIME
              </span>
            </div>

            <div className="flex flex-col gap-1">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={(e) => handleNavClick(e, link.href)}
                  className="px-3 py-2.5 text-base font-medium text-slate-700 dark:text-white/90 hover:text-slate-900 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-white/[0.06] rounded-lg transition-colors flex items-center justify-between"
                >
                  {link.name}
                  <ArrowUpRight className="w-4 h-4 text-slate-400" />
                </a>
              ))}
            </div>

            <div className="pt-3 border-t border-slate-100 dark:border-white/10 flex flex-col gap-2.5">
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenContact();
                }}
                className="w-full py-3 rounded-full bg-[#5145E6] text-white text-sm font-semibold hover:bg-[#4135D4] flex items-center justify-center gap-2 shadow-lg shadow-[#5145E6]/30 transition-colors"
              >
                <span>Initialize Project</span>
                <ArrowUpRight className="w-4 h-4" />
              </button>
              <p className="text-center text-xs font-mono text-slate-500 dark:text-[#9496A1]">
                SLA Response Time: &lt; 24 hours
              </p>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
