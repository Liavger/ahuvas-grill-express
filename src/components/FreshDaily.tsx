"use client";
import Image from "next/image";
import { motion } from "framer-motion";
import { useState, useEffect, useRef } from "react";

const SLIDES = [
  { src: "/images/shwrma_all_three.png", alt: "Three shawarma spits running", title: "Three Spits, Always Running", sub: "Freshly carved every shift" },
  { src: "/images/salads_website.png", alt: "Homemade salads", title: "Homemade Salads", sub: "Made fresh every morning" },
  { src: "/images/falafel_laffa_website.png", alt: "Falafel laffa", title: "Falafel Laffa", sub: "Crispy falafel, drizzled with tahini" },
  { src: "/images/chicken_plate_website.png", alt: "Grilled chicken plate", title: "Grilled Chicken Plate", sub: "Marinated, grilled to perfection" },
  { src: "/images/shnitzel_plate_website.png", alt: "Schnitzel plate", title: "Schnitzel Plate", sub: "Golden, crispy, homemade" },
  { src: "/images/salad_bar_website.png", alt: "Our salad bar", title: "Our Salad Bar", sub: "Over a dozen fresh salads daily" },
];

export default function FreshDaily() {
  const [current, setCurrent] = useState(0);
  const timer = useRef<NodeJS.Timeout | null>(null);

  const goTo = (n: number) => {
    setCurrent(((n % SLIDES.length) + SLIDES.length) % SLIDES.length);
  };

  const startTimer = () => {
    if (timer.current) clearInterval(timer.current);
    timer.current = setInterval(() => setCurrent((c) => (c + 1) % SLIDES.length), 4500);
  };

  useEffect(() => {
    startTimer();
    return () => { if (timer.current) clearInterval(timer.current); };
  }, []);

  return (
    <section style={{ paddingTop: 64 }}>
      <div className="max-w-7xl mx-auto px-5 md:px-16" style={{ paddingBottom: 40 }}>
        <motion.p initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }}
          style={{ fontFamily: '"DM Sans",sans-serif', fontSize: 11, letterSpacing: "0.18em", textTransform: "uppercase", color: "#9C8F84", marginBottom: 14 }}>
          Made fresh, every day
        </motion.p>
        <motion.h2 initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 1 }}
          style={{ fontFamily: '"Cormorant Garamond",serif', fontSize: "clamp(24px,4vw,50px)", lineHeight: 1.1, color: "#1A1612", fontWeight: 400, maxWidth: 520 }}>
          Every ingredient prepared in-house, every morning, without exception.
        </motion.h2>
      </div>

      <div style={{ position: "relative", width: "100%", height: 480, background: "#1A1612", overflow: "hidden" }} className="md:h-[600px]">
        {SLIDES.map((s, i) => (
          <div key={i} style={{ position: "absolute", inset: 0, opacity: i === current ? 1 : 0, transition: "opacity 0.9s ease", pointerEvents: i === current ? "auto" : "none" }}>
            <Image src={s.src} alt={s.alt} fill style={{ objectFit: "cover" }} sizes="100vw" />
            <div style={{ position: "absolute", bottom: 0, left: 0, right: 0, padding: "60px 24px 28px", background: "linear-gradient(to top, rgba(26,22,18,0.88), transparent)" }}>
              <p style={{ fontFamily: '"Cormorant Garamond",serif', fontStyle: "italic", fontSize: "clamp(20px,3vw,32px)", color: "#F5F0E8", marginBottom: 6 }}>{s.title}</p>
              <p style={{ fontFamily: '"DM Sans",sans-serif', fontSize: 11, letterSpacing: "0.12em", textTransform: "uppercase", color: "rgba(245,240,232,0.5)" }}>{s.sub}</p>
            </div>
          </div>
        ))}

        <button onClick={() => { goTo(current - 1); startTimer(); }} aria-label="Previous"
          style={{ position: "absolute", left: 16, top: "50%", transform: "translateY(-50%)", width: 46, height: 46, borderRadius: "50%", background: "rgba(0,0,0,0.35)", border: "1px solid rgba(245,240,232,0.25)", color: "#F5F0E8", cursor: "pointer", display: "flex", alignItems: "center", justifyContent: "center", zIndex: 5 }}>
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="15 18 9 12 15 6"/></svg>
        </button>
        <button onClick={() => { goTo(current + 1); startTimer(); }} aria-label="Next"
          style={{ position: "absolute", right: 16, top: "50%", transform: "translateY(-50%)", width: 46, height: 46, borderRadius: "50%", background: "rgba(0,0,0,0.35)", border: "1px solid rgba(245,240,232,0.25)", color: "#F5F0E8", cursor: "pointer", display: "flex", alignItems: "center", justifyContent: "center", zIndex: 5 }}>
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="9 18 15 12 9 6"/></svg>
        </button>

        <div style={{ position: "absolute", bottom: 16, left: "50%", transform: "translateX(-50%)", display: "flex", gap: 7, zIndex: 5 }}>
          {SLIDES.map((_, i) => (
            <button key={i} onClick={() => { goTo(i); startTimer(); }} aria-label={`Slide ${i + 1}`}
              style={{ width: i === current ? 22 : 7, height: 7, borderRadius: i === current ? 4 : "50%", background: i === current ? "#C4793A" : "rgba(245,240,232,0.3)", border: "none", cursor: "pointer", padding: 0, transition: "all 0.3s ease" }} />
          ))}
        </div>
      </div>
    </section>
  );
}
