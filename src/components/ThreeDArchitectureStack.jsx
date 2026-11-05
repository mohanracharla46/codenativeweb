import React, { useState } from "react";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { Network, ShieldCheck, Cpu, Database, CheckCircle2, Sparkles } from "lucide-react";

const STACK_TIERS = [
  {
    id: "edge",
    level: "Tier 04 (Top)",
    title: "01. Global Edge & CDN",
    badge: "< 14ms Latency",
    icon: Network,
    elevation: 200,
    accent: "from-indigo-500/20 to-sky-500/20",
    border: "border-indigo-400/50",
    glow: "shadow-indigo-500/30",
    chips: ["320+ PoPs", "DDoS Shield", "HTTP/3"]
  },
  {
    id: "gateway",
    level: "Tier 03",
    title: "02. API Gateway & Auth",
    badge: "< 5ms Verification",
    icon: ShieldCheck,
    elevation: 130,
    accent: "from-blue-500/20 to-indigo-500/20",
    border: "border-blue-400/50",
    glow: "shadow-blue-500/30",
    chips: ["OAuth2 Ed25519", "Envoy Mesh", "Rate Limiter"]
  },
  {
    id: "services",
    level: "Tier 02",
    title: "03. High-Throughput Engines",
    badge: "100k+ req/sec",
    icon: Cpu,
    elevation: 65,
    accent: "from-violet-500/20 to-purple-500/20",
    border: "border-violet-400/50",
    glow: "shadow-violet-500/30",
    chips: ["Go 1.23", "gRPC Binary", "Goroutines"]
  },
  {
    id: "data",
    level: "Tier 01 (Base)",
    title: "04. Data & Vector Mesh",
    badge: "< 8ms ACID",
    icon: Database,
    elevation: 0,
    accent: "from-emerald-500/20 to-teal-500/20",
    border: "border-emerald-400/50",
    glow: "shadow-emerald-500/30",
    chips: ["PostgreSQL 16", "pgvector", "Redis 7"]
  }
];

export default function ThreeDArchitectureStack({ onSelectLayer, activeLayerId = "edge" }) {
  const [hoveredTier, setHoveredTier] = useState(null);

  // Mouse tilt physics for the 3D isometric plane
  const mouseX = useMotionValue(0.5);
  const mouseY = useMotionValue(0.5);

  const springConfig = { damping: 25, stiffness: 220 };
  const smoothX = useSpring(mouseX, springConfig);
  const smoothY = useSpring(mouseY, springConfig);

  const rotateX = useTransform(smoothY, [0, 1], [62, 54]);
  const rotateZ = useTransform(smoothX, [0, 1], [-44, -32]);

  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    mouseX.set((e.clientX - rect.left) / rect.width);
    mouseY.set((e.clientY - rect.top) / rect.height);
  };

  const handleMouseLeave = () => {
    mouseX.set(0.5);
    mouseY.set(0.5);
    setHoveredTier(null);
  };

  return (
    <div
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className="relative w-full h-[480px] sm:h-[540px] flex items-center justify-center select-none overflow-hidden rounded-3xl bg-slate-900/90 dark:bg-[#070913] border border-slate-800 dark:border-white/10 shadow-2xl"
      style={{ perspective: 1200 }}
    >
      {/* 3D Isometric Laser Grid Floor */}
      <div className="absolute inset-0 bg-grid-pattern opacity-30 pointer-events-none" />

      {/* Floating 3D System Header Pill */}
      <div className="absolute top-5 left-5 z-30 flex items-center gap-2 px-3 py-1.5 rounded-full bg-black/60 border border-white/15 backdrop-blur-md text-[11px] font-mono text-white">
        <Sparkles className="w-3.5 h-3.5 text-[#5145E6]" />
        <span>Interactive 3D Isometric Infrastructure</span>
      </div>

      <div className="absolute top-5 right-5 z-30 flex items-center gap-2 px-3 py-1.5 rounded-full bg-emerald-950/60 border border-emerald-500/30 text-[10.5px] font-mono text-emerald-400">
        <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-ping" />
        <span>3D HARDWARE ACCELERATED</span>
      </div>

      {/* Isometric 3D Space Container */}
      <motion.div
        style={{
          rotateX,
          rotateZ,
          transformStyle: "preserve-3d"
        }}
        className="relative w-[300px] sm:w-[360px] h-[300px] sm:h-[360px] transition-transform duration-100"
      >
        {/* Animated 3D Light Pillar shooting through tiers */}
        <div
          style={{
            transform: "translateZ(0px) rotateX(-90deg)",
            transformOrigin: "bottom center"
          }}
          className="absolute inset-x-1/2 bottom-1/2 w-1.5 h-[260px] -translate-x-1/2 bg-gradient-to-t from-emerald-500 via-[#5145E6] to-sky-400 opacity-70 blur-[1px] pointer-events-none"
        />

        {/* 4 Stacked Isometric Layers */}
        {STACK_TIERS.map((tier) => {
          const isSelected = activeLayerId === tier.id;
          const isHovered = hoveredTier === tier.id;
          const IconComp = tier.icon;

          // Lift layer on hover / selection
          const currentElevation = isHovered || isSelected ? tier.elevation + 24 : tier.elevation;

          return (
            <motion.div
              key={tier.id}
              onClick={() => onSelectLayer && onSelectLayer(tier.id)}
              onMouseEnter={() => setHoveredTier(tier.id)}
              onMouseLeave={() => setHoveredTier(null)}
              animate={{
                z: currentElevation,
              }}
              transition={{ type: "spring", stiffness: 300, damping: 25 }}
              style={{
                transformStyle: "preserve-3d",
                translateZ: `${currentElevation}px`
              }}
              className={`absolute inset-0 rounded-2xl cursor-pointer p-5 transition-all duration-300 backdrop-blur-xl border ${
                isSelected
                  ? "bg-gradient-to-br from-[#5145E6]/40 via-indigo-900/60 to-black/80 border-[#5145E6] shadow-2xl ring-2 ring-[#5145E6]"
                  : isHovered
                  ? "bg-gradient-to-br from-white/15 to-black/80 border-indigo-400/70 shadow-xl"
                  : "bg-gradient-to-br from-white/10 to-black/70 border-white/20 shadow-lg"
              }`}
            >
              {/* Glass surface reflection */}
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-t from-transparent via-white/5 to-white/10 pointer-events-none" />

              {/* Layer Content */}
              <div className="relative z-10 flex flex-col justify-between h-full text-white font-mono">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <div className="p-2 rounded-xl bg-white/10 border border-white/15">
                      <IconComp className="w-4 h-4 text-white" />
                    </div>
                    <div>
                      <span className="text-[10px] text-white/50 block">{tier.level}</span>
                      <h4 className="text-xs sm:text-sm font-bold text-white tracking-tight">{tier.title}</h4>
                    </div>
                  </div>

                  <span className="text-[10px] px-2 py-0.5 rounded-full bg-white/10 border border-white/20 text-emerald-300 font-semibold">
                    {tier.badge}
                  </span>
                </div>

                {/* Tech Chips */}
                <div className="flex flex-wrap gap-1.5 mt-2">
                  {tier.chips.map((chip, cIdx) => (
                    <span
                      key={cIdx}
                      className="text-[9.5px] px-2 py-0.5 rounded bg-black/40 border border-white/10 text-white/80"
                    >
                      {chip}
                    </span>
                  ))}
                </div>

                {/* Active Indicator Bar */}
                <div className="flex items-center justify-between text-[10px] text-white/60 pt-2 border-t border-white/10">
                  <span className="flex items-center gap-1">
                    <CheckCircle2 className="w-3 h-3 text-emerald-400" />
                    <span>Click to inspect code</span>
                  </span>
                  <span className="text-[#5145E6] font-bold">Z: +{currentElevation}px</span>
                </div>
              </div>
            </motion.div>
          );
        })}
      </motion.div>

      {/* Bottom Hint */}
      <div className="absolute bottom-4 inset-x-0 flex justify-center pointer-events-none">
        <span className="text-[11px] font-mono text-white/50 bg-black/60 px-3.5 py-1 rounded-full border border-white/10 backdrop-blur-md">
          Move cursor to tilt 3D perspective • Click any tier to switch architecture spec
        </span>
      </div>
    </div>
  );
}
