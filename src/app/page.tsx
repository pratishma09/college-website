// import Image from "next/image";
// import ContactForm from "./pages/ContactPage";
import AboutUsDetails from "@/components/About-us/Home";
import Testimonials from "../components/Testimonials/Testimonials";
// import About from "./about-us/page";
// import CourseCurriculum from "@/components/Courses/Course";
import HeroSection from "@/components/Home/HeroSection";
import Sponsors from "@/components/About-us/Sponsors";

export default function Home() {
  return (
    <div>
      {/* <ContactForm/> */}
      <HeroSection/>
      <AboutUsDetails/>
      {/* <About/> */}
      <Testimonials/>
      <Sponsors/>
      {/* <CourseCurriculum/> */}
    </div>
  );
}
