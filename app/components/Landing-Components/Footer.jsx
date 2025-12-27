import React from 'react'
import { Icon } from "@iconify/react";
import Image from "next/image";
const Footer = () => {
  const icons=["ic:baseline-facebook","bxl:instagram-alt","mdi:youtube","mdi:twitter"];
  return (
    <footer>
         <div className="container mx-auto">

        {/* Outer Card */}
        <div className="rounded-4xl w-[95%] mx-auto  border-2 border-gray-300 bg-white p-6">

          {/* Top Row */}
          <div className="flex justify-between items-start mb-4">
            <div>
              <h3 className="font-bold text-4xl">Schoolaura</h3>
              <p className="text-sm text-gray-900">
                The modern ERP for high-velocity teams
              </p>
            </div>
          </div>

          {/* Black Banner */}
          <div className="flex flex-col  items-center justify-between gap-6 bg-black text-white rounded-2xl px-6 pt-15">

            {/* Title */}
            <h2 className="text-center md:text-left text-lg md:text-4xl font-medium">
              Smart <span className="italic font-normal font-['Instrument_Serif'] ">School ERP</span> That Connects
              Schools, Parents, And Students
            </h2>

            {/* Contact + Social */}
            <div className="flex flex-col md:flex-row justify-between w-full py-6">

              {/* Contact */}
              <div className="flex items-center gap-4 text-sm text-white">
                <div className="flex items-center gap-2">
                  <span className="border border-white rounded-lg p-0.5 text-xs">
                    <Icon icon="material-symbols-light:mail-outline" width="21" height="21" />
                  </span>
                  support.schoolaura.com
                </div>

                <div className="flex items-center gap-2">
                  <span className="border border-white rounded-lg p-0.5 text-xs">
                    <Icon icon="solar:phone-outline" width="21" height="21" />
                  </span>
                  9220 611 307
                </div>
              </div>

              {/* Social Icons */}
              <div className="flex items-center gap-3">
                {icons.map((icon, i) => (
                  <span
                    key={i}
                    className=" flex items-center justify-center border border-white rounded-lg text-xs cursor-pointer hover:bg-white hover:text-black transition"
                  >
                    <Icon icon={icon} width="28" height="28" />
                  </span>
                ))}
              </div>

            </div>
          </div>
        </div>

        
      <div className="relative w-full h-[220px]">
        <Image
            src="/images/Schoolaura-footer.svg"
            alt="Hero image"
            fill
            className="object-cover "
            priority
            />
      </div>
      <p className="text-center text-xl text-black font-medium my-5">
        © 2025 Schoolaura. All rights reserved.
      </p>
    </div>
    </footer>
  )
}

export default Footer