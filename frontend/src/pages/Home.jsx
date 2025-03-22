import React from "react";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Features from "../components/Features";
import Working from "../components/Working";
import AboutUs from "../components/AboutUs";
import Testimonials from "../components/Testimonials";
import Footer from "../components/Footer";

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
