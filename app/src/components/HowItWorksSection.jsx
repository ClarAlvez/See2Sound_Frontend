import { Upload, Network, Headphones } from "lucide-react";
import HowItWorksBackground from "./HowItWorksBackground";
import RevealOnScroll from "./RevealOnScroll";
import "../styles/HowItWorksSection.css";
import AboutLiquidBackground from "./AboutLiquidBackground";

const steps = [
  {
    number: "1",
    title: "Envie o arquivo",
    icon: Upload,
    description:
      "Faça o upload do seu vídeo ou mídia audiovisual. O See2Sound analisa o conteúdo enviado para identificar falas, cenas, pausas e elementos visuais importantes.",
  },
  {
    number: "2",
    title: "Geração de Audiodescrição",
    icon: Network,
    description:
      "Nossa inteligência artificial interpreta o vídeo, reconhece personagens, ações e mudanças de cena, criando uma audiodescrição contextualizada sem repetir informações desnecessárias.",
  },
  {
    number: "3",
    title: "Experiência Sonora",
    icon: Headphones,
    description:
      "Receba uma versão mais acessível do conteúdo, com descrições inseridas nos momentos certos, respeitando diálogos, pausas e o ritmo original da obra.",
  },
];

function HowItWorksSection() {
  return (
    <section className="how-it-works-section" id="como-funciona">
      <AboutLiquidBackground />

      <div className="how-it-works-container">
        <div className="how-it-works-header">
          <RevealOnScroll direction="up">
            <span className="how-it-works-eyebrow">Processo</span>
          </RevealOnScroll>

          <RevealOnScroll direction="up" delay={120}>
            <h2 className="how-it-works-title">Como funciona?</h2>
          </RevealOnScroll>

          <RevealOnScroll direction="up" delay={220}>
            <p className="how-it-works-subtitle">
              Transformando imagem em som com inteligência artificial
            </p>
          </RevealOnScroll>
        </div>

        <div className="how-it-works-steps">
          {steps.map((step, index) => {
            const Icon = step.icon;

            return (
              <RevealOnScroll
                key={step.number}
                direction="up"
                delay={index * 140}
              >
                <article className="how-it-works-card">
                  <div className="how-it-works-icon-wrapper">
                    <Icon className="how-it-works-icon" strokeWidth={2.2} />
                  </div>

                  <h3 className="how-it-works-card-title">
                    <span>{step.number}.</span> {step.title}
                  </h3>

                  <p className="how-it-works-card-text">
                    {step.description}
                  </p>
                </article>
              </RevealOnScroll>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default HowItWorksSection;