import React, { useState } from "react";
import books from "../../Images/books.jpg";
import dvd from "../../Images/dvd.jpg";
import furniture from "../../Images/furniture.jpg";
import { AiOutlineArrowLeft, AiOutlineArrowRight } from "react-icons/ai";
import { BsFillCircleFill } from "react-icons/bs";

const Slider = () => {
  const [slides, setSlides] = useState([
    {
      id: 1,
      img: books,
      title: "Mint Store",
      description: "Books",
    },
    {
      id: 2,
      img: dvd,
      title: "Mint Store",
      description: "DVDs",
    },
    {
      id: 3,
      img: furniture,
      title: "Mint Store",
      description: "Furnitures",
    },
  ]);
  const [currentIndex, setCurrentIndex] = useState(0);

  const prevSlide = () => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? slides.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };
  const nextSlide = () => {
    const isLastSlide = currentIndex === slides.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };

  const toSlide = (slideIndex) => {
    setCurrentIndex(slideIndex);
  };

  setTimeout(() => {
    const isLastSlide = currentIndex === slides.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  }, 5000);

  return (
    <div className="max-w-[1400px] h-[700px] w-full py-16 px-4 relative group">
      <div
        style={{ backgroundImage: `url(${slides[currentIndex].img})` }}
        className="w-full h-full bg-center bg-cover duration-500 relative"
      >
        {/* <span className="absolute top-2 left-2 bg-white/20 py-2 px-5 rounded-lg  text-white">
          <h2>{slides[currentIndex].title}</h2>
          <p>{slides[currentIndex].description}</p>
        </span> */}
      </div>
      <div className="hidden group-hover:block absolute top-[50%] translate-x-0 translate-y-[-50%] left-10 rounded-full p-2 bg-black/20 text-white cursor-pointer">
        <AiOutlineArrowLeft size={30} onClick={prevSlide} />
      </div>
      <div className="hidden group-hover:block absolute top-[50%] translate-x-0 translate-y-[-50%] right-10 rounded-full p-2 bg-black/20 text-white cursor-pointer">
        <AiOutlineArrowRight size={30} onClick={nextSlide} />
      </div>
      <div className="flex absolute bottom-20 left-[50%] translate-x-[-50%] w-1/12 justify-between py-2">
        {slides.map((slide, slideIndex) => (
          <div key={slideIndex} className="text-xl cursor-pointer">
            <BsFillCircleFill className={`${currentIndex === slideIndex ? 'text-white/80' : 'text-white/50'}`} onClick={() => toSlide(slideIndex)} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Slider;
