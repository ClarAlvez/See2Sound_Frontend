import { useState } from "react";

function AccessibilityDropdown() {
  const [isOpen, setIsOpen] = useState(false);

  function toggleHighContrast() {
    document.body.classList.toggle("high-contrast");
  }

  function increaseFontSize() {
    document.body.classList.toggle("large-text");
  }

  function reduceMotion() {
    document.body.classList.toggle("reduce-motion");
  }

  return (
    <div className="accessibility">
      <button
        className="navbar-button"
        onClick={() => setIsOpen(!isOpen)}
        aria-expanded={isOpen}
        aria-haspopup="true"
      >
        Acessibilidade
      </button>

      {isOpen && (
        <div className="accessibility-menu">
          <button onClick={toggleHighContrast}>
            Alto contraste
          </button>

          <button onClick={increaseFontSize}>
            Aumentar texto
          </button>

          <button onClick={reduceMotion}>
            Reduzir animações
          </button>
        </div>
      )}
    </div>
  );
}

export default AccessibilityDropdown;