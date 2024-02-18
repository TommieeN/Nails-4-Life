import { motion, useMotionValue } from "framer-motion";
import { images } from "../../constants/index";
import "./ImageCarousel.scss";
import { useEffect, useState } from "react";

const SPRING_OPTIONS = {
  type: "spring",
  mass: 3,
  stiffness: 400,
  damping: 50,
};

const DRAG_BUFFER = 50;
const ONE_SECOND = 1000;
const AUTO_DELAY = ONE_SECOND * 5;

const ImageCarousel = () => {
  const [imgIndex, setImgIndex] = useState(0);
  const dragX = useMotionValue(0);

//  drag function for carousel
  const onDragEnd = () => {
    const x = dragX.get();

    if (x <= -DRAG_BUFFER && imgIndex < images.length - 1) {
      setImgIndex((pv) => pv + 1);
    } else if (x >= DRAG_BUFFER && imgIndex > 0) {
      setImgIndex((pv) => pv - 1);
    }
  };

  useEffect(() => {

    // function to rotate through the carousel images automatically
    const intervalRef = setInterval(() => {
      const x = dragX.get();

      if (x === 0) {
        setImgIndex((pv) => {
          if (pv === images.length - 1) {
            return 0;
          }
          return pv + 1;
        });
      }
    }, AUTO_DELAY);

    return () => clearInterval(intervalRef);
  }, []);

  return (
    <div className="carousel-container">
      <motion.div
        className="carousel-container__image-container"
        drag="x"
        dragConstraints={{
          left: 0,
          right: 0,
        }}
        style={{
          x: dragX,
        }}
        animate={{
          translateX: `-${imgIndex * 100}%`,
        }}
        transition={SPRING_OPTIONS}
        onDragEnd={onDragEnd}
      >
        {images.map((imgSrc, index) => {
          return (
            <motion.img
              key={index}
              src={imgSrc}
              className="carousel-container__image"
              animate={{
                scale: imgIndex === index ? 1 : 0.85,
              }}
              transition={SPRING_OPTIONS}
              id="Gallery"
            />
          );
        })}
      </motion.div>
      <div className="carousel-container__dots-container">
        {images.map((_, index) => {
          return (
            <button
              key={index}
              onClick={() => setImgIndex(index)}
              className={`carousel-container__dots ${
                index === imgIndex ? "active" : ""
              }`}
            />
          );
        })}
      </div>
    </div>
  );
};

export default ImageCarousel;
