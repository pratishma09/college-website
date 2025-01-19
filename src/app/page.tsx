// import Image from "next/image";
// import ContactForm from "./pages/ContactPage";
import Testimonials from "../components/Testimonials/Testimonials";
// import About from "./about-us/page";
// import CourseCurriculum from "@/components/Courses/Course";
import HeroSection from "@/components/Home/HeroSection";

export default function Home() {
  return (
    <div>
      {/* <ContactForm/> */}
      <HeroSection/>
      {/* <About/> */}
      <Testimonials/>
      {/* <CourseCurriculum/> */}
    </div>
  );
}
