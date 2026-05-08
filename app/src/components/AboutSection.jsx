import RevealOnScroll from "./RevealOnScroll";
import "../styles/AboutSection.css";

function AboutSection() {
  return (
    <section className="about-section" id="sobre">

      <div className="about-container">
        <RevealOnScroll direction="up">
          <span className="about-eyebrow">Sobre o projeto</span>
        </RevealOnScroll>

        <RevealOnScroll direction="up" delay={120}>
          <h2 className="about-title">Sobre Nós</h2>
        </RevealOnScroll>

        <RevealOnScroll direction="up" delay={220}>
          <p className="about-text">
            O See2Sound é uma aplicação inovadora que utiliza inteligência
            artificial para criar audiodescrições contextuais de conteúdos
            audiovisuais. Nosso objetivo é tornar vídeos, filmes e outros meios
            visuais mais acessíveis para pessoas com deficiência visual,
            permitindo que elas também possam compreender histórias através do som.
          </p>
        </RevealOnScroll>
      </div>
    </section>
  );
}

export default AboutSection;