import React, { useState } from "react";
import { Compass, Palette, Code2, Rocket, CheckCircle } from "lucide-react";
import { motion } from "framer-motion";

export default function Process() {
  const [activeStage, setActiveStage] = useState(0);

  const stages = [
    {
      step: "01",
      title: "Discover",
      tagline: "Architecture feasibility, technical constraints & PRD mapping.",
      icon: <Compass className="w-5 h-5 text-[#5145E6]" />,
      duration: "Weeks 1 - 2",
      description: "We dive deep into your domain dynamics, user personas, API contracts, and growth goals. We stress-test assumptions to draft the highest-impact architectural blueprint.",
      milestones: [
        "Stakeholder & engineering specification review",
        "Technical architecture & API feasibility review",
        "Functional specification & PRD documentation",
        "Project roadmap & sprint milestone scheduling"
      ],
      output: "Approved Architecture Blueprint & Technical PRD"
    },
    {
      step: "02",
      title: "Design System",
      tagline: "Component tokens, high-fidelity prototypes & WCAG standards.",
      icon: <Palette className="w-5 h-5 text-[#5145E6]" />,
      duration: "Weeks 2 - 4",
      description: "We translate specifications into tactile, intuitive interfaces. We engineer high-fidelity Figma components, interactive prototypes, and tokenized design systems for developer velocity.",
      milestones: [
        "Information architecture & user flow wireframes",
        "Figma design system with tokenized auto-layout",
        "Interactive desktop & mobile click-through prototypes",
        "Usability validation & design approval sign-off"
      ],
      output: "Complete Figma Design System & Interactive Prototypes"
    },
    {
      step: "03",
      title: "Sprint Build",
      tagline: "Modular microservices, native apps & automated testing.",
      icon: <Code2 className="w-5 h-5 text-[#5145E6]" />,
      duration: "Weeks 4 - 8",
      description: "Our senior software engineers translate blueprints into modular, production-grade code. Continuous integration, automated test suites, and weekly preview deployments.",
      milestones: [
        "Full-stack component development (React 19 / Next.js / Swift)",
        "Backend APIs, databases, and microservices integration",
        "Rigorous cross-platform, security & load testing",
        "Core Web Vitals tuning (99/100 Lighthouse benchmark)"
      ],
      output: "Production-Ready Staging Build & Test Suite"
    },
    {
      step: "04",
      title: "Edge Deploy",
      tagline: "Zero-downtime deployment, telemetry monitoring & SLA support.",
      icon: <Rocket className="w-5 h-5 text-[#5145E6]" />,
      duration: "Weeks 8+",
      description: "We orchestrate zero-downtime deployment to your production cloud infrastructure. We configure error telemetry, edge CDN caching, and provide complete documentation.",
      milestones: [
        "Production DNS, CDN, and SSL zero-trust provisioning",
        "App Store & Google Play binary distribution",
        "Sentry & Datadog real-time telemetry monitoring",
        "Team handover, source code transfer & ongoing SLA support"
      ],
      output: "Live Scalable System & Guaranteed SLA Support"
    }
  ];

  return (
    <section id="process" className="py-24 sm:py-32 border-b border-slate-200/80 dark:border-white/10 relative bg-white dark:bg-[#08090E]">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        
        {/* Section Header with Brand Badge */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-40px" }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl mb-16 sm:mb-20"
        >
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#EEF2FF] dark:bg-[#5145E6]/15 border border-[#5145E6]/30 text-xs font-mono font-semibold uppercase tracking-wider text-[#5145E6] dark:text-indigo-300 mb-3">
            <span className="w-1.5 h-1.5 rounded-full bg-[#5145E6] animate-pulse" />
            ENGINEERING METHODOLOGY
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-slate-900 dark:text-white">
            From architecture to scale.
          </h2>
          <p className="text-base sm:text-lg text-slate-600 dark:text-[#9496A1] mt-3">
            A battle-tested four-stage delivery process designed for predictability, speed, and zero technical debt.
          </p>
        </motion.div>

        {/* Desktop Horizontal Timeline Tracker */}
        <div className="hidden lg:block mb-12">
          <div className="relative">
            {/* Background connecting track */}
            <div className="absolute top-1/2 left-0 right-0 h-1 bg-slate-200 dark:bg-white/10 -translate-y-1/2 z-0" />
            
            {/* Active connecting progress bar */}
            <div
              className="absolute top-1/2 left-0 h-1 bg-[#5145E6] -translate-y-1/2 transition-all duration-500 z-0 shadow-[0_0_12px_rgba(81,69,230,0.6)]"
              style={{ width: `${(activeStage / (stages.length - 1)) * 100}%` }}
            />

            {/* Stage Pills */}
            <div className="relative z-10 flex justify-between">
              {stages.map((stage, idx) => {
                const isActive = activeStage === idx;
                const isPassed = activeStage > idx;

                return (
                  <button
                    key={stage.step}
                    onClick={() => setActiveStage(idx)}
                    className="flex flex-col items-center group text-center focus:outline-none"
                  >
                    <div
                      className={`w-12 h-12 rounded-full border-2 flex items-center justify-center font-mono text-sm font-bold transition-all duration-300 ${
                        isActive
                          ? "bg-[#5145E6] border-[#5145E6] text-white scale-110 shadow-lg shadow-[#5145E6]/40"
                          : isPassed
                          ? "bg-[#EEF2FF] dark:bg-[#0F111A] border-[#5145E6] text-[#5145E6]"
                          : "bg-white dark:bg-[#0F111A] border-slate-200 dark:border-white/10 text-slate-500 dark:text-white/50 group-hover:border-[#5145E6] group-hover:text-[#5145E6]"
                      }`}
                    >
                      {stage.step}
                    </div>
                    <span
                      className={`text-sm font-bold mt-3 transition-colors ${
                        isActive ? "text-[#5145E6]" : "text-slate-600 dark:text-[#9496A1] group-hover:text-slate-900 dark:group-hover:text-white"
                      }`}
                    >
                      {stage.title}
                    </span>
                    <span className="text-[11px] text-slate-400 dark:text-[#9496A1] font-mono mt-0.5">
                      {stage.duration}
                    </span>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Active Stage Detail Panel with Scroll-In */}
          <motion.div
            key={activeStage}
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
            className="mt-12 p-8 sm:p-10 rounded-3xl bg-slate-50/80 dark:bg-[#0F111A] border border-slate-200/90 dark:border-white/10 shadow-xl shadow-slate-900/5"
          >
            <div className="grid grid-cols-12 gap-8 items-center">
              <div className="col-span-7 space-y-4">
                <div className="flex items-center gap-3">
                  <span className="text-xs font-mono font-bold px-2.5 py-1 rounded bg-[#EEF2FF] dark:bg-[#5145E6]/20 text-[#5145E6] dark:text-indigo-300 border border-[#5145E6]/30">
                    STAGE {stages[activeStage].step}
                  </span>
                  <span className="text-xs font-mono text-[#5145E6] dark:text-indigo-400 font-semibold">
                    Estimated Duration: {stages[activeStage].duration}
                  </span>
                </div>

                <h3 className="text-2xl sm:text-3xl font-bold tracking-tight text-slate-900 dark:text-white">
                  {stages[activeStage].title} — {stages[activeStage].tagline}
                </h3>

                <p className="text-base text-slate-600 dark:text-[#9496A1] leading-relaxed">
                  {stages[activeStage].description}
                </p>

                <div className="p-3.5 rounded-xl bg-white dark:bg-white/[0.03] border border-slate-200 dark:border-white/10 text-xs font-mono text-slate-700 dark:text-white/80 shadow-sm">
                  <strong className="text-[#5145E6] dark:text-indigo-400 font-sans">Core Milestone Deliverable:</strong> {stages[activeStage].output}
                </div>
              </div>

              <div className="col-span-5 bg-white dark:bg-[#08090E] p-6 rounded-2xl border border-slate-200/90 dark:border-white/10 space-y-3 shadow-sm">
                <span className="text-xs font-mono font-bold uppercase tracking-wider text-[#5145E6] dark:text-indigo-400 block mb-2">
                  Key Sprint Deliverables:
                </span>
                {stages[activeStage].milestones.map((milestone, mIdx) => (
                  <div key={mIdx} className="flex items-start gap-2.5 text-xs text-slate-800 dark:text-white/90">
                    <CheckCircle className="w-4 h-4 text-emerald-600 dark:text-emerald-400 shrink-0 mt-0.5" />
                    <span>{milestone}</span>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>

        {/* Mobile Vertical Timeline */}
        <div className="lg:hidden space-y-6">
          {stages.map((stage) => (
            <motion.div
              key={stage.step}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="p-6 rounded-2xl bg-white dark:bg-[#0F111A] border border-slate-200 dark:border-white/10 space-y-4 shadow-sm"
            >
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <span className="w-8 h-8 rounded-full bg-[#5145E6] text-white flex items-center justify-center font-mono text-xs font-bold shadow-sm shadow-[#5145E6]/30">
                    {stage.step}
                  </span>
                  <h3 className="text-lg font-bold text-slate-900 dark:text-white">{stage.title}</h3>
                </div>
                <span className="text-xs font-mono text-[#5145E6] dark:text-indigo-300 font-semibold">{stage.duration}</span>
              </div>

              <p className="text-xs sm:text-sm text-slate-600 dark:text-[#9496A1] leading-relaxed">
                {stage.description}
              </p>

              <div className="space-y-2 pt-2 border-t border-slate-100 dark:border-white/5">
                {stage.milestones.map((item, i) => (
                  <div key={i} className="flex items-start gap-2 text-xs text-slate-700 dark:text-white/80">
                    <CheckCircle className="w-3.5 h-3.5 text-emerald-600 dark:text-emerald-400 shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
