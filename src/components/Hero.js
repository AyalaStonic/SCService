import blueLogo from "../assets/light_mode.png";
import greenLogo from "../assets/dark_mode.png";

function Hero({ darkMode }) {
  return (
    <section className="hero">
      <img
        src={darkMode ? greenLogo : blueLogo}
        alt="Stonic Cleaning Services Logo"
        className="logo"
      />

      <h2>Luxury Cleaning, Done Right</h2>
      <p>Detail-focused. Trusted. Premium service for homes & businesses.</p>

      <button className="cta">Get a Quote</button>
    </section>
  );
}

export default Hero;
