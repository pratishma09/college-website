'use client'

import React, { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import { GraduationCap, Stethoscope, Users, Scroll, Mail, Phone, Linkedin } from 'lucide-react';

const teamMembers = [
  {
    name: "Dr. Aarav Sharma",
    role: "Founder & Principal",
    image: "/placeholder.svg?height=400&width=400",
    bio: "With over 30 years of experience in acupuncture, Dr. Sharma founded Nepal's first acupuncture college to bring Eastern healing traditions to modern healthcare.",
    department: "Administration",
    email: "aarav.sharma@example.com",
    phone: "+977 1234567890",
    linkedin: "https://www.linkedin.com/in/aarav-sharma"
  },
  {
    name: "Prof. Priya Adhikari",
    role: "Head of Acupuncture Studies",
    image: "/placeholder.svg?height=400&width=400",
    bio: "Prof. Adhikari specializes in integrating traditional acupuncture techniques with contemporary medical practices.",
    department: "Faculty",
    email: "priya.adhikari@example.com",
    phone: "+977 2345678901",
    linkedin: "https://www.linkedin.com/in/priya-adhikari"
  },
  {
    name: "Dr. Rajesh Gurung",
    role: "Clinical Director",
    image: "/placeholder.svg?height=400&width=400",
    bio: "Dr. Gurung oversees the college's clinical programs, ensuring students receive hands-on experience in a supervised environment.",
    department: "Clinical Staff",
    email: "rajesh.gurung@example.com",
    phone: "+977 3456789012",
    linkedin: "https://www.linkedin.com/in/rajesh-gurung"
  },
  {
    name: "Ms. Sita Basnet",
    role: "Student Affairs Coordinator",
    image: "/placeholder.svg?height=400&width=400",
    bio: "Ms. Basnet manages student services, organizing cultural events and supporting students throughout their academic journey.",
    department: "Administration",
    email: "sita.basnet@example.com",
    phone: "+977 4567890123",
    linkedin: "https://www.linkedin.com/in/sita-basnet"
  },
  {
    name: "Dr. Anup Thapa",
    role: "Research Head",
    image: "/placeholder.svg?height=400&width=400",
    bio: "Dr. Thapa leads the college's research initiatives, focusing on evidence-based studies of acupuncture's efficacy in various health conditions.",
    department: "Faculty",
    email: "anup.thapa@example.com",
    phone: "+977 5678901234",
    linkedin: "https://www.linkedin.com/in/anup-thapa"
  },
  {
    name: "Nurse Kamala Magar",
    role: "Clinical Instructor",
    image: "/placeholder.svg?height=400&width=400",
    bio: "Nurse Magar brings her extensive nursing background to teach students about patient care and clinical best practices.",
    department: "Clinical Staff",
    email: "kamala.magar@example.com",
    phone: "+977 6789012345",
    linkedin: "https://www.linkedin.com/in/kamala-magar"
  },
];

const departments = [
  { name: "All", icon: <Users className="w-5 h-5" /> },
  { name: "Administration", icon: <GraduationCap className="w-5 h-5" /> },
  { name: "Faculty", icon: <Scroll className="w-5 h-5" /> },
  { name: "Clinical Staff", icon: <Stethoscope className="w-5 h-5" /> },
];

const OurTeam = () => {
  const [selectedDepartment, setSelectedDepartment] = useState("All");

  return (
    <section className="overflow-hidden py-16 bg-gradient-to-br from-green-50 to-stone-100">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <span className="block mb-4 text-lg font-semibold text-green-600">
            Our Team
          </span>
          <h2 className="mb-6 text-3xl font-bold text-stone-800 sm:text-4xl">
            Meet the Healers and Educators
          </h2>
          <p className="max-w-2xl mx-auto text-base text-stone-600">
            Our diverse team of experienced practitioners and educators are dedicated to nurturing the next generation of acupuncture professionals.
          </p>
        </motion.div>

        <Tabs defaultValue="All" className="mb-8" onValueChange={setSelectedDepartment}>
          <TabsList className="flex justify-center mb-6 bg-green-100 p-1 rounded-full">
            {departments.map((dept) => (
              <TabsTrigger
                key={dept.name}
                value={dept.name}
                className="flex items-center space-x-2 px-4 py-2 rounded-full data-[state=active]:bg-green-600 data-[state=active]:text-white transition-all duration-300"
              >
                {dept.icon}
                <span>{dept.name}</span>
              </TabsTrigger>
            ))}
          </TabsList>
          <AnimatePresence mode="wait">
            <motion.div
              key={selectedDepartment}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
            >
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {teamMembers
                  .filter(member => selectedDepartment === "All" || member.department === selectedDepartment)
                  .map((member, index) => (
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
                              <AvatarFallback>{member.name.split(' ').map(n => n[0]).join('')}</AvatarFallback>
                            </Avatar>
                            <div className="mt-12 text-center">
                              <h3 className="text-xl font-semibold text-stone-800 mb-1">{member.name}</h3>
                              <p className="text-green-600 mb-4">{member.role}</p>
                              <p className="text-stone-600 text-sm line-clamp-3 mb-4">{member.bio}</p>
                              <Dialog>
                                <DialogTrigger asChild>
                                  <button className="text-green-600 hover:text-green-700 font-semibold transition-colors duration-300">
                                    Read More
                                  </button>
                                </DialogTrigger>
                                <DialogContent className="sm:max-w-[425px]">
                                  <div className="text-center">
                                    <Avatar className="w-24 h-24 mx-auto mb-4">
                                      <AvatarImage src={member.image} alt={member.name} />
                                      <AvatarFallback>{member.name.split(' ').map(n => n[0]).join('')}</AvatarFallback>
                                    </Avatar>
                                    <h3 className="text-2xl font-semibold text-stone-800 mb-1">{member.name}</h3>
                                    <p className="text-green-600 mb-4">{member.role}</p>
                                    <p className="text-stone-600 mb-6">{member.bio}</p>
                                    <div className="flex justify-center space-x-4">
                                      <a href={`mailto:${member.email}`} className="text-stone-600 hover:text-green-600 transition-colors duration-300">
                                        <Mail className="w-6 h-6" />
                                      </a>
                                      <a href={`tel:${member.phone}`} className="text-stone-600 hover:text-green-600 transition-colors duration-300">
                                        <Phone className="w-6 h-6" />
                                      </a>
                                      <a href={member.linkedin} target="_blank" rel="noopener noreferrer" className="text-stone-600 hover:text-green-600 transition-colors duration-300">
                                        <Linkedin className="w-6 h-6" />
                                      </a>
                                    </div>
                                  </div>
                                </DialogContent>
                              </Dialog>
                            </div>
                          </div>
                        </CardContent>
                      </Card>
                    </motion.div>
                  ))}
              </div>
            </motion.div>
          </AnimatePresence>
        </Tabs>

        {/* <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="mt-12 text-center"
        >
          <a
            href="#contact"
            className="inline-flex items-center justify-center py-3 px-6 text-base font-semibold text-white bg-green-600 rounded-full hover:bg-green-700 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
          >
            Join Our Healing Community
          </a>
        </motion.div> */}
      </div>
    </section>
  );
};

export default OurTeam;

