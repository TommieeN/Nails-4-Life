import React, { useEffect, useState } from "react";
import axios from "axios";
import ReviewCard from "../ReviewCard/ReviewCard";
import "./Testimonials.scss";

type ReviewType = {
  author: string;
  profile_photo_url: string;
  rating: number;
  text: string;
  time: string;
  google_listing: string;
};

const testimonials: React.FC = () => {
  const [reviews, setReviews] = useState<ReviewType[]>([]);

  const api = "http://localhost:3000/place-details";

  const getReviews = () => {
    axios
      .get(`${api}`)
      .then((response) => {
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
    <section className="testimonials">
      <h2 className="testimonials__heading" id="Reviews">
        Hear from Our Guests
      </h2>
      <div className="testimonials__container">
        <div className="testimonials__reviews">
          {reviews.map((review: ReviewType, index) => (
            <ReviewCard key={index} review={review} />
          ))}
        </div>
        {reviews && (
          <a
            rel="noopener noreferrer"
            target="_blank"
            href="https://www.google.com/maps/place/?q=place_id:ChIJM2bsWtfPhVQRwL2W4qtTxJ8"
            className="testimonials__button"
          >
            More Reviews
          </a>
        )}
      </div>
      <h2 id="Gallery" className="testimonials__gallery">
        Gallery
      </h2>
      <div className="testimonials__photos">
        {(React.createElement as any)("behold-widget", {
          "feed-id": "euXvxC7dm501c1MThVhP",
        })}
      </div>
    </section>
  );
};

export default testimonials;
