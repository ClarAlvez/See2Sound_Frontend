import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function NotFound() {
  return <>
    <Navbar />
    <main id="conteudo-principal" className="not-found" tabIndex="-1">
      <p>Erro 404</p>
      <h1 tabIndex="-1">Página não encontrada</h1>
      <p>O endereço pode ter mudado. Acesse a página inicial para continuar.</p>
      <Link className="hero-button" to="/">Voltar ao início</Link>
    </main>
    <Footer />
  </>;
}
