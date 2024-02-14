import Footer from "../../components/Footer/Footer";
import Hero from "../../components/Hero/Hero";
import MainSection from "../../components/MainSection/MainSection";
import Testemonials from "../../components/Testemonials/Testemonials";
import "./HomePage.scss";

const HomePage = () => {
  return (
    <main>
      <Hero />
      <MainSection />
      <Testemonials />
      <Footer />
    </main>
  )
}

export default HomePage