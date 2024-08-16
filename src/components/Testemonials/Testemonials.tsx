import React, { useEffect, useState } from "react";
import axios from "axios"
import "./Testemonials.scss";


const Testemonials = () => {
  const [reviews, setReviews] = useState([])

  const api = "http://localhost:3000"

  const getReviews = () => {
    axios.get(`${api}`).then((response) => {
      console.log(response.data)
      setReviews(response.data)
    })
    .catch((error) => {
      console.log("error", error);
    })
  }

  useEffect(() => {
    getReviews()
  },[])

  return (
    <section className="carousel-tablet-container">
      <h2 id="Reviews" className="carousel-tablet-container__heading">
        Reviews
      </h2>
      {}
      <h2 id="Gallery" className="carousel-tablet-container__gallery">
        Gallery
      </h2>
      <div className="carousel-tablet-container__photos">
        {(React.createElement as any)("behold-widget", {
          "feed-id": "euXvxC7dm501c1MThVhP",
        })}
      </div>
    </section>
  );
};

export default Testemonials;
