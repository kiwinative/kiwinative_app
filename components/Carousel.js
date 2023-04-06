import React, { useState, useEffect, useRef } from "react";
import Image from "next/image";
import { BsChevronRight, BsChevronLeft } from "react-icons/bs";
import { useGlobalContext } from "@/app/Context/store";

const sliderImages = [
  "/slider-img1.png",
  "/slider-img2.png",
  "/slider-img3.png",
];

let count = 0;
const slideLength = sliderImages.length;

const Carousel = () => {
  const { pageWidth, setPageWidth, open, setOpen } = useGlobalContext();
  const [index, setIndex] = useState(0);
  const [curr, setCurr] = useState(0);
  const imageRef = useRef();
  let slideInterval;

  useEffect(() => {
    imageRef.current.addEventListener("animationend", removeAnimation);
    imageRef.current.addEventListener("mouseenter", stopSlide);
    imageRef.current.addEventListener("mouseleave", startSlide);
    startSlide();

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
    console.log(pageWidth);

    imageRef.current.classList.add("fade-animation");
  };

  const handleOnPrevClick = () => {
    count = (index + slideLength - 1) % slideLength;
    setIndex(count);
    console.log(pageWidth, window.innerWidth);

    imageRef.current.classList.add("fade-animation");
  };
  return (
    <div ref={imageRef}>
      <div
        className={`aspect-video bg-darkIndigo h-auto ${
          open ? "w-[80vw]" : "w-[100vw] sm:w-[95vw]"
        } rounded-lg`}
      >
        <img
          src={sliderImages[index]}
          className={`h-[90vh] ${
            open ? "w-[80vw]" : "w-[100vw] sm:w-[93.5vw]"
          } ml-0 sm:ml-2 rounded-lg`}
        ></img>
        {/* <Image src={sliderImages[index]} alt="" height="500" width="1200" /> */}
      </div>

      <div
        className={`absolute ${
          open ? "w-[80vw]" : "w-[100vw] sm:w-[95vw]"
        } top-1/2 transform -translate-y-1/2  px-3 flex justify-between items-center`}
      >
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
