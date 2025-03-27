'use client'

import React from "react";
// import Image from "next/image";
import { motion } from "framer-motion";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Droplet, Sun } from 'lucide-react';

const Gallery = () => {
  // const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const categories = [
    { name: "Students", icon: <Droplet className="w-5 h-5" /> },
    { name: "Extra Curriculars", icon: <Sun className="w-5 h-5" /> },
  ];

  const images = [
    { src: "/assets/gallery/1.jpg", alt: "Students practicing acupuncture", category: "Students" },
    { src: "assets/gallery/2.jpg", alt: "Acupuncture needles", category: "Techniques" },
    { src: "/assets/gallery/3.jpg", alt: "Traditional medicine herbs", category: "Herbs" },
    { src: "/assets/gallery/4.jpg", alt: "Meditation garden", category: "Students" },
    { src: "/assets/gallery/5.jpg", alt: "Student clinic", category: "Students" },
    { src: "/assets/gallery/6.jpg", alt: "Cupping therapy", category: "Extra Curriculars" },
    { src: "/assets/gallery/7.jpg", alt: "Cupping therapy", category: "Students" },
    { src: "/assets/gallery/8.jpg", alt: "Cupping therapy", category: "Extra Curriculars" },
    { src: "/assets/gallery/9.jpg", alt: "Cupping therapy", category: "Students" },
    { src: "/assets/gallery/10.jpg", alt: "Cupping therapy", category: "Students" },
  ];

  return (
    <section className="overflow-hidden py-16 bg-gradient-to-br from-green-50 to-stone-100">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="block mb-4 text-lg font-semibold text-green-600"
          >
            Our Gallery
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="mb-6 text-3xl font-bold text-stone-800 sm:text-4xl"
          >
            Journey Through the Art of Healing
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="max-w-2xl mx-auto text-base text-stone-600"
          >
            Explore the harmony of ancient wisdom and modern education at Nepal&apos;s premier acupuncture institution.
          </motion.p>
        </div>

        <Tabs defaultValue="Students" className="mb-8">
          <TabsList className="flex justify-center mb-6 bg-green-100 p-1 rounded-full">
            {categories.map((category) => (
              <TabsTrigger
                key={category.name}
                value={category.name}
                className="flex items-center space-x-2 px-4 py-2 rounded-full data-[state=active]:bg-green-600 data-[state=active]:text-white transition-all duration-300"
              >
                {category.icon}
                <span>{category.name}</span>
              </TabsTrigger>
            ))}
          </TabsList>
          {categories.map((category) => (
            <TabsContent key={category.name} value={category.name}>
              <div className="flex flex-wrap justify-center gap-6">
                {images
                  .filter((image) => image.category === category.name)
                  .map((image, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, scale: 0.9 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                      className="relative overflow-hidden rounded-lg shadow-lg group"
                    >
                      <Dialog>
                        <DialogTrigger asChild>
                          <div className="cursor-pointer">
                            <img
                              src={image.src || "/placeholder.svg"}
                              alt={image.alt}
                              className="h-60 object-cover transition-transform duration-300 ease-in-out group-hover:scale-110"
                            />
                            
                          </div>
                        </DialogTrigger>
                        <DialogContent className="max-w-3xl">
                        <img
                              src={image.src || "/placeholder.svg"}
                              alt={image.alt}
                              className="h-60 object-cover transition-transform duration-300 ease-in-out group-hover:scale-110"
                            />
                            
                          
                        </DialogContent>
                      </Dialog>
                    </motion.div>
                  ))}
              </div>
            </TabsContent>
          ))}
        </Tabs>
      </div>
    </section>
  );
};

export default Gallery;

