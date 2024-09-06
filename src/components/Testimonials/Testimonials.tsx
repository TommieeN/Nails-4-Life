import React, { useEffect, useState } from "react";
import axios from "axios";
import ReviewCard from "../ReviewCard/ReviewCard";
import "./Testimonials.scss";
import { motion } from "framer-motion";
import { containerVariants, fadeInVariant } from "../../animations/animations";

const api = import.meta.env.VITE_API_URL;

type ReviewType = {
  author: string;
  profile_photo_url: string;
  rating: number;
  text: string;
  time: string;
  google_listing: string;
};

const Testimonials: React.FC = () => {
  const [reviews, setReviews] = useState<ReviewType[]>([]);

  const getReviews = async () => {
    try {
      const response = await axios.get(api);
      setReviews(response.data);
    } catch (error) {
      console.error("Failed to fetch reviews:", error);
    }
  };

  useEffect(() => {
    getReviews();
  }, []);


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
          {reviews.map((review, index) => (
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
      <motion.h2
        id="Gallery"
        className="testimonials__gallery"
        variants={fadeInVariant}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        Gallery
      </motion.h2>
      <motion.div
        className="testimonials__photos"
        variants={fadeInVariant}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        {(React.createElement as any)("behold-widget", {
          "feed-id": "euXvxC7dm501c1MThVhP",
        })}
      </motion.div>
    </section>
  );
};

export default Testimonials;
