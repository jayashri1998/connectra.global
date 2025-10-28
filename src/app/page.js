"use client";
import Navbar from "@/app/Navbar";
import React, {useState, useEffect} from "react";
import Image from "next/image";
import computer from '../assests/computer.jpg'
import serverStorge from '../assests/serverstorage.jpg'
import networkswitch from '../assests/networkswitch.jpg'
import Footer from "@/app/Footer";
import service from "../assests/sevice.jpg";
import { motion } from "framer-motion";
import { FaServer, FaLaptopCode, FaNetworkWired } from "react-icons/fa"
import Link from "next/link";

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
  <main className="min-h-screen bg-transparent text-gray-800">
  <section className="relative h-[100vh] overflow-hidden -mt-[80px] pt-[80px]">
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
            <h1 className="text-3xl md:text-5xl font-bold font-mono mb-4 transition-all duration-800 ease-in-out">
              {title}
            </h1>
            <p className="text-lg md:text-xl font-serif mb-6 transition-all duration-700 ease-in-out">
              {description}
            </p>

            <div className="flex flex-col md:flex-row items-center md:items-start gap-4">
              <Link href='/contact' className="bg-red-600 hover:bg-red-700 text-white px-6 py-3 rounded-xl font-semibold transition">
                Explore More
              </Link>
              <button className="bg-transparent border border-white px-6 py-3 rounded-xl hover:bg-white hover:text-black transition">
                Contact Us
              </button>
            </div>
          </div>
        </div>
      </section>

 <section className="flex flex-col md:flex-row items-center justify-between px-6 md:px-20 py-16 bg-white">
      {/* Left Image */}
      <div className="relative md:w-1/2 w-full mb-10 md:mb-0">
        <Image
          src={service}
          alt="Electrical Services"
          className="rounded-2xl shadow-lg object-cover w-full h-[400px]"
        />
        <div className="absolute bottom-0 left-0 bg-red-600 text-white text-3xl font-bold px-6 py-4 rounded-tr-2xl">
          30+
          <p className="text-sm font-normal">Years Experience</p>
        </div>
      </div>

      {/* Right Content */}
      <motion.div
        className="md:w-1/2 text-center md:text-left md:ml-12"
        initial={{ opacity: 0, y: -50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
      >
        <p className="text-red-600 font-semibold uppercase mb-2">
          About Connectra Technologies
        </p>

        <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight">
          Reliable IT Solutions for Computers, Networks & Data Centers
        </h2>

            <p className="text-gray-700 text-lg mb-8">
          Connectra Technologies delivers end-to-end IT infrastructure solutions —
          from computer and laptop servicing to high-performance servers, data storage,
          and networking systems. We specialize in secure network design, switch
          configurations, and server rack installations, ensuring reliability and
          performance for every business size.
        </p>
        {/* Icon Section */}
          <div className="flex flex-col  gap-6">
          <div className="flex items-center gap-4">
            <div className="bg-red-600 text-white p-4 rounded-full">
              <FaLaptopCode className="text-2xl" />
            </div>
            <h4 className="text-xl font-semibold">
              Computer & Laptop Services
            </h4>
          </div>

          <div className="flex items-center gap-4">
            <div className="bg-red-600 text-white p-4 rounded-full">
              <FaServer className="text-2xl" />
            </div>
            <h4 className="text-xl font-semibold">Server & Storage Solutions</h4>
          </div>

          <div className="flex items-center gap-4">
            <div className="bg-red-600 text-white p-4 rounded-full">
              <FaNetworkWired className="text-2xl" />
            </div>
            <h4 className="text-xl font-semibold">Networking & Racks</h4>
          </div>
          </div>
      </motion.div>
    </section>
    </main>
  );
}

