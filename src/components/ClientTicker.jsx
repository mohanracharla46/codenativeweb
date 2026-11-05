import React from "react";
import { motion } from "framer-motion";
import { GraduationCap, BarChart3, Zap, Car, Users, Flame, Building, Video, ExternalLink } from "lucide-react";

export default function ClientTicker() {
  const brands = [
    {
      name: "CodeNative LMS",
      tag: "TELUGU CODING EDTECH",
      url: "https://codenative.co.in/",
      icon: <GraduationCap className="w-5 h-5" />
    },
    {
      name: "Ira Media Reports",
      tag: "WORK REPORT SYSTEM",
      url: "https://reports.iramediaconcepts.com/login",
      icon: <BarChart3 className="w-5 h-5" />
    },
    {
      name: "GoGo Cars",
      tag: "SELF-DRIVE MOBILITY",
      url: "https://www.gogocar.in/",
      icon: <Car className="w-5 h-5" />
    },
    {
      name: "ReferItUp",
      tag: "VIRAL GROWTH SAAS",
      url: "https://referitup.com/",
      icon: <Zap className="w-5 h-5" />
    },
    {
      name: "Amarnath Sarangula",
      tag: "EXECUTIVE LEADERSHIP",
      url: "https://amarnathsarangula.in/",
      icon: <Users className="w-5 h-5" />
    },
    {
      name: "Palnadu Sri Kshetram",
      tag: "PILGRIMAGE & SEVA PORTAL",
      url: "https://psmsk.com/",
      icon: <Flame className="w-5 h-5" />
    },
    {
      name: "Ira Media Concepts",
      tag: "CREATIVE DIGITAL AGENCY",
      url: "https://iramediaconcepts.com/",
      icon: <Video className="w-5 h-5" />
    },
    {
      name: "Vwish Technologies",
      tag: "SAP & JAVA ACADEMY",
      url: "https://vwishtechnologies.com/",
      icon: <Building className="w-5 h-5" />
    }
  ];

  return (
    <motion.section
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ duration: 0.6 }}
      className="py-12 sm:py-16 overflow-hidden border-b border-slate-200/80 dark:border-white/10 bg-slate-50/50 dark:bg-[#08090E]"
    >
      <div className="max-w-7xl mx-auto px-6 sm:px-8 mb-8 text-center">
        <p className="text-[11.5px] uppercase font-mono tracking-[0.25em] text-slate-500 dark:text-[#9496A1]">
          VERIFIED PRODUCTION CLIENTS &amp; LIVE ECOSYSTEMS
        </p>
      </div>

      {/* Marquee Container with fade masks on sides */}
      <div className="relative w-full overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]">
        <div className="flex w-max animate-marquee hover:[animation-play-state:paused] gap-10 sm:gap-14 items-center py-2">
          {/* First loop */}
          {brands.map((brand, i) => (
            <a
              key={`b1-${i}`}
              href={brand.url}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 px-4 py-2 text-slate-600 dark:text-[#9496A1] hover:text-slate-900 dark:hover:text-white transition-all duration-300 cursor-pointer group"
            >
              <div className="p-2.5 rounded-xl bg-white dark:bg-[#0F111A] border border-slate-200 dark:border-white/10 group-hover:border-[#5145E6] group-hover:text-[#5145E6] shadow-sm group-hover:shadow-[0_0_20px_rgba(81,69,230,0.2)] transition-all duration-300">
                {brand.icon}
              </div>
              <div className="flex flex-col text-left">
                <span className="text-[13.5px] font-semibold tracking-tight text-slate-800 dark:text-white/90 group-hover:text-slate-900 dark:group-hover:text-white transition-colors flex items-center gap-1">
                  <span>{brand.name}</span>
                  <ExternalLink className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity text-[#5145E6]" />
                </span>
                <span className="text-[9.5px] font-mono tracking-widest text-slate-400 dark:text-[#9496A1] group-hover:text-[#5145E6] transition-colors">
                  {brand.tag}
                </span>
              </div>
            </a>
          ))}

          {/* Duplicated loop for seamless infinite scroll */}
          {brands.map((brand, i) => (
            <a
              key={`b2-${i}`}
              href={brand.url}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 px-4 py-2 text-slate-600 dark:text-[#9496A1] hover:text-slate-900 dark:hover:text-white transition-all duration-300 cursor-pointer group"
            >
              <div className="p-2.5 rounded-xl bg-white dark:bg-[#0F111A] border border-slate-200 dark:border-white/10 group-hover:border-[#5145E6] group-hover:text-[#5145E6] shadow-sm group-hover:shadow-[0_0_20px_rgba(81,69,230,0.2)] transition-all duration-300">
                {brand.icon}
              </div>
              <div className="flex flex-col text-left">
                <span className="text-[13.5px] font-semibold tracking-tight text-slate-800 dark:text-white/90 group-hover:text-slate-900 dark:group-hover:text-white transition-colors flex items-center gap-1">
                  <span>{brand.name}</span>
                  <ExternalLink className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity text-[#5145E6]" />
                </span>
                <span className="text-[9.5px] font-mono tracking-widest text-slate-400 dark:text-[#9496A1] group-hover:text-[#5145E6] transition-colors">
                  {brand.tag}
                </span>
              </div>
            </a>
          ))}
        </div>
      </div>
    </motion.section>
  );
}
