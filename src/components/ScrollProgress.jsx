import React, { useState, useEffect } from "react";
import { motion, useScroll, useSpring } from "framer-motion";
import { ArrowUp, Activity } from "lucide-react";

export default function ScrollProgress() {
  const { scrollYProgress, scrollY } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 120,
    damping: 30,
    restDelta: 0.001
  });

  const [percent, setPercent] = useState(0);
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const unsubscribe = scrollYProgress.on("change", (latest) => {
      setPercent(Math.round(latest * 100));
    });
    return () => unsubscribe();
  }, [scrollYProgress]);

  useEffect(() => {
    const unsubscribeY = scrollY.on("change", (latest) => {
      setShowScrollTop(latest > 280);
    });
    return () => unsubscribeY();
  }, [scrollY]);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  };

  return (
    <>
      {/* 1. Global Viewport Top Reading Progress Bar */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-1 bg-gradient-to-r from-[#5145E6] via-[#7B68EE] to-[#3B82F6] origin-left z-[60] shadow-[0_0_12px_rgba(81,69,230,0.6)]"
        style={{ scaleX }}
      />

      {/* 2. Floating Bottom Scroll Navigator & Back to Top Pill */}
      {showScrollTop && (
        <motion.div
          initial={{ opacity: 0, y: 20, scale: 0.9 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 20, scale: 0.9 }}
          transition={{ duration: 0.25 }}
          className="fixed bottom-6 right-6 z-40 hidden sm:flex items-center gap-2.5 p-1.5 pl-3.5 pr-2 rounded-full bg-white/90 dark:bg-[#0F111A]/90 backdrop-blur-xl border border-slate-200/90 dark:border-white/10 shadow-xl shadow-slate-900/10 dark:shadow-black/50 text-xs font-mono"
        >
          <div className="flex items-center gap-1.5 text-slate-600 dark:text-[#9496A1]">
            <Activity className="w-3.5 h-3.5 text-[#5145E6] animate-pulse" />
            <span className="font-semibold text-slate-800 dark:text-white">{percent}%</span>
            <span className="text-[10px] text-slate-400">SCROLLED</span>
          </div>

          <div className="h-3 w-px bg-slate-200 dark:bg-white/10" />

          <button
            onClick={scrollToTop}
            aria-label="Scroll back to top"
            className="flex items-center gap-1 px-3 py-1.5 rounded-full bg-[#5145E6] hover:bg-[#4135D4] text-white font-semibold shadow-md shadow-[#5145E6]/30 transition-all hover:scale-105"
          >
            <span>Top</span>
            <ArrowUp className="w-3 h-3" />
          </button>
        </motion.div>
      )}
    </>
  );
}

