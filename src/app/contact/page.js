"use client";
import { useState } from "react";
import { FaUser, FaEnvelope, FaPhoneAlt, FaRegCommentDots } from "react-icons/fa";
import Image from "next/image";
import { RiArrowRightSLine } from "react-icons/ri";
import toast from "react-hot-toast";

export default function ContactPage() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    toast.loading("Sending your message...");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });

      const result = await res.json();
      toast.dismiss();

      if (res.ok) {
        toast.success("✅ Message sent successfully!");
        setForm({ name: "", email: "", phone: "", message: "" });
      } else {
        toast.error("❌ " + (result.error || "Failed to send message."));
      }
    } catch (error) {
      toast.dismiss();
      toast.error("❌ Something went wrong. Please try again later.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <main className="min-h-screen bg-transparent text-gray-800">
      <section className="relative h-[50vh] overflow-hidden -mt-[80px] pt-[80px]">
        <div className="absolute inset-0">
          <Image
            src="/contact.jpg"
            alt="Connectra Technologies Banner"
            fill
            className="object-cover brightness-75"
          />
        </div>

        <div className="absolute inset-0 bg-black/50"></div>
        <div className="relative z-10 flex h-full items-center justify-center px-6 md:px-20">
          <div className="text-white text-center">
            <h1 className="text-3xl md:text-5xl font-bold font-mono mb-4">
              Contact
            </h1>
            <p className="flex gap-2 ml-4 justify-center">
              Home <RiArrowRightSLine className="mt-1" /> Contact
            </p>
          </div>
        </div>
      </section>
<section className="mx-4 md:mx-32 my-12 ">
  <h1 className="text-red-600 text-4xl text-center font-semibold">Drop your Message !!</h1>
  <h2 className="text-base font-normal text-gray-600 pt-4">Get in Touch with Connectra Technologies
At Connectra Technologies, we specialize in providing end-to-end IT infrastructure solutions — from computer systems, servers, and storage to networking switches, racks, and security solutions.
Whether you’re upgrading your data center, setting up a new network, or need expert guidance on enterprise hardware, our team is here to help.

Reach out to us to discuss your business needs, request a quote, or explore how Connectra can deliver reliable, scalable, and cost-effective technology solutions tailored to your organization.

Your IT success begins with a simple conversation — contact Connectra Technologies today!</h2>
</section>
<div className="md:flex mx-auto w-[90%] md:w-[80%] my-12 rounded-2xl overflow-hidden  gap-12 ">
  
  {/* Left Image Section */}
  <div className="relative w-full md:w-1/2 h-1/3 md:h-auto">
    <img
      src="https://shadbox.com/assets/Contactmain-5a115bf9.jpg"
      alt="Connectra Technologies Banner"
      fill
      className="object-cover"
    />
          <div>
          <h1 className="text-3xl font-bold text-gray-700 mb-7">On-Call Support</h1>

  <div className="flex gap-6 mb-4">
  <svg className="w-8 h-8" viewBox="0 0 25 25" xmlns="http://www.w3.org/2000/svg">
    <defs>
      <style dangerouslySetInnerHTML={{__html: ".cls-1{fill:#2563EB;}" }} />
    </defs>
    <g id="phone">
      <path className="cls-1" d="M23,17.11a5.92,5.92,0,0,0-4.63-3.95,1.5,1.5,0,0,0-1.51.66L15.6,15.63a.53.53,0,0,1-.61.2,13.25,13.25,0,0,1-3.6-2.14,13,13,0,0,1-2.94-3.52.5.5,0,0,1,.17-.69l1.63-1.09a1.52,1.52,0,0,0,.61-1.71A10.13,10.13,0,0,0,9.48,3.79a10.36,10.36,0,0,0-2.2-2.33A1.53,1.53,0,0,0,6,1.19a7.31,7.31,0,0,0-1.13.43A7.64,7.64,0,0,0,1.2,6.1a1.48,1.48,0,0,0,0,.93A24.63,24.63,0,0,0,7.73,17.44,24.76,24.76,0,0,0,17.12,23a1.41,1.41,0,0,0,.45.07,1.59,1.59,0,0,0,.48-.07,7.64,7.64,0,0,0,4.47-3.66A6.21,6.21,0,0,0,23,18,1.46,1.46,0,0,0,23,17.11Zm-1.33,1.74A6.61,6.61,0,0,1,17.73,22a.54.54,0,0,1-.31,0,23.61,23.61,0,0,1-9-5.29,23.74,23.74,0,0,1-6.27-10,.47.47,0,0,1,0-.31A6.59,6.59,0,0,1,5.29,2.52a5,5,0,0,1,1-.36h.1a.5.5,0,0,1,.32.11,9.4,9.4,0,0,1,2,2.09A9.07,9.07,0,0,1,9.9,7a.52.52,0,0,1-.21.6L8.06,8.64a1.54,1.54,0,0,0-.47,2,14.09,14.09,0,0,0,7,6.09,1.51,1.51,0,0,0,1.81-.58l1.21-1.81a.51.51,0,0,1,.51-.23A4.94,4.94,0,0,1,22,17.44a.58.58,0,0,1,0,.29A5.35,5.35,0,0,1,21.62,18.85Z" />
    </g>
  </svg>
  <h3 className="text-xl text-gray-500 font-semibold tracking-wider">+91 8806339796</h3>
  </div>
  <div className="flex gap-6 mb-4">
      
  <svg className="w-8 h-8" version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" viewBox="0 0 512 512" xmlSpace="preserve">
    <path style={{fill: '#E6F3FF'}} d="M512,105.739v300.522c0,27.715-22.372,50.087-50.087,50.087H50.087
      C22.372,456.348,0,433.976,0,406.261V105.739c0-0.89,0-1.781,0.111-2.671c1.336-25.6,21.704-45.969,47.304-47.304
      c0.89-0.111,1.781-0.111,2.671-0.111h411.826c0.89,0,1.892,0,2.783,0.111c25.489,1.336,45.857,21.704,47.193,47.193
      C512,103.847,512,104.849,512,105.739z" />
    <path style={{fill: '#CFDBE6'}} d="M464.696,55.763c-0.892-0.111-1.891-0.111-2.783-0.111H256v400.696h205.913
      c27.715,0,50.087-22.372,50.087-50.087V105.739c0-0.89,0-1.892-0.111-2.783C510.553,77.468,490.184,57.099,464.696,55.763z" />
    <path style={{fill: '#2563EB'}} d="M511.889,102.957c-1.336-25.489-21.704-45.857-47.193-47.193
      C382.89,137.569,336.951,183.509,256,264.459C225.291,233.732,77.61,85.958,47.416,55.763c-25.6,1.336-45.969,21.704-47.304,47.304
      C0,103.958,0,104.849,0,105.739v300.522c0,27.715,22.372,50.087,50.087,50.087h16.696V169.739l165.621,165.51
      c6.456,6.567,15.026,9.795,23.597,9.795c8.57,0,17.141-3.228,23.597-9.795l165.621-165.621v286.72h16.696
      c27.715,0,50.087-22.372,50.087-50.087V105.739C512,104.849,512,103.847,511.889,102.957z" />
    <path style={{fill: '#004fff'}} d="M279.596,335.249l165.621-165.621v286.72h16.696c27.715,0,50.087-22.372,50.087-50.087V105.739
      c0-0.89,0-1.892-0.111-2.783c-1.336-25.489-21.704-45.857-47.193-47.193C382.891,137.569,336.951,183.509,256,264.459v80.584
      C264.57,345.043,273.141,341.816,279.596,335.249z" />
  </svg>
  <h3 className="text-xl text-gray-500 font-semibold tracking-wider"><span className="font-bold">Sales:</span> gaurav@connectra.global</h3>
  
  </div>
  
      </div>
    
  </div>
      <div className="relative my-12 z-10 backdrop-blur-lg bg-gray-200 border border-gray-700 rounded-2xl shadow-xl w-[90%] md:w-[50%] p-8 md:p-10 mx-auto">
        <h2 className="text-3xl font-bold text-center mb-8">Get in Touch</h2>
      
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
              placeholder="+91"
              required
              className="w-full bg-white border border-gray-500 rounded-md px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          {/* Message */}
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
              className="w-full bg-white border border-gray-500 rounded-md px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <button
            type="submit"
            disabled={loading}
            className={`w-fit p-4 bg-gradient-to-r from-red-500 to-red-700 text-white font-semibold py-3 rounded-lg transition-all shadow-lg ${
              loading
                ? "opacity-60 cursor-not-allowed"
                : "hover:from-red-600 hover:to-red-800"
            }`}
          >
            {loading ? "Sending..." : "Submit"}
          </button>
        </form>
        </div>
      </div>
    </main>
  );
}
