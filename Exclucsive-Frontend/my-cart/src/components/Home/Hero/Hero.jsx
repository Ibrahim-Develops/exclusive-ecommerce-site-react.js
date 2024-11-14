import React from 'react';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { IoChevronForward } from "react-icons/io5";
import HeroPic from './HeroPic.png'; // Replace with your actual image path
import { Link } from 'react-router-dom'; // Import Link for navigation

const Hero = () => {
  var settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: true,
    customPaging: (i) => (
      <button className="custom-dot"></button>
    ),
  };

  const slides = [
    { id: 1, image: HeroPic, link: '/details/11' },
    { id: 2, image: HeroPic, link: '/details/11' },
    { id: 3, image: HeroPic, link: '/details/11' },
    { id: 4, image: HeroPic, link: '/details/11' },
    { id: 5, image: HeroPic, link: '/details/11' },
    { id: 6, image: HeroPic, link: '/details/11' },
  ];

  return (
    <div className="flex">
      <aside className="flex flex-col font-semibold justify-between ps-28 pe-10 pt-10 border-r-2 gap-2 w-[21%]">
        <span className="flex justify-between items-center cursor-pointer">Women's Fashion <IoChevronForward /></span>
        <span className="flex justify-between items-center cursor-pointer">Men's Fashion <IoChevronForward /></span>
        <span className="flex justify-between items-center cursor-pointer">Electronics</span>
        <span className="flex justify-between items-center cursor-pointer">Home & Lifestyle</span>
        <span className='cursor-pointer'>Medicine</span>
        <span className='cursor-pointer'>Sports & Outdoor</span>
        <span className='cursor-pointer'>Baby's & Toys</span>
        <span className='cursor-pointer'>Groceries & Pets</span>
        <span className='cursor-pointer'>Health & Beauty</span>
      </aside>

      <div className="w-[71%] ps-10 pt-10">
        <Slider {...settings}>
          {slides.map(slide => (
            <div key={slide.id} className="slider-item relative">
              <img src={slide.image} alt={`Hero ${slide.id}`} />
              <Link to={slide.link}>
                <button className='font-semibold pb-2 border-b-[2px] border-white absolute bottom-16 left-20 text-white hover:scale-105'>
                  Shop Now
                </button>
              </Link>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default Hero;
