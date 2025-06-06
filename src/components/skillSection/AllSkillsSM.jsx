import { IoLogoJavascript } from "react-icons/io";
import { SiTypescript } from "react-icons/si";
import { FaReact } from "react-icons/fa";
import { SiRedux } from "react-icons/si";
import { SiNextdotjs } from "react-icons/si";
import { RiTailwindCssFill } from "react-icons/ri";
import { SiMongodb, SiGit, SiNodedotjs, SiCplusplus, SiPython } from "react-icons/si";
import React from "react";
import { motion } from "framer-motion";
import { fadeIn } from "../framerMotion/Variants";

const skills = [
  {
    index: 1,
    skill: "JavaScript",
    icon: IoLogoJavascript,
  },
  {
    index: 2,
    skill: "TypeScript",
    icon: SiTypescript,
  },
  {
    index: 3,
    skill: "ReactJS",
    icon: FaReact,
  },
  {
    index: 4,
    skill: "Redux",
    icon: SiRedux,
  },
  {
    index: 5,
    skill: "NextJS",
    icon: SiNextdotjs,
  },
  {
    index: 6,
    skill: "TailwindCSS",
    icon: RiTailwindCssFill,
  },
  {
    index: 7,
    skill: "MongoDB",
    icon: SiMongodb,
  },
  {
    index: 8,
    skill: "Git",
    icon: SiGit,
  },
  {
    index: 9,
    skill: "Node.js",
    icon: SiNodedotjs,
  },
  {
    index: 10,
    skill: "C++",
    icon: SiCplusplus,
  },
  {
    index: 11,
    skill: "Python",
    icon: SiPython,
  },
];

const AllSkillsSM = () => {
  return (
    <div className="grid md:grid-cols-4 sm:grid-cols-2 gap-12 my-12">
      {skills.map((item, index = item.index) => {
        return (
          <motion.div
            variants={fadeIn("up", 0.2)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: false, amount: 0.7 }}
            key={index}
            className="flex flex-col items-center"
          >
            <item.icon className="text-7xl text-orange" />
            <p className="text-center mt-4">{item.skill}</p>
          </motion.div>
        );
      })}
    </div>
  );
};

export default AllSkillsSM;