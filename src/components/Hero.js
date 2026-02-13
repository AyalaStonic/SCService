import { Link } from "react-router-dom";
import blueLogo from "../assets/light_mode.png";
import greenLogo from "../assets/dark_mode.png";

function Hero({ darkMode }) {
  return (
    <section className="hero">
      <div className="hero-left">
        <img
          src={darkMode ? greenLogo : blueLogo}
          alt="Stonic Cleaning Services Logo"
          className="logo"
        />

        <h1>A Clearer Mind Starts with a Cleaner Space.</h1>

        <p>
          Thoughtful and reliable residential and commercial cleaning that brings order,
           comfort, and peace of mind to your space.
          <br /><br />
          We start with a <strong>free on-site walkthrough </strong> 
           to understand your needs and provide a clear, detailed quote - tailored to you.
        </p>

        <Link to="/contact">
          <button className="cta">
            Schedule Your Free Walkthrough
          </button>
        </Link>
      </div>

      <div className="hero-right">
        <div className="image-placeholder">
          <span>Service Images Coming Soon</span>
        </div>
      </div>
    </section>
  );
}

export default Hero;
