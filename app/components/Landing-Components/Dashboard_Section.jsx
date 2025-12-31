import React from "react";
import Image from "next/image";
const Dashboard_Section = () => {
  return (
    <section  className="container mx-auto mt-10 w-[90%] lg:w-[80%]">
      <div className=" dashboard mx-auto bg-[#02004C] text-white rounded-xl flex flex-col md:flex-row md:justify-between">
        <div className="left p-4 md:p-5 lg:p-10 xl:p-15 2xl:p-20 w-full md:w-180 order-2 md:order-1 flex flex-col justify-center">
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
        <div className="right order-1 md:order-2 flex justify-end 
    ">
        <div className="relative overflow-hidden dashboard-img
        ">
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
    </section>
  );
};

export default Dashboard_Section;
