import React from "react";
import Header from "../components/Header";
import HeroSection from "../components/Landing-Components/HeroSection";
import Dashboard_Section from "../components/Landing-Components/Dashboard_Section";
import Feature_Section from "../components/Landing-Components/Feature_Section";
import SchoolAura_section from "../components/Landing-Components/SchoolAura_section";
import Testimonial from "../components/Landing-Components/Testimonial";
import SchoolsList from "../components/Landing-Components/SchoolsList";
import WhyChooseUs from "../components/Landing-Components/WhyChooseUs";
import VedioSection from "../components/Landing-Components/VedioSection";
import Get_In_Touch from "../components/Landing-Components/Get_In_Touch";
import Footer from "../components/Footer";
import Download_StudentApp from "../components/Landing-Components/Download_StudentApp";
import Download_App from "../components/Landing-Components/Download_App";
import ERP_Schoolaura from "../components/Landing-Components/ERP_Schoolaura";

export default function LandingPage() {
  return (
    <>
      <Header />
      <main>
        <div className="h-20"></div>
        <HeroSection />
        <div className="">
          <SchoolsList />
          <Dashboard_Section />
          <Feature_Section/>
          <ERP_Schoolaura/>
          <Testimonial />
          <SchoolAura_section/>
          <WhyChooseUs />
          <VedioSection />
          <Get_In_Touch />
          <Download_App/>
          <Footer />
        </div>
      </main>
    </>
  );
}
