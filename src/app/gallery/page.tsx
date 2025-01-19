'use client'

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Leaf, Droplet, Sun, Wind } from 'lucide-react';

const Gallery = () => {
  // const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const categories = [
    { name: "Campus", icon: <Leaf className="w-5 h-5" /> },
    { name: "Students", icon: <Droplet className="w-5 h-5" /> },
    { name: "Techniques", icon: <Sun className="w-5 h-5" /> },
    { name: "Herbs", icon: <Wind className="w-5 h-5" /> },
  ];

  const images = [
    { src: "/placeholder.svg?height=300&width=400", alt: "College building", category: "Campus" },
    { src: "/placeholder.svg?height=300&width=400", alt: "Students practicing acupuncture", category: "Students" },
    { src: "/placeholder.svg?height=300&width=400", alt: "Acupuncture needles", category: "Techniques" },
    { src: "/placeholder.svg?height=300&width=400", alt: "Traditional medicine herbs", category: "Herbs" },
    { src: "/placeholder.svg?height=300&width=400", alt: "Meditation garden", category: "Campus" },
    { src: "/placeholder.svg?height=300&width=400", alt: "Student clinic", category: "Students" },
    { src: "/placeholder.svg?height=300&width=400", alt: "Cupping therapy", category: "Techniques" },
    { src: "/placeholder.svg?height=300&width=400", alt: "Herbal dispensary", category: "Herbs" },
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

        <Tabs defaultValue="Campus" className="mb-8">
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
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
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
                            <Image
                              src={image.src || "/placeholder.svg"}
                              alt={image.alt}
                              width={400}
                              height={300}
                              className="w-full h-auto transition-transform duration-300 ease-in-out group-hover:scale-110"
                            />
                            <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                              <p className="text-white text-lg font-semibold">{image.alt}</p>
                            </div>
                          </div>
                        </DialogTrigger>
                        <DialogContent className="max-w-3xl">
                          <Image
                            src={image.src || "/placeholder.svg"}
                            alt={image.alt}
                            width={800}
                            height={600}
                            className="w-full h-auto"
                          />
                          <p className="mt-2 text-center text-lg font-semibold">{image.alt}</p>
                        </DialogContent>
                      </Dialog>
                    </motion.div>
                  ))}
              </div>
            </TabsContent>
          ))}
        </Tabs>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="mt-12 text-center"
        >
          <a
            href="#contact"
            className="inline-flex items-center justify-center py-3 px-6 text-base font-semibold text-white bg-green-600 rounded-md hover:bg-green-700 transition duration-300 ease-in-out shadow-lg hover:shadow-xl transform hover:-translate-y-1"
          >
            Experience Our Campus in Person
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default Gallery;

