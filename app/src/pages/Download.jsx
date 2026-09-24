import { Apple, Download as DownloadIcon, Monitor, Laptop } from "lucide-react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import DownloadLiquidBackground from "../components/DownloadLiquidBackground";
import "../styles/Download.css";

const platforms = [
  {
    name: "macOS",
    icon: Apple,
    status: "Em preparação",
    description:
      "A versão para macOS está sendo preparada e será disponibilizada em breve.",
    buttonLabel: "Download ainda não disponível",
    primary: true,
    available: false,
  },
  {
    name: "Windows",
    icon: Monitor,
    status: "Em breve",
    description: "A versão para Windows estará disponível em breve.",
    buttonLabel: "Em breve",
    primary: false,
    available: false,
  },
  {
    name: "Linux",
    icon: Laptop,
    status: "Planejado",
    description: "Também estamos planejando suporte para Linux.",
    buttonLabel: "Em breve",
    primary: false,
    available: false,
  },
];

function Download() {
  return (
    <>
      <Navbar />

      <main className="download-page" id="conteudo-principal" tabIndex="-1">
        <div aria-hidden="true">
          <DownloadLiquidBackground />
        </div>

        <section className="download-hero">
          <div className="download-overlay" aria-hidden="true" />

          <div className="download-content">
            <span className="download-eyebrow">Plataforma</span>

            <h1 className="download-title" tabIndex="-1">
              <span>See2Sound</span> para sua plataforma
            </h1>

            <p className="download-subtitle">
              Acompanhe a disponibilidade do aplicativo em cada sistema operacional.
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
                        <Icon size={28} aria-hidden="true" />
                      </div>

                      <div>
                        <h2>{platform.name}</h2>
                        <span>{platform.status}</span>
                      </div>
                    </div>

                    <p className="download-card-description">
                      {platform.description}
                    </p>

                    <button
                      type="button"
                      className="download-card-button is-disabled"
                      disabled={!platform.available}
                    >
                      <DownloadIcon size={18} aria-hidden="true" />
                      {platform.buttonLabel}
                    </button>
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
