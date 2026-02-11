import { useNavigate } from "react-router-dom";

export default function Services() {
  const navigate = useNavigate();

  return (
    <section className="services" id="services">

      <h2 className="services-title">Our Signature Services</h2>
      <p className="services-subtitle">
        Professional cleaning solutions tailored for homes and businesses.
      </p>

      <div className="service-cards">
        <div className="service-card" onClick={() => navigate("/services/residential")}>
          <h3>Residential Cleaning</h3>
          <p>Quality home cleaning with attention to detail.</p>
        </div>

        <div className="service-card" onClick={() => navigate("/services/commercial")}>
          <h3>Commercial Cleaning</h3>
          <p>Professional cleaning for offices and small businesses.</p>
        </div>

        <div className="service-card" onClick={() => navigate("/services/move")}>
          <h3>Move In / Move Out</h3>
          <p>Deep cleaning to prepare your space for its next chapter.</p>
        </div>

        
      </div>
    </section>
  );
}
