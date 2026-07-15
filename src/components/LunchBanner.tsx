export default function LunchBanner() {
  return (
    <div style={{ background: "#8B2A1F", padding: "12px 24px", display: "flex", alignItems: "center", justifyContent: "space-between", gap: 12, flexWrap: "wrap" }}>
      <p style={{ fontFamily: '"DM Sans",sans-serif', fontSize: 11, letterSpacing: "0.15em", textTransform: "uppercase", color: "#F5F0E8", margin: 0 }}>
        Lunch special &middot; Mon&ndash;Thu 11am&ndash;4pm &middot; Any pita, laffa or plate with fries, salad bar &amp; a drink
      </p>
      <a href="https://order.toasttab.com/online/ahuvasgrill" target="_blank" rel="noopener noreferrer"
        style={{ fontFamily: '"DM Sans",sans-serif', fontSize: 10, letterSpacing: "0.15em", textTransform: "uppercase", color: "rgba(245,240,232,0.6)", textDecoration: "none", borderBottom: "1px solid rgba(245,240,232,0.3)", paddingBottom: 1, whiteSpace: "nowrap" }}>
        Order now →
      </a>
    </div>
  );
}
