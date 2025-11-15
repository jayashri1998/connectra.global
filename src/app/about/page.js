import Image from "next/image";
import Link from "next/link";

export default function About() {
  return (
    <main className="min-h-screen bg-transparent text-gray-800">
      <section className="relative h-[50vh] overflow-hidden -mt-[80px] pt-[80px]">
        <div className="absolute inset-0">
          <Image
            src="/about.jpg"
            alt="IT Solutions Banner"
            fill
            className="object-cover brightness-50 "
          />
        </div>
        <div className="absolute inset-0 bg-black/50"></div>
        <div className="absolute mt-32 md:mt-2 inset-0 flex flex-col items-center justify-center text-center px-4">
          <h1 className="text-2xl md:text-5xl font-bold mb-4 text-white">
            Complete IT Sales & Service Solutions
          </h1>
          <p className="text-gray-300  text-base md:text-lg mb-2 md:mb-6 max-w-2xl">
            We provide end-to-end IT solutions including servers, networks,
            storage, CCTV, workstation setups & professional IT support.
          </p>
          <Link href='/contact' className="bg-red-600 hover:bg-red-700 text-white px-6 py-3 rounded-md font-medium transition-all">
            Get Quote
          </Link>
        </div>
      </section>

      {/* STATS SECTION */}
     <section className="absolute left-1/2 -translate-x-1/2 bg-[#101010] text-white py-4 md:py-8 rounded-bl-[50px] rounded-tr-[50px] -mt-12 flex items-center justify-center gap-12 shadow-lg px-10">
  <div className="text-center">
    <p className= " text-xl md:text-3xl font-bold text-white">100+</p>
    <p>Happy Clients</p>
  </div>
  <div className="text-center">
    <p className=" text-xl md:text-3xl font-bold text-white">10+ Years</p>
    <p>Industry Experience</p>
  </div>
  <div className="text-center">
    <p className=" text-xl md:text-3xl font-bold text-white">20+</p>
    <p>Corporate Projects</p>
  </div>
</section>

      <section className="grid md:grid-cols-2 gap-10 px-10 py-16 items-center">
        <div>
          <Image
            src="/about.jpg"
            alt="IT Team Working"
            width={500}
            height={400}
            className="rounded-xl object-cover shadow-lg"
          />
        </div>

        <div>
          <h2 className="text-3xl font-bold mb-4">About Us</h2>
          <p className="text-gray-700 text-lg mb-6 leading-relaxed">
            We specialize in delivering robust IT infrastructure services that
            help businesses operate smoothly and securely. From hardware sales
            to end-to-end network setup, we ensure that your IT environment is
            reliable, fast, and future-ready.
          </p>
          <button className="bg-red-600 hover:bg-red-700 px-6 py-3 rounded-md text-white transition-all">
            Contact Us
          </button>
        </div>
      </section>
      <section className="px-10 pb-16">
        <h2 className="text-3xl font-bold text-center mb-12">
          Our IT Solutions & Services
        </h2>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6">
          {[
            "Server & Storage Solutions",
            "Networking & Firewall Security",
            "Data Center Racks & Cabling",
            "Computer & Laptop Sales",
            "CCTV & Surveillance Systems",
            "Website Development & IT Support",
            "Projector Sales & Installation",
          ].map((service, index) => (
            <div
              key={index}
              className="border border-red-600 rounded-xl p-6 shadow-lg hover:shadow-red-600/30 transition-all "
            >
              <h3 className="text-xl font-semibold mb-3 text-red-400">
                {service}
              </h3>
              <p className="text-gray-400 text-sm">
                Professional setup, configuration & long-term maintenance
                support.
              </p>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}
