import React, { useState } from "react";
import { ShieldCheck, Database, Cpu, Activity, CheckCircle2, Network, Layers, Sparkles } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import ThreeDArchitectureStack from "./ThreeDArchitectureStack";

const ARCH_LAYERS = [
  {
    id: "edge",
    name: "01. Edge & Anycast CDN",
    badge: "GLOBAL NETWORK",
    latency: "< 14ms",
    icon: Network,
    techStack: ["Cloudflare Workers", "Fastly VCL", "HTTP/3", "TLS 1.3"],
    description: "Every inbound packet terminates at the nearest global Point of Presence (PoP). Zero-round-trip handshakes, instant DDoS mitigation, and stale-while-revalidate edge caching.",
    spec: {
      "Edge Locations": "320+ Global PoPs",
      "DDoS Capacity": "240 Tbps",
      "SSL Handshake": "0-RTT Resumption",
      "Cache Hit Ratio": "98.7% Global"
    },
    codeSnippet: `// Edge Router: Instant Anycast Termination
export default {
  async fetch(request, env, ctx) {
    const url = new URL(request.url);
    const cacheKey = new Request(url.toString(), request);
    const cache = caches.default;

    let response = await cache.match(cacheKey);
    if (!response) {
      response = await fetch(request, { cf: { cacheTtl: 3600 } });
      ctx.waitUntil(cache.put(cacheKey, response.clone()));
    }
    return response;
  }
};`
  },
  {
    id: "gateway",
    name: "02. API Gateway & Auth Mesh",
    badge: "ZERO TRUST",
    latency: "< 5ms",
    icon: ShieldCheck,
    techStack: ["gRPC Mesh", "OAuth2 / OIDC", "Envoy Proxy", "Redis Rate Limiter"],
    description: "Strict cryptographic authentication with cryptographic JWT inspection, tenant boundary isolation, dynamic rate-limiting, and binary gRPC multiplexing.",
    spec: {
      "Auth Protocol": "OAuth2 + Ed25519 Keys",
      "Rate Limiter": "Token Bucket (Redis 7)",
      "Telemetry Trace": "OpenTelemetry W3C",
      "Isolation": "Multi-Tenant VPC"
    },
    codeSnippet: `// Microservices Gateway Token Verifier
package gateway

func AuthorizeRequest(ctx context.Context, token string) (*TenantClaims, error) {
    claims, err := jwtEngine.VerifyEd25519(token)
    if err != nil || !claims.HasPermission("infra:execute") {
        return nil, ErrUnauthorized
    }
    limiter.TakeToken(claims.TenantID)
    return claims, nil
}`
  },
  {
    id: "services",
    name: "03. High-Throughput Engines",
    badge: "MICROSERVICES",
    latency: "< 18ms",
    icon: Cpu,
    techStack: ["Go 1.23", "FastAPI (Python)", "Next.js 15", "Docker Containers"],
    description: "Asynchronous, stateless application microservices tuned for ultra-low memory footprints and instant horizontal auto-scaling from 10 to 100,000 req/sec.",
    spec: {
      "Concurrency": "Goroutine Epoll Mesh",
      "RPS Capability": "100k+ req/sec",
      "Cold Start": "0ms (Always Hot)",
      "Runtime": "Native Machine Code / LLVM"
    },
    codeSnippet: `// Worker Pool Pipeline Dispatcher
func DispatchStream(tasks <-chan Job, results chan<- Result) {
    for job := range tasks {
        ctx, cancel := context.WithTimeout(context.Background(), 50*time.Millisecond)
        res := job.Process(ctx)
        cancel()
        results <- res
    }
}`
  },
  {
    id: "data",
    name: "04. Distributed Data & Vector Mesh",
    badge: "STORAGE & RAG",
    latency: "< 8ms",
    icon: Database,
    techStack: ["PostgreSQL 16", "pgvector", "Redis 7 Cluster", "TimescaleDB"],
    description: "Hybrid relational and semantic vector storage. ACID compliance for financial ledgers, sub-millisecond in-memory cache layers, and vector search embeddings for generative AI.",
    spec: {
      "Vector Search": "HNSW Cosine Indexing",
      "Replication": "Multi-AZ Streaming Hot Standby",
      "Snapshot Recovery": "Point-in-Time (PITR)",
      "Encryption": "AES-256 At Rest & In Transit"
    },
    codeSnippet: `-- Semantic Vector Similarity Pipeline
SELECT id, title, 1 - (embedding <=> $1) AS cosine_similarity
FROM documents
WHERE tenant_id = $2
ORDER BY embedding <=> $1
LIMIT 10;`
  }
];

export default function SystemArchitecture() {
  const [selectedLayer, setSelectedLayer] = useState("edge");
  const [viewMode, setViewMode] = useState("3d"); // "3d" or "classic"
  const active = ARCH_LAYERS.find(l => l.id === selectedLayer) || ARCH_LAYERS[0];

  return (
    <section id="architecture" className="py-24 sm:py-32 border-b border-slate-200/80 dark:border-white/10 bg-slate-50/60 dark:bg-[#08090E] relative overflow-hidden">
      {/* Background radial laser glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[550px] bg-[#5145E6]/[0.08] dark:bg-[#5145E6]/[0.12] rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-8 lg:px-12 relative z-10">
        
        {/* Section Header with View Mode Switch */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-40px" }}
          transition={{ duration: 0.6 }}
          className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12 sm:mb-16"
        >
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#EEF2FF] dark:bg-[#5145E6]/15 border border-[#5145E6]/30 text-xs font-mono font-semibold uppercase tracking-wider text-[#5145E6] dark:text-indigo-300 mb-3">
              <Layers className="w-3.5 h-3.5 text-[#5145E6]" />
              SYSTEM ARCHITECTURE
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-slate-900 dark:text-white">
              Enterprise Engineering Pipeline.
            </h2>
            <p className="text-base sm:text-lg text-slate-600 dark:text-[#9496A1] mt-3 leading-relaxed">
              Every system CodeNative architects follows a resilient, zero-trust cloud pipeline designed for high availability, sub-20ms latency, and horizontal scale.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-3">
            {/* 3D vs Classic View Toggle */}
            <div className="flex items-center gap-1 bg-slate-200/80 dark:bg-[#121526] p-1 rounded-full border border-slate-300 dark:border-white/10 shadow-sm">
              <button
                onClick={() => setViewMode("3d")}
                className={`px-3.5 py-1.5 rounded-full text-xs font-mono font-semibold transition-all flex items-center gap-1.5 ${
                  viewMode === "3d"
                    ? "bg-[#5145E6] text-white shadow-md shadow-[#5145E6]/30"
                    : "text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white"
                }`}
              >
                <Sparkles className="w-3 h-3" />
                <span>3D Isometric Stack</span>
              </button>
              <button
                onClick={() => setViewMode("classic")}
                className={`px-3.5 py-1.5 rounded-full text-xs font-mono font-semibold transition-all flex items-center gap-1.5 ${
                  viewMode === "classic"
                    ? "bg-[#5145E6] text-white shadow-md shadow-[#5145E6]/30"
                    : "text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white"
                }`}
              >
                <Layers className="w-3 h-3" />
                <span>Layer List</span>
              </button>
            </div>

            <div className="flex items-center gap-2 text-xs font-mono text-emerald-700 dark:text-emerald-400 bg-emerald-50 dark:bg-emerald-950/40 border border-emerald-200 dark:border-emerald-500/30 px-3.5 py-2 rounded-full font-semibold shadow-sm">
              <Activity className="w-3.5 h-3.5 text-emerald-600 dark:text-emerald-400 animate-pulse" />
              <span>v4.2 SPEC</span>
            </div>
          </div>
        </motion.div>

        {/* Interactive Architecture Split: 3D Stack / Layer Selectors & Live Inspect */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-8 items-start">
          
          {/* Left Column: 3D Isometric Stack or Classic Layer List */}
          <div className="lg:col-span-5">
            <AnimatePresence mode="wait">
              {viewMode === "3d" ? (
                <motion.div
                  key="3d-stack"
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.4 }}
                >
                  <ThreeDArchitectureStack
                    activeLayerId={selectedLayer}
                    onSelectLayer={(id) => setSelectedLayer(id)}
                  />
                </motion.div>
              ) : (
                <motion.div
                  key="classic-list"
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.4 }}
                  className="space-y-3"
                >
                  <span className="text-xs font-mono uppercase tracking-widest text-slate-500 dark:text-[#9496A1] block mb-2 px-1">
                    Architecture Layers (Click to inspect):
                  </span>

                  {ARCH_LAYERS.map((layer, idx) => {
                    const isSelected = layer.id === selectedLayer;
                    const IconComp = layer.icon;

                    return (
                      <motion.div
                        key={layer.id}
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.3, delay: idx * 0.05 }}
                        onClick={() => setSelectedLayer(layer.id)}
                        className={`p-4 sm:p-5 rounded-2xl cursor-pointer transition-all duration-200 border ${
                          isSelected
                            ? "bg-white dark:bg-[#0F111A] border-[#5145E6] shadow-lg shadow-[#5145E6]/10 ring-1 ring-[#5145E6]"
                            : "bg-white/80 dark:bg-[#0F111A]/50 border-slate-200/90 dark:border-white/5 hover:border-slate-300 dark:hover:border-white/20 hover:bg-white"
                        }`}
                      >
                        <div className="flex items-center justify-between mb-2">
                          <div className="flex items-center gap-2.5">
                            <div className={`p-2 rounded-lg ${isSelected ? "bg-[#5145E6] text-white" : "bg-slate-100 dark:bg-white/[0.04] text-slate-700 dark:text-[#9496A1]"}`}>
                              <IconComp className="w-4 h-4" />
                            </div>
                            <span className={`text-sm sm:text-base font-bold tracking-tight ${isSelected ? "text-[#5145E6] dark:text-white" : "text-slate-800 dark:text-white/80"}`}>
                              {layer.name}
                            </span>
                          </div>
                          <span className="text-[10.5px] font-mono px-2 py-0.5 rounded bg-slate-100 dark:bg-white/[0.04] border border-slate-200 dark:border-white/10 text-[#5145E6] dark:text-indigo-300 font-semibold">
                            {layer.latency}
                          </span>
                        </div>

                        <p className="text-xs text-slate-600 dark:text-[#9496A1] leading-relaxed line-clamp-2">
                          {layer.description}
                        </p>

                        <div className="flex flex-wrap gap-1.5 mt-3 pt-3 border-t border-slate-100 dark:border-white/5">
                          {layer.techStack.map((tech, tIdx) => (
                            <span key={tIdx} className="text-[10px] font-mono px-2 py-0.5 rounded bg-slate-100 dark:bg-white/[0.02] text-slate-600 dark:text-white/60">
                              {tech}
                            </span>
                          ))}
                        </div>
                      </motion.div>
                    );
                  })}
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {/* Right Column: Deep-Dive Cockpit & Real Code */}
          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-7 bg-[#0B0D14] rounded-2xl sm:rounded-3xl border border-slate-800 dark:border-white/15 shadow-2xl p-5 sm:p-7 relative overflow-hidden font-mono flex flex-col justify-between text-white"
          >
            <div>
              {/* Header */}
              <div className="flex items-center justify-between pb-4 border-b border-white/10 mb-5">
                <div className="flex items-center gap-2">
                  <span className="w-2.5 h-2.5 rounded-full bg-[#5145E6] animate-pulse" />
                  <span className="text-xs text-white/50">SYSTEM LAYER INSPECTOR:</span>
                  <span className="text-xs font-bold text-white uppercase">{active.badge}</span>
                </div>
                <span className="text-[11px] text-emerald-400 bg-emerald-950/60 border border-emerald-500/30 px-2 py-0.5 rounded font-semibold">
                  BENCHMARK: {active.latency}
                </span>
              </div>

              {/* Layer Title & Overview */}
              <h3 className="text-lg sm:text-xl font-bold text-white mb-2 font-sans tracking-tight">
                {active.name}
              </h3>
              <p className="text-xs sm:text-sm text-white/70 font-sans leading-relaxed mb-6">
                {active.description}
              </p>

              {/* Hardware & Network Specs Grid */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5 mb-6">
                {Object.entries(active.spec).map(([key, val]) => (
                  <div key={key} className="p-2.5 rounded-xl bg-white/[0.03] border border-white/10">
                    <span className="text-[9.5px] text-white/50 block truncate">{key}</span>
                    <span className="text-xs font-bold text-white mt-0.5 block truncate">{val}</span>
                  </div>
                ))}
              </div>

              {/* Verified Code / Config Snippet */}
              <div className="rounded-xl bg-[#06070B] border border-white/10 p-3 sm:p-4 overflow-hidden">
                <div className="flex items-center justify-between pb-2 border-b border-white/5 text-[10px] text-white/40 mb-2">
                  <span>PRODUCTION RUNTIME LOGIC</span>
                  <span className="text-indigo-400">SOC2 Verified</span>
                </div>
                <pre className="text-[11px] leading-relaxed text-indigo-100 overflow-x-auto no-scrollbar max-w-full">
                  <code>{active.codeSnippet}</code>
                </pre>
              </div>
            </div>

            {/* Bottom Guarantee */}
            <div className="pt-4 mt-6 border-t border-white/10 flex flex-wrap items-center justify-between gap-3 text-[11px] text-white/60">
              <span className="flex items-center gap-1.5 text-white/80">
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
                Immutable Docker containers with reproducible CI builds
              </span>
              <span className="text-indigo-400 font-bold">100% Code Ownership</span>
            </div>

          </motion.div>

        </div>

      </div>
    </section>
  );
}
