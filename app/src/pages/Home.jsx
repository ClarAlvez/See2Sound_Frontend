import Navbar from "../components/NavBar";
import HeroSection from "../components/HeroSection";
import AboutSection from "../components/AboutSection";
import HowItWorksSection from "../components/HowItWorksSection";
import WhyUseSection from "../components/WhyUseSection";
import Footer from "../components/Footer";


function Home() {
  return (
    <main className="home-page">
      <Navbar />
      <HeroSection />
      <AboutSection />
      <HowItWorksSection />
      <WhyUseSection />
      <Footer />
    </main>
  );
}

export default Home;