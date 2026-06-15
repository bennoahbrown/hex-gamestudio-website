// src/components/HeroBackground.jsx
// Reusable atmospheric background for hero sections

export default function HeroBackground() {
  return (
    <div className="pointer-events-none absolute inset-0">
      {/* Dark cinematic base with radial gradients */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(1100px 700px at 62% 20%, rgba(0,255,140,0.16), rgba(0,0,0,0) 55%), radial-gradient(900px 650px at 20% 70%, rgba(255,0,200,0.10), rgba(0,0,0,0) 60%), linear-gradient(to bottom, rgba(0,0,0,0.70), rgba(0,0,0,0.90))",
        }}
      />

      {/* Grid pattern */}
      <div
        className="absolute inset-0 opacity-[0.20]"
        style={{
          background:
            "repeating-linear-gradient(to right, rgba(255,255,255,0.06) 0px, rgba(255,255,255,0.06) 1px, transparent 1px, transparent 92px), repeating-linear-gradient(to bottom, rgba(255,255,255,0.045) 0px, rgba(255,255,255,0.045) 1px, transparent 1px, transparent 74px)",
        }}
      />

      {/* Vignette */}
      <div
        className="absolute inset-0"
        style={{ boxShadow: "inset 0 0 180px rgba(0,0,0,0.82)" }}
      />

      {/* Subtle noise texture */}
      <div
        className="absolute inset-0 opacity-[0.07]"
        style={{
          backgroundImage:
            "url('data:image/svg+xml;utf8,<svg xmlns=%22http://www.w3.org/2000/svg%22 width=%22320%22 height=%22320%22><filter id=%22n%22><feTurbulence type=%22fractalNoise%22 baseFrequency=%220.9%22 numOctaves=%222%22 stitchTiles=%22stitch%22/></filter><rect width=%22320%22 height=%22320%22 filter=%22url(%23n)%22 opacity=%220.35%22/></svg>')",
          backgroundRepeat: "repeat",
        }}
      />
    </div>
  );
}
