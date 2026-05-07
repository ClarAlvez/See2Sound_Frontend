import AboutLiquidBackground from "./AboutLiquidBackground";
import "../styles/AboutSection.css"


function AboutSection() {
  return (
    <section className="about-section" id="sobre">
      <AboutLiquidBackground />

      <div className="about-container">
        <span className="about-eyebrow">Sobre o projeto</span>

        <h2 className="about-title">Sobre Nós</h2>

        <p className="about-text">
          O See2Sound é uma aplicação inovadora que utiliza inteligência
          artificial para criar audiodescrições contextuais de conteúdos
          audiovisuais. Nosso objetivo é tornar vídeos, filmes e outros meios
          visuais mais acessíveis para pessoas com deficiência visual,
          permitindo que elas também possam compreender histórias através do som.
        </p>
      </div>
    </section>
  );
}

export default AboutSection;