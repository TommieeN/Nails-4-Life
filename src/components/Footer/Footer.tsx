import "./Footer.scss";
import { FaInstagram, FaGoogle, FaTiktok } from "react-icons/fa";
import { motion } from "framer-motion";
import { containerVariants, fadeInVariant } from "../../animations/animations";

const Footer = () => {
  return (
    <motion.footer
      id="Contact"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      variants={containerVariants}
    >
      <motion.div className="contact" variants={fadeInVariant}>
        <div className="contact__info">
          <motion.div className="contact__hours-container" variants={fadeInVariant}>
            <h4 className="contact__heading">Hours:</h4>
            <p className="contact__hours">
              Monday-Friday 10AM-7:00PM, Saturday 10AM-6:00PM, Sunday 11AM-5PM
            </p>
          </motion.div>
        </div>

        <div className="contact__info">
          <motion.div className="contact__wrapper" variants={fadeInVariant}>
            <h4 className="contact__heading">Address:</h4>
            <p className="contact__address-text">
              <a
                rel="noopener noreferrer"
                target="_blank"
                href="https://maps.app.goo.gl/yzNNXttg5CTqexHN8"
              >
                15325 56 Ave #104, Surrey, BC
              </a>
            </p>
          </motion.div>
        </div>

        <div className="contact__info">
          <motion.div className="contact__phone-container" variants={fadeInVariant}>
            <h4 className="contact__heading">Phone:</h4>
            <p className="contact__phone">
              <a href="tel: +16043723800">(604) 372-3800</a>
            </p>
          </motion.div>
        </div>

        <div className="contact__info">
          <motion.div className="contact__socials" variants={fadeInVariant}>
            <a
              className="contact__icon"
              rel="noopener noreferrer"
              target="_blank"
              href="https://www.tiktok.com/@nails4life_surrey"
            >
              <FaTiktok className="contact__tiktok-icon" />
            </a>
            <a
              className="contact__icon"
              target="_blank"
              href="https://www.instagram.com/nails4life_surrey/"
            >
              <FaInstagram className="contact__instagram-icon" />
            </a>
            <a
              className="contact__icon"
              rel="noopener noreferrer"
              target="_blank"
              href="https://maps.app.goo.gl/DaZBcQNC2TaXm9to9"
            >
              <FaGoogle className="contact__google-icon" />
            </a>
          </motion.div>
        </div>
      </motion.div>
      <motion.p className="contact-footer" variants={fadeInVariant}>
        © All rights reserved. 2024 Nails 4 Life
      </motion.p>
    </motion.footer>
  );
};

export default Footer;