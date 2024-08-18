import React, { useEffect, useState } from "react";
import axios from "axios";
import "./Testemonials.scss";
import ReviewCard from "../ReviewCard/ReviewCard";

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
    <section className="testemonials">
      <h2 className="testemonials__heading" id="Reviews">
        Reviews
      </h2>
      <div className="testimonials__reviews">
        {reviews.map((review: ReviewType, index) => (
          <ReviewCard key={index} review={review} />
        ))}
      </div>
      <h2 id="Gallery" className="testemonials__gallery">
        Gallery
      </h2>
      <div className="testemonials__photos">
        {(React.createElement as any)("behold-widget", {
          "feed-id": "euXvxC7dm501c1MThVhP",
        })}
      </div>
    </section>
  );
};

export default Testemonials;