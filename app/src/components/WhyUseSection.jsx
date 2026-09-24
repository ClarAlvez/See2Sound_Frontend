import { EyeOff, CircleDollarSign, Code2 } from "lucide-react";
import RevealOnScroll from "./RevealOnScroll";
import "../styles/WhyUseSection.css";

const reasons = [
  {
    number: "1",
    title: "Valorização da Inclusão",
    icon: EyeOff,
    description:
      "O See2Sound amplia o acesso a conteúdos audiovisuais, permitindo que pessoas com deficiência visual acompanhem cenas, ações e detalhes importantes com mais autonomia.",
  },
  {
    number: "2",
    title: "Sem Custos",
    icon: CircleDollarSign,
    description:
      "A proposta é oferecer uma solução acessível e gratuita, reduzindo barreiras para quem precisa de audiodescrição em vídeos, estudos, entretenimento e produções independentes.",
  },
  {
    number: "3",
    title: "Inovação Tecnológica",
    icon: Code2,
    description:
      "Com inteligência artificial, o See2Sound transforma informações visuais em descrições sonoras contextualizadas, tornando a experiência mais natural, inteligente e inclusiva.",
  },
];

function WhyUseSection() {
  return (
    <section className="why-use-section" id="por-que-usar">

      <div className="why-use-container">
        <div className="why-use-header">
          <RevealOnScroll direction="up">
            <span className="why-use-eyebrow">Benefícios</span>
          </RevealOnScroll>

          <RevealOnScroll direction="up" delay={120}>
            <h2 className="why-use-title">Por que usar?</h2>
          </RevealOnScroll>

          <RevealOnScroll direction="up" delay={220}>
            <p className="why-use-subtitle">
              Tecnologia inovadora que visa a inclusão de pessoas com
              deficiências visuais.
            </p>
          </RevealOnScroll>
        </div>

        <div className="why-use-reasons">
          {reasons.map((reason, index) => {
            const Icon = reason.icon;

            return (
              <RevealOnScroll
                key={reason.number}
                direction="up"
                delay={index * 140}
              >
                <article className="why-use-card">
                  <div className="why-use-icon-wrapper">
                    <Icon className="why-use-icon" strokeWidth={2.2} />
                  </div>

                  <h3 className="why-use-card-title">
                    <span>{reason.number}.</span> {reason.title}
                  </h3>

                  <p className="why-use-card-text">{reason.description}</p>
                </article>
              </RevealOnScroll>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default WhyUseSection;