"use client";

import { useMemo } from "react";
import { usePathname } from "next/navigation";
import { resolveTheme } from "./tokens";

export default function ThemeProvider({ children }) {
  const pathname = usePathname() || "/";

  const style = useMemo(() => {
    const tokens = resolveTheme(pathname);

    // Ensure these are treated as CSS variables on the wrapper.
    // Also make sure background/text actually USE the vars.
    return {
      ...tokens,
      background: "var(--bg)",
      color: "var(--fg)",
      minHeight: "100vh",
    };
  }, [pathname]);

  return <div style={style}>{children}</div>;
}