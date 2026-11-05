import React from "react";
import { motion } from "framer-motion";
import { CheckCircle2 } from "lucide-react";
import ThreeDCard from "./ThreeDCard";

export default function Testimonials() {
  const testimonials = [
    {
      quote: "CodeNative engineered our internal reporting system with military-grade role governance and instant audit exports. It cut our daily reporting overhead by 70% and gave our leadership instant visibility into agency velocity.",
      role: "Operations Leadership",
      company: "Ira Media Concepts",
      project: "Work Report & Analytics System",
      metric: "-70% Operational Reporting Overhead",
      initials: "IM"
    },
    {
      quote: "Our booking completion time dropped below 2 minutes after launching the mobile-first fleet reservation engine CodeNative built. Their attention to real-time vehicle locking and instant digital KYC transformed our rental operations.",
      role: "Founding & Fleet Management Team",
      company: "GoGo Cars Hyderabad",
      project: "Mobility & Fleet Booking Engine",
      metric: "92% Average Fleet Utilization",
      initials: "GG"
    },
    {
      quote: "The viral referral attribution engine and automated payout pipeline CodeNative engineered handle tens of thousands of conversion nodes with sub-50ms latency. Zero click fraud and rock-solid architectural reliability.",
      role: "Product & Growth Engineering",
      company: "ReferItUp Network",
      project: "Viral Referral & Payout SaaS",
      metric: "+38% Referral Conversion Rate",
      initials: "RU"
    }
  ];

  return (
    <section className="py-24 sm:py-32 border-b border-slate-200/80 dark:border-white/10 bg-white dark:bg-[#08090E] relative">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">

        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-40px" }}
          transition={{ duration: 0.6 }}
          className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16 sm:mb-20"
        >
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#EEF2FF] dark:bg-[#5145E6]/15 border border-[#5145E6]/30 text-xs font-mono font-semibold uppercase tracking-wider text-[#5145E6] dark:text-indigo-300 mb-3">
              <span className="w-1.5 h-1.5 rounded-full bg-[#5145E6]" />
              CLIENT REVIEWS &amp; TESTIMONIALS
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-slate-900 dark:text-white">
              What partners &amp; engineering leaders say.
            </h2>
            <p className="text-base sm:text-lg text-slate-600 dark:text-[#9496A1] mt-3 max-w-xl">
              Proven deliverables, scalable codebases, and lasting technology partnerships.
            </p>
          </div>

          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-50 dark:bg-emerald-950/40 border border-emerald-200 dark:border-emerald-500/30 text-xs font-mono text-emerald-700 dark:text-emerald-400 self-start md:self-auto font-semibold shadow-sm">
            <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 dark:text-emerald-400" />
            <span>Verified Client Feedback</span>
          </div>
        </motion.div>

        {/* Minimalist Testimonial Cards with 3D Tilt & Staggered Scroll-In */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 sm:gap-8 items-stretch">
          {testimonials.map((t, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 35 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.55, delay: idx * 0.12 }}
              className="h-full"
            >
              <ThreeDCard
                maxTilt={6}
                glare={true}
                className="h-full p-6 sm:p-8 rounded-2xl sm:rounded-3xl bg-slate-50/80 dark:bg-[#0F111A] border border-slate-200/90 dark:border-white/10 hover:border-[#5145E6] transition-all duration-300 flex flex-col justify-between shadow-sm hover:shadow-lg shadow-slate-900/5 hover:shadow-[#5145E6]/10"
              >
                <div>
                  {/* Metric pill at top */}
                  <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white dark:bg-white/[0.04] border border-slate-200 dark:border-white/10 text-xs font-mono font-semibold text-slate-800 dark:text-white mb-5 sm:mb-6 shadow-sm">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
                    <span>{t.metric}</span>
                  </div>

                  {/* Quote */}
                  <p className="text-sm sm:text-base text-slate-700 dark:text-white/90 leading-relaxed mb-6 sm:mb-8 font-normal font-sans">
                    "{t.quote}"
                  </p>
                </div>

                {/* Organization Info (Clean, No Individual Names) */}
                <div className="pt-6 border-t border-slate-200/80 dark:border-white/5 flex items-center justify-between gap-3">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl bg-white dark:bg-white/[0.05] border border-slate-200 dark:border-white/10 flex items-center justify-center text-[#5145E6] dark:text-indigo-400 font-bold font-mono text-sm shrink-0 shadow-sm">
                      {t.initials}
                    </div>
                    <div>
                      <h4 className="text-sm font-bold text-slate-900 dark:text-white">
                        {t.company}
                      </h4>
                      <p className="text-xs text-slate-500 dark:text-[#9496A1]">
                        {t.role}
                      </p>
                    </div>
                  </div>

                  <div className="flex items-center gap-1 text-[11px] font-mono text-emerald-600 dark:text-emerald-400 font-semibold bg-emerald-50 dark:bg-emerald-950/40 border border-emerald-200 dark:border-emerald-500/30 px-2.5 py-1 rounded-full shrink-0">
                    <CheckCircle2 className="w-3.5 h-3.5" />
                    <span>Verified</span>
                  </div>
                </div>
              </ThreeDCard>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
