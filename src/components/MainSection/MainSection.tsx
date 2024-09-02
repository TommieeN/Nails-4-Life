import "./MainSection.scss";
const MainSection = () => {
  return (
    <section className="main" id="About Us">
      <div className="main__container">
        <div className="main__section">
          <h2 className="main__header">About Us</h2>
          <p className="main__text">
            Under new management with fresh renovations, including brand new
            colors and luxurious pedicure chairs, Nails 4 Life offers an even
            better experience. Our skilled technicians provide top-notch
            manicures, pedicures, and nail designs in a comfortable environment.
            Plus, seniors enjoy a 10% discount every day. Treat yourself to
            beautiful nails that make a statement and book your appointment
            today!
          </p>
          <a
            className="main__button"
            target="_blank"
            rel="noopener noreferrer"
            href="https://www.dashbooking.com/salon/nails-4-life"
          >
            Services
          </a>
        </div>
      </div>
    </section>
  );
};

export default MainSection;
