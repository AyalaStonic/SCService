import { useNavigate } from "react-router-dom";

export default function Services() {
  const navigate = useNavigate();

  return (
    <section className="services luxury">
      <h2>Our Signature Services</h2>

      <div className="service-cards">
        <div className="service-card" onClick={() => navigate("/services/residential")}>
          Residential Cleaning
        </div>

        <div className="service-card" onClick={() => navigate("/services/deep")}>
          Deep Cleaning
        </div>

        <div className="service-card" onClick={() => navigate("/services/commercial")}>
          Commercial Cleaning
        </div>

        <div className="service-card" onClick={() => navigate("/services/move")}>
          Move In / Move Out
        </div>

        <div className="service-card" onClick={() => navigate("/services/windows")}>
          Window Cleaning
        </div>
      </div>
    </section>
  );
}
