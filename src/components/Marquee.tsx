const ITEMS = [
  "Glatt Kosher",
  "Family Owned",
  "Freshly Carved Daily",
  "Authentic Israeli",
  "Five Towns",
  "Lawrence NY",
  "Since 2010",
  "Vaad Hakashrus Certified",
  "Homemade Salads",
  "Baby Chicken Shawarma",
];

export default function Marquee() {
  // Rendered twice back-to-back so the -50% translateX loop is seamless.
  const doubled = [...ITEMS, ...ITEMS];

  return (
    <div
      style={{
        background: "#1A1612",
        borderTop: "1px solid rgba(245,240,232,0.06)",
        borderBottom: "1px solid rgba(245,240,232,0.06)",
        overflow: "hidden",
        padding: "14px 0",
      }}
    >
      <div
        className="marquee-track"
        style={{ display: "flex", width: "max-content" }}
      >
        {doubled.map((item, i) => (
          <span
            key={i}
            style={{
              fontFamily: '"DM Sans",sans-serif',
              fontSize: 10,
              letterSpacing: "0.22em",
              textTransform: "uppercase",
              color: "rgba(245,240,232,0.45)",
              padding: "0 32px",
              whiteSpace: "nowrap",
              display: "flex",
              alignItems: "center",
              gap: 32,
            }}
          >
            {item}
            <span
              style={{
                width: 4,
                height: 4,
                borderRadius: "50%",
                background: "#C4793A",
                flexShrink: 0,
              }}
            />
          </span>
        ))}
      </div>
    </div>
  );
}
