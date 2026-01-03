"use client";
import Image from "next/image";
import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Icon } from "@iconify/react";
const Testimonial = () => {
  const testimonials = [
    {
      name: "Mario M.",
      rating: 4.9,
      text: "I've always loved streetwear, and this brand nails it! The graphic t-shirts and hoodies are not only comfortable but also make a bold statement.",
    },
    {
      name: "Emily R.",
      rating: 4.9,
      text: "I've always loved streetwear, and this brand nails it! The graphic t-shirts and hoodies are not only comfortable but also make a bold statement.",
    },
    {
      name: "Rina S.",
      rating: 4.9,
      text: "I've always loved streetwear, and this brand nails it! The graphic t-shirts and hoodies are not only comfortable but also make a bold statement.",
    },
  ];
const settings = {
  infinite: true,
  autoplay: true,
  autoplaySpeed: 0,
  speed: 4500,
  cssEase: "linear",
  arrows: false,
  dots: false,
  swipeToSlide: true,
  pauseOnHover: false,

  slidesToShow: 2.5,
  slidesToScroll: 1,

  centerMode: true,

  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 1.7,
      },
    },
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 1.5,
      },
    },
    {
      breakpoint: 640,
      settings: {
        slidesToShow: 1.2,
      },
    },
  ],
};



  return (
    <section className="w-full bg-white lg:pt-15">
      <div className=" mx-auto lg:py-6 overflow-hidden">
        <div className="relative testimonial grid z-9 grid-cols-1 lg:grid-cols-2 lg:gap-8 xl:gap-12 items-center flex items-start">
          {/* Left: World Map Background */}
          <div className="relative w-full map">
            <Image
              src="/images/map.png"
              alt="World Map"
              fill
              className=" object-contain "
            />
          </div>

          {/* Right: Content */}
          <div className="absolute lg:static top-40  sm:top-1/2 lg:top-auto rightSection lg:max-w-140  px-5 sm:px-10">
            {/* Badge */}
            <span className="inline-block mb-4 px-4 py-1 text-sm sm:text-xl font-normal testimonial-pill rounded-full">
              Testimonials
            </span>

            {/* Heading */}
            <h2 className="text-3xl sm:text-3xl lg:text-3xl xl:text-4xl font-normal text-gray-800 leading-tight">
              Trust Voices From Parents <br />
              and Students Who Stay <br />
              Connected With SchoolAura
              {/* <span className="font-semibold">SchoolAura</span> */}
            </h2>

            {/* Description */}
            <p className="mt-2 lg:mt-4 text-gray-800 md:text-2xl lg:text-xl leading-5 sm:leading-5 md:leading-7">
              Discover how SchoolAura has simplified school life for thousands
              of parents and students. From instant updates to seamless
              communication hear how families stay informed, engaged, and
              connected every day.
            </p>
          </div>
        </div>
        <div className="testimonial-slider z-10 mx-auto pl-5 -mt-20 sm:mt-6 md:-mt-5 lg:-mt-10">
      <Slider {...settings}>
            {testimonials.map((item, index) => (
              <div   key={index} className="px-3">
                <div className="bg-[#E7EAF1]  rounded-2xl p-4 md:p-5 lg:p-7 xl:p-10 h-full flex gap-3 sm:gap-4 items-center">
                  {/* Top */}

                  <div className="flex flex-col gap-2 ">
                    <div className="w-14 h-14 rounded-full bg-[#C4C4C4]"></div>
                    <div className="flex items-center gap-1 text-sm font-medium text-gray-900">
                      <Icon
                        icon="material-symbols:star"
                        width="19"
                        height="19"
                        style={{ color: "#FF4D00" }}
                      />
                      {item.rating}
                    </div>
                  </div>
                  <div className="">
                    <h4 className="font-bold text-gray-900">{item.name}</h4>
                    {/* Text */}
                    <p className="text-gray-900  lg:text-lg leading-6 lg:leading-relaxed mb-0">
                      {item.text}
                    </p>
                  </div>
                </div>
              </div >
            ))}
          </Slider>
        </div>
      </div>
    </section>
  );
};

export default Testimonial;
