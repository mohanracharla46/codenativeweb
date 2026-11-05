import React, { useState, useEffect } from "react";
import { X, ArrowRight, CheckCircle2, Phone, MessageCircle, ExternalLink, Send } from "lucide-react";
import { motion } from "framer-motion";
import confetti from "canvas-confetti";

export default function ContactModal({ isOpen, onClose, initialInterest }) {
  const [projectType, setProjectType] = useState(() => initialInterest || "Website Development");
  const [budgetRange, setBudgetRange] = useState("$15k - $30k");
  const [timeline, setTimeline] = useState("1 - 2 Months");
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    details: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [generatedWaUrl, setGeneratedWaUrl] = useState("");

  const targetWhatsAppNumber = "918464069091";
  const displayPhoneNumber = "+91 84640 69091";

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "Escape") onClose();
    };
    if (isOpen) {
      document.body.style.overflow = "hidden";
      window.addEventListener("keydown", handleKeyDown);
    }
    return () => {
      document.body.style.overflow = "unset";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const constructWhatsAppMessage = () => {
    let msg = `🚀 *New Project Inquiry from CodeNative Web*\n`;
    msg += `────────────────────────\n`;
    msg += `👤 *Name:* ${formData.name.trim() || "N/A"}\n`;
    msg += `📧 *Email:* ${formData.email.trim() || "N/A"}\n`;
    if (formData.phone.trim()) {
      msg += `📱 *Phone / WA:* ${formData.phone.trim()}\n`;
    }
    if (formData.company.trim()) {
      msg += `🏢 *Company:* ${formData.company.trim()}\n`;
    }
    msg += `🛠️ *Discipline:* ${projectType}\n`;
    msg += `💰 *Budget:* ${budgetRange}\n`;
    msg += `⏱️ *Timeline:* ${timeline}\n`;
    if (formData.details.trim()) {
      msg += `────────────────────────\n`;
      msg += `📝 *Project Brief & Goals:*\n${formData.details.trim()}\n`;
    }
    msg += `────────────────────────\n`;
    msg += `🌐 _Dispatched via CodeNative.dev_`;
    return msg;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    const message = constructWhatsAppMessage();
    const waUrl = `https://wa.me/${targetWhatsAppNumber}?text=${encodeURIComponent(message)}`;
    setGeneratedWaUrl(waUrl);

    // Auto-open WhatsApp chat in new window
    try {
      window.open(waUrl, "_blank", "noopener,noreferrer");
    } catch {
      // Fallback handled gracefully in UI
    }

    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);

      // Trigger celebration
      try {
        confetti({
          particleCount: 90,
          spread: 70,
          origin: { y: 0.6 },
          colors: ["#5145E6", "#25D366", "#10B981"]
        });
      } catch {
        // Fallback
      }
    }, 700);
  };

  const resetForm = () => {
    setIsSubmitted(false);
    setFormData({ name: "", email: "", phone: "", company: "", details: "" });
    setGeneratedWaUrl("");
    onClose();
  };

  const projectTypes = [
    "Website Development",
    "Mobile App Development",
    "Custom Software / SaaS",
    "UI/UX Design System",
    "E-commerce Platform",
    "Dedicated Tech Pod"
  ];

  const budgetOptions = [
    "<$15k",
    "$15k - $30k",
    "$30k - $60k",
    "$60k+"
  ];

  const timelineOptions = [
    "Immediate (< 1 mo)",
    "1 - 2 Months",
    "2 - 4 Months",
    "Flexible / Ongoing"
  ];

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
        className="relative w-full max-w-2xl bg-white dark:bg-[#0F111A] rounded-2xl sm:rounded-3xl border border-slate-200/90 dark:border-white/15 shadow-2xl overflow-hidden z-10 max-h-[92vh] flex flex-col text-slate-900 dark:text-white"
      >
        {/* Header */}
        <div className="px-4 sm:px-8 py-4 sm:py-5 border-b border-slate-200 dark:border-white/10 flex items-center justify-between bg-white dark:bg-[#0F111A] shrink-0">
          <div>
            <span className="text-xs font-mono uppercase tracking-widest text-[#5145E6] dark:text-indigo-400 font-semibold">
              START AN ENGAGEMENT
            </span>
            <h3 className="text-lg sm:text-2xl font-bold tracking-tight text-slate-900 dark:text-white mt-0.5">
              Initialize Project Scope
            </h3>
          </div>
          <button
            onClick={onClose}
            className="p-2 rounded-full border border-slate-200 dark:border-white/10 hover:bg-slate-100 dark:hover:bg-white/10 text-slate-500 hover:text-slate-800 dark:text-[#9496A1] dark:hover:text-white transition-colors"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Content */}
        <div className="p-4 sm:p-8 overflow-y-auto no-scrollbar font-mono">
          {isSubmitted ? (
            /* Success confirmation screen */
            <div className="py-8 text-center flex flex-col items-center space-y-4">
              <div className="w-16 h-16 rounded-full bg-emerald-50 dark:bg-emerald-950/60 text-emerald-600 dark:text-emerald-400 flex items-center justify-center border border-emerald-200 dark:border-emerald-500/40">
                <CheckCircle2 className="w-8 h-8" />
              </div>

              <h4 className="text-2xl font-bold text-slate-900 dark:text-white tracking-tight font-sans">
                Project brief formatted &amp; dispatched!
              </h4>

              <p className="text-sm text-slate-600 dark:text-[#9496A1] max-w-md leading-relaxed font-sans">
                Thank you, <span className="font-semibold text-slate-900 dark:text-white">{formData.name || "partner"}</span>. Your project brief has been formatted and routed to our WhatsApp engineering desk at <span className="font-bold text-slate-900 dark:text-white font-mono">{displayPhoneNumber}</span>.
              </p>

              {/* Scope Summary Card */}
              <div className="p-4 rounded-2xl bg-slate-50 dark:bg-[#08090E] border border-slate-200 dark:border-white/10 text-xs text-slate-600 dark:text-[#9496A1] max-w-sm w-full text-left space-y-1.5 mt-2 font-mono">
                <div><strong className="text-slate-900 dark:text-white">Selected Scope:</strong> {projectType}</div>
                <div><strong className="text-slate-900 dark:text-white">Target Budget:</strong> {budgetRange}</div>
                <div><strong className="text-slate-900 dark:text-white">Timeline:</strong> {timeline}</div>
                <div><strong className="text-slate-900 dark:text-white">Email:</strong> {formData.email}</div>
                {formData.phone && <div><strong className="text-slate-900 dark:text-white">Phone / WA:</strong> {formData.phone}</div>}
              </div>

              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row items-center gap-3 pt-2 w-full max-w-sm">
                {generatedWaUrl && (
                  <a
                    href={generatedWaUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full bg-[#25D366] hover:bg-[#20BD5A] text-white text-sm font-semibold shadow-md shadow-emerald-500/30 transition-all font-mono"
                  >
                    <MessageCircle className="w-4 h-4" />
                    <span>Open WhatsApp Message</span>
                    <ExternalLink className="w-3.5 h-3.5 ml-0.5" />
                  </a>
                )}

                <button
                  onClick={resetForm}
                  className="w-full sm:w-auto px-6 py-3 rounded-full bg-slate-100 dark:bg-white/10 hover:bg-slate-200 dark:hover:bg-white/20 text-slate-800 dark:text-white text-sm font-semibold transition-colors font-mono"
                >
                  Done
                </button>
              </div>
            </div>
          ) : (
            /* Inquiry Form */
            <form onSubmit={handleSubmit} className="space-y-6">

              {/* Direct Quick Channels Bar */}
              <div className="p-3.5 rounded-2xl bg-emerald-50/80 dark:bg-emerald-950/25 border border-emerald-500/30 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs">
                <div className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse shrink-0" />
                  <span className="text-slate-700 dark:text-emerald-300 font-mono">
                    Submitting this form routes directly to WhatsApp ({displayPhoneNumber}).
                  </span>
                </div>
                <div className="flex items-center gap-2 shrink-0">
                  <a
                    href={`tel:+${targetWhatsAppNumber}`}
                    className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-white dark:bg-white/10 border border-slate-200 dark:border-white/10 text-slate-900 dark:text-white font-semibold hover:border-[#5145E6] transition-colors"
                  >
                    <Phone className="w-3.5 h-3.5 text-[#5145E6]" />
                    <span>Call Us</span>
                  </a>
                  <a
                    href={`https://wa.me/${targetWhatsAppNumber}?text=Hi%20CodeNative%2C%20I%20would%20like%20to%20discuss%20a%20project.`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-[#25D366] hover:bg-[#20BD5A] text-white font-bold transition-colors"
                  >
                    <MessageCircle className="w-3.5 h-3.5" />
                    <span>WhatsApp</span>
                  </a>
                </div>
              </div>
              
              {/* 1. Project Type */}
              <div>
                <label className="text-xs font-mono font-semibold uppercase tracking-wider text-[#5145E6] dark:text-indigo-400 block mb-2.5">
                  1. Target Software Discipline:
                </label>
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
                  {projectTypes.map((type) => (
                    <button
                      key={type}
                      type="button"
                      onClick={() => setProjectType(type)}
                      className={`p-2.5 rounded-xl text-xs font-medium border text-left transition-all ${
                        projectType === type
                          ? "bg-[#5145E6] text-white border-[#5145E6] shadow-md shadow-[#5145E6]/30"
                          : "bg-slate-50 dark:bg-[#08090E] text-slate-700 dark:text-[#9496A1] border-slate-200 dark:border-white/10 hover:border-slate-300"
                      }`}
                    >
                      {type}
                    </button>
                  ))}
                </div>
              </div>

              {/* 2. Budget Range */}
              <div>
                <label className="text-xs font-mono font-semibold uppercase tracking-wider text-[#5145E6] dark:text-indigo-400 block mb-2.5">
                  2. Approximate Investment:
                </label>
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                  {budgetOptions.map((budget) => (
                    <button
                      key={budget}
                      type="button"
                      onClick={() => setBudgetRange(budget)}
                      className={`p-2.5 rounded-xl text-xs font-medium border text-center transition-all ${
                        budgetRange === budget
                          ? "bg-[#5145E6] text-white border-[#5145E6] shadow-md shadow-[#5145E6]/30"
                          : "bg-slate-50 dark:bg-[#08090E] text-slate-700 dark:text-[#9496A1] border-slate-200 dark:border-white/10 hover:border-slate-300"
                      }`}
                    >
                      {budget}
                    </button>
                  ))}
                </div>
              </div>

              {/* 3. Timeline */}
              <div>
                <label className="text-xs font-mono font-semibold uppercase tracking-wider text-[#5145E6] dark:text-indigo-400 block mb-2.5">
                  3. Deployment Window:
                </label>
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                  {timelineOptions.map((opt) => (
                    <button
                      key={opt}
                      type="button"
                      onClick={() => setTimeline(opt)}
                      className={`p-2.5 rounded-xl text-[11px] font-medium border text-center transition-all ${
                        timeline === opt
                          ? "bg-[#5145E6] text-white border-[#5145E6] shadow-md shadow-[#5145E6]/30"
                          : "bg-slate-50 dark:bg-[#08090E] text-slate-700 dark:text-[#9496A1] border-slate-200 dark:border-white/10 hover:border-slate-300"
                      }`}
                    >
                      {opt}
                    </button>
                  ))}
                </div>
              </div>

              {/* 4. Contact Inputs */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 font-sans">
                <div>
                  <label className="text-xs font-mono font-semibold uppercase tracking-wider text-slate-600 dark:text-[#9496A1] block mb-1.5">
                    Your Name *
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="Jane Doe"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full px-4 py-2.5 rounded-xl bg-slate-50 dark:bg-[#08090E] border border-slate-200 dark:border-white/10 text-base sm:text-sm text-slate-900 dark:text-white placeholder:text-slate-400 dark:placeholder:text-white/30 focus:outline-none focus:border-[#5145E6] transition-colors"
                  />
                </div>

                <div>
                  <label className="text-xs font-mono font-semibold uppercase tracking-wider text-slate-600 dark:text-[#9496A1] block mb-1.5">
                    Work Email *
                  </label>
                  <input
                    type="email"
                    required
                    placeholder="jane@company.com"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full px-4 py-2.5 rounded-xl bg-slate-50 dark:bg-[#08090E] border border-slate-200 dark:border-white/10 text-base sm:text-sm text-slate-900 dark:text-white placeholder:text-slate-400 dark:placeholder:text-white/30 focus:outline-none focus:border-[#5145E6] transition-colors"
                  />
                </div>
              </div>

              {/* Phone & Company */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 font-sans">
                <div>
                  <label className="text-xs font-mono font-semibold uppercase tracking-wider text-slate-600 dark:text-[#9496A1] block mb-1.5">
                    Phone / WhatsApp Number (Optional)
                  </label>
                  <input
                    type="tel"
                    placeholder="+91 90000 00000"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="w-full px-4 py-2.5 rounded-xl bg-slate-50 dark:bg-[#08090E] border border-slate-200 dark:border-white/10 text-base sm:text-sm text-slate-900 dark:text-white placeholder:text-slate-400 dark:placeholder:text-white/30 focus:outline-none focus:border-[#5145E6] transition-colors"
                  />
                </div>

                <div>
                  <label className="text-xs font-mono font-semibold uppercase tracking-wider text-slate-600 dark:text-[#9496A1] block mb-1.5">
                    Company or Project Name
                  </label>
                  <input
                    type="text"
                    placeholder="Acme Corp / Stealth Startup"
                    value={formData.company}
                    onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                    className="w-full px-4 py-2.5 rounded-xl bg-slate-50 dark:bg-[#08090E] border border-slate-200 dark:border-white/10 text-base sm:text-sm text-slate-900 dark:text-white placeholder:text-slate-400 dark:placeholder:text-white/30 focus:outline-none focus:border-[#5145E6] transition-colors"
                  />
                </div>
              </div>

              {/* Project Goals */}
              <div className="font-sans">
                <label className="text-xs font-mono font-semibold uppercase tracking-wider text-slate-600 dark:text-[#9496A1] block mb-1.5">
                  Project Goals &amp; Architecture Requirements
                </label>
                <textarea
                  rows={3}
                  placeholder="Briefly describe what you're building, key features, integrations, or throughput expectations..."
                  value={formData.details}
                  onChange={(e) => setFormData({ ...formData, details: e.target.value })}
                  className="w-full px-4 py-2.5 rounded-xl bg-slate-50 dark:bg-[#08090E] border border-slate-200 dark:border-white/10 text-base sm:text-sm text-slate-900 dark:text-white placeholder:text-slate-400 dark:placeholder:text-white/30 focus:outline-none focus:border-[#5145E6] transition-colors"
                />
              </div>

              {/* Submit CTA */}
              <div className="pt-2 font-mono">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full py-4 rounded-full bg-[#5145E6] hover:bg-[#4135D4] text-white text-sm font-semibold active:scale-[0.99] transition-all flex items-center justify-center gap-2 shadow-lg shadow-[#5145E6]/30 disabled:opacity-70"
                >
                  {isSubmitting ? (
                    <span>Formatting &amp; routing to WhatsApp...</span>
                  ) : (
                    <>
                      <Send className="w-4 h-4" />
                      <span>Submit &amp; Send to WhatsApp (+91 84640 69091)</span>
                      <ArrowRight className="w-4 h-4 ml-1" />
                    </>
                  )}
                </button>
                <p className="text-center text-[11px] text-slate-500 dark:text-[#9496A1] mt-3">
                  Direct senior engineer dispatch • Mutual NDA upon request • No spam guarantee
                </p>
              </div>

            </form>
          )}
        </div>

      </motion.div>
    </div>
  );
}
