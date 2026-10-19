import { motion } from 'framer-motion'

export default function Hero() {
  return (
    <section
      className="min-h-screen w-full relative flex flex-col justify-between pt-28 pb-16 px-8 md:px-16 overflow-hidden"
      style={{
        background:
          'radial-gradient(circle at 70% 30%, #8A0A0A 0%, #630505 40%, #1a0202 75%, #050000 100%)',
      }}
    >
      {/* ── Volumetric Architectural Glow Lights (A28 Studio Moodboard) ── */}
      <div className="absolute top-[8%] right-[10%] w-[680px] h-[680px] rounded-full bg-[#C3180D]/20 blur-[130px] pointer-events-none" />
      <div className="absolute top-[22%] right-[22%] w-[380px] h-[380px] rounded-full bg-[#ff2e20]/15 blur-[90px] pointer-events-none" />
      <div className="absolute bottom-[10%] right-[35%] w-[480px] h-[480px] rounded-full bg-[#630505]/40 blur-[120px] pointer-events-none" />

      {/* ── Illuminated Architectural Light Arcs & Curved Red Corridors ── */}
      <svg
        className="absolute inset-0 w-full h-full pointer-events-none select-none"
        viewBox="0 0 1440 900"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        preserveAspectRatio="xMidYMid slice"
      >
        <defs>
          <linearGradient id="corridorGlow1" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#FFFFFF" stopOpacity="0.8" />
            <stop offset="25%" stopColor="#C3180D" stopOpacity="0.9" />
            <stop offset="65%" stopColor="#8A0A0A" stopOpacity="0.4" />
            <stop offset="100%" stopColor="#1a0202" stopOpacity="0" />
          </linearGradient>

          <linearGradient id="corridorGlow2" x1="100%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#C3180D" stopOpacity="0.75" />
            <stop offset="45%" stopColor="#630505" stopOpacity="0.35" />
            <stop offset="100%" stopColor="#050000" stopOpacity="0" />
          </linearGradient>

          <filter id="arcGlow" x="-20%" y="-20%" width="140%" height="140%">
            <feGaussianBlur stdDeviation="4" result="blur" />
            <feMerge>
              <feMergeNode in="blur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>

          <filter id="corridorAtmosphere" x="-30%" y="-30%" width="160%" height="160%">
            <feGaussianBlur stdDeviation="40" />
          </filter>
        </defs>

        {/* Soft atmospheric curved corridor wash */}
        <path
          d="M 380 -60 Q 980 200 1560 680"
          stroke="#C3180D"
          strokeWidth="90"
          opacity="0.09"
          filter="url(#corridorAtmosphere)"
        />
        <path
          d="M 600 -60 Q 1120 260 1620 480"
          stroke="#8A0A0A"
          strokeWidth="120"
          opacity="0.14"
          filter="url(#corridorAtmosphere)"
        />

        {/* Concentric Architectural Corridor Light Arcs */}
        {/* Arc 1: Core luminous architectural edge */}
        <path
          d="M 480 -80 C 880 130, 1260 250, 1600 700"
          stroke="url(#corridorGlow1)"
          strokeWidth="2.2"
          opacity="0.85"
          filter="url(#arcGlow)"
        />
        <path
          d="M 480 -80 C 880 130, 1260 250, 1600 700"
          stroke="#FFFFFF"
          strokeWidth="0.6"
          opacity="0.45"
        />

        {/* Arc 2: Vaulted secondary rib */}
        <path
          d="M 360 -80 C 780 170, 1180 320, 1580 860"
          stroke="url(#corridorGlow1)"
          strokeWidth="1.6"
          opacity="0.6"
          filter="url(#arcGlow)"
        />

        {/* Arc 3: Outer structural light band */}
        <path
          d="M 240 -80 C 680 220, 1100 420, 1560 1020"
          stroke="url(#corridorGlow2)"
          strokeWidth="1.2"
          opacity="0.4"
        />

        {/* Arc 4: Deep corridor hairline */}
        <path
          d="M 120 -80 C 580 270, 1020 520, 1540 1180"
          stroke="url(#corridorGlow2)"
          strokeWidth="0.9"
          strokeDasharray="6 4"
          opacity="0.25"
        />

        {/* Elliptical illuminated corridor rings (architectural perspective) */}
        <ellipse
          cx="1060"
          cy="270"
          rx="360"
          ry="190"
          stroke="rgba(195, 24, 13, 0.4)"
          strokeWidth="1.4"
          transform="rotate(-16 1060 270)"
          opacity="0.7"
        />
        <ellipse
          cx="1080"
          cy="285"
          rx="580"
          ry="310"
          stroke="rgba(195, 24, 13, 0.25)"
          strokeWidth="1"
          transform="rotate(-16 1080 285)"
          opacity="0.5"
        />
        <ellipse
          cx="1100"
          cy="300"
          rx="820"
          ry="440"
          stroke="rgba(195, 24, 13, 0.15)"
          strokeWidth="0.75"
          transform="rotate(-16 1100 300)"
          opacity="0.35"
        />

        {/* Architectural perspective guide hairlines */}
        <line
          x1="1060"
          y1="270"
          x2="1580"
          y2="50"
          stroke="rgba(255, 255, 255, 0.07)"
          strokeWidth="0.75"
          strokeDasharray="3 3"
        />
        <line
          x1="1060"
          y1="270"
          x2="1600"
          y2="340"
          stroke="rgba(255, 255, 255, 0.06)"
          strokeWidth="0.75"
        />
        <line
          x1="1060"
          y1="270"
          x2="1580"
          y2="660"
          stroke="rgba(255, 255, 255, 0.05)"
          strokeWidth="0.75"
        />
        <line
          x1="1060"
          y1="270"
          x2="1020"
          y2="920"
          stroke="rgba(255, 255, 255, 0.05)"
          strokeWidth="0.75"
        />
        <line
          x1="1060"
          y1="270"
          x2="620"
          y2="920"
          stroke="rgba(255, 255, 255, 0.04)"
          strokeWidth="0.75"
          strokeDasharray="4 4"
        />
      </svg>

      {/* ── Fixed Micro-noise Texture Overlay (prevents 8-bit banding) ── */}
      <div
        className="absolute inset-0 pointer-events-none opacity-[0.035] mix-blend-overlay bg-repeat"
        style={{
          backgroundImage:
            'url("data:image/svg+xml,%3Csvg xmlns=\'http://www.w3.org/2000/svg\' width=\'200\' height=\'200\'%3E%3Cfilter id=\'n\'%3E%3CfeTurbulence type=\'fractalNoise\' baseFrequency=\'0.75\' numOctaves=\'4\' stitchTiles=\'stitch\'/%3E%3C/filter%3E%3Crect width=\'100%25\' height=\'100%25\' filter=\'url(%23n)\'/%3E%3C/svg%3E")',
        }}
      />

      {/* ── Subtle bottom vignette connector ── */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-b from-transparent to-[#050000]/80 pointer-events-none" />

      {/* ── Top Space: Architectural Breadcrumb / Studio Tag ── */}
      <motion.div
        initial={{ opacity: 0, y: -8 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.1 }}
        className="w-full flex items-center justify-between text-white/40 font-mono text-xs tracking-widest uppercase border-b border-white/[0.08] pb-4 z-10"
      >
        <div className="flex items-center gap-2">
          <span className="text-[#C3180D] font-bold">//</span>
          <span>FULL-SPECTRUM MARKETING ARCHITECTURE</span>
        </div>
        <div className="hidden sm:flex items-center gap-6">
          <span>DHAKA HQ — 23.8103° N, 90.4125° E</span>
          <span className="text-white/20">|</span>
          <span>EST. 2024</span>
        </div>
      </motion.div>

      {/* ── Lower-Left Anchor: Editorial Content (Vama Style) ── */}
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.9, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
        className="max-w-4xl z-10 mt-auto pt-16 md:pt-24"
      >
        {/* Category Tag */}
        <p className="font-mono text-xs uppercase text-white/60 tracking-wider mb-4">
          // 01 — FULL-SERVICE MARKETING &amp; BTL EXECUTION
        </p>

        {/* Main Display Headline */}
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-semibold tracking-[-0.03em] leading-[1.08] max-w-4xl mt-4 mb-6 text-[#FFFFFF] font-display">
          We don’t just market brands. We move them forward.
        </h1>

        {/* Sub-Manifesto Paragraph */}
        <p className="text-white/80 text-base md:text-lg leading-relaxed max-w-2xl mb-8 font-normal">
          From strategy and storytelling to production, media, community engagement,
          outdoor visibility, influencer collaboration, and on-ground execution, we
          bring every part of marketing together under one roof.
        </p>

        {/* Action Row */}
        <div className="flex flex-wrap items-center gap-6 sm:gap-8 pt-2">
          <a
            href="#capabilities"
            className="bg-white text-black px-8 py-3.5 rounded-full font-medium hover:bg-[#C3180D] hover:text-white transition-all duration-300 shadow-xl shadow-black/40 text-sm inline-flex items-center group"
          >
            <span>EXPLORE CAPABILITIES</span>
            <span className="ml-2 group-hover:translate-y-0.5 transition-transform duration-200">
              ↓
            </span>
          </a>

          <div className="font-mono text-[11px] uppercase text-white/60 flex items-center gap-2.5 tracking-wider">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#C3180D] opacity-75" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-[#C3180D]" />
            </span>
            <span>ON-GROUND EXECUTION — DHAKA &amp; GLOBAL</span>
          </div>
        </div>
      </motion.div>
    </section>
  )
}
