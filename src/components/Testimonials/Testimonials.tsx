import React, { useEffect, useState } from "react";
import axios from "axios";
import ReviewCard from "../ReviewCard/ReviewCard";
import "./Testimonials.scss";
import { motion } from "framer-motion";

// const api = import.meta.env.VITE_API_URL;
const api = "http://localhost:3000/place-details";

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

  const fadeInVariant = {
    hidden: { opacity: 0, y: 50 }, 
    visible: {
      opacity: 1, 
      y: 0, 
      transition: {
        duration: 0.5, 
        ease: "easeInOut", 
      },
    },
  };

  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.2, 
      },
    },
  };

  return (
    <section className="testimonials">
      <motion.h2
        className="testimonials__heading"
        id="Reviews"
        variants={fadeInVariant}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        Hear from Our Guests
      </motion.h2>
      <motion.div
        className="testimonials__container"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false, amount: 0.1 }} 
      >
        <div className="testimonials__reviews">
          {reviews.map((review: ReviewType, index) => (
            <motion.div
              key={index}
              variants={fadeInVariant} 
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="testimonials__card-container"
            >
              <ReviewCard review={review} />
            </motion.div>
          ))}
        </div>
        {reviews.length > 0 && (
          <a
            rel="noopener noreferrer"
            target="_blank"
            href="https://www.google.com/maps/place/?q=place_id:ChIJM2bsWtfPhVQRwL2W4qtTxJ8"
            className="testimonials__button"
          >
            MORE REVIEWS
          </a>
        )}
      </motion.div>
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
