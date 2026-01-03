import React from "react";
import { Icon } from "@iconify/react";
const Get_In_Touch = () => {
  return (
    <section  data-scroll-section className="md:py-5 xl:py-10">
      <div className="container px-4 sm:px-2 md:px-0  md:w-[80%] mx-auto flex justify-center mb-10">
        <div className="w-full rounded-3xl bg-linear-to-b from-neutral-200 via-white to-white px-5 py-1 sm:px-10 sm:py-6 shadow-sm">
          {/* Heading */}
          <div className="relative mb-10 text-center">
            <h1 className="text-[9vw] sm:text-[10vw] md:text-[9vw] 2xl:text-[7vw] font-medium tracking-wide">
              GET IN TOUCH
            </h1>

            {/* Small bubble */}
            <div className="wantToKnow absolute right-[15%] sm:right-[5%] xl:right-[7%] 2xl:right-[17%] top-[65%] sm:top-[70%] -rotate-8  lg:-rotate-11  rounded-full  text-xs sm:text-xs md:text-sm  whitespace-nowrap"
>
              <span className="border border-black rounded-full px-1  sm:px-4 sm:pb-1 text-[0.4rem] sm:text-sm bg-white">
                Want to know more?
              </span>
            </div>
          </div>

          {/* Form */}
          <form className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-10 lg:gap-x-16 lg:gap-y-14 mb-15">
            {/* Name */}
            <div className="flex items-center border-b border-black sm:pb-2 px-3 gap-2" >
              <label className="text-sm text-black leading-none  p-0 whitespace-nowrap">Name</label>
              <input
                type="text"
                className="flex-1 p-0 focus:outline-none bg-transparent leading-none "
              />
            </div>

            {/* School Name */}
            <div className="flex items-center border-b border-black sm:pb-2 px-3 gap-2">
              <label className="text-sm text-black  leading-none  p-0 whitespace-nowrap">School Name</label>
              <input
                type="text"
                className="flex-1 p-0 focus:outline-none bg-transparent leading-none"
              />
            </div >

            {/* Email */}
            <div className="flex items-center border-b border-black sm:pb-2 px-3 gap-2">
              <label className="text-sm text-black  leading-none  p-0 whitespace-nowrap">E-mail</label>
              <input
                type="email"
                className="flex-1 p-0 focus:outline-none bg-transparent leading-none"
              />
            </div>

            {/* Phone */}
            <div className="flex items-center border-b border-black sm:pb-2 px-3 gap-2">
              <label className="text-sm text-black leading-none  p-0 whitespace-nowrap">Phone</label>
              <input
                type="tel"
                className="flex-1 p-0 focus:outline-none bg-transparent leading-none"
              />
            </div>
             <div className="md:col-span-2 flex items-end">
            {/* Message */}
            <div className="w-[95%] border-b border-black sm:pb-2 px-3 flex flex-col ">
              <label className="text-sm text-black  leading-none p-0 whitespace-nowrap">Message</label>
             
              <textarea
              rows={3}
                type="text"
                className="flex-1 p-0 text-sm resize-none focus:outline-none  leading-5 placeholder:text-body placeholder:text-sm"
               
              >
                </textarea>
             
            </div>
             <button
    type="submit"
    className="flex items-center gap-1 sm:gap-2 translate-y-[50%] ml-5 text-xs sm:text-base bg-black text-white px-3 py-1 rounded-lg hover:opacity-80 transition whitespace-nowrap"
  >
    Send <Icon icon="formkit:arrowright"  className="w-5 h-4 sm:w-6 sm:h-5" />
  </button>
            </div>

          
          </form>
        </div>
      </div>
    </section>
  );
};

export default Get_In_Touch;
