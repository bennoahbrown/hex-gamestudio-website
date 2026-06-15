import Image from "next/image";

export default function Footer() {
  return (
    <footer className="border-t px-6 py-8" style={{ borderColor: "var(--surface-border)", background: "rgba(0,0,0,0.95)" }}>
      <div className="max-w-6xl mx-auto">
        <div className="grid gap-8 lg:grid-cols-12">
          {/* Left: Studio info */}
          <div className="lg:col-span-5">
            <div className="flex items-center gap-3 text-xl font-bold tracking-tight" style={{ color: "rgba(255,255,255,0.95)" }}>
              <Image
                src="/hex-logo.png"
                alt="Hex Game Studio logo"
                width={28}
                height={28}
                className="opacity-90"
              />
              HEX GAME STUDIO
            </div>
            <p className="mt-2 text-sm leading-6" style={{ color: "rgba(255,255,255,0.65)" }}>
              Independent iLottery game developer and design house focused on building original, concept-driven mechanics.
            </p>
            <div className="mt-3">
              <div className="text-xs tracking-widest uppercase" style={{ color: "rgba(0,255,140,0.75)" }}>
                ORIGINAL · INTUITIVE · LASTING
              </div>
            </div>
          </div>

          {/* Middle: Navigation */}
          <div className="lg:col-span-4">
            <div className="text-xs font-semibold tracking-widest uppercase mb-3" style={{ color: "rgba(255,255,255,0.5)" }}>
              NAVIGATE
            </div>
            <div className="space-y-2">
              <a href="/" className="block text-sm link-hover-green" style={{ color: "rgba(255,255,255,0.75)" }}>
                Home
              </a>
              <a href="/studio" className="block text-sm link-hover-green" style={{ color: "rgba(255,255,255,0.75)" }}>
                Studio
              </a>
              <a href="/games" className="block text-sm link-hover-green" style={{ color: "rgba(255,255,255,0.75)" }}>
                Games
              </a>
              <a href="/games/cash-clock" className="block text-sm link-hover-green" style={{ color: "rgba(255,255,255,0.75)" }}>
                Cash Clock
              </a>
              <a href="/games/chance-lottery" className="block text-sm link-hover-green" style={{ color: "rgba(255,255,255,0.75)" }}>
                Chance Lottery
              </a>
              <a href="/contact" className="block text-sm link-hover-green" style={{ color: "rgba(255,255,255,0.75)" }}>
                Contact
              </a>
            </div>
          </div>

          {/* Right: Contact info */}
          <div className="lg:col-span-3">
            <div className="text-xs font-semibold tracking-widest uppercase mb-3" style={{ color: "rgba(255,255,255,0.5)" }}>
              CONNECT
            </div>
            <a 
              href="mailto:contact@hexgamestudio.com" 
              className="block text-sm link-hover-green" 
              style={{ color: "rgba(255,255,255,0.75)" }}
            >
              contact@hexgamestudio.com
            </a>
          </div>
        </div>

        {/* Bottom row: Copyright */}
        <div className="mt-6 pt-4 border-t" style={{ borderColor: "rgba(255,255,255,0.1)" }}>
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
            <div className="text-xs" style={{ color: "rgba(255,255,255,0.45)" }}>
              © {new Date().getFullYear()} Hex Game Studio. All rights reserved.
            </div>
            <div className="text-xs" style={{ color: "rgba(255,255,255,0.45)" }}>
              Original mechanics. Compliant systems. Built to last.
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
