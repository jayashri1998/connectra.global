import Image from "next/image";
import service from "../assests/sevice.jpg"; // replace with your own image
import { motion } from "framer-motion";
import { FaServer, FaLaptopCode, FaNetworkWired } from "react-icons/fa"

export default function AboutSection() {
  return (
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
  );
}
