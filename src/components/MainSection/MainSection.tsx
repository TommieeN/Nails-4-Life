import "./MainSection.scss";
import NailImage from "../../assets/nail-assets/bg-hero-glass.jpg";
const MainSection = () => {
  return (
      <section className="main" id="About Us">
        <div className="main__container">
          <img
            className="main__image"
            src={NailImage}
            alt="hand posing on carpet with nails done"
          />
          <div className="main__section">
            <h2 className="main__header">About Us<span className="main__header--about">.</span></h2>
            <p className="main__text">
              Under new management with fresh renovations, including brand new
              colors and luxurious pedicure chairs, Nails 4 Life offers an even better
              experience. Our skilled technicians provide top-notch manicures, pedicures,
              and nail designs in a comfortable environment. Plus, seniors enjoy a 10% discount
              every day. Treat yourself to beautiful nails that make a statement and book your
              appointment today!
            </p>
            <a
              target="_blank"
              rel="noopener noreferrer" 
              href="https://www.dashbooking.com/salon/nails-4-life"
            >
              <button className="main__button">Services</button>
            </a>
          </div>
        </div>
      </section>
  );
};

export default MainSection;
