import Image from "next/image";
import AppButton from "./sub_Components/AppButton";

const DownloadAppSection = () => {
  return (
    <section className="DownloadAppSection w-full mb-10 bg-white py-0  mt-80 sm:mt-80 md:mt-70 lg:mt-20 mb-20">
        <div className="container mx-auto px-5 sm:px-2 md:px-0 md:w-[80%]">
      <div className="downloadApp relative w-full  rounded-3xl bg-linear-to-r from-[#000DFF] to-[#11005E] flex flex-col lg:flex-row items-center">

        {/* LEFT – Mobile Images */}
        <div className="left absolute lg:relative w-full lg:w-1/2 flex justify-center items-center py-12 -translate-y-80 lg:-translate-y-10">
          <div className="img relative -rotate-[8deg] z-10 ">
            <Image
              src="/images/download1.webp" 
              alt="App Screen"
              fill
              className="object-contain drop-shadow-[0_5px_10px_rgba(0,0,0,0.25)]"
            />
          </div>

          {/* Second phone */}
          <div className="img relative rotate-[11.8deg] -ml-17 lg:-ml-16 translate-y-12">
            <Image
              src="/images/download2.webp" 
              alt="App Screen"
              fill
              className="object-contain drop-shadow-[0_5px_10px_rgba(0,0,0,0.25)]"
            />
          </div>
        </div>

        {/* RIGHT – Content */}
        <div className="right lg:w-1/2 text-white p-5 sm:p-10 mt-auto lg:mt-0">
          <h2 className="text-4xl lg:text-3xl font-semibold mb-4">
            Download Our <br /> App Now
          </h2>

          <p className="text-sm text-white/90 max-w-md mb-8">
            Please feel free to download our app on the app store or
            google play store to evaluate our product.
          </p>

          {/* Store Buttons */}
          <div className="flex gap-4">
            {/* App Store */}
           <AppButton src={"/images/apple.svg"} app={"App Store"} small={"Download on the"}/>
<AppButton src={"/images/playstore.png"} app={" Google Play"} small={"Get it on"}/>
          </div>
        </div>

      </div>
      </div>
    </section>
  );
};

export default DownloadAppSection;
