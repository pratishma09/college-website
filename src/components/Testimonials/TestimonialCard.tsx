import Image from "next/image"
import { Quote } from "lucide-react"

interface TestimonialCardProps {
  quote: string
  author: string
  specialty: string
  avatar: string
  layout?: "default" | "reverse"
}

export default function TestimonialCard({
  quote,
  author,
  specialty,
  avatar,
  layout = "default",
}: TestimonialCardProps) {
  const isReverse = layout === "reverse"

  return (
    <div className="bg-white rounded-xl shadow-lg overflow-hidden transition-all duration-300 hover:shadow-xl">
      <div className={`flex flex-col ${isReverse ? "md:flex-row-reverse" : "md:flex-row"}`}>
        {/* Image Section */}
        <div className="md:w-2/5 relative">
          <div className="relative h-72 md:h-full w-full">
            <Image
              src={avatar || "/placeholder.svg"}
              alt={`${author} - ${specialty}`}
              fill
              className="object-cover object-center"
            />
          </div>
          
          <div className={`absolute bottom-4 ${isReverse ? "right-4 md:right-6" : "left-4 md:left-6"} text-white`}>
            <p className="font-bold text-lg">{author}</p>
            <p className="text-green-100 text-sm">{specialty}</p>
          </div>
        </div>

        {/* Content Section */}
        <div className="md:w-3/5 p-6 md:p-8 flex flex-col justify-center">
          <div className="mb-4">
            <span className="inline-block px-3 py-1 bg-green-100 text-green-800 rounded-full text-sm font-medium">
              {specialty}
            </span>
          </div>

          <div className="relative">
            <Quote className="absolute -top-2 -left-2 w-8 h-8 text-green-200 opacity-70" />
            <p className="text-stone-700 italic text-lg leading-relaxed pl-6 mb-6">{quote}</p>
          </div>

          <div className="mt-auto pt-4 border-t border-green-100 flex items-center justify-between">
            <div className="md:hidden">
              <p className="font-bold text-stone-800">{author}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

