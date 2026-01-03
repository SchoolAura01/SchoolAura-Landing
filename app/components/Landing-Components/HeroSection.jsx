"use client";
import React,{ useEffect, useRef } from 'react';
import gsap from "gsap";
import { Icon } from "@iconify/react";
import Image from "next/image";
import AppButton from "./sub_Components/AppButton"
const HeroSection = () => {
  const heroRef = useRef(null);
  useEffect(() => {
  const ctx = gsap.context(() => {

    const tl = gsap.timeline({
      defaults: { ease: "power3.out" }
    });

    tl.from(".hero-badge", {
      opacity: 0,
      y: 20,
      duration: 0.6
    })
    .from(".hero-title-1", {
      opacity: 0,
      y: 30,
      duration: 0.7
    }, "-=0.3")
    .from(".hero-title-2", {
      opacity: 0,
      y: 30,
      duration: 0.7
    }, "-=0.5")
    .from(".hero-desc", {
      opacity: 0,
      y: 20,
      duration: 0.6
    }, "-=0.4")
    .from(".hero-image", {
      opacity: 0,
      scale: 0.95,
      y: 30,
      duration: 0.8
    }, "-=0.4")
    .from(".rating", {
      opacity: 0,
      scale: 0.8,
      duration: 0.5
    }, "-=0.3")

  }, heroRef);

  return () => ctx.revert();
}, []);

  return (
  
<section
data-scroll-section

>
  <div ref={heroRef}
 className="hero-section w-full  z-0 relative pt-2 md:pt-15">
      {/* <div className=" hero-gradient-band absolute w-[120%] h-[300px] top-[30%] left-[0%] z-0"></div> */}
     
     <div className="hero-content relative  mx-auto w-full  z-10 flex flex-col items-center overflow-hidden ">
    <div className='hero-text flex flex-col items-center '>
        <div className='hero-badge flex items-center gap-2 rounded-full border border-gray-200 px-2'>
            <Icon icon="mdi:sparkles" width="20" height="20"  style={{"color": "#FFC159"}} />
            <span className='text-gray-500 text-[clamp(0.5rem,3vw,1rem)] font-normal'>The modern ERP for high‑velocity teams</span>
        </div>
        
        <h1 className="hero-title-1 text-[clamp(1.3rem,5vw,2rem)] sm:text-[clamp(2rem,5vw,3.75rem)] font-semibold mt-4 leading-4 sm:leading-6">Smart <span className="italic font-normal font-['Instrument_Serif'] ">School ERP</span> That Connects </h1>
        <h1 className="hero-title-2 text-[clamp(1.3rem,5vw,2rem)] sm:text-[clamp(2rem,5vw,3.75rem)] font-semibold">Schools, Parents, And Students</h1>
        <p className="hero-desc w-[80%] mx-auto font-['Instrument_Serif'] font-light tracking-tight text-xs   sm:text-[clamp(0.5rem,6vw,1.2rem)] text-center leading-4 sm:leading-6">SchoolAura brings attendance, fees, homework, grades, and announcements into one friendly platform — with dedicated apps for parents and students.</p>
    </div>
    <div className='hero-bg w-[100%]  relative flex flex-col items-center overflow-hidden'>
       {/* <div className=" w-full top-0 -translate-y-[18%]"> */}
        <div className='hero-image mx-auto relative '>
       <Image
      src="/images/hero-mobile.PNG"
      alt="Logo"
     fill
     className="object-contain"
    />
     {/* hero stars */}
      <div className='rating  absolute max-w-[180px] sm:max-w-[250px]'>
        <div className="flex sm:gap-1 pl-0">
  {Array.from({ length: 5 }).map((_, index) => (
    <Icon
      key={index}
      icon="material-symbols:star-rounded"
      style={{ color: "#FFD900" }}
      className='w-[14px] h-[14px] sm:w-[18px] sm:h-[18px] md:w-[22px] md:h-[22px] lg:w-[25px] lg:h-[25px]'
    />
  ))}
</div>
<h1 className='text-xl sm:text-2xl md:text-5xl font-semibold'>1500+</h1>
<p className='text-gray-700 text-[10px] sm:text-sm leading-4 mt-1 md:mt-2'>Trusted and Downloaded by thousands of peoples around the world.</p>
      </div>

      </div>
          
        {/* apps  */}
  
      </div>
      <div className='hero-buttons flex gap-3 md:gap-8 mt-4 md:mt-8 mx-auto justify-center w-full'>
<AppButton src={"/images/apple.svg"} app={"App Store"} small={"Download on the"}/>
<AppButton src={"/images/playstore.png"} app={" Google Play"} small={"Get it on"}/>
  </div>
  </div>
  
    </div>

  

</section>
  );
 
}

export default HeroSection;