import React, { useState, useEffect } from "react";
import { ArrowUpRight, ArrowDown, Terminal, Cpu, Smartphone, Globe, Play, Activity, Zap, CheckCircle2 } from "lucide-react";
import { motion, useScroll, useTransform } from "framer-motion";
import ThreeHeroCanvas from "./ThreeHeroCanvas";
import ThreeDCard from "./ThreeDCard";

const TERMINAL_COMMANDS = [
  "codenative build --target=production",
  "deploy --regions=[hyderabad,global] --scale=auto",
  "compile --native=[ios,android] --strict",
  "benchmark --engine=v8 --latency=14ms"
];

const CODE_TABS = {
  web: {
    shortTitle: "Web",
    title: "Web Platform",
    badge: "Next.js 15 & React 19",
    file: "AppEngine.tsx",
    icon: Globe,
    stats: { latency: "14ms", throughput: "50k req/s", coverage: "98.4%" },
    code: `// High-Concurrency Edge Web Engine
import { defineRoute, cacheEdge } from '@codenative/web';

export const GET = defineRoute({
  concurrency: 50_000,
  cache: cacheEdge({ ttl: '1h', staleWhileRevalidate: true }),
  async handler({ req, telemetry }) {
    const session = await req.auth.verifyTenant();
    telemetry.recordTrace('edge_handshake', session.region);
    return Response.json({ status: 200, edge: 'ONLINE', latency: '14ms' });
  }
});`
  },
  mobile: {
    shortTitle: "Mobile",
    title: "Mobile Native",
    badge: "Swift 6 & Kotlin Multiplatform",
    file: "BiometricVault.swift",
    icon: Smartphone,
    stats: { latency: "8ms", throughput: "Native 60fps", coverage: "100%" },
    code: `// Biometric Vault & Native Hardware Core
import Foundation
import LocalAuthentication
import CodeNativeMobile

@objc(BiometricVault)
public class BiometricVault: NSObject {
  @objc public func authenticateUser(_ resolve: @escaping RCTPromiseResolveBlock) {
    let context = LAContext()
    context.evaluatePolicy(.deviceOwnerAuthenticationWithBiometrics) { success, _ in
      resolve(["authenticated": success, "biometric": "FaceID", "secure": true])
    }
  }
}`
  },
  backend: {
    shortTitle: "Cloud",
    title: "Cloud & APIs",
    badge: "Go 1.23 & gRPC Microservices",
    file: "stream_pipeline.go",
    icon: Cpu,
    stats: { latency: "18ms", throughput: "25k events/s", coverage: "99.99%" },
    code: `// Distributed Real-Time Telemetry Pipeline
package main

import "github.com/codenative/cluster"

func HandleEventStream(stream cluster.EventStream) error {
    pipeline := cluster.NewPipeline(cluster.WithBuffer(50_000))
    return pipeline.Process(stream, func(payload cluster.Payload) {
        payload.DispatchFastAck(stream.Context())
    })
}`
  }
};

export default function Hero({ onOpenContact }) {
  const [activeTab, setActiveTab] = useState("web");
  const [typedCommand, setTypedCommand] = useState("");
  const [isCompiling, setIsCompiling] = useState(false);
  const [buildLogs, setBuildLogs] = useState([
    "✓ All 48 unit & integration tests passing",
    "✓ Core Web Vitals audit: 99/100 performance score",
    "✓ Ready for instantaneous production release"
  ]);

  const { scrollY } = useScroll();
  const workbenchY = useTransform(scrollY, [0, 600], [0, 45]);
  const heroOpacity = useTransform(scrollY, [0, 600], [1, 0.92]);

  useEffect(() => {
    let commandIdx = 0;
    let charIdx = 0;
    let isDeleting = false;
    let timeoutId;

    const typeLoop = () => {
      const current = TERMINAL_COMMANDS[commandIdx];

      if (!isDeleting) {
        setTypedCommand(current.substring(0, charIdx + 1));
        charIdx++;
        if (charIdx === current.length) {
          isDeleting = true;
          timeoutId = setTimeout(typeLoop, 2400);
          return;
        }
        timeoutId = setTimeout(typeLoop, 45);
      } else {
        setTypedCommand(current.substring(0, charIdx - 1));
        charIdx--;
        if (charIdx === 0) {
          isDeleting = false;
          commandIdx = (commandIdx + 1) % TERMINAL_COMMANDS.length;
          timeoutId = setTimeout(typeLoop, 400);
          return;
        }
        timeoutId = setTimeout(typeLoop, 25);
      }
    };

    timeoutId = setTimeout(typeLoop, 500);
    return () => clearTimeout(timeoutId);
  }, []);

  const handleSimulateBuild = () => {
    setIsCompiling(true);
    setBuildLogs([
      "⚡ Optimizing native binary bytecode...",
      "⚡ Verifying zero-downtime routing across 32 edge regions...",
      "⚡ Generating immutable build artifacts..."
    ]);

    setTimeout(() => {
      setBuildLogs([
        "✓ Compiled in 118ms (0.12s total duration)",
        "✓ 0 vulnerabilities detected • SOC2 / HIPAA verified",
        "✓ Deployed successfully to Edge production cluster"
      ]);
      setIsCompiling(false);
    }, 1100);
  };

  const scrollToWork = (e) => {
    e.preventDefault();
    const workSection = document.getElementById("work");
    if (workSection) {
      const offsetTop = workSection.getBoundingClientRect().top + window.pageYOffset - 80;
      window.scrollTo({
        top: offsetTop,
        behavior: "smooth"
      });
    }
  };

  const activeSnippet = CODE_TABS[activeTab];

  return (
    <motion.section style={{ opacity: heroOpacity }} className="relative pt-32 sm:pt-36 md:pt-40 pb-20 sm:pb-28 lg:pb-32 overflow-hidden">
      {/* Interactive 3D Holographic Core Canvas */}
      <ThreeHeroCanvas />

      {/* Subtle background matrix grid pattern */}
      <div className="absolute inset-0 bg-grid-pattern opacity-60 dark:opacity-40 pointer-events-none" />

      {/* Brand Aurora Ambient Glow */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[500px] bg-gradient-to-tr from-[#5145E6]/[0.12] via-[#7B68EE]/[0.08] to-transparent rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-6xl mx-auto px-4 sm:px-8 lg:px-12 flex flex-col items-center text-center relative z-10">
        
        {/* Unified Top Pill: Active Pod Beacon + Live Software CLI Indicator */}
        <motion.div
          initial={{ opacity: 0, y: -20, scale: 0.95 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="inline-flex items-center justify-center gap-2.5 sm:gap-3 p-1.5 px-3.5 sm:px-4 rounded-full bg-white dark:bg-[#0F111A]/90 border border-slate-200/90 dark:border-white/10 shadow-sm shadow-slate-900/5 dark:shadow-black/40 mb-6 sm:mb-8 hover:border-[#5145E6]/40 transition-all duration-300 max-w-full backdrop-blur-md"
        >
          {/* Active Engineering Pod Beacon */}
          <div className="flex items-center gap-2 shrink-0">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
            </span>
            <span className="text-slate-700 dark:text-slate-200 font-mono text-[11px] sm:text-xs font-semibold tracking-tight">
              Engineering Pod • Hyderabad
            </span>
          </div>

          <div className="h-3.5 w-px bg-slate-200 dark:bg-white/15 shrink-0" />

          {/* Software status label / CLI ticker */}
          <div className="flex items-center gap-1.5 sm:gap-2 text-xs font-medium tracking-tight min-w-0">
            <span className="inline-flex items-center gap-1.5 text-[#5145E6] dark:text-indigo-300 font-mono text-[10.5px] sm:text-xs font-semibold bg-[#EEF2FF] dark:bg-[#5145E6]/20 px-2 sm:px-2.5 py-0.5 rounded-full border border-[#5145E6]/30 truncate">
              <Terminal className="w-3 h-3 text-[#5145E6] shrink-0" />
              <span className="truncate max-w-[140px] sm:max-w-none">$ {typedCommand}</span>
              <span className="w-1.5 h-3 bg-[#5145E6] animate-pulse shrink-0" />
            </span>
          </div>
        </motion.div>

        {/* Main Software Headline - High-Scale Systems */}
        <motion.h1
          initial={{ opacity: 0, y: 28 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold text-slate-900 dark:text-white tracking-tight leading-[1.08] max-w-5xl mb-5 sm:mb-6 text-balance"
        >
          We Engineer High-Scale Software.{" "}
          <span className="bg-gradient-to-r from-[#5145E6] via-[#6355FF] to-[#3B82F6] bg-clip-text text-transparent block sm:inline">
            Web, Mobile &amp; AI Cloud Systems.
          </span>
        </motion.h1>

        {/* Supporting text */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          className="text-sm sm:text-lg md:text-xl text-slate-600 dark:text-[#9496A1] max-w-3xl font-normal leading-relaxed mb-8 sm:mb-10 text-balance"
        >
          Recognized as the premier <strong className="text-slate-900 dark:text-white font-semibold">software &amp; website development company in Hyderabad</strong>. We architect high-concurrency web platforms, native iOS/Android applications, and distributed cloud backends for scaling enterprises worldwide.
        </motion.p>

        {/* Unified Action Row */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
          className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4 w-full sm:w-auto mb-12 sm:mb-16"
        >
          {/* Primary CTA */}
          <button
            onClick={() => onOpenContact()}
            className="w-full sm:w-auto group relative inline-flex items-center justify-center gap-3 px-7 sm:px-8 py-3.5 sm:py-4 rounded-full bg-[#5145E6] text-white text-sm sm:text-[15px] font-semibold hover:bg-[#4135D4] active:scale-[0.98] transition-all duration-200 shadow-xl shadow-[#5145E6]/30 hover:shadow-2xl hover:shadow-[#5145E6]/40"
          >
            <span>Initialize Project Architecture</span>
            <span className="w-6 h-6 rounded-full bg-white/20 flex items-center justify-center transition-transform duration-200 group-hover:translate-x-1 group-hover:-translate-y-0.5 shrink-0">
              <ArrowUpRight className="w-3.5 h-3.5 text-white" />
            </span>
          </button>

          {/* Secondary CTA */}
          <a
            href="#work"
            onClick={scrollToWork}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 sm:px-7 py-3.5 sm:py-4 rounded-full bg-white dark:bg-white/[0.04] hover:bg-slate-50 dark:hover:bg-white/[0.08] text-slate-800 dark:text-white text-sm sm:text-[15px] font-medium border border-slate-200 dark:border-white/10 hover:border-[#5145E6]/50 transition-all duration-200 shadow-sm"
          >
            <span>Inspect Production Systems</span>
            <ArrowDown className="w-3.5 h-3.5 text-[#5145E6] dark:text-indigo-400 shrink-0" />
          </a>

          {/* Availability pill inline */}
          <div className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-4 py-3 rounded-full bg-[#EEF2FF] dark:bg-[#5145E6]/10 border border-[#5145E6]/30 text-xs font-mono font-semibold text-[#5145E6] dark:text-indigo-300">
            <span className="relative flex h-2 w-2 shrink-0">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-500 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
            </span>
            <span>Q1/Q2 SPRINT CAPACITY: OPEN</span>
          </div>
        </motion.div>

        {/* ======================================================== */}
        {/* UNIFIED SOFTWARE ENGINEERING WORKBENCH (WITH 3D PERSPECTIVE TILT) */}
        {/* ======================================================== */}
        <motion.div
          style={{ y: workbenchY }}
          initial={{ opacity: 0, y: 35 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
          className="w-full max-w-5xl"
        >
          <ThreeDCard
            maxTilt={5}
            glare={true}
            className="w-full bg-[#0B0D14] rounded-2xl sm:rounded-3xl border border-slate-800 dark:border-white/15 shadow-2xl shadow-indigo-950/20 dark:shadow-black/80 overflow-hidden text-left font-mono relative"
          >
          {/* Top subtle laser glow accent */}
          <div className="h-0.5 w-full bg-gradient-to-r from-transparent via-[#5145E6] to-transparent" />

          {/* Workbench Titlebar & Stack Tabs */}
          <div className="bg-[#11131F] px-3 sm:px-6 py-2.5 sm:py-3 border-b border-white/10 flex flex-wrap items-center justify-between gap-2.5 sm:gap-3">
            {/* Window Controls & Title */}
            <div className="flex items-center gap-2 sm:gap-2.5">
              <span className="w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full bg-[#FF5F56]" />
              <span className="w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full bg-[#FFBD2E]" />
              <span className="w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full bg-[#27C93F]" />
              <span className="ml-1 sm:ml-2 text-xs text-white/50 hidden md:inline font-mono">
                CodeNative Architecture Engine • Production Build
              </span>
            </div>

            {/* Platform Tabs */}
            <div className="flex items-center gap-1 bg-black/50 p-1 rounded-xl border border-white/10 overflow-x-auto no-scrollbar max-w-full">
              {Object.entries(CODE_TABS).map(([key, data]) => {
                const IconComponent = data.icon;
                const isSelected = activeTab === key;
                return (
                  <button
                    key={key}
                    onClick={() => setActiveTab(key)}
                    className={`px-2.5 sm:px-3 py-1 rounded-lg text-xs font-medium transition-all flex items-center gap-1 sm:gap-1.5 whitespace-nowrap shrink-0 ${
                      isSelected
                        ? "bg-[#5145E6] text-white shadow-sm font-semibold"
                        : "text-white/60 hover:text-white"
                    }`}
                  >
                    <IconComponent className="w-3 h-3 sm:w-3.5 sm:h-3.5 shrink-0" />
                    <span className="inline sm:hidden">{data.shortTitle}</span>
                    <span className="hidden sm:inline">{data.title}</span>
                  </button>
                );
              })}
            </div>

            {/* Interactive Run Build Action */}
            <button
              onClick={handleSimulateBuild}
              disabled={isCompiling}
              className="inline-flex items-center gap-1.5 px-3 py-1 sm:px-3.5 sm:py-1.5 rounded-lg bg-[#5145E6] hover:bg-[#4135D4] text-white text-[11px] sm:text-xs font-semibold shadow-md shadow-[#5145E6]/30 transition-all disabled:opacity-60 shrink-0"
            >
              {isCompiling ? (
                <>
                  <span className="w-2.5 h-2.5 rounded-full border-2 border-white border-t-transparent animate-spin" />
                  <span>Compiling...</span>
                </>
              ) : (
                <>
                  <Play className="w-3 h-3 fill-current" />
                  <span>Run Build</span>
                </>
              )}
            </button>
          </div>

          {/* Workbench Body: Balanced 2-Column Split */}
          <div className="grid grid-cols-1 lg:grid-cols-12 divide-y lg:divide-y-0 lg:divide-x divide-white/10">
            
            {/* Left 7 Columns: Real Syntax Highlighted Code */}
            <div className="lg:col-span-7 bg-[#08090E] p-3.5 sm:p-6 flex flex-col justify-between max-w-full overflow-hidden">
              <div>
                <div className="flex items-center justify-between pb-2.5 sm:pb-3 mb-2.5 sm:mb-3 border-b border-white/5 text-[10.5px] sm:text-[11px] text-white/40">
                  <div className="flex items-center gap-1.5 sm:gap-2">
                    <span className="text-[#5145E6] font-bold">ACTIVE FILE:</span>
                    <span className="text-white/80 font-semibold truncate max-w-[140px] sm:max-w-none">{activeSnippet.file}</span>
                  </div>
                  <span className="text-indigo-300 bg-[#5145E6]/20 px-2 py-0.5 rounded text-[10px] sm:text-[10.5px] truncate max-w-[120px] sm:max-w-none">
                    {activeSnippet.badge}
                  </span>
                </div>

                <pre className="text-[11px] sm:text-[12.5px] leading-relaxed text-indigo-100/90 overflow-x-auto no-scrollbar max-w-full font-mono">
                  <code>{activeSnippet.code}</code>
                </pre>
              </div>

              <div className="pt-3 sm:pt-4 mt-3 sm:mt-4 border-t border-white/5 flex items-center justify-between text-[10px] sm:text-[10.5px] text-white/40 font-mono">
                <span className="truncate">Compiler: Strict TypeScript &amp; Native LLVM</span>
                <span className="text-emerald-400 flex items-center gap-1 shrink-0 ml-2">
                  <CheckCircle2 className="w-3 h-3" />
                  0 Warnings
                </span>
              </div>
            </div>

            {/* Right 5 Columns: Live Software Telemetry & Build Console */}
            <div className="lg:col-span-5 bg-[#0D101A] p-3.5 sm:p-6 flex flex-col justify-between space-y-3.5 sm:space-y-4 max-w-full overflow-hidden">
              <div>
                <div className="flex items-center justify-between pb-2.5 sm:pb-3 mb-2.5 sm:mb-3 border-b border-white/5">
                  <span className="text-xs font-bold text-white tracking-wider flex items-center gap-1.5">
                    <Activity className="w-3.5 h-3.5 text-[#5145E6]" />
                    LIVE DIAGNOSTICS
                  </span>
                  <span className="text-[10px] font-bold text-emerald-400 bg-emerald-950/60 border border-emerald-500/30 px-2 py-0.5 rounded">
                    HEALTHY
                  </span>
                </div>

                {/* Real-time telemetry metrics */}
                <div className="grid grid-cols-3 gap-1.5 sm:gap-2 text-center mb-3 sm:mb-4">
                  <div className="p-2 sm:p-2.5 rounded-xl bg-white/[0.03] border border-white/5">
                    <span className="text-[9px] sm:text-[10px] text-white/40 block">Latency</span>
                    <span className="text-xs sm:text-sm font-bold text-white mt-0.5 block">{activeSnippet.stats.latency}</span>
                  </div>
                  <div className="p-2 sm:p-2.5 rounded-xl bg-white/[0.03] border border-white/5">
                    <span className="text-[9px] sm:text-[10px] text-white/40 block">Throughput</span>
                    <span className="text-xs sm:text-sm font-bold text-[#5145E6] mt-0.5 block truncate">{activeSnippet.stats.throughput}</span>
                  </div>
                  <div className="p-2 sm:p-2.5 rounded-xl bg-white/[0.03] border border-white/5">
                    <span className="text-[9px] sm:text-[10px] text-white/40 block">Coverage</span>
                    <span className="text-xs sm:text-sm font-bold text-emerald-400 mt-0.5 block">{activeSnippet.stats.coverage}</span>
                  </div>
                </div>

                {/* Animated build console output log */}
                <div className="p-2.5 sm:p-3.5 rounded-xl bg-black/60 border border-white/10 space-y-1.5 text-[10.5px] sm:text-[11px]">
                  <span className="text-white/40 text-[9.5px] sm:text-[10px] block uppercase tracking-wider font-mono">
                    Build Pipeline Stream:
                  </span>
                  {buildLogs.map((log, i) => (
                    <div
                      key={i}
                      className={`flex items-start gap-1.5 leading-tight font-mono ${
                        i === buildLogs.length - 1 ? "text-emerald-400 font-semibold" : "text-white/70"
                      }`}
                    >
                      <span className="break-all sm:break-normal">{log}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Edge nodes footer */}
              <div className="pt-2.5 sm:pt-3 border-t border-white/5 flex items-center justify-between text-[10px] sm:text-[10.5px] text-white/50 font-mono">
                <span className="flex items-center gap-1.5">
                  <Zap className="w-3 h-3 text-[#5145E6] shrink-0" />
                  <span>32 Edge Regions</span>
                </span>
                <span className="text-indigo-300 font-semibold">SOC2 • HIPAA</span>
              </div>
            </div>

          </div>
          </ThreeDCard>
        </motion.div>

        {/* Scroll down indicator animation */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 1 }}
          className="mt-12 sm:mt-16 flex flex-col items-center gap-2 text-slate-400 dark:text-[#9496A1] text-xs font-mono"
        >
          <span className="text-[10.5px] uppercase tracking-widest">Scroll to explore production systems</span>
          <motion.div
            animate={{ y: [0, 6, 0] }}
            transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
            className="w-5 h-8 rounded-full border border-slate-300 dark:border-white/20 flex items-start justify-center p-1"
          >
            <div className="w-1 h-2 rounded-full bg-[#5145E6]" />
          </motion.div>
        </motion.div>

      </div>

      {/* Subtle bottom divider */}
      <div className="max-w-7xl mx-auto px-6 sm:px-8 mt-12 sm:mt-16">
        <div className="h-px w-full bg-gradient-to-r from-transparent via-slate-200 dark:via-[#5145E6]/30 to-transparent" />
      </div>
    </motion.section>
  );
}
