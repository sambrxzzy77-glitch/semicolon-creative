import { motion } from 'framer-motion'
import { MapPin, Truck, Wrench, Users, Sparkles, Megaphone } from 'lucide-react'

/* ──────────────────────────── block data ─────────────────────────────── */
interface Block {
  title: string
  subtitle: string
  icon: React.ReactNode
  span: string   // grid col/row span
  content: React.ReactNode
}

const blocks: Block[] = [
  {
    title: 'Brand Activations',
    subtitle: 'Immersive consumer experiences',
    icon: <Sparkles size={18} />,
    span: 'col-span-2 row-span-2',
    content: (
      <div className="absolute inset-0 opacity-30 group-hover:opacity-45 transition-opacity duration-500">
        <img
          src="/assets/photo-chess.jpg"
          alt="Brand activation"
          className="w-full h-full object-cover"
        />
      </div>
    ),
  },
  {
    title: 'Events & Production',
    subtitle: 'Concept to curtain call',
    icon: <Megaphone size={18} />,
    span: 'col-span-1 row-span-2',
    content: (
      <div className="absolute inset-0 opacity-25 group-hover:opacity-40 transition-opacity duration-500">
        <video
          src="/assets/video-new-4.mp4"
          autoPlay
          loop
          muted
          playsInline
          preload="metadata"
          className="w-full h-full object-cover"
        />
      </div>
    ),
  },
  {
    title: 'Retail & Consumer',
    subtitle: 'Point-of-sale dominance',
    icon: <MapPin size={18} />,
    span: 'col-span-1 row-span-1',
    content: (
      <div className="absolute inset-0 bg-gradient-to-br from-crimson-red/20 to-transparent" />
    ),
  },
  {
    title: 'Roadshows',
    subtitle: 'Regional market penetration',
    icon: <Truck size={18} />,
    span: 'col-span-1 row-span-1',
    content: (
      <div className="absolute bottom-4 left-5 right-5 flex gap-2 flex-wrap">
        {['Dhaka', 'Chittagong', 'Sylhet'].map((city) => (
          <span
            key={city}
            className="text-[9px] tracking-widest uppercase px-2.5 py-1 border border-crimson-red/30 rounded-full text-crimson-red/80"
          >
            {city}
          </span>
        ))}
      </div>
    ),
  },
  {
    title: 'Fabrication & POSM',
    subtitle: 'Materials to market',
    icon: <Wrench size={18} />,
    span: 'col-span-1 row-span-1',
    content: (
      <div className="absolute inset-0 p-5 flex items-end">
        <svg viewBox="0 0 120 80" className="w-24 opacity-[0.12]" stroke="currentColor" fill="none" strokeWidth="0.5">
          <rect x="10" y="10" width="40" height="60" rx="2" />
          <rect x="60" y="20" width="50" height="50" rx="2" />
          <line x1="30" y1="10" x2="30" y2="70" />
          <line x1="10" y1="40" x2="50" y2="40" />
          <line x1="85" y1="20" x2="85" y2="70" />
          <circle cx="85" cy="45" r="12" />
        </svg>
      </div>
    ),
  },
  {
    title: 'Manpower & Logistics',
    subtitle: 'Field dispatch operations',
    icon: <Users size={18} />,
    span: 'col-span-3 row-span-1',
    content: (
      <div className="absolute inset-0 p-5 flex items-center justify-between">
        {[
          { label: 'Field Agents', value: '340+' },
          { label: 'Cities Covered', value: '22' },
          { label: 'Avg. Deployment', value: '48h' },
          { label: 'Uptime', value: '99.2%' },
        ].map((d) => (
          <div key={d.label} className="text-center">
            <p className="text-xl font-display font-bold text-pure-white/70">{d.value}</p>
            <p className="text-[9px] tracking-widest uppercase text-white/30 mt-1">{d.label}</p>
          </div>
        ))}
      </div>
    ),
  },
]

/* ──────────────────────────── component ─────────────────────────────── */
export default function BTLExecution() {
  return (
    <section id="btl-division" className="relative py-28 overflow-hidden">
      {/* Header */}
      <div className="max-w-[1440px] mx-auto px-6 lg:px-10 mb-14">
        <p className="text-[11px] tracking-[0.25em] uppercase text-crimson-red font-semibold mb-3">
          Execution
        </p>
        <h2 className="text-3xl sm:text-4xl font-display font-bold tracking-tight">
          BTL &amp; On-Ground
        </h2>
      </div>

      {/* Grid */}
      <div className="max-w-[1440px] mx-auto px-6 lg:px-10">
        <div className="grid grid-cols-3 auto-rows-[180px] gap-3">
          {blocks.map((block) => (
            <motion.div
              key={block.title}
              whileHover={{
                y: -8,
                boxShadow: '0 0 40px 4px rgba(195,24,13,0.3)',
              }}
              transition={{ duration: 0.35, ease: [0.4, 0, 0.2, 1] }}
              className={`
                group relative rounded-xl overflow-hidden cursor-pointer
                bg-[#630505] border border-[#C3180D]/40
                ${block.span}
              `}
            >
              {/* Background content */}
              {block.content}

              {/* Gradient veil */}
              <div className="absolute inset-0 bg-gradient-to-t from-obsidian/70 via-transparent to-transparent" />

              {/* Label */}
              <div className="absolute top-4 left-5 z-10 flex items-center gap-2">
                <span className="text-crimson-red">{block.icon}</span>
                <div>
                  <h3 className="text-sm font-bold">{block.title}</h3>
                  <p className="text-[10px] text-white/35">{block.subtitle}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
