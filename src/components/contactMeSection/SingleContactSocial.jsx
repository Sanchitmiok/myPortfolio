import React from "react";
import PropTypes from "prop-types"; // <-- Add this line

const SingleContactSocial = ({ link , Icon}) => {
  return (
    <div className="text-2xl h-12 w-12 border border-orange text-orange rounded-full p-3 flex items-center justify-center ">
      <a href={link} className="cursor-pointer">
        <Icon />
      </a>
    </div>
  );
};
SingleContactSocial.propTypes = {
  link: PropTypes.node.isRequired,
  Icon: PropTypes.string.isRequired,
};

export default SingleContactSocial;