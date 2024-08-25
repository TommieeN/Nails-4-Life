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
            Nails 4 Life
          </motion.h1>
          <div className="hero__info-container">
            <motion.p className="hero__text" variants={item}>
              Open 7 days a week
            </motion.p>
            <motion.p className="hero__text" variants={item}>
              Senior 10% Discount Every Day
            </motion.p>
          </div>
        </div>
        <div className="hero__button">
          <a
            className="hero__button-primary"
            target="_blank"
            href="https://www.dashbooking.com/salon/nails-4-life"
          >
            Book Now!
          </a>
          <a
            className="hero__button-primary"
            target="_blank"
            href="https://www.dashbooking.com/salon/nails-4-life"
          >
            Services
          </a>
        </div>
      </div>
    </motion.section>
  );
};

export default Hero;
