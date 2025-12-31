"use client";
import { Icon } from "@iconify/react";
import { useState } from "react";

const WhyChooseUs = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const items = [
    {
      title: "Smart Communication",
      content:
        "Instant updates, announcements, and alerts keep parents informed and students engaged — ensuring you never miss important school information.",
    },
    {
      title: "Cutting-Edge Technology",
      content:
        "Built with modern, scalable technology to ensure speed, security, and reliability for schools of all sizes.",
    },
    {
      title: "Tailored Strategies",
      content:
        "Customized solutions designed to match the unique needs and workflows of every institution.",
    },
    {
      title: "Global Reach",
      content:
        "Trusted by schools across regions, enabling seamless communication worldwide.",
    },
  ];

  return (
    <section className="w-full bg-white">
      <div className="whyChooseUs mt-10 container mx-auto px-5 sm:px-2 md:px-0  md:w-[80%]">
        {/* first  */}
        <div className="mb-6 sm:mb-10">
            <div className="first flex justify-center sm:justify-start items-start gap-2 sm:gap-4 ">
                 <span className=" px-4 py-1 text-[1rem] sm:text-xl font-normal testimonial-pill rounded-full">
              Why Choose Us
            </span>

          <p className="text-[1rem] sm:text-3xl lg:text-4xl font-medium text-gray-900 leading-tight">
            Stay Connected, Stay <br />
            Updated Anytime, Anywhere
          </p>
            </div>
         
        </div>
        {/* second */}
        <div className="rounded-[19px] md:rounded-[24px] border-2 border-gray-200">
            <div className="rounded-[17px] md:rounded-[22px] p-[4px] md:p-[7px] bg-gray-100 z-0">
        <div className="rounded-[15px] md:rounded-[20px] border z-10 bg-white border-gray-900 overflow-hidden shadow-sm ">

          {items.map((item, index) => (
            <div key={index} className="border-b last:border-b-0 transition-colors duration-300 ease-in-out hover:bg-gray-50">

              
              <button
                onClick={() =>
                  setActiveIndex(activeIndex === index ? -1 : index)
                }
                className="w-full flex items-center justify-between px-4 py-4 md:px-6 md:py-6 text-left "
              >
                <div className="flex items-center gap-2 sm:gap-4">
                  <span className="w-6 h-6 sm:w-9 sm:h-9 flex items-center justify-center rounded-full border border-gray-700 text-xs sm:text-md font-normal">
                    {String(index + 1).padStart(2, "0")}
                  </span>

                  <h3 className="text-sm sm:text-xl md:text-2xl font-normal text-gray-900">
                    {item.title}
                  </h3>
                </div>

                <span className="text-2xl font-medium transition-all duration-600 ease-in-out">
                  {activeIndex === index ? <Icon icon="ic:baseline-minus" width="24" height="24" /> : <Icon icon="ic:baseline-plus" width="24" height="24" />}
                </span>
              </button>

              {/* Accordion Content */}
             <div 
  className={`overflow-hidden transition-[max-height] duration-300 ease-in-out  ${
    activeIndex === index
      ? "max-h-[500px] "
      : "max-h-0"
  }`}
>
  <div className="px-6 pb-6 pl-[3.5rem] text-gray-800  text-sm md:text-xl leading-5 md:leading-relaxed">
    {item.content}
  </div>
</div>

            </div>
          ))}

        </div>
        </div>
        </div>
       
      </div>
    </section>
  );
};

export default WhyChooseUs;
