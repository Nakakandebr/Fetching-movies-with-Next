"use client"

import React, { useState } from "react";
import { IoIosArrowBack, IoIosArrowForward, IoMdStar } from "react-icons/io";
import { images } from "./jason";

const SliderCarousel = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const PreviousImage = () => {
    const newImageIndex = (currentImageIndex - 1 + images.length) % images.length;
    setCurrentImageIndex(newImageIndex);
  };

  const NextImage = () => {
    const newImageIndex = (currentImageIndex + 1) % images.length;
    setCurrentImageIndex(newImageIndex);
  };




  return (
    <>
      <div className="carousel">
        <div className="carouselInner" style={{ height: "100vh", overflow: "hidden" }}>
          <img src={images[currentImageIndex].img} alt={images[currentImageIndex].title} className="carousel-image" style={{ width: "100%", height: "100%", objectFit: "cover" }} />
          <div className="left absolute top-1/2 transform -translate-y-1/2 left-4">
            <IoIosArrowBack className="left-icon text-white text-4xl" onClick={PreviousImage} />
          </div>

          <div className="center flex flex-col ml-20 justify-center text-white h-full">
          
          </div>

          <div className="right absolute top-1/2 transform -translate-y-1/2 right-4">
            <IoIosArrowForward className="right-icon text-white text-4xl" onClick={NextImage} />
          </div>
        </div>
      </div>
    </>
  );
};

export default SliderCarousel;
