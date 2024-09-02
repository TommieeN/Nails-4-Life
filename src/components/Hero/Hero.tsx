import "./Hero.scss";
import hero from "../../assets/nail-assets/bg-hero.jpeg";
import { motion } from "framer-motion";

const container = {
  hidden: { opacity: 1, scale: 0 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      delayChildren: 0.3,
      staggerChildren: 0.2,
    },
  },
};

const item = {
  hidden: { y: -150, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
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
        <motion.div
          className="hero__text-container"
          variants={container}
          initial="hidden"
          animate="visible"
        >
          <motion.h1 className="hero__header" variants={item}>
            <span className="hero__header--polish">Polish</span> Your Look,
            <br /> <span className="hero__header--style">Perfect</span> Your
            Style!
          </motion.h1>
        </motion.div>
        <motion.div
          className="hero__button"
          variants={container}
          initial="hidden"
          animate="visible"
        >
          <motion.a
            className="hero__button-primary"
            target="_blank"
            href="https://www.dashbooking.com/salon/nails-4-life"
            variants={item}
          >
            BOOK AN APPOINTMENT!
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
