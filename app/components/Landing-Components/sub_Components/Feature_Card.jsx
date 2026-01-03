"use client";
import React, { forwardRef } from "react";
const Feature_Card = forwardRef(({ feature, featureCount }, ref) =>  {
  return (
    <div ref={ref} className={`${featureCount} absolute feature-card w-47 md:w-60 lg:w-75 rounded-xl sm:rounded-2xl bg-white p-2 md:p-3 lg:p-4 xl:p-5`}>
      <div className="flex items-center gap-3 lg:gap-4">
       
        <div>
          <p className="text-[0.5rem] md:text-[0.6rem] lg:text-xs leading-2 sm:leading-3 mb-0 text-gray-800 mt-1">
            {feature.desc}
          </p>
          <h4 className="font-normal text-[0.6rem] md:text-[0.7rem] lg:text-[1rem] whitespace-nowrap">
            {feature.title}
          </h4>
          
        </div>
         <div className="circle h-8 w-8 md:h-9 md:w-9 lg:h-12 lg:w-12 rounded-full bg-purple-500 shrink-0"> </div>
      </div>
    </div>
  );
});

export default Feature_Card;