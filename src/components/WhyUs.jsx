import React, { useState } from "react";
import { TrendingUp, Cpu, Sparkles, MessageSquare, ShieldCheck, CheckCircle2, Copy, Check } from "lucide-react";
import { motion } from "framer-motion";

export default function WhyUs() {
  const [copiedCode, setCopiedCode] = useState(false);

  const sampleSnippet = `// CodeNative Scalable Architecture
export async function createTenantSession({ tenantId, user }) {
  await rbac.verifyAccess(user, 'org:write');
  const session = await db.session.create({
    data: { tenantId, userId: user.id, status: 'ACTIVE' }
  });
  telemetry.logEvent('session_initialized', { tenantId });
  return session;
}`;

  const copyCode = () => {
    navigator.clipboard.writeText(sampleSnippet);
    setCopiedCode(true);
    setTimeout(() => setCopiedCode(false), 2000);
  };

  const pillars = [
    {
      icon: <TrendingUp className="w-5 h-5 text-[#5145E6]" />,
      title: "Business-First Engineering",
      description: "We don't write code for the sake of code. Every technical choice, feature priority, and architectural decision is aligned with your business model, customer acquisition, and bottom line.",
      tag: "ROI & Impact"
    },
    {
      icon: <Cpu className="w-5 h-5 text-[#5145E6]" />,
      title: "Zero Technical Debt Stack",
      description: "We build on modern standards: React 19, Next.js 15, Swift 6, Kotlin Multiplatform, Go microservices, and Docker edge runtimes. Zero outdated legacy baggage.",
      tag: "Modern Standards"
    },
    {
      icon: <Sparkles className="w-5 h-5 text-[#5145E6]" />,
      title: "60 FPS Micro-Interactions",
      description: "Precision typography, 60fps gesture-driven animations, and WCAG accessible design systems. We sweat every pixel to make your product feel instantaneous, premium, and trustworthy.",
      tag: "Human-Centered UX"
    },
    {
      icon: <MessageSquare className="w-5 h-5 text-[#5145E6]" />,
      title: "Direct Engineering Visibility",
      description: "Direct Slack or Discord channels, weekly sprint demos, shared Figma workspaces, and direct GitHub repo access. You have 100% visibility every step of the journey.",
      tag: "Direct Senior Access"
    },
    {
      icon: <ShieldCheck className="w-5 h-5 text-[#5145E6]" />,
      title: "Long-Term Evolution & SLAs",
      description: "We don't abandon you after deployment. We support your growth with proactive maintenance, cloud cost optimization, SLA guarantees, and ongoing product enhancements.",
      tag: "99.98% SLA Uptime"
    }
  ];

  return (
    <section id="why-us" className="py-24 sm:py-32 border-b border-slate-200/80 dark:border-white/10 bg-white dark:bg-[#08090E] relative">
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
            WHY CODENATIVE
          </div>
          <h2 className="text-3xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-slate-900 dark:text-white leading-tight text-balance">
            More than development.{" "}
            <span className="text-[#5145E6] block sm:inline">
              Your dedicated technology partner.
            </span>
          </h2>
          <p className="text-base sm:text-lg text-slate-600 dark:text-[#9496A1] mt-4 leading-relaxed">
            We partner with ambitious founders and established enterprises to turn complex technical challenges into durable competitive advantages.
          </p>
        </motion.div>

        {/* Grid Split */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Column: Interactive Code Sandbox with Scroll-In */}
          <motion.div
            initial={{ opacity: 0, x: -35 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-5 bg-[#0B0D14] text-white rounded-2xl sm:rounded-3xl p-5 sm:p-7 border border-slate-800 dark:border-white/15 shadow-2xl shadow-indigo-950/20 relative overflow-hidden flex flex-col justify-between max-w-full font-mono"
          >
            <div>
              <div className="flex items-center justify-between border-b border-white/10 pb-3 mb-4">
                <div className="flex items-center gap-2">
                  <span className="w-2.5 h-2.5 rounded-full bg-rose-500/80" />
                  <span className="w-2.5 h-2.5 rounded-full bg-amber-500/80" />
                  <span className="w-2.5 h-2.5 rounded-full bg-emerald-500/80" />
                  <span className="text-xs text-white/50 ml-1.5">architecture.service.ts</span>
                </div>
                <button
                  onClick={copyCode}
                  className="flex items-center gap-1.5 text-xs text-indigo-300 hover:text-white transition-colors bg-[#5145E6]/20 px-2.5 py-1 rounded-md border border-[#5145E6]/40"
                  title="Copy code"
                >
                  {copiedCode ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
                  <span className="text-[10.5px]">{copiedCode ? "Copied" : "Copy"}</span>
                </button>
              </div>

              <pre className="text-xs sm:text-[13px] leading-relaxed text-indigo-100 overflow-x-auto no-scrollbar max-w-full">
                <code>{sampleSnippet}</code>
              </pre>
            </div>

            <div className="mt-8 pt-4 border-t border-white/10 flex items-center justify-between text-[11px] text-white/60">
              <span className="flex items-center gap-1.5 text-white/80">
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
                Type-safe TypeScript 5.6
              </span>
              <span className="text-indigo-400 font-bold">100% Test Coverage</span>
            </div>
          </motion.div>

          {/* Right Column: 5 Pillars with Staggered Scroll Animation */}
          <div className="lg:col-span-7 space-y-4">
            {pillars.map((pillar, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-30px" }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
                whileHover={{ x: 4 }}
                className="p-5 sm:p-6 rounded-2xl bg-slate-50/80 dark:bg-[#0F111A] border border-slate-200/90 dark:border-white/10 hover:border-[#5145E6] hover:bg-white dark:hover:bg-[#0F111A] transition-all duration-300 group hover:shadow-lg shadow-slate-900/5 hover:shadow-[#5145E6]/10"
              >
                <div className="flex items-start gap-4">
                  <div className="p-2.5 rounded-xl bg-[#EEF2FF] dark:bg-[#5145E6]/15 border border-[#5145E6]/30 group-hover:bg-[#5145E6] group-hover:text-white transition-all shrink-0">
                    {pillar.icon}
                  </div>
                  <div className="space-y-1">
                    <div className="flex items-center gap-2.5 flex-wrap">
                      <h3 className="text-base sm:text-lg font-bold text-slate-900 dark:text-white group-hover:text-[#5145E6] dark:group-hover:text-indigo-300 transition-colors">
                        {pillar.title}
                      </h3>
                      <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-white dark:bg-white/[0.04] text-slate-500 dark:text-[#9496A1] border border-slate-200 dark:border-white/10">
                        {pillar.tag}
                      </span>
                    </div>
                    <p className="text-xs sm:text-sm text-slate-600 dark:text-[#9496A1] leading-relaxed font-sans">
                      {pillar.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

        </div>

      </div>
    </section>
  );
}
