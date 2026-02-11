export default function MoveInOut() {
  return (
    <section className="service-page">
      <h1>Move In / Move Out Cleaning & Packing</h1>

      <p style={{ marginTop: "20px", fontSize: "16px", lineHeight: "1.7" }}>
        A detailed and organized service designed to make your move smoother
        and less stressful — whether you're leaving a space or settling into a new one.
      </p>

      {/* IMAGE PLACEHOLDER */}
      <div
        style={{
          margin: "40px 0",
          height: "260px",
          borderRadius: "18px",
          background: "linear-gradient(135deg, #f1f5f9, #e2e8f0)",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          color: "#64748b",
          fontWeight: "600",
          letterSpacing: "0.5px"
        }}
      >
        Move In / Move Out Image (Coming Soon)
      </div>

      <h2>What This Service Includes</h2>

      <ul style={{ marginTop: "20px", lineHeight: "1.9" }}>
        <li>Complete move-in or move-out deep cleaning</li>
        <li>Kitchen and bathroom detailed sanitation</li>
        <li>Floors vacuumed and professionally mopped</li>
        <li>Baseboards, doors, and trim wiped down</li>
        <li>Interior surfaces cleaned and disinfected</li>
      </ul>

      <h2 style={{ marginTop: "40px" }}>Optional Packing Services</h2>

      <ul style={{ marginTop: "20px", lineHeight: "1.9" }}>
        <li>Careful and organized packing of belongings</li>
        <li>Clear labeling of boxes for easier unpacking</li>
        <li>Interior window cleaning</li>
        <li>Extra attention to high-traffic or neglected areas</li>
      </ul>

      <button
        className="luxury-btn"
        style={{ marginTop: "40px" }}
        onClick={() => {
          window.location.href = "/contact";
        }}
      >
        Schedule a Walkthrough
      </button>
    </section>
  );
}
