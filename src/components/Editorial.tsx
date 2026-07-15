"use client";
import { motion } from "framer-motion";

export default function Editorial() {
  return (
    <section className="px-5 md:px-16 py-16 md:py-28 max-w-7xl mx-auto">
      <div className="flex flex-col lg:grid lg:gap-20 lg:items-end" style={{ gridTemplateColumns: "1fr auto" }}>
        <motion.h2
          initial={{ opacity: 0, x: -40 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.9 }}
          style={{ fontFamily: '"Cormorant Garamond",serif', fontSize: "clamp(30px,5.5vw,68px)", lineHeight: 1.08, color: "#1A1612", fontWeight: 400, marginBottom: 32 }}
        >
          Not a trend.<br /><em>Fifteen years of doing it the same way, every day.</em>
        </motion.h2>
        <motion.div
          initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ duration: 0.8, delay: 0.3 }}
          className="grid grid-cols-3 lg:flex lg:flex-col gap-5 lg:gap-6 lg:min-w-[200px]"
        >
          {[
            { label: "Certification", value: "Glatt Kosher", sub: "Vaad Hakashrus, Five Towns" },
            { label: "Community", value: "Family owned", sub: "Lawrence, NY since 2010" },
            { label: "Standard", value: "Carved to order", sub: "Never frozen, never premade" },
          ].map((m) => (
            <div key={m.label}>
              <p style={{ fontFamily: '"DM Sans",sans-serif', fontSize: 9, letterSpacing: "0.2em", textTransform: "uppercase", color: "#9C8F84", marginBottom: 4 }}>{m.label}</p>
              <p style={{ fontFamily: '"DM Sans",sans-serif', fontSize: 13, color: "#2C2520" }}>{m.value}</p>
              <p style={{ fontFamily: '"DM Sans",sans-serif', fontSize: 11, color: "#6B5F54" }}>{m.sub}</p>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
