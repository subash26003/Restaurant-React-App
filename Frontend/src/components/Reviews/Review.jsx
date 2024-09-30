import React,{useEffect, useState} from 'react';
import Slider from 'react-slick';
import './review.css'
import { MdRateReview } from "react-icons/md";

const Review = () => {
  const [activeIndex, setActiveIndex] = useState(0); // State to track the active slide index
  const [visibleLimit , setVisibleLimit] = useState(3)

  useEffect(() =>{
    if(window.innerWidth < 458){
      setVisibleLimit(1)
    }else if(window.innerWidth < 880){
      setVisibleLimit(2)
    }else{
      setVisibleLimit(3)
    }
    const handleResize = () =>{
      if(window.innerWidth < 458){
        setVisibleLimit(1)
      }else if(window.innerWidth < 880){
        setVisibleLimit(2)
      }else{
        setVisibleLimit(3)
      }
    }
    window.addEventListener('resize' ,handleResize)
  },[])
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: visibleLimit, // Show 3 items at a time
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    centerMode: true, // Center the active slide
    centerPadding: '20px', // Add padding for the centered item
    beforeChange: (current, next) => setActiveIndex(next), // Update the active index on slide change
  };

  return (
    <div className="carousel-container bg-white md:w-8/12 m-auto">
      <Slider {...settings}>
        {[1, 2, 3, 4, 5].map((item, index) => (
          <div key={index} className={`carousel-item ${index === activeIndex ? 'active' : ''}  m-h-32 m-w-64 `}>
              <MdRateReview />
              <p>"Delicious food, excellent service, and a cozy atmosphere. Highly recommend for a great dining experience!"</p>

          </div>
        ))}
      </Slider>
    </div>
  );
};

export default Review;
