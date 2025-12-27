import React from "react";
import Image from "next/image";
const SchoolAura_section = () => {
  const featuresContent = [
    {
      title: "Schoolaura Courses",
      description:
        "Unlock quality education with SchoolAura Courses, a complete online learning platform for schools and students. From interactive lessons to live classes, we help institutions deliver digital learning experiences that are engaging, effective, and easy to manage.",
    },
    {
      title: "ERP Web Software",
      description:
        "Simplify your school operations with our powerful ERP Web Software. Manage attendance, fees, exams, staff, and communication all from a single, secure dashboard. Designed to boost productivity and transparency for schools of every size.",
    },
    {
      title: "ERP Schoolaura App",
      description:
        "Empower parents, teachers, and students with the SchoolAura mobile app. Stay updated with real-time notifications, homework, attendance, results, and school updates anytime, anywhere. Your school’s complete digital companion in one app.",
    },
    {
      title: "Life Time Free Landing School Page",
      description:
        "Get a dedicated landing page for your school absolutely free for life. Showcase achievements, facilities, and updates online with a beautiful, easy-to-manage page powered by SchoolAura. Build your school’s online presence effortlessly.",
    },
  ];

  return (
    <section>
      <div
        className="schoolAuraSection container relative mx-auto my-0 bg-white grid 
      grid-cols-3 gap-4 w-[80%] py-10"
      >
        <div className="bg-linear-to-r from-[#252ffd] to-[#06e3ff] rounded-3xl col-span-2 software-card-1 flex items-end gap-7">
          <div className="flex justify-end flex-col text-white w-[55%] p-8">
            <h4 className="font-medium text-2xl">{featuresContent[0].title}</h4>
            <span className="text-xs tracking-wide text-white/80">
              {featuresContent[0].description}
            </span>
          </div>
          <div className="overflow-hidden h-95">
          <div className="relative img">
    <Image
      src="/images/schoolAuraCourse.png"
      alt="SchoolAura"
      fill
      className="object-cover"
    />
</div>
          </div>
        </div>
        <div className="bg-[#f7f7f7] rounded-3xl software-card-2">
          <div className="p-3">
          <div className="relative img">
    <Image
      src="/images/webdashboard.jpg"
      alt="SchoolAura"
      fill
      className="object-cover"
    />
          </div>
          </div>
    
        <div className="flex justify-end flex-col text-black p-8">
            <h4 className="font-medium text-2xl">{featuresContent[1].title}</h4>
            <span className="text-xs tracking-wide text-black/80">
              {featuresContent[1].description}
            </span>
          </div>
         
        </div>
        <div className="bg-[#ffb742] rounded-3xl  software-card-3">
        <div className="flex justify-end flex-col text-black p-8">
            <h4 className="font-medium text-2xl">{featuresContent[2].title}</h4>
            <span className="text-xs tracking-wide text-black/80">
              {featuresContent[2].description}
            </span>
          </div>
          <div className=" overflow-hidden h-51">
          <div className="relative img -translate-y-7">
    <Image
      src="/images/iphone-16.png"
      alt="SchoolAura"
      fill
      className="object-cover"
    />
          </div>
          </div>
        </div>
        <div className="bg-linear-to-r from-[#f0e4fa] to-[#fdcc7d] rounded-3xl col-span-2 software-card-4 flex items-end gap-7">
        <div className="flex justify-end flex-col text-black w-[45%] p-8">
            <h4 className="font-medium text-2xl w-[80%]">{featuresContent[3].title}</h4>
            <span className="text-xs tracking-wide text-black/80">
              {featuresContent[3].description}
            </span>
          </div>
          <div className="overflow-hidden h-95 w-[50%]">
          <div className="relative img rotate-15 translate-y-10">
    <Image
      src="/images/schoolpage.png"
      alt="SchoolAura"
      fill
      className="object-contain"
    />
</div>
          </div>
        </div>
      </div>

    </section>
  );
};

export default SchoolAura_section;