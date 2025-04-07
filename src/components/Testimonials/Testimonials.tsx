"use client"
import { motion } from "framer-motion"
import TestimonialCard from "./TestimonialCard"

const testimonials = [
  {
    quote:
      "Studying at the Rural Health Education and Service Center has been an incredible journey of growth and learning. The teachers here are not just knowledgeable but also genuinely supportive, making it easy to grasp both the theoretical and practical aspects of the course. The hands-on training I've received has been invaluable, helping me build the confidence to apply these skills in real-life situations. The collaborative environment among students has been equally inspiring, creating lasting friendships and a shared passion for holistic healthcare. This experience has not only enhanced my understanding of alternative healing but has also prepared me to make a positive impact in the lives of others.",
    author: "Smriti Upreti",
    graduationYear: "",
    specialty: "Third Year",
    avatar: "/assets/testimonial/third.jpg",
  },
  {
    quote:
      "Before joining, I was drawn to the holistic approach of Traditional Chinese Medicine and the profound impact it can have on people's lives. The faculty here are not just teachers, but experienced practitioners who are passionate about sharing their knowledge. They create a supportive and engaging learning environment that encourages critical thinking and hands-on experience. The curriculum is comprehensive, covering a wide range of topics from acupuncture theory and practical techniques to moxibustion and herbal medicine. The practical training sessions are invaluable, providing me with the opportunity to develop my skills and gain confidence in my abilities.",
    author: "Bikrant Maharjan",
    graduationYear: "",
    specialty: "Second Year",
    avatar: "/assets/testimonial/second.jpg",
  },
  {
    quote:
      "Pursuing a Diploma in Acupuncture, Acupressure, and Moxibustion has been a deliberate and purposeful choice. The holistic approach of these disciplines resonates deeply with my desire to promote natural, non-invasive healing methods that prioritize overall well-being. These ancient techniques, backed by modern research, offer a unique and effective means to address various health concerns while complementing conventional medicine. I chose this course to gain the knowledge and skills necessary to help alleviate pain, restore balance, and enhance the quality of life for individuals. The Rural Health Education and Service Center has provided the perfect platform to achieve this goal, equipping me with the tools and confidence to make a meaningful impact in the field of alternative healthcare.",
    author: "Tsering Tiki Gurung",
    graduationYear: "",
    specialty: "First Year",
    avatar: "/assets/testimonial/first.jpg",
  },
]

export default function TestimonialsSection() {
  return (
    <section className="py-20 bg-gradient-to-b from-green-50 to-stone-100 overflow-hidden relative">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <span className="block mb-2 text-green-600 font-medium">TESTIMONIALS</span>
          <h2 className="text-4xl font-bold text-stone-800 mb-4">Voices of Our Students</h2>
          <p className="text-stone-600 text-lg">
            Hear from our students about their transformative experiences learning the art and science of acupuncture.
          </p>
        </div>

        {/* Stacked Testimonials */}
        <div className="space-y-16">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
            >
              {/* Alternate layout direction for visual interest */}
              <TestimonialCard {...testimonial} layout={index % 2 === 0 ? "default" : "default"} />
            </motion.div>
          ))}
        </div>
      </div>

      {/* Background Decorative Elements */}
      <div className="absolute -top-20 -left-20 w-64 h-64 rounded-full bg-green-200 opacity-20 blur-3xl"></div>
      <div className="absolute -bottom-32 -right-20 w-80 h-80 rounded-full bg-green-300 opacity-20 blur-3xl"></div>
    </section>
  )
}

