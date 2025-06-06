
import { fadeIn } from "../framerMotion/Variants";
import React from 'react';
import {Typewriter} from "react-simple-typewriter";
import { motion } from "framer-motion";
import {  useState } from "react";
const HeroText = () => {
    const [showTypewriter, setShowTypewriter] = useState(false);

const handleInView = () => {
    setTimeout(() => setShowTypewriter(true), 2000); // 2 sec delay
  };

  return (
    <>
    <div className="flex flex-col gap-4 h-full justify-center md:text-left sm:text-center">
      <motion.h2
        variants={fadeIn("down", 0.2)}
        initial="hidden"
        whileInView={() => {
            handleInView();
            return "show";
          }}
        viewport={{ once: false, amount: 0 }}
        className="lg:text-2xl sm:text-xl  uppercase text-lightGrey "
      >
       {showTypewriter && <Typewriter
          words={['Full Stack Web Developer', 'Aspiring Software Engineer']}
          loop={0} // 0 means infinite
          cursor
          cursorStyle="|"
          typeSpeed={100}
          deleteSpeed={100}
          delaySpeed={1500}
        />}
      </motion.h2>
      <motion.h1
        variants={fadeIn("right", 0.4)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0 }}
        className="md:text-[2.8rem] lg:text-6xl sm:text-4xl text-orange font-bold uppercase"
      >
        Sanchit <br className="sm:hidden md:block" />
        Mishra
      </motion.h1>
      <motion.p
        variants={fadeIn("up", 0.6)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0 }}
        className="text-lg mt-4"
      >
       
      </motion.p>
    </div>
    </>
  );
};

export default HeroText;