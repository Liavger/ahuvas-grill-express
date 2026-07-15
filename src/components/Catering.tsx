"use client";
import Image from "next/image";
import { motion } from "framer-motion";

export default function Catering() {
  return (
    <section id="catering" style={{ position: "relative", minHeight: 520, background: "#1A1612", display: "flex", alignItems: "center", overflow: "hidden" }}>
      <div style={{ position: "absolute", inset: 0, opacity: 0.25 }}>
        <Image src="/images/shnitzel_plate_website.png" alt="Catering" fill style={{ objectFit: "cover" }} sizes="100vw" />
      </div>
      <div style={{ position: "absolute", inset: 0, background: "rgba(26,22,18,0.72)" }} />
      <div className="relative z-10 max-w-7xl mx-auto px-5 md:px-16 py-20">
        <motion.p initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ duration: 0.8 }}
          style={{ fontFamily: '"DM Sans",sans-serif', fontSize: 9, letterSpacing: "0.25em", textTransform: "uppercase", color: "#C4793A", marginBottom: 24 }}>
          Catering
        </motion.p>
        <motion.h2 initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 1.1 }}
          style={{ fontFamily: '"Cormorant Garamond",serif', fontStyle: "italic", fontWeight: 400, fontSize: "clamp(32px,6vw,80px)", lineHeight: 1.04, color: "#F5F0E8", marginBottom: 20, maxWidth: 760 }}>
          Bring Ahuva&rsquo;s to your next event.
        </motion.h2>
        <motion.p initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ duration: 0.8, delay: 0.3 }}
          style={{ fontFamily: '"DM Sans",sans-serif', fontSize: 14, color: "#9C8F84", maxWidth: 400, lineHeight: 1.7, marginBottom: 28 }}>
          Corporate lunches, simchas, Shabbat &amp; holiday meals, private events. Fully Glatt Kosher. Call us and we&rsquo;ll handle everything.
        </motion.p>
        <a href="tel:5163698333"
          style={{ fontFamily: '"DM Sans",sans-serif', fontSize: 13, color: "#F5F0E8", textDecoration: "none", letterSpacing: "0.1em", borderBottom: "1px solid rgba(245,240,232,0.35)", paddingBottom: 2 }}>
          (516) 369-8333
        </a>
      </div>
    </section>
  );
}
