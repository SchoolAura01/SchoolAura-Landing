"use client";
import Image from 'next/image'
import React from 'react'
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Icon } from '@iconify/react';
const Testimonial = () => {const testimonials = [
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


  return (
       <section className="w-full bg-white pt-15">
      <div className="container mx-auto py-6">
        <div className="grid z-9 grid-cols-1 lg:grid-cols-2 gap-12 items-center flex items-start">

          {/* Left: World Map Background */}
          <div className="relative w-full h-[300px] lg:h-[400px]">
            <Image
              src="/images/map.svg"
              alt="World Map"
              fill
              className="absolute inset-0 w-full h-full object-contain opacity-60"
            />
          </div>

          {/* Right: Content */}
          <div className="max-w-xl ">
            {/* Badge */}
            <span className="inline-block mb-4 px-4 py-1 text-xl font-normal testimonial-pill rounded-full">
              Testimonials
            </span>

            {/* Heading */}
            <h2 className="text-3xl lg:text-4xl font-normal text-gray-800 leading-tight">
              Trust Voices From Parents <br />
              and Students Who Stay <br />
              Connected With SchoolAura
              {/* <span className="font-semibold">SchoolAura</span> */}
            </h2>

            {/* Description */}
            <p className="mt-4 text-gray-800 text-lg leading-relaxed">
              Discover how SchoolAura has simplified school life for thousands of parents and students. From instant updates to seamless communication hear how families stay informed, engaged, and connected every day.
            </p>
          </div>

        </div>
         <div className="-translate-y-10 z-10 mx-auto px-5">
        <Swiper
          spaceBetween={24}
          slidesPerView={1.1}
          breakpoints={{
            640: { slidesPerView: 1.5 },
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 2.5 },
          }}
        >
          {testimonials.map((item, index) => (
            <SwiperSlide key={index}>
              <div className="bg-[#E7EAF1]  rounded-2xl p-10 h-full flex gap-4 items-center">
                
                {/* Top */}
               
                  <div className='flex flex-col gap-2 '>
                    <div className="w-14 h-14 rounded-full bg-[#C4C4C4]"></div>
                  <div className="flex items-center gap-1 text-sm font-medium text-gray-900">
                  <Icon icon="material-symbols:star" width="19" height="19"  style={{color: "#FF4D00"}} />
                  {item.rating}
                </div>
                  </div>
                   <div className='' >
                     <h4 className="font-bold text-gray-900">
                    {item.name}
                  </h4>
                  {/* Text */}
                <p className="text-gray-900 text-lg leading-relaxed mb-0">
                  {item.text}
                </p>
                   </div>
                </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      </div>
    </section>
  )
}

export default Testimonial