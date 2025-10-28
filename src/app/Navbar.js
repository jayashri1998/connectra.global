"use client";
import React, { useState, useEffect } from "react";
import Link from "next/link";
import { FaBars, FaTimes } from "react-icons/fa";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed w-full top-0 z-50 transition-all duration-500 ${
        isScrolled ? "bg-black shadow-md" : "bg-transparent"
      }`}
    >
      <nav className="container mx-auto flex justify-between items-center py-4 px-6">
        {/* Logo Section */}
        <div className="flex items-center gap-2">
          <img
            src="/logofinal.png"
            alt="Company Logo"
            className="w-24 h-16 rounded-full object-contain shadow-lg"
          />
          <div>
            <h1 className="text-white text-xl font-mono font-semibold pt-2">Connectra</h1>
            <p className="text-base font-mono text-red-600">Technologies</p>
          </div>
        </div>

        {/* Desktop Menu */}
        <ul className="hidden md:flex space-x-6 font-medium text-white">
          <li>
            <Link href="/" className="hover:text-red-600 transition">
              Home
            </Link>
          </li>
          <li>
            <Link href="/services" className="hover:text-red-600 transition">
              Services
            </Link>
          </li>
          <li>
            <Link href="/products" className="hover:text-red-600 transition">
              Products
            </Link>
          </li>
          <li>
            <Link
              href="/contact"
              className="bg-red-600 text-white px-4 py-2 rounded-lg hover:bg-red-700 transition-all"
            >
              Contact Us
            </Link>
          </li>
        </ul>

        {/* Mobile Hamburger */}
        <div
          className="md:hidden text-white text-2xl cursor-pointer"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <FaTimes /> : <FaBars />}
        </div>
      </nav>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-black text-white flex flex-col items-center space-y-4 py-6">
          <Link href="/" onClick={() => setIsOpen(false)} className="hover:text-red-600 text-lg">
            Home
          </Link>
          <Link href="/services" onClick={() => setIsOpen(false)} className="hover:text-red-600 text-lg">
            Services
          </Link>
          <Link href="/products" onClick={() => setIsOpen(false)} className="hover:text-red-600 text-lg">
            Products
          </Link>
          <Link href="/contact" onClick={() => setIsOpen(false)} className="hover:text-red-600 text-lg">
            Contact
          </Link>
        </div>
      )}
    </header>
  );
};

export default Navbar;
