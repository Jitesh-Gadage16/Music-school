import Image from "next/image";
import HeroSection from "./components/HeroSection";
import FeaturedCourses from "./components/FeaturedCourses";
import WhyChooseUs from "./components/WhyChooseUs";
import TestimonialCards from "./components/TestimonialCards";
import UpcomingWebinars from "./components/UpcomingWebinars";
import Instructors from "./components/Instructors";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-black/[0.96] antialiased bg-grid-white/[0.02]">

      <HeroSection />

      <FeaturedCourses data-gramm="false" />
      <WhyChooseUs data-gramm="false" />
      <TestimonialCards data-gramm="false" />
      <UpcomingWebinars data-gramm="false" />
      <Instructors data-gramm="false" />
      <Footer data-gramm="false" />

    </main>
  );
}
