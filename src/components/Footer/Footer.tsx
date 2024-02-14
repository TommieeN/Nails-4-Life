import "./Footer.scss";
import { FaInstagram } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { FaTiktok } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="footer">
      <div>
        <h4 className="footer__heading">ADDRESS</h4>
        <p className="footer__text">15325 56 Ave #104, Surrey, BC</p>
      </div>
      <div>
        <h4 className="footer__heading">OPERATING HOURS</h4>
        <p className="footer__text"> Monday - Friday: 10:00AM - 7:00PM</p>
        <p className="footer__text"> Sunday: 11:00AM - 5:00PM</p>
        <p className="footer__text"> Saturday: 10:00AM - 6:00PM</p>
      </div>
      <div>
        <h4 className="footer__heading">CONTACT</h4>
        <p className="footer__text">E-mail: email@email.com</p>
        <p className="footer__text">Telephone: (604) 372-3800</p>
      </div>
      <div className="footer__socials-container">
        <h4 className="footer__heading">SOCIALS</h4>
        <div className="footer__socials">
          <FaFacebook size={25} color="white" />
          <FaTiktok size={25} color="white" />
          <FaInstagram size={25} color="white" />
        </div>
      </div>
      <div className="footer__trademark">
        <p className="footer__trademark-text">© 2023 ALOE NAILS</p>
        <p className="footer__trademark-text">Made with ♡ by Tommy</p>
      </div>
    </footer>
  );
};

export default Footer;
