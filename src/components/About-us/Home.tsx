import Image from 'next/image'
import Link from 'next/link'

export default function AboutUsDetails() {
  return (
    <div className="bg-gradient-to-br from-green-100 via-green-200 to-green-300 py-20">
      {/* Why Choose Us Section */}
      <section className="container mx-auto px-6 lg:px-12 mb-10">
        <div className="text-center mb-12">
          <h2 className="text-5xl font-bold text-green-800 relative">
            Why Choose Us?
            {/* <div className="absolute inset-x-0 bottom-0 w-1/3 mx-auto h-1 bg-gradient-to-r from-green-400 to-green-600"></div> */}
          </h2>
        </div>

        {/* Split Layout with Image on One Side and Text on Other */}
        <div className="flex flex-col lg:flex-row justify-between items-center">
          {/* Left Section with Image */}
          <div className="lg:w-1/2 mb-8 lg:mb-0">
            <div className="relative w-full h-[22rem] rounded-lg overflow-hidden">
              <Image
                src="/assets/cover.jpg" // Replace with your image path
                alt="Why Choose Us"
                layout="fill"
                objectFit="cover"
                className="transform hover:scale-105 transition-all duration-300"
              />
            </div>
          </div>

          {/* Right Section with Text */}
          <div className="lg:w-1/2 px-4">
            <p className="text-xl text-stone-700 mb-6 leading-relaxed">
              As Nepal’s first acupuncture college, we provide an unmatched education, emphasizing a holistic approach to health and wellness. Our expert faculty members are committed to offering personalized guidance to help you succeed.
            </p>

            <p className="text-xl text-stone-700 mb-6 leading-relaxed">
              With over 120 successful graduates practicing acupuncture worldwide, our college provides the knowledge and experience you need to start a rewarding career in healthcare.
            </p>

            <Link href="/contact">
              <p className="inline-block mt-8 py-3 px-6 bg-green-600 text-white rounded-full shadow-lg transform hover:bg-green-700 hover:scale-105 transition-all duration-300">
                Get In Touch
              </p>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
