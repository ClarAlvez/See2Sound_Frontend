import { Link } from "react-router-dom";
import LineWaves from "./LineWaves";

function HeroSection() {
  return (
    <section className="hero-section">
      <div className="hero-line-waves">
        <div style={{ width: '1080px', height: '1080px', position: 'relative' }}>
            <LineWaves
                speed={0.2}
                innerLineCount={36}
                outerLineCount={36}
                warpIntensity={1.4}
                rotation={-27}
                edgeFadeWidth={0.05}
                colorCycleSpeed={2.9}
                brightness={0.2}
                color1="#8E26CF"
                color2="#5525CE"
                color3="#2500DE"
                enableMouseInteraction
                mouseInfluence={1}
            />
        </div>
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

        <Link to="/download" className="hero-button">
          Experimente o See2Sound
        </Link>
      </div>
    </section>
  );
}

export default HeroSection;