import Image from "next/image";
import { RiArrowRightSLine } from "react-icons/ri"
import { Fade } from "react-awesome-reveal";
const services = [
  {
    title: "Computer & Laptop Sales",
    desc: "We provide high-performance computers and laptops from top brands, including setup & maintenance.",
    img: "/computer-sales-service.png",
  },
  {
    title: "Server & Storage Solutions",
    desc: "Reliable and scalable server infrastructure, data storage systems, and cloud configuration services.",
    img: "/server-storage.png",
  },
  {
    title: "Network Solutions",
    desc: "LAN/WAN setup, network switches, firewall, Wi-Fi access points, and secure networking implementation.",
    img: "/networkswitch.jpg",
  },
  {
    title: "Website & Software Development",
    desc: "Modern, responsive websites and custom web software tailored for business growth.",
    img: "/website&development.jpg",
  },
  {
    title: "CCTV Installation & Monitoring",
    desc: "Professional CCTV setup, DVR/NVR configuration, and security monitoring support.",
    img: "/cctv.jpg",
  },
  {
    title: "Racks, Projectors & IT Accessories",
    desc: "Sales and installation of server racks, projectors, cables, routers, printers and peripherals.",
    img: "/racks.jpg",
  },
];

export default function Services() {
  return (
      <main className="min-h-screen bg-transparent text-gray-800">
        <section className="relative h-[50vh] overflow-hidden -mt-[80px] pt-[80px]">
          <div className="absolute inset-0">
            <Image
              src="/service.jpg"
              alt="Connectra Technologies Banner"
              fill
              className="object-cover brightness-75"
            />
          </div>
            <div className="absolute inset-0 bg-black/50"></div>
                  <div className="relative z-10 flex h-full items-center justify-center px-6 md:px-20">
                    <div className="text-white text-center">
                      <h1 className="text-3xl md:text-5xl font-bold font-mono mb-4">
                        Sales && Services
                      </h1>
                      <p className="flex gap-2 ml-4 justify-center">
                        Home <RiArrowRightSLine className="mt-1" /> Services
                      </p>
                    </div>
                  </div>
          </section>
  



    <div className="py-16 px-4 md:px-12">
      <div className="text-center mb-16">
        <h3 className="text-red-500 uppercase font-semibold tracking-widest mb-3">
          Our Services
        </h3>
        <h2 className="text-4xl md:text-5xl font-extrabold">
          Complete <span className="text-red-400">IT Solutions</span> for Your Business
        </h2>
        <p className="max-w-3xl mx-auto text-gray-600 mt-4">
          Connectra Technologies delivers high-quality IT products and end-to-end enterprise solutions designed
          to improve business efficiency and performance.
        </p>
      </div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-10 max-w-7xl mx-auto">
        {services.map((service, index) => (
          <Fade key={index} delay={index * 120} triggerOnce>
            <div className="group shadow-lg rounded-xl overflow-hidden bg-white hover:shadow-2xl transition-all duration-300 cursor-pointer">
              <div className="relative h-56 overflow-hidden">
                <Image
                  src={service.img}
                  alt={service.title}
                  fill
                  className="object-contain group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0  bg-opacity-30 group-hover:bg-opacity-50 transition-all"></div>
              </div>
              <div className="p-6">
                <h4 className="text-xl font-semibold mb-2">{service.title}</h4>
                <p className="text-gray-600 text-sm">{service.desc}</p>
              </div>
            </div>
          </Fade>
        ))}
      </div>
    </div>
          </main>
  );
}
