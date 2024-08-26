import "./Hero.scss";
import hero from "../../assets/nail-assets/bg-hero-lv.jpg";
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
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
  },
};

const Hero = () => {
  return (
    <motion.section
      className="hero"
      id="Home"
      variants={container}
      initial="hidden"
      animate="visible"
    >
      <motion.img
        className="hero__banner"
        src={hero}
        alt="Picture of the brand new nail salon with all new products and pedicure chairs"
        variants={item}
      />
      <div className="hero__container">
        <div className="hero__text-container">
          <motion.h1 className="hero__header" variants={item}>
          <span className="hero__header--polish">Polish</span> Your Look,<br/> <span className="hero__header--style">Perfect</span> Your Style!
          </motion.h1>
        </div>
        <div className="hero__button">
          <a
            className="hero__button-primary"
            target="_blank"
            href="https://www.dashbooking.com/salon/nails-4-life"
          >
            Book Now!
          </a>
        </div>
      </div>
    </motion.section>
  );
};

export default Hero;
