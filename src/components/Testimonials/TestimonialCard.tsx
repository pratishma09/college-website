import Image from 'next/image'

interface TestimonialCardProps {
  quote: string
  author: string
  graduationYear: string
  specialty: string
  avatar: string
}

export default function TestimonialCard({ quote, author, graduationYear, specialty, avatar }: TestimonialCardProps) {
  return (
    <div className="relative mx-auto mt-8 rounded-lg shadow-lg max-w-sm p-8 bg-gradient-to-r from-green-50 to-green-100  text-stone-700 leading-relaxed flex flex-col justify-between overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-green-300 via-green-400 to-green-300"></div>
      <div className="absolute -right-4 -top-4 w-24 h-24 border-4 border-green-200 rounded-full"></div>
      <div className="absolute -left-2 -bottom-2 w-16 h-16 border-4 border-green-200 rounded-full"></div>
      
      {/* Acupuncture needle decoration */}
      <div className="absolute right-4 bottom-4 w-px h-16 bg-gradient-to-b from-gray-300 to-gray-400 transform rotate-45"></div>
      <div className="absolute right-8 bottom-4 w-px h-20 bg-gradient-to-b from-gray-300 to-gray-400 transform rotate-45"></div>

      {/* Quote icon */}
      <div className="-ml-1 mb-4">
        <svg className="w-8 text-green-500" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 4a2 2 0 114 0v1a1 1 0 001 1h3a1 1 0 011 1v3a1 1 0 01-1 1h-1a2 2 0 100 4h1a1 1 0 011 1v3a1 1 0 01-1 1h-3a1 1 0 01-1-1v-1a2 2 0 10-4 0v1a1 1 0 01-1 1H7a1 1 0 01-1-1v-3a1 1 0 00-1-1H4a2 2 0 110-4h1a1 1 0 001-1V7a1 1 0 011-1h3a1 1 0 001-1V4z" />
        </svg>
      </div>

      {/* Quote text */}
      <div className="mb-6 relative z-10">
        {quote}
      </div>

      {/* Divider */}
      <div className="w-1/4 h-px bg-green-300 my-4"></div>

      {/* Author info */}
      <div className="flex items-center relative z-10">
        <Image 
          className="w-16 h-16 rounded-full border-2 border-green-300 object-cover"
          src={avatar || "/placeholder.svg"}
          alt={`Avatar of ${author}`}
          width={64}
          height={64}
        />
        <div className="ml-4">
          <div className="font-bold text-lg">{author}</div>
          <div className="text-sm text-stone-600">
            Class of {graduationYear}
          </div>
          <div className="text-sm text-green-700 mt-1">
            {specialty}
          </div>
        </div>
      </div>
    </div>
  )
}

