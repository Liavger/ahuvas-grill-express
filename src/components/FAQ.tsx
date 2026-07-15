"use client";
import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

const FAQS = [
  { q: "Is everything Glatt Kosher?", a: "Yes. Certified by the Vaad Hakashrus of the Five Towns & Far Rockaway." },
  { q: "Do you cater?", a: "Yes — simchas, corporate lunches, Shabbat and holiday meals. Call (516) 369-8333 to discuss your event." },
  { q: "Do you deliver?", a: "Delivery is available through our online ordering page via Toast." },
  { q: "What are your hours?", a: "Sunday through Thursday, 11am to 11pm. Closed Friday and Saturday." },
  { q: "Can I order online?", a: "Obviously! Just hit the Order Online button at the top right — or if scrolling back up feels like too much work, we've got you covered right here." },
];

export default function FAQ() {
  const [open, setOpen] = useState<number | null>(null);
  return (
    <section id="faq" className="border-t" style={{ borderColor: "#D4C9B8" }}>
      <div className="max-w-7xl mx-auto px-5 md:px-10 py-16 md:py-24">
        <div className="flex flex-col md:grid md:gap-20" style={{ gridTemplateColumns: "260px 1fr" }}>
          <div className="mb-8 md:mb-0">
            <p style={{ fontFamily: '"DM Sans",sans-serif', fontSize: 11, letterSpacing: "0.18em", textTransform: "uppercase", color: "#9C8F84", marginBottom: 12 }}>FAQ</p>
            <p style={{ fontFamily: '"Cormorant Garamond",serif', fontSize: 28, lineHeight: 1.2, color: "#1A1612", fontWeight: 400 }}>Questions &amp; answers</p>
          </div>
          <div>
            {FAQS.map((item, i) => (
              <div key={i} className="border-b" style={{ borderColor: "#D4C9B8" }}>
                <button onClick={() => setOpen(open === i ? null : i)}
                  className="w-full flex justify-between items-center py-5 text-left gap-4 bg-transparent border-none cursor-pointer">
                  <span style={{ fontFamily: '"DM Sans",sans-serif', fontSize: 15, color: "#1A1612" }}>{item.q}</span>
                  <span style={{ fontFamily: '"Cormorant Garamond",serif', fontSize: 24, color: "#9C8F84", transition: "transform 0.25s", transform: open === i ? "rotate(45deg)" : "none", flexShrink: 0 }}>+</span>
                </button>
                <AnimatePresence initial={false}>
                  {open === i && (
                    <motion.div initial={{ height: 0, opacity: 0 }} animate={{ height: "auto", opacity: 1 }} exit={{ height: 0, opacity: 0 }} transition={{ duration: 0.3 }} style={{ overflow: "hidden" }}>
                      <p style={{ fontFamily: '"DM Sans",sans-serif', fontSize: 14, color: "#6B5F54", lineHeight: 1.7, paddingBottom: 20 }}>{item.a}
                        {i === 4 && (
                          <a href="https://order.toasttab.com/online/ahuvasgrill" target="_blank" rel="noopener noreferrer"
                            style={{ display: "inline-flex", alignItems: "center", marginTop: 12, background: "#8B2A1F", color: "#F5F0E8", padding: "10px 20px", fontFamily: '"DM Sans",sans-serif', fontSize: 11, letterSpacing: "0.12em", textTransform: "uppercase", textDecoration: "none" }}>
                            Order online →
                          </a>
                        )}
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
