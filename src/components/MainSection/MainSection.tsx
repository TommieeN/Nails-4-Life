import "./MainSection.scss";
import NailImage from "../../assets/nail-assets/nail-art.jpg";
import WaxImage from "../../assets/nail-assets/wax-image.jpeg";
const MainSection = () => {
  return (
    <>
      <section className="main" id="About Us">
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
            pedicures, and nail designs. Relax in our comfortable
            environment and treat yourself to beautiful nails that make a
            statement. Book your appointment today or call us!
          </p>
        </div>
      </section>
      <section className="main">
        <img
          className="main-image"
          src={WaxImage}
          alt="woman with posing with her back turned with no shirt with flowers in her back pocket and hands in the air"
        />
        <div className="main-container">
          <h2 className="main-container__header">Waxing</h2>
          <p className="main-container__text">
            Discover smooth, radiant skin with our expert waxing services. From
            brows to legs, we use gentle techniques and quality products for
            lasting results. Experience comfort and hygiene at Nails 4 Life. Say
            hello to silky skin today!
          </p>
        </div>
      </section>
    </>
  );
};

export default MainSection;
