import "./Hero.scss";
import hero from "../../assets/nail-assets/bg-hero.jpeg";
import { motion } from "framer-motion";

const h1Variant = {
  hidden: { y: -150, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.6,
      ease: "easeInOut",
    },
  },
};

const buttonVariant = {
  hidden: { y: 50, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.5,
      delay: 0.3, 
      ease: "easeInOut",
    },
  },
};

const Hero = () => {
  return (
    <section className="hero" id="Home">
      <img
        className="hero__banner"
        src={hero}
        alt="Picture of a cart filled with nail supplies"
      />
      <div className="hero__container">
        {/* Animate the h1 separately */}
        <motion.div
          className="hero__text-container"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={h1Variant}
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
          >
            BOOK AN APPOINTMENT!
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
