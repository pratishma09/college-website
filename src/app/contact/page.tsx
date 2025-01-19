"use client";
import React from "react";
import emailjs from "emailjs-com";
// import Image from "next/image";

const ContactForm = () => {
  const SERVICE_ID = "service_n1odabg";
  const TEMPLATE_ID = "template_oas3nvb";
  const PUBLIC_KEY = "gM_JLlar9169vtVGN";

  const handleOnSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, e.currentTarget, PUBLIC_KEY).then(
      () => {
        alert("Message Sent Successfully");
      },
      (error) => {
        console.log(error.text);
        alert("Something went wrong!");
      }
    );
    e.currentTarget.reset();
  };

  return (
    <section className="bg-green-50" id="contact">
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8 lg:py-20">
        <div className="mb-4">
          <div className="mb-6 max-w-3xl text-center sm:text-center md:mx-auto md:mb-12">
            <p className="text-base font-semibold uppercase tracking-wide text-green-600">
              Contact Us
            </p>
            <h2 className="font-heading mb-4 font-bold tracking-tight text-stone-800 text-3xl sm:text-5xl">
              Get in Touch
            </h2>
            <p className="mx-auto mt-4 max-w-3xl text-xl text-stone-600">
              We&apos;re here to answer your questions and help you start your journey in acupuncture
            </p>
          </div>
        </div>
        <div className="flex items-stretch justify-center">
          <div className="grid md:grid-cols-2 gap-8">
            <div className="h-full pr-6">
              <p className="mt-3 mb-12 text-lg text-stone-600">
                Our college is dedicated to providing comprehensive education in acupuncture and traditional medicine. Whether you&apos;re a prospective student or seeking treatment, we&apos;re here to assist you.
              </p>
              <ul className="mb-6 md:mb-0 space-y-6">
                <li className="flex">
                  <div className="flex h-10 w-10 items-center justify-center rounded bg-green-600 text-white">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="h-6 w-6">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  </div>
                  <div className="ml-4">
                    <h3 className="mb-2 text-lg font-medium leading-6 text-stone-800">
                      Our Address
                    </h3>
                    <p className="text-stone-600">123 Healing Street, Kathmandu</p>
                    <p className="text-stone-600">Nepal</p>
                  </div>
                </li>
                <li className="flex">
                  <div className="flex h-10 w-10 items-center justify-center rounded bg-green-600 text-white">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="h-6 w-6">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                  </div>
                  <div className="ml-4">
                    <h3 className="mb-2 text-lg font-medium leading-6 text-stone-800">
                      Contact
                    </h3>
                    <p className="text-stone-600">Phone: +977 1234567890</p>
                    <p className="text-stone-600">Email: info@nepalacupuncture.edu</p>
                  </div>
                </li>
                <li className="flex">
                  <div className="flex h-10 w-10 items-center justify-center rounded bg-green-600 text-white">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="h-6 w-6">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <div className="ml-4">
                    <h3 className="mb-2 text-lg font-medium leading-6 text-stone-800">
                      Working hours
                    </h3>
                    <p className="text-stone-600">Monday - Friday: 09:00 - 17:00</p>
                    <p className="text-stone-600">Saturday: 09:00 - 13:00</p>
                  </div>
                </li>
              </ul>
            </div>
            <div className="card h-fit max-w-6xl p-5 md:p-12 bg-white rounded-lg shadow-md" id="form">
              <h2 className="mb-4 text-2xl font-bold text-stone-800">
                Send Us a Message
              </h2>
              <form id="contactForm" className="space-y-4" onSubmit={handleOnSubmit}>
                <div>
                  <label htmlFor="from_name" className="block text-sm font-medium text-stone-700">Your Name</label>
                  <input
                    type="text"
                    id="from_name"
                    name="from_name"
                    autoComplete="given-name"
                    placeholder="Your name"
                    className="mt-1 block w-full outline-none text-black rounded-md border-stone-300 shadow-sm focus:border-green-500 focus:ring-green-500"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="from_email" className="block text-sm font-medium text-stone-700">Your Email</label>
                  <input
                    type="email"
                    id="from_email"
                    name="from_email"
                    autoComplete="email"
                    placeholder="Your email address"
                    className="mt-1 block w-full outline-none text-black rounded-md border-stone-300 shadow-sm focus:border-green-500 focus:ring-green-500"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-stone-700">Your Message</label>
                  <textarea
                    id="message"
                    name="message"
                    rows={4}
                    placeholder="Write your message..."
                    className="mt-1 block w-full outline-none text-black rounded-md border-stone-300 shadow-sm focus:border-green-500 focus:ring-green-500"
                    required
                  ></textarea>
                </div>
                <div>
                  <button
                    type="submit"
                    className="w-full bg-green-600 text-white px-6 py-3 rounded-md font-semibold hover:bg-green-700 transition duration-300 ease-in-out"
                  >
                    Send Message
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;

