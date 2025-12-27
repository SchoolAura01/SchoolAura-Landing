import React from 'react'
import { Icon } from "@iconify/react";
import Image from "next/image";
const VedioSection = () => {
  return (
     <section className="w-full mb-10 bg-white">
      <div className="container mx-auto w-[80%]">
        <div className="rounded-[30px] border-2 border-gray-200">
            <div className="rounded-[28px] p-[7px] bg-gray-100 z-0">
        <div className="rounded-[26px] border z-10 bg-white overflow-hidden shadow-sm ">
            
            <div className='relative overflow-hidden w-full h-[450px]'>
               <Image
    src="/images/thumbnail.PNG"
    alt="Hero image"
    fill
    className="object-cover translate-y-2"
    priority
  />
         {/* Play Button */}
    <button
      className="absolute inset-0 flex items-center justify-center z-20"
      aria-label="Play video"
    >
      <div className="w-22 h-22 rounded-full bg-black/15 backdrop-blur-sm
                      flex items-center justify-center
                      transition-transform duration-300 hover:scale-110">
        <Icon icon="solar:play-bold" width="38" height="38" className='text-white' />
      </div>
    </button>
            </div>
        </div>

          </div>
        </div>

      </div>
    </section>
  )
}

export default VedioSection

