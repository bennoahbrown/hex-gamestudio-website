export default function CashClockPage() {
  return (
    <main className="min-h-screen text-[var(--fg)]" style={{ background: "transparent" }}>
      {/* Hero */}
      <section className="px-4 sm:px-6 pb-10 sm:pb-12">
        <div className="mx-auto max-w-6xl">
          <div className="lg:grid lg:gap-12 lg:grid-cols-12 lg:items-center">
            <div className="lg:col-span-7">
              <div className="text-xs sm:text-sm font-medium uppercase" style={{ color: "rgba(0,255,140,0.75)", fontFamily: "var(--font-fira-code)" }}>
                Game / A Time-Based E-Instant Game
              </div>

              <h1 className="heading-hero text-[clamp(72px,8vw,92px)] mt-3">
                <span className="block text-white">Cash Clock</span>
              </h1>

              <div className="mt-4 space-y-1">
                {["TIME IS THE MECHANIC", "ANTICIPATION BUILT IN", "IMMEDIATE CLARITY"].map((t) => (
                  <div
                    key={t}
                    className="text-2xl font-semibold tracking-[0.02em] sm:text-xl lg:text-2xl"
                    style={{
                      color: "transparent",
                      WebkitTextStroke: "1px rgba(0,255,140,0.50)",
                    }}
                  >
                    {t}
                  </div>
                ))}
              </div>

              <p className="mt-4 sm:mt-6 max-w-2xl text-base sm:text-lg leading-7 sm:leading-8 text-[var(--muted)]">
                Cash Clock is the first e-instant release from Hex Game Studio and the foundation of our game portfolio.
              </p>

              {/* Image floated on mobile/tablet — anchored bottom-right, between paragraphs */}
              <div className="float-right w-[340px] sm:w-[490px] md:w-[620px] h-[312px] sm:h-[440px] md:h-[540px] lg:hidden ml-3" style={{ marginRight: '-136px' }}>
                <img
                  src="/cash-clock.webp"
                  alt="Cash Clock key art"
                  className="w-full h-full object-contain"
                  style={{ imageRendering: "auto" }}
                />
              </div>

              <p className="mt-3 sm:mt-4 max-w-2xl text-base sm:text-lg leading-7 sm:leading-8 text-[var(--muted)]">
                It is built around time as the core mechanic — not a theme — creating intuitive play, natural anticipation, and meaningful suspense.
              </p>

              {/* Clear float before CTA so buttons render full-width */}
              <div className="clear-both lg:hidden"></div>

              <div className="mt-8 sm:mt-10 flex flex-row gap-3 sm:gap-4">
                <a
                  href="/contact"
                  className="inline-flex h-12 items-center justify-center px-6 text-sm font-semibold btn-cta-invert flex-1 whitespace-nowrap"
                  style={{ background: "var(--cta-bg)", color: "var(--cta-fg)", minWidth: 0 }}
                >
                  Learn More
                </a>

                <a
                  href="/games"
                  className="inline-flex h-12 items-center justify-center border px-6 text-sm font-semibold btn-hover-green flex-1 whitespace-nowrap"
                  style={{
                    borderColor: "rgba(0,255,140,0.35)",
                    background: "transparent",
                    color: "rgba(0,255,140,0.85)",
                    fontFamily: "var(--font-fira-code)",
                    minWidth: 0
                  }}
                >
                  <span className="sm:hidden">← Back</span>
                  <span className="hidden sm:inline">← Back to Games</span>
                </a>
              </div>
            </div>

            {/* Desktop: square image */}
            <div className="hidden lg:flex lg:col-span-5 justify-center items-center">
              <div className="w-[400px] h-[400px] aspect-square">
                <img
                  src="/cash-clock.webp"
                  alt="Cash Clock key art"
                  className="w-full h-full object-contain"
                  style={{ imageRendering: "auto" }}
                />
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
              {"TIME.now() >>> MECHANIC >>> ANTICIPATION++ >>> 12:34:56".split(" ").map((code, i) => <span key={i} className="opacity-50">{code}</span>)}
            </div>
          </div>
        </div>
      </div>


      {/* COMBINED SECTION: Time Is the Mechanic + How It Feels to Play */}
      <section
        className="px-4 sm:px-6 py-10 sm:py-12"
      >
        <div className="mx-auto max-w-6xl">
          <div className="grid gap-0 lg:grid-cols-12 items-start">
            {/* Left: Time Is the Mechanic */}
            <div className="lg:col-span-5">
              <h2 className="text-3xl font-bold tracking-tight sm:text-4xl" style={{ fontFamily: "var(--font-inter)", textTransform: "uppercase" }}>
                Time Is the Mechanic
              </h2>
              <p className="mt-4 text-lg leading-7" style={{ color: "rgba(0,255,140,0.90)" }}>
                In Cash Clock, the clock is not visual decoration.
              </p>
              <p className="mt-3 text-lg leading-7 text-[var(--muted)]">
                Time itself drives gameplay, pacing, and tension. Players immediately understand how the system works because everyone understands time.
              </p>
              <p className="mt-3 text-lg leading-7 font-medium" style={{ color: "rgba(220,255,235,0.95)" }}>
                This eliminates learning friction while increasing emotional engagement.
              </p>
            </div>

            {/* Horizontal Divider on mobile, Vertical on desktop */}
            <div className="lg:col-span-2">
              {/* Mobile: Horizontal divider */}
              <div className="lg:hidden flex items-center justify-center my-6">
                <div className="relative h-px overflow-hidden" style={{ width: "50%", background: "rgba(0,255,140,0.15)" }}>
                  <div className="absolute inset-0 flex items-center justify-center gap-1 overflow-hidden" style={{ fontFamily: "var(--font-fira-code)", fontSize: "8px", color: "rgba(0,255,140,0.6)", letterSpacing: "0.5em" }}>
                    {"TIME >>> MECHANIC".split(" ").map((code, i) => <span key={i} className="opacity-50">{code}</span>)}
                  </div>
                </div>
              </div>
              {/* Desktop: Vertical divider */}
              <div className="hidden lg:flex items-start justify-center pt-2">
                <div className="relative w-px overflow-hidden" style={{ height: "280px", background: "rgba(0,255,140,0.15)" }}>
                  <div className="absolute inset-0 flex flex-col items-center justify-center gap-1 overflow-hidden" style={{ fontFamily: "var(--font-fira-code)", fontSize: "10px", color: "rgba(0,255,140,0.6)", letterSpacing: "0.5em", writingMode: "vertical-rl", transform: "rotate(180deg)" }}>
                    {"TIME MECHANIC ANTICIPATION".split(" ").map((code, i) => <span key={i} className="opacity-50">{code}</span>)}
                  </div>
                </div>
              </div>
            </div>

            {/* Right: How It Feels to Play */}
            <div className="lg:col-span-5">
              <h2 className="text-3xl font-bold tracking-tight sm:text-4xl" style={{ fontFamily: "var(--font-inter)", textTransform: "uppercase" }}>
                How It Feels to Play
              </h2>
              <p className="mt-4 text-lg leading-7" style={{ color: "rgba(0,255,140,0.90)" }}>
                Cash Clock is designed to feel precise, suspenseful, and familiar yet new.
              </p>
              <p className="mt-3 text-lg leading-7 text-[var(--muted)]">
                Near-miss moments are grounded in the logic of time, making outcomes feel meaningful rather than arbitrary.
              </p>
              <p className="mt-3 text-lg leading-7 font-medium" style={{ color: "rgba(220,255,235,0.95)" }}>
                Tension without confusion. Anticipation without instruction.
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
              {"PARTNER >>> EQL_GAMES >>> DEPLOY >>> SCALE".split(" ").map((code, i) => <span key={i} className="opacity-50">{code}</span>)}
            </div>
          </div>
        </div>
      </div>


      {/* Partnership */}
      <section
        className="px-4 sm:px-6 py-16 sm:py-20 lg:py-24"
      >
        <div className="mx-auto max-w-6xl">
          <div className="lg:grid lg:gap-12 lg:grid-cols-12 lg:items-center">
            <div className="lg:col-span-7">
              <h2 className="text-3xl font-bold tracking-tight sm:text-4xl" style={{ fontFamily: "var(--font-inter)", textTransform: "uppercase" }}>
                Partnership
              </h2>

              <p className="mt-4 max-w-3xl text-lg leading-8 text-[var(--muted)]">
                Cash Clock is distributed in partnership with EQL Games, a Louisville-based industry leader serving as an original game studio, third-party content aggregator, and boutique licensor.
              </p>
              <p className="mt-4 max-w-3xl text-lg leading-8 text-[var(--muted)]">
                With over 24 partner studios and 300+ available games across 8 lotteries, EQL Games is committed to elevating original game concepts and helping reimagine how players interact with lottery games in a digital-led world.
              </p>
              
              <p className="mt-4 max-w-3xl text-lg leading-8 text-[var(--muted)]">
                This partnership reflects EQL's mission to support forward-thinking startups and bring fresh thinking to the lottery space.
              </p>

              {/* Mobile-only EQL logo — centered, below body text, above CTA */}
              <div className="lg:hidden mt-8 flex justify-center">
                <img
                  src="/eql-logo.png"
                  alt="EQL Games"
                  className="w-[160px] h-auto object-contain"
                  style={{ imageRendering: "auto" }}
                />
              </div>

              <div className="mt-6">
                <a
                  href="https://www.eqlgames.com/eql-games-onboards-chance-lottery-reinforcing-commitment-to-lottery-startups/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center border px-6 py-3 text-sm font-semibold btn-hover-green"
                  style={{
                    borderColor: "rgba(0,255,140,0.35)",
                    background: "transparent",
                    color: "rgba(0,255,140,0.85)",
                  }}
                >
                  Read Press Release →
                </a>
              </div>
            </div>

            {/* Desktop: logo at 60% of column width */}
            <div className="hidden lg:flex lg:col-span-5 justify-center items-center">
              <div className="flex items-center justify-center">
                <img
                  src="/eql-logo.png"
                  alt="EQL Games"
                  className="w-[240px] h-auto object-contain"
                  style={{ imageRendering: "auto" }}
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}