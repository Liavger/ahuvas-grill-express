"use client";

import { motion } from "framer-motion";

const items = [
  {
    title: "Glatt kosher",
    body: "Certified by the Vaad Hakashrus of the Five Towns & Far Rockaway.",
  },
  {
    title: "Carved daily",
    body: "Never frozen, never premade. Sliced to order, every shift.",
  },
  {
    title: "Homemade salads",
    body: "A full salad bar, made fresh in-house every morning.",
  },
  {
    title: "Family owned",
    body: "Run by the same family since day one in the Five Towns.",
  },
];

export default function WhyChoose() {
  return (
    <section className="px-6 md:px-10 py-16 md:py-20 max-w-6xl mx-auto">
      <p className="font-body text-xs font-semibold tracking-[0.1em] text-brick mb-2.5">
        WHY CHOOSE AHUVA&rsquo;S
      </p>
      <p className="font-display font-black text-2xl md:text-[30px] text-charcoal mb-9 max-w-xl leading-tight">
        Not a trend. Fifteen years of doing it the same way, every day.
      </p>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-3.5">
        {items.map((item, i) => (
          <motion.div
            key={item.title}
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.5, delay: i * 0.08 }}
            className="bg-cream-card border border-border-warm rounded-[10px] p-5 hover:-translate-y-1 hover:border-brick transition-all"
          >
            <p className="font-display font-black text-sm text-brick mb-1.5">
              {item.title}
            </p>
            <p className="font-body text-xs text-text-muted leading-relaxed">
              {item.body}
            </p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
