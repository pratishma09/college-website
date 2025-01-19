import React from "react";
import { Facebook, Twitter, Instagram, Linkedin } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="relative bg-green-800 text-gray-100">
      {/* Wavy Divider */}

      <div className="container mx-auto px-4 py-12">
        <div className="flex flex-wrap justify-between items-center">
          {/* Logo or Brand */}
          <div className="mb-6 w-full lg:w-1/4">
            <h3 className="text-lg font-bold mb-4">Rural Health Education</h3>
            <p className="text-sm text-gray-300">
              Nepal&apos;s first acupuncture college, located in Jorpati, Kathmandu.
            </p>
          </div>

          {/* Navigation Links */}
          <div className="mb-6 w-full lg:w-1/4">
            <h4 className="text-lg font-bold mb-4">Quick Links</h4>
            <ul className="text-sm">
              {["Home", "About Us", "Courses", "Contact"].map((link, index) => (
                <li key={index} className="mb-2 hover:underline">
                  <a href={`#${link.toLowerCase().replace(/\s/g, "")}`}>
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Information */}
          <div className="mb-6 w-full lg:w-1/4">
            <h4 className="text-lg font-bold mb-4">Contact Us</h4>
            <ul className="text-sm">
              <li className="mb-2">Jorpati, Kathmandu, Nepal</li>
              <li className="mb-2">Phone: +977-123-456789</li>
              <li className="mb-2">Email: info@rhe.edu.np</li>
            </ul>
          </div>

          {/* Social Media Links */}
          {/* Social Media Links */}
          <div className="w-full lg:w-1/4">
            <h4 className="text-lg font-bold mb-4">Follow Us</h4>
            <div className="flex space-x-4">
              <a
                href="#"
                className="p-2 rounded-full bg-green-800 hover:bg-green-700 transition duration-300"
              >
                <Facebook className="text-white" size={24} />
              </a>
              <a
                href="#"
                className="p-2 rounded-full bg-green-800 hover:bg-green-700 transition duration-300"
              >
                <Twitter className="text-white" size={24} />
              </a>
              <a
                href="#"
                className="p-2 rounded-full bg-green-800 hover:bg-green-700 transition duration-300"
              >
                <Instagram className="text-white" size={24} />
              </a>
              <a
                href="#"
                className="p-2 rounded-full bg-green-800 hover:bg-green-700 transition duration-300"
              >
                <Linkedin className="text-white" size={24} />
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="py-4 bg-green-800">
        <p className="text-center text-sm text-gray-400">
          © {new Date().getFullYear()} Rural Health Education and Service
          Center. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
