import AboutBottomImage from "@/components/about-section/about-bottom-image/AboutBottomImage";
import AboutSection from "@/components/about-section/AboutSection";
import ContactUs from "@/components/contact-us/ContactUs";
import Footer from "@/components/footer/Footer";
import Header from "@/components/header/Header";
import HeroSection from "@/components/hero-section/HeroSection";
import Portfolio from "@/components/portfolio/Portfolio";
import Services from "@/components/services-section/Services";
import Testimonials from "@/components/testimonials/Testimonials";

export default function Home() {
  return (
    <>
      <Header/>
      <HeroSection/>
      <AboutSection/>
      <AboutBottomImage/>
      <Portfolio/>
      <Services/>
      <Testimonials/>
      <ContactUs/>
      <Footer/>
    </>
  );
}