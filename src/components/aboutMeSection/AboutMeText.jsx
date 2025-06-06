import { Link } from "react-scroll";
import React from 'react';

const AboutMeText = () => {
  return (
    <div className="flex flex-col md:items-start sm:items-center md:text-left sm:text-center lg:w-[75%]">
      <h2 className="text-6xl text-cyan mb-10">About Me</h2>
      <p>
        Final-year B.Tech Computer Engineering student at Delhi Technological University, skilled in Data Structures and Algorithms (solved 500+ problems), with expertise in full-stack development using Next.js, Node.js, React, MongoDB, and PostgreSQL. Secured JEE Mains AIR 
        <a href="https://drive.google.com/file/d/1QBptNulKsj2dtvBgPdTDNfIR36-mvKkK/view?usp=drive_link">
        {" "}16213{" "}
        </a>
         and Advanced AIR 15499, showcasing strong problem-solving skills. Passionate about building innovative tech solutions.
      </p>
     <div className="flex flex-col md:flex-row  md:gap-4">
      <button className="border border-orange rounded-full py-2 px-4 text-lg flex gap-2 items-center mt-10 hover:bg-orange transition-all duration-500 cursor-pointer md:self-start sm:self-center">
        <Link
          spy={true}
          smooth={true}
          duration={500}
          offset={-120}
          to="projects"
          className="cursor-pointer text-white hover:text-cyan transition-all duration-500"
        >
          My Projects
        </Link>
      </button>
      <button className="border border-orange rounded-full py-2 px-4 text-lg flex gap-2 items-center mt-10 hover:bg-orange transition-all duration-500 cursor-pointer md:self-start sm:self-center">
        <a
    href="https://drive.google.com/file/d/1WzhciUbUyGcvytTfyuvqI3124U0o5zds/view?usp=sharing" 
    target="_blank"
    rel="noopener noreferrer"
    className="cursor-pointer text-white hover:text-cyan transition-all duration-500"
  >
    Resume
  </a>
      </button>
      </div> 
    </div>
  );
};

export default AboutMeText;