import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Residential from "./pages/services/Residential";
import Commercial from "./pages/services/Commercial";
import MoveInOut from "./pages/services/MoveInOut";
import WindowCleaning from "./pages/services/WindowCleaning";
import ContactPage from "./pages/ContactPage"; // NEW
import "./App.css";

function App() {
  return (
    <div className="app">
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/services/residential" element={<Residential />} />
        <Route path="/services/commercial" element={<Commercial />} />
        <Route path="/services/move" element={<MoveInOut />} />
        <Route path="/services/windows" element={<WindowCleaning />} />
        <Route path="/contact" element={<ContactPage />} /> {/* NEW */}
      </Routes>

      <Footer />
    </div>
  );
}

export default App;
