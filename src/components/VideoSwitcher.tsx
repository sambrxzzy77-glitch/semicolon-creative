import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Play, ChevronRight } from 'lucide-react'

/* ──────────────────────────── data ──────────────────────────────────── */
interface Slot {
  id: string
  label: string
  src: string
  aspect: string            // Tailwind aspect class
}

const slots: Slot[] = [
  {
    id: '01',
    label: 'Featured Reel',
    src: '/assets/video-new-1.mp4',
    aspect: 'aspect-video',              // 16:9
  },
  {
    id: '02',
    label: 'OVC Commercial',
    src: '/assets/video-new-2.mp4',
    aspect: 'aspect-video',              // 16:9
  },
  {
    id: '03',
    label: 'TVC Cinema',
    src: '/assets/video-new-3.mp4',
    aspect: 'aspect-[2.39/1]',           // 2.39:1 widescreen
  },
  {
    id: '04',
    label: 'Short-Form',
    src: '/assets/video-stickers.mp4',
    aspect: 'aspect-[9/16] max-h-[520px] mx-auto', // 9:16 mobile
  },
]

/* ──────────────────────────── component ─────────────────────────────── */
export default function VideoSwitcher() {
  const [active, setActive] = useState(0)
  const [rigOpen, setRigOpen] = useState(false)
  const slot = slots[active]

  return (
    <section id="showcase" className="relative py-28 overflow-hidden">
      <div className="max-w-[1440px] mx-auto px-6 lg:px-10 grid grid-cols-1 lg:grid-cols-[260px_1fr] gap-12 xl:gap-20">
        {/* ── Left: Sticky Label ── */}
        <div className="lg:sticky lg:top-28 self-start">
          <p className="text-[11px] tracking-[0.25em] uppercase text-crimson-red font-semibold mb-3">
            01 //
          </p>
          <h2 className="text-3xl sm:text-4xl font-display font-bold tracking-tight leading-tight">
            End-to-End Marketing
          </h2>
          <p className="mt-4 text-sm text-white/40 leading-relaxed">
            From 30-second TVCs to guerrilla short-form — we handle script,
            shoot, grade, and delivery.
          </p>

          {/* Studio Rig toggle */}
          <button
            onClick={() => setRigOpen(!rigOpen)}
            className="mt-8 flex items-center gap-2 text-xs tracking-widest uppercase text-white/30 hover:text-crimson-red transition-colors"
          >
            <ChevronRight
              size={14}
              className={`transition-transform ${rigOpen ? 'rotate-90' : ''}`}
            />
            Studio Rig
          </button>

          <AnimatePresence>
            {rigOpen && (
              <motion.div
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: 'auto', opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                className="overflow-hidden mt-4 space-y-3"
              >
                <img
                  src="/assets/photo-studio-rig.jpg"
                  alt="Studio rig"
                  className="rounded-xl border border-white/5 w-full"
                />
                <img
                  src="/assets/photo-studio-model.jpg"
                  alt="Studio model"
                  className="rounded-xl border border-white/5 w-full"
                />
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        {/* ── Right: Switcher ── */}
        <div>
          {/* Tabs */}
          <div className="flex flex-wrap gap-2 mb-6">
            {slots.map((s, i) => (
              <button
                key={s.id}
                onClick={() => setActive(i)}
                className={`
                  relative px-4 py-2 rounded-lg text-xs font-semibold tracking-wider uppercase transition-all
                  ${
                    active === i
                      ? 'bg-crimson-red/20 text-crimson-red border border-crimson-red/30'
                      : 'bg-white/[0.03] text-white/40 border border-white/5 hover:text-white/70 hover:border-white/10'
                  }
                `}
              >
                <span className="flex items-center gap-2">
                  {active === i && <Play size={10} fill="currentColor" />}
                  {s.id} // {s.label}
                </span>
              </button>
            ))}
          </div>

          {/* Video Player */}
          <div className="relative rounded-2xl overflow-hidden bg-obsidian/40 border border-white/5 backdrop-blur-sm">
            <AnimatePresence mode="wait">
              <motion.div
                key={slot.id}
                initial={{ opacity: 0, scale: 0.98 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.98 }}
                transition={{ duration: 0.35 }}
                className={slot.aspect}
              >
                <video
                  key={slot.src}
                  src={slot.src}
                  autoPlay
                  loop
                  muted
                  playsInline
                  preload="metadata"
                  className="w-full h-full object-cover"
                />
              </motion.div>
            </AnimatePresence>

            {/* Label overlay */}
            <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-obsidian/80 to-transparent">
              <span className="text-[10px] tracking-[0.2em] uppercase text-white/50 font-medium">
                {slot.id} // {slot.label}
              </span>
            </div>
          </div>

          {/* Frosted info panels */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 mt-6">
            {[
              { label: 'Projects Delivered', value: '120+' },
              { label: 'Production Hours', value: '8,400' },
              { label: 'Platforms Covered', value: '16' },
            ].map((s) => (
              <div
                key={s.label}
                className="bg-[#630505]/35 border border-white/10 rounded-xl p-4 backdrop-blur-sm"
              >
                <p className="text-2xl font-display font-bold">{s.value}</p>
                <p className="text-[10px] tracking-widest uppercase text-white/40 mt-1">
                  {s.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
