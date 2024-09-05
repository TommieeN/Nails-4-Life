import "./Footer.scss";
import { FaInstagram } from "react-icons/fa";
import { FaGoogle } from "react-icons/fa";
import { FaTiktok } from "react-icons/fa";

const Footer = () => {
  return (
    <footer id="Contact">
      <div className="contact">
        <div className="contact__info">
          <div className="contact__hours-container">
            <h4 className="contact__heading">Hours:</h4>
            <p className="contact__hours">
              Monday - Friday 10AM-7:00PM, Saturday 10AM-6:00PM, Sunday 11AM-5PM
            </p>
          </div>
        </div>
        <div className="contact__info">
          <div className="contact__wrapper">
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
          </div>
        </div>
        <div className="contact__info">
          <div className="contact__phone-container">
            <h4 className="contact__heading">Phone:</h4>
            <p className="contact__phone">
              <a href="tel: +16043723800">(604) 372-3800</a>
            </p>
          </div>
        </div>
        <div className="contact__info">
          <div className="contact__socials">
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
          </div>
        </div>
      </div>
      <p className="contact-footer">© All rights reserved. 2024 Nails 4 Life</p>
    </footer>
  );
};

export default Footer;
