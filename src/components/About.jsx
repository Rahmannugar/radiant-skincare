import React from "react";
import diagonal from "../assets/diagonal.png";
import pipette from "../assets/pipette.png";

const About = ({ roboto, sanchez }) => {
  return (
    <div className="text-center px-10">
      <h1 className="font-semibold leading-6 text-xl pb-16" style={roboto}>
        About us
      </h1>
      <div className="relative">
        <img src={diagonal} alt="diagonal" />
        <img
          src={pipette}
          alt="pipette"
          className="absolute top-[90%] left-[80%] transform -translate-x-1/2 -translate-y-1/2 h-2/5  w-2/4"
        />
      </div>

      <div>
        
      </div>
    </div>
  );
};

export default About;
