import { useState, useRef } from 'react'
import { motion } from 'framer-motion'

const QUOTE =
  'A strategy without execution remains an idea.\u2003\u2022\u2003Creative without direction becomes noise.\u2003\u2022\u2003We connect every touchpoint from strategy to street.\u2003\u2022\u2003'

export default function QuoteMarquee() {
  const [hovered, setHovered] = useState(false)
  const [tilt, setTilt] = useState({ rx: 0, ry: 0 })
  const wrapRef = useRef<HTMLDivElement>(null)

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!wrapRef.current) return
    const r = wrapRef.current.getBoundingClientRect()
    const x = (e.clientX - r.left) / r.width - 0.5
    const y = (e.clientY - r.top) / r.height - 0.5
    setTilt({ rx: y * -6, ry: x * 6 })
  }

  return (
    <section className="relative py-20 overflow-hidden select-none">
      {/* Top / bottom hairlines */}
      <div className="absolute top-0 left-0 right-0 h-px bg-white/[0.06]" />
      <div className="absolute bottom-0 left-0 right-0 h-px bg-white/[0.06]" />

      <div
        ref={wrapRef}
        style={{ perspective: 800 }}
        onMouseMove={handleMouseMove}
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => {
          setHovered(false)
          setTilt({ rx: 0, ry: 0 })
        }}
      >
        <motion.div
          animate={{ rotateX: tilt.rx, rotateY: tilt.ry }}
          transition={{ type: 'spring', stiffness: 100, damping: 20 }}
        >
          <div
            className="flex whitespace-nowrap"
            style={{
              animation: `marquee-scroll ${hovered ? '80s' : '35s'} linear infinite`,
            }}
          >
            {/* Duplicate text for seamless loop */}
            {[...Array(4)].map((_, i) => (
              <span
                key={i}
                className="text-3xl sm:text-4xl lg:text-5xl font-display font-bold tracking-tight text-white/[0.07] hover:text-white/[0.12] transition-colors px-2"
              >
                {QUOTE}
              </span>
            ))}
          </div>
        </motion.div>
      </div>

      {/* Keyframe injected via style tag */}
      <style>{`
        @keyframes marquee-scroll {
          0%   { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
      `}</style>
    </section>
  )
}
