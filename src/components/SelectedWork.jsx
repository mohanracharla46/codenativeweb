import React, { useState } from "react";
import { ArrowUpRight, ArrowRight, ExternalLink, Terminal, Zap, Lock, Car, GraduationCap, BarChart3, Users, Building, Flame, Video } from "lucide-react";
import { motion } from "framer-motion";
import { projects } from "../data/projectsData";
import ThreeDCard from "./ThreeDCard";

const CATEGORIES = [
  { id: "All", label: "All Projects (8)" },
  { id: "SaaS & Web Apps", label: "SaaS & Web Apps" },
  { id: "Booking & Portals", label: "Booking & Portals" },
  { id: "Brand & Showcase", label: "Brand & Showcase" },
  { id: "Enterprise Systems", label: "Enterprise Systems" }
];

export default function SelectedWork({ onSelectProject }) {
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredProjects = activeCategory === "All"
    ? projects
    : projects.filter(p => p.category === activeCategory);

  return (
    <section id="work" className="py-24 sm:py-32 border-b border-slate-200/80 dark:border-white/10 relative bg-white dark:bg-[#08090E]">
      <div className="max-w-7xl mx-auto px-4 sm:px-8 lg:px-12">

        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-40px" }}
          transition={{ duration: 0.6 }}
          className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-8 border-b border-slate-200/80 dark:border-white/10 mb-12 sm:mb-16"
        >
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#EEF2FF] dark:bg-[#5145E6]/15 border border-[#5145E6]/30 text-xs font-mono font-semibold uppercase tracking-wider text-[#5145E6] dark:text-indigo-300 mb-3">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
              8 LIVE PRODUCTION DEPLOYMENTS
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-slate-900 dark:text-white">
              Selected Systems &amp; Live Products
            </h2>
            <p className="text-base sm:text-lg text-slate-600 dark:text-[#9496A1] mt-2.5 leading-relaxed">
              Real-world software architectures, SaaS platforms, and enterprise web solutions engineered by CodeNative. Explored in verified priority order with live system access.
            </p>
          </div>

          {/* Minimal Filter Tabs */}
          <div className="flex items-center gap-1.5 overflow-x-auto pb-1 no-scrollbar shrink-0 max-w-full">
            {CATEGORIES.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                className={`px-3.5 py-1.5 rounded-full text-xs font-mono transition-all duration-200 whitespace-nowrap ${
                  activeCategory === cat.id
                    ? "bg-[#5145E6] text-white shadow-md shadow-[#5145E6]/30 font-semibold"
                    : "bg-slate-100 dark:bg-[#0F111A] text-slate-600 dark:text-[#9496A1] hover:text-slate-900 dark:hover:text-white border border-slate-200 dark:border-white/10 hover:border-slate-300"
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </motion.div>

        {/* Software Engineering Showcase: 2-Column Responsive Grid with 3D Tilt */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10">
          {filteredProjects.map((project, idx) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.55, delay: (idx % 2) * 0.1, ease: [0.16, 1, 0.3, 1] }}
              className="h-full"
            >
              <ThreeDCard
                maxTilt={6}
                glare={true}
                onClick={() => onSelectProject(project)}
                className="group cursor-pointer flex flex-col justify-between bg-white dark:bg-[#0F111A] rounded-2xl sm:rounded-3xl p-5 sm:p-7 border border-slate-200/90 dark:border-white/10 hover:border-[#5145E6] transition-all duration-300 shadow-[0_4px_24px_rgba(15,23,42,0.05)] hover:shadow-[0_20px_50px_rgba(81,69,230,0.14)] h-full"
              >
              {/* Visual Preview Container */}
              <div className="relative rounded-xl sm:rounded-2xl overflow-hidden border border-slate-200 dark:border-white/10 group-hover:border-[#5145E6]/40 transition-all duration-300 mb-6 bg-[#090A10]">
                
                {/* Browser Top Address Bar */}
                <div className="bg-[#12141F] px-3.5 py-2.5 border-b border-white/10 flex items-center justify-between text-xs font-mono">
                  <div className="flex items-center gap-1.5">
                    <span className="w-2.5 h-2.5 rounded-full bg-[#FF5F56]/80" />
                    <span className="w-2.5 h-2.5 rounded-full bg-[#FFBD2E]/80" />
                    <span className="w-2.5 h-2.5 rounded-full bg-[#27C93F]/80" />
                  </div>

                  {/* Centered URL Pill */}
                  <div className="flex items-center gap-1.5 px-3 py-1 rounded-md bg-white/[0.05] border border-white/10 text-[11px] text-slate-300 max-w-[200px] sm:max-w-[260px] truncate">
                    <Lock className="w-3 h-3 text-emerald-400 shrink-0" />
                    <span className="truncate">{project.displayUrl}</span>
                  </div>

                  {/* Status Indicator */}
                  <div className="flex items-center gap-1.5 text-[10px] text-emerald-400 font-semibold">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                    <span className="hidden sm:inline">LIVE</span>
                  </div>
                </div>

                {/* Custom Bespoke Software UI Mockup */}
                <ProjectPreviewMockup project={project} />

                {/* Overlay Direct Action Buttons on Hover */}
                <div className="absolute inset-0 bg-slate-900/60 backdrop-blur-[2px] opacity-0 group-hover:opacity-100 transition-opacity duration-200 flex items-center justify-center gap-3 p-4 z-20">
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={(e) => e.stopPropagation()}
                    className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full bg-white text-slate-900 text-xs font-bold font-mono shadow-lg hover:bg-slate-100 transition-colors"
                  >
                    <span>Launch Live Site</span>
                    <ExternalLink className="w-3.5 h-3.5 text-[#5145E6]" />
                  </a>

                  <button
                    onClick={() => onSelectProject(project)}
                    className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full bg-[#5145E6] text-white text-xs font-bold font-mono shadow-lg shadow-[#5145E6]/40 hover:bg-[#4338CA] transition-colors"
                  >
                    <span>Inspect Spec</span>
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>

              {/* Project Narrative & Details Below Mockup */}
              <div className="flex flex-col space-y-3">
                {/* Meta line: Industry + Priority Badge + Year */}
                <div className="flex items-center justify-between text-xs text-slate-500 dark:text-[#9496A1] font-mono">
                  <div className="flex items-center gap-2">
                    <span className="font-semibold text-[#5145E6] dark:text-indigo-400 uppercase tracking-wider text-[11px]">
                      {project.industry}
                    </span>
                  </div>
                  <span className="text-slate-400 dark:text-white/40">{project.year}</span>
                </div>

                {/* Title & Animated Arrow Button */}
                <div className="flex items-start justify-between gap-3 pt-0.5">
                  <h3 className="text-xl sm:text-2xl font-bold tracking-tight text-slate-900 dark:text-white group-hover:text-[#5145E6] dark:group-hover:text-indigo-300 transition-colors duration-200 leading-snug">
                    {project.title}
                  </h3>
                  <div className="w-8 h-8 rounded-full bg-slate-100 dark:bg-white/[0.04] border border-slate-200 dark:border-white/10 group-hover:border-[#5145E6] group-hover:bg-[#5145E6] text-slate-600 dark:text-[#9496A1] group-hover:text-white flex items-center justify-center transition-all duration-200 shrink-0 transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 shadow-sm mt-1">
                    <ArrowUpRight className="w-4 h-4" />
                  </div>
                </div>

                {/* Description */}
                <p className="text-xs sm:text-sm text-slate-600 dark:text-[#9496A1] leading-relaxed line-clamp-2">
                  {project.description}
                </p>

                {/* Metrics Pill Row */}
                <div className="grid grid-cols-3 gap-2 pt-1 pb-1">
                  {project.metrics.map((m, mIdx) => (
                    <div key={mIdx} className="p-2 rounded-lg bg-slate-50 dark:bg-white/[0.02] border border-slate-200/80 dark:border-white/5 font-mono text-center">
                      <span className="text-[10px] text-slate-500 dark:text-[#9496A1] block truncate">{m.label}</span>
                      <span className="text-xs font-bold text-slate-800 dark:text-white mt-0.5 block truncate">{m.value}</span>
                    </div>
                  ))}
                </div>

                {/* Live URL Pill + Service Tag Chips */}
                <div className="flex flex-wrap items-center justify-between gap-2 pt-2 border-t border-slate-100 dark:border-white/5">
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={(e) => e.stopPropagation()}
                    className="inline-flex items-center gap-1 text-[11px] font-mono text-[#5145E6] dark:text-indigo-400 hover:underline font-semibold"
                  >
                    <span>{project.displayUrl}</span>
                    <ExternalLink className="w-3 h-3" />
                  </a>

                  <div className="flex flex-wrap items-center gap-1.5">
                    {project.services.slice(0, 2).map((svc, sIdx) => (
                      <span
                        key={sIdx}
                        className="text-[10.5px] font-mono px-2 py-0.5 rounded-full bg-slate-100 dark:bg-white/[0.04] border border-slate-200 dark:border-white/10 text-slate-600 dark:text-[#9496A1]"
                      >
                        {svc}
                      </span>
                    ))}
                    {project.services.length > 2 && (
                      <span className="text-[10px] font-mono text-slate-400 dark:text-white/40">
                        +{project.services.length - 2}
                      </span>
                    )}
                  </div>
                </div>

              </div>
              </ThreeDCard>
            </motion.div>
          ))}
        </div>

        {/* Section Bottom Sub-CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mt-16 sm:mt-20 pt-8 border-t border-slate-200/80 dark:border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left"
        >
          <p className="text-sm text-slate-600 dark:text-[#9496A1]">
            Need high-concurrency architecture or a custom web platform built for your company?
          </p>

          <button
            onClick={() => onSelectProject(projects[0])}
            className="inline-flex items-center gap-2 text-xs font-mono font-bold text-[#5145E6] dark:text-indigo-300 hover:text-white bg-[#EEF2FF] dark:bg-[#5145E6]/20 px-5 py-2.5 rounded-full border border-[#5145E6]/30 transition-all hover:bg-[#5145E6] shrink-0 shadow-sm"
          >
            <span>Inspect flagship architecture spec</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>
        </motion.div>

      </div>
    </section>
  );
}

// Custom Bespoke UI Cockpits for the 8 Real Projects
function ProjectPreviewMockup({ project }) {
  const containerHeight = "h-56 sm:h-64 md:h-72";

  // 1. CodeNative LMS (#1 Priority)
  if (project.previewType === "codenative-lms") {
    return (
      <div className={`w-full ${containerHeight} bg-[#0A0C14] p-4 sm:p-5 flex flex-col justify-between text-white relative font-mono overflow-hidden`}>
        <div className="absolute top-0 right-0 w-64 h-64 bg-[#5145E6]/25 rounded-full blur-3xl pointer-events-none" />

        <div className="flex items-center justify-between pb-2 relative z-10 border-b border-white/10">
          <div className="flex items-center gap-2 text-xs">
            <GraduationCap className="w-4 h-4 text-[#5145E6]" />
            <span className="font-bold tracking-wider text-white">CODENATIVE EDTECH ENGINE</span>
          </div>
          <span className="text-[10px] text-emerald-400 bg-emerald-950/60 border border-emerald-500/30 px-2 py-0.5 rounded font-bold">
            15,420 LEARNERS
          </span>
        </div>

        {/* Telugu Coding LMS Workspace */}
        <div className="grid grid-cols-2 gap-2.5 my-auto relative z-10">
          <div className="p-3 rounded-xl bg-white/[0.03] border border-white/10">
            <div className="flex items-center justify-between text-[10px] text-indigo-300 mb-1">
              <span className="font-bold">Telugu Video Player</span>
              <span className="text-emerald-400">1080p 60FPS</span>
            </div>
            <p className="text-[11px] text-white/90">Python &amp; Web Dev Explained in Telugu</p>
            <div className="w-full h-1 bg-white/10 rounded-full mt-2 overflow-hidden">
              <div className="w-[78%] h-full bg-[#5145E6] rounded-full" />
            </div>
          </div>

          <div className="p-3 rounded-xl bg-[#5145E6]/10 border border-[#5145E6]/30">
            <div className="flex items-center justify-between text-[10px] text-indigo-300 mb-1">
              <span className="font-bold flex items-center gap-1">
                <Terminal className="w-3 h-3 text-[#5145E6]" />
                WebAssembly Sandbox
              </span>
              <span className="text-emerald-400 font-bold">94ms</span>
            </div>
            <p className="text-[11px] text-indigo-100/90 font-mono">
              &gt; python main.py <br />
              <span className="text-emerald-400">&gt; Hello, CodeNative!</span>
            </p>
          </div>
        </div>

        <div className="flex items-center justify-between border-t border-white/10 pt-2 text-[10px] text-white/50 relative z-10">
          <span className="text-indigo-400 font-semibold">AI Telugu Doubt Solver: Active</span>
          <span>Cloudflare Stream + React 19</span>
        </div>
      </div>
    );
  }

  // 2. Ira Media Concepts Work Reports (#2 Priority)
  if (project.previewType === "ira-reports") {
    return (
      <div className={`w-full ${containerHeight} bg-[#0A0C14] p-4 sm:p-5 flex flex-col justify-between text-white relative font-mono overflow-hidden`}>
        <div className="absolute -top-12 -right-12 w-48 h-48 bg-[#5145E6]/30 rounded-full blur-3xl pointer-events-none" />

        <div className="flex items-center justify-between pb-2 relative z-10 border-b border-white/10">
          <div className="flex items-center gap-2 text-xs">
            <BarChart3 className="w-4 h-4 text-[#5145E6]" />
            <span className="font-bold tracking-wider text-white">IRA WORK REPORT SYSTEM</span>
          </div>
          <span className="text-[10px] text-indigo-300 bg-[#5145E6]/30 px-2 py-0.5 rounded border border-[#5145E6]/40 font-bold">
            LOGIN / RBAC
          </span>
        </div>

        <div className="grid grid-cols-2 gap-2.5 my-auto relative z-10">
          <div className="p-3 rounded-xl bg-white/[0.03] border border-[#5145E6]/30">
            <span className="text-[10px] text-white/50 block">Daily Agency Sprints</span>
            <span className="text-lg font-bold text-[#5145E6] mt-0.5 block">420 Tasks</span>
            <span className="text-[10px] text-emerald-400 mt-1 block">98.8% Velocity</span>
          </div>

          <div className="p-3 rounded-xl bg-white/[0.03] border border-white/10">
            <span className="text-[10px] text-white/50 block">Audit Reporting</span>
            <span className="text-lg font-bold text-white mt-0.5 block">-70% Overhead</span>
            <span className="text-[10px] text-indigo-300 mt-1 block">Instant PDF Export</span>
          </div>
        </div>

        <div className="flex items-center justify-between border-t border-white/10 pt-2 text-[10px] text-white/40 relative z-10">
          <span>Database: PostgreSQL + Express</span>
          <span className="text-indigo-300 font-semibold">Client ROI Aggregator</span>
        </div>
      </div>
    );
  }

  // 3. GoGo Cars (#3 Priority)
  if (project.previewType === "gogocars") {
    return (
      <div className={`w-full ${containerHeight} bg-[#0A0C14] p-4 sm:p-5 flex flex-col justify-between text-white relative font-mono overflow-hidden`}>
        <div className="absolute top-0 right-0 w-48 h-48 bg-amber-500/20 rounded-full blur-3xl pointer-events-none" />

        <div className="flex items-center justify-between pb-2 relative z-10 border-b border-white/10">
          <div className="flex items-center gap-2 text-xs">
            <Car className="w-4 h-4 text-amber-400" />
            <span className="font-bold tracking-wider text-white">GOGO CARS HYDERABAD</span>
          </div>
          <span className="text-[10px] text-amber-300 bg-amber-950/60 border border-amber-500/30 px-2 py-0.5 rounded font-bold">
            85+ FLEET VEHICLES
          </span>
        </div>

        <div className="grid grid-cols-2 gap-2.5 my-auto relative z-10">
          <div className="p-2.5 rounded-xl bg-white/[0.03] border border-amber-500/30">
            <span className="text-[10px] text-white/50 block">Fleet Hubs</span>
            <span className="text-xs font-bold text-amber-400 mt-0.5 block truncate">Madhapur • Gachibowli</span>
            <span className="text-[10px] text-emerald-400 mt-1 block">Doorstep Delivery</span>
          </div>

          <div className="p-2.5 rounded-xl bg-white/[0.03] border border-white/10">
            <span className="text-[10px] text-white/50 block">Reservation Speed</span>
            <span className="text-xs font-bold text-white mt-0.5 block">&lt; 2 Minutes</span>
            <span className="text-[10px] text-indigo-300 mt-1 block">Paperless KYC</span>
          </div>
        </div>

        <div className="flex items-center justify-between border-t border-white/10 pt-2 text-[10px] text-white/50 relative z-10">
          <span>Real-time GPS Dispatch</span>
          <span className="text-amber-400 font-semibold">Razorpay + Leaflet API</span>
        </div>
      </div>
    );
  }

  // 4. ReferItUp (#4 Priority)
  if (project.previewType === "referitup") {
    return (
      <div className={`w-full ${containerHeight} bg-[#0A0C14] p-4 sm:p-5 flex flex-col justify-between text-white relative font-mono overflow-hidden`}>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-56 h-56 bg-emerald-500/20 rounded-full blur-3xl pointer-events-none" />

        <div className="flex items-center justify-between pb-2 relative z-10 border-b border-white/10">
          <div className="flex items-center gap-2 text-xs">
            <Zap className="w-4 h-4 text-emerald-400" />
            <span className="font-bold tracking-wider text-white">REFERITUP GROWTH NETWORK</span>
          </div>
          <span className="text-[10px] text-emerald-400 bg-emerald-950/60 border border-emerald-500/30 px-2 py-0.5 rounded font-bold">
            48,200+ NODES
          </span>
        </div>

        <div className="my-auto relative z-10 p-3 rounded-xl bg-white/[0.04] border border-emerald-500/30">
          <div className="flex items-center justify-between text-[11px] mb-1">
            <span className="text-white/60">Viral Referral Attribution</span>
            <span className="text-emerald-400 font-bold">+38% Lift</span>
          </div>
          <div className="flex items-center justify-between text-xs font-bold text-white mt-1 pt-1 border-t border-white/10">
            <span>Webhook Latency: 32ms</span>
            <span className="text-emerald-400">Instant UPI Payout</span>
          </div>
        </div>

        <div className="flex items-center justify-between border-t border-white/10 pt-2 text-[10px] text-white/50 relative z-10">
          <span>Anti-Fraud Heuristics: 99.7%</span>
          <span className="text-emerald-400 font-semibold">Redis + Next.js 15</span>
        </div>
      </div>
    );
  }

  // 5. Amarnath Sarangula (#5 Priority)
  if (project.previewType === "amarnath") {
    return (
      <div className={`w-full ${containerHeight} bg-[#0A0C14] p-4 sm:p-5 flex flex-col justify-between text-white relative font-mono overflow-hidden`}>
        <div className="absolute top-0 right-0 w-48 h-48 bg-orange-500/20 rounded-full blur-3xl pointer-events-none" />

        <div className="flex items-center justify-between pb-2 relative z-10 border-b border-white/10">
          <div className="flex items-center gap-2 text-xs">
            <Users className="w-4 h-4 text-orange-400" />
            <span className="font-bold tracking-wider text-white">AMARNATH SARANGULA</span>
          </div>
          <span className="text-[10px] text-orange-300 bg-orange-950/60 border border-orange-500/30 px-2 py-0.5 rounded font-bold">
            IITian &amp; FOUNDER
          </span>
        </div>

        <div className="my-auto relative z-10 p-3 rounded-xl bg-white/[0.03] border border-orange-500/30">
          <div className="flex items-center justify-between text-[11px] text-white/70 mb-1">
            <span>Leadership Architecture</span>
            <span className="text-orange-400 font-bold">Statewide Outreach</span>
          </div>
          <p className="text-[11px] text-white/90">
            Interactive Biography Roadmap &amp; Policy Milestone Hub
          </p>
        </div>

        <div className="flex items-center justify-between border-t border-white/10 pt-2 text-[10px] text-white/50 relative z-10">
          <span>Google PageSpeed: 98/100</span>
          <span className="text-orange-400 font-semibold">Next.js + Rich Schema</span>
        </div>
      </div>
    );
  }

  // 6. PSMSK Temple (#6 Priority)
  if (project.previewType === "psmsk") {
    return (
      <div className={`w-full ${containerHeight} bg-[#0A0C14] p-4 sm:p-5 flex flex-col justify-between text-white relative font-mono overflow-hidden`}>
        <div className="absolute top-0 right-0 w-48 h-48 bg-purple-500/20 rounded-full blur-3xl pointer-events-none" />

        <div className="flex items-center justify-between pb-2 relative z-10 border-b border-white/10">
          <div className="flex items-center gap-2 text-xs">
            <Flame className="w-4 h-4 text-purple-400" />
            <span className="font-bold tracking-wider text-white">PALNADU SRI MAHA SAIVA KSHETRAM</span>
          </div>
          <span className="text-[10px] text-purple-300 bg-purple-950/60 border border-purple-500/30 px-2 py-0.5 rounded font-bold">
            SEVA PORTAL
          </span>
        </div>

        <div className="grid grid-cols-2 gap-2.5 my-auto relative z-10">
          <div className="p-2.5 rounded-xl bg-white/[0.03] border border-purple-500/30">
            <span className="text-[10px] text-white/50 block">Online Sevas</span>
            <span className="text-xs font-bold text-purple-300 mt-0.5 block">Daily Pujas Booked</span>
            <span className="text-[10px] text-emerald-400 mt-1 block">Live Darshan Times</span>
          </div>

          <div className="p-2.5 rounded-xl bg-white/[0.03] border border-white/10">
            <span className="text-[10px] text-white/50 block">e-Hundi Donations</span>
            <span className="text-xs font-bold text-white mt-0.5 block">Instant 80G Receipts</span>
            <span className="text-[10px] text-purple-300 mt-1 block">100% Audit Verified</span>
          </div>
        </div>

        <div className="flex items-center justify-between border-t border-white/10 pt-2 text-[10px] text-white/50 relative z-10">
          <span>Festival Scalability: Zero Downtime</span>
          <span className="text-purple-400 font-semibold">Razorpay + Cloudflare</span>
        </div>
      </div>
    );
  }

  // 7. Ira Media Concepts Main Agency (#7 Priority)
  if (project.previewType === "ira-media") {
    return (
      <div className={`w-full ${containerHeight} bg-[#0A0C14] p-4 sm:p-5 flex flex-col justify-between text-white relative font-mono overflow-hidden`}>
        <div className="absolute top-0 right-0 w-48 h-48 bg-rose-500/20 rounded-full blur-3xl pointer-events-none" />

        <div className="flex items-center justify-between pb-2 relative z-10 border-b border-white/10">
          <div className="flex items-center gap-2 text-xs">
            <Video className="w-4 h-4 text-rose-400" />
            <span className="font-bold tracking-wider text-white">IRA MEDIA CONCEPTS</span>
          </div>
          <span className="text-[10px] text-rose-300 bg-rose-950/60 border border-rose-500/30 px-2 py-0.5 rounded font-bold">
            CREATIVE AGENCY
          </span>
        </div>

        <div className="my-auto relative z-10 p-3 rounded-xl bg-white/[0.03] border border-rose-500/30">
          <div className="flex items-center justify-between text-[11px] text-white/70 mb-1">
            <span className="text-rose-400 font-bold">Where Ideas Become Stories</span>
            <span className="text-emerald-400 font-semibold">+55% Bookings</span>
          </div>
          <p className="text-[11px] text-white/90">
            Digital Brand Storytelling • 4K Media Production • Corporate Campaign Portfolio
          </p>
        </div>

        <div className="flex items-center justify-between border-t border-white/10 pt-2 text-[10px] text-white/50 relative z-10">
          <span>Adaptive Video Streaming: 0.7s TTFB</span>
          <span className="text-rose-400 font-semibold">Next.js + Cloudflare CDN</span>
        </div>
      </div>
    );
  }

  // 8. Vwish Technologies (#8 Priority)
  return (
    <div className={`w-full ${containerHeight} bg-[#0A0C14] p-4 sm:p-5 flex flex-col justify-between text-white relative font-mono overflow-hidden`}>
      <div className="absolute top-0 right-0 w-48 h-48 bg-blue-500/20 rounded-full blur-3xl pointer-events-none" />

      <div className="flex items-center justify-between pb-2 relative z-10 border-b border-white/10">
        <div className="flex items-center gap-2 text-xs">
          <Building className="w-4 h-4 text-blue-400" />
          <span className="font-bold tracking-wider text-white">VWISH TECHNOLOGIES ACADEMY</span>
        </div>
        <span className="text-[10px] text-blue-300 bg-blue-950/60 border border-blue-500/30 px-2 py-0.5 rounded font-bold">
          SAP &amp; JAVA ENTERPRISE
        </span>
      </div>

      <div className="my-auto relative z-10 p-3 rounded-xl bg-white/[0.03] border border-blue-500/30">
        <div className="flex items-center justify-between text-[11px] text-white/70 mb-1">
          <span>Course Catalog Engine</span>
          <span className="text-blue-400 font-bold">+45% Enrollment Growth</span>
        </div>
        <p className="text-[11px] text-white/90">
          Specialist SAP ERP Modules &amp; Enterprise Java Core Architecture
        </p>
      </div>

      <div className="flex items-center justify-between border-t border-white/10 pt-2 text-[10px] text-white/50 relative z-10">
        <span>WhatsApp Demo Pipeline: Integrated</span>
        <span className="text-blue-400 font-semibold">Lead Webhook Automation</span>
      </div>
    </div>
  );
}
