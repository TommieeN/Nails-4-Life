import "./Hero.scss";
import hero from "../../assets/nail-assets/bg-hero.jpeg";
import { motion } from "framer-motion";
import { headerVariant, buttonVariant } from "../../animations/animations";

const Hero: React.FC = () => {
  return (
    <section className="hero" id="Home">
      <img
        className="hero__banner"
        src={hero}
        alt="Picture of a cart filled with nail supplies"
      />
      <div className="hero__container">
        <motion.div
          className="hero__text-container"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={headerVariant}
        >
          <motion.h1 className="hero__header">
            <span className="hero__header--polish">Polish</span> Your Look,
            <br /> <span className="hero__header--style">Perfect</span> Your
            Style!
          </motion.h1>
        </motion.div>
        <motion.div
          className="hero__button"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={buttonVariant}
        >
          <motion.a
            className="hero__button-primary"
            target="_blank"
            href="https://www.dashbooking.com/salon/nails-4-life"
            rel="noopener noreferrer"
          >
            BOOK AN APPOINTMENT!
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
