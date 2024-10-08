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
          <motion.div
            className="contact__hours-container"
            variants={fadeInVariant}
          >
            <h3 className="contact__heading">Hours:</h3>
            <p className="contact__hours">
              Monday-Friday 10AM-7PM, Saturday 10AM-6PM, Sunday 11AM-5PM
            </p>
          </motion.div>
        </div>
        <div className="contact__info">
          <motion.div className="contact__wrapper" variants={fadeInVariant}>
            <h3 className="contact__heading">Address:</h3>
            <address className="contact__address-text">
              <a
                rel="noopener noreferrer"
                target="_blank"
                href="https://maps.app.goo.gl/yzNNXttg5CTqexHN8"
                aria-label="Directions to salon address"
              >
                15325 56 Ave #104, Surrey, BC
              </a>
            </address>
          </motion.div>
        </div>
        <div className="contact__info">
          <motion.div
            className="contact__phone-container"
            variants={fadeInVariant}
          >
            <h3 className="contact__heading">Phone:</h3>
            <p className="contact__phone">
              <a href="tel: +16043723800" aria-label="call salon number">
                (604) 372-3800
              </a>
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
              aria-label="Visit our tiktok"
            >
              <FaTiktok className="contact__tiktok-icon" />
            </a>
            <a
              className="contact__icon"
              target="_blank"
              href="https://www.instagram.com/nails4life_surrey/"
              aria-label="Visit our Instagram"
            >
              <FaInstagram className="contact__instagram-icon" />
            </a>
            <a
              className="contact__icon"
              rel="noopener noreferrer"
              target="_blank"
              href="https://maps.app.goo.gl/DaZBcQNC2TaXm9to9"
              aria-label="Visit our Google page!"
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
