import "./Contact.scss";
import { FaInstagram } from "react-icons/fa";
import { FaTiktok } from "react-icons/fa";
import { IoLocationOutline } from "react-icons/io5";
import { BsTelephone } from "react-icons/bs";
import { days } from "../../constants";
const Contact = () => {
  return (
    <div className="contact">
      <div className="contact__tablet">
        <h4 className="contact__heading">Address</h4>
        <p>
          <IoLocationOutline size={20} />
          <a target="_blank" href="https://maps.app.goo.gl/yzNNXttg5CTqexHN8">
            15325 56 Ave #104, Surrey, BC
          </a>
        </p>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d2612.0182633133295!2d-122.8008506!3d49.1052935!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x5485cfd75aec6633%3A0x9fc453abe296bdc0!2sNails%204%20Life%20(%20under%20new%20management)!5e0!3m2!1sen!2sca!4v1713377388318!5m2!1sen!2sca"
          width="290"
          height="300"
          loading="lazy"
        ></iframe>
        <p className="contact__button">
          <a target="_blank" href="https://maps.app.goo.gl/yzNNXttg5CTqexHN8">
            Directions
          </a>
        </p>
      </div>
      <div className="contact__tablet">
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
      <div className="contact__tablet contact__tablet--desktop">
        <h4 className="contact__heading">Contact</h4>
        <p>
          <BsTelephone /> Telephone:{" "}
          <a href="tel: +16043723800">(604) 372-3800</a>
        </p>
        <p className="contact__button">
          <a href="tel: +16043723800">Call Now</a>
        </p>
      </div>
      <div className="contact__socials-container">
        <h4 className="contact__heading">SOCIALS</h4>
        <div className="contact__socials">
          <a target="_blank" href="https://www.tiktok.com/@nails4life_surrey"><FaTiktok size={25} /></a>
          <a target="_blank" href="https://www.instagram.com/nails4life_surrey/"><FaInstagram size={25} /></a>
        </div>
      </div>
    </div>
  );
};

export default Contact;
