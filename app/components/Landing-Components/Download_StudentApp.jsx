"use client";
import React,{ useEffect, useRef } from "react";
import Image from "next/image";
import AppButton from "./sub_Components/AppButton";

import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);
const Download_StudentApp = () => {
  const sectionRef = useRef(null);
const phonesRef = useRef(null);
const textRef = useRef(null);

useEffect(() => {
  if (!sectionRef.current || !phonesRef.current || !textRef.current) return;

  const phones = phonesRef.current;
  const text = textRef.current;
const mm = gsap.matchMedia();
  const ctx = gsap.context(() => {
   

    // 🔹 Desktop
    mm.add("(min-width: 434px)", () => {
      gsap.set(phones, { yPercent: 30 });
    });
   

    gsap.set(phones.querySelectorAll(".img"), {
      autoAlpha: 0,
      scale: 0.96,
    });

    gsap.set(text.children, {
      autoAlpha: 0,
    });
const isDesktop = window.matchMedia("(min-width: 434px)").matches;
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: sectionRef.current,
        start: "top 90%",
        end: "top 40%",
        scrub: 1.5,
        invalidateOnRefresh: true,
        // markers: true,
      },
    });
if (isDesktop) {
    tl.to(phones, {
      yPercent: 0,
      ease: "none",
    });
    
  }
   
 tl.to(
      phones.querySelectorAll(".img"),
      {
        autoAlpha: 1,
        scale: 1,
        stagger: 0.15,
        ease: "power3.out",
      },
      0
    );
    tl.to(
      text.children,
      {
        autoAlpha: 1,
        stagger: 0.15,
        ease: "none",
      },
      0.2
    );

    
    gsap.to(".DownloadAppSection .img", {
      yPercent: "+=3",
      duration: 2.5,
      repeat: -1,
      yoyo: true,
      ease: "sine.inOut",
    });

  }, sectionRef);

  return () => ctx.revert();
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
          <div className="img secondPhone relative rotate-[11.8deg] -ml-17 lg:-ml-18 translate-y-12">
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
           <AppButton src={"/images/apple.svg"} app={"App Store"} small={"Download on the"} link={"https://play.google.com/store/apps/details?id=com.st_schoolaura&hl=en_IN"}/>
<AppButton src={"/images/playstore.png"} app={" Google Play"} small={"Get it on"} link={"https://play.google.com/store/apps/details?id=com.st_schoolaura&hl=en_IN"}/>
          </div>
        </div>

      </div>
      </div>
    </section>
  );
};

export default Download_StudentApp;
