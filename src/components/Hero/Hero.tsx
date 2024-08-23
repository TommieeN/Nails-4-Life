import "./Hero.scss";
import hero from "../../assets/nail-assets/hero-nail-salon.webp";
const Hero = () => {
  return (
    <section className="hero" id="Home">
      <img
        className="hero-banner"
        src={hero}
        alt="Picture of the brand new nail salon with all new products and pedicure chairs"
      />
      <div className="hero-desktop-container">
        <div className="hero-tablet-text">
          <h1 className="hero-header">Nails 4 Life</h1>
          <div className="hero-text">
            <p className="hero-desktop-text">Elevate Your Style</p>
            <p className="hero-desktop-text">Enhance Your Beauty</p>
            <a
              target="_blank"
              rel="noopener noreferrer" 
              href="https://maps.app.goo.gl/yzNNXttg5CTqexHN8"
              className="hero-desktop-text"
            >
              Located in Surrey, B.C, 15325 56 Ave #104
            </a>
          </div>
        </div>
        <div className="hero-button">
          <a
            className="hero-button__primary"
            target="_blank"
            href="https://www.dashbooking.com/salon/nails-4-life"
          >
            Book Now!
          </a>
          <a
            className="hero-button__primary"
            target="_blank"
            href="https://www.dashbooking.com/salon/nails-4-life"
          >
            Services
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
