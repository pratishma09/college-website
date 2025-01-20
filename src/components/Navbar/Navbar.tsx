'use client'

import { useState } from 'react'
import Link from 'next/link'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X } from 'lucide-react'
import MobileMenu from './MobileMenu'
import Image from 'next/image'
// import DropdownMenu from './DropDownMenu'

const navItems = [
  { name: 'Home', href: '/' },
  { name: 'About Us', href: '/about-us' },
  { name: 'Our Team', href: '/our-team' },
  // {
  //   name: 'Services',
  //   href: '/services',
  //   dropdown: [
  //     { name: 'Web Development', href: '/services/web-development' },
  //     { name: 'Mobile Apps', href: '/services/mobile-apps' },
  //     { name: 'UI/UX Design', href: '/services/ui-ux-design' },
  //   ],
  // },
  { name: 'Gallery', href: '/gallery' },
  { name: 'Courses', href: '/courses' },
  { name: 'Contact', href: '/contact' },
]

export default function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  // const [activeDropdown, setActiveDropdown] = useState<string | null>(null)

  // const handleDropdownToggle = (itemName: string) => {
  //   // setActiveDropdown(prevState => prevState === itemName ? null : itemName)
  // }

  return (
    <nav className=" bg-white shadow sticky z-20 top-0">
      <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8">
        <div className="flex  justify-between h-16 items-center">
          <Link href='/' className="flex items-center gap-3 font-semibold">
            <Image src="/assets/logo.jpg" alt="logo" width={50} height={50} />
            <p>RHESC</p>
          </Link> 
          <div className="hidden md:ml-6 md:flex md:space-x-8">
            {navItems.map((item) => (
              <div key={item.name} className="relative">
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  {/* {item.dropdown ? (
                    <button
                      onClick={() => handleDropdownToggle(item.name)}
                      className="inline-flex items-center px-1 pt-1 font-semibold text-gray-900 hover:text-gray-700 transition-colors duration-200 group"
                    >
                      {item.name}
                      <ChevronDown className={`ml-1 h-4 w-4 transform transition-transform duration-200 ${activeDropdown === item.name ? 'rotate-180' : ''}`} />
                      <span className="absolute bottom-0 left-0 w-full h-0.5 bg-green-500 transform scale-x-0 transition-transform duration-200 group-hover:scale-x-100 group-hover:translate-y-1"></span>
                    </button>
                  ) : ( */}
                    <Link
                      href={item.href}
                      className="inline-flex items-center px-1 pt-1 font-semibold text-gray-900 hover:text-gray-700 transition-colors duration-200 group"
                    >
                      {item.name}
                      <span className="absolute bottom-0 left-0 w-full h-0.5 bg-green-500 transform scale-x-0 transition-transform duration-200 group-hover:scale-x-100 group-hover:translate-y-1"></span>
                    </Link>
                  {/* )} */}
                </motion.div>
                {/* {item.dropdown && (
                  <AnimatePresence>
                    {activeDropdown === item.name && (
                      <DropdownMenu items={item.dropdown} />
                    )}
                  </AnimatePresence>
                )} */}
              </div>
            ))}
          </div>
          <div className="-mr-2 flex items-center md:hidden">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500"
            >
              <span className="sr-only">Open main menu</span>
              {isMobileMenuOpen ? (
                <X className="block h-6 w-6" aria-hidden="true" />
              ) : (
                <Menu className="block h-6 w-6" aria-hidden="true" />
              )}
            </motion.button>
          </div>
        </div>
      </div>

      <AnimatePresence>
        {isMobileMenuOpen && (
          <MobileMenu navItems={navItems} setIsMobileMenuOpen={setIsMobileMenuOpen} />
        )}
      </AnimatePresence>
    </nav>
  )
}

