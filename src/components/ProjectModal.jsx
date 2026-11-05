import React, { useEffect } from "react";
import { X, ArrowUpRight, CheckCircle2, Activity, ShieldCheck, ExternalLink, Globe } from "lucide-react";
import { motion } from "framer-motion";

export default function ProjectModal({ project, onClose, onOpenContact }) {
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "Escape") onClose();
    };
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", handleKeyDown);
    return () => {
      document.body.style.overflow = "unset";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [onClose]);

  if (!project) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 md:p-8">
      {/* Backdrop */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.25 }}
        className="absolute inset-0 bg-slate-900/60 dark:bg-black/80 backdrop-blur-md"
        onClick={onClose}
      />

      {/* Modal Dialog */}
      <motion.div
        initial={{ opacity: 0, scale: 0.96, y: 15 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.96, y: 15 }}
        transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
        className="relative w-full max-w-4xl max-h-[92vh] bg-white dark:bg-[#0F111A] rounded-2xl sm:rounded-3xl border border-slate-200/90 dark:border-white/15 shadow-2xl overflow-y-auto no-scrollbar z-10 flex flex-col text-slate-900 dark:text-white"
      >
        {/* Sticky Header Bar */}
        <div className="sticky top-0 bg-white/95 dark:bg-[#0F111A]/95 backdrop-blur-md px-4 sm:px-8 py-3.5 sm:py-5 border-b border-slate-200 dark:border-white/10 flex items-center justify-between z-20">
          <div className="flex items-center gap-2 sm:gap-3 flex-wrap">
            <span className="text-[11px] sm:text-xs uppercase font-mono tracking-widest text-[#5145E6] dark:text-indigo-400 font-semibold">
              SPECIFICATION / {project.year}
            </span>
            <span className="w-1 h-1 rounded-full bg-slate-300 dark:bg-white/30" />
            <span className="text-[11px] sm:text-xs font-mono font-semibold px-2.5 sm:px-3 py-0.5 sm:py-1 rounded-full bg-[#EEF2FF] dark:bg-[#5145E6]/20 text-[#5145E6] dark:text-indigo-300 border border-[#5145E6]/25">
              {project.category}
            </span>
            {project.liveUrl && (
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="hidden sm:inline-flex items-center gap-1.5 px-3 py-0.5 rounded-full bg-emerald-50 dark:bg-emerald-950/60 border border-emerald-500/30 text-[11px] font-mono text-emerald-600 dark:text-emerald-400 font-semibold hover:bg-emerald-100 dark:hover:bg-emerald-900/40 transition-colors"
              >
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                <span>{project.displayUrl}</span>
                <ExternalLink className="w-3 h-3" />
              </a>
            )}
          </div>

          <button
            onClick={onClose}
            className="p-2 rounded-full border border-slate-200 dark:border-white/10 hover:bg-slate-100 dark:hover:bg-white/10 text-slate-500 hover:text-slate-800 dark:text-[#9496A1] dark:hover:text-white transition-colors"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Body */}
        <div className="p-4 sm:p-10 space-y-6 sm:space-y-10">
          
          {/* Main Title & Overview */}
          <div>
            <div className="flex items-center justify-between gap-4 mb-2">
              <span className="text-xs font-mono font-bold tracking-wider uppercase text-[#5145E6] dark:text-indigo-400 block">
                {project.industry}
              </span>
              {project.liveUrl && (
                <a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-xs font-mono font-bold text-[#5145E6] dark:text-indigo-400 hover:underline"
                >
                  <Globe className="w-3.5 h-3.5" />
                  <span>Launch Live Site</span>
                  <ExternalLink className="w-3 h-3" />
                </a>
              )}
            </div>
            <h2 className="text-2xl sm:text-4xl md:text-5xl font-bold tracking-tight text-slate-900 dark:text-white mb-3 sm:mb-4">
              {project.title}
            </h2>
            <p className="text-sm sm:text-base md:text-lg text-slate-600 dark:text-[#9496A1] leading-relaxed max-w-3xl">
              {project.fullDescription || project.description}
            </p>
          </div>

          {/* Key Impact Metrics */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 sm:gap-4 p-4 sm:p-5 rounded-2xl bg-slate-50 dark:bg-[#08090E] border border-slate-200 dark:border-white/10 font-mono">
            {project.metrics.map((metric, i) => (
              <div key={i} className="flex flex-col">
                <span className="text-2xl sm:text-3xl font-bold text-slate-900 dark:text-white tracking-tight">
                  {metric.value}
                </span>
                <span className="text-xs text-slate-500 dark:text-[#9496A1] font-semibold mt-1">
                  {metric.label}
                </span>
              </div>
            ))}
          </div>

          {/* Challenge & Solution Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="p-6 rounded-2xl border border-slate-200 dark:border-white/10 bg-slate-50/60 dark:bg-[#08090E]">
              <div className="w-8 h-8 rounded-lg bg-rose-50 dark:bg-rose-500/15 border border-rose-200 dark:border-rose-500/30 text-rose-600 dark:text-rose-400 flex items-center justify-center mb-4">
                <Activity className="w-4 h-4" />
              </div>
              <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-2">The Architectural Challenge</h3>
              <p className="text-sm text-slate-600 dark:text-[#9496A1] leading-relaxed font-sans">
                {project.challenge}
              </p>
            </div>

            <div className="p-6 rounded-2xl border border-[#5145E6]/30 dark:border-[#5145E6]/40 bg-slate-50/60 dark:bg-[#08090E]">
              <div className="w-8 h-8 rounded-lg bg-[#EEF2FF] dark:bg-[#5145E6]/20 border border-[#5145E6]/30 text-[#5145E6] dark:text-indigo-300 flex items-center justify-center mb-4">
                <ShieldCheck className="w-4 h-4" />
              </div>
              <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-2">The Engineered Solution</h3>
              <p className="text-sm text-slate-600 dark:text-[#9496A1] leading-relaxed font-sans">
                {project.solution}
              </p>
            </div>
          </div>

          {/* Services & Technology Stack */}
          <div className="space-y-6 pt-4 border-t border-slate-200 dark:border-white/10 font-mono">
            <div>
              <h4 className="text-xs font-bold tracking-wider uppercase text-[#5145E6] dark:text-indigo-400 mb-3">
                Core Capabilities Delivered:
              </h4>
              <div className="flex flex-wrap gap-2">
                {project.services.map((svc, idx) => (
                  <span
                    key={idx}
                    className="px-3.5 py-1.5 rounded-full text-xs font-medium bg-slate-100 dark:bg-white/[0.04] border border-slate-200 dark:border-white/10 text-slate-700 dark:text-white/90"
                  >
                    {svc}
                  </span>
                ))}
              </div>
            </div>

            <div>
              <h4 className="text-xs font-bold tracking-wider uppercase text-[#5145E6] dark:text-indigo-400 mb-3">
                Production Tech Stack:
              </h4>
              <div className="flex flex-wrap gap-2">
                {project.techStack.map((tech, idx) => (
                  <span
                    key={idx}
                    className="px-3.5 py-1.5 rounded-full text-xs font-mono font-semibold bg-[#EEF2FF] dark:bg-[#5145E6]/20 border border-[#5145E6]/30 text-[#5145E6] dark:text-indigo-300"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Bottom Action Footer */}
          <div className="pt-6 border-t border-slate-200 dark:border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4 font-mono">
            <div className="flex items-center gap-2 text-xs text-emerald-600 dark:text-emerald-400 font-medium">
              <CheckCircle2 className="w-4 h-4 text-emerald-600 dark:text-emerald-400" />
              <span>Production live release • CodeNative signature architecture</span>
            </div>

            <div className="flex items-center gap-3 w-full sm:w-auto">
              {project.liveUrl && (
                <a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 sm:flex-initial inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-full border border-slate-300 dark:border-white/20 hover:border-[#5145E6] text-slate-800 dark:text-white text-sm font-semibold hover:bg-slate-100 dark:hover:bg-white/10 transition-colors"
                >
                  <span>Open Live Site</span>
                  <ExternalLink className="w-4 h-4 text-[#5145E6]" />
                </a>
              )}

              <button
                onClick={() => {
                  onClose();
                  onOpenContact(project.title);
                }}
                className="flex-1 sm:flex-initial inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-full bg-[#5145E6] text-white text-sm font-semibold hover:bg-[#4135D4] transition-colors shadow-lg shadow-[#5145E6]/30"
              >
                <span>Build similar system</span>
                <ArrowUpRight className="w-4 h-4" />
              </button>
            </div>
          </div>

        </div>

      </motion.div>
    </div>
  );
}
