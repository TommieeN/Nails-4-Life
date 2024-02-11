import "./MainSection.scss";
import NailImage from "../../assets/nail-assets/nail-art.jpg";
import WaxImage from "../../assets/nail-assets/wax-image.jpeg";
const MainSection = () => {
  return (
    <>
      <section className="main">
        <img
          className="main-image"
          src={NailImage}
          alt="hand posing on carpet with nails done"
        />
        <div className="main-container">
          <h2 className="main-container__header">Nails</h2>
          <p className="main-container__text">
            Indulge in the ultimate nail care experience at Nails 4 Life. Our
            skilled technicians offer a range of services including manicures,
            pedicures, and nail enhancements. Relax in our comfortable
            environment and treat yourself to beautiful nails that make a
            statement. Book your appointment today!
          </p>
          <button className="main-container__button">Learn More</button>
        </div>
      </section>
      <section className="main">
        <img
          className="main-image"
          src={WaxImage}
          alt="woman with posing with her back turned with no shirt with flowers in her back pocket and hands in the air"
        />
        <div className="main-container">
          <h2 className="main-container__header">Nails</h2>
          <p className="main-container__text">
            Indulge in the ultimate nail care experience at Nails 4 Life. Our
            skilled technicians offer a range of services including manicures,
            pedicures, and nail enhancements. Relax in our comfortable
            environment and treat yourself to beautiful nails that make a
            statement. Book your appointment today!
          </p>
          <button className="main-container__button">Learn More</button>
        </div>
      </section>
    </>
  );
};

export default MainSection;
