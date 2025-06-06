import React from "react";
import PropTypes from "prop-types";
const ExperienceInfo = ({ number, text }) => {
  return (
    <div className="flex flex-col justify-center items-center gap-3">
      <p className="font-bold text-6xl text-cyan">{number}</p>
      <p className="font-bold text-xl text-lightGrey uppercase -mt-4">{text}</p>
    </div>
  );
};

ExperienceInfo.propTypes = {
  number: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
};

export default ExperienceInfo;