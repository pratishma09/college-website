"use client"
import Image from "next/image"
import { motion } from "framer-motion"
import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Quote, Phone, User } from "lucide-react"

// Updated team members data with teaching year information
const teamMembers = [
  {
    name: "Dr. Manju Dahal",
    role: "Principal",
    image: "/assets/team/principal.jpg",
    testimonial:
      "Acupuncture is one of the alternative treatments developed by Chinese medicine. Its popularity is increasing day by day in the world. This method has made it easier to treat diseases that are not curable by modern medical methods, mainly bone and joint diseases, nerve related diseases, arthritis, paralysis, back pain, insomnia, and drug addiction. The Constitution of Nepal has also acknowledged alternative medicine and it has been incorporated in the National Health Policy of the country. I have also been involved in this profession for the past 30 years and have experienced its effectiveness. With an objective of developing skill based education, Acupuncture college was established by the service center in Jorpati, Dakshindhoka, Kathmandu in 2070 B.S. with an aim of promoting reasonable, employment backed education to provide solace to the problem of brain drain in a developing country like ours. Since it is also necessary to spread public awareness about this method of treatment, I believe that this published material will be useful.",
      isPrincipal: true,
  },
  {
    name: "Dr. Radhye Shyam Shilpakar",
    role: "MD, Acupuncture",
    image: "/assets/team/radhye.jpg",
    testimonial:
      "Acupuncture is a traditional Chinese medicine (TCM) practice that involves inserting thin needles into specific points on the body to promote healing and balance energy flow, known as Qi (Chi). Acupuncture has gained significant recognition in Nepal, blending traditional Chinese medicine with local healthcare practices. As an acupuncture educator, I have witnessed  the profound impact this ancient healing practice has on individuals and communities. Teaching at Rural Health Education and Service Center  has been a deeply fulfilling experience, as I get to mentor passionate students who are eager to transform lives through holistic medicine.The curriculum taught at Rural Health Education and Service Center  blends traditional wisdom with modern clinical applications, ensuring that students graduate with both theoretical knowledge and hands-on expertise. Seeing my students develop their skills and go on to help people heal naturally is the greatest reward. If you’re looking for a career in acupuncture, Rural Health Education and Service Center provides the best foundation to start your journey!",
    teachingYear: "Year 2 ",
    hasTestimonial:false,
    phone: "+977 9841693700",
  },
  {
    name: "Dr. Kashi Khatiwada",
    role: "Head of Acupuncture Studies",
    teachingYear: "Year 2 & 3 ",
    phone: "+977 9860347056",
    
  },
  {
    name: "Dr. Jhularam Adhikari",
    role: "Head of Acupuncture Studies",
    teachingYear: "Year 2",
    phone: "+977 9841226735",
  },
  {
    name: "Dr. Varun Upadhaya",
    role: "Head of Acupuncture Studies",
    teachingYear: "Year 2 & 3",
    phone: "+977 9808453315",
  },
  {
    name: "Dr. Suraj Karanjit",
    role: "Head of Acupuncture Studies",
    teachingYear: "Year 2",
    phone: "+977 9866473457",
  },
  {
    name: "Dr. Sharad Gajurel",
    role: "Head of Acupuncture Studies",
    teachingYear: "Year 3",
    phone: "+977 9841693700",
  },
]

const OurTeam = () => {
  const principal = teamMembers.find((member) => member.isPrincipal)
  const featuredStaff = teamMembers.find((member) => member.hasTestimonial)
  const regularFaculty = teamMembers.filter((member) => !member.isPrincipal && !member.hasTestimonial)

  return (
    <section className="overflow-hidden py-16 bg-gradient-to-br from-green-50 to-stone-100">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <span className="block mb-4 text-lg font-semibold text-green-600">Our Team</span>
          <h2 className="mb-6 text-3xl font-bold text-stone-800 sm:text-4xl">Meet the Healers and Educators</h2>
          <p className="max-w-2xl mx-auto text-base text-stone-600">
            Our diverse team of experienced practitioners and educators are dedicated to nurturing the next generation
            of acupuncture professionals.
          </p>
        </motion.div>

        {/* Principal's Testimonial Section */}
        {principal && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="mb-16"
          >
            <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
              <div className="flex flex-col md:flex-row">
                <div className="md:w-1/3 relative h-64 md:h-auto">
                  <Image
                    src={principal.image || "/placeholder.svg"}
                    alt={principal.name}
                    layout="fill"
                    objectFit="cover"
                    className="h-full w-full"
                  />
                </div>
                <div className="md:w-2/3 p-8 md:p-10">
                  <div className="flex items-start mb-6">
                    <Quote className="text-green-500 w-10 h-10 mr-4 flex-shrink-0" />
                    <p className="text-stone-700 italic">{principal.testimonial}</p>
                  </div>
                  <div className="mt-6">
                    <h3 className="text-xl font-semibold text-stone-800">{principal.name}</h3>
                    <p className="text-green-600 mb-3">{principal.role}</p>
                    <div className="flex items-center">
                      <a
                        href={`tel:${principal.phone}`}
                        className="flex items-center text-stone-600 hover:text-green-600 transition-colors duration-300"
                      >
                        {principal.phone && (
                          <>
                            <Phone className="w-4 h-4 mr-2" />
                            <span>{principal.phone}</span>
                          </>
                        )}
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        )}

        {/* Featured Staff Member Testimonial */}
        {featuredStaff && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="mb-16"
          >
            <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
              <div className="flex flex-col md:flex-row-reverse">
                {" "}
                {/* Reversed layout for visual variety */}
                <div className="md:w-1/3 relative h-64 md:h-auto">
                  <Image
                    src={featuredStaff.image || "/placeholder.svg"}
                    alt={featuredStaff.name}
                    layout="fill"
                    objectFit="cover"
                    className="h-full w-full"
                  />
                </div>
                <div className="md:w-2/3 p-8 md:p-10">
                  <div className="flex items-start mb-6">
                    <Quote className="text-green-500 w-10 h-10 mr-4 flex-shrink-0" />
                    <p className="text-stone-700 italic">{featuredStaff.testimonial}</p>
                  </div>
                  <div className="mt-6">
                    <h3 className="text-xl font-semibold text-stone-800">{featuredStaff.name}</h3>
                    <p className="text-green-600 mb-3">{featuredStaff.role}</p>
                    <div className="flex items-center justify-between">
                      <Badge variant="outline" className="bg-green-50 text-green-700 border-green-200 px-3 py-1">
                        {featuredStaff.teachingYear}
                      </Badge>

                      <a
                        href={`tel:${featuredStaff.phone}`}
                        className="text-stone-500 hover:text-green-600 transition-colors duration-300 text-sm flex items-center"
                      >
                        <Phone className="w-4 h-4 mr-1" />
                        {featuredStaff.phone}
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        )}

        {/* Faculty Members */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <Card className="p-6 shadow-md">
            <h3 className="text-xl font-semibold text-green-700 mb-6 pb-2 border-b border-green-100">More Faculty</h3>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {regularFaculty.map((member, index) => (
                <motion.div
                  key={member.name}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3, delay: index * 0.1 }}
                  className="flex items-center p-4 rounded-lg bg-white shadow-sm hover:shadow transition-all duration-200"
                >
                  <div className="w-10 h-10 rounded-full bg-green-100 flex items-center justify-center text-green-700 mr-4 flex-shrink-0">
                    <User className="w-5 h-5" />
                  </div>

                  <div className="flex-grow">
                    <h4 className="font-medium text-stone-800">{member.name}</h4>
                    <p className="text-sm text-stone-600">Teaching Staff</p>
                  </div>

                  <div className="flex flex-col items-end gap-2">
                    <Badge variant="outline" className="bg-green-50 text-green-700 border-green-200 px-3 py-1">
                      {member.teachingYear}
                    </Badge>

                    <a
                      href={`tel:${member.phone}`}
                      className="text-stone-500 hover:text-green-600 transition-colors duration-300 text-sm flex items-center"
                    >
                      <Phone className="w-4 h-4 mr-1" />
                      {member.phone}
                    </a>
                  </div>
                </motion.div>
              ))}
            </div>
          </Card>
        </motion.div>
      </div>
    </section>
  )
}

export default OurTeam

