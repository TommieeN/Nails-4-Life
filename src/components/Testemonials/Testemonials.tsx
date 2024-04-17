import ImageCarousel from "../ImageCarousel/ImageCarousel";
import { testemonials } from "../../constants";
import "./Testemonials.scss";
import { RxAvatar } from "react-icons/rx";
const Testemonials = () => {
  return (
    <>
      <ImageCarousel />
      
      {/* <section className="testemonial">
        {testemonials.map((test, index) => {
          return (
            <div className="testemonial__cards" key={index}>
              <div className="testemonial__user">
                <RxAvatar size={50} />
                <div className="testemonial__name-container">
                  <p className="testemonial__name">{test.name}</p>
                  <p>{test.userName}</p>
                </div>
              </div>
              <div>
                <p>{test.text}</p>
              </div>
            </div>
          );
        })}
      </section> */}
    </>
  );
};

export default Testemonials;
