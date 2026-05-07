import Navbar from "../components/Navbar";
import HeroSection from "../components/HeroSection";

function Home() {
  return (
    <main className="home-page">
      <Navbar />
      <HeroSection />

      {/* Futuras seções do site */}
      <section className="placeholder-section">
        <h2>Como funciona</h2>
        <p>Essa seção será implementada depois.</p>
      </section>
    </main>
  );
}

export default Home;