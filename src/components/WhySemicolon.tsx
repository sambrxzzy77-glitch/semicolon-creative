import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { ArrowRight, Clock, Mail, Phone, Shield } from 'lucide-react'

/* ──────────────────────────── chips ──────────────────────────────────── */
const SERVICE_CHIPS = [
  'Strategy',
  'OVC / TVC',
  'Outdoor',
  'BTL Activation',
  'Turnkey Event',
  '360 Campaign',
] as const

/* ──────────────────────────── contrast matrix ───────────────────────── */
const contrasts = [
  { without: 'Fragmented vendor chains', withSC: 'Single creative command center' },
  { without: 'Generic templates', withSC: 'Bespoke brand architecture' },
  { without: 'Strategy decks that gather dust', withSC: 'Strategy that hits the street' },
  { without: 'Delayed production cycles', withSC: 'In-house studio, 48h turnaround' },
  { without: 'Vanity metrics', withSC: 'Measurable ground impact' },
]

/* ──────────────────────────── component ─────────────────────────────── */
export default function WhySemicolon() {
  const [selected, setSelected] = useState<Set<string>>(new Set())
  const [formData, setFormData] = useState({ name: '', email: '', company: '', message: '' })
  const [submitted, setSubmitted] = useState(false)
  const [dhakaTime, setDhakaTime] = useState('')

  /* Live Dhaka clock */
  useEffect(() => {
    const tick = () => {
      const now = new Date()
      const dhaka = new Intl.DateTimeFormat('en-GB', {
        timeZone: 'Asia/Dhaka',
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
        hour12: false,
      }).format(now)
      setDhakaTime(dhaka)
    }
    tick()
    const id = setInterval(tick, 1000)
    return () => clearInterval(id)
  }, [])

  const toggleChip = (chip: string) => {
    setSelected((prev) => {
      const next = new Set(prev)
      next.has(chip) ? next.delete(chip) : next.add(chip)
      return next
    })
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    const brief = {
      ...formData,
      services: [...selected],
      id: Date.now(),
      submittedAt: new Date().toISOString(),
    }
    const existing = JSON.parse(localStorage.getItem('semicolon-briefs') || '[]')
    existing.push(brief)
    localStorage.setItem('semicolon-briefs', JSON.stringify(existing))
    setSubmitted(true)
    setTimeout(() => {
      setSubmitted(false)
      setFormData({ name: '', email: '', company: '', message: '' })
      setSelected(new Set())
    }, 3000)
  }

  return (
    <>
      <section id="about" className="relative py-28 overflow-hidden">
        <div className="max-w-[1440px] mx-auto px-6 lg:px-10">
          {/* Header */}
          <div className="mb-16">
            <p className="text-[11px] tracking-[0.25em] uppercase text-crimson-red font-semibold mb-3">
              Why Us
            </p>
            <h2 className="text-3xl sm:text-4xl font-display font-bold tracking-tight">
              Why Semicolon?
            </h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 xl:gap-24">
            {/* ── Left: Contrast Matrix ── */}
            <div>
              <div className="grid grid-cols-[1fr_auto_1fr] gap-x-6 gap-y-5 items-center">
                <p className="text-[10px] tracking-[0.2em] uppercase text-white/25 font-semibold">
                  Without Us
                </p>
                <span />
                <p className="text-[10px] tracking-[0.2em] uppercase text-crimson-red font-semibold">
                  With Semicolon
                </p>

                {contrasts.map((c, i) => (
                  <motion.div
                    key={i}
                    className="contents"
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.08 }}
                  >
                    <p className="text-sm text-white/30 line-through decoration-white/10">
                      {c.without}
                    </p>
                    <span className="text-white/10">→</span>
                    <p className="text-sm text-pure-white font-medium">
                      {c.withSC}
                    </p>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* ── Right: Brief Terminal ── */}
            <div>
              <div id="brief" className="bg-[#0a0101] border border-white/[0.06] rounded-2xl p-6 lg:p-8 scroll-mt-28">
                <div className="flex items-center gap-2 mb-6">
                  <span className="h-2 w-2 rounded-full bg-crimson-red" />
                  <span className="h-2 w-2 rounded-full bg-white/10" />
                  <span className="h-2 w-2 rounded-full bg-white/10" />
                  <span className="ml-3 text-[10px] tracking-widest uppercase text-white/20">
                    Project Brief Terminal
                  </span>
                </div>

                {submitted ? (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="py-16 text-center"
                  >
                    <p className="text-crimson-red font-display font-bold text-xl mb-2">
                      Brief Received
                    </p>
                    <p className="text-sm text-white/40">
                      We&rsquo;ll be in touch within 24 hours.
                    </p>
                  </motion.div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-6">
                    {/* Chips */}
                    <div>
                      <label className="text-[10px] tracking-widest uppercase text-white/30 mb-3 block">
                        Services Required
                      </label>
                      <div className="flex flex-wrap gap-2">
                        {SERVICE_CHIPS.map((chip) => (
                          <button
                            key={chip}
                            type="button"
                            onClick={() => toggleChip(chip)}
                            className={`
                              px-3.5 py-1.5 rounded-full text-xs font-medium transition-all
                              ${
                                selected.has(chip)
                                  ? 'bg-crimson-red text-pure-white'
                                  : 'bg-white/[0.04] text-white/40 border border-white/[0.06] hover:border-white/15 hover:text-white/60'
                              }
                            `}
                          >
                            {chip}
                          </button>
                        ))}
                      </div>
                    </div>

                    {/* Inputs */}
                    {[
                      { key: 'name', label: 'Full Name', type: 'text' },
                      { key: 'email', label: 'Email', type: 'email' },
                      { key: 'company', label: 'Company / Brand', type: 'text' },
                    ].map((f) => (
                      <div key={f.key}>
                        <label className="text-[10px] tracking-widest uppercase text-white/30 mb-2 block">
                          {f.label}
                        </label>
                        <input
                          type={f.type}
                          required
                          value={formData[f.key as keyof typeof formData]}
                          onChange={(e) =>
                            setFormData((prev) => ({
                              ...prev,
                              [f.key]: e.target.value,
                            }))
                          }
                          className="w-full bg-transparent border-b border-white/10 focus:border-crimson-red pb-2 text-sm text-pure-white outline-none transition-colors placeholder:text-white/15"
                          placeholder={`Enter ${f.label.toLowerCase()}`}
                        />
                      </div>
                    ))}

                    {/* Message */}
                    <div>
                      <label className="text-[10px] tracking-widest uppercase text-white/30 mb-2 block">
                        Brief
                      </label>
                      <textarea
                        rows={3}
                        value={formData.message}
                        onChange={(e) =>
                          setFormData((prev) => ({ ...prev, message: e.target.value }))
                        }
                        className="w-full bg-transparent border-b border-white/10 focus:border-crimson-red pb-2 text-sm text-pure-white outline-none transition-colors placeholder:text-white/15 resize-none"
                        placeholder="Describe your project..."
                      />
                    </div>

                    {/* Submit */}
                    <button
                      type="submit"
                      className="w-full flex items-center justify-center gap-2 py-3 bg-crimson-red text-pure-white text-sm font-semibold rounded-lg hover:bg-[#d91a0f] active:scale-[0.98] transition-all"
                    >
                      Initiate Brief
                      <ArrowRight size={14} />
                    </button>
                  </form>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ══════════════════════════ FOOTER ══════════════════════════════ */}
      <footer className="relative border-t border-white/[0.06] py-12">
        <div className="max-w-[1440px] mx-auto px-6 lg:px-10">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Clock */}
            <div className="flex items-center gap-3">
              <Clock size={14} className="text-crimson-red" />
              <div>
                <p className="text-xs text-white/30 mb-0.5">Dhaka (GMT+6)</p>
                <p className="font-mono text-sm text-pure-white tabular-nums">
                  {dhakaTime}
                </p>
              </div>
            </div>

            {/* Contacts */}
            <div className="flex items-center gap-3">
              <Mail size={14} className="text-crimson-red" />
              <p className="text-sm text-white/50">hello@semicoloncreative.co</p>
            </div>
            <div className="flex items-center gap-3">
              <Phone size={14} className="text-crimson-red" />
              <p className="text-sm text-white/50">+880 1XXX-XXXXXX</p>
            </div>
            <div className="flex items-center gap-3">
              <Shield size={14} className="text-white/15" />
              <p className="text-[10px] text-white/20 tracking-wider">
                TLS-256 ENCRYPTED
              </p>
            </div>
          </div>

          {/* Bottom bar */}
          <div className="mt-10 pt-6 border-t border-white/[0.04] flex flex-col sm:flex-row items-center justify-between gap-4">
            <p className="text-[10px] text-white/20 tracking-wider uppercase">
              &copy; {new Date().getFullYear()} Semicolon Creative. All rights reserved.
            </p>
            <p className="text-[10px] text-white/10 tracking-[0.3em] uppercase font-display">
              ; — Move Forward
            </p>
          </div>
        </div>
      </footer>
    </>
  )
}
