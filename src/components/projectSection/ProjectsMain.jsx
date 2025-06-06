import ProjectsText from "./ProjectsText";
import SingleProject from "./SingleProject";
import { motion } from "framer-motion";
import { fadeIn } from "../framerMotion/Variants";
import React from "react";
const projects = [
  {
    name: "Prep Genius AI",
    year: "Sept 2024",
    align: "right",
    image: "../../public/photos/ai-interview.jpg",
    link: "https://prepgenius-ai.vercel.app/",
  },
  {
    name: "Feedback Matters",
    year: "Jan 2024",
    align: "left",
    image: "../../public/photos/feedback.jpg",
    link: "https://feedbackmatters.vercel.app/",
  },
  {
    name: "PassOp",
    year: "Sept 2023",
    align: "right",
    image: "../../public/photos/Password.png",
    link: "https://pass0p.netlify.app/",
  },
  {
    name: "Portfolio",
    year: "Sept 2023",
    align: "left",
    image: "../../public/photos/portfolio.jpg",
    link: "https://itssanchit.netlify.app/",
  },
    {
    name: "Music Course || UI",
    year: "Sept 2023",
    align: "right",
    image: "../../public/photos/Music.jpg",
    link: "https://music-course-foru.netlify.app/",
  },
  {
    name: "Task Manager",
    year: "Sept 2023",
    align: "left",
    image: "../../public/photos/taskManager.jpg",
    link: "https://itzyourtask.netlify.app/",
  }
  ,

  {
    name: "NetFlix || UI",
    year: "Sept 2023",
    align: "right",
    image: "../../public/photos/NetFlix.jpg",
    link: "https://itsnetui.netlify.app/",
  },
];

const ProjectsMain = () => {
  return (
    <div id="projects" className="max-w-[1200px] mx-auto px-4">
      <motion.div
        variants={fadeIn("top", 0)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.7 }}
      >
        <ProjectsText />
      </motion.div>
      <div className="flex flex-col gap-20 max-w-[900px] mx-auto mt-12">
        {projects.map((project, index) => {
          return (
            <SingleProject
              key={index}
              name={project.name}
              year={project.year}
              align={project.align}
              image={project.image}
              link={project.link}
            />
          );
        })}
      </div>
    </div>
  );
};

export default ProjectsMain;