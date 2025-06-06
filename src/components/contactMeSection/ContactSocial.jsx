import SingleContactSocial from "./SingleContactSocial";
import { FaLinkedinIn } from "react-icons/fa";
import { FiGithub } from "react-icons/fi";
import LeetcodeIcon from "./LeetCode";
import GFGIcon from "./GFGIcon";
import React from "react";
const ContactSocial = () => {
  return (
    <div className="flex gap-4">
      <SingleContactSocial link="https://www.linkedin.com/in/sanchit-mishra-759958257/" Icon={FaLinkedinIn} />
      <SingleContactSocial link="https://github.com/Sanchitmiok" Icon={FiGithub} />
      <SingleContactSocial link="https://www.geeksforgeeks.org/user/sanchit2026/" Icon={GFGIcon} />
      <SingleContactSocial link="https://leetcode.com/u/sanchitmishra11/" Icon={LeetcodeIcon} />
    </div>
  );
};

export default ContactSocial;