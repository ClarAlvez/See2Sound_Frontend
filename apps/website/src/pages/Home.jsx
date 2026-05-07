import Navbar from "../components/Navbar";
import HeroSection from "../components/HeroSection";
import AboutSection from "../components/AboutSection";

function Home() {
  return (
    <main className="home-page">
      <Navbar />
      <HeroSection />
      <AboutSection />
    </main>
  );
}

export default Home;