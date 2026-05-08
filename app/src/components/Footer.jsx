import { Mail, ExternalLink } from "lucide-react";
import { FaGithub, FaInstagram, FaGoogle } from "react-icons/fa";
import logo from "../assets/logo.png";
import "../styles/Footer.css";

const emails = [
  "clara_assuntos@outlook.com",
  "joaovccussolim@gmail.com",
  "see2sound@gmail.com",
];

const githubLinks = [
  {
    label: "Clara Alves",
    url: "https://github.com/ClarAlvez",
  },
  {
    label: "João Cussolim",
    url: "https://github.com/JoaoCussolim",
  },
];

const instagramLinks = [
  {
    label: "@cadzz_yt",
    url: "https://instagram.com/cadzz_yt",
  },
  {
    label: "@jaocussolim",
    url: "https://instagram.com/jaocussolim",
  },
];

function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="footer-glow" />

      <div className="footer-container">
        <div className="footer-brand">
          <div className="footer-logo-row">
            <img src={logo} alt="Logo do See2Sound" className="footer-logo" />
            <span>See2Sound</span>
          </div>

          <p>
            Acreditamos que todos devem ter acesso às mesmas histórias. O See2Sound usa tecnologia para transformar imagens em som e tornar o mundo mais acessível.
          </p>
        </div>

        <div className="footer-content">
          <section className="footer-column">
            <div className="footer-column-title">
              <FaGoogle size={20} />
              <h3>Contato</h3>
            </div>

            <ul>
              {emails.map((email) => (
                <li key={email}>
                  <a href={`mailto:${email}`}>
                    {email}
                    <Mail size={13} />
                  </a>
                </li>
              ))}
            </ul>
          </section>

          <section className="footer-column">
            <div className="footer-column-title">
              <FaGithub size={22} />
              <h3>GitHub</h3>
            </div>

            <ul>
              {githubLinks.map((link) => (
                <li key={link.url}>
                  <a href={link.url} target="_blank" rel="noreferrer">
                    {link.label}
                    <ExternalLink size={13} />
                  </a>
                </li>
              ))}
            </ul>
          </section>

          <section className="footer-column">
            <div className="footer-column-title">
              <FaInstagram size={22} />
              <h3>Instagram</h3>
            </div>

            <ul>
              {instagramLinks.map((link) => (
                <li key={link.url}>
                  <a href={link.url} target="_blank" rel="noreferrer">
                    {link.label}
                    <ExternalLink size={13} />
                  </a>
                </li>
              ))}
            </ul>
          </section>
        </div>
      </div>

      <div className="footer-bottom">
        <p>© {currentYear} See2Sound. Todos os direitos reservados.</p>
      </div>
    </footer>
  );
}

export default Footer;