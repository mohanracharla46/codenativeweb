import React from "react";
import { 
  MapPin, ArrowUpRight, CheckCircle2, Building2, Globe2, ShieldCheck, 
  Phone, MessageCircle, Laptop, Smartphone, Database, Zap, Check, X, Sparkles, ChevronDown
} from "lucide-react";
import { motion } from "framer-motion";

export default function RegionalPresence({ onOpenContact }) {
  const hubs = [
    {
      city: "Hyderabad HQ",
      region: "Madhapur, Hyderabad",
      badge: "Silicon Corridor Flagship",
      address: "Madhapur, Hyderabad, Telangana 500081",
      phone: "+91 84640 69091",
      phoneRaw: "918464069091",
      tagline: "Flagship engineering pod building high-performance website development, scalable SaaS architectures, and native mobile apps.",
      services: [
        "High-Performance Next.js 15 & React Web Platforms",
        "Cross-Platform & Native iOS/Android Mobile Apps",
        "High-Concurrency Cloud Microservices (Go / Node / Python)",
        "FinTech, HealthTech & Enterprise SaaS Systems"
      ],
      metrics: [
        { label: "Client Rating", value: "4.9 ★" },
        { label: "Edge Latency", value: "< 14ms" },
        { label: "Sprint Cadence", value: "Weekly" }
      ],
      inquiryKey: "Hyderabad Software & Web Development"
    },
    {
      city: "Global Delivery",
      region: "US • UK • Europe • UAE",
      badge: "Worldwide Operations",
      address: "24/7 Asynchronous Sprint Pods & Remote Cloud Infrastructure",
      phone: "+91 84640 69091",
      phoneRaw: "918464069091",
      tagline: "Distributed engineering pods delivering zero-downtime cloud systems and global web apps with continuous sprint execution.",
      services: [
        "24-Hour Continuous Sprint Development Cycle",
        "Direct Senior Engineer Slack & Discord Integration",
        "Global Multi-Region Cloud Deployment & Edge CDN",
        "Strict SOC2, HIPAA, & GDPR Compliance Frameworks"
      ],
      metrics: [
        { label: "On-Time Delivery", value: "100%" },
        { label: "Fast MVP Launch", value: "3 Weeks" },
        { label: "Code Ownership", value: "100%" }
      ],
      inquiryKey: "Global Remote Software Development"
    }
  ];

  const hyderabadAreas = [
    {
      name: "Madhapur & Kondapur",
      tag: "Silicon Innovation Pod",
      desc: "Home to fast-growing tech startups, SaaS companies, and digital product studios requiring cutting-edge Next.js web applications."
    },
    {
      name: "Gachibowli & Financial District",
      tag: "FinTech & Enterprise Hub",
      desc: "Delivering high-concurrency microservices, banking APIs, security-hardened dashboards, and institutional software portals."
    },
    {
      name: "Jubilee Hills & Banjara Hills",
      tag: "Corporate & Luxury Branding",
      desc: "Bespoke corporate agency websites, high-converting luxury portfolios, and executive personal brand platforms."
    },
    {
      name: "Begumpet & Secunderabad",
      tag: "Commercial & B2B Industry",
      desc: "Custom operational software, supply chain portals, wholesale catalog platforms, and internal ERP reporting cockpits."
    },
    {
      name: "Kukatpally & Miyapur",
      tag: "Growth Startups & EdTech",
      desc: "Scalable interactive web applications, e-learning LMS portals, and cross-platform mobile apps for consumer businesses."
    },
    {
      name: "Uppal & LB Nagar",
      tag: "Regional Enterprise Hub",
      desc: "Modern digital booking websites, healthcare clinic portals, and responsive consumer FMCG product catalogs."
    }
  ];

  const industrySolutions = [
    {
      title: "FinTech & Digital Banking",
      desc: "Biometric FaceID mobile vaults, microsecond ledger sync, automated KYC pipelines, and multi-currency payment gateway integrations.",
      icon: <Database className="w-5 h-5 text-[#5145E6]" />
    },
    {
      title: "Healthcare & Telemedicine",
      desc: "HIPAA-compliant doctor portals, encrypted 60fps WebRTC video consultations, automated prescription logs, and patient records.",
      icon: <ShieldCheck className="w-5 h-5 text-emerald-500" />
    },
    {
      title: "Mobility & Fleet Booking",
      desc: "Real-time vehicle inventory locking, hourly/daily pricing engines, doorstep delivery dispatch maps, and paperless digital KYC.",
      icon: <Zap className="w-5 h-5 text-amber-500" />
    },
    {
      title: "EdTech & Interactive LMS",
      desc: "Vernacular coding platforms, in-browser code compilers (WebAssembly), video streaming CDN, and context-aware AI doubt solvers.",
      icon: <Laptop className="w-5 h-5 text-blue-500" />
    },
    {
      title: "Headless E-Commerce & Retail",
      desc: "Sub-half-second mobile checkout funnels, custom 3D product visualizers, Shopify Storefront API, and real-time inventory sync.",
      icon: <Smartphone className="w-5 h-5 text-rose-500" />
    },
    {
      title: "Enterprise SaaS & Work Reports",
      desc: "Bespoke operational cockpits, role-based access control (RBAC), daily agency task tracking, and automated client PDF audits.",
      icon: <Building2 className="w-5 h-5 text-purple-500" />
    }
  ];

  const comparisonData = [
    {
      metric: "Technology Stack",
      codenative: "Modern React 19, Next.js 15, TypeScript, Go & React Native",
      traditional: "Outdated WordPress templates, bloated PHP, legacy plugins"
    },
    {
      metric: "Google Lighthouse & Speed",
      codenative: "95+ Guaranteed, sub-second TTFB, zero layout shift (CLS < 0.05)",
      traditional: "Slow 4.5s+ load times, heavy unoptimized assets, 40-60 scores"
    },
    {
      metric: "Engineering Talent",
      codenative: "100% Senior Architects & Lead Engineers (Zero junior delegation)",
      traditional: "Outsourced junior interns or revolving contract freelancers"
    },
    {
      metric: "Code & IP Ownership",
      codenative: "100% Complete IP transfer & full GitHub source code repository",
      traditional: "Vendor locked-in proprietary platforms with hidden release fees"
    },
    {
      metric: "Direct Communication",
      codenative: "Instant WhatsApp Hotline (+91 84640 69091) & dedicated Slack",
      traditional: "Slow, impersonal email ticketing queues with days of delay"
    }
  ];

  return (
    <section id="locations" className="py-24 sm:py-32 border-b border-slate-200/80 dark:border-white/10 bg-slate-50/60 dark:bg-[#08090E] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-8 lg:px-12">
        
        {/* Section Header with Local Trust Badge */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-40px" }}
          transition={{ duration: 0.6 }}
          className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12 sm:mb-16"
        >
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#EEF2FF] dark:bg-[#5145E6]/15 border border-[#5145E6]/30 text-xs font-mono font-semibold uppercase tracking-wider text-[#5145E6] dark:text-indigo-300 mb-3">
              <span className="w-1.5 h-1.5 rounded-full bg-[#5145E6] animate-pulse" />
              LOCAL SEO &amp; HYDERABAD TECHNOLOGY ECOSYSTEM
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-slate-900 dark:text-white leading-[1.15]">
              Best Software &amp; Website Development Company in{" "}
              <span className="text-[#5145E6] block sm:inline">
                Hyderabad, Telangana.
              </span>
            </h2>
            <p className="text-base sm:text-lg text-slate-600 dark:text-[#9496A1] mt-3.5 leading-relaxed">
              CodeNative is widely recognized as the top-rated software company and website development company in Hyderabad. We combine local in-person collaboration with Silicon Valley engineering standards to deliver custom websites, mobile apps, and scalable cloud platforms.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-2 self-start md:self-auto shrink-0 font-mono">
            <div className="flex items-center gap-2 text-xs text-emerald-700 dark:text-emerald-400 bg-emerald-50 dark:bg-emerald-950/40 border border-emerald-200 dark:border-emerald-500/30 px-3.5 py-2 rounded-full font-semibold shadow-sm">
              <ShieldCheck className="w-4 h-4 text-emerald-600 dark:text-emerald-400" />
              <span>Verified Engineering HQ · Hyderabad</span>
            </div>
          </div>
        </motion.div>

        {/* 2 Flagship Hub Cards: Hyderabad HQ & Global Delivery */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-stretch mb-16">
          {hubs.map((hub, idx) => (
            <motion.div
              key={hub.city}
              initial={{ opacity: 0, y: 35 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.6, delay: idx * 0.14 }}
              whileHover={{ y: -4 }}
              className="p-6 sm:p-8 rounded-3xl bg-white dark:bg-[#0F111A] border border-slate-200/90 dark:border-white/10 hover:border-[#5145E6] transition-all duration-300 flex flex-col justify-between group shadow-[0_4px_24px_rgba(15,23,42,0.05)] hover:shadow-[0_20px_50px_rgba(81,69,230,0.12)]"
            >
              <div>
                {/* Hub Badge Row */}
                <div className="flex items-center justify-between pb-4 border-b border-slate-100 dark:border-white/10 mb-6">
                  <span className="text-xs font-mono font-bold uppercase tracking-wider text-[#5145E6] dark:text-indigo-300 bg-[#EEF2FF] dark:bg-[#5145E6]/20 px-3 py-1 rounded-full border border-[#5145E6]/30">
                    {hub.badge}
                  </span>
                  <div className="flex items-center gap-1.5 text-xs text-slate-500 dark:text-[#9496A1] font-mono">
                    <MapPin className="w-3.5 h-3.5 text-[#5145E6]" />
                    <span>{hub.region}</span>
                  </div>
                </div>

                {/* City Heading */}
                <div className="flex items-baseline gap-2 mb-2">
                  <h3 className="text-2xl sm:text-3xl font-bold tracking-tight text-slate-900 dark:text-white group-hover:text-[#5145E6] dark:group-hover:text-indigo-300 transition-colors">
                    {hub.city}
                  </h3>
                  <span className="text-xs font-mono text-slate-400 dark:text-[#9496A1]">Engineering Center</span>
                </div>

                <p className="text-xs sm:text-sm text-slate-600 dark:text-[#9496A1] leading-relaxed mb-6">
                  {hub.tagline}
                </p>

                {/* Local Services Scope */}
                <div className="space-y-2.5 pt-4 border-t border-slate-100 dark:border-white/10 mb-6">
                  <span className="text-[11px] font-mono font-bold uppercase tracking-wider text-[#5145E6] dark:text-indigo-400 block">
                    Core Specializations Delivered:
                  </span>
                  {hub.services.map((srv, sIdx) => (
                    <div key={sIdx} className="flex items-start gap-2.5 text-xs sm:text-[13px] text-slate-700 dark:text-white/90">
                      <CheckCircle2 className="w-4 h-4 text-emerald-600 dark:text-emerald-400 shrink-0 mt-0.5" />
                      <span>{srv}</span>
                    </div>
                  ))}
                </div>

                {/* Key Metrics Chips */}
                <div className="grid grid-cols-3 gap-2 py-4 border-t border-slate-100 dark:border-white/10 text-center font-mono">
                  {hub.metrics.map((m, mIdx) => (
                    <div key={mIdx} className="bg-slate-50 dark:bg-white/[0.03] p-2 sm:p-2.5 rounded-xl border border-slate-200/80 dark:border-white/10">
                      <span className="text-sm sm:text-base font-bold text-slate-800 dark:text-white block">
                        {m.value}
                      </span>
                      <span className="text-[10px] text-slate-500 dark:text-[#9496A1] block truncate mt-0.5">
                        {m.label}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Action Buttons: Phone & WhatsApp Integration */}
              <div className="pt-6 border-t border-slate-100 dark:border-white/10 mt-6 flex flex-col sm:flex-row items-center justify-between gap-3">
                <a
                  href={`tel:+${hub.phoneRaw}`}
                  className="text-xs text-slate-700 dark:text-white font-mono flex items-center gap-1.5 hover:text-[#5145E6] transition-colors"
                >
                  <Phone className="w-3.5 h-3.5 text-[#5145E6] shrink-0" />
                  <span>{hub.phone}</span>
                </a>

                <div className="flex items-center gap-2 w-full sm:w-auto">
                  <a
                    href={`https://wa.me/${hub.phoneRaw}?text=Hi%20CodeNative%2C%20I%20would%20like%20to%20discuss%20a%20project%20in%20Hyderabad.`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 sm:flex-initial inline-flex items-center justify-center gap-1.5 px-4 py-2.5 rounded-full bg-[#25D366] text-white text-xs font-semibold hover:bg-[#20BD5A] transition-colors shadow-sm font-mono"
                  >
                    <MessageCircle className="w-3.5 h-3.5" />
                    <span>WhatsApp</span>
                  </a>

                  <button
                    onClick={() => onOpenContact(hub.inquiryKey)}
                    className="flex-1 sm:flex-initial inline-flex items-center justify-center gap-1.5 px-4 py-2.5 rounded-full bg-[#5145E6] text-white text-xs font-semibold hover:bg-[#4135D4] transition-all shadow-md shadow-[#5145E6]/30 font-mono"
                  >
                    <span>Consult Pod</span>
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Collapsible Local SEO Coverage Directory (Preserves 100% crawlable local SEO without visual clutter) */}
        <div className="mb-16">
          <details className="group rounded-2xl border border-slate-200/90 dark:border-white/10 bg-white/70 dark:bg-[#0F111A]/50 p-4 sm:p-5 transition-all duration-200 hover:border-[#5145E6]/40 shadow-sm">
            <summary className="flex items-center justify-between cursor-pointer list-none select-none text-xs font-mono">
              <div className="flex items-center gap-2.5 min-w-0 pr-3">
                <MapPin className="w-4 h-4 text-[#5145E6] shrink-0" />
                <span className="font-bold text-slate-900 dark:text-white truncate">
                  Local SEO &amp; Technology Reach Across Hyderabad
                </span>
                <span className="hidden lg:inline text-slate-500 dark:text-slate-400 font-normal">
                  — Madhapur · Gachibowli · Jubilee Hills · Secunderabad · Kukatpally · Uppal
                </span>
              </div>
              <div className="flex items-center gap-2 shrink-0 text-slate-500 dark:text-slate-400">
                <span className="text-[11px] font-semibold text-[#5145E6] dark:text-indigo-400 group-open:hidden">
                  View Areas
                </span>
                <span className="text-[11px] font-semibold text-[#5145E6] dark:text-indigo-400 hidden group-open:inline">
                  Collapse
                </span>
                <ChevronDown className="w-4 h-4 text-[#5145E6] transition-transform duration-200 group-open:rotate-180" />
              </div>
            </summary>

            <div className="mt-4 pt-4 border-t border-slate-100 dark:border-white/10">
              <p className="text-xs text-slate-600 dark:text-[#9496A1] mb-4 leading-relaxed">
                Whether you are an early-stage startup in Madhapur or a multinational enterprise in Gachibowli, CodeNative engineers tailored software solutions, high-speed Next.js websites, mobile apps, and enterprise cloud systems across Hyderabad:
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
                {hyderabadAreas.map((area, idx) => (
                  <div
                    key={idx}
                    className="p-3.5 rounded-xl bg-slate-50/80 dark:bg-white/[0.02] border border-slate-200/80 dark:border-white/5"
                  >
                    <div className="flex items-center justify-between mb-1.5">
                      <h4 className="text-xs font-bold text-slate-900 dark:text-white">
                        {area.name}
                      </h4>
                      <span className="text-[9.5px] font-mono px-2 py-0.5 rounded bg-white dark:bg-white/[0.04] text-[#5145E6] dark:text-indigo-300 border border-slate-200 dark:border-white/10">
                        {area.tag}
                      </span>
                    </div>
                    <p className="text-[11px] text-slate-600 dark:text-[#9496A1] leading-relaxed">
                      {area.desc}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </details>
        </div>

        {/* Industry Solutions Engineered in Hyderabad */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <div className="text-center max-w-2xl mx-auto mb-10">
            <span className="text-xs font-mono font-bold uppercase tracking-wider text-[#5145E6] dark:text-indigo-400 block mb-1">
              PROVEN DOMAIN EXPERTISE
            </span>
            <h3 className="text-2xl sm:text-3xl font-bold tracking-tight text-slate-900 dark:text-white">
              Target Industry Verticals We Engineer in Hyderabad
            </h3>
            <p className="text-xs sm:text-sm text-slate-600 dark:text-[#9496A1] mt-2">
              From regulated healthcare portals to high-throughput financial architectures, our codebases adhere to global benchmarks.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {industrySolutions.map((ind, iIdx) => (
              <div
                key={iIdx}
                className="p-6 rounded-2xl bg-white dark:bg-[#0F111A] border border-slate-200/90 dark:border-white/10 hover:border-[#5145E6] transition-all shadow-sm flex flex-col justify-between"
              >
                <div>
                  <div className="w-10 h-10 rounded-xl bg-slate-50 dark:bg-white/[0.04] border border-slate-200 dark:border-white/10 flex items-center justify-center mb-4">
                    {ind.icon}
                  </div>
                  <h4 className="text-lg font-bold text-slate-900 dark:text-white mb-2">
                    {ind.title}
                  </h4>
                  <p className="text-xs sm:text-sm text-slate-600 dark:text-[#9496A1] leading-relaxed">
                    {ind.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </motion.div>

        {/* CodeNative vs Traditional Agency Comparison Table */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-12"
        >
          <div className="p-6 sm:p-10 rounded-3xl bg-white dark:bg-[#0F111A] border border-slate-200/90 dark:border-white/10 shadow-sm">
            <div className="text-center max-w-2xl mx-auto mb-8">
              <span className="text-xs font-mono font-bold uppercase tracking-wider text-[#5145E6] dark:text-indigo-400 block mb-1">
                ENGINEERING RIGOUR VS ORDINARY AGENCIES
              </span>
              <h3 className="text-2xl sm:text-3xl font-bold tracking-tight text-slate-900 dark:text-white">
                Why Hyderabad Founders Choose CodeNative
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 dark:text-[#9496A1] mt-2">
                We replace outdated agency templates with bespoke software engineering engineered for measurable commercial ROI.
              </p>
            </div>

            {/* Comparison Rows */}
            <div className="overflow-x-auto no-scrollbar font-mono">
              <table className="w-full text-left text-xs sm:text-sm">
                <thead>
                  <tr className="border-b border-slate-200 dark:border-white/10 text-slate-400 dark:text-white/40 uppercase tracking-wider text-[11px]">
                    <th className="pb-3 font-semibold">Evaluation Criteria</th>
                    <th className="pb-3 font-bold text-[#5145E6] dark:text-indigo-300">CodeNative Engineering Pod</th>
                    <th className="pb-3 font-semibold">Traditional Hyderabad Agencies</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100 dark:divide-white/5 font-sans">
                  {comparisonData.map((row, rIdx) => (
                    <tr key={rIdx} className="hover:bg-slate-50/50 dark:hover:bg-white/[0.01]">
                      <td className="py-3.5 font-bold text-slate-900 dark:text-white pr-4 font-mono text-xs">
                        {row.metric}
                      </td>
                      <td className="py-3.5 text-slate-800 dark:text-white font-medium pr-4">
                        <div className="flex items-center gap-1.5 text-emerald-600 dark:text-emerald-400 font-semibold">
                          <Check className="w-4 h-4 shrink-0" />
                          <span>{row.codenative}</span>
                        </div>
                      </td>
                      <td className="py-3.5 text-slate-500 dark:text-[#9496A1]">
                        <div className="flex items-center gap-1.5 text-slate-500 dark:text-white/40">
                          <X className="w-4 h-4 text-rose-500 shrink-0" />
                          <span>{row.traditional}</span>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            {/* Local Call to Action */}
            <div className="mt-8 pt-6 border-t border-slate-100 dark:border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4 font-mono">
              <div className="flex items-center gap-2 text-xs text-slate-600 dark:text-[#9496A1]">
                <Sparkles className="w-4 h-4 text-[#5145E6]" />
                <span>Ready to engineer your digital product in Hyderabad?</span>
              </div>

              <div className="flex items-center gap-3 w-full sm:w-auto">
                <a
                  href="https://wa.me/918464069091?text=Hi%20CodeNative%2C%20I'd%20like%20to%20schedule%20a%20project%20discovery%20in%20Hyderabad."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 sm:flex-initial inline-flex items-center justify-center gap-1.5 px-5 py-2.5 rounded-full bg-[#25D366] text-white text-xs font-semibold hover:bg-[#20BD5A] transition-colors shadow-sm"
                >
                  <MessageCircle className="w-3.5 h-3.5" />
                  <span>WhatsApp (+91 84640 69091)</span>
                </a>

                <button
                  onClick={() => onOpenContact("Hyderabad Architecture Consultation")}
                  className="flex-1 sm:flex-initial inline-flex items-center justify-center gap-1.5 px-6 py-2.5 rounded-full bg-[#5145E6] text-white text-xs font-semibold hover:bg-[#4135D4] transition-all shadow-md shadow-[#5145E6]/30"
                >
                  <span>Initialize Consultation</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>

          </div>
        </motion.div>

        {/* Global Delivery Strip */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="p-5 sm:p-6 rounded-2xl bg-white dark:bg-[#0F111A] border border-slate-200/90 dark:border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left shadow-sm"
        >
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-[#EEF2FF] dark:bg-[#5145E6]/20 text-[#5145E6] dark:text-indigo-300 flex items-center justify-center shrink-0 border border-[#5145E6]/25">
              <Globe2 className="w-5 h-5" />
            </div>
            <div>
              <h4 className="text-sm font-bold text-slate-900 dark:text-white">
                Global Distributed Engineering Pods
              </h4>
              <p className="text-xs text-slate-600 dark:text-[#9496A1]">
                Serving enterprise clients across the United States, Europe, UK, and UAE with continuous 24-hour sprint execution and SOC2 compliance.
              </p>
            </div>
          </div>

          <button
            onClick={() => onOpenContact("Global Project Scoping")}
            className="text-xs font-mono font-bold text-[#5145E6] dark:text-indigo-300 hover:text-white whitespace-nowrap bg-slate-50 dark:bg-white/[0.04] px-4 py-2 rounded-full border border-slate-200 dark:border-white/10 hover:bg-[#5145E6] hover:border-[#5145E6] transition-all shadow-sm"
          >
            Start Global Discovery ↗
          </button>
        </motion.div>

      </div>
    </section>
  );
}
