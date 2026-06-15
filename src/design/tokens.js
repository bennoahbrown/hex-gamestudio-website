// src/design/tokens.js
// Central design system tokens (CSS variables).
// Edit here to restyle the site without touching page components.

export const themes = {
  // Default theme used site-wide
  base: {
    /* Page */
    "--bg": "#0b0c10",
    "--fg": "rgba(255,255,255,0.92)",

    "--surface": "rgba(255,255,255,0.08)",
    "--surface-border": "rgba(255,255,255,0.12)",

    "--muted": "rgba(255,255,255,0.62)",
    "--muted-2": "rgba(255,255,255,0.42)",

    /* CTA */
    "--cta-bg": "#00ff8c",
    "--cta-fg": "#06110b",

    /* NAV (global, Athan-style) */
    "--nav-bg": "rgba(0,0,0,0.90)",
    "--nav-fg": "rgba(255,255,255,0.92)",
    "--nav-border": "rgba(255,255,255,0.10)",
    "--nav-accent": "#00ff8c",
  },

  // Per-page overrides (only include keys you want to override)
  home: {
    // Example: slightly deeper background for homepage
    "--bg": "#07080a",
  },

  studio: {
    // Example: slightly different hue
    "--bg": "#070a08",
  },

  games: {
    // You can now change this and it WILL apply if the page isn't hard-coding bg-white
    "--bg": "#0a0710",
  },

  cashClock: {
    "--bg": "#0b0b0f",
  },

  contact: {
    "--bg": "#07090e",
  },
};

// Routes -> theme key
export const routeThemeMap = [
  { match: (p) => p === "/", theme: "home" },
  { match: (p) => p.startsWith("/studio"), theme: "studio" },
  { match: (p) => p === "/games" || p.startsWith("/games/"), theme: "games" },
  { match: (p) => p.startsWith("/games/cash-clock"), theme: "cashClock" },
  { match: (p) => p.startsWith("/contact"), theme: "contact" },
];

export function resolveTheme(pathname) {
  const base = themes.base;
  const found = routeThemeMap.find((r) => r.match(pathname));
  const pageTheme = found ? themes[found.theme] : {};
  return { ...base, ...pageTheme };
}