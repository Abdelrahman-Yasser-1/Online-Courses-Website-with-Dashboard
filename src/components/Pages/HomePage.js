import { Container } from "reactstrap";

// Components
import React from "react";
import Panner from "../Panner/Panner";
import MyNavbar from "../MyNavbar/MyNavbar";
import HeroSection from "../HeroSection/HeroSection";
import BrandsSection from "../BrandsSection/BrandsSection";
import VideoSection from "../VideoSection/VideoSection";
import BenefitsSection from "../BenefitsSection/BenefitsSection";
import CoursesSection from "../CoursesSection/CoursesSection";
import TestimonialsSection from "../TestimonialsSection/TestimonialsSection";
import PricingSection from "../PricingSection/PricingSection";
import FAQSection from "../FAQSection/FAQSection";
import Footer from "../Footer/Footer";

const HomePage = () => {
  return (
    <>
      <Panner text="Free Courses 🌟 Sale Ends Soon, Get It Now" />
      <MyNavbar />
      <Container className="mb-5">
        <HeroSection />
        <BrandsSection />
        <VideoSection />
        <BenefitsSection />
        <CoursesSection />
        <TestimonialsSection />
        <PricingSection />
        <FAQSection />
      </Container>
      <Footer />
    </>
  );
};

export default HomePage;
