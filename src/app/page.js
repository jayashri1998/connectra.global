"use client";
import Navbar from "@/Pages/Navbar";
import React, {useState, useEffect} from "react";
import Image from "next/image";
import computer from '../assests/computer.jpg'
import serverStorge from '../assests/serverstorage.jpg'
import networkswitch from '../assests/networkswitch.jpg'
import AboutSection from "@/Pages/About";
import Footer from "@/Pages/Footer";

export default function Home() {
   
  const slides = [
    {
      image: computer,
      title: "Empowering Businesses with Smart IT Solutions",
      description:
        "Your one-stop solution for laptops, servers, networking, and security systems — designed to boost performance and reliability.",
    },
    {
      image: serverStorge,
      title: "Reliable Server & Storage Solutions for Every Business",
      description:
        "Boost your infrastructure with enterprise-grade servers and scalable storage systems that ensure speed, security, and uptime.",
    },
    {
      image: networkswitch,
      title: "Next-Gen Networking & Security Solutions",
      description:
        "Connect smarter with high-performance switches, routers, and network security systems — built for seamless connectivity and protection.",
    },
  ];
  
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % slides.length);
    }, 2000);
    return () => clearInterval(interval);
  }, [slides.length]);

  const { image, title, description } = slides[currentIndex];

  return (
    <main className="min-h-screen bg-gray-50 text-gray-800">
   <section className="relative h-[100vh] overflow-hidden">
        <Navbar />
        <div className="absolute inset-0 transition-all duration-1000 ease-in-out">
          <Image
            src={image}
            alt="Connectra Technologies Banner"
            fill
            className="object-cover brightness-75 transition-opacity duration-1000"
            key={currentIndex}
          />
        </div>
        <div className="absolute inset-0 bg-black/50"></div>
        <div className="relative z-10 flex h-full items-center justify-center md:justify-start px-6 md:px-20">
          {/* Content Box */}
          <div className="text-white text-center md:text-left max-w-2xl">
            <h1 className="text-3xl md:text-5xl font-bold mb-4 transition-all duration-800 ease-in-out">
              {title}
            </h1>
            <p className="text-lg md:text-xl mb-6 transition-all duration-700 ease-in-out">
              {description}
            </p>

            <div className="flex flex-col md:flex-row items-center md:items-start gap-4">
              <button className="bg-red-600 hover:bg-red-700 text-white px-6 py-3 rounded-xl font-semibold transition">
                Explore More
              </button>
              <button className="bg-transparent border border-white px-6 py-3 rounded-xl hover:bg-white hover:text-black transition">
                Contact Us
              </button>
            </div>
          </div>
        </div>
      </section>


   <AboutSection/>
<Footer/>
    </main>
  );
}

