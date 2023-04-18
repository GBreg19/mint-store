import React, { useState } from "react";
import books from "../../Images/books.jpg";
import { AiOutlineArrowLeft, AiOutlineArrowRight } from "react-icons/ai";

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
      img: books,
      title: "Mint Store",
      description: "DVD",
    },
    {
      id: 3,
      img: books,
      title: "Mint Store",
      description: "Furniture",
    },
  ]);
  const [slideIndex, setSlideIndex] = useState(0)

  return (
    <div>
      {
        <div className="mt-10 relative">
          <img src={slides[slideIndex].img} />
            <span className="absolute top-2 left-2">
              <h2>{slides[slideIndex].title}</h2>
              <p>{slides[slideIndex].description}</p>
            </span>
          <span className="absolute inset-y-1/2 -translate-y-2/4 w-full px-5 flex justify-between">
            <AiOutlineArrowLeft className="text-4xl cursor-pointer" onClick={() => setSlideIndex(prevState => prevState -= 1)}/>
            <AiOutlineArrowRight className="text-4xl cursor-pointer"  onClick={() => setSlideIndex(prevState => prevState += 1)}/>
          </span>
        </div>
      }
      {/* {slides.map((slide) => {  
        return (
          <div key={slide.id} className="mt-10 relative">
            <img src={slide.img} />
            <span className="absolute inset-y-1/2 -translate-y-2/4 w-full px-5 flex justify-between">
              <AiOutlineArrowLeft className="text-4xl cursor-pointer"/>
              <AiOutlineArrowRight className="text-4xl cursor-pointer"/>
            </span>
            <span className="absolute top-2 left-2">
              <h2>{slide.title}</h2>
              <p>{slide.description}</p>
            </span>
          </div>
        );
      })} */}
    </div>
  );
};

export default Slider;
