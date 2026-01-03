"use client";
import React, { useEffect, useState } from 'react'
import { createPortal } from "react-dom";
import { Icon } from "@iconify/react";
import Image from "next/image";
const VideoModal = ({ open, onClose }) => {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!open || !mounted) return null;

  return createPortal(
    <div className="fixed inset-0 z-9999 grid place-items-center px-4">
      <div
        className="absolute inset-0 bg-black/60 backdrop-blur-xl"
        onClick={onClose}
      />
      <div
        className="relative z-10 w-full max-w-5xl aspect-video
                   bg-black rounded-2xl overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          className="w-6 h-6 sm:w-8 sm:h-8 absolute top-2 right-2 z-20
                     bg-black/40 text-white rounded-full flex items-center justify-center"
        >
          <Icon icon="maki:cross" width="15" height="15"  style={{color: "#fff"}} />
        </button>

        <iframe
          className="absolute inset-0 w-full h-full"
          src="https://www.youtube.com/embed/QMFFLOI0eog?autoplay=1&mute=0&rel=0"
          allow="autoplay; encrypted-media"
          allowFullScreen
        />
      </div>
    </div>,
    document.body
  );
};


const VedioSection = () => {
  const [openVideo, setOpenVideo] = useState(false);
 
 const [mounted, setMounted] = useState(false);

useEffect(() => {
  setMounted(true);
}, []);

  return (
    <>
     <section data-scroll-section className="w-full my-10  bg-white">
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
    type='button'
   
     onClick={() => {
    console.log("clicked");
    setOpenVideo(true);
  }}
      className="absolute inset-0 flex items-center justify-center z-20"
      aria-label="Play video"
    >
      <div className={`w-10 h-10 sm:w-16 sm:h-16 md:w-20 md:h-20
              rounded-full bg-black/15
              flex items-center justify-center
              transition-transform duration-300 hover:scale-110
              ${mounted ? "backdrop-blur-sm" : ""}`}>
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
     {/* vedio popup  */}
 {openVideo && (
   <VideoModal
        open={openVideo}
        onClose={() => setOpenVideo(false)}
      />
)}


</>
  )
}

export default VedioSection

