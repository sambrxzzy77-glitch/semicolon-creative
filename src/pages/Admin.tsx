import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Lock, Trash2, ArrowLeft } from 'lucide-react'
import { Link } from 'react-router-dom'

/* ──────────────────────────── types ─────────────────────────────────── */
interface Brief {
  id: number
  name: string
  email: string
  company: string
  message: string
  services: string[]
  submittedAt: string
}

/* simple password — not production security */
const ADMIN_PASS = 'semicolon2024'

/* ──────────────────────────── component ─────────────────────────────── */
export default function Admin() {
  const [authed, setAuthed] = useState(false)
  const [pass, setPass] = useState('')
  const [error, setError] = useState(false)
  const [briefs, setBriefs] = useState<Brief[]>([])
  const [tab, setTab] = useState<'briefs' | 'videos'>('briefs')

  /* default video URLs (editable) */
  const [videos, setVideos] = useState(() => {
    const saved = localStorage.getItem('semicolon-videos')
    return saved
      ? JSON.parse(saved)
      : {
          reel: '/assets/video-new-1.mp4',
          ovc: '/assets/video-new-2.mp4',
          tvc: '/assets/video-new-3.mp4',
          short: '/assets/video-stickers.mp4',
        }
  })

  /* check auth on mount */
  useEffect(() => {
    if (sessionStorage.getItem('sc-admin') === '1') setAuthed(true)
  }, [])

  /* load briefs */
  useEffect(() => {
    if (authed) {
      const raw = JSON.parse(localStorage.getItem('semicolon-briefs') || '[]')
      setBriefs(raw)
    }
  }, [authed])

  const login = (e: React.FormEvent) => {
    e.preventDefault()
    if (pass === ADMIN_PASS) {
      setAuthed(true)
      sessionStorage.setItem('sc-admin', '1')
    } else {
      setError(true)
      setTimeout(() => setError(false), 1500)
    }
  }

  const deleteBrief = (id: number) => {
    const updated = briefs.filter((b) => b.id !== id)
    setBriefs(updated)
    localStorage.setItem('semicolon-briefs', JSON.stringify(updated))
  }

  const saveVideos = () => {
    localStorage.setItem('semicolon-videos', JSON.stringify(videos))
    alert('Video URLs saved.')
  }

  /* ── Gate ── */
  if (!authed) {
    return (
      <div className="min-h-screen flex items-center justify-center px-6">
        <motion.form
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          onSubmit={login}
          className="w-full max-w-sm bg-[#0a0101] border border-white/[0.06] rounded-2xl p-8"
        >
          <div className="flex items-center gap-2 mb-6 text-white/30">
            <Lock size={16} />
            <span className="text-[10px] tracking-widest uppercase">
              Admin Access
            </span>
          </div>
          <input
            type="password"
            value={pass}
            onChange={(e) => setPass(e.target.value)}
            placeholder="Enter password"
            className={`w-full bg-transparent border-b pb-2 text-sm text-pure-white outline-none transition-colors placeholder:text-white/20 ${
              error ? 'border-crimson-red' : 'border-white/10 focus:border-crimson-red'
            }`}
          />
          {error && (
            <p className="text-crimson-red text-xs mt-2">Invalid password</p>
          )}
          <button
            type="submit"
            className="mt-6 w-full py-2.5 bg-crimson-red text-pure-white text-sm font-semibold rounded-lg hover:bg-[#d91a0f] transition-colors"
          >
            Authenticate
          </button>
          <Link
            to="/"
            className="mt-4 flex items-center justify-center gap-1.5 text-xs text-white/30 hover:text-white/60 transition-colors"
          >
            <ArrowLeft size={12} /> Back to site
          </Link>
        </motion.form>
      </div>
    )
  }

  /* ── Dashboard ── */
  return (
    <div className="min-h-screen">
      {/* Top bar */}
      <div className="border-b border-white/[0.06] py-4 px-6 lg:px-10 flex items-center justify-between">
        <div className="flex items-center gap-4">
          <Link
            to="/"
            className="text-xs text-white/30 hover:text-white/60 transition-colors flex items-center gap-1"
          >
            <ArrowLeft size={12} /> Site
          </Link>
          <span className="text-[10px] tracking-widest uppercase text-white/20">
            Admin Panel
          </span>
        </div>
        <button
          onClick={() => {
            sessionStorage.removeItem('sc-admin')
            setAuthed(false)
          }}
          className="text-xs text-white/30 hover:text-crimson-red transition-colors"
        >
          Logout
        </button>
      </div>

      {/* Tabs */}
      <div className="max-w-5xl mx-auto px-6 lg:px-10 pt-8">
        <div className="flex gap-4 mb-8 border-b border-white/[0.06]">
          {(['briefs', 'videos'] as const).map((t) => (
            <button
              key={t}
              onClick={() => setTab(t)}
              className={`pb-3 text-xs tracking-widest uppercase transition-colors ${
                tab === t
                  ? 'text-crimson-red border-b-2 border-crimson-red'
                  : 'text-white/30 hover:text-white/60'
              }`}
            >
              {t === 'briefs' ? 'Client Briefs' : 'Video URLs'}
            </button>
          ))}
        </div>

        <AnimatePresence mode="wait">
          {tab === 'briefs' ? (
            <motion.div
              key="briefs"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            >
              {briefs.length === 0 ? (
                <p className="text-white/30 text-sm py-16 text-center">
                  No briefs submitted yet.
                </p>
              ) : (
                <div className="space-y-4">
                  {briefs.map((b) => (
                    <div
                      key={b.id}
                      className="bg-[#0a0101] border border-white/[0.06] rounded-xl p-5"
                    >
                      <div className="flex items-start justify-between gap-4">
                        <div className="flex-1 min-w-0">
                          <div className="flex items-center gap-3 mb-2">
                            <h3 className="text-sm font-bold truncate">
                              {b.name}
                            </h3>
                            <span className="text-[10px] text-white/20">
                              {new Date(b.submittedAt).toLocaleDateString()}
                            </span>
                          </div>
                          <p className="text-xs text-white/40 mb-1">
                            {b.email} · {b.company}
                          </p>
                          {b.services.length > 0 && (
                            <div className="flex flex-wrap gap-1.5 mb-2">
                              {b.services.map((s) => (
                                <span
                                  key={s}
                                  className="text-[9px] px-2 py-0.5 rounded-full bg-crimson-red/15 text-crimson-red"
                                >
                                  {s}
                                </span>
                              ))}
                            </div>
                          )}
                          {b.message && (
                            <p className="text-xs text-white/30 mt-2">
                              {b.message}
                            </p>
                          )}
                        </div>
                        <button
                          onClick={() => deleteBrief(b.id)}
                          className="text-white/20 hover:text-crimson-red transition-colors p-1"
                        >
                          <Trash2 size={14} />
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </motion.div>
          ) : (
            <motion.div
              key="videos"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="space-y-5"
            >
              {[
                { key: 'reel', label: '01 // Featured Reel' },
                { key: 'ovc', label: '02 // OVC Commercial' },
                { key: 'tvc', label: '03 // TVC Cinema' },
                { key: 'short', label: '04 // Short-Form' },
              ].map((v) => (
                <div key={v.key}>
                  <label className="text-[10px] tracking-widest uppercase text-white/30 mb-2 block">
                    {v.label}
                  </label>
                  <input
                    type="text"
                    value={videos[v.key as keyof typeof videos]}
                    onChange={(e) =>
                      setVideos((prev: typeof videos) => ({
                        ...prev,
                        [v.key]: e.target.value,
                      }))
                    }
                    className="w-full bg-transparent border-b border-white/10 focus:border-crimson-red pb-2 text-sm text-pure-white outline-none transition-colors font-mono"
                  />
                </div>
              ))}
              <button
                onClick={saveVideos}
                className="mt-4 px-6 py-2.5 bg-crimson-red text-pure-white text-sm font-semibold rounded-lg hover:bg-[#d91a0f] transition-colors"
              >
                Save URLs
              </button>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  )
}
