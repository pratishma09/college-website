import React from "react";
import Image from "next/image";

const AboutUs = () => {
  return (
    <section className="overflow-hidden py-16 bg-green-50">
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap items-center justify-between">
          <div className="w-full lg:w-1/2 mb-10 lg:mb-0">
            <div className="flex flex-wrap items-center justify-center lg:justify-start">
              <div className="w-full sm:w-1/2 px-2 mb-4 sm:mb-0">
                <Image
                  src="/placeholder.svg?height=400&width=300"
                  alt="Students practicing acupuncture"
                  width={300}
                  height={400}
                  className="rounded-lg shadow-lg"
                />
              </div>
              <div className="w-full sm:w-1/2 px-2">
                <Image
                  src="/placeholder.svg?height=300&width=300"
                  alt="Acupuncture needles"
                  width={300}
                  height={300}
                  className="rounded-lg shadow-lg mb-4"
                />
                <Image
                  src="/placeholder.svg?height=200&width=300"
                  alt="College building"
                  width={300}
                  height={200}
                  className="rounded-lg shadow-lg"
                />
              </div>
            </div>
          </div>
          
          <div className="w-full lg:w-1/2 lg:pl-10">
            <span className="block mb-4 text-lg font-semibold text-green-600">
              About Our College
            </span>
            <h2 className="mb-6 text-3xl font-bold text-stone-800 sm:text-4xl">
              Nepal&apos;s First Acupuncture College: Healing Traditions, Modern Education
            </h2>
            <p className="mb-6 text-base text-stone-600">
              Founded in 2005, our college is the pioneer institution for acupuncture education in Nepal. We blend traditional Eastern healing wisdom with modern medical knowledge, providing a comprehensive education that prepares our students for successful careers in acupuncture and traditional medicine.
            </p>
            <p className="mb-8 text-base text-stone-600">
              Our state-of-the-art facilities, experienced faculty, and hands-on clinical training ensure that our graduates are well-equipped to make a positive impact on the health and well-being of their communities.
            </p>
            <div className="flex flex-wrap mb-8">
              {["Experienced Faculty", "Modern Facilities", "Hands-on Training", "Holistic Approach"].map((feature, index) => (
                <div key={index} className="w-full sm:w-1/2 mb-4 flex items-center">
                  <svg className="w-5 h-5 mr-2 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span className="text-stone-700">{feature}</span>
                </div>
              ))}
            </div>
            <a
              href="#contact"
              className="inline-flex items-center justify-center py-3 px-6 text-base font-semibold text-white bg-green-600 rounded-md hover:bg-green-700 transition duration-300 ease-in-out"
            >
              Learn More About Us
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
