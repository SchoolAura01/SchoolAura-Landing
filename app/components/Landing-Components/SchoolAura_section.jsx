"use client";
import React, { useEffect } from "react";
import Image from "next/image";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

const SchoolAura_section = () => {
  const featuresContent = [
    {
      title: "Schoolaura Courses",
      description:
        "Unlock quality education with SchoolAura Courses, a complete online learning platform for schools and students. From interactive lessons to live classes, we help institutions deliver digital learning experiences that are engaging, effective, and easy to manage.",
    },
    {
      title: "ERP Web Software",
      description:
        "Simplify your school operations with our powerful ERP Web Software. Manage attendance, fees, exams, staff, and communication all from a single, secure dashboard. Designed to boost productivity and transparency for schools of every size.",
    },
    {
      title: "ERP Schoolaura App",
      description:
        "Empower parents, teachers, and students with the SchoolAura mobile app. Stay updated with real-time notifications, homework, attendance, results, and school updates anytime, anywhere. Your school’s complete digital companion in one app.",
    },
    {
      title: <>Life Time Free <br/> Landing School Page</>,
      description:
        "Get a dedicated landing page for your school absolutely free for life. Showcase achievements, facilities, and updates online with a beautiful, easy-to-manage page powered by SchoolAura. Build your school’s online presence effortlessly.",
    },
  ];
useEffect(() => {
  const cards = gsap.utils.toArray([
    ".software-card-1",
    ".software-card-2",
    ".software-card-3",
    ".software-card-4",
  ]);

  cards.forEach((card, index) => {
    const image = card.querySelector(".img");
    const text = card.querySelector(".text");

    const isBlurOnly = index === 1; // second grid
    const fromBottom = index === 0 || index === 2 || index === cards.length - 1;

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: card,
        start: "top 80%",
         end: "bottom 40%",
          scrub:3, 
        toggleActions: "play none none reverse",
        invalidateOnRefresh: true,
      },
    });

    if (image) {
      tl.fromTo(
        image,
        {
          opacity: 0,
          y: isBlurOnly ? 0 : fromBottom ? 60 : 0,
          scale: isBlurOnly ? 1 : 0.96,
        },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          ease: "none",
        }
      );
    }

    if (text) {
      tl.fromTo(
        text,
        { opacity: 0 },
        {
          opacity: 1,
          duration: 2,
          ease: "power3.out",
        },
        "-=0.4"
      );
    }
  });
}, []);

  return (
    <section>
      <div
        className="schoolAuraSection container relative mx-auto my-0 bg-white grid grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4  w-[96%]  md:w-[90%]  py-10">
        <div className="bg-linear-to-r from-[#252ffd] to-[#06e3ff] rounded-2xl sm:rounded-3xl col-span-3 lg:col-span-2 software-card-1 flex items-end md:gap-7">
          <div className="left text flex justify-end flex-col text-white w-[65%] sm:w-[55%] p-5 md:p-8">
            <h4 className="font-medium text-sm sm:text-2xl">{featuresContent[0].title}</h4>
            <span className="text-[0.7rem] sm:text-xs tracking-wide text-white/80">
              {featuresContent[0].description}
            </span>
          </div>
          <div className="right overflow-hidden h-75 md:h-95">
          <div className="relative img translate-y-5 md:translate-y-0">
    <Image
      src="/images/schoolAuraCourse.png"
      alt="SchoolAura"
      fill
      className="object-cover"
    />
</div>
          </div>
        </div>
        {/* grid 1  */}
        <div className="bg-[#f7f7f7] rounded-2xl sm:rounded-3xl software-card-2 col-span-3 sm:col-span-1 lg:col-span-1">
          <div className="left p-4">
          <div className="relative img">
    <Image
      src="/images/webdashboard.jpg"
      alt="SchoolAura"
      fill
      className="object-cover"
    />
          </div>
          </div>
    
        <div className="text right flex justify-end flex-col text-black p-5 md:p-8">
            <h4 className="font-medium text-base sm:text-2xl">{featuresContent[1].title}</h4>
            <span className="text-xs tracking-wide text-black/80">
              {featuresContent[1].description}
            </span>
          </div>
         
        </div>
        {/* grid 2  */}
        <div className="bg-[#ffb742] rounded-2xl sm:rounded-3xl  software-card-3 col-span-3 sm:col-span-2 lg:col-span-1 flex flex-col justify-between">
        <div className="left text flex justify-end flex-col text-black p-5 md:p-8">
            <h4 className="font-medium text-base sm:text-2xl">{featuresContent[2].title}</h4>
            <span className="text-xs tracking-wide text-black/80">
              {featuresContent[2].description}
            </span>
          </div>
          <div className="right overflow-hidden h-60 sm:h-56 lg:h-51">
          <div className="relative img -translate-y-7 sm:translate-y-0 lg:-translate-y-7">
    <Image
      src="/images/iphone-16.png"
      alt="SchoolAura"
      fill
      className="object-cover"
    />
          </div>
          </div>
        </div>
        <div className="bg-linear-to-r from-[#f0e4fa] to-[#fdcc7d] rounded-2xl sm:rounded-3xl col-span-3 lg:col-span-2 software-card-4 flex items-end xl:gap-7">
        <div className="left text flex justify-end flex-col text-black w-[65%] lg:w-[45%] p-5 md:p-8">
            <h4 className="font-medium text-base sm:text-2xl w-[80%] leading-4 sm:leading-7 mb-2">{featuresContent[3].title}</h4>
            <span className="text-xs tracking-wide text-black/80">
              {featuresContent[3].description}
            </span>
          </div>
          <div className="right overflow-hidden h-75 md:h-95 w-[55%] pr-10">
          <div className="relative img rotate-[15deg] translate-y-2 md:translate-y-10 mx-auto">
    <Image
      src="/images/schoolpage.png"
      alt="SchoolAura"
      fill
      className="object-contain"
    />
</div>
          </div>
        </div>
      </div>

    </section>
  );
};

export default SchoolAura_section;