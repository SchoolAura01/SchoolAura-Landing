"use client";
import React from 'react'
import Image from "next/image";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const SchoolsList = () => {
    const logos = [
    "/images/logo/logo1.svg",
    "/images/logo/logo2.svg",
    "/images/logo/logo3.svg",
    "/images/logo/logo4.svg",
    "/images/logo/logo5.svg",
    "/images/logo/logo6.svg",
    "/images/logo/logo7.svg",
    "/images/logo/logo8.svg",
    "/images/logo/logo9.svg",
    "/images/logo/logo10.svg",
    "/images/logo/logo11.svg",
    "/images/logo/logo12.svg",
    "/images/logo/logo13.svg",
    "/images/logo/logo14.svg",
  ];
   const settings = {
    infinite: true,
    slidesToShow: 6,          
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 0,  
    speed: 4000,      
    cssEase: "linear", 
    arrows: false,
    dots: false,
    pauseOnHover: true,

    responsive: [
      {
        breakpoint: 1024,
        settings: { slidesToShow: 5 },
      },
      {
        breakpoint: 768,
        settings: { slidesToShow: 4 },
      },
      {
        breakpoint: 480,
        settings: { slidesToShow: 3 },
      },
    ],
  };
  return (
    <section data-scroll-section>
      <div className=" mx-auto px-6 mt-10 md:mt-20 text-center">

        {/* Heading */}
        <p className="text-md font-medium text-black mb-6">
          Trusted by thousands of schools
        </p>

        {/* Logos */}
        {/* <div className="flex flex-wrap items-center justify-center gap-x-6 gap-y-4 md:gap-x-10 md:gap-y-6">
          {logos.map((logo, index) => (
           <div key={index} className="relative w-8 h-8 md:w-10 md:h-10">
  <Image
    src={logo}
    alt="School Logo"
     fill
    className="object-cover"
  />
</div>
          ))}
        </div> */}
  {/* Swiper */}
  <div className='w-full'>
         <Slider {...settings}>
          {logos.map((logo, index) => (
            <div key={index} className="flex justify-center">
              <div className="relative w-12 h-12 md:w-15 md:h-15">
                <Image
                  src={logo}
                  alt="School Logo"
                  fill
                  className="object-contain"
                />
              </div>
            </div>
          ))}
        </Slider>
        </div>
      </div>
    </section>
  )
}

export default SchoolsList