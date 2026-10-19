export default function Navbar() {
  return (
    <header className="h-20 w-full fixed top-0 left-0 z-50 px-8 md:px-16 flex items-center justify-between bg-black/30 backdrop-blur-md border-b border-white/10 transition-colors">
      {/* ── Top-Left Brand Anchor ── */}
      <a href="#" className="flex items-center gap-3.5 group">
        <img
          src="/assets/logo-semicolon.jpg"
          alt="Semicolon Creative Logo"
          className="h-[32px] w-[32px] rounded-lg object-cover border border-white/10 group-hover:border-[#C3180D]/60 transition-colors duration-200"
        />
        <span className="text-white font-display text-[14px] font-semibold tracking-[0.1em] uppercase">
          SEMICOLON CREATIVE
        </span>
      </a>

      {/* ── Top-Center Menu (Spacious, Swiss Modern Style) ── */}
      <nav className="hidden md:flex items-center gap-8 lg:gap-10">
        <a
          href="#capabilities"
          className="text-[13px] font-normal text-white/70 hover:text-white transition-colors duration-200 tracking-wider uppercase"
        >
          CAPABILITIES
        </a>
        <a
          href="#btl-division"
          className="text-[13px] font-normal text-white/70 hover:text-white transition-colors duration-200 tracking-wider uppercase"
        >
          BTL DIVISION
        </a>
        <a
          href="#showcase"
          className="text-[13px] font-normal text-white/70 hover:text-white transition-colors duration-200 tracking-wider uppercase"
        >
          SHOWCASE
        </a>
        <a
          href="#about"
          className="text-[13px] font-normal text-white/70 hover:text-white transition-colors duration-200 tracking-wider uppercase"
        >
          ABOUT
        </a>
      </nav>

      {/* ── Top-Right Action Pill ── */}
      <div className="flex items-center gap-4">
        <a
          href="#brief"
          className="bg-white text-black px-6 py-2.5 rounded-full text-xs font-semibold hover:bg-[#C3180D] hover:text-white transition-all duration-300 shadow-md hover:shadow-[#C3180D]/20 inline-flex items-center gap-1.5"
        >
          <span>INITIATE BRIEF</span>
          <span>→</span>
        </a>
      </div>
    </header>
  )
}
