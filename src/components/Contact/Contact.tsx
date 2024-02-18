import "./Contact.scss";
import { FaInstagram } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { FaTiktok } from "react-icons/fa";
import { IoLocationOutline } from "react-icons/io5";
import { BsTelephone } from "react-icons/bs";
import { days } from "../../constants";
const Contact = () => {
  return (
    <div className="contact">
      <div>
        <h4 className="contact__heading">Address</h4>
        <p>
          <IoLocationOutline size={20} />
          <a target="_blank" href="https://maps.app.goo.gl/yzNNXttg5CTqexHN8">
            15325 56 Ave #104, Surrey, BC
          </a>
        </p>
        <a
          className="contact__button"
          target="_blank"
          href="https://maps.app.goo.gl/yzNNXttg5CTqexHN8"
        >
          Directions
        </a>
      </div>
        <div>
          <h4 className="contact__heading">Business Hours</h4>
          <div className="contact__hours">
            {days.map((day, index) => (
              <div key={index} className="contact__container">
                <p className="contact__text">{day.name}:</p>
                <p className="contact__time">{day.hours}</p>
              </div>
            ))}
          </div>
        </div>
      <div>
        <h4 className="contact__heading">Contact</h4>
        <p>
          <BsTelephone /> Telephone:{" "}
          <a href="tel: +16043723800">(604) 372-3800</a>
        </p>
        <button className="contact__button-button">
          <a href="tel: +16043723800">Call Now</a>
        </button>
      </div>
      <div className="contact__socials-container">
        <h4 className="contact__heading">SOCIALS</h4>
        <div className="contact__socials">
          <FaFacebook size={25} />
          <FaTiktok size={25} />
          <FaInstagram size={25} />
        </div>
      </div>
    </div>
  );
};

export default Contact;
