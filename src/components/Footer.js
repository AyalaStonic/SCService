import darkLogo from "../assets/dark_mode.png";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-left">
          <img
            src={darkLogo}
            alt="Stonic Cleaning"
            className="footer-logo"
          />
        </div>

        <div className="footer-right">
          <p>
            Email:{" "}
            <a href="mailto:ayaladuvan876@gmail.com">
              ayaladuvan876@gmail.com
            </a>
          </p>
          <p>
            Phone:{" "}
            <a href="tel:+14072524449">
              (407) 252-4449
            </a>
          </p>
        </div>
      </div>

      <div className="footer-bottom">
        © 2026 Stonic Cleaning Services. All rights reserved.
      </div>
    </footer>
  );
}

export default Footer;
