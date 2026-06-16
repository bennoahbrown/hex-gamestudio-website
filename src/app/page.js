// src/app/page.js

import GameCarousel from '@/components/GameCarousel';

export default function Home() {
  return (
    <main className="min-h-screen text-[var(--fg)]" style={{ background: "transparent" }}>
      {/* HERO */}
      <section className="relative overflow-hidden">
        {/* Content */}
        <div className="px-4 sm:px-6 pb-12 sm:pb-16 overflow-hidden">
          <div className="mx-auto max-w-6xl overflow-hidden">
          <div className="grid items-center gap-8 sm:gap-12 lg:gap-14 lg:grid-cols-12 lg:items-start">
            {/* Left: headline */}
            <div className="lg:col-span-7">
              <h1 className="heading-hero text-[clamp(72px,8vw,92px)]">
                <span className="block">
                  <span style={{ color: "#ffffff" }}>ORIGINAL </span>
                  <span
                    style={{
                      color: "var(--nav-accent, #00ff8a)",
                      textShadow: "0 0 26px rgba(0,255,140,0.22)",
                    }}
                  >
                    iLOTTERY GAMES
                  </span>
                </span>
              </h1>

              {/* Green outlined stack */}
              <div className="mt-4 sm:mt-6 space-y-1">
                      {["TIME-BASED MECHANICS", "UNIVERSAL CONCEPTS"].map((t) => (
                  <div
                    key={t}
                    className="text-2xl font-semibold tracking-[0.02em] sm:text-2xl lg:text-3xl"
                    style={{
                      color: "transparent",
                      WebkitTextStroke: "1px rgba(0,255,140,0.55)",
                    }}
                  >
                    {t}
                  </div>
                ))}
              </div>

              <p className="mt-5 sm:mt-7 max-w-xl text-base sm:text-lg leading-7 sm:leading-8 text-[var(--muted)]">
                Hex Game Studio designs concept-driven iLottery games — not reskins — starting with time as a universal human driver.
              </p>

              <p className="mt-3 sm:mt-4 max-w-xl text-sm sm:text-base leading-6 sm:leading-7 font-medium" style={{ color: "rgba(0,255,140,0.85)" }}>
                Original mechanics. Intuitive play. Built to last.
              </p>

            </div>

            {/* Right: “figure” + CTA */}
            <div className="lg:col-span-5 flex items-center justify-center lg:items-stretch lg:self-stretch">
              {/* Figure container (placeholder for later real image/video) */}
              <div className="relative w-full max-w-[280px] sm:max-w-[350px] md:max-w-[400px] lg:max-w-none lg:h-full lg:flex lg:items-center">
                <div className="w-full lg:flex lg:items-center lg:justify-center lg:h-full">
                  <img
                    src="/hero-games.webp"
                    alt="Cash Clock and Chance Lottery key art"
                    className="h-auto w-full object-contain"
                    style={{ imageRendering: "auto", maxHeight: "400px" }}
                  />

                  {/* “motion smear” accents */}
                  <div
                    className="absolute -left-10 top-16 h-10 w-52 opacity-[0.25]"
                    style={{
                      background:
                        "linear-gradient(90deg, rgba(0,255,140,0), rgba(0,255,140,0.85), rgba(0,255,140,0))",
                      filter: "blur(0.5px)",
                      transform: "rotate(-6deg)",
                    }}
                  />
                  <div
                    className="absolute -left-6 top-32 h-10 w-60 opacity-[0.18]"
                    style={{
                      background:
                        "linear-gradient(90deg, rgba(255,0,200,0), rgba(255,0,200,0.8), rgba(255,0,200,0))",
                      filter: "blur(0.5px)",
                      transform: "rotate(-4deg)",
                    }}
                  />
                  <div
                    className="absolute -left-2 top-52 h-10 w-52 opacity-[0.16]"
                    style={{
                      background:
                        "linear-gradient(90deg, rgba(0,255,255,0), rgba(0,255,255,0.85), rgba(0,255,255,0))",
                      filter: "blur(0.5px)",
                      transform: "rotate(-2deg)",
                    }}
                  />
                </div>

              </div>
            </div>
          </div>

          {/* Secondary CTA row */}
          <div className="mt-6 sm:mt-8 grid gap-4 sm:gap-6 lg:grid-cols-12 lg:items-center">
            {/* First row: Studio Story + Contact */}
            <div className="lg:col-span-7 flex flex-row gap-3 sm:gap-4 lg:justify-start">
              <a
                href="/studio"
                className="inline-flex h-11 sm:h-12 flex-1 lg:flex-none items-center justify-center text-center px-3 sm:px-6 lg:px-8 text-sm font-semibold whitespace-nowrap btn-cta-invert"
                style={{ background: "var(--cta-bg)", color: "var(--cta-fg)", minWidth: 0 }}
              >
                Studio Story
              </a>

              <a
                href="/contact"
                className="inline-flex h-11 sm:h-12 flex-1 lg:flex-none items-center justify-center text-center border px-3 sm:px-5 lg:px-8 text-sm font-semibold whitespace-nowrap btn-hover-green"
                style={{
                  borderColor: "rgba(255,255,255,0.18)",
                  color: "rgba(255,255,255,0.88)",
                  background: "rgba(0,0,0,0.20)",
                  minWidth: 0,
                }}
              >
                Contact
              </a>
            </div>

            {/* Second row: Explore Games + Cash Clock + Chance Lottery */}
            <div className="lg:col-span-5 flex flex-row w-full items-stretch gap-2 sm:gap-3">
              <a
                href="/games"
                className="inline-flex h-11 sm:h-12 flex-1 items-center justify-center text-center px-2 sm:px-3 text-xs sm:text-sm font-semibold btn-cta-invert"
                style={{ background: "var(--cta-bg)", color: "var(--cta-fg)", minWidth: 0 }}
              >
                Explore Games
              </a>
              <a
                href="/games/cash-clock"
                className="inline-flex h-11 sm:h-12 flex-1 items-center justify-center text-center border px-2 sm:px-3 text-xs sm:text-sm font-semibold btn-hover-green"
                style={{
                  borderColor: "rgba(0,255,140,0.55)",
                  color: "rgba(220,255,235,0.95)",
                  background:
                    "linear-gradient(180deg, rgba(0,0,0,0.45), rgba(0,0,0,0.20))",
                  boxShadow: "0 0 0 1px rgba(0,255,140,0.18) inset",
                  minWidth: 0,
                }}
              >
                Cash Clock
              </a>
              <a
                href="/games/chance-lottery"
                className="inline-flex h-11 sm:h-12 flex-1 items-center justify-center text-center border px-2 sm:px-3 text-xs sm:text-sm font-semibold btn-hover-green"
                style={{
                  borderColor: "rgba(0,255,140,0.55)",
                  color: "rgba(220,255,235,0.95)",
                  background:
                    "linear-gradient(180deg, rgba(0,0,0,0.45), rgba(0,0,0,0.20))",
                  boxShadow: "0 0 0 1px rgba(0,255,140,0.18) inset",
                  minWidth: 0,
                }}
              >
                Chance Lottery
              </a>
            </div>
          </div>
          </div>
        </div>
      </section>

      {/* Matrix-style separator */}
      <div className="px-6">
        <div className="mx-auto max-w-6xl">
          <div className="relative h-px overflow-hidden" style={{ background: "rgba(0,255,140,0.15)" }}>
            <div className="absolute inset-0 flex items-center justify-center gap-1 overflow-hidden" style={{ fontFamily: "var(--font-fira-code)", fontSize: "10px", color: "rgba(0,255,140,0.6)", letterSpacing: "0.5em" }}>
              {"ORIGINAL >>> INTUITIVE >>> BUILT_TO_LAST >>> CONCEPT_DRIVEN".split(" ").map((code, i) => <span key={i} className="opacity-50">{code}</span>)}
            </div>
          </div>
        </div>
      </div>

      {/* COMBINED MARKET SECTION */}
      <section
        className="px-4 sm:px-6 py-10 sm:py-12"
      >
        <div className="mx-auto max-w-6xl">
          <div className="grid gap-8 sm:gap-0 lg:grid-cols-12 items-start">
            {/* Left: The Market Is Growing */}
            <div className="lg:col-span-5">
              <h2 className="text-3xl sm:text-3xl lg:text-4xl font-bold tracking-tight" style={{ fontFamily: "var(--font-inter)", textTransform: "uppercase" }}>
                The Market Is Growing. Innovation Is Not.
              </h2>
              <p className="mt-4 text-base sm:text-lg leading-6 sm:leading-7" style={{ color: "rgba(0,255,140,0.90)" }}>
                Most iLottery games today are reskins of familiar mechanics.
              </p>
              <p className="mt-3 text-base sm:text-lg leading-6 sm:leading-7 text-[var(--muted)]">
                They rely on interchangeable symbols and prioritize speed of release over longevity.
              </p>
              <p className="mt-3 text-base sm:text-lg leading-6 sm:leading-7 font-medium" style={{ color: "rgba(220,255,235,0.95)" }}>
                The result is a crowded market full of games that look different — but play the same.
              </p>
            </div>

            {/* Horizontal Divider on mobile, Vertical on desktop */}
            <div className="lg:col-span-2">
              {/* Mobile: Horizontal divider */}
              <div className="lg:hidden flex items-center justify-center my-6">
                <div className="relative h-px overflow-hidden" style={{ width: "50%", background: "rgba(0,255,140,0.15)" }}>
                  <div className="absolute inset-0 flex items-center justify-center gap-1 overflow-hidden" style={{ fontFamily: "var(--font-fira-code)", fontSize: "8px", color: "rgba(0,255,140,0.6)", letterSpacing: "0.5em" }}>
                    {"INNOVATION >>> MECHANICS".split(" ").map((code, i) => <span key={i} className="opacity-50">{code}</span>)}
                  </div>
                </div>
              </div>
              {/* Desktop: Vertical divider */}
              <div className="hidden lg:flex items-start justify-center pt-2">
                <div className="relative w-px overflow-hidden" style={{ height: "280px", background: "rgba(0,255,140,0.15)" }}>
                  <div className="absolute inset-0 flex flex-col items-center justify-center gap-1 overflow-hidden" style={{ fontFamily: "var(--font-fira-code)", fontSize: "10px", color: "rgba(0,255,140,0.6)", letterSpacing: "0.5em", writingMode: "vertical-rl", transform: "rotate(180deg)" }}>
                    {"INNOVATION MECHANICS UNIVERSAL".split(" ").map((code, i) => <span key={i} className="opacity-50">{code}</span>)}
                  </div>
                </div>
              </div>
            </div>

            {/* Right: PLAYERS DON'T NEED MORE SYMBOLS */}
            <div className="lg:col-span-5">
              <h2 className="text-3xl sm:text-3xl lg:text-4xl font-bold tracking-tight" style={{ fontFamily: "var(--font-inter)", textTransform: "uppercase" }}>
                PLAYERS DON'T NEED MORE SYMBOLS.
              </h2>
              <p className="mt-4 text-base sm:text-lg leading-6 sm:leading-7" style={{ color: "rgba(0,255,140,0.90)" }}>
                They need mechanics they intuitively understand.
              </p>
              <p className="mt-3 text-base sm:text-lg leading-6 sm:leading-7 text-[var(--muted)]">
                Games built on universal human concepts reduce learning friction, increase anticipation, and create emotional engagement without explanation.
              </p>
              <p className="mt-3 text-base sm:text-lg leading-6 sm:leading-7 font-medium" style={{ color: "rgba(220,255,235,0.95)" }}>
                That's where innovation actually happens.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Matrix-style separator */}
      <div className="px-6">
        <div className="mx-auto max-w-6xl">
          <div className="relative h-px overflow-hidden" style={{ background: "rgba(0,255,140,0.15)" }}>
            <div className="absolute inset-0 flex items-center justify-center gap-1 overflow-hidden" style={{ fontFamily: "var(--font-fira-code)", fontSize: "10px", color: "rgba(0,255,140,0.6)", letterSpacing: "0.5em" }}>
              {"INNOVATION >>> MECHANICS >>> UNIVERSAL_CONCEPTS >>> PORTFOLIO".split(" ").map((code, i) => <span key={i} className="opacity-50">{code}</span>)}
            </div>
          </div>
        </div>
      </div>

      {/* GAME CAROUSEL: CASH CLOCK & CHANCE LOTTERY */}
      <section className="px-4 sm:px-6 py-10 sm:py-12">
        <div className="mx-auto max-w-6xl">
          <GameCarousel />
        </div>
      </section>
    </main>
  );
}