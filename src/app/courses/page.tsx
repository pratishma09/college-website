import React from 'react';
import { Book, Clock, Calendar, Award } from 'lucide-react';
import CourseCard from '@/components/Courses/CourseCard';

const courses = [
  {
    title: "Diploma in Acupuncture",
    duration: "2 Years",
    schedule: "Full-time",
    description: "A comprehensive program covering the fundamentals of acupuncture theory and practice.",
    modules: [
      "Introduction to Traditional Chinese Medicine",
      "Acupuncture Points and Meridians",
      "Diagnosis and Treatment Planning",
      "Clinical Practice and Ethics"
    ]
  },
  
];

const CourseCurriculum = () => {
  return (
    <section className="bg-gradient-to-b from-green-50 to-green-100 py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-stone-800 mb-4">Our Courses and Curriculum</h1>
          <p className="text-xl text-stone-600 max-w-3xl mx-auto">
            Discover our comprehensive programs designed to cultivate skilled practitioners in acupuncture and Oriental medicine.
          </p>
        </div>
        <div className="my-16 bg-white rounded-lg shadow-lg p-8">
          <h2 className="text-3xl font-bold text-stone-800 mb-6">Why Choose Our Programs?</h2>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {[
              { icon: Book, title: "Comprehensive Curriculum", description: "Covering both traditional wisdom and modern techniques" },
              { icon: Clock, title: "Flexible Schedules", description: "Options for full-time and part-time study to fit your life" },
              { icon: Award, title: "Experienced Faculty", description: "Learn from practicing professionals in the field" },
              { icon: Calendar, title: "Hands-on Experience", description: "Extensive clinical practice opportunities" }
            ].map((feature, index) => (
              <div key={index} className="flex flex-col items-center text-center">
                <div className="bg-green-100 rounded-full p-3 mb-4">
                  <feature.icon className="w-8 h-8 text-green-600" />
                </div>
                <h3 className="text-lg font-semibold text-stone-800 mb-2">{feature.title}</h3>
                <p className="text-stone-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>

        
          {courses.map((course, index) => (
            <CourseCard key={index} {...course} />
          ))}


        

        {/* <div className="mt-16 text-center">
          <a href="#" className="inline-block bg-green-600 text-white font-semibold py-3 px-8 rounded-md hover:bg-green-700 transition duration-300 ease-in-out transform hover:-translate-y-1 hover:shadow-lg">
            Apply Now
          </a>
        </div> */}
      </div>
    </section>
  );
};

export default CourseCurriculum;

