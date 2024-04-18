import "./Hero.scss";
import hero from "../../assets/nail-assets/hero-nail-img.jpg";
const Hero = () => {
  return (
    <section className="hero" id="Home">
      <img
        className="hero-banner"
        src={hero}
        alt="Young woman with white nail polish posing for a photo with hand on shoulder"
      />
      <div className="hero-desktop-container">
        <div className="hero-tablet-text">
          <h1 className="hero-header">Nails 4 Life</h1>
          <div className="hero-text">
            <p className="hero-desktop-text">Elevate Your Style,</p>
            <p className="hero-desktop-text">Enhance Your Beauty</p>
          </div>
        </div>
        <div className="hero-button">
          <a
          className="hero-button__primary"
            target="_blank"
            href="https://www.dashbooking.com/salon/nails-4-life"
          >
            <button className="hero-button__primary">Book Now!</button>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
