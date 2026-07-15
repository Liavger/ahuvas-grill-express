"use client";
import { useEffect, useState } from "react";
import Image from "next/image";

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", fn, { passive: true });
    return () => window.removeEventListener("scroll", fn);
  }, []);

  return (
    <header
      className="fixed top-0 left-0 right-0 z-50 transition-all duration-500"
      style={{
        background: scrolled ? "rgba(245,240,232,0.96)" : "transparent",
        backdropFilter: scrolled ? "blur(12px)" : "none",
        borderBottom: scrolled ? "1px solid rgba(212,201,184,0.6)" : "none",
        height: scrolled ? "72px" : "90px",
      }}
    >
      <nav className="max-w-7xl mx-auto px-5 md:px-10 flex items-center justify-between h-full">
        <a href="#" className="flex items-center gap-2 flex-shrink-0">
          <span
            className="inline-block flex-shrink-0"
            style={{ width: "3px", height: "20px", background: "#8B2A1F", borderRadius: "2px" }}
          />
          <span
            style={{
              fontFamily: '"DM Sans", sans-serif',
              fontWeight: 600,
              fontSize: "15px",
              letterSpacing: "0.1em",
              lineHeight: 1,
              whiteSpace: "nowrap",
            }}
          >
            <span style={{ color: scrolled ? "#1A1612" : "#F5F0E8" }}>AHUVA&rsquo;S GRILL</span>
            <span style={{ color: "#C4793A" }}> EXPRESS</span>
          </span>
        </a>

        <div className="flex items-center gap-5 md:gap-7">
          {["Catering", "About", "FAQ"].map((l) => (
            <a
              key={l}
              href={`#${l.toLowerCase()}`}
              className="hidden md:inline font-medium transition-opacity hover:opacity-50"
              style={{
                fontFamily: '"DM Sans", sans-serif',
                fontSize: "11px",
                letterSpacing: "0.15em",
                textTransform: "uppercase",
                color: scrolled ? "#1A1612" : "#F5F0E8",
              }}
            >
              {l}
            </a>
          ))}
          <a
            href="https://order.toasttab.com/online/ahuvasgrill"
            target="_blank"
            rel="noopener noreferrer"
            className="transition-all hover:opacity-80"
            style={{
              fontFamily: '"DM Sans", sans-serif',
              fontSize: "11px",
              letterSpacing: "0.13em",
              textTransform: "uppercase",
              padding: "10px 16px",
              background: scrolled ? "#8B2A1F" : "rgba(255,255,255,0.15)",
              border: scrolled ? "none" : "1px solid rgba(245,240,232,0.4)",
              color: "#F5F0E8",
              textDecoration: "none",
            }}
          >
            Order online
          </a>
        </div>
      </nav>
    </header>
  );
}
