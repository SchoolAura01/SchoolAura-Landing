import Image from "next/image";
import AppButton from "./sub_Components/AppButton";

const DownloadAppSection = () => {
  return (
    <section className="w-full mb-10 bg-white py-20 my-20">
        <div className="container mx-auto w-[80%]">
      <div className="relative w-full h-[320px] rounded-3xl bg-gradient-to-r from-[#000DFF] to-[#11005E] flex flex-col lg:flex-row items-center">

        {/* LEFT – Mobile Images */}
        <div className="relative w-full lg:w-1/2 flex justify-center items-center py-12 -translate-y-10">
          <div className="relative w-[220px] h-[420px] -rotate-[8deg] z-10 ">
            <Image
              src="/images/download1.webp" // replace with your image
              alt="App Screen"
              fill
              className="object-contain drop-shadow-[0_5px_10px_rgba(0,0,0,0.25)]"
            />
          </div>

          {/* Second phone */}
          <div className="relative w-[220px] h-[420px] rotate-[11.8deg] -ml-16 translate-y-12">
            <Image
              src="/images/download2.webp" // replace with your image
              alt="App Screen"
              fill
              className="object-contain drop-shadow-[0_5px_10px_rgba(0,0,0,0.25)]"
            />
          </div>
        </div>

        {/* RIGHT – Content */}
        <div className="w-full lg:w-1/2 text-white">
          <h2 className="text-3xl sm:text-5xl font-semibold mb-4">
            Download Our <br /> App Now
          </h2>

          <p className="text-sm text-white/90 max-w-md mb-8">
            Please feel free to download our app on the app store or
            google play store to evaluate our product.
          </p>

          {/* Store Buttons */}
          <div className="flex flex-wrap gap-4">
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
