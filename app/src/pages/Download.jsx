import { Apple, Download as DownloadIcon, Monitor, Laptop } from "lucide-react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import DownloadLiquidBackground from "../components/DownloadLiquidBackground";
import "../styles/Download.css";

const platforms = [
  {
    name: "macOS",
    icon: Apple,
    status: "Disponível agora",
    description:
      "Baixe a versão para macOS e comece a experimentar o See2Sound.",
    buttonLabel: "Download para macOS",
    primary: true,
    href: "#",
  },
  {
    name: "Windows",
    icon: Monitor,
    status: "Em breve",
    description: "A versão para Windows estará disponível em breve.",
    buttonLabel: "Em breve",
    primary: false,
    href: "#",
  },
  {
    name: "Linux",
    icon: Laptop,
    status: "Planejado",
    description: "Também estamos planejando suporte para Linux.",
    buttonLabel: "Em breve",
    primary: false,
    href: "#",
  },
];

function Download() {
  return (
    <>
      <Navbar />

      <main className="download-page">
        <DownloadLiquidBackground />

        <section className="download-hero">
          <div className="download-overlay" />

          <div className="download-content">
            <span className="download-eyebrow">Plataforma</span>

            <h1 className="download-title">
              Baixe o <span>See2Sound</span> e transforme imagem em som
            </h1>

            <p className="download-subtitle">
              Escolha sua plataforma e acesse uma experiência mais acessível,
              inteligente e inclusiva.
            </p>

            <div className="download-cards">
              {platforms.map((platform) => {
                const Icon = platform.icon;

                return (
                  <article
                    className={`download-card ${
                      platform.primary ? "download-card-primary" : ""
                    }`}
                    key={platform.name}
                  >
                    <div className="download-card-header">
                      <div className="download-card-icon">
                        <Icon size={28} />
                      </div>

                      <div>
                        <h2>{platform.name}</h2>
                        <span>{platform.status}</span>
                      </div>
                    </div>

                    <p className="download-card-description">
                      {platform.description}
                    </p>

                    <a
                      href={platform.href}
                      className={`download-card-button ${
                        platform.primary ? "is-primary" : "is-disabled"
                      }`}
                    >
                      <DownloadIcon size={18} />
                      {platform.buttonLabel}
                    </a>
                  </article>
                );
              })}
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}

export default Download;