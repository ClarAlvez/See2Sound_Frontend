import Navbar from "../components/Navbar";
import HeroSection from "../components/HeroSection";
import AboutSection from "../components/AboutSection";
import HowItWorksSection from "../components/HowItWorksSection";
import WhyUseSection from "../components/WhyUseSection";
import Footer from "../components/Footer";


function Home() {
  return (
    <>
      <Navbar />
      <main className="home-page" id="conteudo-principal" tabIndex="-1">
        <HeroSection />
        <AboutSection />
        <HowItWorksSection />
        <WhyUseSection />
      </main>
      <Footer />
    </>
  );
}

export default Home;
