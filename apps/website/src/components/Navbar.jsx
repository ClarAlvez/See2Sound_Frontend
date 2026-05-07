import { Link } from "react-router-dom";
import AccessibilityDropdown from "./AccessibilityDropdown";
import logo from "../assets/logo.png";
import "../styles/Navbar.css";

function Navbar() {
  return (
    <header className="navbar">
      <Link to="/" className="navbar-logo">
        <img src={logo} alt="Logo do See2Sound" className="logo-image" />
        <span>See2Sound</span>
      </Link>

      <nav className="navbar-links">
        <AccessibilityDropdown />

        <Link to="/download" className="navbar-link purple-link">
          Plataforma
        </Link>
      </nav>
    </header>
  );
}

export default Navbar;