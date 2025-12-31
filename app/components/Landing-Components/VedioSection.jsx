import React from 'react'
import { Icon } from "@iconify/react";
import Image from "next/image";
const VedioSection = () => {
  return (
     <section className="w-full my-10  bg-white">
      <div className="vedioSection container mx-auto px-5 sm:px-2 md:px-0  md:w-[80%]">
        <div className="rounded-[19px] md:rounded-[24px] border-2 border-gray-200 w-full">
            <div className="rounded-[17px] md:rounded-[22px] p-[4px] md:p-[7px] bg-gray-100 z-0 w-full">
        <div className="relative rounded-[15px] md:rounded-[20px] border z-10 bg-white overflow-hidden shadow-sm w-full">
            
            {/* <div className='img relative'> */}
               <Image
    src="/images/thumbnail.PNG"
    alt="Hero image"
    width={1920}
  height={750}
    sizes="100vw"
    className="img w-full h-[250px] sm:h-[270px] md:h-[350px] lg:h-[460px] xl:h-[auto] object-cover object-center"
    priority
  />
         {/* Play Button */}
    <button
      className="absolute inset-0 flex items-center justify-center z-20"
      aria-label="Play video"
    >
      <div className="w-10 h-10 sm:w-17 sm:h-17 md:w-18 md:h-18 rounded-full bg-black/15 backdrop-blur-sm
                      flex items-center justify-center
                      transition-transform duration-300 hover:scale-110">
        <Icon icon="solar:play-bold"
        className="text-white w-[17px] h-[17px] sm:w-[30px] sm:h-[30px] md:w-[30px] md:h-[30px]"
          />
      </div>
    </button>
            </div>
        {/* </div> */}

          </div>
        </div>

      </div>
    </section>
  )
}

export default VedioSection

