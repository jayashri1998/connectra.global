"use client";
import { FaArrowRight } from "react-icons/fa";
import { AiOutlineMail } from "react-icons/ai";
import { FiPhoneCall } from "react-icons/fi";
import { SlLocationPin } from "react-icons/sl";


export default function Footer() {
  return (
    <footer className="bg-[#1E1E1E] text-white">
   <div className="hidden md:flex absolute z-10 left-1/2 -translate-x-1/2 -mt-10 
bg-red-600 flex-row items-center justify-between gap-6 
px-6 md:px-12 py-6 rounded-2xl shadow-lg w-[90%] md:w-[70%]">
  <h2 className="text-xl md:text-2xl font-bold text-white whitespace-nowrap">
    Subscribe to Our Newsletter
  </h2>
  <div className="flex w-full md:w-auto">
    <input
      type="email"
      placeholder="Your email address"
      className="px-4 py-3 w-full md:w-80 rounded-l-md focus:outline-none text-black bg-white"
    />
    <button className="bg-[#1E1E1E] text-white px-6 py-3 font-semibold rounded-r-md flex items-center gap-2 hover:bg-black transition">
      SUBSCRIBE NOW <FaArrowRight />
    </button>
  </div>
</div>
      <div className="px-6 md:px-20 mt-12  py-4  grid grid-cols-1 md:grid-cols-4 gap-10 relative   ">
        <div>
           <div className="flex items-center gap-2 mt-16">
      <img
        src='./logofinal.png'
        alt="Company Logo"
        className="w-30 h-auto rounded-full object-contain shadow-2xl"
      />
  <div>
    <h1 className="text-white text-xl font-mono">Connectra</h1>
    <p className=" text-base font-mono text-red-600">Technologies</p>
  </div>
</div>

          <p className="text-gray-300 font-serif">
            Connectra Technologies provides expert IT solutions — from laptops and
            servers to networking and security systems — ensuring performance,
            reliability, and trust.
          </p>
        </div>
        <div className="mt-16"> 
          <h4 className="text-xl font-semibold mb-4">Links</h4>
          <ul className="space-y-2 text-gray-300">
            <li><a href="#" className="hover:text-red-500">About</a></li>
            <li><a href="#" className="hover:text-red-500">Services</a></li>
            <li><a href="#" className="hover:text-red-500">Products</a></li>
            <li><a href="#" className="hover:text-red-500">Projects</a></li>
            <li><a href="#" className="hover:text-red-500">Contact</a></li>
          </ul>
        </div>
        <div className="mt-16">
          <h4 className="text-xl font-semibold mb-4">Our Services</h4>
          <ul className="space-y-2 text-gray-300">
            <li>Laptop and Computer Sales & Services</li>
            <li>Server & Storage Solutions</li>
            <li>Networking & Switches</li>
            <li>Racks & Infrastructure Setup</li>
            <li>IT Security Solutions</li>
          </ul>
        </div>
        <div className="mt-16">
        <h4 className="text-xl font-semibold mb-4">Contact</h4>
        <ul className="text-gray-300 space-y-3">
            <li className="flex gap-4">
            <SlLocationPin className="mt-2"/>
            83 Trilok nagar Dattawadi nagpur 440023
            </li>
            <li className="flex gap-4"> <FiPhoneCall/>+91 8806339796</li>
            <li className="flex gap-4">  <AiOutlineMail className="mt-2"/>gaurav@connectra.global</li>
        </ul>
        </div>
    </div>

      <div className="border-t border-gray-700 text-center py-6 text-gray-400 text-sm">
        © {new Date().getFullYear()} Connectra Technologies. All rights reserved.
      </div>
    </footer>
  );
}
