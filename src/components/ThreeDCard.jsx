import React, { useRef, useState } from "react";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";

export default function ThreeDCard({
  children,
  className = "",
  maxTilt = 8,
  glare = true,
  onClick,
  style = {}
}) {
  const cardRef = useRef(null);
  const [isHovered, setIsHovered] = useState(false);

  const mouseX = useMotionValue(0.5);
  const mouseY = useMotionValue(0.5);

  const springConfig = { damping: 20, stiffness: 260, mass: 0.5 };
  const smoothMouseX = useSpring(mouseX, springConfig);
  const smoothMouseY = useSpring(mouseY, springConfig);

  // 3D rotation transforms
  const rotateX = useTransform(smoothMouseY, [0, 1], [maxTilt, -maxTilt]);
  const rotateY = useTransform(smoothMouseX, [0, 1], [-maxTilt, maxTilt]);

  // Glare position
  const glareX = useTransform(smoothMouseX, [0, 1], [0, 100]);
  const glareY = useTransform(smoothMouseY, [0, 1], [0, 100]);

  // Unconditionally compute background gradient for glare
  const glareBackground = useTransform(
    [glareX, glareY],
    ([x, y]) =>
      `radial-gradient(circle 340px at ${x}% ${y}%, rgba(81, 69, 230, 0.16), rgba(255, 255, 255, 0.08) 30%, transparent 80%)`
  );

  const handleMouseMove = (e) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width;
    const y = (e.clientY - rect.top) / rect.height;
    mouseX.set(x);
    mouseY.set(y);
  };

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    mouseX.set(0.5);
    mouseY.set(0.5);
  };

  return (
    <div
      style={{ perspective: 1100 }}
      className="relative"
    >
      <motion.div
        ref={cardRef}
        onClick={onClick}
        onMouseMove={handleMouseMove}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        style={{
          rotateX,
          rotateY,
          transformStyle: "preserve-3d",
          ...style
        }}
        whileHover={{ scale: 1.015 }}
        transition={{ duration: 0.2 }}
        className={`relative ${className}`}
      >
        {children}

        {/* Dynamic Specular 3D Glare Sheen */}
        {glare && (
          <motion.div
            className="pointer-events-none absolute inset-0 rounded-[inherit] overflow-hidden transition-opacity duration-300 z-30"
            style={{
              opacity: isHovered ? 1 : 0,
              background: glareBackground
            }}
          />
        )}
      </motion.div>
    </div>
  );
}
