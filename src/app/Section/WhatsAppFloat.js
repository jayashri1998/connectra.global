"use client";

import { FaWhatsapp } from "react-icons/fa";

export default function WhatsAppFloat() {
  return (
    <a
      href="https://wa.me/8806339796"   // put your number here
      target="_blank"
      className="fixed bottom-6 right-6 z-50 bg-green-500 text-white 
                 w-14 h-14 rounded-full flex items-center justify-center 
                 shadow-xl hover:scale-110 transition-transform duration-300"
    >
      <FaWhatsapp size={30} />
    </a>
  );
}
