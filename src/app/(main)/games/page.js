// src/app/games/page.js
"use client";

import { useState, useEffect } from "react";
import SignalCard from "@/components/SignalCard";

export default function Games() {
  const [cashClockSlide, setCashClockSlide] = useState(0);
  const [chanceSlide, setChanceSlide] = useState(0);

  // Auto-advance Cash Clock tiles every 5 seconds
  useEffect(() => {
    const timer = setInterval(() => {
      setCashClockSlide((prev) => (prev + 1) % 3);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  // Auto-advance Chance tiles every 5 seconds
  useEffect(() => {
    const timer = setInterval(() => {
      setChanceSlide((prev) => (prev + 1) % 3);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const slides = [
    {
      title: "CASH CLOCK",
      kicker: "E-INSTANT",
      note: "Key art / UI stills (placeholder)",
      href: "/games/cash-clock",
      image: "/cash-clock.png",
    },
    {
      title: "CHANCE LOTTERY",
      kicker: "FLAGSHIP VISION",
      note: "Long-term strategic direction",
      href: "/games/chance-lottery",
      image: "/chance.png",
    },
    {
      title: "NEXT TITLE",
      kicker: "IN DEVELOPMENT",
      note: "Placeholder for upcoming game",
      href: "/contact",
    },
  ];

  return (
    <main className="min-h-screen text-[var(--fg)]" style={{ background: "transparent" }}>
      {/* HERO BAND (matches Home / Studio) */}
      <section className="relative overflow-hidden">
        <div className="relative px-4 sm:px-6 pb-12 sm:pb-16">
          <div className="mx-auto max-w-6xl">
          <div className="grid gap-8 sm:gap-10 lg:gap-12 lg:grid-cols-12 lg:items-start overflow-hidden">
            <div className="lg:col-span-8 min-w-0 w-full">
              <h1 className="heading-hero text-[clamp(72px,8vw,92px)] break-words">
                <span className="block text-white">GAMES</span>
              </h1>

              <div className="mt-4 sm:mt-6 space-y-1 w-full">
                {["ORIGINAL MECHANICS", "COMPLIANT SYSTEMS", "BUILT TO SCALE"].map((t) => (
                  <div
                    key={t}
                    className="text-2xl font-semibold tracking-[0.02em] sm:text-2xl lg:text-3xl break-words"
                    style={{
                      color: "transparent",
                      WebkitTextStroke: "1px rgba(0,255,140,0.55)",
                    }}
                  >
                    {t}
                  </div>
                ))}
              </div>

              <p className="mt-6 sm:mt-8 max-w-2xl text-base sm:text-lg leading-7 sm:leading-8 text-[var(--muted)]">
                Hex Game Studio builds a growing portfolio of original iLottery games designed around universal human concepts.
              </p>
              <p className="mt-4 sm:mt-6 max-w-2xl text-base sm:text-lg leading-7 sm:leading-8 text-[var(--muted)]">
                Each title introduces a distinct, compliant mechanic — not a cosmetic variation of an existing system.
              </p>
            </div>

            {/* Slate Preview Carousel */}
            <div className="lg:col-span-4 lg:self-stretch w-full min-w-0">
              <div
                className="border p-3 sm:p-4 lg:p-6 flex flex-col h-[300px] sm:h-[350px] lg:h-full w-full"
                style={{
                  borderColor: "rgba(0,255,140,0.25)",
                  background:
                    "linear-gradient(180deg, rgba(0,0,0,0.45), rgba(0,0,0,0.20))",
                  boxShadow:
                    "0 22px 70px rgba(0,0,0,0.55), inset 0 0 0 1px rgba(0,255,140,0.10)",
                }}
              >
                <div className="flex items-center justify-between gap-4">
                  <div className="text-xs font-semibold tracking-[0.28em] text-[rgba(255,255,255,0.70)]">
                    CATALOG
                  </div>

                  <div className="flex items-center gap-2">
                    <span
                      className="h-1 w-8"
                      style={{ background: "rgba(0,255,140,0.65)" }}
                    />
                    <span
                      className="h-1 w-4"
                      style={{ background: "rgba(0,255,140,0.25)" }}
                    />
                    <span
                      className="h-1 w-2"
                      style={{ background: "rgba(0,255,140,0.18)" }}
                    />
                  </div>
                </div>

                <div className="mt-4 flex-1 flex flex-col">
                  <div
                    className="flex snap-x snap-mandatory gap-3 overflow-x-auto pb-3 flex-1 custom-scrollbar"
                    style={{
                      WebkitOverflowScrolling: "touch",
                    }}
                  >
                    {slides.map((s, idx) => (
                      <a
                        key={idx}
                        href={s.href}
                        className="group relative flex-none snap-center h-full"
                        style={{ textDecoration: "none", width: "240px" }}
                      >
                        <div
                          className="relative border h-full flex flex-col"
                          style={{
                            borderColor: "rgba(255,255,255,0.14)",
                            background:
                              "linear-gradient(135deg, rgba(255,255,255,0.06), rgba(255,255,255,0.02))",
                            boxShadow:
                              "0 18px 55px rgba(0,0,0,0.55), inset 0 0 0 1px rgba(255,255,255,0.05)",
                          }}
                        >
                          <div className="flex-1 relative overflow-hidden">
                            <div
                              className="absolute inset-0 pointer-events-none opacity-[0.25]"
                              style={{
                                background:
                                  "repeating-linear-gradient(to bottom, rgba(0,255,140,0.10) 0px, rgba(0,255,140,0.10) 1px, transparent 1px, transparent 10px)",
                              }}
                            />
                            {s.image && (
                              <div className="absolute inset-0 flex items-center justify-center p-3 sm:p-4">
                                <img
                                  src={s.image}
                                  alt={s.title}
                                  className="w-auto h-auto max-w-[80%] max-h-[80%] object-contain"
                                  style={{ imageRendering: "auto" }}
                                />
                              </div>
                            )}
                            <div 
                              className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 px-3 py-2"
                              style={{
                                background: "rgba(0,0,0,0.8)",
                                border: "1px solid rgba(0,255,140,0.25)",
                                boxShadow: "0 4px 20px rgba(0,0,0,0.5), inset 0 0 0 1px rgba(0,255,140,0.10)"
                              }}
                            >
                              <div 
                                className="text-[9px] font-semibold tracking-[0.24em]"
                                style={{ 
                                  color: "rgba(255,255,255,0.65)"
                                }}
                              >
                                {s.kicker}
                              </div>
                              <div
                                className="mt-1 text-base font-extrabold uppercase tracking-[-0.02em]"
                                style={{
                                  color: "rgba(220,255,235,0.92)"
                                }}
                              >
                                {s.title}
                              </div>
                            </div>
                          </div>

                          <div
                            className="flex items-center justify-between gap-2 px-3 py-2"
                          >
                            <div className="text-[10px] tracking-[0.24em] text-[rgba(255,255,255,0.60)]">
                              VIEW
                            </div>
                            <div
                              className="text-[10px] font-semibold tracking-[0.20em]"
                              style={{ color: "var(--nav-accent, #00ff8a)" }}
                            >
                              OPEN →
                            </div>
                          </div>
                        </div>

                        <div
                          className="pointer-events-none absolute -inset-1 opacity-0 transition-opacity duration-200 group-hover:opacity-100"
                          style={{
                            border: "1px solid rgba(0,255,140,0.25)",
                          }}
                        />
                      </a>
                    ))}
                  </div>

                  <div className="mt-2 flex items-center justify-center gap-2 text-[10px] tracking-[0.24em] text-[rgba(255,255,255,0.50)]">
                    <span>SCROLL</span>
                    <span style={{ color: "rgba(0,255,140,0.85)" }}>—</span>
                    <span>HORIZONTAL</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          </div>
        </div>
      </section>

      {/* Matrix-style separator */}
      <div className="px-4 sm:px-6">
        <div className="mx-auto max-w-6xl">
          <div className="relative h-px overflow-hidden" style={{ background: "rgba(0,255,140,0.15)" }}>
            <div className="absolute inset-0 flex items-center justify-center gap-1 overflow-hidden" style={{ fontFamily: "var(--font-fira-code)", fontSize: "10px", color: "rgba(0,255,140,0.6)", letterSpacing: "0.5em" }}>
              {"GAMES[] = {CASH_CLOCK, CHANCE_LOTTERY} >>> PORTFOLIO.expand()".split(" ").map((code, i) => <span key={i} className="opacity-50">{code}</span>)}
            </div>
          </div>
        </div>
      </div>

      {/* DIFFERENT APPROACH (dark, glitch green, square corners) */}
      <section className="px-4 sm:px-6 py-10 sm:py-12">
        <div className="mx-auto max-w-6xl">
          <h2 className="heading-section text-3xl sm:text-3xl lg:text-4xl text-white">
            ORIGINAL MECHANICS, NOT RESKINS
          </h2>

          <p className="mt-4 sm:mt-6 text-base sm:text-lg leading-7 sm:leading-8 text-[var(--muted)]" style={{ maxWidth: "none" }}>
            Our games are built from the ground up.
          </p>
          <p className="mt-3 sm:mt-4 text-base sm:text-lg leading-7 sm:leading-8 text-[var(--muted)]" style={{ maxWidth: "none" }}>
            We do not apply new themes to familiar mechanics. We design new mechanics that players intuitively understand and want to return to.
          </p>
          <p className="mt-3 sm:mt-4 text-base sm:text-lg leading-7 sm:leading-8 text-[var(--muted)]" style={{ maxWidth: "none" }}>
            This approach creates stronger engagement, longer lifecycles, and defensible IP for our partners.
          </p>

          <div className="mt-6 sm:mt-8 grid grid-cols-1 sm:grid-cols-2 gap-3 lg:grid-cols-4">
            {["REDUCE LEARNING FRICTION", "NATURAL ANTICIPATION", "MEANINGFUL NEAR-MISS", "REPLAY CURIOSITY"].map(
              (t) => (
                <div
                  key={t}
                  className="border px-3 py-2 text-xs font-semibold tracking-[0.26em] text-center"
                  style={{
                    borderColor: "rgba(0,255,140,0.35)",
                    color: "rgba(220,255,235,0.90)",
                    background:
                      "linear-gradient(180deg, rgba(0,0,0,0.30), rgba(0,0,0,0.10))",
                    boxShadow: "0 0 0 1px rgba(0,255,140,0.10) inset",
                  }}
                >
                  {t}
                </div>
              )
            )}
          </div>
        </div>
      </section>

      {/* Matrix-style separator */}
      <div className="px-4 sm:px-6">
        <div className="mx-auto max-w-6xl">
          <div className="relative h-px overflow-hidden" style={{ background: "rgba(0,255,140,0.15)" }}>
            <div className="absolute inset-0 flex items-center justify-center gap-1 overflow-hidden" style={{ fontFamily: "var(--font-fira-code)", fontSize: "10px", color: "rgba(0,255,140,0.6)", letterSpacing: "0.5em" }}>
              {"TIME_BASED >>> UNIVERSAL >>> COMPLIANT >>> PORTFOLIO".split(" ").map((code, i) => <span key={i} className="opacity-50">{code}</span>)}
            </div>
          </div>
        </div>
      </div>

      {/* FEATURED GAME (keep operator copy, styled to match) */}
      <section
        className="px-4 sm:px-6 pt-12 sm:pt-16 lg:pt-20 pb-4 sm:pb-6"
      >
        <div className="mx-auto max-w-6xl">
          <div className="lg:grid lg:gap-12 lg:grid-cols-12 lg:items-start">
            <div className="lg:col-span-7">
              {/* Image floated on mobile/tablet - half visible, text wraps around */}
              <div className="float-right w-[480px] sm:w-[560px] md:w-[680px] h-[360px] sm:h-[420px] md:h-[480px] lg:hidden flex items-center ml-2" style={{ marginRight: '-240px' }}>
                <img
                  src="/cash-clock.png"
                  alt="Cash Clock key art"
                  className="w-full h-full object-contain"
                  style={{ 
                    imageRendering: "auto",
                    shapeOutside: 'url(/cash-clock.png)',
                    shapeMargin: '0.25rem'
                  }}
                />
              </div>

              <div className="text-xs sm:text-sm font-medium" style={{ color: "rgba(0,255,140,0.75)", fontFamily: "var(--font-fira-code)" }}>
                E-INSTANT DEBUT
              </div>

              <h2 className="heading-section mt-3 sm:mt-4 text-3xl sm:text-3xl lg:text-4xl text-white">
                CASH CLOCK
              </h2>

              <p className="mt-4 sm:mt-6 max-w-2xl text-base sm:text-lg leading-7 sm:leading-8 text-[var(--muted)]">
                Cash Clock is our first e-instant release and the foundation of our portfolio.
              </p>

              <p className="mt-4 sm:mt-6 max-w-2xl text-base sm:text-lg leading-7 sm:leading-8 text-[var(--muted)]">
                It is a time-based system built around anticipation and precision, using the clock as the core mechanic — not decoration.
              </p>
              
              <p className="mt-4 sm:mt-6 max-w-2xl text-base sm:text-lg leading-7 sm:leading-8 text-[var(--muted)]">
                Designed for replay, near-miss tension, and clarity, Cash Clock serves as both a commercial product and proof of our design philosophy.
              </p>
              
              <p className="mt-4 sm:mt-6 text-sm sm:text-base leading-6 sm:leading-7 text-[var(--muted-2)]">
                Distribution partner: EQL Games
              </p>

              <div className="mt-8 sm:mt-10 flex flex-row gap-3 sm:gap-4">
                <a
                  href="/games/cash-clock"
                  className="inline-flex h-12 items-center justify-center px-8 text-sm font-semibold btn-cta-invert"
                  style={{ background: "var(--cta-bg)", color: "var(--cta-fg)" }}
                >
                  VIEW DETAILS
                </a>
                <a
                  href="/contact"
                  className="inline-flex h-12 items-center justify-center border px-6 text-sm font-semibold btn-hover-green"
                  style={{
                    borderColor: "rgba(255,255,255,0.18)",
                    color: "rgba(255,255,255,0.88)",
                    background: "rgba(0,0,0,0.20)",
                  }}
                >
                  DISCUSS WITH US
                </a>
              </div>
            </div>

            {/* Desktop: square image */}
            <div className="hidden lg:flex lg:col-span-5 justify-center items-center">
              <div className="w-[400px] h-[400px] aspect-square">
                <img
                  src="/cash-clock.png"
                  alt="Cash Clock key art"
                  className="w-full h-full object-contain"
                  style={{ imageRendering: "auto" }}
                />
              </div>
            </div>
          </div>

          {/* Operator-ready focus (square cards) */}
          <div className="mt-8 mb-4">
            {/* Mobile: Auto-advancing carousel with fade transitions */}
            <div className="sm:hidden relative">
              <div className="relative" style={{ minHeight: "200px" }}>
                {[
                  {
                    title: "BUILT FOR DEPLOYMENT",
                    desc: "Designed with compliance from day one. Modular and jurisdiction-ready.",
                  },
                  {
                    title: "EMOTION DRIVES ENGAGEMENT",
                    desc: "Games built on universal concepts create natural anticipation and meaningful near-miss moments.",
                  },
                  {
                    title: "ENGAGEMENT DRIVES REVENUE",
                    desc: "Built for redeployment without loss of identity. Scale efficiently across platforms and markets.",
                  },
                ].map((i, idx) => (
                  <div
                    key={i.title}
                    className={`transition-opacity duration-700 ease-in-out ${
                      cashClockSlide === idx ? "relative opacity-100" : "absolute inset-0 opacity-0 pointer-events-none"
                    }`}
                    style={{ zIndex: cashClockSlide === idx ? 1 : 0 }}
                  >
                    <div
                      className="border p-7"
                      style={{
                        borderColor: "rgba(0,255,140,0.22)",
                        background:
                          "linear-gradient(180deg, rgba(0,0,0,0.40), rgba(0,0,0,0.18))",
                        boxShadow: "0 0 0 1px rgba(0,255,140,0.08) inset",
                      }}
                    >
                      <div
                        className="text-xs font-semibold tracking-[0.28em]"
                        style={{ color: "rgba(0,255,140,0.85)" }}
                      >
                        {i.title}
                      </div>
                      <p className="mt-4 text-base leading-7 text-[rgba(255,255,255,0.72)]">
                        {i.desc}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
              {/* Hexagon dots indicator with interactive states */}
              <div className="flex items-center justify-center gap-3 mt-3">
                {[0, 1, 2].map((index) => (
                  <button
                    key={index}
                    onClick={() => setCashClockSlide(index)}
                    className="w-3 h-3 cursor-pointer"
                    aria-label={`Go to slide ${index + 1}`}
                  >
                    <svg 
                      viewBox="0 0 16 18" 
                      className="w-full h-full transition-all duration-300"
                      style={{
                        filter: cashClockSlide === index ? 'drop-shadow(0 0 6px rgba(0,255,140,0.6))' : 'none',
                        transform: cashClockSlide === index ? 'scale(1.3)' : 'scale(1)',
                      }}
                    >
                      <polygon
                        points="8,0 16,4.5 16,13.5 8,18 0,13.5 0,4.5"
                        className="transition-all duration-300"
                        fill={cashClockSlide === index ? '#00ff8a' : 'rgba(255,255,255,0.25)'}
                        stroke={cashClockSlide === index ? '#00ff8a' : 'rgba(255,255,255,0.15)'}
                        strokeWidth="0.5"
                      />
                    </svg>
                  </button>
                ))}
              </div>
            </div>
            {/* Desktop: Grid layout */}
            <div className="hidden sm:grid gap-6 sm:grid-cols-3">
              {[
                {
                  title: "BUILT FOR DEPLOYMENT",
                  desc: "Designed with compliance from day one. Modular and jurisdiction-ready.",
                },
                {
                  title: "EMOTION DRIVES ENGAGEMENT",
                  desc: "Games built on universal concepts create natural anticipation and meaningful near-miss moments.",
                },
                {
                  title: "ENGAGEMENT DRIVES REVENUE",
                  desc: "Built for redeployment without loss of identity. Scale efficiently across platforms and markets.",
                },
              ].map((i) => (
                <div
                  key={i.title}
                  className="border p-7"
                  style={{
                    borderColor: "rgba(0,255,140,0.22)",
                    background:
                      "linear-gradient(180deg, rgba(0,0,0,0.40), rgba(0,0,0,0.18))",
                    boxShadow: "0 0 0 1px rgba(0,255,140,0.08) inset",
                  }}
                >
                  <div
                    className="text-xs font-semibold tracking-[0.28em]"
                    style={{ color: "rgba(0,255,140,0.85)" }}
                  >
                    {i.title}
                  </div>
                  <p className="mt-4 text-base leading-7 text-[rgba(255,255,255,0.72)]">
                    {i.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Matrix-style separator */}
      <div className="px-6">
        <div className="mx-auto max-w-6xl">
          <div className="relative h-px overflow-hidden" style={{ background: "rgba(0,255,140,0.15)" }}>
            <div className="absolute inset-0 flex items-center justify-center gap-1 overflow-hidden" style={{ fontFamily: "var(--font-fira-code)", fontSize: "10px", color: "rgba(0,255,140,0.6)", letterSpacing: "0.5em" }}>
              {"CASH_CLOCK >>> FLAGSHIP >>> DEPLOY >>> SCALE >>> NEXT".split(" ").map((code, i) => <span key={i} className="opacity-50">{code}</span>)}
            </div>
          </div>
        </div>
      </div>

      {/* CHANCE LOTTERY SECTION */}
      <section
        className="px-6 pt-16 sm:pt-20 pb-4 sm:pb-6"
      >
        <div className="mx-auto max-w-6xl">
          <div className="lg:grid lg:gap-12 lg:grid-cols-12 lg:items-start">
            <div className="lg:col-span-7">
              {/* Image floated on mobile/tablet - half visible, text wraps around */}
              <div className="float-right w-[480px] sm:w-[560px] md:w-[680px] h-[360px] sm:h-[420px] md:h-[480px] lg:hidden flex items-center ml-2" style={{ marginRight: '-240px' }}>
                <img
                  src="/chance.png"
                  alt="Chance Lottery key art"
                  className="w-full h-full object-contain"
                  style={{ 
                    imageRendering: "auto",
                    shapeOutside: 'url(/chance.png)',
                    shapeMargin: '0.25rem'
                  }}
                />
              </div>

              <div className="text-sm font-medium" style={{ color: "rgba(0,255,140,0.75)", fontFamily: "var(--font-fira-code)" }}>
                FLAGSHIP VISION
              </div>

              <h2 className="heading-section mt-4 text-3xl sm:text-4xl text-white">
                CHANCE LOTTERY
              </h2>

              <p className="mt-6 max-w-2xl text-lg leading-8 text-[var(--muted)]">
                Chance Lottery is our long-term flagship platform.
              </p>

              <p className="mt-6 max-w-2xl text-lg leading-8 text-[var(--muted)]">
                While our e-instant games generate momentum, Chance Lottery defines the category — rethinking how players relate to probability over time.
              </p>
              
              <p className="mt-6 max-w-2xl text-lg leading-8 text-[var(--muted)]">
                It is designed to sit alongside legacy lottery staples, not replace them — a systemic platform built to grow and endure.
              </p>
              
              <p className="mt-6 text-base leading-7 text-[var(--muted-2)]">
                Long-term strategic direction
              </p>

              <div className="mt-10 flex flex-row gap-4">
                <a
                  href="/games/chance-lottery"
                  className="inline-flex h-12 items-center justify-center px-8 text-sm font-semibold btn-cta-invert"
                  style={{ background: "var(--cta-bg)", color: "var(--cta-fg)" }}
                >
                  VIEW DETAILS
                </a>
                <a
                  href="/contact"
                  className="inline-flex h-12 items-center justify-center border px-6 text-sm font-semibold btn-hover-green"
                  style={{
                    borderColor: "rgba(255,255,255,0.18)",
                    color: "rgba(255,255,255,0.88)",
                    background: "rgba(0,0,0,0.20)",
                  }}
                >
                  DISCUSS WITH US
                </a>
              </div>
            </div>

            {/* Desktop: square image */}
            <div className="hidden lg:flex lg:col-span-5 justify-center items-center">
              <div className="w-[400px] h-[400px] aspect-square">
                <img
                  src="/chance.png"
                  alt="Chance Lottery key art"
                  className="w-full h-full object-contain"
                  style={{ imageRendering: "auto" }}
                />
              </div>
            </div>
          </div>

          {/* Focus cards (square cards) */}
          <div className="mt-8 mb-4">
            {/* Mobile: Auto-advancing carousel with fade transitions */}
            <div className="sm:hidden relative">
              <div className="relative" style={{ minHeight: "200px" }}>
                {[
                  {
                    title: "SYSTEMIC PLATFORM",
                    desc: "Not a promotion — a category-defining platform designed to expand over time.",
                  },
                  {
                    title: "MULTI-STATE READY",
                    desc: "Built for deployment across multiple jurisdictions with regulatory clarity from the ground up.",
                  },
                  {
                    title: "LONG-TERM VALUE",
                    desc: "Designed to sit alongside established lottery staples, complementing rather than replacing.",
                  },
                ].map((i, idx) => (
                  <div
                    key={i.title}
                    className={`transition-opacity duration-700 ease-in-out ${
                      chanceSlide === idx ? "relative opacity-100" : "absolute inset-0 opacity-0 pointer-events-none"
                    }`}
                    style={{ zIndex: chanceSlide === idx ? 1 : 0 }}
                  >
                    <div
                      className="border p-7"
                      style={{
                        borderColor: "rgba(0,255,140,0.22)",
                        background:
                          "linear-gradient(180deg, rgba(0,0,0,0.40), rgba(0,0,0,0.18))",
                        boxShadow: "0 0 0 1px rgba(0,255,140,0.08) inset",
                      }}
                    >
                      <div
                        className="text-xs font-semibold tracking-[0.28em]"
                        style={{ color: "rgba(0,255,140,0.85)" }}
                      >
                        {i.title}
                      </div>
                      <p className="mt-4 text-base leading-7 text-[rgba(255,255,255,0.72)]">
                        {i.desc}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
              {/* Hexagon dots indicator with interactive states */}
              <div className="flex items-center justify-center gap-3 mt-3">
                {[0, 1, 2].map((index) => (
                  <button
                    key={index}
                    onClick={() => setChanceSlide(index)}
                    className="w-3 h-3 cursor-pointer"
                    aria-label={`Go to slide ${index + 1}`}
                  >
                    <svg 
                      viewBox="0 0 16 18" 
                      className="w-full h-full transition-all duration-300"
                      style={{
                        filter: chanceSlide === index ? 'drop-shadow(0 0 6px rgba(0,255,140,0.6))' : 'none',
                        transform: chanceSlide === index ? 'scale(1.3)' : 'scale(1)',
                      }}
                    >
                      <polygon
                        points="8,0 16,4.5 16,13.5 8,18 0,13.5 0,4.5"
                        className="transition-all duration-300"
                        fill={chanceSlide === index ? '#00ff8a' : 'rgba(255,255,255,0.25)'}
                        stroke={chanceSlide === index ? '#00ff8a' : 'rgba(255,255,255,0.15)'}
                        strokeWidth="0.5"
                      />
                    </svg>
                  </button>
                ))}
              </div>
            </div>
            {/* Desktop: Grid layout */}
            <div className="hidden sm:grid gap-6 sm:grid-cols-3">
              {[
                {
                  title: "SYSTEMIC PLATFORM",
                  desc: "Not a promotion — a category-defining platform designed to expand over time.",
                },
                {
                  title: "MULTI-STATE READY",
                  desc: "Built for deployment across multiple jurisdictions with regulatory clarity from the ground up.",
                },
                {
                  title: "LONG-TERM VALUE",
                  desc: "Designed to sit alongside established lottery staples, complementing rather than replacing.",
                },
              ].map((i) => (
                <div
                  key={i.title}
                  className="border p-7"
                  style={{
                    borderColor: "rgba(0,255,140,0.22)",
                    background:
                      "linear-gradient(180deg, rgba(0,0,0,0.40), rgba(0,0,0,0.18))",
                    boxShadow: "0 0 0 1px rgba(0,255,140,0.08) inset",
                  }}
                >
                  <div
                    className="text-xs font-semibold tracking-[0.28em]"
                    style={{ color: "rgba(0,255,140,0.85)" }}
                  >
                    {i.title}
                  </div>
                  <p className="mt-4 text-base leading-7 text-[rgba(255,255,255,0.72)]">
                    {i.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}