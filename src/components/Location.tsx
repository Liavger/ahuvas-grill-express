export default function Location() {
  return (
    <section className="border-t" style={{ borderColor: "#D4C9B8" }}>
      <div className="max-w-7xl mx-auto px-5 md:px-16 py-14 md:py-20">
        <div className="flex flex-col md:grid md:gap-14 md:items-start" style={{ gridTemplateColumns: "1fr 2fr" }}>
          <div>
            <p style={{ fontFamily: '"DM Sans",sans-serif', fontSize: 11, letterSpacing: "0.18em", textTransform: "uppercase", color: "#9C8F84", marginBottom: 20 }}>Visit us</p>
            <p style={{ fontFamily: '"DM Sans",sans-serif', fontSize: 14, color: "#2C2520", lineHeight: 1.8 }}>480 Rockaway Tpke<br />Lawrence, NY 11559</p>
            <p style={{ fontFamily: '"DM Sans",sans-serif', fontSize: 14, color: "#6B5F54", lineHeight: 1.8, marginTop: 14 }}>Sun–Thu: 11am–11pm<br />Fri–Sat: Closed</p>
            <a href="tel:5162390110" style={{ fontFamily: '"DM Sans",sans-serif', fontSize: 14, color: "#1A1612", textDecoration: "none", borderBottom: "1px solid #D4C9B8", paddingBottom: 2, marginTop: 14, display: "inline-block" }}>(516) 239-0110</a>
          </div>
          <div className="mt-8 md:mt-0 overflow-hidden" style={{ height: 280, filter: "grayscale(80%) contrast(1.1)" }}>
            <iframe title="Ahuvas Grill Express location"
              src="https://maps.google.com/maps?q=480+Rockaway+Tpke,+Lawrence,+NY+11559&t=&z=15&ie=UTF8&iwloc=&output=embed"
              width="100%" height="100%" style={{ border: 0 }} loading="lazy" referrerPolicy="no-referrer-when-downgrade" />
          </div>
        </div>
      </div>
    </section>
  );
}
