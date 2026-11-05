import React, { useState } from "react";
import { ArrowUpRight, Mail, Phone, ExternalLink, Check, MessageCircle, ChevronDown, ChevronUp } from "lucide-react";
import CodeNativeLogo from "./CodeNativeLogo";

export default function Footer({ onOpenContact }) {
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [copiedPhone, setCopiedPhone] = useState(false);
  const [whatsappOpen, setWhatsappOpen] = useState(false);

  const email = "hello@codenative.dev";
  const phoneDisplay = "+91 84640 69091";
  const phoneRaw = "918464069091";

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(email);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2000);
  };

  const handleCopyPhone = () => {
    navigator.clipboard.writeText(phoneDisplay);
    setCopiedPhone(true);
    setTimeout(() => setCopiedPhone(false), 2000);
  };

  const scrollToSection = (e, id) => {
    e.preventDefault();
    const el = document.getElementById(id);
    if (el) {
      const offsetTop = el.getBoundingClientRect().top + window.pageYOffset - 80;
      window.scrollTo({
        top: offsetTop,
        behavior: "smooth"
      });
    } else {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  const whatsappPresets = [
    { label: "Website Development", msg: "Hi CodeNative, I'd like to discuss a custom website development project." },
    { label: "Mobile Application", msg: "Hi CodeNative, I want to build a mobile app for iOS and Android." },
    { label: "Custom SaaS / Software", msg: "Hi CodeNative, I need an enterprise software or SaaS platform engineered." },
    { label: "Quick Discovery Call", msg: "Hi CodeNative, I'd like to schedule a 15-minute project discovery call." }
  ];

  return (
    <footer className="bg-slate-100 dark:bg-[#05060A] border-t border-slate-200/80 dark:border-white/10 pt-12 sm:pt-20 pb-10 sm:pb-12 text-slate-600 dark:text-[#9496A1]">
      <div className="max-w-7xl mx-auto px-4 sm:px-8 lg:px-12">
        
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8 sm:gap-12 pb-12 sm:pb-16 border-b border-slate-200/80 dark:border-white/10">
          
          {/* Brand & Direct Contact Column */}
          <div className="lg:col-span-5 space-y-4">
            <a
              href="#"
              onClick={(e) => scrollToSection(e, "")}
              className="flex items-center group inline-flex"
              aria-label="CodeNative Home"
            >
              <CodeNativeLogo iconClassName="h-8 sm:h-9 w-auto" textClassName="h-5 sm:h-5.5 w-auto" gapClassName="gap-1.5 sm:gap-2" />
            </a>

            <p className="text-xs sm:text-sm text-slate-600 dark:text-[#9496A1] max-w-sm leading-relaxed">
              Premier software and website development company in Hyderabad. Engineering high-concurrency web engines, mobile applications, and cloud systems for ambitious businesses worldwide.
            </p>

            {/* Direct Phone & Email Action Bar */}
            <div className="flex flex-wrap items-center gap-2.5 pt-1">
              {/* Phone Link */}
              <a
                href={`tel:+${phoneRaw}`}
                className="inline-flex items-center gap-2 text-xs font-mono font-semibold text-slate-800 dark:text-white bg-white dark:bg-[#0F111A] hover:bg-[#5145E6] hover:text-white p-2.5 rounded-lg border border-slate-200 dark:border-white/10 transition-all shadow-sm group"
                title="Call CodeNative directly"
              >
                <Phone className="w-3.5 h-3.5 text-[#5145E6] dark:text-indigo-400 group-hover:text-white transition-colors" />
                <span>{phoneDisplay}</span>
              </a>

              {/* Copy Phone Button */}
              <button
                onClick={handleCopyPhone}
                className="p-2.5 rounded-lg bg-white dark:bg-[#0F111A] border border-slate-200 dark:border-white/10 text-slate-500 hover:text-slate-900 dark:text-[#9496A1] dark:hover:text-white text-xs font-mono transition-colors"
                title="Copy phone number"
                aria-label="Copy phone number"
              >
                {copiedPhone ? <Check className="w-3.5 h-3.5 text-emerald-500" /> : <span className="text-[11px] font-semibold">Copy</span>}
              </button>

              {/* Email Link */}
              <button
                onClick={handleCopyEmail}
                className="inline-flex items-center gap-2 text-xs font-mono text-[#5145E6] dark:text-indigo-300 font-semibold hover:bg-[#5145E6] hover:text-white p-2.5 rounded-lg bg-white dark:bg-[#5145E6]/20 border border-slate-200 dark:border-[#5145E6]/30 transition-all shadow-sm"
              >
                <Mail className="w-3.5 h-3.5" />
                <span>{email}</span>
                <span className="text-[10px] sm:text-[11px] opacity-80">
                  {copiedEmail ? "(Copied!)" : ""}
                </span>
              </button>
            </div>

            {/* Interactive WhatsApp Direct Toggle Card */}
            <div className="pt-2 max-w-md">
              <div className="rounded-2xl border border-emerald-500/30 bg-emerald-50/70 dark:bg-emerald-950/20 p-4 shadow-sm transition-all">
                
                {/* Toggle Header */}
                <div className="flex items-center justify-between gap-3">
                  <div className="flex items-center gap-2.5">
                    <div className="w-8 h-8 rounded-full bg-[#25D366] text-white flex items-center justify-center shadow-md shadow-emerald-500/30 shrink-0">
                      <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                        <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z" />
                      </svg>
                    </div>
                    <div>
                      <div className="flex items-center gap-1.5">
                        <span className="text-xs font-bold text-slate-900 dark:text-white font-mono">
                          WhatsApp Engineering Desk
                        </span>
                        <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                      </div>
                      <span className="text-[11px] text-emerald-700 dark:text-emerald-400 font-mono">
                        {phoneDisplay} • Direct Senior Engineer Chat
                      </span>
                    </div>
                  </div>

                  {/* Toggle Button */}
                  <button
                    onClick={() => setWhatsappOpen(!whatsappOpen)}
                    className="p-1.5 rounded-lg border border-emerald-500/30 text-emerald-700 dark:text-emerald-400 hover:bg-emerald-500/10 transition-colors"
                    aria-label="Toggle WhatsApp quick options"
                    title="Toggle WhatsApp quick options"
                  >
                    {whatsappOpen ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
                  </button>
                </div>

                {/* Primary WhatsApp Quick Chat Link */}
                <div className="mt-3 flex items-center gap-2">
                  <a
                    href={`https://wa.me/${phoneRaw}?text=Hello%20CodeNative%2C%20I%20would%20like%20to%20discuss%20a%20project.`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 inline-flex items-center justify-center gap-2 px-3.5 py-2 rounded-xl bg-[#25D366] hover:bg-[#20BD5A] text-white text-xs font-bold font-mono shadow-sm transition-all active:scale-[0.98]"
                  >
                    <MessageCircle className="w-3.5 h-3.5" />
                    <span>Open WhatsApp Chat</span>
                    <ExternalLink className="w-3 h-3 ml-0.5" />
                  </a>
                </div>

                {/* Expandable Quick Presets */}
                {whatsappOpen && (
                  <div className="mt-3 pt-3 border-t border-emerald-500/20 space-y-1.5 font-mono animate-fadeIn">
                    <span className="text-[10px] uppercase tracking-wider text-slate-500 dark:text-[#9496A1] block mb-1">
                      Start with specific requirement:
                    </span>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-1.5">
                      {whatsappPresets.map((preset, pIdx) => (
                        <a
                          key={pIdx}
                          href={`https://wa.me/${phoneRaw}?text=${encodeURIComponent(preset.msg)}`}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="px-2.5 py-1.5 rounded-lg bg-white/80 dark:bg-black/30 border border-emerald-500/20 text-[11px] text-slate-700 dark:text-emerald-300 hover:bg-emerald-500 hover:text-white transition-colors flex items-center justify-between group"
                        >
                          <span className="truncate">{preset.label}</span>
                          <ArrowUpRight className="w-3 h-3 opacity-60 group-hover:opacity-100 shrink-0 ml-1" />
                        </a>
                      ))}
                    </div>
                  </div>
                )}

              </div>
            </div>

          </div>

          {/* Navigation Links */}
          <div className="space-y-3 font-mono lg:col-span-2">
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-900 dark:text-white">
              Navigation
            </h4>
            <ul className="space-y-2 text-xs sm:text-sm font-sans">
              <li>
                <a
                  href="#"
                  onClick={(e) => scrollToSection(e, "")}
                  className="text-slate-600 dark:text-[#9496A1] hover:text-[#5145E6] dark:hover:text-white transition-colors"
                >
                  Home
                </a>
              </li>
              <li>
                <a
                  href="#work"
                  onClick={(e) => scrollToSection(e, "work")}
                  className="text-slate-600 dark:text-[#9496A1] hover:text-[#5145E6] dark:hover:text-white transition-colors"
                >
                  Selected Systems
                </a>
              </li>
              <li>
                <a
                  href="#architecture"
                  onClick={(e) => scrollToSection(e, "architecture")}
                  className="text-slate-600 dark:text-[#9496A1] hover:text-[#5145E6] dark:hover:text-white transition-colors"
                >
                  Architecture
                </a>
              </li>
              <li>
                <a
                  href="#services"
                  onClick={(e) => scrollToSection(e, "services")}
                  className="text-slate-600 dark:text-[#9496A1] hover:text-[#5145E6] dark:hover:text-white transition-colors"
                >
                  Services
                </a>
              </li>
              <li>
                <a
                  href="#locations"
                  onClick={(e) => scrollToSection(e, "locations")}
                  className="text-slate-600 dark:text-[#9496A1] hover:text-[#5145E6] dark:hover:text-white transition-colors"
                >
                  Locations
                </a>
              </li>
              <li>
                <a
                  href="#why-us"
                  onClick={(e) => scrollToSection(e, "why-us")}
                  className="text-slate-600 dark:text-[#9496A1] hover:text-[#5145E6] dark:hover:text-white transition-colors"
                >
                  Why Us
                </a>
              </li>
              <li>
                <button
                  onClick={() => onOpenContact()}
                  className="text-slate-600 dark:text-[#9496A1] hover:text-[#5145E6] dark:hover:text-white transition-colors text-left"
                >
                  Contact Desk
                </button>
              </li>
            </ul>
          </div>

          {/* Services Links */}
          <div className="space-y-3 font-mono lg:col-span-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-900 dark:text-white">
              Disciplines
            </h4>
            <ul className="space-y-2 text-xs sm:text-sm text-slate-600 dark:text-[#9496A1] font-sans">
              <li>
                <a
                  href="#services"
                  onClick={(e) => scrollToSection(e, "services")}
                  className="hover:text-[#5145E6] dark:hover:text-white transition-colors"
                >
                  Website Development
                </a>
              </li>
              <li>
                <a
                  href="#services"
                  onClick={(e) => scrollToSection(e, "services")}
                  className="hover:text-[#5145E6] dark:hover:text-white transition-colors"
                >
                  Mobile App Development
                </a>
              </li>
              <li>
                <a
                  href="#services"
                  onClick={(e) => scrollToSection(e, "services")}
                  className="hover:text-[#5145E6] dark:hover:text-white transition-colors"
                >
                  Custom Software &amp; SaaS
                </a>
              </li>
              <li>
                <a
                  href="#services"
                  onClick={(e) => scrollToSection(e, "services")}
                  className="hover:text-[#5145E6] dark:hover:text-white transition-colors"
                >
                  UI/UX Design Systems
                </a>
              </li>
              <li>
                <a
                  href="#services"
                  onClick={(e) => scrollToSection(e, "services")}
                  className="hover:text-[#5145E6] dark:hover:text-white transition-colors"
                >
                  Cloud Architecture &amp; APIs
                </a>
              </li>
            </ul>
          </div>

          {/* Connect Column */}
          <div className="space-y-3 font-mono lg:col-span-2">
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-900 dark:text-white">
              Connect
            </h4>
            <div className="flex flex-col space-y-2.5 text-sm font-sans">
              
              {/* WhatsApp Item */}
              <a
                href={`https://wa.me/${phoneRaw}?text=Hello%20CodeNative%2C%20I%20want%20to%20discuss%20a%20project.`}
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-2 text-slate-700 dark:text-white font-medium hover:text-[#25D366] dark:hover:text-[#25D366] transition-colors group"
              >
                <div className="w-5 h-5 rounded-full bg-[#25D366] text-white flex items-center justify-center shrink-0">
                  <svg className="w-3 h-3 fill-current" viewBox="0 0 24 24">
                    <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z" />
                  </svg>
                </div>
                <span>WhatsApp</span>
                <ArrowUpRight className="w-3 h-3 text-slate-400 group-hover:text-[#25D366]" />
              </a>

              {/* Direct Phone Call */}
              <a
                href={`tel:+${phoneRaw}`}
                className="flex items-center gap-2 text-slate-600 dark:text-[#9496A1] hover:text-[#5145E6] dark:hover:text-white transition-colors group"
              >
                <Phone className="w-4 h-4 text-slate-500 dark:text-[#9496A1] group-hover:text-[#5145E6]" />
                <span>+91 84640 69091</span>
              </a>

              {/* GitHub */}
              <a
                href="https://github.com"
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-2 text-slate-600 dark:text-[#9496A1] hover:text-[#5145E6] dark:hover:text-white transition-colors group"
              >
                <svg className="w-4 h-4 fill-current text-slate-500 dark:text-[#9496A1] group-hover:text-[#5145E6]" viewBox="0 0 24 24">
                  <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
                </svg>
                <span>GitHub</span>
                <ArrowUpRight className="w-3 h-3 text-slate-400 group-hover:text-[#5145E6]" />
              </a>

              {/* LinkedIn */}
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-2 text-slate-600 dark:text-[#9496A1] hover:text-[#5145E6] dark:hover:text-white transition-colors group"
              >
                <svg className="w-4 h-4 fill-current text-slate-500 dark:text-[#9496A1] group-hover:text-[#5145E6]" viewBox="0 0 24 24">
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                </svg>
                <span>LinkedIn</span>
                <ArrowUpRight className="w-3 h-3 text-slate-400 group-hover:text-[#5145E6]" />
              </a>

              {/* Instagram */}
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-2 text-slate-600 dark:text-[#9496A1] hover:text-[#5145E6] dark:hover:text-white transition-colors group"
              >
                <svg className="w-4 h-4 fill-current text-slate-500 dark:text-[#9496A1] group-hover:text-[#5145E6]" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                </svg>
                <span>Instagram</span>
                <ArrowUpRight className="w-3 h-3 text-slate-400 group-hover:text-[#5145E6]" />
              </a>

            </div>
          </div>

        </div>

        {/* Bottom Bar: Copyright & Location Hubs */}
        <div className="pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-slate-500 dark:text-[#9496A1] text-center md:text-left">
          <div>
            <span>© 2026 CodeNative. All rights reserved.</span>
            <span className="hidden sm:inline text-slate-300 dark:text-white/20 mx-2">•</span>
            <span className="block sm:inline text-slate-500 dark:text-[#9496A1] text-[11px]">
              Top-rated Software &amp; Website Development Company in Hyderabad, Telangana.
            </span>
          </div>
          <div className="flex flex-wrap items-center justify-center gap-3 text-[11px] font-mono text-[#5145E6] dark:text-indigo-400 font-semibold">
            <span>HYDERABAD HQ</span>
            <span>•</span>
            <a href={`tel:+${phoneRaw}`} className="hover:underline text-slate-700 dark:text-white">
              TEL: {phoneDisplay}
            </a>
            <span>•</span>
            <span>GLOBAL DELIVERY (US • UK • EU • UAE)</span>
          </div>
        </div>

      </div>
    </footer>
  );
}
