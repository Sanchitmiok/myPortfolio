import SingleSkill from "./SingleSkill";
import { SiMongodb, SiGit, SiNodedotjs, SiCplusplus, SiPython } from "react-icons/si";

import { IoLogoJavascript } from "react-icons/io";
import { SiTypescript } from "react-icons/si";
import { FaReact } from "react-icons/fa";
import { SiRedux } from "react-icons/si";
import { SiNextdotjs } from "react-icons/si";
import { RiTailwindCssFill } from "react-icons/ri";
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

const AllSkills = () => {
  return (
    <div>
      <div className="flex items-center justify-center relative gap-2 max-w-[1200px] mx-auto">
        {skills.map((item, index = item.index) => {
          return (
            <motion.div
              variants={fadeIn("up", `0.${index}`)}
              initial="hidden"
              whileInView="show"
              viewport={{ once: false, amount: 0 }}
              key={index}
            >
              <SingleSkill
                key={index}
                text={item.skill}
                imgSvg={<item.icon />}
              />
            </motion.div>
          );
        })}
      </div>
    </div>
  );
};

export default AllSkills;