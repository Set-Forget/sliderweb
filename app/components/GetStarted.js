"use client";
import sliderWebGif from "@/public/slider-web-gif.gif";
import { faChrome } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { CheckIcon } from '@heroicons/react/20/solid';
import { motion, useAnimation, useInView } from "framer-motion";
import Image from "next/image";
import { useEffect, useRef } from "react";

const features = [
  {
    description: <div className="inline font-bold dark:text-white">Click <a href="#">
      HERE <span aria-hidiven="true">→</span>
    </a> to Install SliderWeb’s free app on the Google Marketplace</div>,
    icon: CheckIcon,
  },
  {
    description: <div className="inline font-bold dark:text-white">Open any Google Slides presentation</div>,
    icon: CheckIcon,
  },
  {
    description: <div className="inline font-bold dark:text-white">Go to Extensions and Select SliderWeb</div>,
    icon: CheckIcon,
  },
  {
    description: <div className="inline font-bold dark:text-white">Select Start</div>,
    icon: CheckIcon,
  }
]

export const Features = () => {
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
    <div className="overflow-hidden dark:bg-gray-900 py-24 sm:py-32 flex flex-col items-center">
      <div ref={ref} className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto grid items-center max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-2">
          <div className="lg:pr-8 lg:pt-4">
            <div className="lg:max-w-lg">
              <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-5xl dark:text-white">How to Get Started</p>
              <p className="mt-6 text-lg leading-8 text-gray-700 dark:text-white">
                Install SliderWeb's Google Slides Addon and Improve Your Workflow in a Heartbeat.
              </p>
              <motion.ul initial="hidden"
                animate={controls} className="mt-10 max-w-xl space-y-8 text-base leading-7 text-gray-700 lg:max-w-none">
                {features.map((feature) => (
                  <motion.li key={feature.name} initial="hidden"
                    variants={listItemVariants}
                    animate={controls}
                    className="relative pl-9">
                    <div className="inline text-gray-900">
                      <feature.icon className="absolute left-1 top-1 h-5 w-5 text-gray-900 dark:text-[#ffb342]" aria-hidden="true" />
                      {feature.description}
                    </div>{' '}
                  </motion.li>
                ))}
              </motion.ul>
            </div>
          </div>
          <Image className="rounded-xl shadow-xl ring-1 ring-gray-400/10 md:-ml-4 lg:-ml-0"
            src={sliderWebGif} alt='sliderweb usage demo' />
        </div>
      </div>
      <button className="mt-20 flex justify-center items-center px-2 py-2.5 dark:bg-gray-800 bg-[#f4b400]/30 rounded-lg dark:hover:bg-gray-700 transition-colors">
        <FontAwesomeIcon icon={faChrome} className="w-4 h-4 mr-2" />Free on the Google Marketplace
      </button>
    </div>
  );
};
