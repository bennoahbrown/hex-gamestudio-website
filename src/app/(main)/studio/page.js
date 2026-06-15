// src/app/studio/page.js
import SignalCard from "@/components/SignalCard";

export default function Studio() {
  return (
    <main
      className="min-h-screen"
      style={{ background: "transparent", color: "var(--fg)" }}
    >
      {/* HERO BAND (dark, atmospheric, same vibe as homepage) */}
      <section className="relative overflow-hidden">
        <div className="relative px-4 sm:px-6 pb-12 sm:pb-16">
          <div className="mx-auto max-w-6xl">
          {/* Removed: top eyebrow bar */}

          {/* big title block */}
          <div className="grid gap-8 sm:gap-10 lg:grid-cols-12 lg:items-start">
            <div className="lg:col-span-7">
              {/* Headline: ONLY "THE STUDIO" */}
              <h1 className="heading-hero text-[clamp(72px,8vw,92px)]">
                <span className="block text-white">STUDIO</span>
              </h1>

              {/* outlined stack */}
              <div className="mt-6 sm:mt-8 space-y-1 sm:space-y-2">
                {["ORIGINAL MECHANICS", "INTUITIVE SYSTEMS", "BUILT FOR LONGEVITY"].map((t) => (
                  <div
                    key={t}
                    className="text-2xl font-semibold tracking-[0.02em] sm:text-2xl lg:text-3xl xl:text-4xl"
                    style={{
                      color: "transparent",
                      WebkitTextStroke: "1px rgba(0,255,140,0.55)",
                    }}
                  >
                    {t}
                  </div>
                ))}
              </div>

              <p
                className="mt-6 sm:mt-8 lg:mt-10 max-w-xl text-base sm:text-lg leading-7 sm:leading-8"
                style={{ color: "rgba(255,255,255,0.78)" }}
              >
                Hex Game Studio is an independent iLottery game developer and design house focused on building original, concept-driven mechanics.
              </p>
              <p
                className="mt-3 sm:mt-4 max-w-xl text-base sm:text-lg leading-7 sm:leading-8 font-semibold"
                style={{ color: "rgba(255,255,255,0.90)" }}
              >
                We design games to last — not to launch and disappear.
              </p>
            </div>

            {/* right-side coordinate/system callout */}
            <div className="lg:col-span-5 flex justify-center lg:justify-start lg:self-stretch">
              <div className="relative w-full max-w-[280px] sm:max-w-[350px] md:max-w-[400px] lg:max-w-none lg:h-full lg:flex lg:items-center">
                <img
                  src="/studio-hero.png"
                  alt="Hex Game Studio"
                  className="h-auto w-full lg:h-full object-contain"
                  style={{ imageRendering: "auto", maxHeight: "400px" }}
                />
              </div>
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
              {"STUDIO >>> WHO_WE_ARE >>> WHY_NOW >>> MARKET_TIMING".split(" ").map((code, i) => <span key={i} className="opacity-50">{code}</span>)}
            </div>
          </div>
        </div>
      </div>

      {/* COMBINED: WHO WE ARE + WHY NOW */}
      <section className="px-4 sm:px-6 py-10 sm:py-12">
        <div className="mx-auto max-w-6xl">
          <div className="grid gap-8 sm:gap-0 lg:grid-cols-12 items-start">
            {/* Left: WHO WE ARE */}
            <div className="lg:col-span-5">
              <h2 className="text-3xl sm:text-3xl lg:text-4xl font-bold tracking-tight" style={{ fontFamily: "var(--font-inter)", textTransform: "uppercase" }}>
                WHO WE ARE
              </h2>
              <p className="mt-4 text-base sm:text-lg leading-6 sm:leading-7" style={{ color: "rgba(0,255,140,0.90)" }}>
                Hex Game Studio is an independent iLottery game developer and design house.
              </p>
              <p className="mt-3 text-base sm:text-lg leading-6 sm:leading-7 text-[var(--muted)]">
                We specialize in original, compliant game mechanics paired with premium, casino-grade presentation — built as modular systems designed for redeployment across jurisdictions.
              </p>
            </div>

            {/* Horizontal Divider on mobile, Vertical on desktop */}
            <div className="lg:col-span-2">
              {/* Mobile: Horizontal divider */}
              <div className="lg:hidden flex items-center justify-center my-6">
                <div className="relative h-px overflow-hidden" style={{ width: "50%", background: "rgba(0,255,140,0.15)" }}>
                  <div className="absolute inset-0 flex items-center justify-center gap-1 overflow-hidden" style={{ fontFamily: "var(--font-fira-code)", fontSize: "8px", color: "rgba(0,255,140,0.6)", letterSpacing: "0.5em" }}>
                    {"WHO >>> WHY".split(" ").map((code, i) => <span key={i} className="opacity-50">{code}</span>)}
                  </div>
                </div>
              </div>
              {/* Desktop: Vertical divider */}
              <div className="hidden lg:flex items-start justify-center pt-2">
                <div className="relative w-px overflow-hidden" style={{ height: "280px", background: "rgba(0,255,140,0.15)" }}>
                  <div className="absolute inset-0 flex flex-col items-center justify-center gap-1 overflow-hidden" style={{ fontFamily: "var(--font-fira-code)", fontSize: "10px", color: "rgba(0,255,140,0.6)", letterSpacing: "0.5em", writingMode: "vertical-rl", transform: "rotate(180deg)" }}>
                    {"WHO WHY NOW TIMING".split(" ").map((code, i) => <span key={i} className="opacity-50">{code}</span>)}
                  </div>
                </div>
              </div>
            </div>

            {/* Right: WHY NOW */}
            <div className="lg:col-span-5">
              <h2 className="text-3xl sm:text-3xl lg:text-4xl font-bold tracking-tight" style={{ fontFamily: "var(--font-inter)", textTransform: "uppercase" }}>
                WHY NOW
              </h2>
              <p className="mt-4 text-base sm:text-lg leading-6 sm:leading-7" style={{ color: "rgba(0,255,140,0.90)" }}>
                iLottery adoption is accelerating. Younger players are entering the category. Reskins are saturating the market.
              </p>
              <p className="mt-3 text-base sm:text-lg leading-6 sm:leading-7 font-medium" style={{ color: "rgba(220,255,235,0.95)" }}>
                The next wave of successful iLottery games won't just look new — they'll be new.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Matrix-style separator */}
      <div className="px-4 sm:px-6">
        <div className="mx-auto max-w-6xl">
          <div className="relative h-px overflow-hidden" style={{ background: "rgba(0,255,140,0.15)" }}>
            <div className="absolute inset-0 flex items-center justify-center gap-1 overflow-hidden" style={{ fontFamily: "var(--font-fira-code)", fontSize: "10px", color: "rgba(0,255,140,0.6)", letterSpacing: "0.5em" }}>
              {"STUDIO.init() >>> ORIGINAL >>> INTUITIVE >>> SCALE".split(" ").map((code, i) => <span key={i} className="opacity-50">{code}</span>)}
            </div>
          </div>
        </div>
      </div>

      {/* WHITE SLAB CONTENT (editorial like the About page) */}
      <section
        className="px-4 sm:px-6 py-0"
        style={{ background: "transparent", color: "var(--paperText)" }}
      >
        <div className="mx-auto max-w-6xl">
          {/* =========================
              HOW WE BUILD (STEP 1 replacement)
              Dark/glitch grid, square corners
             ========================= */}
          <section
            className="px-0 py-0"
            style={{
              background: "transparent",
            }}
          >
            <div
              className="py-12"
              style={{ background: "transparent" }}
            >
              <div className="mx-auto max-w-6xl">
                <div className="space-y-8">
                  <div>
                    <h2 className="text-3xl font-bold tracking-tight sm:text-4xl" style={{ fontFamily: "var(--font-inter)", textTransform: "uppercase" }}>
                      OUR STUDIO MODEL
                    </h2>

                    <p className="mt-4 max-w-2xl text-lg leading-7 text-[var(--muted)]">
                      Built to Scale Beyond a Single Title. Hex operates as a modular game studio.
                    </p>
                  </div>

                  <div>
                    <div className="grid gap-5 grid-cols-2 lg:grid-cols-3">
                      {[
                        {
                          n: "01",
                          title: "Identify Universal Driver",
                          desc: "Find a human concept with intuitive understanding and emotional resonance.",
                        },
                        {
                          n: "02",
                          title: "Design Compliant Mechanic",
                          desc: "Build defensible lottery systems that regulators can understand.",
                        },
                        {
                          n: "03",
                          title: "Build Modular Assets",
                          desc: "Create scalable systems that maintain identity across jurisdictions.",
                        },
                        {
                          n: "04",
                          title: "Deploy & Optimize",
                          desc: "Launch with strategic partners and gather player data.",
                        },
                        {
                          n: "05",
                          title: "Scale IP Library",
                          desc: "Each game strengthens our portfolio and expands deployment footprint.",
                        },
                        {
                          n: "06",
                          title: "Long-Term Partners",
                          desc: "We focus on sustained collaboration, not one-off launches.",
                        },
                      ].map((s) => (
                        <div key={s.n} className="process-tile">
                          <div className="process-tile__top">
                            <div className="process-tile__num">{s.n}</div>
                          </div>

                          <div className="process-tile__title">{s.title}</div>
                          <div className="process-tile__desc">{s.desc}</div>

                          {/* micro glitch bars */}
                          <div className="process-tile__glitch process-tile__glitch--a" />
                          <div className="process-tile__glitch process-tile__glitch--b" />
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Matrix-style separator */}
          <div className="px-0">
            <div className="mx-auto max-w-6xl">
              <div className="relative h-px overflow-hidden" style={{ background: "rgba(0,255,140,0.15)" }}>
                <div className="absolute inset-0 flex items-center justify-center gap-1 overflow-hidden" style={{ fontFamily: "var(--font-fira-code)", fontSize: "10px", color: "rgba(0,255,140,0.6)", letterSpacing: "0.5em" }}>
                  {"MODEL >>> SCALE >>> DEPLOY >>> OPTIMIZE".split(" ").map((code, i) => <span key={i} className="opacity-50">{code}</span>)}
                </div>
              </div>
            </div>
          </div>

          {/* COMBINED: BUILT TO SCALE + END CAP */}
          <section className="px-0 py-12">
            <div className="mx-auto max-w-6xl">
              <div className="grid gap-0 lg:grid-cols-12 items-start">
                {/* Left: BUILT TO SCALE */}
                <div className="lg:col-span-5">
                  <h2 className="text-3xl font-bold tracking-tight sm:text-4xl" style={{ fontFamily: "var(--font-inter)", textTransform: "uppercase" }}>
                    BUILT TO SCALE
                  </h2>
                  <p className="mt-6 text-lg leading-8 text-[var(--muted)]">
                    Hex is designed to grow through a portfolio of original mechanics — not one-off games.
                  </p>
                  <p className="mt-4 text-lg leading-8 text-[var(--muted)]">
                    Each product expands our IP library, deployment footprint, and long-term value to lottery partners.
                  </p>
                </div>

                {/* Horizontal Divider on mobile, Vertical on desktop */}
                <div className="lg:col-span-2">
                  {/* Mobile: Horizontal divider */}
                  <div className="lg:hidden flex items-center justify-center my-6">
                    <div className="relative h-px overflow-hidden" style={{ width: "50%", background: "rgba(0,255,140,0.15)" }}>
                      <div className="absolute inset-0 flex items-center justify-center gap-1 overflow-hidden" style={{ fontFamily: "var(--font-fira-code)", fontSize: "8px", color: "rgba(0,255,140,0.6)", letterSpacing: "0.5em" }}>
                        {"SCALE >>> STANDARD".split(" ").map((code, i) => <span key={i} className="opacity-50">{code}</span>)}
                      </div>
                    </div>
                  </div>
                  {/* Desktop: Vertical divider */}
                  <div className="hidden lg:flex items-start justify-center pt-2">
                    <div className="relative w-px overflow-hidden" style={{ height: "280px", background: "rgba(0,255,140,0.15)" }}>
                      <div className="absolute inset-0 flex flex-col items-center justify-center gap-1 overflow-hidden" style={{ fontFamily: "var(--font-fira-code)", fontSize: "10px", color: "rgba(0,255,140,0.6)", letterSpacing: "0.5em", writingMode: "vertical-rl", transform: "rotate(180deg)" }}>
                        {"SCALE STANDARD PORTFOLIO".split(" ").map((code, i) => <span key={i} className="opacity-50">{code}</span>)}
                      </div>
                    </div>
                  </div>
                </div>

                {/* Right: Raising Standards + CTA */}
                <div className="lg:col-span-5">
                  <h3
                    className="text-3xl font-semibold tracking-tight sm:text-4xl"
                    style={{ color: "rgba(255,255,255,0.90)" }}
                  >
                    RAISING THE STANDARD
                  </h3>
                  <p
                    className="mt-4 text-lg leading-8"
                    style={{ color: "rgba(255,255,255,0.72)" }}
                  >
                    Original mechanics. Intuitive systems. Built for longevity.
                  </p>
                  <div className="mt-8">
                    <a
                      href="/contact"
                      className="inline-flex items-center justify-center px-7 py-3 text-sm font-medium btn-cta-invert"
                      style={{
                        borderRadius: 0,
                        background: "var(--cta-bg)",
                        color: "var(--cta-fg)",
                      }}
                    >
                      Start a conversation
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
      </section>
    </main>
  );
}