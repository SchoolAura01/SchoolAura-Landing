"use client";
import React,{ useEffect, useRef } from "react";
import Image from "next/image";
import AppButton from "./sub_Components/AppButton";

import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);
const DownloadAppSection = () => {
  const sectionRef = useRef(null);
const phonesRef = useRef(null);
const textRef = useRef(null);
useEffect(() => {
  const phones = phonesRef.current;
  const text = textRef.current;

  const tl = gsap.timeline({
    scrollTrigger: {
      trigger: sectionRef.current,
      start: "top 80%",
      end: "top 30%",
      scrub: 2.5,
      invalidateOnRefresh: true,
    },
  });

  tl.fromTo(
    phones,
    {
      opacity: 0,
      y: 120,
      filter: "blur(10px)",
    },
    {
      opacity: 1,
      y: 0,
      filter: "blur(0px)",
      ease: "none",
    }
  );

  tl.fromTo(
    phones.querySelectorAll(".img"),
    {
      opacity: 0,
      scale: 0.96,
    },
    {
      opacity: 1,
      scale: 1,
      stagger: 0.15,
      ease: "none",
    },
    0
  );

  tl.fromTo(
    text.children,
    { opacity: 0 },
    {
      opacity: 1,
      stagger: 0.15,
      ease: "none",
    },
    0.2
  );
  // gsap.to(".DownloadAppSection .img", {
  //    y: "+=12",
  //     duration: 2.5,
  //      repeat: -1,
  //       yoyo: true,
  //        ease: "sine.inOut",
  //        });

}, []);

  return (
    <section ref={sectionRef}  className="DownloadAppSection w-full mb-10 bg-white py-0  mt-80 sm:mt-80 md:mt-70 lg:mt-20 mb-20">
        <div className="container mx-auto px-5 sm:px-2 md:px-0 md:w-[80%]">
      <div className="downloadApp relative w-full  rounded-3xl bg-linear-to-r from-[#000DFF] to-[#11005E] flex flex-col lg:flex-row items-center">

        {/* LEFT – Mobile Images */}
        <div ref={phonesRef} className="left absolute lg:relative w-full lg:w-1/2 flex justify-center items-center py-12 -translate-y-80 lg:-translate-y-10">
          <div className="img relative -rotate-[8deg] z-10 ">
            <Image
              src="/images/download1.webp" 
              alt="App Screen"
              fill
              className="object-contain drop-shadow-[0_5px_10px_rgba(0,0,0,0.25)]"
            />
          </div>

          {/* Second phone */}
          <div className="img relative rotate-[11.8deg] -ml-17 lg:-ml-18 translate-y-12">
            <Image
              src="/images/download2.webp" 
              alt="App Screen"
              fill
              className="object-contain drop-shadow-[0_5px_10px_rgba(0,0,0,0.25)]"
            />
          </div>
        </div>

        {/* RIGHT – Content */}
        <div ref={textRef}  className="right lg:w-1/2 text-white p-5 sm:p-10 mt-auto lg:mt-0">
          <h2 className="text-4xl lg:text-3xl font-semibold mb-4">
            Download Our <br /> App Now
          </h2>

          <p className="text-sm text-white/90 max-w-md mb-8">
            Please feel free to download our app on the app store or
            google play store to evaluate our product.
          </p>

          {/* Store Buttons */}
          <div className="flex gap-4">
            {/* App Store */}
           <AppButton src={"/images/apple.svg"} app={"App Store"} small={"Download on the"}/>
<AppButton src={"/images/playstore.png"} app={" Google Play"} small={"Get it on"}/>
          </div>
        </div>

      </div>
      </div>
    </section>
  );
};

export default DownloadAppSection;
