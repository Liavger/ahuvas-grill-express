"use client";
import Image from "next/image";
import { motion } from "framer-motion";

export default function OurStory() {
  return (
    <section id="about" className="border-t" style={{ borderColor: "#D4C9B8" }}>
      <div className="max-w-7xl mx-auto px-5 md:px-16 py-16 md:py-24">
        <div className="flex flex-col md:grid md:gap-20 md:items-start" style={{ gridTemplateColumns: "1fr 1fr" }}>
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.8 }}>
            <p style={{ fontFamily: '"DM Sans",sans-serif', fontSize: 11, letterSpacing: "0.18em", textTransform: "uppercase", color: "#9C8F84", marginBottom: 24 }}>Our story</p>
            <h2 style={{ fontFamily: '"Cormorant Garamond",serif', fontSize: "clamp(28px,4vw,50px)", lineHeight: 1.1, color: "#1A1612", fontWeight: 400, marginBottom: 20 }}>Fifteen years in the Five Towns.</h2>
            <p style={{ fontFamily: '"DM Sans",sans-serif', fontSize: 14, color: "#6B5F54", lineHeight: 1.75, maxWidth: 380 }}>
              Ahuva&rsquo;s has been family owned and run from day one &mdash; Glatt Kosher, freshly carved, made by people who live in this community and cook for their neighbors.
            </p>
          </motion.div>
          <motion.div initial={{ opacity: 0, scale: 0.97 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ duration: 0.8, delay: 0.15 }}
            className="relative mt-8 md:mt-0 overflow-hidden" style={{ height: 320 }} >
            <Image src="/images/ahuvas_outside_website.png" alt="Ahuvas Grill Express storefront" fill style={{ objectFit: "cover" }} sizes="(max-width:768px) 100vw, 50vw" />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
