"use client";
import { useState, useEffect } from "react";

export default function ChanceLotteryPage() {
  const [adoptionSlide, setAdoptionSlide] = useState(0);

  const adoptionItems = [
    {
      title: "Multi-State Adoption",
      desc: "Designed for deployment across multiple jurisdictions and regions.",
    },
    {
      title: "Regulatory Clarity",
      desc: "Built with compliance and transparency from the ground up.",
    },
    {
      title: "Long-Term Deployment",
      desc: "Intended to sit alongside established lottery staples, complementing rather than replacing.",
    },
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setAdoptionSlide((prev) => (prev + 1) % adoptionItems.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [adoptionItems.length]);

  return (
    <main className="min-h-screen text-[var(--fg)]" style={{ background: "transparent" }}>
      {/* Hero */}
      <section className="px-4 sm:px-6 pb-10 sm:pb-12">
        <div className="mx-auto max-w-6xl">
          <div className="lg:grid lg:gap-12 lg:grid-cols-12 lg:items-start">
            <div className="lg:col-span-7">
              {/* Image floated on mobile/tablet - half visible, text wraps around */}
              <div className="float-right w-[480px] sm:w-[560px] md:w-[680px] h-[360px] sm:h-[420px] md:h-[480px] lg:hidden flex items-center ml-2" style={{ marginRight: '-240px' }}>
                <img
                  src="/chance.webp"
                  alt="Chance Lottery key art"
                  className="w-full h-full object-contain"
                  style={{ 
                    imageRendering: "auto",
                    shapeOutside: 'url(/chance.webp)',
                    shapeMargin: '0.25rem'
                  }}
                />
              </div>

              <div className="text-xs sm:text-sm font-medium uppercase" style={{ color: "rgba(0,255,140,0.75)", fontFamily: "var(--font-fira-code)" }}>
                Platform / The Flagship Vision
              </div>

              <h1 className="heading-hero text-[clamp(72px,8vw,92px)] mt-3">
                <span className="block text-white">Chance Lottery</span>
              </h1>

              <div className="mt-4 space-y-1">
                {["FLAGSHIP VISION", "SYSTEMIC PLATFORM", "MULTI-STATE ADOPTION"].map((t) => (
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
                Chance Lottery is the long-term flagship platform from Hex Game Studio.
              </p>
              
              <p className="mt-3 sm:mt-4 max-w-2xl text-base sm:text-lg leading-7 sm:leading-8 text-[var(--muted)]">
                While our e-instant games generate momentum, Chance Lottery defines the category — rethinking how players relate to probability over time.
              </p>

              <div className="mt-8 sm:mt-10 flex flex-row gap-3 sm:gap-4">
                <a
                  href="/contact"
                  className="inline-flex items-center justify-center px-6 py-3 text-sm font-medium btn-cta-invert flex-1"
                  style={{ background: "var(--cta-bg)", color: "var(--cta-fg)", minWidth: 0 }}
                >
                  Learn More
                </a>

                <a
                  href="/games"
                  className="inline-flex items-center justify-center border px-6 py-3 text-sm font-medium btn-hover-green flex-1"
                  style={{
                    borderColor: "rgba(0,255,140,0.35)",
                    background: "transparent",
                    color: "rgba(0,255,140,0.85)",
                    fontFamily: "var(--font-fira-code)",
                    minWidth: 0
                  }}
                >
                  ← Back to Games
                </a>
              </div>
            </div>

            {/* Desktop: square image */}
            <div className="hidden lg:flex lg:col-span-5 justify-center items-center">
              <div className="w-[400px] h-[400px] aspect-square">
                <img
                  src="/chance.webp"
                  alt="Chance Lottery key art"
                  className="w-full h-full object-contain"
                  style={{ imageRendering: "auto" }}
                />
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
              {"CHANCE_LOTTERY >>> FLAGSHIP >>> PLATFORM >>> MULTI_STATE".split(" ").map((code, i) => <span key={i} className="opacity-50">{code}</span>)}
            </div>
          </div>
        </div>
      </div>


      {/* COMBINED SECTION: Time Changes How Chance Feels + Why This Matters */}
      <section
        className="px-4 sm:px-6 py-10 sm:py-12"
      >
        <div className="mx-auto max-w-6xl">
          <div className="grid gap-0 lg:grid-cols-12 items-start">
            {/* Left: Time Changes How Chance Feels */}
            <div className="lg:col-span-5">
              <h2 className="text-3xl font-bold tracking-tight sm:text-4xl" style={{ fontFamily: "var(--font-inter)", textTransform: "uppercase" }}>
                Time Changes How Chance Feels
              </h2>
              <p className="mt-4 text-lg leading-7" style={{ color: "rgba(0,255,140,0.90)" }}>
                Traditional lottery games treat probability as a single moment.
              </p>
              <p className="mt-3 text-lg leading-7 text-[var(--muted)]">
                Chance Lottery is built around time as a persistent driver — allowing players to experience anticipation, progression, and meaning across extended play rather than isolated outcomes.
              </p>
              <p className="mt-3 text-lg leading-7 font-medium" style={{ color: "rgba(220,255,235,0.95)" }}>
                This creates a fundamentally different relationship between players and chance.
              </p>
            </div>

            {/* Horizontal Divider on mobile, Vertical on desktop */}
            <div className="lg:col-span-2">
              {/* Mobile: Horizontal divider */}
              <div className="lg:hidden flex items-center justify-center my-6">
                <div className="relative h-px overflow-hidden" style={{ width: "50%", background: "rgba(0,255,140,0.15)" }}>
                  <div className="absolute inset-0 flex items-center justify-center gap-1 overflow-hidden" style={{ fontFamily: "var(--font-fira-code)", fontSize: "8px", color: "rgba(0,255,140,0.6)", letterSpacing: "0.5em" }}>
                    {"CHANCE >>> TIME".split(" ").map((code, i) => <span key={i} className="opacity-50">{code}</span>)}
                  </div>
                </div>
              </div>
              {/* Desktop: Vertical divider */}
              <div className="hidden lg:flex items-start justify-center pt-2">
                <div className="relative w-px overflow-hidden" style={{ height: "280px", background: "rgba(0,255,140,0.15)" }}>
                  <div className="absolute inset-0 flex flex-col items-center justify-center gap-1 overflow-hidden" style={{ fontFamily: "var(--font-fira-code)", fontSize: "10px", color: "rgba(0,255,140,0.6)", letterSpacing: "0.5em", writingMode: "vertical-rl", transform: "rotate(180deg)" }}>
                    {"CHANCE TIME PLATFORM".split(" ").map((code, i) => <span key={i} className="opacity-50">{code}</span>)}
                  </div>
                </div>
              </div>
            </div>

            {/* Right: Why This Matters */}
            <div className="lg:col-span-5">
              <h2 className="text-3xl font-bold tracking-tight sm:text-4xl" style={{ fontFamily: "var(--font-inter)", textTransform: "uppercase" }}>
                Why This Matters
              </h2>
              <p className="mt-4 text-lg leading-7" style={{ color: "rgba(0,255,140,0.90)" }}>
                Lotteries aren't just draws. They're rituals.
              </p>
              <p className="mt-3 text-lg leading-7 text-[var(--muted)]">
                Legacy lottery games succeed because they create ongoing engagement, not just transactions.
              </p>
              <p className="mt-3 text-lg leading-7 font-medium" style={{ color: "rgba(220,255,235,0.95)" }}>
                Chance Lottery respects that tradition while evolving it — using time to deepen anticipation without adding complexity.
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
              {"SCALE >>> MULTI_STATE >>> COMPLIANCE >>> VISION".split(" ").map((code, i) => <span key={i} className="opacity-50">{code}</span>)}
            </div>
          </div>
        </div>
      </div>

      {/* Long-Term Vision: Built to Scale */}
      <section
        className="px-4 sm:px-6 pt-12 sm:pt-16 lg:pt-20 pb-4 sm:pb-6"
      >
        <div className="mx-auto max-w-6xl">
          <div className="grid gap-12 lg:grid-cols-12 lg:items-start">
            <div className="lg:col-span-7">
              <h2 className="text-3xl font-bold tracking-tight sm:text-4xl" style={{ fontFamily: "var(--font-inter)", textTransform: "uppercase" }}>
                Long-Term Vision: Built to Scale
              </h2>
              <p className="mt-4 max-w-3xl text-lg leading-8 text-[var(--muted)]">
                Chance Lottery represents a new category of lottery experience — one that feels familiar, intuitive, and emotionally grounded while still being fundamentally new.
              </p>
              <p className="mt-4 max-w-3xl text-lg leading-8 text-[var(--muted)]">
                It is designed to become a recognizable, ownable platform for jurisdictions over time.
              </p>
            </div>

            <div className="lg:col-span-5 flex items-center justify-center">
              <div className="w-full">
                <img
                  src="/lottery-map.png"
                  alt="U.S. Lottery Jurisdictions Map"
                  className="w-full object-contain"
                  style={{ imageRendering: "auto" }}
                />
              </div>
            </div>
          </div>

          {/* Desktop: Show all three boxes */}
          <div className="mt-10 hidden sm:grid gap-6 sm:grid-cols-3">
            {adoptionItems.map((i) => (
              <div
                key={i.title}
                className="border p-6"
                style={{
                  borderColor: "var(--surface-border)",
                  background: "transparent",
                }}
              >
                <h4 className="text-lg font-semibold">{i.title}</h4>
                <p className="mt-2 text-[var(--muted)]">{i.desc}</p>
              </div>
            ))}
          </div>

          {/* Mobile: Carousel */}
          <div className="mt-8 mb-4 sm:hidden">
            <div className="relative">
              <div className="relative" style={{ minHeight: "200px" }}>
                {adoptionItems.map((item, idx) => (
                  <div
                    key={item.title}
                    className={`transition-opacity duration-700 ease-in-out ${
                      idx === adoptionSlide ? "relative opacity-100" : "absolute inset-0 opacity-0 pointer-events-none"
                    }`}
                    style={{ zIndex: idx === adoptionSlide ? 1 : 0 }}
                  >
                    <div
                      className="border p-6"
                      style={{
                        borderColor: "var(--surface-border)",
                        background: "transparent",
                      }}
                    >
                      <h4 className="text-lg font-semibold">{item.title}</h4>
                      <p className="mt-2 text-[var(--muted)]">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
              {/* Hexagon dots indicator with interactive states */}
              <div className="flex items-center justify-center gap-3 mt-3">
                {adoptionItems.map((_, idx) => (
                  <button
                    key={idx}
                    onClick={() => setAdoptionSlide(idx)}
                    className="w-3 h-3 cursor-pointer"
                    aria-label={`Go to slide ${idx + 1}`}
                  >
                    <svg 
                      viewBox="0 0 16 18" 
                      className="w-full h-full transition-all duration-300"
                      style={{
                        filter: idx === adoptionSlide ? 'drop-shadow(0 0 6px rgba(0,255,140,0.6))' : 'none',
                        transform: idx === adoptionSlide ? 'scale(1.3)' : 'scale(1)',
                      }}
                    >
                      <polygon
                        points="8,0 16,4.5 16,13.5 8,18 0,13.5 0,4.5"
                        className="transition-all duration-300"
                        fill={idx === adoptionSlide ? '#00ff8a' : 'rgba(255,255,255,0.25)'}
                        stroke={idx === adoptionSlide ? '#00ff8a' : 'rgba(255,255,255,0.15)'}
                        strokeWidth="0.5"
                      />
                    </svg>
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
