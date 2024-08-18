import { useState } from "react";
import "./ReviewCard.scss";

type ReviewCardProps = {
  review: {
    author: string;
    profile_photo_url: string;
    rating: number;
    text: string;
    time: string;
  };
};

const ReviewCard: React.FC<ReviewCardProps> = ({ review }) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const toggleExpansion = () => setIsExpanded(!isExpanded);

  const truncatedText =
    review.text.length > 150 ? `${review.text.slice(0, 150)}...` : review.text;

  return (
    <div className="testimonials__card">
      <div className="testimonials__text-container">
        <div className="testimonials__star-rating">
          {[...Array(review.rating)].map((_, index) => (
            <span key={index} className="testemonials__star">
              &#9733;
            </span>
          ))}
        </div>
        <p className="testimonials__text">
          {isExpanded ? review.text : truncatedText}
          {review.text.length > 150 && (
            <span className="testimonials__toggle" onClick={toggleExpansion}>
              {isExpanded ? " Show Less" : " Read More"}
            </span>
          )}
        </p>
      </div>
      <div className="testimonials__profile">
        <img
          className="testimonials__avatar"
          src={review.profile_photo_url}
          alt="author-profile-picture"
        />
        <div className="testimonials__author-info">
          <p className="testimonials__author">{review.author}</p>
          <p className="testimonials__time">{review.time}</p>
        </div>
      </div>
    </div>
  );
};

export default ReviewCard;
