import Contact from "../../components/Contact/Contact";
import Footer from "../../components/Footer/Footer";
import Hero from "../../components/Hero/Hero";
import MainSection from "../../components/MainSection/MainSection";
import NavBar from "../../components/NavBar/NavBar";
import Testemonials from "../../components/Testemonials/Testemonials";
import "./HomePage.scss";

const HomePage = () => {
  return (
    <main>
      <NavBar />
      <Hero />
      <MainSection />
      <Testemonials />
      <Contact />
      <Footer />
    </main>
  );
};

export default HomePage;
