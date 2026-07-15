export default function Footer() {
  return (
    <footer style={{ background: "#1A1612", padding: "40px 24px" }}>
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between gap-6">
        <div>
          <p style={{ fontFamily: '"DM Sans",sans-serif', fontSize: 11, letterSpacing: "0.2em", textTransform: "uppercase", color: "#F5F0E8", marginBottom: 8 }}>Ahuva&rsquo;s Grill Express</p>
          <p style={{ fontFamily: '"DM Sans",sans-serif', fontSize: 12, color: "#6B5F54", lineHeight: 1.8 }}>
            480 Rockaway Tpke, Lawrence, NY 11559<br />
            (516) 239-0110 &middot; Sun&ndash;Thu 11am&ndash;11pm
          </p>
        </div>
        <div style={{ display: "flex", flexWrap: "wrap", gap: 16, alignItems: "center" }}>
          {[
            { label: "Catering", href: "#catering" },
            { label: "About", href: "#about" },
            { label: "FAQ", href: "#faq" },
            { label: "Instagram", href: "https://instagram.com/ahuvasgrill" },
            { label: "Order online", href: "https://order.toasttab.com/online/ahuvasgrill" },
          ].map((l) => (
            <a key={l.label} href={l.href}
              style={{ fontFamily: '"DM Sans",sans-serif', fontSize: 12, letterSpacing: "0.12em", color: "#6B5F54", textDecoration: "none" }}>
              {l.label}
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}
