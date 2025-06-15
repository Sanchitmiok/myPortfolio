import React from 'react';
import { motion } from "framer-motion";
import { fadeIn } from "../framerMotion/Variants";


const HeroPic = () => {
  return (
    <motion.div
      variants={fadeIn("left", 0.2)}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0 }}
      className="h-full flex items-center justify-center overflow-hidden relative"
    >
      <img
        src="/public/photos/Sanchit1.png"
        alt="Abdelrahman Qassem"
        className="max-h-[400px] w-auto"
      />
    </motion.div>
  );
};

export default HeroPic;
