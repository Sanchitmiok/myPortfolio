import React from "react";
import HeroText from "./HeroText";
import HeroPic from "./HeroPic";

function HeroMain() {
  return (
    <div id="hero" className="md:pt-46 pb-4 mx-2 pt-36">
      <div className="flex md:flex-row sm:flex-col sm:gap-4  max-w-[1200px] mx-auto  justify-between items-center relative px-4 ">
        <HeroText />
        <HeroPic />
      </div>
    </div>
  );
}

export default HeroMain;
