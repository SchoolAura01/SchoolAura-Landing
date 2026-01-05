"use client";
import React, { useEffect, useRef } from "react";
import Feature_Card from "./sub_Components/Feature_Card";
import Image from "next/image";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);
const Feature_Section = () => {
  const sectionRef = useRef(null);
  const imageRef = useRef(null);
  const cardsRef = useRef([]);
  const features = [
    {
      title: "End-to-End Encryption",
      desc: "Your conversations stay private and secure — only between you and your school community.",
    },
    {
      title: "Group Chat",
      desc: "Collaborate easily with class groups, parent groups, and staff communities — all in one place.",
    },
    {
      title: "Fast & User Friendly",
      desc: "Intuitive design and smooth performance for effortless messaging anytime, anywhere.",
    },
    {
      title: "Students, Parents, Teacher",
      desc: "A unified space for real-time updates, discussions, and learning communication.",
    },
  ];
 
  useEffect(() => {
  if (!sectionRef.current || !imageRef.current || !cardsRef.current) return;

  const ctx = gsap.context(() => {

    gsap.set(imageRef.current, {
      autoAlpha: 0,
      y: 40,
      scale: 0.95,
    });

    gsap.set(cardsRef.current, {
      autoAlpha: 0,
    });

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: sectionRef.current,
        start: "center 100%",
        toggleActions: "play none none reverse",
        invalidateOnRefresh: true,
        // markers: true,
      },
    });
    tl.to(imageRef.current, {
      autoAlpha: 1,
      y: 0,
      scale: 1,
      duration: 0.9,
      ease: "power3.out",
    });

    const directions = [
      { y: -40 }, // top
      { x: 40 },  // right
      { y: 40 },  // bottom
      { x: -40 }, // left
    ];
    cardsRef.current.forEach((card, i) => {
      tl.fromTo(
        card,
        { ...directions[i] },
        {
          x: 0,
          y: 0,
          autoAlpha: 1,
          duration: 0.9,
          ease: "power3.out",
        },
        "-=0.4"
      );
    });

  }, sectionRef);

  return () => ctx.revert();
}, []);

  return (
    <section ref={sectionRef} className=" ">
      <div className="FeatureSection container w-[80%] relative mx-auto sm:mt-10 min-h-fit">
        <div
          ref={imageRef}
          className="relative mt-10 sm:mt-20 mx-auto feature-image"
        >
          <Image
            src="/images/mobile2.png"
            alt="SchoolAura"
            fill
            className="object-cover"
            priority
          />
        </div>
        {/* Top */}

        <Feature_Card
          ref={(el) => (cardsRef.current[0] = el)}
          feature={features[0]}
          featureCount="feature-1"
        />

        {/* Right */}

        <Feature_Card
          ref={(el) => (cardsRef.current[1] = el)}
          feature={features[1]}
          featureCount="feature-2"
        />

        {/* Bottom */}

        <Feature_Card
          ref={(el) => (cardsRef.current[2] = el)}
          feature={features[2]}
          featureCount="feature-3"
        />

        {/* Left */}

        <Feature_Card
          ref={(el) => (cardsRef.current[3] = el)}
          feature={features[3]}
          featureCount="feature-4"
        />
      </div>
    </section>
  );
};

export default Feature_Section;
