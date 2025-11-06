"use client";
import Image from "next/image";
import { useState } from "react";
import { Fade } from "react-awesome-reveal";

const Card = () => {
  const [hovered, setHovered] = useState(null);
  const [isReadMore, setIsReadMore] = useState(false);

  const maxlength = 150;

const fullDescriptions = {
  approach:
    "At Connectra Technologies, our approach is built around understanding your business needs and delivering the right technology solutions. We work closely with clients to design, plan, and implement IT systems that enhance performance, reliability, and security. From consultation to deployment, our process ensures smooth execution, cost efficiency, and long-term value for your organization.",

  solution:
    "Connectra Technologies provides end-to-end IT solutions including web development, server installations, network setup, and digital marketing. Our solutions are designed to help businesses scale efficiently with modern technologies such as cloud infrastructure, secure networking, and optimized hardware solutions. We aim to simplify complex IT challenges through smart, reliable, and customized services.",

  success:
    "We take pride in our success stories with clients across multiple industries. From implementing robust data storage solutions to building high-performing business websites, Connectra Technologies has consistently delivered results that drive growth and efficiency. Our team’s technical expertise and commitment to excellence have earned the trust of numerous businesses nationwide.",

  industries:
    "Connectra Technologies serves a diverse range of industries including corporate enterprises, educational institutions, healthcare, manufacturing, and retail. Whether it’s designing secure networks, supplying IT infrastructure, or providing cloud and digital marketing solutions, we tailor our services to meet industry-specific needs with precision and reliability.",
};


  const cards = [
    { key: "approach", title: "Our Approach", image: "/sales.jpg", link: "/about/approach" },
    { key: "solution", title: "Solution", image: "/solution.jpg", link: "/about/solution" },
    { key: "success", title: "Success Stories", image: "/success.jpg", link: "/about/success" },
    { key: "industries", title: "Our Industries", image: "/industries.jpg", link: "/about/industries" },
  ];

  return (
    <div className="my-12">
          <div className="max-w-6xl mx-auto text-center mb-16 relative z-10">
    <h3 className="text-red-500 uppercase font-semibold tracking-widest mb-3">
        Our Process
    </h3>
    <h2 className="text-4xl md:text-5xl font-extrabold">
      How <span className="text-red-400">Connectra Technologies</span> Delivers Excellence
    </h2>
  </div>
      <div className="flex flex-wrap justify-center gap-6">
        {cards.map((card, index) => (
          <Fade direction={index % 2 === 0 ? "left" : "right"} key={card.key}>
            <div
              className="relative group w-[320px] shadow-lg rounded-lg overflow-hidden cursor-pointer"
              onMouseEnter={() => setHovered(card.key)}
              onMouseLeave={() => setHovered(null)}
            >
              {/* Image */}
              <Image
                src={card.image}
                alt={card.title}
                width={500}
                height={300}
                className="w-full h-[250px] object-cover transition-transform duration-500 transform group-hover:scale-110"
              />
              {/* Overlay - always visible but darker on hover */}
              <div className="absolute inset-0 bg-opacity-30 bg-black/50 group-hover:bg-opacity-70 transition-all duration-500"></div>

              {/* Text Content */}
              <div className="absolute inset-0 flex flex-col justify-end p-4 text-white transition-all duration-500">
                <h3 className="font-bold text-2xl mb-2">{card.title}</h3>

                {hovered === card.key && (
                  <p className="text-sm leading-relaxed">
                    {isReadMore
                      ? fullDescriptions[card.key]
                      : `${fullDescriptions[card.key].slice(0, maxlength)}...`}
                    {fullDescriptions[card.key].length > maxlength && (
                      <a
                        href={card.link}
                        className="text-blue-400 hover:underline ml-1"
                    >
                        {isReadMore ? "Read Less" : "Read More"}
                      </a>
                    )}
                  </p>
                )}
              </div>
            </div>
          </Fade>
        ))}
      </div>
    </div>
  );
};

export default Card;
