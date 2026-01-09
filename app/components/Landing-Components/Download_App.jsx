"use client";
import React from "react";
import Mobile_App from "./sub_Components/Mobile_App";



const Download_App = () => {
const apps = [{
  gradientFrom: "#000DFF",
  gradientTo: "#11005E",
  textColor: "text-white",
  reverse: false, // controls order
  image1: "/images/download1.webp",
  image2: "/images/download2.webp",
  appStore: "https://play.google.com/store/apps/details?id=com.st_schoolaura&hl=en_IN",
  playStore: "https://play.google.com/store/apps/details?id=com.st_schoolaura&hl=en_IN",
},{
  gradientFrom: "#F29800",
  gradientTo: "#FFE0AD",
  textColor: "text-black",
  reverse: true, // controls order
  image1: "/images/teacherApp1.png",
  image2: "/images/teacherApp2.png",
  appStore: "https://play.google.com/store/apps/details?id=com.st_schoolaura&hl=en_IN",
  playStore: "https://play.google.com/store/apps/details?id=com.st_schoolaura&hl=en_IN",
}];

  return (
    <>
     <Mobile_App app={apps[0]}/>
       <div className="mt-[100px] lg:mt-[150px] xl:mt-[200px]"></div>
   <Mobile_App app={apps[1]}/>
    </>
  
  );
};

export default Download_App;
