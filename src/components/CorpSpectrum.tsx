import { useState, useRef } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { X } from 'lucide-react'

/* ──────────────────────────── service data ──────────────────────────── */
interface Service {
  id: number
  title: string
  subtitle: string
  media: string
  mediaType: 'video' | 'image'
  deliverables: string[]
  description: string
}

const services: Service[] = [
  {
    id: 1,
    title: 'Strategic Consulting',
    subtitle: 'Blueprint → Roadmap',
    media: '/assets/video-cards.mp4',
    mediaType: 'video',
    description:
      'We architect brand strategies that translate market insight into measurable growth — no fluff, just direction.',
    deliverables: [
      'Brand Audit & Competitive Mapping',
      'Go-To-Market Strategy',
      'Consumer Journey Architecture',
      'KPI Frameworks & Dashboards',
      'Quarterly Strategy Reviews',
    ],
  },
  {
    id: 2,
    title: 'Creative Direction',
    subtitle: 'Vision → Identity',
    media: '/assets/photo-idesign.jpg',
    mediaType: 'image',
    description:
      'From visual identity systems to campaign art direction — we set the creative north-star for every touchpoint.',
    deliverables: [
      'Visual Identity Systems',
      'Campaign Art Direction',
      'Brand Guidelines',
      'Packaging & Collateral Design',
      'Motion Design Language',
    ],
  },
  {
    id: 3,
    title: 'Outdoor Marketing',
    subtitle: 'Streets → Impact',
    media: '/assets/video-stickers.mp4',
    mediaType: 'video',
    description:
      'Billboard cascades, transit wraps, and ambient placements — we turn physical space into brand territory.',
    deliverables: [
      'Billboard & Hoarding Campaigns',
      'Transit & Vehicle Wraps',
      'Ambient & Guerrilla Placements',
      'Site Surveys & Permit Management',
      'Footfall & Impression Analytics',
    ],
  },
  {
    id: 4,
    title: 'Content & Production',
    subtitle: 'Script → Screen',
    media: '/assets/photo-studio-rig.jpg',
    mediaType: 'image',
    description:
      'Full in-house production from concept to final grade — TVC, OVC, short-form, and branded content.',
    deliverables: [
      'TVC & OVC Production',
      'Short-Form Social Content',
      'Photography & Retouching',
      'Post-Production & Color Grade',
      'Studio & Location Shoots',
    ],
  },
  {
    id: 5,
    title: 'Community & Media',
    subtitle: 'Reach → Engage',
    media: '/assets/video-tv-wall.mp4',
    mediaType: 'video',
    description:
      'Community building, influencer networks, and strategic media buying — we amplify and sustain conversations.',
    deliverables: [
      'Social Media Management',
      'Influencer & KOL Partnerships',
      'Media Planning & Buying',
      'Community Growth Playbooks',
      'Sentiment & Analytics Reporting',
    ],
  },
  {
    id: 6,
    title: 'BTL Operations',
    subtitle: 'Plan → Ground',
    media: '/assets/photo-chess.jpg',
    mediaType: 'image',
    description:
      'Below-the-line execution at scale — activations, roadshows, fabrication, and manpower deployment.',
    deliverables: [
      'Brand Activations & Sampling',
      'Roadshows & Pop-Ups',
      'Fabrication & POSM',
      'Event Production & Management',
      'Manpower & Logistics Deployment',
    ],
  },
]

/* ──────────────────────────── component ─────────────────────────────── */
export default function CorpSpectrum() {
  const [activeIdx, setActiveIdx] = useState<number | null>(null)
  const [hoveredIdx, setHoveredIdx] = useState<number | null>(null)
  const containerRef = useRef<HTMLDivElement>(null)

  return (
    <section id="capabilities" className="relative py-28 overflow-hidden">
      {/* ── Section Header ── */}
      <div className="max-w-[1440px] mx-auto px-6 lg:px-10 mb-14">
        <p className="text-[11px] tracking-[0.25em] uppercase text-crimson-red font-semibold mb-3">
          Services
        </p>
        <h2 className="text-3xl sm:text-4xl font-display font-bold tracking-tight">
          The Creative Spectrum
        </h2>
      </div>

      {/* ── Columns ── */}
      <div
        ref={containerRef}
        className="relative max-w-[1440px] mx-auto px-6 lg:px-10"
      >
        {/* SVG arc overlay */}
        <svg
          viewBox="0 0 1200 440"
          fill="none"
          className="absolute inset-0 w-full h-[440px] pointer-events-none z-10"
          preserveAspectRatio="none"
        >
          <path
            d="M0,340 C100,120 250,380 400,200 S600,60 750,220 S950,380 1200,160"
            stroke={hoveredIdx !== null ? '#ff4d3a' : '#C3180D'}
            strokeWidth={hoveredIdx !== null ? 2.5 : 1.5}
            strokeLinecap="round"
            opacity={hoveredIdx !== null ? 1 : 0.45}
            style={{
              transition: 'all 0.5s cubic-bezier(0.4,0,0.2,1)',
              filter:
                hoveredIdx !== null
                  ? 'drop-shadow(0 0 12px rgba(195,24,13,0.7))'
                  : 'none',
            }}
          />
        </svg>

        {/* Columns row */}
        <div className="relative flex">
          {services.map((svc, i) => (
            <motion.div
              key={svc.id}
              className="relative flex-1 h-[440px] cursor-pointer overflow-hidden group"
              style={{
                borderRight:
                  i < services.length - 1
                    ? '1px solid rgba(255,255,255,0.08)'
                    : 'none',
              }}
              animate={{
                y: hoveredIdx === i ? 24 : 0,
                backgroundColor:
                  hoveredIdx === i
                    ? 'rgba(99,5,5,0.55)'
                    : 'rgba(99,5,5,0)',
              }}
              transition={{ duration: 0.4, ease: [0.4, 0, 0.2, 1] }}
              onMouseEnter={() => setHoveredIdx(i)}
              onMouseLeave={() => setHoveredIdx(null)}
              onClick={() => setActiveIdx(i)}
            >
              {/* Background media */}
              <div className="absolute inset-0 opacity-25 group-hover:opacity-40 transition-opacity duration-500">
                {svc.mediaType === 'video' ? (
                  <video
                    src={svc.media}
                    autoPlay
                    loop
                    muted
                    playsInline
                    preload="metadata"
                    className="w-full h-full object-cover"
                  />
                ) : (
                  <img
                    src={svc.media}
                    alt={svc.title}
                    className="w-full h-full object-cover"
                  />
                )}
              </div>

              {/* Gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-obsidian/90 via-obsidian/40 to-transparent" />

              {/* Text */}
              <div className="relative z-10 h-full flex flex-col justify-end p-5">
                <span className="text-[11px] tracking-[0.2em] text-crimson-red font-semibold uppercase mb-1">
                  0{svc.id}
                </span>
                <h3 className="text-sm font-bold leading-snug">{svc.title}</h3>
                <p className="text-[11px] text-white/40 mt-1">{svc.subtitle}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* ── Editorial Drawer ── */}
      <AnimatePresence>
        {activeIdx !== null && (
          <>
            {/* Scrim */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-obsidian/60 backdrop-blur-sm z-[60]"
              onClick={() => setActiveIdx(null)}
            />

            {/* Drawer */}
            <motion.aside
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', damping: 28, stiffness: 260 }}
              className="fixed right-0 top-0 h-full w-full max-w-lg bg-[#0e0202] border-l border-white/5 z-[70] overflow-y-auto"
            >
              <div className="p-8 lg:p-10">
                <button
                  onClick={() => setActiveIdx(null)}
                  className="mb-8 flex items-center gap-2 text-white/40 hover:text-white transition-colors text-sm"
                >
                  <X size={16} />
                  Close
                </button>

                <span className="text-[11px] tracking-[0.25em] text-crimson-red font-semibold uppercase">
                  0{services[activeIdx].id} // Service
                </span>
                <h3 className="text-2xl font-display font-bold mt-2 mb-3">
                  {services[activeIdx].title}
                </h3>
                <p className="text-white/50 leading-relaxed text-sm mb-8">
                  {services[activeIdx].description}
                </p>

                {/* Media */}
                <div className="rounded-xl overflow-hidden mb-8 border border-white/5">
                  {services[activeIdx].mediaType === 'video' ? (
                    <video
                      src={services[activeIdx].media}
                      autoPlay
                      loop
                      muted
                      playsInline
                      preload="metadata"
                      className="w-full"
                    />
                  ) : (
                    <img
                      src={services[activeIdx].media}
                      alt={services[activeIdx].title}
                      className="w-full"
                    />
                  )}
                </div>

                {/* Deliverables */}
                <h4 className="text-[11px] tracking-[0.2em] uppercase text-white/30 font-semibold mb-4">
                  Deliverables
                </h4>
                <ul className="space-y-3">
                  {services[activeIdx].deliverables.map((d) => (
                    <li
                      key={d}
                      className="flex items-start gap-3 text-sm text-white/70"
                    >
                      <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-crimson-red shrink-0" />
                      {d}
                    </li>
                  ))}
                </ul>
              </div>
            </motion.aside>
          </>
        )}
      </AnimatePresence>
    </section>
  )
}
