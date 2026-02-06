import { useState } from "react";
import Hero from "./components/Hero";
import Services from "./components/Services";
import "./App.css";

function App() {
  const [darkMode, setDarkMode] = useState(false);

  return (
    <div className={darkMode ? "app dark" : "app"}>
      <header className="top-bar">
        <h1 className="brand">Stonic Cleaning Services</h1>

        <button
          className="mode-toggle"
          onClick={() => setDarkMode(!darkMode)}
        >
          {darkMode ? "Light Mode" : "Dark Mode"}
        </button>
      </header>

      <Hero darkMode={darkMode} />
      <Services />
    </div>
  );
}

export default App;
