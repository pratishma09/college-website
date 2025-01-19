import TestimonialCard from './TestimonialCard'

const testimonials = [
  {
    quote: "Studying acupuncture at Nepal's first acupuncture college was a life-changing experience. The knowledge and skills I gained have allowed me to help so many people in my community.",
    author: "Aarav Sharma",
    graduationYear: "2020",
    specialty: "Pain Management Specialist",
    avatar: "/placeholder.svg?height=64&width=64"
  },
  {
    quote: "The holistic approach to healing that I learned at this college has transformed my practice. I'm grateful for the comprehensive education in both traditional and modern techniques.",
    author: "Sita Gurung",
    graduationYear: "2019",
    specialty: "Women's Health Expert",
    avatar: "/placeholder.svg?height=64&width=64"
  },
  {
    quote: "As a graduate, I feel well-prepared to address a wide range of health issues. The college's emphasis on practical experience alongside theory was invaluable.",
    author: "Bijay Thapa",
    graduationYear: "2021",
    specialty: "Sports Injury Therapist",
    avatar: "/placeholder.svg?height=64&width=64"
  }
]

export default function TestimonialsSection() {
  return (
    <section className="py-16 bg-stone-100">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center text-stone-800 mb-12">
          Voices of Our Graduates
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

