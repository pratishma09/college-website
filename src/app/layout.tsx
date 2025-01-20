import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from '../components/Navbar/Navbar'
import Map from '../components/Map'
import Footer from "@/components/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Rural Health Education and Service Center",
  description: "Nepal's first acupuncture college",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
      <meta
          name="description"
          content="Rural Health Education and Service Center (RHESC) is Nepal's first acupuncture college. We provide top-quality acupuncture education and training."
        />
        <meta
          name="keywords"
          content="RHESC, Rural Health Education and Service Center, acupuncture college Nepal, Nepal acupuncture education, acupuncture training Nepal, first acupuncture college Nepal"
        />
        <meta name="author" content="RHESC" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta property="og:title" content="Rural Health Education and Service Center" />
        <meta
          property="og:description"
          content="Learn acupuncture from Nepal's first acupuncture college, the Rural Health Education and Service Center (RHESC)."
        />
        <meta property="og:type" content="website" />
        <link rel="icon" href="/assets/logo.png" /> 
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Navbar />
        {children}
        <Map/>
        <Footer/>
      </body>
    </html>
  );
}
