import TestimonialCard from './TestimonialCard'

const testimonials = [
  {
    quote: "The Rural Health Education and Service Center has been instrumental in my journey, providing hands-on training and a holistic approach to healing. This experience has empowered me to confidently apply acupuncture, acupressure, and moxibustion to make a positive impact in alternative healthcare.",
    author: "Smriti Upreti",
    graduationYear: "",
    specialty: "Third Year",
    avatar: "/placeholder.svg?height=64&width=64"
  },
  {
    quote: "Choosing this path was a defining moment, and I’m grateful to have found this college. The experienced faculty, hands-on training, and supportive community have deepened my understanding of Traditional Chinese Medicine. My education at the Rural Health Education and Service Center is equipping me with the skills and confidence to make a meaningful impact in this field.",
    author: "Bikrant Maharjan",
    graduationYear: "",
    specialty: "Second Year",
    avatar: "/assets/testimonial/second.jpg"
  },
  {
    quote: "Studying at the Rural Health Education and Service Center has been an incredible journey of growth. The supportive teachers and hands-on training have built my confidence in applying acupuncture, acupressure, and moxibustion skills. This holistic approach to healing aligns with my passion for natural, non-invasive care. ",
    author: "Tsering Tiki Gurung",
    graduationYear: "",
    specialty: "First Year",
    avatar: "/assets/testimonial/first.jpg"
  }
]

export default function TestimonialsSection() {
  return (
    <section className="py-16 bg-stone-100">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center text-stone-800 mb-12">
          Voices of Our Students
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <TestimonialCard key={index} {...testimonial} />
          ))}
        </div>
      </div>
    </section>
  )
}

