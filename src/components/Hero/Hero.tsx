import "./Hero.scss";
import hero from "../../assets/nail-assets/hero-nail-img.jpg";
const Hero = () => {
  return (
    <section className="hero">
      <img
        className="hero-banner"
        src={hero}
        alt="Young woman with white nail polish posing for a photo with hand on shoulder"
      />
      <h1 className="hero-header">Nails 4 Life</h1>
      <div className="hero-text">
        <p>Elevate Your Style</p>
        <p>Enhance Your Beauty</p>
      </div>
      <div className="hero-button">
        <button className="hero-button__primary">Book Now!</button>
        <button className="hero-button__primary hero-button__primary-services">
          Learn More
        </button>
      </div>
    </section>
  );
};

export default Hero;
