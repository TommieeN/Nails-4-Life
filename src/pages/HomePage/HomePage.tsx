import Contact from "../../components/Contact/Contact";
import Footer from "../../components/Footer/Footer";
import Hero from "../../components/Hero/Hero";
import MainSection from "../../components/MainSection/MainSection";
import NavBar from "../../components/NavBar/NavBar";
import Testimonials from "../../components/Testimonials/Testimonials";
import "./HomePage.scss";

const HomePage = () => {
  return (
    <main>
      <NavBar />
      <Hero />
      <MainSection />
      <Testimonials />
      <Contact />
      <Footer />
    </main>
  );
};

export default HomePage;
