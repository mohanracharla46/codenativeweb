import React, { useState } from "react";
import { ArrowUpRight, Check, Calculator } from "lucide-react";
import { motion } from "framer-motion";
import ThreeDCard from "./ThreeDCard";

export default function Pricing({ onOpenContact }) {
  const [activeTab, setActiveTab] = useState("packages"); // "packages" | "estimator"

  // Estimator State
  const [platform, setPlatform] = useState("web");
  const [scope, setScope] = useState("growth");

  const engagementModels = [
    {
      id: "starter",
      name: "Starter Sprint",
      badge: "Fast Track",
      idealFor: "Ideal for early-stage ventures, high-impact web flagships, and focused production MVPs.",
      timeline: "Typical timeline: 3 - 5 weeks",
      features: [
        "Custom responsive web experience or MVP",
        "Design system & interactive Figma components",
        "Headless CMS integration (Sanity / Strapi)",
        "Core Web Vitals & SEO optimization",
        "Weekly asynchronous demo videos & repo access",
        "30 days post-launch warranty & handover"
      ],
      cta: "Initialize Starter Sprint"
    },
    {
      id: "business",
      name: "Engineering Pod",
      badge: "Most Popular",
      isPopular: true,
      idealFor: "For scaling businesses needing full-scale custom web applications, SaaS dashboards, or native mobile apps.",
      timeline: "Typical timeline: 6 - 12 weeks",
      features: [
        "Full-stack web application or cross-platform mobile app",
        "Role-based authentication & complex database schemas",
        "Third-party API, Stripe payment, or ERP integrations",
        "Comprehensive QA testing & automated CI/CD pipeline",
        "Dedicated senior tech lead & product designer",
        "Bi-weekly sprint demos & shared Slack channel",
        "60 days dedicated post-launch support"
      ],
      cta: "Deploy Engineering Pod"
    },
    {
      id: "custom",
      name: "Enterprise Architecture",
      badge: "High-Scale Systems",
      idealFor: "For high-growth companies requiring end-to-end product engineering, legacy modernization, or dedicated pods.",
      timeline: "Milestone-driven roadmap",
      features: [
        "Tailored enterprise architecture & microservices",
        "High-concurrency data streaming or real-time IoT pipelines",
        "Strict compliance (SOC2, HIPAA, GDPR ready)",
        "Dedicated multi-disciplinary team pod (Lead, Frontend, Mobile, Backend)",
        "Executive technical governance & sprint planning",
        "Custom SLA uptime & 24/7 incident response hotline"
      ],
      cta: "Request Enterprise Proposal"
    }
  ];

  return (
    <section id="pricing" className="py-24 sm:py-32 border-b border-slate-200/80 dark:border-white/10 relative bg-slate-50/50 dark:bg-[#08090E]">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">

        {/* Section Header with Brand Badge */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-40px" }}
          transition={{ duration: 0.6 }}
          className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12 sm:mb-16"
        >
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#EEF2FF] dark:bg-[#5145E6]/15 border border-[#5145E6]/30 text-xs font-mono font-semibold uppercase tracking-wider text-[#5145E6] dark:text-indigo-300 mb-3">
              <span className="w-1.5 h-1.5 rounded-full bg-[#5145E6] animate-pulse" />
              ENGAGEMENT &amp; PRICING
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-slate-900 dark:text-white">
              Transparent engagement models.
            </h2>
            <p className="text-base sm:text-lg text-slate-600 dark:text-[#9496A1] mt-3">
              We provide transparent, custom proposals tailored precisely to your technical requirements, deadlines, and business goals.
            </p>
          </div>

          {/* Toggle between standard models & interactive scope estimator */}
          <div className="flex w-full sm:w-auto p-1 sm:p-1.5 bg-slate-200/80 dark:bg-[#0F111A] rounded-full border border-slate-300 dark:border-white/10 self-start md:self-auto font-mono shadow-sm">
            <button
              onClick={() => setActiveTab("packages")}
              className={`flex-1 sm:flex-initial px-3.5 sm:px-4 py-2 rounded-full text-xs font-bold transition-all text-center ${activeTab === "packages"
                  ? "bg-[#5145E6] text-white shadow-md shadow-[#5145E6]/30"
                  : "text-slate-600 dark:text-[#9496A1] hover:text-slate-900 dark:hover:text-white"
                }`}
            >
              Engagement Models
            </button>
            <button
              onClick={() => setActiveTab("estimator")}
              className={`flex-1 sm:flex-initial px-3.5 sm:px-4 py-2 rounded-full text-xs font-bold transition-all flex items-center justify-center gap-1.5 ${activeTab === "estimator"
                  ? "bg-[#5145E6] text-white shadow-md shadow-[#5145E6]/30"
                  : "text-slate-600 dark:text-[#9496A1] hover:text-slate-900 dark:hover:text-white"
                }`}
            >
              <Calculator className="w-3.5 h-3.5" />
              <span>Project Estimator</span>
            </button>
          </div>
        </motion.div>

        {activeTab === "packages" ? (
          /* 3 Engagement Options with 3D Tilt & Staggered Scroll Animations */
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 sm:gap-8 items-stretch">
            {engagementModels.map((pkg, idx) => (
              <motion.div
                key={pkg.id}
                initial={{ opacity: 0, y: 35 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ duration: 0.55, delay: idx * 0.12 }}
                className="h-full"
              >
                <ThreeDCard
                  maxTilt={6}
                  glare={true}
                  className={`h-full p-5 sm:p-8 rounded-2xl sm:rounded-3xl border flex flex-col justify-between transition-all duration-300 relative ${pkg.isPopular
                      ? "bg-white dark:bg-[#0F111A] border-2 border-[#5145E6] shadow-xl shadow-[#5145E6]/15 ring-2 ring-[#5145E6]/20"
                      : "bg-white dark:bg-[#0F111A]/60 border-slate-200/90 dark:border-white/10 hover:border-[#5145E6]/40 hover:shadow-lg shadow-slate-900/5"
                    }`}
                >
                  {pkg.isPopular && (
                    <div className="absolute -top-3.5 left-6 sm:left-8 px-3.5 sm:px-4 py-1 rounded-full bg-[#5145E6] text-white text-[10.5px] sm:text-[11px] font-mono font-bold tracking-wider uppercase shadow-md shadow-[#5145E6]/30">
                      Recommended Model
                    </div>
                  )}

                  <div>
                    <div className="flex items-center justify-between mb-4">
                      <span className="text-xs font-mono font-bold uppercase tracking-wider text-[#5145E6] dark:text-indigo-300 bg-[#EEF2FF] dark:bg-[#5145E6]/20 px-2.5 py-1 rounded-md border border-[#5145E6]/30">
                        {pkg.badge}
                      </span>
                    </div>

                    <h3 className="text-2xl font-bold tracking-tight text-slate-900 dark:text-white mb-2">
                      {pkg.name}
                    </h3>

                    <p className="text-xs sm:text-sm text-slate-600 dark:text-[#9496A1] leading-relaxed mb-6 min-h-[44px]">
                      {pkg.idealFor}
                    </p>

                    <div className="p-3 rounded-xl bg-slate-50 dark:bg-white/[0.03] border border-slate-200 dark:border-white/10 text-xs font-mono text-[#5145E6] dark:text-indigo-300 font-semibold mb-6">
                      {pkg.timeline}
                    </div>

                    <div className="space-y-3 pt-4 border-t border-slate-100 dark:border-white/5">
                      <span className="text-[11px] font-mono font-bold uppercase tracking-wider text-[#5145E6] dark:text-indigo-400 block">
                        Scope &amp; Deliverables:
                      </span>
                      {pkg.features.map((feature, fIdx) => (
                        <div key={fIdx} className="flex items-start gap-2.5 text-xs sm:text-[13px] text-slate-800 dark:text-white/90">
                          <Check className="w-4 h-4 text-emerald-600 dark:text-emerald-400 shrink-0 mt-0.5" />
                          <span>{feature}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="mt-8 pt-6 border-t border-slate-100 dark:border-white/5">
                    <button
                      onClick={() => onOpenContact(pkg.name)}
                      className={`w-full inline-flex items-center justify-center gap-2 py-3.5 px-6 rounded-full text-xs sm:text-sm font-semibold transition-all ${pkg.isPopular
                          ? "bg-[#5145E6] text-white hover:bg-[#4135D4] shadow-lg shadow-[#5145E6]/30 font-mono"
                          : "bg-slate-100 dark:bg-white/[0.04] text-slate-800 dark:text-white hover:bg-[#5145E6] hover:text-white border border-slate-200 dark:border-white/10 font-mono shadow-sm"
                        }`}
                    >
                      <span>{pkg.cta}</span>
                      <ArrowUpRight className="w-4 h-4" />
                    </button>
                    <p className="text-center text-[11px] font-mono text-slate-500 dark:text-[#9496A1] mt-2.5">
                      Fixed price quotation after architecture review
                    </p>
                  </div>
                </ThreeDCard>
              </motion.div>
            ))}
          </div>
        ) : (
          /* Interactive Scope & Cost Estimator with Scroll Reveal */
          <motion.div
            initial={{ opacity: 0, scale: 0.98 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.35 }}
            className="bg-white dark:bg-[#0F111A] rounded-2xl sm:rounded-3xl p-5 sm:p-10 border border-slate-200/90 dark:border-white/10 shadow-xl shadow-slate-900/5 max-w-4xl mx-auto"
          >
            <div className="text-center max-w-xl mx-auto mb-8 sm:mb-10">
              <h3 className="text-2xl sm:text-3xl font-bold tracking-tight text-slate-900 dark:text-white">
                Interactive Scope Estimator
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 dark:text-[#9496A1] mt-2">
                Configure your project parameters to see recommended team composition and delivery phases.
              </p>
            </div>

            <div className="space-y-6 sm:space-y-8 font-mono">
              {/* Step 1: Select Platform */}
              <div>
                <label className="text-xs font-mono font-bold uppercase tracking-wider text-[#5145E6] dark:text-indigo-400 block mb-3">
                  1. Target Software Platform:
                </label>
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 sm:gap-3">
                  {[
                    { id: "web", label: "Web Platform / Site" },
                    { id: "mobile", label: "Mobile App (iOS/Android)" },
                    { id: "software", label: "Custom Software / SaaS" },
                    { id: "ecommerce", label: "Headless E-Commerce" }
                  ].map((item) => (
                    <button
                      key={item.id}
                      onClick={() => setPlatform(item.id)}
                      className={`p-2.5 sm:p-3.5 rounded-xl sm:rounded-2xl text-[11px] sm:text-xs font-semibold border text-center transition-all ${platform === item.id
                          ? "bg-[#5145E6] text-white border-[#5145E6] shadow-md shadow-[#5145E6]/30"
                          : "bg-slate-50 dark:bg-[#08090E] text-slate-700 dark:text-[#9496A1] border-slate-200 dark:border-white/10 hover:border-slate-300"
                        }`}
                    >
                      {item.label}
                    </button>
                  ))}
                </div>
              </div>

              {/* Step 2: Scope Level */}
              <div>
                <label className="text-xs font-mono font-bold uppercase tracking-wider text-[#5145E6] dark:text-indigo-400 block mb-3">
                  2. Architectural Complexity:
                </label>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                  {[
                    { id: "mvp", title: "MVP / Foundation", desc: "Core features, fast release, validated prototype" },
                    { id: "growth", title: "Complete Product", desc: "Full feature set, integrations, custom design system" },
                    { id: "enterprise", title: "High-Scale Enterprise", desc: "Microservices, high concurrency, strict compliance" }
                  ].map((item) => (
                    <button
                      key={item.id}
                      onClick={() => setScope(item.id)}
                      className={`p-4 rounded-2xl border text-left transition-all ${scope === item.id
                          ? "bg-[#5145E6] text-white border-[#5145E6] shadow-md shadow-[#5145E6]/30"
                          : "bg-slate-50 dark:bg-[#08090E] text-slate-700 dark:text-[#9496A1] border-slate-200 dark:border-white/10 hover:border-slate-300"
                        }`}
                    >
                      <div className={`font-bold text-xs sm:text-sm ${scope === item.id ? "text-white" : "text-slate-900 dark:text-white"}`}>{item.title}</div>
                      <div className={`text-[11px] mt-1 ${scope === item.id ? "text-white/80" : "text-slate-500 dark:text-[#9496A1]"}`}>
                        {item.desc}
                      </div>
                    </button>
                  ))}
                </div>
              </div>

              {/* Estimate Summary Box */}
              <div className="p-6 rounded-2xl bg-slate-50 dark:bg-[#08090E] border border-slate-200 dark:border-white/10 space-y-4">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-4 border-b border-slate-200 dark:border-white/5">
                  <div>
                    <span className="text-xs font-mono uppercase text-[#5145E6] dark:text-indigo-400 block font-bold">Recommended Delivery Model</span>
                    <span className="text-xl font-bold text-slate-900 dark:text-white font-sans">
                      {scope === "mvp" ? "Starter Sprint Model" : scope === "growth" ? "Dedicated Senior Pod" : "Custom Enterprise Architecture"}
                    </span>
                  </div>
                  <div className="text-left sm:text-right">
                    <span className="text-xs text-slate-500 dark:text-[#9496A1] block font-sans">Estimated Execution Duration</span>
                    <span className="text-base font-mono font-bold text-emerald-600 dark:text-emerald-400">
                      {scope === "mvp" ? "3 - 5 Weeks" : scope === "growth" ? "6 - 10 Weeks" : "10 - 16 Weeks"}
                    </span>
                  </div>
                </div>

                <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-2">
                  <div className="text-xs text-slate-600 dark:text-[#9496A1] font-sans">
                    Ready to turn this estimate into a guaranteed scope of work?
                  </div>
                  <button
                    onClick={() => onOpenContact(`Estimate: ${platform} - ${scope}`)}
                    className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full bg-[#5145E6] text-white text-xs sm:text-sm font-semibold hover:bg-[#4135D4] shadow-md shadow-[#5145E6]/30 transition-all font-mono"
                  >
                    <span>Request proposal for this scope</span>
                    <ArrowUpRight className="w-4 h-4" />
                  </button>
                </div>
              </div>

            </div>
          </motion.div>
        )}

      </div>
    </section>
  );
}
