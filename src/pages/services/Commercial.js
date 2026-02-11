export default function Commercial() {
  return (
    <section className="service-page luxury">
      <h1>Commercial Cleaning</h1>

      <p style={{ marginTop: "20px", fontSize: "16px", lineHeight: "1.7" }}>
        Professional, reliable cleaning solutions designed specifically for
        small businesses and professional spaces.
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
        Commercial Cleaning Image (Coming Soon)
      </div>

      <h2>What This Service Is</h2>
      <p>
        Our Commercial Cleaning service is designed for small businesses that want
        a clean, welcoming, and professional environment without the complexity
        of large-scale contracts.
      </p>

      <p>
        We work around your schedule to minimize disruption and provide
        consistent, detail-focused cleaning that supports your staff, clients,
        and brand image.
      </p>

      <h2>What’s Included</h2>
      <ul style={{ marginTop: "20px", lineHeight: "1.9" }}>
        <li>Dusting and sanitizing desks and surfaces</li>
        <li>Restroom cleaning and sanitizing</li>
        <li>Breakroom or kitchenette cleaning</li>
        <li>Floor care (vacuuming and mopping)</li>
        <li>Trash removal</li>
        <li>High-touch surface disinfecting</li>
      </ul>

      <h2 style={{ marginTop: "40px" }}>Optional Add-Ons</h2>
      <ul style={{ marginTop: "20px", lineHeight: "1.9" }}>
        <li>After-hours or weekend cleaning</li>
        <li>Customized cleaning schedules</li>
        <li>Interior window cleaning</li>
      </ul>

      <button className="luxury-btn">
        Request a Commercial Cleaning Quote
      </button>
    </section>
  );
}
