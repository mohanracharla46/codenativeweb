import React, { useState } from "react";
import { Plus, ArrowUpRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { faqs } from "../data/faqData";

export default function FAQ({ onOpenContact }) {
  const [openIndex, setOpenIndex] = useState(0); // Open first by default

  const toggleFAQ = (idx) => {
    setOpenIndex(openIndex === idx ? -1 : idx);
  };

  return (
    <section id="faqs" className="py-24 sm:py-32 border-b border-slate-200/80 dark:border-white/10 bg-slate-50/50 dark:bg-[#08090E] relative">
      <div className="max-w-4xl mx-auto px-6 sm:px-8">
        
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-40px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16 sm:mb-20"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#EEF2FF] dark:bg-[#5145E6]/15 border border-[#5145E6]/30 text-xs font-mono font-semibold uppercase tracking-wider text-[#5145E6] dark:text-indigo-300 mb-3">
            <span className="w-1.5 h-1.5 rounded-full bg-[#5145E6]" />
            TECHNICAL &amp; CONTRACTUAL FAQS
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-slate-900 dark:text-white">
            Frequently asked questions.
          </h2>
          <p className="text-base sm:text-lg text-slate-600 dark:text-[#9496A1] mt-3 max-w-xl mx-auto">
            Everything you need to know about engineering sprints, code ownership, and collaboration.
          </p>
        </motion.div>

        {/* Interactive Accordion List */}
        <div className="divide-y divide-slate-200/80 dark:divide-white/10 border-y border-slate-200/80 dark:border-white/10">
          {faqs.map((faq, idx) => {
            const isOpen = openIndex === idx;

            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-20px" }}
                transition={{ duration: 0.4, delay: idx * 0.05 }}
                className="transition-colors duration-200"
              >
                <button
                  onClick={() => toggleFAQ(idx)}
                  className="w-full py-6 sm:py-8 flex items-center justify-between gap-4 text-left group focus:outline-none"
                  aria-expanded={isOpen}
                >
                  <span className="text-base sm:text-lg md:text-xl font-bold tracking-tight text-slate-900 dark:text-white group-hover:text-[#5145E6] dark:group-hover:text-indigo-300 transition-colors">
                    {faq.question}
                  </span>

                  <div
                    className={`w-9 h-9 rounded-full border border-slate-200 dark:border-white/10 flex items-center justify-center shrink-0 transition-all duration-300 ${
                      isOpen
                        ? "bg-[#5145E6] text-white rotate-45 border-[#5145E6] shadow-md shadow-[#5145E6]/30"
                        : "bg-slate-100 dark:bg-white/[0.04] text-slate-600 dark:text-[#9496A1] group-hover:border-[#5145E6] group-hover:text-[#5145E6]"
                    }`}
                  >
                    <Plus className="w-4 h-4 transition-transform duration-300" />
                  </div>
                </button>

                <AnimatePresence>
                  {isOpen && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: "auto" }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
                      className="overflow-hidden"
                    >
                      <div className="pb-8 pt-1 text-sm sm:text-base text-slate-600 dark:text-[#9496A1] leading-relaxed pr-8">
                        <p>{faq.answer}</p>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </div>

        {/* Still have questions banner */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mt-12 p-6 rounded-2xl bg-white dark:bg-[#0F111A] border border-slate-200/90 dark:border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left shadow-sm"
        >
          <div>
            <h4 className="text-sm font-bold text-slate-900 dark:text-white">Have an architecture question not listed here?</h4>
            <p className="text-xs text-slate-500 dark:text-[#9496A1] mt-0.5">We're happy to discuss specific architectural or contractual needs directly with your technical team.</p>
          </div>
          <button
            onClick={() => onOpenContact("General Technical FAQ Inquiry")}
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-[#5145E6] hover:bg-[#4135D4] text-white text-xs font-semibold shadow-md shadow-[#5145E6]/30 transition-colors font-mono shrink-0"
          >
            <span>Ask senior engineers</span>
            <ArrowUpRight className="w-3.5 h-3.5" />
          </button>
        </motion.div>

      </div>
    </section>
  );
}
