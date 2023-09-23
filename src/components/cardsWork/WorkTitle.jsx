import React from "react";
import { Typewriter } from "react-simple-typewriter";

const WorkTitle = ({ titleText }) => {
  const words = [titleText];
  return (
    <>
      <h1 className="text-3xl  ">
        <Typewriter
          words={words}
          typeSpeed={80}
          deleteSpeed={50}
          loop={1}
          cursor={false}
          delaySpeed={2800}
        />
      </h1>
    </>
  );
};

export default WorkTitle;
