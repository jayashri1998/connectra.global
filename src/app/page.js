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
import Card from "./Section/card";

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
   const team = [
    { src: "/team1.jpg", alt: "Team Member 1" },
    { src: "/team2.jpg", alt: "Team Member 2" },
    { src: "/team3.jpg", alt: "Team Member 3" },
    { src: "/team4.jpg", alt: "Team Member 4" },
    { src: "/team5.jpg", alt: "Team Member 5" },
    { src: "/team6.jpg", alt: "Team Member 6" },
    { src: "/team7.jpg", alt: "Team Member 7" },
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
          10+
          <p className="text-sm font-normal">Years Experience</p>
        </div>
      </div>

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
<section className=" py-20 px-6 md:px-16 text-black relative overflow-hidden">
  <div className="max-w-6xl mx-auto text-center mb-16 relative z-10">
    <h3 className="text-red-500 uppercase font-semibold tracking-widest mb-3">
      Our Feature
    </h3>
    <h2 className="text-4xl md:text-5xl font-extrabold">
      Let’s Check Our <span className="text-red-400">Feature</span>
    </h2>
  </div>

  {/* Features Grid */}
  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 max-w-6xl mx-auto relative z-10">
    {[
      {
        id: "01",
        title: "Computer Sales & Services",
        desc: "We provide high-quality computer systems, maintenance, and repair with reliable support for businesses and individuals.",
        icon: "💻",
      },
      {
        id: "02",
        title: "Server & Storage Solutions",
        desc: "Expert setup and management of servers and storage systems ensuring scalability, speed, and data security.",
        icon: "🗄️",
      },
      {
        id: "03",
        title: "Network & Security",
        desc: "Comprehensive IT network architecture, firewall, and cybersecurity implementation for secure business operations.",
        icon: "🔒",
      },
      {
        id: "04",
        title: "Enterprise Products & Brands",
        desc: "Solutions from Cisco, Sophos, Fortinet, Quick Heal, Seqrite, D-Link, and more — ensuring best-in-class performance.",
        icon: "⚙️",
      },
    ].map((feature) => (
      <div
        key={feature.id}
        className="bg-white text-gray-800 rounded-2xl shadow-lg p-8 relative group hover:-translate-y-2 transition-all duration-300"
      >
        {/* Icon */}
        <div className="flex justify-center mb-6">
          <div className="bg-red-500 text-white rounded-full w-20 h-20 flex items-center justify-center text-4xl group-hover:bg-red-400 transition-colors duration-300">
            {feature.icon}
          </div>
        </div>

        {/* Number */}
        <h4 className="text-3xl font-extrabold text-red-500 text-center mb-2">
          {feature.id}
        </h4>

        {/* Title */}
        <h3 className="text-xl font-bold text-center mb-3">
          {feature.title}
        </h3>

        {/* Description */}
        <p className="text-gray-600 text-center text-sm leading-relaxed">
          {feature.desc}
        </p>

        {/* Bottom Border */}
        <div className="absolute bottom-0 left-0 right-0 h-1 bg-red-500 rounded-b-2xl"></div>
      </div>
    ))}
  </div>

  {/* Background Pattern Effect */}
  <div className="absolute inset-0 opacity-10 bg-[url('/network-bg.png')] bg-cover bg-center"></div>
</section>
<section className=" py-20 px-6 md:px-16 text-black relative overflow-hidden">
 <div className="md:flex  gap-4">
   <Image
    src="/projector2.png"
    alt="Connectra Technologies Banner"
    width={300}
    height={200}
    className="object-contain brightness-75 transition-opacity duration-1000"
    key={currentIndex}
  />
    <div className="max-w-6xl mx-auto text-center mb-16 relative z-10">
    <h3 className="text-red-500 uppercase font-semibold tracking-widest mb-3">
     OUR BUSINESS EXPERTISE
    </h3>
    <h2 className="text-4xl md:text-5xl font-extrabold mb-1">
    Sales & Services
    </h2>
    <p className="text-gray-700 text-lg mt-16">
      We provide all types of projectors — from LED to laser — along with professional installation, setup, and maintenance. Perfect solutions for offices, classrooms, auditoriums, and home theaters with reliable after-sales support.</p>
  </div>

  <div>
  <Image
            src="/projector.png"
            alt="Connectra Technologies Banner"
     
            width={300}
            height={200}
            className="object-contain brightness-75 transition-opacity duration-1000"
            key={currentIndex}
          />
          </div>
 </div>
   <section className="px-6 md:px-4 py-16 bg-white">
      <div className="flex flex-col lg:flex-row items-center gap-10">
        {/* Left Side - Images */}
        <div className="flex flex-col md:flex-row items-center gap-4">
          <Image
            src="/webdevelopment.jpg"
            alt="Web Development Team"
            width={400}
            height={400}
            className="rounded-bl-4xl rounded-tr-4xl shadow-2xl object-cover border-4 border-gray-200 md:mt-20"
          />
          <Image
            src="/alldevepoment.png"
            alt="Team Discussion"
            width={400}
            height={250}
            className="rounded-bl-4xl rounded-tr-4xl shadow-2xl object-cover border-4 border-gray-200 md:mt-40"
          />
        </div>

        {/* Right Side - Text */}
        <div className="flex-1">
          <h2 className="text-4xl md:text-5xl font-extrabold text-gray-800 mb-4">
            Who We Are
          </h2>
          <p className="text-gray-700 text-lg leading-relaxed">
            <strong className=" text-[#f87171] font-semibold">Connectra Technologies</strong> is a forward-thinking IT solutions company 
            dedicated to crafting digital experiences that empower businesses to grow and 
            succeed in today’s competitive landscape. Based in Nagpur, India, Connectra combines 
            creativity, technology, and innovation to deliver high-impact solutions for our clients.
          </p>

          <p className="text-gray-700 text-lg leading-relaxed mt-4">
            Our expertise spans <strong>Web Design, Digital Marketing, and UI/UX Design</strong> — 
            ensuring that every brand we work with stands out through stunning visuals, optimized 
            performance, and engaging user experiences. We believe in designing not just websites, 
            but complete digital identities that connect brands with their audience effectively.
          </p>

          <p className="text-gray-700 text-lg leading-relaxed mt-4">
            At <strong>Connectra Technologies</strong>, we’re driven by innovation and collaboration, 
            helping our clients stay ahead through tailored digital strategies and modern technologies.
          </p>
        </div>
      </div>
    </section>
</section>

<section className="relative overflow-hidden py-20 px-6 md:px-16 text-white">
  <div
    className="absolute inset-0 bg-gradient-to-r from-[#2b0a0a] via-[#1a1a1a] to-[#2b0a0a]"
    style={{
      clipPath: "polygon(0 0, 100% 0, 100% 85%, 0 100%)",
    }}
  ></div>

  {/* Content */}
  <div className="relative z-10 max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-12">
      
    <div className="md:w-1/2 flex justify-center">
      <Image
        src="/director.jpeg"
        alt="Director"
        width={400}
        height={400}
        className="rounded-2xl shadow-2xl object-cover border-4 border-white/20 hover:scale-105 transition-transform duration-500"
      />
    </div>

    {/* Right side - Message */}
    <div className="md:w-1/2 space-y-5">
      <h2 className=" text-center font-bold mb-4 text-red-600  tracking-wide relative">
        Director’s Message
      <div className="flex justify-center">
      <span className="block w-24 h-1 bg-[#f87171]/60 mt-2"></span>
    </div>

      </h2>

      <p className="text-lg leading-relaxed text-gray-200">
        At <span className="text-[#f87171] font-semibold">Connectra Technologies Pvt. Ltd.</span>, 
        we are dedicated to delivering innovative and result-driven IT solutions that empower businesses 
        to grow and succeed. Guided by integrity and excellence, we provide end-to-end services including 
        web development, SEO, IT infrastructure, networking, and hardware repair of laptops, computers, 
        and related systems.
      </p>

      <p className="text-lg leading-relaxed text-gray-300">
        Our commitment to quality and client satisfaction drives us to create intelligent solutions 
        that shape a smarter digital future. We are driven by passion, guided by technology, and inspired 
        by the trust our clients place in us. Thank you for being part of our journey toward technological excellence.
      </p>

      {/* Signature */}
      <div className="mt-6">
        <h4 className="text-base  text-gray-200">Warm regards,</h4>
        <p className="text-xl font-semibold text-white">Gaurav G Gavhane</p>
        <p className="text-sm text-gray-400 italic">Managing Director, Connectra Technologies Pvt. Ltd.
</p>
      </div>
    </div>
  </div>
</section>

<Card/>
    <section className="relative  py-20 overflow-hidden">
      <div className="max-w-6xl mx-auto px-4 relative">
        <h2 className="text-center text-4xl md:text-5xl font-bold text-black mb-32">
          Meet Our Clients
        </h2>

        {/* Collage Container */}
        <div className="relative flex justify-center items-center mb-16">
          <div className="relative flex flex-wrap justify-center gap-6 md:gap-10 max-w-4xl">
            {/* Center Image */}
            <div className="relative z-20 w-40 h-40 md:w-56 md:h-56 rounded-xl overflow-hidden shadow-xl">
              <Image src="/team1.jpg" alt="Team Member 1" fill className="object-cover" />
            </div>

            {/* Top Left */}
            <div className="absolute top-[-60px] left-[200px] w-32 h-32 md:w-44 md:h-44 rounded-xl overflow-hidden shadow-xl z-10">
              <Image src="/team2.jpg" alt="Team Member 2" fill className="object-cover" />
            </div>

            {/* Top Right */}
            <div className="absolute top-[-60px] right-[200px] w-32 h-32 md:w-44 md:h-44 rounded-xl overflow-hidden shadow-xl z-10">
              <Image src="/team3.jpg" alt="Team Member 3" fill className="object-cover" />
            </div>

            {/* Bottom Left */}
            <div className="absolute bottom-[-80px] left-[200px] w-32 h-32 md:w-44 md:h-44 rounded-xl overflow-hidden shadow-xl z-10">
              <Image src="/team4.jpg" alt="Team Member 4" fill className="object-cover" />
            </div>

            {/* Bottom Right */}
            <div className="absolute bottom-[-80px] right-[200px] w-32 h-32 md:w-44 md:h-44 rounded-xl overflow-hidden shadow-xl z-10">
              <Image src="/team5.jpg" alt="Team Member 5" fill className="object-cover" />
            </div>

            {/* Side small images */}
            <div className="absolute left-0 top-1/3 w-28 h-28 md:w-36 md:h-36 rounded-xl overflow-hidden shadow-lg">
              <Image src="/team6.jpg" alt="Team Member 6" fill className="object-cover" />
            </div>
            <div className="absolute right-0 top-1/3 w-28 h-28 md:w-36 md:h-36 rounded-xl overflow-hidden shadow-lg">
              <Image src="/team7.jpg" alt="Team Member 7" fill className="object-cover" />
            </div>
          </div>
        </div>
      </div>
    </section>
    </main>
  );
}

