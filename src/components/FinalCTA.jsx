import React, { useState } from "react";
import { ArrowUpRight, Mail, MessageCircle } from "lucide-react";
import { motion } from "framer-motion";
import ThreeFloatingGlobe from "./ThreeFloatingGlobe";

export default function FinalCTA({ onOpenContact }) {
  const [copied, setCopied] = useState(false);
  const email = "hello@codenative.dev";
  const whatsappUrl = "https://wa.me/918464069091?text=Hello%20CodeNative%2C%20I%20have%20a%20software%20project%20and%20want%20to%20discuss%20architecture.";

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section className="py-28 sm:py-36 lg:py-40 relative bg-white dark:bg-[#08090E] overflow-hidden border-b border-slate-200/80 dark:border-white/10">
      {/* Interactive 3D Wave Grid & Floating Geometry Canvas */}
      <ThreeFloatingGlobe />

      {/* Brand Ambient Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[500px] bg-gradient-to-r from-[#5145E6]/[0.10] via-[#7B68EE]/[0.08] to-transparent rounded-full blur-3xl pointer-events-none" />

      <motion.div
        initial={{ opacity: 0, scale: 0.96 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true, margin: "-40px" }}
        transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
        className="max-w-5xl mx-auto px-6 sm:px-8 text-center relative z-10 flex flex-col items-center"
      >
        {/* Availability Badge */}
        <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-[#EEF2FF] dark:bg-[#5145E6]/20 border border-[#5145E6]/30 shadow-sm mb-8 sm:mb-10">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-500 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
          </span>
          <span className="text-xs font-mono font-bold tracking-wide text-[#5145E6] dark:text-indigo-300">
            Currently Booking Sprints for Q1/Q2 2026
          </span>
        </div>

        {/* Large Headline */}
        <h2 className="text-3xl sm:text-5xl md:text-7xl lg:text-8xl font-extrabold tracking-tight text-slate-900 dark:text-white leading-[1.08] mb-5 sm:mb-8 text-balance max-w-4xl">
          Have a system to build?{" "}
          <span className="bg-gradient-to-r from-[#5145E6] via-[#6355FF] to-[#3B82F6] bg-clip-text text-transparent block sm:inline">
            Let's engineer it.
          </span>
        </h2>

        {/* Supporting Text */}
        <p className="text-sm sm:text-lg md:text-xl text-slate-600 dark:text-[#9496A1] max-w-2xl font-normal leading-relaxed mb-8 sm:mb-12 text-balance">
          Tell us what you're building. We'll architect the system, design the experience, and deploy to production.
        </p>

        {/* Action Group */}
        <div className="flex flex-col sm:flex-row items-center gap-3.5 sm:gap-4 w-full sm:w-auto mb-8 sm:mb-10">
          <button
            onClick={() => onOpenContact()}
            className="w-full sm:w-auto group relative inline-flex items-center justify-center gap-3 px-7 sm:px-9 py-3.5 sm:py-4.5 rounded-full bg-[#5145E6] text-white text-sm sm:text-[15px] font-semibold hover:bg-[#4135D4] active:scale-[0.98] transition-all duration-200 shadow-xl shadow-[#5145E6]/30 hover:shadow-2xl hover:shadow-[#5145E6]/50 font-mono"
          >
            <span>Initialize Sprint Discovery</span>
            <span className="w-6 h-6 rounded-full bg-white/20 flex items-center justify-center transition-transform duration-200 group-hover:translate-x-1 group-hover:-translate-y-0.5">
              <ArrowUpRight className="w-3.5 h-3.5 text-white" />
            </span>
          </button>

          {/* Direct WhatsApp Chat Action */}
          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 sm:px-7 py-3.5 sm:py-4.5 rounded-full bg-[#25D366] hover:bg-[#20BD5A] text-white text-sm sm:text-[15px] font-semibold transition-all shadow-lg shadow-emerald-500/25 font-mono"
          >
            <MessageCircle className="w-4 h-4" />
            <span>Chat on WhatsApp (+91 84640 69091)</span>
          </a>

          <button
            onClick={handleCopyEmail}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-6 sm:px-7 py-3.5 sm:py-4.5 rounded-full bg-slate-50 dark:bg-[#0F111A] hover:bg-slate-100 dark:hover:bg-white/[0.08] text-slate-800 dark:text-white text-sm sm:text-[15px] font-semibold border border-slate-200 dark:border-white/10 transition-all shadow-sm hover:border-[#5145E6] group font-mono"
          >
            <Mail className="w-4 h-4 text-[#5145E6]" />
            <span>{email}</span>
            <span className="text-xs text-[#5145E6] dark:text-indigo-300 font-mono ml-1">
              {copied ? "(Copied!)" : "(Copy)"}
            </span>
          </button>
        </div>

        {/* Response Guarantee Notice */}
        <div className="text-xs font-mono text-slate-500 dark:text-[#9496A1] flex flex-col sm:flex-row items-center gap-1.5 sm:gap-2 text-center">
          <span>Direct senior architect review</span>
          <span className="hidden sm:inline">•</span>
          <span className="text-[#5145E6] dark:text-indigo-400 font-semibold">Instant WhatsApp or 24h technical brief response</span>
        </div>

      </motion.div>
    </section>
  );
}
