import { useState } from "react";
import "./ReviewCard.scss";
import { MdVerified } from "react-icons/md";
import { RiStarSFill } from "react-icons/ri";
import { FcGoogle } from "react-icons/fc";
type ReviewCardProps = {
  review: {
    author: string;
    profile_photo_url: string;
    rating: number;
    text: string;
    time: string;
  };
};

const maxTextLength = 90;

const ReviewCard: React.FC<ReviewCardProps> = ({ review }) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const toggleExpansion = () => setIsExpanded(!isExpanded);

  //  Logic for removing the last name letters.(Example. John Doe will now be John D.)
  const author = review.author;
  const spaceIndex = author.lastIndexOf(" ");
  const truncatedAuthor =
    spaceIndex !== -1
      ? `${author.substring(0, spaceIndex)} ${author.charAt(spaceIndex + 1)}.`
      : author;

  const text = review.text;
  const truncatedText =
    text.length > maxTextLength ? `${text.slice(0, maxTextLength)}...` : text;

  return (
    <div className="testimonials__card">
      <div className="testimonials__text-container">
        <div className="testimonials__star-rating">
          {[...Array(review.rating)].map((_, index) => (
            <span key={index} className="testimonials__star">
              <RiStarSFill />
            </span>
          ))}
        </div>
        <p className="testimonials__text">
          {isExpanded ? review.text : truncatedText}
          {review.text.length > maxTextLength && (
            <span className="testimonials__toggle" onClick={toggleExpansion}>
              <br></br>
              {isExpanded ? " Show Less" : " Read More"}
            </span>
          )}
        </p>
      </div>
      <div className="testimonials__profile">
        <div className="testimonials__avatar-container">
          <img
            className="testimonials__avatar"
            src={review.profile_photo_url}
            alt="author-profile-picture"
          />
          <FcGoogle className="testimonials__google-logo" />
        </div>
        <div className="testimonials__author-info">
          <div className="testimonials__author-container">
            <p className="testimonials__author">{truncatedAuthor}</p>
            <MdVerified color="rgb(25, 123, 255)" />
          </div>
          <p className="testimonials__time">{review.time}</p>
        </div>
      </div>
    </div>
  );
};

export default ReviewCard;
