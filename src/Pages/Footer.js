"use client";
import { FaArrowRight } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-[#1E1E1E] text-white">
      <div className="bg-red-600 flex flex-col md:flex-row items-center justify-between px-6 md:px-20 py-10">
        <h2 className="text-2xl font-bold mb-4 md:mb-0">
          Subscribe to Our Newsletter
        </h2>
        <div className="flex w-full md:w-auto">
          <input
            type="email"
            placeholder="Your email address"
            className="px-4 py-3 w-full md:w-96 rounded-l-md focus:outline-none text-gray-800"
          />
          <button className="bg-[#1E1E1E] text-white px-6 py-3 font-semibold rounded-r-md flex items-center gap-2 hover:bg-black transition">
            SUBSCRIBE NOW <FaArrowRight />
          </button>
        </div>
      </div>
      <div className="px-6 md:px-20 py-16 grid grid-cols-1 md:grid-cols-4 gap-10 relative">
        <div>
          <div className="flex items-center gap-2 mb-4">
            <div className="w-8 h-8 bg-red-600 rounded flex items-center justify-center text-xl font-bold text-white">
              C
            </div>
            <h3 className="text-2xl font-semibold">Connectra</h3>
          </div>
          <p className="text-gray-300">
            Connectra Technologies provides expert IT solutions — from laptops and
            servers to networking and security systems — ensuring performance,
            reliability, and trust.
          </p>
        </div>
        <div>
          <h4 className="text-xl font-semibold mb-4">Links</h4>
          <ul className="space-y-2 text-gray-300">
            <li><a href="#" className="hover:text-red-500">About</a></li>
            <li><a href="#" className="hover:text-red-500">Services</a></li>
            <li><a href="#" className="hover:text-red-500">Products</a></li>
            <li><a href="#" className="hover:text-red-500">Projects</a></li>
            <li><a href="#" className="hover:text-red-500">Contact</a></li>
          </ul>
        </div>
        <div>
          <h4 className="text-xl font-semibold mb-4">Our Services</h4>
          <ul className="space-y-2 text-gray-300">
            <li>Laptop & Computer Sales</li>
            <li>Server & Storage Solutions</li>
            <li>Networking & Switches</li>
            <li>Racks & Infrastructure Setup</li>
            <li>IT Security Solutions</li>
          </ul>
        </div>
        <div>
        <h4 className="text-xl font-semibold mb-4">Contact</h4>
        <ul className="text-gray-300 space-y-3">
            <li>
            Flat 20, Tech Park Road, Pune, India
            </li>
            <li>+91 98765 43210</li>
            <li>info@connectra.in</li>
        </ul>
        </div>
    </div>

      {/* Bottom Line */}
      <div className="border-t border-gray-700 text-center py-6 text-gray-400 text-sm">
        © {new Date().getFullYear()} Connectra Technologies. All rights reserved.
      </div>
    </footer>
  );
}
