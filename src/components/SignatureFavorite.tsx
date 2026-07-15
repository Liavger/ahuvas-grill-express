"use client";
import Image from "next/image";
import { motion } from "framer-motion";

export default function SignatureFavorite() {
  return (
    <section style={{ background: "#1A1612", padding: "80px 0" }}>
      <div className="max-w-7xl mx-auto px-5 md:px-16">
        <motion.p initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }}
          style={{ fontFamily: '"DM Sans",sans-serif', fontSize: 9, letterSpacing: "0.25em", textTransform: "uppercase", color: "#6B5F54", marginBottom: 32 }}>
          Signature
        </motion.p>
        <div className="relative">
          <motion.div initial={{ opacity: 0, scale: 0.96 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ duration: 1 }}
            className="relative overflow-hidden" style={{ width: "100%", height: 300 }}
          >
            <Image src="/images/shwarma_plate_website.png" alt="Baby chicken shawarma" fill style={{ objectFit: "cover" }} sizes="(max-width:768px) 100vw, 65vw" />
          </motion.div>
          <motion.div initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 1, delay: 0.2 }}
            className="mt-8 lg:mt-0 lg:absolute lg:bottom-0 lg:right-0 lg:w-5/12 lg:pb-10">
            <h2 style={{ fontFamily: '"Cormorant Garamond",serif', fontStyle: "italic", fontWeight: 400, fontSize: "clamp(28px,4vw,54px)", lineHeight: 1.06, color: "#F5F0E8", marginBottom: 14 }}>
              Baby chicken shawarma
            </h2>
            <p style={{ fontFamily: '"DM Sans",sans-serif', fontSize: 14, color: "#9C8F84", lineHeight: 1.7, marginBottom: 22, maxWidth: 320 }}>
              Freshly marinated, slow-roasted through the day, carved to order. Crispy at the edges, juicy at the center. The dish our guests come back for.
            </p>
            <a href="https://order.toasttab.com/online/ahuvasgrill" target="_blank" rel="noopener noreferrer"
              style={{ fontFamily: '"DM Sans",sans-serif', fontSize: 11, letterSpacing: "0.15em", textTransform: "uppercase", color: "#F5F0E8", textDecoration: "none", borderBottom: "1px solid rgba(245,240,232,0.35)", paddingBottom: 2 }}>
              Order online →
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
