import ImageCarousel from "../ImageCarousel/ImageCarousel";
import { testemonials } from "../../constants";
import "./Testemonials.scss";
import { RxAvatar } from "react-icons/rx";
const Testemonials = () => {
  return (
    <section className="testemonial-container">
      <ImageCarousel />
      {testemonials.map((test, index) => {
        return (
          <div className="testemonial-container__cards" key={index}>
            <div className="testemonial-container__user">
              <RxAvatar size={50} />
              <div className="testemonial-container__name">
                <p>{test.name}</p>
                <p>{test.userName}</p>
              </div>
            </div>
            <div>
              <p>{test.text}</p>
              </div>
          </div>
        );
      })}
    </section>
  );
};

export default Testemonials;
