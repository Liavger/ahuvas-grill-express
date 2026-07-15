"use client";
import Image from "next/image";
import { motion, useReducedMotion } from "framer-motion";
import { useEffect, useRef } from "react";

export default function Hero() {
  const reduce = useReducedMotion();
  const headlineRef = useRef<HTMLHeadingElement>(null);

  useEffect(() => {
    const el = headlineRef.current;
    if (!el || reduce) return;
    const words = "Where Israel meets New York.".split(" ");
    el.innerHTML = words
      .map(
        (w, i) =>
          `<span style="display:inline-block;overflow:hidden;vertical-align:bottom;margin-right:0.25em"><span class="word-inner" style="display:inline-block;transform:translateY(110%);opacity:0;transition:transform 1s cubic-bezier(0.16,1,0.3,1) ${1.0 + i * 0.12}s,opacity 0.6s ease ${1.0 + i * 0.12}s">${w}</span></span>`
      )
      .join(" ");
    setTimeout(() => {
      el.querySelectorAll(".word-inner").forEach((s) => {
        (s as HTMLElement).style.transform = "translateY(0)";
        (s as HTMLElement).style.opacity = "1";
      });
    }, 100);
  }, [reduce]);

  return (
    <section style={{ position: "relative", height: "100vh", minHeight: 600, maxHeight: 1000, overflow: "hidden", background: "#1A1612" }}>
      <motion.div
        style={{ position: "absolute", inset: -20 }}
        animate={reduce ? {} : { scale: [1, 1.08] }}
        transition={reduce ? {} : { duration: 12, repeat: Infinity, repeatType: "reverse", ease: "easeInOut" }}
      >
        <Image
          src="/images/cutting_shwarma_website.png"
          alt="Baby chicken shawarma freshly carved"
          fill priority
          style={{ objectFit: "cover" }}
          sizes="100vw"
        />
      </motion.div>

      <div style={{ position: "absolute", inset: 0, background: "radial-gradient(ellipse at 40% 50%, rgba(26,22,18,.05) 0%, rgba(26,22,18,.5) 50%, rgba(26,22,18,.9) 100%)" }} />
      <div style={{ position: "absolute", inset: 0, background: "linear-gradient(0deg, rgba(26,22,18,.85) 0%, transparent 50%)" }} />

      <div style={{ position: "absolute", top: 0, left: 0, right: 0, height: 52, background: "#0F0D0B" }} />
      <div style={{ position: "absolute", bottom: 0, left: 0, right: 0, height: 52, background: "#0F0D0B", display: "flex", alignItems: "center", justifyContent: "space-between", padding: "0 24px" }}>
        <span style={{ fontFamily: '"DM Sans",sans-serif', fontSize: 9, letterSpacing: "0.2em", textTransform: "uppercase", color: "#6B5F54" }}>Vaad Hakashrus of the Five Towns &amp; Far Rockaway</span>
        <span className="hidden md:inline" style={{ fontFamily: '"DM Sans",sans-serif', fontSize: 9, letterSpacing: "0.2em", textTransform: "uppercase", color: "#6B5F54" }}>Lawrence, NY — Est. 2010</span>
      </div>

      <div style={{ position: "absolute", bottom: 90, left: 24, right: 24 }} className="md:left-16 md:right-16 max-w-7xl">
        <motion.p
          initial={reduce ? {} : { opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          style={{ fontFamily: '"DM Sans",sans-serif', fontSize: 10, letterSpacing: "0.25em", textTransform: "uppercase", color: "#C4793A", marginBottom: 16 }}
        >
          Glatt Kosher &middot; Five Towns &middot; Authentic Israeli
        </motion.p>

        <h1 ref={headlineRef}
          style={{ fontFamily: '"Cormorant Garamond",serif', fontStyle: "italic", fontWeight: 400, fontSize: "clamp(42px,8vw,96px)", lineHeight: 1.02, color: "#F5F0E8", marginBottom: 20 }}
        >
          Where Israel meets New York.
        </h1>

        <motion.div
          initial={reduce ? {} : { opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.8 }}
          style={{ display: "flex", alignItems: "center", gap: 24, marginBottom: 16, flexWrap: "wrap" }}
        >
          <a href="https://order.toasttab.com/online/ahuvasgrill" target="_blank" rel="noopener noreferrer"
            style={{ background: "#8B2A1F", color: "#F5F0E8", padding: "13px 26px", fontFamily: '"DM Sans",sans-serif', fontSize: 11, letterSpacing: "0.15em", textTransform: "uppercase", textDecoration: "none" }}>
            Order online
          </a>
          <a href="tel:5163698333"
            style={{ color: "#F5F0E8", fontFamily: '"DM Sans",sans-serif', fontSize: 11, letterSpacing: "0.15em", textTransform: "uppercase", textDecoration: "none", borderBottom: "1px solid rgba(245,240,232,0.4)", paddingBottom: 2 }}>
            Call for catering
          </a>
        </motion.div>
      </div>
    </section>
  );
}
