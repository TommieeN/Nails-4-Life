import "./MainSection.scss";

const MainSection = () => {
  return (
    <section className="main" id="Our Story">
      <div className="main__container">
        <div className="main__section">
          <h2 className="main__header">Our Story</h2>
          <p className="main__text">
            Welcome to Nails 4 Life, where beauty meets comfort. Under new
            management, we've undergone fresh renovations to create a modern and
            inviting space for all our clients. Our salon features brand new
            colors and luxurious pedicure chairs, ensuring that every visit is a
            relaxing and enjoyable experience.
          </p>
          <p className="main__text">
            Our mission is to provide top-notch manicures, pedicures, and nail
            designs tailored to each client's unique style and preferences. Our
            team of skilled technicians is dedicated to delivering exceptional
            service in a comfortable and hygienic environment. We pride
            ourselves on using high-quality products that not only beautify your
            nails but also promote their health.
          </p>
          <h3 className="main__subheader">Why Choose Us?</h3>
          <ul className="main__list">
            <li className="main__item">
              <span className="main__item--text">Special Discounts </span>{" "}|
              Groups of 6 or more? Enjoy 20% off! <span className="main__item--italic">(Deposit required in person)</span>
            </li>
            <li className="main__item">
              <span className="main__item--text">Flexible Appointments </span>{" "}|
              Easy booking through our online platform.
            </li>
            <li className="main__item">
              <span className="main__item--text">Personalized Services </span>{" "}|
              Customized treatments to suit your individual needs.
            </li>
            <li className="main__item">
              <span className="main__item--text">Experienced Team </span>{" "}|
              Highly trained professionals dedicated to excellence.
            </li>
          </ul>
          <a
            className="main__button"
            target="_blank"
            rel="noopener noreferrer"
            href="https://www.dashbooking.com/salon/nails-4-life"
          >
            Book Your Appointment
          </a>
        </div>
      </div>
    </section>
  );
};

export default MainSection;
