import React from "react";
import { Icon } from "@iconify/react";
const Get_In_Touch = () => {
  return (
    <section>
      <div className="container w-[80%] mx-auto flex justify-center mb-10">
        <div className="w-full rounded-3xl bg-gradient-to-b from-neutral-200 via-white to-white px-10 py-6 shadow-sm">
          {/* Heading */}
          <div className="relative mb-10 text-center">
            <h1 className="text-[8rem] font-medium tracking-wide">
              GET IN TOUCH
            </h1>

            {/* Small bubble */}
            <div className="absolute right-30 top-38 -translate-y-1/2 -rotate-10">
              <span className="border border-black rounded-full px-3 pb-1 text-md bg-white">
                Want to know more?
              </span>
            </div>
          </div>

          {/* Form */}
          <form className="grid grid-cols-1 md:grid-cols-2 gap-x-16 gap-y-14 mb-15">
            {/* Name */}
            <div className="flex items-center border-b border-black pb-2 px-3">
              <label className="text-sm text-black leading-none  p-0 ">Name</label>
              <input
                type="text"
                className="flex-1 p-0 focus:outline-none bg-transparent leading-none "
              />
            </div>

            {/* School Name */}
            <div className="flex items-center border-b border-black pb-2 px-3">
              <label className="text-sm text-black  leading-none  p-0">School Name</label>
              <input
                type="text"
                className="flex-1 p-0 focus:outline-none bg-transparent leading-none"
              />
            </div >

            {/* Email */}
            <div className="flex items-center border-b border-black pb-2 px-3">
              <label className="text-sm text-black  leading-none  p-0">E-mail</label>
              <input
                type="email"
                className="flex-1 p-0 focus:outline-none bg-transparent leading-none"
              />
            </div>

            {/* Phone */}
            <div className="flex items-center border-b border-black pb-2 px-3 ">
              <label className="text-sm text-black leading-none  p-0">Phone</label>
              <input
                type="tel"
                className="flex-1 p-0 focus:outline-none bg-transparent leading-none"
              />
            </div>
             <div className="md:col-span-2 flex items-center">
            {/* Message */}
            <div className="w-[95%] border-b border-black pb-2 px-3 ">
              <label className="text-sm text-black  leading-none p-0">Message</label>
              <input
                type="text"
                className="flex-1 p-0 focus:outline-none bg-transparent leading-none"
              />
             
            </div>
             <button
    type="submit"
    className="flex items-center gap-2 translate-y-[50%] ml-5 bg-black text-white px-3 py-1 rounded-lg hover:opacity-80 transition whitespace-nowrap"
  >
    Send <Icon icon="formkit:arrowright" width="25" height="20" />
  </button>
            </div>

          
          </form>
        </div>
      </div>
    </section>
  );
};

export default Get_In_Touch;
