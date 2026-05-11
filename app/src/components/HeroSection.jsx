import { useNavigate } from "react-router-dom";
import { ChevronDown } from "lucide-react";
import LineWaves from "./LineWaves";
import "../styles/HeroSection.css";

function HeroSection() {
  function scrollToAbout() {
    const aboutSection = document.getElementById("sobre");

    if (aboutSection) {
      aboutSection.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  }

    const navigate = useNavigate();
    function handleClick(){
      navigate('/download');
    }

  return (
    <section className="hero-section">
      <div className="hero-line-waves">
        <LineWaves
          speed={0.2}
          innerLineCount={36}
          outerLineCount={22}
          warpIntensity={0.9}
          rotation={-27}
          edgeFadeWidth={0.05}
          colorCycleSpeed={1.1}
          brightness={0.2}
          color1="#8E26CF"
          color2="#5525CE"
          color3="#2500DE"
          enableMouseInteraction={false}
          mouseInfluence={1}
        />
      </div>

      <div className="hero-content">
        <h1 className="hero-title">
          <span className="hero-line">Transformando o que você vê em</span>
          <span className="hero-line">algo que todos podem ouvir.</span>
        </h1>

        <p className="hero-subtitle">
          Sistema de geração automática de audiodescrição contextualizada para
          conteúdos audiovisuais utilizando inteligência artificial.
        </p>

        <button
          className="hero-button"
          onClick={handleClick}
        >
          Experimente o See2Sound
        </button>
      </div>

      <button
        className="hero-scroll-indicator"
        onClick={scrollToAbout}
        aria-label="Ir para a próxima seção"
      >
        <span>Role para explorar</span>
        <ChevronDown size={34} strokeWidth={2.4} />
      </button>
    </section>
  );
}

export default HeroSection;