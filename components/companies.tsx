"use client";
import { useEffect, useState } from "react";
import { Heading } from "./heading";
import { Subheading } from "./subheading";
import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";

export const Companies = () => {
  let [logos, setLogos] = useState([
    [
      {
        title: "netflix",
        src: "/logos/netflix.png",
      },
      {
        title: "google",
        src: "/logos/google.webp",
      },
      {
        title: "meta",
        src: "/logos/meta.png",
      },
      {
        title: "digitalocean",
        src: "/logos/digital-ocean.svg",
      },
    ],
    [
      {
        title: "netflix second",
        src: "/logos/netflix.png",
      },
      {
        title: "google second",
        src: "/logos/google.webp",
      },
      {
        title: "meta second",
        src: "/logos/meta.png",
      },
      {
        title: "digitalocean second",
        src: "/logos/digital-ocean.svg",
      },
    ],
  ]);
  const [activeLogoSet, setActiveLogoSet] = useState(logos[0]);
  const [isAnimating, setIsAnimating] = useState<boolean>(false);

  const flipLogos = () => {
    setLogos((currentLogos) => {
      const newLogos = [...currentLogos.slice(1), currentLogos[0]];
      setActiveLogoSet(newLogos[0]);
      setIsAnimating(true);
      return newLogos;
    });
  };

  useEffect(() => {
    if (!isAnimating) {
      const timer = setTimeout(() => {
        flipLogos();
      }, 3000);
      return () => clearTimeout(timer); // Clear timeout if component unmounts or isAnimating changes
    }
  }, [isAnimating]);

  return (
    <div className="relative z-20 py-10 md:py-40">
      <Heading as="h2">Trusted by the best companies</Heading>
      <Subheading className="text-center ">
        SmartVIN is the choice of all the fortune 500 companies.
      </Subheading>

      <div className="flex gap-10 flex-wrap justify-center md:gap-40 relative h-full w-full mt-20">
        <AnimatePresence
          mode="popLayout"
          onExitComplete={() => {
            setIsAnimating(false);
          }}
        >
          {activeLogoSet.map((logo, idx) => (
            <motion.div
              initial={{
                y: 40,
                opacity: 0,
                filter: "blur(10px)",
              }}
              animate={{
                y: 0,
                opacity: 1,
                filter: "blur(0px)",
              }}
              exit={{
                y: -40,
                opacity: 0,
                filter: "blur(10px)",
              }}
              transition={{
                duration: 0.8,
                delay: 0.1 * idx,
                ease: [0.4, 0, 0.2, 1],
              }}
              key={logo.title}
              className="relative"
            >
              <Image
                src={logo.src}
                alt={logo.title}
                width="100"
                height="100"
                className="md:h-20 md:w-40 h-10 w-20 object-contain filter"
              />
            </motion.div>
          ))}
        </AnimatePresence>
      </div>
    </div>
  );
};
