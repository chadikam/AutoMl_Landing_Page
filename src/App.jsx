import useSmoothScroll from './hooks/useSmoothScroll';
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import TechCarousel from './components/TechCarousel';
import TaglineSection from './sections/TaglineSection';
import StatsSection from './sections/StatsSection';
import ScrollytellingSection from './sections/ScrollytellingSection';
import AlgorithmsSection from './sections/AlgorithmsSection';
import FAQSection from './sections/FAQSection';
import CTASection from './sections/CTASection';
import Footer from './sections/Footer';

export default function App() {
  useSmoothScroll();

  return (
    <>
      <Navbar />
      <HeroSection />
      <TechCarousel />
      <div className="section-sep" />
      <TaglineSection />
      <div className="section-sep" />
      <StatsSection />
      <div className="section-sep" />
      <ScrollytellingSection />
      <div className="section-sep" />
      <AlgorithmsSection />
      <div className="section-sep" />
      <FAQSection />
      <div className="section-sep" />
      <CTASection />
      <div className="section-sep" />
      <Footer />
    </>
  );
}
