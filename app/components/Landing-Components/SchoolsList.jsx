"use client";
import React from 'react'

import Image from "next/image";
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
  return (
    <section>
      <div className="container mx-auto px-6 mt-10 md:mt-20 text-center">

        {/* Heading */}
        <p className="text-md font-medium text-black mb-6">
          Trusted by thousands from schools
        </p>

        {/* Logos */}
        <div className="flex flex-wrap items-center justify-center gap-x-6 gap-y-4 md:gap-x-10 md:gap-y-6">
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
        </div>

      </div>
    </section>
  )
}

export default SchoolsList