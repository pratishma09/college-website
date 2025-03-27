"use client"
import Image from "next/image"
import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Quote } from "lucide-react"

const teamMembers = [
  {
    name: "Dr. Manju Dahal",
    role: "Principal",
    image: "/assets/team/principal.jpg",
    testimonial:
      "Acupuncture is one of the alternative treatments developed by Chinese medicine. Its popularity is increasing day by day in the world. This method has made it easier to treat diseases that are not curable by modern medical methods, mainly bone and joint diseases, nerve related diseases, arthritis, paralysis, back pain, insomnia, and drug addiction. The Constitution of Nepal has also acknowledged alternative medicine and it has been incorporated in the National Health Policy of the country. I have also been involved in this profession for the past 30 years and have experienced its effectiveness. With an objective of developing skill based education, Acupuncture college was established by the service center in Jorpati, Dakshindhoka, Kathmandu in 2070 B.S. with an aim of promoting reasonable, employment backed education to provide solace to the problem of brain drain in a developing country like ours. Since it is also necessary to spread public awareness about this method of treatment, I believe that this published material will be useful.",
    department: "Administration",
    isPrincipal: true,
  },
  {
    name: "Prof. Priya Adhikari",
    role: "Head of Acupuncture Studies",
    image: "/placeholder.svg?height=400&width=400",
    department: "Faculty",
  },
  {
    name: "Dr. Rajesh Gurung",
    role: "Clinical Director",
    image: "/placeholder.svg?height=400&width=400",
    department: "Clinical Staff",
  },
  {
    name: "Ms. Sita Basnet",
    role: "Student Affairs Coordinator",
    image: "/placeholder.svg?height=400&width=400",
    department: "Administration",
  },
  {
    name: "Dr. Anup Thapa",
    role: "Research Head",
    image: "/placeholder.svg?height=400&width=400",
    department: "Faculty",
  },
  {
    name: "Nurse Kamala Magar",
    role: "Clinical Instructor",
    image: "/placeholder.svg?height=400&width=400",
    department: "Clinical Staff",
  },
]

const OurTeam = () => {
  const principal = teamMembers.find((member) => member.isPrincipal)
  const staff = teamMembers.filter((member) => !member.isPrincipal)

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
                    <p className="text-green-600">{principal.role}</p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        )}

        {/* Staff Members Grid */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <h3 className="text-2xl font-semibold text-stone-800 text-center mb-10">Our Staff</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {staff.map((member, index) => (
              <motion.div
                key={member.name}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card className="overflow-hidden hover:shadow-lg transition-all duration-300 transform hover:-translate-y-2">
                  <CardContent className="p-0">
                    <div className="relative h-48 overflow-hidden">
                      <Image
                        src={member.image || "/placeholder.svg"}
                        alt={member.name}
                        layout="fill"
                        objectFit="cover"
                        className="transition-transform duration-300 hover:scale-110"
                      />
                    </div>
                    <div className="p-6 relative">
                      <Avatar className="w-20 h-20 border-4 border-white shadow-lg absolute -top-10 left-1/2 transform -translate-x-1/2">
                        <AvatarImage src={member.image} alt={member.name} />
                        <AvatarFallback>
                          {member.name
                            .split(" ")
                            .map((n) => n[0])
                            .join("")}
                        </AvatarFallback>
                      </Avatar>
                      <div className="mt-12 text-center">
                        <h3 className="text-xl font-semibold text-stone-800 mb-1">{member.name}</h3>
                        <p className="text-green-600">{member.role}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default OurTeam;