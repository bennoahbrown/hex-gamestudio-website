// src/components/SignalCard.jsx
// Reusable card component for status/system indicators

export default function SignalCard({ label, time, description, signals = [] }) {
  return (
    <div
      className="border p-7"
      style={{
        borderColor: "rgba(0,255,140,0.25)",
        background:
          "linear-gradient(180deg, rgba(0,0,0,0.45), rgba(0,0,0,0.20))",
        boxShadow:
          "0 22px 70px rgba(0,0,0,0.55), inset 0 0 0 1px rgba(0,255,140,0.10)",
      }}
    >
      <div className="text-xs font-semibold tracking-[0.28em] text-[rgba(255,255,255,0.70)]">
        {label}
      </div>
      <div
        className="mt-4 font-mono text-5xl tracking-[0.14em]"
        style={{ color: "rgba(255,255,255,0.92)" }}
      >
        {time}
      </div>
      <p className="mt-5 text-sm leading-6 text-[rgba(255,255,255,0.70)]">
        {description}
      </p>

      {signals.length > 0 && (
        <div className="mt-6 grid gap-2 text-xs tracking-[0.24em]">
          {signals.map((signal, idx) => (
            <div key={idx} style={{ color: "var(--nav-accent, #00ff8a)" }}>
              {signal}
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
