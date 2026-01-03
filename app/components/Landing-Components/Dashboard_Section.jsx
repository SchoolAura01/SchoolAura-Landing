"use client";

import React,{ useEffect, useRef } from "react";
import Image from "next/image";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);
const Dashboard_Section = () => {
   const sectionRef = useRef(null);
   const leftRef = useRef(null);
const rightRef = useRef(null);
 
 useEffect(() => {
    if (!sectionRef.current || !leftRef.current || !rightRef.current) return;

    const ctx = gsap.context(() => {
       gsap.set(leftRef.current, { x: -100, opacity: 0 });
    gsap.set(rightRef.current, { x: 100, opacity: 0, scale: 0.95 });
      gsap.timeline({
        scrollTrigger: {
          trigger:sectionRef.current,
          start: "top 80%",
         toggleActions: "play none none reverse",
          // markers:true
        },
      })
        .fromTo(
  leftRef.current,
  { opacity: 0, x: -100 },
  {
    
    opacity: 1,
    x: 0,
    duration:1.2,
    ease: "power3.out",
     scrollTrigger: {
          trigger: leftRef.current,
          start: "top 85%",
          toggleActions: "play none none reverse",
          invalidateOnRefresh: true, 
        },
  }
)
.fromTo(
  rightRef.current,
  { x: 100, opacity: 0, scale: 0.95 },
  {
    x: 0,
    opacity: 1,
    scale: 1,
    duration: 1.2,
    ease: "power3.out",
     scrollTrigger: {
      trigger: rightRef.current,
      start: "top 85%",
      toggleActions: "play none none reverse",
      invalidateOnRefresh: true,
      // markers: true,
    },
  },
  "-=0.6"
)

    }, sectionRef);

    return () => ctx.revert();
  }, []);



  return (
    <section>
      <div ref={sectionRef}
     className="container mx-auto mt-10 w-[90%] lg:w-[80%]">
      <div className="dashboard mx-auto bg-[#02004C] text-white rounded-xl flex flex-col md:flex-row md:justify-between overflow-hidden">
        <div ref={leftRef} className="left dashboard-left p-4 md:p-5 lg:p-10 xl:p-15 2xl:p-20 w-full md:w-180 order-2 md:order-1 flex flex-col justify-center">
          <h3 className="text-[clamp(2rem,3vw,2.8rem)] font-semibold leading-10 md:leading-10 lg:leading-13">
            Your Smart School <br/> Dashboard
          </h3>
          <p className=" leading-5 sm:leading-6 [word-spacing:2px] mt-3 lg:mt-4">
            Everything you need — all in one place.
          </p>
          <p className="leading-5 sm:leading-6 [word-spacing:2px]">
            SchoolAura’s intuitive dashboard gives students and parents instant
            access to homework, classwork, attendance, and daily updates
            designed to keep your school life organized and efficient.
          </p>
        </div>
        <div  className="right dashboard-right order-1 md:order-2 flex justify-end">
        <div ref={rightRef} className="relative overflow-hidden dashboard-img">
            <Image
            src="/images/mobileWithS.svg"
            alt="mobile"
            fill
            unoptimized
            className="object-cover"
          />
        </div>
          
        </div>
      </div>
      </div>
    </section>
  );
};

export default Dashboard_Section;
