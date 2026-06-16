"use client";

import { useState } from "react";

const LIVE_DEMO_URL = "/cash-clock/live-demo";

const stats = [
  { label: "ODDS PER GAME", value: "1 in 1.21" },
  { label: "TOP PRIZE ODDS", value: "1 in 43,200" },
  { label: "TICKET PRICE", value: "TBD" },
  { label: "EST. JACKPOT", value: "TBD" },
];

const overviewCards = [
  { title: "PICK YOUR TIME", items: ["Hour", "Minute", "Second"] },
  {
    title: "SPIN THE CLOCK",
    body: "Press GO and watch the hands spin and stop on a randomly selected time.",
  },
  {
    title: "WIN PRIZES",
    body: "Match portions of the selected time for prizes or match all three elements to win the jackpot.",
  },
];

const features = [
  { title: "Universal Concept", body: "Instantly understood by players." },
  { title: "Easy To Learn", body: "Simple mechanic with immediate recognition." },
  { title: "Multiple Prize Paths", body: "Exact matches, partial matches, and near misses." },
  { title: "Flexible Economics", body: "Supports multiple ticket price points." },
  {
    title: "Distinctive Gameplay",
    body: "A differentiated experience compared with traditional number-based products.",
  },
];

const prizes = [
  { match: "Hour + Minute + Second", prize: "Jackpot Prize" },
  { match: "Any 2 of 3", prize: "Large Prize" },
  { match: "Any 1 of 3", prize: "Small Prize" },
  { match: "Near Misses", prize: "Partial Prizes" },
];

const steps = [
  {
    title: "1. Choose Your Time",
    body: "Select an Hour (1–12), Minute (00–59), and Second (00–59) to make your time selection.",
  },
  {
    title: "2. Spin The Clock",
    body: "Press GO or use Auto Play to spin the clock hands.",
  },
  {
    title: "3. Check For Wins",
    lines: [
      "Match Hour + Minute + Second → Jackpot",
      "Match Any 2 of 3 → Large Prize",
      "Match Any 1 of 3 → Small Prize",
      "Near Misses → Partial Prize",
    ],
  },
  {
    title: "4. Jackpot Play",
    body: "The jackpot grows until won.",
  },
];

const cardStyle = {
  border: "1px solid rgba(0,255,140,0.20)",
  background: "linear-gradient(180deg, rgba(255,255,255,0.05), rgba(255,255,255,0.02))",
};

const sectionLabel = {
  color: "rgba(0,255,140,0.75)",
  fontFamily: "var(--font-fira-code)",
};

function Separator() {
  return (
    <div className="px-4 sm:px-6 mb-12 sm:mb-16">
      <div className="mx-auto max-w-6xl">
        <div className="h-px" style={{ background: "rgba(0,255,140,0.15)" }} />
      </div>
    </div>
  );
}

export default function CashClockDemoPage() {
  const [openStep, setOpenStep] = useState(null);

  return (
    <main className="min-h-screen text-[var(--fg)]" style={{ background: "transparent" }}>

      {/* ── HERO ── */}
      <section className="relative overflow-hidden">
        <div className="px-4 sm:px-6 pb-12 sm:pb-16">
          <div className="mx-auto max-w-6xl">
            <div className="grid items-start gap-8 sm:gap-12 lg:gap-14 lg:grid-cols-12">

              {/* Left: copy */}
              <div className="lg:col-span-7">
                <div
                  className="text-xs sm:text-sm font-medium uppercase mb-4"
                  style={sectionLabel}
                >
                  Game / Operator Demo
                </div>

                <h1 className="heading-hero text-[clamp(72px,8vw,92px)]">
                  <span className="block text-white">CASH CLOCK</span>
                </h1>

                <div className="mt-4 sm:mt-6 space-y-1">
                  {["PICK A TIME.", "SPIN THE CLOCK.", "WIN THE JACKPOT."].map((t) => (
                    <div
                      key={t}
                      className="text-2xl font-semibold tracking-[0.02em] sm:text-2xl lg:text-3xl"
                      style={{ color: "transparent", WebkitTextStroke: "1px rgba(0,255,140,0.55)" }}
                    >
                      {t}
                    </div>
                  ))}
                </div>

                <p className="mt-5 sm:mt-7 max-w-xl text-base sm:text-lg leading-7 sm:leading-8 text-[var(--muted)]">
                  Cash Clock is a fresh eInstant game built around one of the most universally
                  understood concepts in the world: time.
                </p>
                <p className="mt-3 sm:mt-4 max-w-xl text-base sm:text-lg leading-7 sm:leading-8 text-[var(--muted)]">
                  Players select an hour, minute, and second, then watch the clock spin. Exact
                  matches win the jackpot while partial and near matches unlock additional prize
                  opportunities.
                </p>

                <div className="mt-8 sm:mt-10">
                  <a
                    href={LIVE_DEMO_URL}
                    className="inline-flex items-center justify-center px-8 py-4 text-sm font-semibold btn-cta-invert"
                    style={{
                      background: "var(--cta-bg)",
                      color: "var(--cta-fg)",
                    }}
                  >
                    Launch Live Demo
                  </a>
                </div>
              </div>

              {/* Right: artwork (desktop only) */}
              <div className="hidden lg:flex lg:col-span-5 items-center justify-center">
                <img
                  src="/cash-clock.webp"
                  alt="Cash Clock key art"
                  className="w-full h-auto object-contain"
                  style={{ maxHeight: "420px", imageRendering: "auto" }}
                />
              </div>

            </div>
          </div>
        </div>
      </section>

      <Separator />

      {/* ── QUICK STATS ── */}
      <section className="px-4 sm:px-6 mb-16 sm:mb-20">
        <div className="mx-auto max-w-6xl">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
            {stats.map((s) => (
              <div key={s.label} className="p-5 sm:p-6" style={cardStyle}>
                <div
                  className="text-xs font-semibold tracking-widest uppercase mb-3"
                  style={{ color: "rgba(255,255,255,0.50)", fontFamily: "var(--font-fira-code)" }}
                >
                  {s.label}
                </div>
                <div
                  className="text-2xl sm:text-3xl font-bold"
                  style={{
                    color: "rgba(0,255,140,0.90)",
                    fontFamily: "var(--font-geist-sans)",
                    letterSpacing: "-0.02em",
                  }}
                >
                  {s.value}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── GAME OVERVIEW ── */}
      <section className="px-4 sm:px-6 mb-16 sm:mb-20">
        <div className="mx-auto max-w-6xl">
          <div className="text-xs font-semibold tracking-widest uppercase mb-8" style={sectionLabel}>
            GAME OVERVIEW
          </div>
          <div className="grid gap-4 sm:grid-cols-3">
            {overviewCards.map((c) => (
              <div key={c.title} className="p-6 sm:p-7" style={cardStyle}>
                <div
                  className="text-xs font-semibold tracking-widest uppercase mb-4"
                  style={sectionLabel}
                >
                  {c.title}
                </div>
                {c.items ? (
                  <ul className="space-y-2">
                    {c.items.map((item) => (
                      <li
                        key={item}
                        className="text-sm"
                        style={{ color: "rgba(255,255,255,0.75)", fontFamily: "var(--font-fira-code)" }}
                      >
                        → {item}
                      </li>
                    ))}
                  </ul>
                ) : (
                  <p
                    className="text-sm leading-6"
                    style={{ color: "rgba(255,255,255,0.70)", fontFamily: "var(--font-fira-code)" }}
                  >
                    {c.body}
                  </p>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      <Separator />

      {/* ── WHY CASH CLOCK ── */}
      <section className="px-4 sm:px-6 mb-16 sm:mb-20">
        <div className="mx-auto max-w-6xl">
          <div className="text-xs font-semibold tracking-widest uppercase mb-8" style={sectionLabel}>
            WHY CASH CLOCK
          </div>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {features.map((f) => (
              <div
                key={f.title}
                className="p-6"
                style={{
                  border: "1px solid rgba(0,255,140,0.15)",
                  background: "linear-gradient(180deg, rgba(255,255,255,0.04), rgba(255,255,255,0.01))",
                }}
              >
                <div
                  className="text-sm font-bold uppercase tracking-wide mb-2"
                  style={{ color: "rgba(255,255,255,0.92)", fontFamily: "var(--font-geist-sans)" }}
                >
                  {f.title}
                </div>
                <p
                  className="text-sm leading-6"
                  style={{ color: "rgba(255,255,255,0.65)", fontFamily: "var(--font-fira-code)" }}
                >
                  {f.body}
                </p>
              </div>
            ))}

            {/* Designed For */}
            <div
              className="p-6"
              style={{
                border: "1px solid rgba(0,255,140,0.15)",
                background: "linear-gradient(180deg, rgba(255,255,255,0.04), rgba(255,255,255,0.01))",
              }}
            >
              <div
                className="text-sm font-bold uppercase tracking-wide mb-3"
                style={{ color: "rgba(255,255,255,0.92)", fontFamily: "var(--font-geist-sans)" }}
              >
                Designed For
              </div>
              <ul className="space-y-1">
                {["Mobile", "Web", "Lottery Aggregators", "Online Lottery Platforms"].map((item) => (
                  <li
                    key={item}
                    className="text-sm"
                    style={{ color: "rgba(0,255,140,0.75)", fontFamily: "var(--font-fira-code)" }}
                  >
                    • {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      <Separator />

      {/* ── HOW TO PLAY ── */}
      <section className="px-4 sm:px-6 mb-16 sm:mb-20">
        <div className="mx-auto max-w-6xl">
          <div className="text-xs font-semibold tracking-widest uppercase mb-8" style={sectionLabel}>
            HOW TO PLAY
          </div>
          <div style={{ border: "1px solid rgba(0,255,140,0.20)", overflow: "hidden" }}>
            {steps.map((step, i) => (
              <div
                key={step.title}
                style={{
                  borderBottom: i < steps.length - 1 ? "1px solid rgba(255,255,255,0.07)" : "none",
                }}
              >
                <button
                  onClick={() => setOpenStep(openStep === i ? null : i)}
                  className="w-full flex items-center justify-between px-5 py-4 sm:px-7 sm:py-5 text-left"
                  style={{
                    background: "transparent",
                    border: "none",
                    cursor: "pointer",
                    color: "rgba(255,255,255,0.90)",
                    fontFamily: "var(--font-geist-sans)",
                    fontWeight: "700",
                    fontSize: "15px",
                    letterSpacing: "-0.01em",
                  }}
                >
                  <span>{step.title}</span>
                  <svg
                    width="14"
                    height="14"
                    viewBox="0 0 12 12"
                    fill="none"
                    style={{
                      flexShrink: 0,
                      transform: openStep === i ? "rotate(180deg)" : "rotate(0deg)",
                      transition: "transform 0.2s ease",
                      color: "rgba(0,255,140,0.75)",
                    }}
                  >
                    <path
                      d="M2 4L6 8L10 4"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      strokeLinecap="square"
                    />
                  </svg>
                </button>

                {openStep === i && (
                  <div
                    className="px-5 pb-5 sm:px-7 sm:pb-6"
                    style={{ background: "rgba(0,255,140,0.03)" }}
                  >
                    {step.lines ? (
                      <ul className="space-y-2">
                        {step.lines.map((line) => (
                          <li
                            key={line}
                            className="text-sm"
                            style={{
                              color: "rgba(255,255,255,0.70)",
                              fontFamily: "var(--font-fira-code)",
                            }}
                          >
                            {line}
                          </li>
                        ))}
                      </ul>
                    ) : (
                      <p
                        className="text-sm leading-6"
                        style={{
                          color: "rgba(255,255,255,0.70)",
                          fontFamily: "var(--font-fira-code)",
                        }}
                      >
                        {step.body}
                      </p>
                    )}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      <Separator />

      {/* ── DISCLAIMER + FINAL CTA ── */}
      <section className="px-4 sm:px-6 pb-16 sm:pb-20">
        <div className="mx-auto max-w-6xl">

          {/* Disclaimer */}
          <div
            className="mb-12 sm:mb-16 p-4 sm:p-5 text-center mx-auto max-w-2xl"
            style={{
              border: "1px solid rgba(255,255,255,0.10)",
              background: "rgba(255,255,255,0.03)",
            }}
          >
            <div
              className="text-xs font-semibold tracking-widest uppercase mb-1"
              style={{ color: "rgba(255,255,255,0.50)", fontFamily: "var(--font-fira-code)" }}
            >
              Demo Build
            </div>
            <p
              className="text-xs"
              style={{ color: "rgba(255,255,255,0.45)", fontFamily: "var(--font-fira-code)" }}
            >
              Artwork, payouts, and feature implementation may differ from final certified release.
            </p>
          </div>

          {/* Final CTA */}
          <div className="text-center">
            <h2
              className="text-2xl sm:text-3xl lg:text-4xl font-bold uppercase mb-4"
              style={{
                color: "rgba(255,255,255,0.95)",
                fontFamily: "var(--font-inter)",
                letterSpacing: "-0.02em",
              }}
            >
              READY TO EXPERIENCE CASH CLOCK?
            </h2>
            <p className="text-base sm:text-lg text-[var(--muted)] max-w-xl mx-auto mb-8">
              Experience the mechanics and gameplay through the live interactive demo.
            </p>
            <a
              href={LIVE_DEMO_URL}
              className="inline-flex items-center justify-center px-8 py-4 text-sm font-semibold btn-cta-invert"
              style={{
                background: "var(--cta-bg)",
                color: "var(--cta-fg)",
              }}
            >
              Launch Live Demo
            </a>
          </div>
        </div>
      </section>

    </main>
  );
}
