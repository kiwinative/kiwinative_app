"use client";
import React, { useState, useEffect, useRef } from "react";
import Image from "next/image";
import { BsChevronRight, BsChevronLeft } from "react-icons/bs";

const sliderImages = [
  "/slider-img1.png",
  "/slider-img2.png",
  "/slider-img3.png",
];

let count = 0;
const slideLength = sliderImages.length;

const Carousel = () => {
  const [index, setIndex] = useState(0);
  const imageRef = useRef();
  let slideInterval;

  useEffect(() => {
    imageRef.current.addEventListener("animationend", removeAnimation);
    imageRef.current.addEventListener("mouseenter", stopSlide);
    imageRef.current.addEventListener("mouseleave", startSlide);
    // startSlide();

    return () => {
      stopSlide();
    };
  }, []);

  const startSlide = () => {
    slideInterval = setInterval(() => {
      handleOnNextClick();
    }, 5000);
  };

  const stopSlide = () => {
    clearInterval(slideInterval);
  };

  const removeAnimation = () => {
    imageRef.current.classList.remove("fade-animation");
  };

  const handleOnNextClick = () => {
    count = (count + 1) % slideLength;
    setIndex(count);

    imageRef.current.classList.add("fade-animation");
  };

  const handleOnPrevClick = () => {
    count = (index + slideLength - 1) % slideLength;
    setIndex(count);

    imageRef.current.classList.add("fade-animation");
  };
  return (
    <div ref={imageRef} className="w-full select-none relative">
      <div className="aspect-w-15 aspect-h-7 h-4/5">
        <Image src={sliderImages[index]} alt="" fill />
      </div>

      <div className="absolute w-full top-1/2 transform -translate-y-1/2  px-3 flex justify-between items-center">
        <button
          className="bg-black text-white p-1 rounded-full bg-opacity-50 cursor-pointer hover:bg-opacity-100 transition "
          onClick={handleOnPrevClick}
        >
          <BsChevronLeft size={30} />
        </button>
        <button
          className="bg-black text-white p-1 rounded-full bg-opacity-50 cursor-pointer hover:bg-opacity-100 transition"
          onClick={handleOnNextClick}
        >
          <BsChevronRight size={30} />
        </button>
      </div>
    </div>
  );
};

export default Carousel;
