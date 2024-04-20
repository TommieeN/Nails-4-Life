import ImageCarousel from "../ImageCarousel/ImageCarousel";
import "./Testemonials.scss";
const Testemonials = () => {
  return (
    <section className="carousel-tablet-container">
      <h2 className="carousel-tablet-container__heading">Gallery</h2>
      <ImageCarousel />
      <div className='sk-ww-google-reviews' data-embed-id='25400597'></div>
    </section>
  );
};

export default Testemonials;
