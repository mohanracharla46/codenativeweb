import React, { useEffect, useState } from "react";
import { motion, useSpring } from "framer-motion";

export default function AmbientCursorFollower() {
  const [isVisible, setIsVisible] = useState(false);

  const springConfig = { damping: 28, stiffness: 220, mass: 0.6 };
  const cursorX = useSpring(-200, springConfig);
  const cursorY = useSpring(-200, springConfig);

  useEffect(() => {
    // Only activate on pointer-fine devices (desktops/laptops, not touch screens)
    if (window.matchMedia("(pointer: coarse)").matches) return;

    const handleMouseMove = (e) => {
      cursorX.set(e.clientX - 160);
      cursorY.set(e.clientY - 160);
      if (!isVisible) setIsVisible(true);
    };

    const handleMouseLeave = () => {
      setIsVisible(false);
    };

    window.addEventListener("mousemove", handleMouseMove, { passive: true });
    document.addEventListener("mouseleave", handleMouseLeave);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, [cursorX, cursorY, isVisible]);

  if (!isVisible) return null;

  return (
    <motion.div
      style={{
        x: cursorX,
        y: cursorY,
      }}
      className="fixed top-0 left-0 w-[320px] h-[320px] rounded-full pointer-events-none z-10 transition-opacity duration-500 opacity-20 dark:opacity-35 blur-3xl bg-gradient-to-tr from-[#5145E6] via-[#7B68EE] to-[#38BDF8]"
      aria-hidden="true"
    />
  );
}

