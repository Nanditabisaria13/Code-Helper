import React from "react";
import Navbar from "../../components/Common/Navbar";
import Hero from "../../components/Common/Hero";
import Features from "../../components/Common/Features";
import Working from "../../components/Common/Working";
import AboutUs from "../../components/Common/AboutUs";
import Testimonials from "../../components/Common/Testimonials";
import Footer from "../../components/Common/Footer";

const Home = () => {
  return (
    <div className="w-full h-full p-2">
      <Navbar />
      <Hero />
      <Features />
      <Working />
      <AboutUs />
      <Testimonials />
      <Footer />
    </div>
  );
};

export default Home;
