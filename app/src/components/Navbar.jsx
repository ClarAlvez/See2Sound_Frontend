import { useEffect, useRef, useState } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";
import AccessibilityDropdown from "./AccessibilityDropdown";
import logo from "../assets/logo.png";
import "../styles/NavBar.css";

const sectionLinks = [
  { to: "/", label: "Início" },
  { to: "/#sobre", label: "Sobre" },
  { to: "/#como-funciona", label: "Como funciona" },
  { to: "/#por-que-usar", label: "Benefícios" },
];

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const menuButtonRef = useRef(null);
  const location = useLocation();

  useEffect(() => {
    function handleKeyDown(event) {
      if (event.key === "Escape" && isMenuOpen) {
        setIsMenuOpen(false);
        menuButtonRef.current?.focus();
      }
    }

    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, [isMenuOpen]);

  return (
    <>
      <a className="skip-link" href="#conteudo-principal">
        Pular para o conteúdo principal
      </a>

      <header className="navbar">
        <Link
          to="/"
          className="navbar-logo"
          aria-label="See2Sound — página inicial"
          onClick={() => setIsMenuOpen(false)}
        >
          <img src={logo} alt="" className="logo-image" aria-hidden="true" />
          <span>See2Sound</span>
        </Link>

        <button
          ref={menuButtonRef}
          type="button"
          className="mobile-menu-button"
          aria-expanded={isMenuOpen}
          aria-controls="menu-principal"
          aria-label={isMenuOpen ? "Fechar menu principal" : "Abrir menu principal"}
          onClick={() => setIsMenuOpen((current) => !current)}
        >
          {isMenuOpen ? <X aria-hidden="true" /> : <Menu aria-hidden="true" />}
        </button>

        <nav
          id="menu-principal"
          className={`navbar-links ${isMenuOpen ? "is-open" : ""}`}
          aria-label="Navegação principal"
        >
          {sectionLinks.map((item) => (
            <Link
              key={item.to}
              to={item.to}
              className="navbar-link"
              onClick={() => setIsMenuOpen(false)}
              aria-current={
                location.pathname === "/" &&
                `${location.pathname}${location.hash}` === item.to
                  ? "page"
                  : undefined
              }
            >
              {item.label}
            </Link>
          ))}

          <NavLink
            to="/download"
            onClick={() => setIsMenuOpen(false)}
            className={({ isActive }) =>
              `navbar-link purple-link${isActive ? " is-active" : ""}`
            }
          >
            Plataforma
          </NavLink>

          <AccessibilityDropdown />
        </nav>
      </header>
    </>
  );
}

export default Navbar;
