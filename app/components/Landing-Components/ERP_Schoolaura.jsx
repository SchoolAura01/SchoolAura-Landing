import React from 'react'

const ERP_Schoolaura = () => {
  return (
     <section>
      <div 
     className="container mx-auto mt-10 w-[90%] lg:w-[80%] bg-[#FFF8EE] relative">
           <h1 className="absolute top-10 lg:text-[120px] font-extrabold tracking-wide text-transparent bg-clip-text bg-gradient-to-r from-[#EFEEFF] to-[#FFE2BE] select-none pointer-events-none">
        ERP SchoolAura
      </h1>

      <div className="container mx-auto px-6 pt-32 pb-20">
        {/* Images */}
        <div className="relative flex justify-center items-center">
          {/* Laptop */}
          <img
            src="/images/laptop-phone.png"
            alt="ERP Dashboard"
            className="w-[700px] max-w-full z-10"
          />

        
        </div>

        {/* Text Content */}
        <div className="text-center mt-20 max-w-3xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold text-black">
            Bharat’s No. 1 Complete{" "}
            <span className="text-orange-500">School</span> Management Software
          </h2>

          <p className="mt-4 text-gray-600">
            Effortlessly Manage your school's operations with Bharat’s No. 1
            School Management Software.
          </p>

          <button className="mt-8 px-8 py-3 bg-orange-500 text-white rounded-full font-semibold hover:bg-orange-600 transition">
            REGISTER NOW
          </button>
        </div>
      </div>
        </div>
        </section>
  )
}

export default ERP_Schoolaura

