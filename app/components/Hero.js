"use client";
import heroImg from "@/public/hero-img.svg";
import { faChrome } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { motion } from "framer-motion";
import Image from "next/image";

const perspective = {
  initial: {
    opacity: 0,
    rotateX: 90,
    translateY: 80,
    translateX: -20,
  },
  enter: {
    translateY: 0,
    translateX: 0,
    opacity: 1,
    rotateX: 0,
    transition: {
      delay: 0.25,
      duration: 0.65,
      opacity: { duration: 0.35 },
      ease: [0.215, 0.61, 0.355, 1],
    },
  },
};

export const Hero = () => {
  return (
    <div className="relative isolate overflow-hidden dark:bg-gray-900">
      <div
        className="absolute left-[calc(50%-4rem)] top-10 -z-10 transform-gpu blur-3xl sm:left-[calc(50%-18rem)] lg:left-48 lg:top-[calc(50%-30rem)] xl:left-[calc(50%-24rem)]"
        aria-hidden="true"
      >
        <div
          className="aspect-[1108/632] w-[69.25rem] bg-gradient-to-r from-[#FBE143] to-[#FBE143] opacity-20"
          style={{
            clipPath:
              "polygon(73.6% 51.7%, 91.7% 11.8%, 100% 46.4%, 97.4% 82.2%, 92.5% 84.9%, 75.7% 64%, 55.3% 47.5%, 46.5% 49.4%, 45% 62.9%, 50.3% 87.2%, 21.3% 64.1%, 0.1% 100%, 5.4% 51.1%, 21.4% 63.9%, 58.9% 0.2%, 73.6% 51.7%)",
          }}
        />
      </div>

      <div className="mx-auto gap-20 px-6 pb-24 pt-10 items-center sm:pb-32 lg:flex lg:px-8 lg:py-40 max-w-[1366px]">
        <div className="mx-auto max-w-2xl flex-shrink-0 lg:mx-0 lg:max-w-xl lg:pt-8">
          <div className="mt-24 sm:mt-0">
            <a href="#" className="inline-flex space-x-6">
              <motion.span
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.1, delay: 1.25, ease: "easeOut" }}
                className="inline-flex items-center space-x-2 text-xs font-medium leading-6 dark:text-gray-300"
              >
                <span>v1.0 Now available</span>
              </motion.span>
            </a>
          </div>

          <div className="title-parent">
            <motion.h1
              variants={perspective}
              initial="initial"
              animate="enter"
              className="text-4xl font-bold tracking-tight sm:text-6xl mt-6"
            >
              Never Lose a Slide Again
            </motion.h1>
          </div>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.65, ease: "easeOut" }}
            className="text-lg leading-8 dark:text-gray-300 mt-6"
          >
            Tired of hunting through old decks for slides to reuse? SliderWeb lets you save and retrieve the slides you need, when you need them.
          </motion.p>
          <motion.button
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1, ease: "easeOut" }}
            className="mt-6 flex justify-center items-center px-2 py-2.5 dark:bg-gray-800 bg-[#f4b400]/30 rounded-lg dark:hover:bg-gray-700 transition-colors"
          >
            <FontAwesomeIcon icon={faChrome} className="w-4 h-4 mr-2" /> Free on the Google Marketplace
          </motion.button>
        </div>
        <div>
          <Image
            src={heroImg}
            className="hero-img sm:min-w-[600px] lg:scale-125 mt-24 px-8 w-full"
            alt="sliderweb homepage decorative image"
          />
        </div>
      </div>
    </div>
  );
};
