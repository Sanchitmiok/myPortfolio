import React from "react";
import PropTypes from "prop-types"; // <-- Add this line

const SingleInfo = ({ text , Image}) => {
  return (
    <div className="flex gap-4 items-center justify-start">
      <Image className="text-3xl" />
      <p>{text}</p>
    </div>
  );
};
SingleInfo.propTypes = {
  Image: PropTypes.node.isRequired,
  text: PropTypes.string.isRequired,
};

export default SingleInfo;