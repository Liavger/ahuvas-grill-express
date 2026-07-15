"use client";
import { motion } from "framer-motion";

export type ReviewItem = {
  author: string;
  authorPhoto?: string;
  rating: number;
  text: string;
  relativeTime?: string;
};

const GoogleG = () => (
  <svg width="16" height="16" viewBox="0 0 48 48" className="ml-auto flex-shrink-0 opacity-70">
    <path fill="#4285F4" d="M44.5 20H24v8.5h11.8C34.7 33.9 29.8 37 24 37c-7.2 0-13-5.8-13-13s5.8-13 13-13c3.1 0 5.9 1.1 8.1 2.9l6.4-6.4C34.6 4.1 29.6 2 24 2 11.8 2 2 11.8 2 24s9.8 22 22 22c11 0 21-8 21-22 0-1.3-.2-2.7-.5-4z"/>
    <path fill="#34A853" d="M6.3 14.7l7 5.1C15 16.1 19.2 13 24 13c3.1 0 5.9 1.1 8.1 2.9l6.4-6.4C34.6 4.1 29.6 2 24 2 16.2 2 9.4 7.3 6.3 14.7z"/>
    <path fill="#FBBC05" d="M24 46c5.5 0 10.5-1.9 14.4-5l-6.7-5.5C29.6 37 26.9 38 24 38c-5.8 0-10.7-3.1-11.8-8.5l-7 5.4C8.1 41.9 15.5 46 24 46z"/>
    <path fill="#EA4335" d="M44.5 20H24v8.5h11.8c-.8 2.6-2.6 4.8-5 6.2l6.7 5.5C41.8 36.4 45 30.7 45 24c0-1.3-.2-2.7-.5-4z"/>
  </svg>
);

const avatarColors = ["#1A73E8", "#34A853", "#EA4335", "#FBBC05", "#9C27B0", "#00897B"];
const colorFor = (name: string) => avatarColors[(name.charCodeAt(0) || 0) % avatarColors.length];

export default function ReviewsList({
  rating,
  reviewCount,
  reviews,
  googleMapsUri,
}: {
  rating: number;
  reviewCount: number;
  reviews: ReviewItem[];
  googleMapsUri: string;
}) {
  return (
    <section className="border-t" style={{ borderColor: "#D4C9B8" }}>
      <div className="max-w-7xl mx-auto px-5 md:px-10 py-16 md:py-24">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.8 }}>
          <p style={{ fontFamily: '"DM Sans",sans-serif', fontSize: 11, letterSpacing: "0.18em", textTransform: "uppercase", color: "#9C8F84", marginBottom: 14 }}>From our guests</p>
          <div style={{ display: "flex", alignItems: "baseline", gap: 10, marginBottom: 32 }}>
            <span style={{ fontFamily: '"Cormorant Garamond",serif', fontSize: 48, color: "#1A1612" }}>{rating.toFixed(1)}</span>
            <span style={{ color: "#FBBC05", fontSize: 20, letterSpacing: 2 }}>★★★★★</span>
            <span style={{ fontFamily: '"DM Sans",sans-serif', fontSize: 13, color: "#9C8F84" }}>{reviewCount} Google reviews</span>
          </div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
          {reviews.slice(0, 6).map((r, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.08 }}
              style={{ background: "#fff", border: "1px solid #E8E0D5", borderRadius: 10, padding: "18px 20px" }}
            >
              <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 12 }}>
                {r.authorPhoto ? (
                  // eslint-disable-next-line @next/next/no-img-element
                  <img src={r.authorPhoto} alt="" width={36} height={36} style={{ borderRadius: "50%", flexShrink: 0 }} />
                ) : (
                  <div style={{ width: 36, height: 36, borderRadius: "50%", background: colorFor(r.author), display: "flex", alignItems: "center", justifyContent: "center", fontFamily: '"DM Sans",sans-serif', fontWeight: 600, fontSize: 14, color: "#fff", flexShrink: 0 }}>
                    {r.author[0]}
                  </div>
                )}
                <div>
                  <p style={{ fontFamily: '"DM Sans",sans-serif', fontSize: 14, fontWeight: 500, color: "#1A1612", marginBottom: 2 }}>{r.author}</p>
                  <span style={{ color: "#FBBC05", fontSize: 12 }}>{"★".repeat(r.rating)}</span>
                </div>
                <GoogleG />
              </div>
              <p style={{ fontFamily: '"DM Sans",sans-serif', fontSize: 13, color: "#5A5044", lineHeight: 1.65 }}>&ldquo;{r.text}&rdquo;</p>
              {r.relativeTime && (
                <p style={{ fontFamily: '"DM Sans",sans-serif', fontSize: 11, color: "#9C8F84", marginTop: 8 }}>{r.relativeTime}</p>
              )}
            </motion.div>
          ))}
        </div>

        <div className="text-center mt-8">
          <a href={googleMapsUri || "https://www.google.com/search?q=ahuvas+grill+express+lawrence+ny+reviews"} target="_blank" rel="noopener noreferrer"
            style={{ fontFamily: '"DM Sans",sans-serif', fontSize: 12, letterSpacing: "0.1em", textTransform: "uppercase", color: "#8B2A1F", textDecoration: "none", borderBottom: "1px solid #8B2A1F", paddingBottom: 2 }}>
            View all reviews on Google →
          </a>
        </div>
      </div>
    </section>
  );
}
