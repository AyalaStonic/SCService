export default function Residential() {
  return (
    <section className="service-page luxury">
      <h1>Residential Cleaning</h1>

      <p style={{ marginTop: "20px", fontSize: "16px", lineHeight: "1.7" }}>
        Reliable, detail-oriented cleaning designed to keep your home consistently
        fresh, comfortable, and welcoming.
      </p>

      {/* IMAGE PLACEHOLDER */}
      <div
        style={{
          margin: "40px 0",
          height: "260px",
          borderRadius: "14px",
          background: "#f1f5f9",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          color: "#94a3b8",
          fontWeight: "600",
        }}
      >
        Residential Cleaning Image (Coming Soon)
      </div>

      <h2>What This Service Is</h2>
      <p>
        Our Residential Cleaning service is ideal for homeowners who want ongoing
        care without stress. Whether you need weekly, bi-weekly, or monthly visits,
        we tailor every cleaning to your home, lifestyle, and preferences.
      </p>

      <p>
        We focus on consistency, attention to detail, and peace of mind — so your
        home always feels clean, organized, and ready to enjoy.
      </p>

      <h2>What’s Included</h2>
      <ul style={{ marginTop: "20px", lineHeight: "1.9" }}>
        <li>Dusting of surfaces, furniture, and décor</li>
        <li>Kitchen cleaning (counters, sinks, and exterior appliances)</li>
        <li>Bathroom cleaning and sanitizing</li>
        <li>Floors vacuumed and mopped</li>
        <li>Trash removal and general tidying</li>
      </ul>

      <h2 style={{ marginTop: "40px" }}>Optional Add-Ons</h2>
      <ul style={{ marginTop: "20px", lineHeight: "1.9" }}>
        <li>Deep clean rotation for high-use areas</li>
        <li>Laundry folding or light organization</li>
        <li>Bed linen changing</li>
        <li>Interior window cleaning</li>
      </ul>

      <button className="luxury-btn">
        Request a Residential Cleaning Quote
      </button>
    </section>
  );
}
