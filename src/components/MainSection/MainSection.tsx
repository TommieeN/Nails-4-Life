import "./MainSection.scss";
import { motion } from "framer-motion";
import { services } from "../../constants";

const container = {
  hidden: { opacity: 0, scale: 0 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      delayChildren: 0.3,
      staggerChildren: 0.2,
    },
  },
};

const cardVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.4,
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
      delay: 0.9,
      ease: "easeInOut",
    },
  },
};

const MainSection = () => {
  return (
    <section className="main" id="About Us">
      <div className="main__container">
        <div className="main__section">
          <motion.h2
            className="main__header"
            variants={cardVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            Ultimate Relaxation
          </motion.h2>
          <motion.ul
            className="main__list"
            variants={container}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {services.map((service, index) => (
              <motion.li
                key={index}
                className="main__item"
                variants={cardVariants}
                viewport={{ once: true }}
              >
                <span className="main__item--text">{service.text}</span> |{" "}
                {service.description}{" "}
                {service.italic && (
                  <span className="main__item--italic">{service.italic}</span>
                )}
              </motion.li>
            ))}
          </motion.ul>
          <motion.a
            className="main__button"
            target="_blank"
            rel="noopener noreferrer"
            href="https://www.dashbooking.com/salon/nails-4-life"
            variants={buttonVariant}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            BOOK AN APPOINTMENT
          </motion.a>
        </div>
      </div>
    </section>
  );
};

export default MainSection;
