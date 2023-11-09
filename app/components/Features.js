"use client";
import Image from "next/image";
import cm from "@/public/check-solid.svg";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "framer-motion";
import { useEffect, useRef } from "react";

export const Features = () => {
  const listItems = [
    "Get started with a few clicks",
    "Create slide folders from a specific selection",
    "Import your templates to your current slideshow in an instant",
    "Quick access to all your templates for easy editing",
  ];

  const listItemVariants = {
    visible: (i) => ({
      opacity: 1,
      translateY: 0,
      transition: {
        delay: i * 0.2,
        duration: 0.6,
      },
    }),
    hidden: { opacity: 0, translateY: 20 },
  };

  const controls = useAnimation();
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const animationStartDelay = 0.5; 

  useEffect(() => {
    if (isInView) {
      const timeoutId = setTimeout(() => {
        controls.start('visible');
      }, animationStartDelay * 1000); 

      return () => clearTimeout(timeoutId);
    }
  }, [controls, isInView]);

  return (
    <div className="relative isolate bg-gray-900 flex flex-col justify-center items-center">
      <section
        className="mx-auto px-6 pb-24 pt-10 sm:pb-32 lg:flex lg:px-8 lg:py-20 flex flex-col"
        ref={ref}
      >
        <h1 className="text-4xl font-bold tracking-tight text-white sm:text-6xl mt-6">
          Why People Choose Us
        </h1>
        <motion.ul
          animate={controls}
          initial="hidden"
          className="mt-16 space-y-6"
        >
          {listItems.map((item, index) => (
            <motion.li
              key={item}
              custom={index}
              variants={listItemVariants}
              className="flex items-center text-lg leading-8 text-gray-300"
              initial="hidden"
              animate={controls}
            >
              <Image
                src={cm}
                width={16}
                height={16}
                className="mr-2"
                alt="Checkmark"
              />
              {item}
            </motion.li>
          ))}
        </motion.ul>
      </section>
    </div>
  );
};
