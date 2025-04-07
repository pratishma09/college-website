import { Book, Clock, Calendar, Award } from "lucide-react"
import CourseCard from "@/components/Courses/CourseCard"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

const courses = [
  {
    title: "Diploma in Acupuncture",
    duration: "3 Years",
    schedule: "Full-time",
    description:
      "A comprehensive program covering the fundamentals of acupuncture theory and practice, designed to prepare students for professional practice in the field of Oriental medicine.",
    modules: [
      
      "Methods of Acupuncture and Moxibustion",
      "Identification and Collection of Moxa plant",
      "Clinical Pathology",
      "Meridian and Acupoints",
    ],
  },
]

const courseStructure = {
  firstYear: [
    "English",
    "Nepali",
    "Social Studies",
    "Anatomy & Physiology",
    "Physics",
    "Chemistry",
    "Zoology",
    "Botany",
    "Mathematics, Statistics & Computer Application",
  ],
  secondYear: [
    "Identification and Collection of Moxa plant",
    "Basic Theory of Oriental Medicine",
    "Meridian and Acupoints",
    "Methods of Diagnosis in Acupuncture and Moxibustion",
    "Diagnosis of acupuncture",
    "Acupuncture and Moxibustion Theraputics I",
    "Clinical Pathology",
    "General Medicine",
  ],
  thirdYear: [
    "Methods of Acupuncture and Moxibustion",
    "Acupuncture and Moxibustion Theraputics II",
    "Health Care Systems and Management",
    "Community Medicine",
    "Community Field Practice",
    "Clinical Practice",
  ],
}

const CourseCurriculum = () => {
  return (
    <section className="bg-gradient-to-b from-green-50 to-green-100 py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-stone-800 mb-4">Our Courses and Curriculum</h1>
          <p className="text-xl text-stone-600 max-w-3xl mx-auto">
            Discover our comprehensive programs designed to cultivate skilled practitioners in acupuncture and Oriental
            medicine.
          </p>
        </div>

        <div className="my-16 bg-white rounded-lg shadow-lg p-8">
          <h2 className="text-3xl font-bold text-stone-800 mb-6">Why Choose Our Programs?</h2>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {[
              {
                icon: Book,
                title: "Comprehensive Curriculum",
                description: "Covering both traditional wisdom and modern techniques",
              },
              {
                icon: Clock,
                title: "Flexible Schedules",
                description: "Options for full-time and part-time study to fit your life",
              },
              {
                icon: Award,
                title: "Experienced Faculty",
                description: "Learn from practicing professionals in the field",
              },
              {
                icon: Calendar,
                title: "Hands-on Experience",
                description: "Extensive clinical practice opportunities",
              },
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

        <div className="mb-16">
          {courses.map((course, index) => (
            <CourseCard key={index} {...course} />
          ))}
        </div>

        {/* Detailed Course Structure */}
        <div className="bg-white rounded-lg shadow-lg p-8 mb-16">
          <h2 className="text-3xl font-bold text-stone-800 mb-6">Course Structure</h2>
          <p className="text-stone-600 mb-8">
            Our Diploma in Acupuncture follows a carefully structured curriculum that builds from foundational knowledge
            to advanced clinical practice over three years.
          </p>

          <Accordion type="single" collapsible className="w-full">
            <AccordionItem value="first-year">
              <AccordionTrigger className="text-xl font-semibold text-green-700 hover:text-green-800 py-4 border-b border-green-100">
                First Year
              </AccordionTrigger>
              <AccordionContent className="pt-4 pb-2">
                <p className="text-stone-600 mb-4">
                  The first year focuses on building a strong foundation in basic sciences and general subjects that
                  provide the groundwork for specialized acupuncture studies.
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                  {courseStructure.firstYear.map((subject, index) => (
                    <div key={index} className="bg-green-50 rounded-lg p-4 flex items-center">
                      {/* <div className="w-2 h-2 rounded-full bg-green-500 mr-3"></div> */}
                      <span className="text-stone-700">{subject}</span>
                    </div>
                  ))}
                </div>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="second-year">
              <AccordionTrigger className="text-xl font-semibold text-green-700 hover:text-green-800 py-4 border-b border-green-100">
                Second Year
              </AccordionTrigger>
              <AccordionContent className="pt-4 pb-2">
                <p className="text-stone-600 mb-4">
                  The second year introduces specialized acupuncture theory and practice, focusing on Oriental medicine
                  principles, meridians, and diagnostic methods.
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {courseStructure.secondYear.map((subject, index) => (
                    <div key={index} className="bg-green-50 rounded-lg p-4 flex items-center">
                      {/* <div className="w-2 h-2 rounded-full bg-green-500 mr-3"></div> */}
                      <span className="text-stone-700">{subject}</span>
                    </div>
                  ))}
                </div>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="third-year">
              <AccordionTrigger className="text-xl font-semibold text-green-700 hover:text-green-800 py-4 border-b border-green-100">
                Third Year
              </AccordionTrigger>
              <AccordionContent className="pt-4 pb-2">
                <p className="text-stone-600 mb-4">
                  The third year emphasizes advanced therapeutic techniques, clinical practice, and community health
                  applications, preparing students for professional practice.
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {courseStructure.thirdYear.map((subject, index) => (
                    <div key={index} className="bg-green-50 rounded-lg p-4 flex items-center">
                      {/* <div className="w-2 h-2 rounded-full bg-green-500 mr-3"></div> */}
                      <span className="text-stone-700">{subject}</span>
                    </div>
                  ))}
                </div>
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>

        {/* Call to Action */}
       
      </div>
    </section>
  )
}

export default CourseCurriculum

