import ImageCarousel from "../ImageCarousel/ImageCarousel";
import "./Testemonials.scss";
const Testemonials = () => {
  return (
    <section className="carousel-tablet-container">
      <h2 id="Reviews" className="carousel-tablet-container__heading">Reviews</h2>
      <div className='sk-ww-google-reviews' data-embed-id='25400597'></div>
      <h2 className="carousel-tablet-container__gallery">Gallery</h2>
      <behold-widget feed-id="euXvxC7dm501c1MThVhP"></behold-widget>
      {/* <ImageCarousel /> */}
    </section>
  );
};

export default Testemonials;
