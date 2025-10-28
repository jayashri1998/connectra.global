"use client";
import { useState } from "react";
import { FaUser, FaEnvelope, FaPhoneAlt, FaRegCommentDots } from "react-icons/fa";
import Image from "next/image";
import { RiArrowRightSLine } from "react-icons/ri";


export default function ContactPage() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Data:", form);
    alert("Thank you! Your message has been submitted.");
  };

  return (
   <main className="min-h-screen bg-transparent text-gray-800">
   <section className="relative h-[50vh] overflow-hidden -mt-[80px] pt-[80px]">
         <div className="absolute inset-0 transition-all duration-1000 ease-in-out">
           <Image
             src='/contact.jpg'
             alt="Connectra Technologies Banner"
             fill
             className="object-cover brightness-75 transition-opacity duration-1000"
          
           />
         </div>

        <div className="absolute inset-0 bg-black/50"></div>
        <div className="relative z-10 flex h-full items-center justify-center px-6 md:px-20">
          {/* Content Box */}
          <div className="text-white text-center ">
            <h1 className="text-3xl md:text-5xl font-bold text-center justify-center font-mono mb-4 transition-all duration-800 ease-in-out">
Contact
            </h1>
            <p className="flex gap-2 ml-4">Home <RiArrowRightSLine className="mt-1"/> contact</p>
            </div>
            </div>
            </section>
      <div className="relative my-12 z-10 md:justify-end  backdrop-blur-lg bg-gray-200 border border-gray-700 rounded-2xl shadow-xl w-[90%] md:w-[50%] p-8 md:p-10">
        <h2 className="text-3xl font-bold text-center mb-8">
          Get in Touch
        </h2>

        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Name */}
          <div>
            <label className="flex items-center gap-2 font-semibold mb-2">
              <FaUser /> Name
            </label>
            <input
              type="text"
              name="name"
              value={form.name}
              onChange={handleChange}
              placeholder="Enter your name"
              required
              className="w-full bg-white border border-gray-500 rounded-md px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          {/* Email */}
          <div>
            <label className="flex items-center gap-2 font-semibold mb-2">
              <FaEnvelope /> Email
            </label>
            <input
              type="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              placeholder="Enter your email"
              required
              className="w-full bg-white border border-gray-500 rounded-md px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          {/* Phone */}
          <div>
            <label className="flex items-center gap-2 font-semibold mb-2">
              <FaPhoneAlt /> Phone Number
            </label>
            <input
              type="tel"
              name="phone"
              value={form.phone}
              onChange={handleChange}
              placeholder="+1"
              required
              className="w-full bg-white border border-gray-500 rounded-md px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          {/* Requirement */}
          <div>
            <label className="flex items-center gap-2 font-semibold mb-2">
              <FaRegCommentDots /> Describe Your Requirement
            </label>
            <textarea
              name="message"
              value={form.message}
              onChange={handleChange}
              placeholder="Describe your requirement"
              rows={4}
              required
              className="w-full white border border-gray-500 rounded-md px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <button
            type="submit"
            className="w-fit p-4 bg-gradient-to-r from-red-500 to-red-700 text-white font-semibold py-3 rounded-lg hover:from-red-600 hover:to-red-800 transition-all shadow-lg"
          >
            Submit
          </button>
        </form>
      </div>
    </main>
  );
}
