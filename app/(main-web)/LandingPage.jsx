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
import DownloadAppSection from "../components/Landing-Components/DownloadAppSection";

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
          <Testimonial />
          <SchoolAura_section/>
          <WhyChooseUs />
          <VedioSection />
          <Get_In_Touch />
          <DownloadAppSection />
          <Footer />
        </div>
      </main>
    </>
  );
}
