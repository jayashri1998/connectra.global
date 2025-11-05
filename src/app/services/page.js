import Image from "next/image";
import { RiArrowRightSLine } from "react-icons/ri"
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
          </main>
  );
}
