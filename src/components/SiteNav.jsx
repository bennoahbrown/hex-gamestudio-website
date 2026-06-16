// src/components/SiteNav.jsx
"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useState, useEffect, useRef } from "react";

const nav = [
  { href: "/studio", label: "Studio" },
  {
    href: "/games",
    label: "Games",
    submenu: [
      { href: "/games/cash-clock", label: "CASH CLOCK" },
      { href: "/games/chance-lottery", label: "CHANCE LOTTERY" },
    ],
  },
  { href: "/contact", label: "Contact" },
];

export default function SiteNav() {
  const pathname = usePathname() || "/";
  const [openDropdown, setOpenDropdown] = useState(null);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [mobileSubmenuOpen, setMobileSubmenuOpen] = useState(null);
  const mobileMenuRef = useRef(null);
  const hamburgerRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        mobileMenuOpen && 
        mobileMenuRef.current && 
        !mobileMenuRef.current.contains(event.target) &&
        hamburgerRef.current &&
        !hamburgerRef.current.contains(event.target)
      ) {
        setMobileMenuOpen(false);
        setMobileSubmenuOpen(null);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    document.addEventListener("touchstart", handleClickOutside);
    
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      document.removeEventListener("touchstart", handleClickOutside);
    };
  }, [mobileMenuOpen]);

  const isActive = (href) => {
    if (href === "/") return pathname === "/";
    return pathname === href || pathname.startsWith(href + "/");
  };

  // Minimal portal nav for Cash Clock demo routes — no links, no clickable brand
  if (pathname.startsWith("/cash-clock/")) {
    return (
      <header className="site-nav">
        <div className="px-4 sm:px-6 h-full">
          <div className="site-nav-inner mx-auto max-w-6xl">
            <div className="site-brand" style={{ cursor: "default" }}>
              <Image
                src="/hex-logo.png"
                alt="Hex Game Studio logo"
                width={30}
                height={30}
                className="site-brand-logo"
                priority
                unoptimized
              />
              <span className="site-brand-name">Cash Clock Demo</span>
            </div>
          </div>
        </div>
      </header>
    );
  }

  return (
    <header className="site-nav">
      <div className="px-4 sm:px-6 h-full">
        <div className="site-nav-inner mx-auto max-w-6xl">
          <Link href="/" className="site-brand">
            <Image
              src="/hex-logo.png"
              alt="Hex Game Studio logo"
              width={30}
              height={30}
              className="site-brand-logo"
              priority
              unoptimized
            />
            <span className="site-brand-name">Hex Game Studio</span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="site-nav-links">
            {nav.map((i) => (
              <div
                key={i.href}
                className="relative"
                onMouseEnter={() => i.submenu && setOpenDropdown(i.href)}
                onMouseLeave={() => setOpenDropdown(null)}
              >
                <Link
                  href={i.href}
                  className={`site-nav-link ${isActive(i.href) ? "is-active" : ""}`}
                  style={{
                    fontFamily: "var(--font-geist-sans)",
                    fontWeight: "800",
                    letterSpacing: "-0.02em",
                  }}
                >
                  {i.label}
                </Link>

                {i.submenu && openDropdown === i.href && (
                  <div 
                    className="absolute left-0 top-full z-50"
                    style={{
                      background: "rgba(0,0,0,0.95)",
                      border: "1px solid rgba(0,255,140,0.2)",
                      borderTop: "none",
                      backdropFilter: "blur(14px)",
                      boxShadow: "0 4px 20px rgba(0,0,0,0.5)",
                      minWidth: "180px"
                    }}
                  >
                    {i.submenu.map((item, idx) => (
                      <Link
                        key={item.href}
                        href={item.href}
                        className="block px-5 py-3 text-sm transition-colors"
                        style={{
                          color: "rgba(255,255,255,0.82)",
                          fontFamily: "var(--font-geist-sans)",
                          fontWeight: "800",
                          letterSpacing: "-0.02em",
                          textTransform: "uppercase",
                          fontSize: "13px",
                          borderTop: idx === 0 ? "1px solid rgba(0,255,140,0.15)" : "none",
                          borderBottom: idx < i.submenu.length - 1 ? "1px solid rgba(255,255,255,0.05)" : "none"
                        }}
                        onMouseEnter={(e) => {
                          e.currentTarget.style.background = "rgba(0,255,140,0.08)";
                          e.currentTarget.style.color = "#00ff8a";
                        }}
                        onMouseLeave={(e) => {
                          e.currentTarget.style.background = "transparent";
                          e.currentTarget.style.color = "rgba(255,255,255,0.82)";
                        }}
                      >
                        {item.label}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </nav>

          {/* Mobile Menu Button */}
          <button
            ref={hamburgerRef}
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="sm:hidden flex items-center justify-center w-10 h-10"
            style={{
              color: "var(--nav-accent)",
              background: "transparent",
              border: "none",
            }}
            aria-label="Toggle menu"
          >
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
              {mobileMenuOpen ? (
                <path d="M4 4L16 16M16 4L4 16" stroke="currentColor" strokeWidth="2" strokeLinecap="square"/>
              ) : (
                <>
                  <path d="M3 5H17" stroke="currentColor" strokeWidth="2" strokeLinecap="square"/>
                  <path d="M3 10H17" stroke="currentColor" strokeWidth="2" strokeLinecap="square"/>
                  <path d="M3 15H17" stroke="currentColor" strokeWidth="2" strokeLinecap="square"/>
                </>
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {mobileMenuOpen && (
        <div
          ref={mobileMenuRef}
          className="sm:hidden absolute top-full right-0 z-50"
          style={{
            width: "50%",
            background: "rgba(0,0,0,0.98)",
            borderTop: "1px solid rgba(0,255,140,0.2)",
            borderBottom: "1px solid rgba(0,255,140,0.2)",
            borderLeft: "1px solid rgba(0,255,140,0.2)",
            backdropFilter: "blur(14px)",
            boxShadow: "0 4px 20px rgba(0,0,0,0.5)",
          }}
        >
          <nav className="flex flex-col py-2">
            {nav.map((i) => (
              <div key={i.href}>
                {i.submenu ? (
                  <div className="flex items-center" style={{ borderBottom: "1px solid rgba(255,255,255,0.05)" }}>
                    <Link
                      href={i.href}
                      className="flex-1 px-5 py-3 text-sm transition-colors"
                      style={{
                        fontFamily: "var(--font-geist-sans)",
                        fontWeight: "800",
                        letterSpacing: "-0.02em",
                        textTransform: "uppercase",
                        fontSize: "13px",
                        color: isActive(i.href) ? "#00ff8a" : "rgba(255,255,255,0.82)",
                      }}
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      {i.label}
                    </Link>
                    <button
                      onClick={() => setMobileSubmenuOpen(mobileSubmenuOpen === i.href ? null : i.href)}
                      className="px-3 py-3 transition-colors"
                      style={{
                        background: "transparent",
                        border: "none",
                        color: isActive(i.href) ? "#00ff8a" : "rgba(255,255,255,0.82)",
                      }}
                      aria-label="Toggle submenu"
                    >
                      <svg
                        width="12"
                        height="12"
                        viewBox="0 0 12 12"
                        fill="none"
                        style={{
                          transform: mobileSubmenuOpen === i.href ? "rotate(180deg)" : "rotate(0deg)",
                          transition: "transform 0.2s ease",
                        }}
                      >
                        <path d="M2 4L6 8L10 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="square"/>
                      </svg>
                    </button>
                  </div>
                ) : (
                  <Link
                    href={i.href}
                    className="block px-5 py-3 text-sm transition-colors"
                    style={{
                      fontFamily: "var(--font-geist-sans)",
                      fontWeight: "800",
                      letterSpacing: "-0.02em",
                      textTransform: "uppercase",
                      fontSize: "13px",
                      color: isActive(i.href) ? "#00ff8a" : "rgba(255,255,255,0.82)",
                      borderBottom: "1px solid rgba(255,255,255,0.05)",
                    }}
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    {i.label}
                  </Link>
                )}
                {i.submenu && mobileSubmenuOpen === i.href && (
                  <div style={{ background: "rgba(0,0,0,0.4)" }}>
                    {i.submenu.map((item, idx) => (
                      <Link
                        key={item.href}
                        href={item.href}
                        className="block px-5 py-3 text-sm transition-colors"
                        style={{
                          fontFamily: "var(--font-geist-sans)",
                          fontWeight: "800",
                          letterSpacing: "-0.02em",
                          textTransform: "uppercase",
                          fontSize: "13px",
                          color: isActive(item.href) ? "#00ff8a" : "rgba(255,255,255,0.82)",
                          borderTop: idx === 0 ? "1px solid rgba(0,255,140,0.15)" : "none",
                          borderBottom: idx < i.submenu.length - 1 ? "1px solid rgba(255,255,255,0.05)" : "none",
                          paddingLeft: "2.5rem",
                        }}
                        onClick={() => {
                          setMobileMenuOpen(false);
                          setMobileSubmenuOpen(null);
                        }}
                        onTouchStart={(e) => {
                          e.currentTarget.style.background = "rgba(0,255,140,0.08)";
                          e.currentTarget.style.color = "#00ff8a";
                        }}
                        onTouchEnd={(e) => {
                          e.currentTarget.style.background = "transparent";
                          e.currentTarget.style.color = isActive(item.href) ? "#00ff8a" : "rgba(255,255,255,0.82)";
                        }}
                      >
                        {item.label}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
}