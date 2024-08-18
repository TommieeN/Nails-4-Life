import React, { useEffect, useState } from "react";
import axios from "axios";
import "./Testemonials.scss";

type ReviewType = {
  author: string;
  profile_photo_url: string;
  rating: number;
  text: string;
  time: string;
};

const Testemonials: React.FC = () => {
  const [reviews, setReviews] = useState<ReviewType[]>([]);

  const api = "http://localhost:3000/place-details";

  const getReviews = () => {
    axios
      .get(`${api}`)
      .then((response) => {
        console.log(response.data);
        setReviews(response.data);
      })
      .catch((error) => {
        console.log("error", error);
      });
  };

  useEffect(() => {
    getReviews();
  }, []);

  return (
    <section className="carousel-tablet-container">
      <h2 id="Reviews" className="carousel-tablet-container__heading">
        Reviews
      </h2>
      {reviews.map((review: ReviewType) => (
        <div key={review.author}>
          <img src={review.profile_photo_url} alt="profile picture" />
          <p>{review.author}</p>
          <p>{review.rating}</p>
          <p>{review.text}</p>
          <p>{review.time}</p>
        </div>
      ))}
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
