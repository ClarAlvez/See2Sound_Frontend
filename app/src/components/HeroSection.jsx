import { Link } from "react-router-dom";
import { ChevronDown } from "lucide-react";
import { lazy } from "react";
import DecorativeEffect from "./DecorativeEffect";
import "../styles/HeroSection.css";
const LineWaves = lazy(() => import("./LineWaves"));

function HeroSection() {
  function scrollToAbout() {
    const aboutSection = document.getElementById("sobre");

    if (aboutSection) {
      aboutSection.scrollIntoView({
      behavior: window.matchMedia("(prefers-reduced-motion: reduce)").matches || document.body.classList.contains("reduce-motion")
        ? "auto"
        : "smooth",
        block: "start",
      });
      aboutSection.focus({ preventScroll: true });
    }
  }

  return (
    <section className="hero-section" aria-labelledby="titulo-principal">
      <div className="hero-line-waves" aria-hidden="true">
        <DecorativeEffect><LineWaves
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
        /></DecorativeEffect>
      </div>

      <div className="hero-content">
        <h1 className="hero-title" id="titulo-principal" tabIndex="-1">
          <span className="hero-line">Transformando o que você vê em</span>
          <span className="hero-line">algo que todos podem ouvir.</span>
        </h1>

        <p className="hero-subtitle">
          Sistema de geração automática de audiodescrição contextualizada para
          conteúdos audiovisuais utilizando inteligência artificial.
        </p>

        <Link className="hero-button" to="/download">
          Conheça as plataformas
        </Link>
      </div>

      <button
        className="hero-scroll-indicator"
        onClick={scrollToAbout}
        aria-label="Ir para a próxima seção"
      >
        <span>Role para explorar</span>
        <ChevronDown size={34} strokeWidth={2.4} aria-hidden="true" />
      </button>
    </section>
  );
}

export default HeroSection;
