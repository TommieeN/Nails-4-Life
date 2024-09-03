import "./MainSection.scss";

const MainSection = () => {
  return (
    <section className="main" id="About Us">
      <div className="main__container">
        <div className="main__section">
          <h2 className="main__header">Ultimate Relaxation</h2>
          <ul className="main__list">
            <li className="main__item">
              <span className="main__item--text">Special Discounts </span> |
              Groups of 6 or more? Enjoy 20% off!{" "}
              <span className="main__item--italic">
                (Deposit required in person)
              </span>
            </li>
            <li className="main__item">
              <span className="main__item--text">Personalized Services </span> |
              Customized treatments to suit your individual needs.
            </li>
            <li className="main__item">
              <span className="main__item--text">Experienced Team </span> |
              Highly trained professionals dedicated to excellence.
            </li>
            <li className="main__item">
              <span className="main__item--text">Flexible Appointments </span> |
              Easy booking through our online platform.
            </li>
          </ul>
          <a
            className="main__button"
            target="_blank"
            rel="noopener noreferrer"
            href="https://www.dashbooking.com/salon/nails-4-life"
          >
            BOOK AN APPOINTMENT
          </a>
        </div>
      </div>
    </section>
  );
};

export default MainSection;
