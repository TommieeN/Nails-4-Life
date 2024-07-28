import "./Contact.scss";
import { FaInstagram } from "react-icons/fa";
import { FaTiktok } from "react-icons/fa";
import { IoLocationOutline } from "react-icons/io5";
import { BsTelephone } from "react-icons/bs";
import { AiFillGoogleCircle } from "react-icons/ai";
import { days } from "../../constants";
const Contact = () => {
  return (
    <>
      <h2 id="Contact" className="contact-header">
        Contact
      </h2>
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
          <a
            className="contact__button"
            target="_blank"
            href="https://maps.app.goo.gl/yzNNXttg5CTqexHN8"
          >
            Directions
          </a>
        </div>
        <div>
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
        </div>
        <div className="contact__desktop-container">
          <div className="contact__tablet contact__tablet--desktop">
            <h4 className="contact__heading">Phone</h4>
            <p>
              <BsTelephone /> Telephone:{" "}
              <a href="tel: +16043723800">(604) 372-3800</a>
            </p>
            <a className="contact__button" href="tel: +16043723800">
              Call Now
            </a>
          </div>
          <div className="contact__socials-container">
            <h4 className="contact__heading">Follow Us</h4>
            <div className="contact__socials">
              <a
                className="contact__icon"
                target="_blank"
                href="https://www.tiktok.com/@nails4life_surrey"
              >
                <FaTiktok size={28} />
              </a>
              <a
                className="contact__icon"
                target="_blank"
                href="https://www.instagram.com/nails4life_surrey/"
              >
                <FaInstagram size={30} />
              </a>
              <a
                className="contact__icon"
                target="_blank"
                href="https://maps.app.goo.gl/DaZBcQNC2TaXm9to9"
              >
                <AiFillGoogleCircle size={30} />
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;
