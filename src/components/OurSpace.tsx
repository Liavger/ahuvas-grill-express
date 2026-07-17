"use client";
import Image from "next/image";
import { motion } from "framer-motion";

export default function OurSpace() {
  return (
    <section className="border-t" style={{ borderColor: "#D4C9B8" }}>
      <div
        className="max-w-7xl mx-auto px-5 md:px-10 py-16 md:py-24 flex flex-col md:flex-row items-center"
        style={{ gap: 48 }}
      >
        <motion.div
          initial={{ opacity: 0, x: -24 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          style={{
            position: "relative",
            width: "100%",
            aspectRatio: "1086 / 1448",
            borderRadius: 10,
            overflow: "hidden",
            flex: "0 0 58%",
          }}
        >
          <Image
            src="/images/salad_bar_website.png"
            alt="Ahuvas Grill Express salad bar and logo"
            fill
            style={{ objectFit: "cover" }}
            sizes="(min-width: 1024px) 58vw, 100vw"
          />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 24 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.15 }}
          style={{ width: "100%", flex: "0 0 38%" }}
        >
          <p
            style={{
              fontFamily: '"DM Sans",sans-serif',
              fontSize: 11,
              letterSpacing: "0.18em",
              textTransform: "uppercase",
              color: "#9C8F84",
              marginBottom: 14,
            }}
          >
            Our space
          </p>
          <h2
            style={{
              fontFamily: '"Cormorant Garamond",serif',
              fontSize: "clamp(28px,4vw,48px)",
              lineHeight: 1.1,
              color: "#1A1612",
              fontWeight: 400,
              marginBottom: 16,
            }}
          >
            Walk in, feel at home.
          </h2>
          <p
            style={{
              fontFamily: '"DM Sans",sans-serif',
              fontSize: 14,
              color: "#6B5F54",
              lineHeight: 1.7,
              maxWidth: 340,
            }}
          >
            A full salad bar, freshly stocked every day. Pick your proteins,
            pile on the sides, and build exactly what you&rsquo;re craving.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
