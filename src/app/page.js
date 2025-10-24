"use client";
import Image from "next/image";

export default function Home() {
  return (
    <main className="min-h-screen bg-gray-50 text-gray-800">
      {/* Navbar */}
      <header className="bg-white shadow-md fixed w-full top-0 z-50">
        <nav className="container mx-auto flex justify-between items-center py-4 px-6">
          <h1 className="text-2xl font-bold text-blue-600">Connectra global</h1>
          <ul className="flex space-x-6 font-medium">
            <li><a href="#" className="hover:text-blue-600">Home</a></li>
            <li><a href="#services" className="hover:text-blue-600">Services</a></li>
            <li><a href="#products" className="hover:text-blue-600">Products</a></li>
            <li><a href="#contact" className="hover:text-blue-600">Contact</a></li>
          </ul>
        </nav>
      </header>

      {/* Hero Section */}
      <section className="relative h-[90vh] flex items-center justify-center">
        <Image
          src="/hero_section.jpg" // 🖼️ place a hero image in /public/hero.jpg
          alt="Connectra global Banner"
          fill
          className="object-cover brightness-75"
        />
        <div className="relative z-10 text-center text-white px-4">
          <h2 className="text-4xl md:text-6xl font-bold mb-4">
            Building Smart, Secure & Scalable Digital Solutions
          </h2>
          <p className="text-lg md:text-xl">
            Innovating technology that empowers your business.
          </p>
        </div>
      </section>

      {/* Who We Are */}
      <section id="about" className="container mx-auto py-20 px-6">
        <h3 className="text-3xl font-bold text-blue-600 mb-6">Who We Are</h3>
        <p className="text-lg leading-relaxed">
          Connectra global is a versatile tech company providing comprehensive services
          in computer hardware/software, web and app development, CCTV and biometric
          systems, networking, and digital marketing. We deliver secure, scalable,
          and performance-driven solutions tailored for the evolving digital age.
        </p>
      </section>

      {/* Our Mission */}
      <section className="bg-white py-20 px-6">
        <div className="container mx-auto">
          <h3 className="text-3xl font-bold text-blue-600 mb-6">Our Mission</h3>
          <p className="text-lg leading-relaxed">
            We aim to bridge technology and business through innovative, efficient,
            and secure digital solutions that solve real-world problems and empower growth.
          </p>
        </div>
      </section>

      {/* Director’s Message */}
      <section className="container mx-auto py-20 px-6">
        <h3 className="text-3xl font-bold text-blue-600 mb-6">Director’s Message</h3>
        <p className="text-lg leading-relaxed">
          Guided by the vision of our Technical & Managerial Director, Connectra global has
          grown into a client-focused, innovation-led firm that blends technical skill
          with strategic insight. His leadership fuels our commitment to excellence
          and lasting client impact.
        </p>
      </section>

      {/* Footer */}
      <footer className="bg-blue-600 text-white text-center py-6">
        <p>&copy; {new Date().getFullYear()} Connectra global. All rights reserved.</p>
      </footer>
    </main>
  );
}

