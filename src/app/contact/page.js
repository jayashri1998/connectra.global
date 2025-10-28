"use client";
import { useState } from "react";
import { FaUser, FaEnvelope, FaPhoneAlt, FaRegCommentDots } from "react-icons/fa";
import Image from "next/image";

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
    <section className="relative min-h-screen flex items-center justify-center bg-black overflow-hidden text-white">
      {/* Background with connected network effect */}
      <div className="absolute inset-0">
        <Image
          src="/network-bg.jpg" // replace with your background image path (public folder)
          alt="Network background"
          fill
          className="object-cover opacity-20"
        />
      </div>

      <div className="relative z-10 bg-gradient-to-br from-[#101828]/90 to-[#1E293B]/80 backdrop-blur-lg border border-gray-700 rounded-2xl shadow-xl w-[90%] md:w-[50%] p-8 md:p-10">
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
              className="w-full bg-black/70 border border-gray-500 rounded-md px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
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
              className="w-full bg-black/70 border border-gray-500 rounded-md px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
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
              className="w-full bg-black/70 border border-gray-500 rounded-md px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
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
              className="w-full bg-black/70 border border-gray-500 rounded-md px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
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
    </section>
  );
}
