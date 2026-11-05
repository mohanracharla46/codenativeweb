import React, { useState } from "react";
import { ArrowUpRight, Plus, Check } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { services } from "../data/servicesData";

export default function Services({ onOpenContact }) {
  const [expandedIndex, setExpandedIndex] = useState(0); // 1st service expanded by default

  const toggleService = (idx) => {
    setExpandedIndex(expandedIndex === idx ? -1 : idx);
  };

  return (
    <section id="services" className="py-24 sm:py-32 border-b border-slate-200/80 dark:border-white/10 relative bg-slate-50/50 dark:bg-[#08090E]">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        
        {/* Section Header with Brand Badge */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-40px" }}
          transition={{ duration: 0.6 }}
          className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16 sm:mb-20"
        >
          <div>
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#EEF2FF] dark:bg-[#5145E6]/15 border border-[#5145E6]/30 text-xs font-mono font-semibold uppercase tracking-wider text-[#5145E6] dark:text-indigo-300 mb-3">
              <span className="w-1.5 h-1.5 rounded-full bg-[#5145E6] animate-pulse" />
              ENGINEERING DISCIPLINES
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-slate-900 dark:text-white">
              What we engineer.
            </h2>
            <p className="text-base sm:text-lg text-slate-600 dark:text-[#9496A1] mt-3 max-w-xl">
              End-to-end software architecture, full-stack web platforms, native mobile apps, and enterprise cloud infrastructure.
            </p>
          </div>

          <div className="text-right hidden md:block">
            <span className="text-xs font-mono text-[#5145E6] dark:text-indigo-300 font-semibold tracking-widest uppercase bg-[#EEF2FF] dark:bg-[#5145E6]/15 px-3 py-1.5 rounded-full border border-[#5145E6]/30">
              06 Core Disciplines
            </span>
          </div>
        </motion.div>

        {/* Interactive Services Rows with Scroll Reveal */}
        <div className="divide-y divide-slate-200/80 dark:divide-white/10 border-y border-slate-200/80 dark:border-white/10">
          {services.map((service, idx) => {
            const isExpanded = expandedIndex === idx;

            return (
              <motion.div
                key={service.number}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-30px" }}
                transition={{ duration: 0.45, delay: idx * 0.06 }}
                className={`transition-colors duration-200 group ${
                  isExpanded ? "bg-white dark:bg-[#0F111A] shadow-md shadow-slate-900/5" : "bg-transparent hover:bg-white/60 dark:hover:bg-[#0F111A]/50"
                }`}
              >
                {/* Header Row clickable */}
                <div
                  onClick={() => toggleService(idx)}
                  className="py-6 sm:py-9 px-3 sm:px-8 flex items-center justify-between gap-3 sm:gap-6 cursor-pointer select-none"
                >
                  {/* Left: Number + Title */}
                  <div className="flex items-center gap-3.5 sm:gap-8 min-w-0 pr-2">
                    <span className="text-xl sm:text-3xl font-mono font-bold text-[#5145E6] transition-colors shrink-0">
                      {service.number}
                    </span>

                    <div className="min-w-0">
                      <div className="flex items-center gap-2 sm:gap-3">
                        <h3 className="text-lg sm:text-2xl md:text-3xl font-bold tracking-tight text-slate-900 dark:text-white group-hover:text-[#5145E6] dark:group-hover:text-indigo-300 transition-colors truncate">
                          {service.title}
                        </h3>
                        <span className="hidden sm:inline-block text-[11px] font-mono font-semibold px-2.5 py-0.5 rounded-full bg-[#EEF2FF] dark:bg-[#5145E6]/20 text-[#5145E6] dark:text-indigo-300 border border-[#5145E6]/25 shrink-0">
                          {service.badge}
                        </span>
                      </div>
                      <p className="text-xs sm:text-sm text-slate-500 dark:text-[#9496A1] mt-1 line-clamp-1 max-w-xl font-normal">
                        {service.shortDescription}
                      </p>
                    </div>
                  </div>

                  {/* Right: Icon indicator & toggle arrow */}
                  <div className="flex items-center gap-3 shrink-0">
                    <span className="text-xs font-mono text-[#5145E6] dark:text-indigo-400 hidden lg:inline-block font-semibold">
                      {isExpanded ? "Collapse Spec" : "Inspect Spec"}
                    </span>
                    <div
                      className={`w-8 h-8 sm:w-10 sm:h-10 rounded-full border flex items-center justify-center transition-all duration-300 ${
                        isExpanded
                          ? "bg-[#5145E6] text-white rotate-45 border-[#5145E6] shadow-md shadow-[#5145E6]/30"
                          : "bg-slate-100 dark:bg-white/[0.04] text-slate-500 dark:text-[#9496A1] border-slate-200 dark:border-white/10 group-hover:border-[#5145E6] group-hover:text-[#5145E6] dark:group-hover:text-white group-hover:bg-[#EEF2FF] dark:group-hover:bg-[#5145E6]/20"
                      }`}
                    >
                      <Plus className="w-3.5 h-3.5 sm:w-4 sm:h-4 transition-transform duration-300" />
                    </div>
                  </div>
                </div>

                {/* Expanded Details Body */}
                <AnimatePresence>
                  {isExpanded && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: "auto" }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
                      className="overflow-hidden"
                    >
                      <div className="px-3 sm:px-8 pb-8 sm:pb-12 pt-2 border-t border-slate-100 dark:border-white/5">
                        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 sm:gap-12 pt-6">
                          
                          {/* Left Column: Long Description & Capabilities */}
                          <div className="lg:col-span-7 space-y-6">
                            <p className="text-sm sm:text-base text-slate-700 dark:text-white/80 leading-relaxed font-sans">
                              {service.longDescription}
                            </p>

                            <div>
                              <h4 className="text-xs font-mono uppercase tracking-widest text-slate-500 dark:text-[#9496A1] mb-3 font-semibold">
                                Technical Deliverables &amp; Core Capabilities:
                              </h4>
                              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                                {service.capabilities.map((cap, cIdx) => (
                                  <div key={cIdx} className="flex items-start gap-2.5 text-xs sm:text-[13px] text-slate-800 dark:text-white/90">
                                    <Check className="w-4 h-4 text-emerald-600 dark:text-emerald-400 shrink-0 mt-0.5" />
                                    <span>{cap}</span>
                                  </div>
                                ))}
                              </div>
                            </div>
                          </div>

                          {/* Right Column: Technologies & Inquiry Button */}
                          <div className="lg:col-span-5 bg-slate-50 dark:bg-[#08090E] p-6 rounded-2xl border border-slate-200 dark:border-white/10 flex flex-col justify-between space-y-6">
                            <div>
                              <span className="text-xs font-mono uppercase tracking-widest text-slate-500 dark:text-[#9496A1] block mb-3 font-semibold">
                                Production Stack:
                              </span>
                              <div className="flex flex-wrap gap-2">
                                {service.technologies.map((tech, tIdx) => (
                                  <span
                                    key={tIdx}
                                    className="text-xs font-mono px-3 py-1 rounded-lg bg-white dark:bg-white/[0.04] border border-slate-200 dark:border-white/10 text-slate-700 dark:text-indigo-200 shadow-sm"
                                  >
                                    {tech}
                                  </span>
                                ))}
                              </div>

                              <div className="mt-5 pt-4 border-t border-slate-200 dark:border-white/5">
                                <span className="text-xs font-mono text-slate-500 dark:text-[#9496A1] block mb-1">
                                  Standard Delivery Guarantee:
                                </span>
                                <p className="text-xs text-slate-600 dark:text-white/70 leading-relaxed font-sans">
                                  {service.deliverables}
                                </p>
                              </div>
                            </div>

                            <button
                              onClick={() => onOpenContact(`Inquiry for ${service.title}`)}
                              className="w-full inline-flex items-center justify-center gap-2 py-3 rounded-full bg-[#5145E6] hover:bg-[#4135D4] text-white text-xs sm:text-sm font-semibold transition-all shadow-md shadow-[#5145E6]/30"
                            >
                              <span>Request Engineering Proposal</span>
                              <ArrowUpRight className="w-3.5 h-3.5" />
                            </button>
                          </div>

                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
