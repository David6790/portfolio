import React from "react";
import { Typewriter } from "react-simple-typewriter";

const WorkTitle = () => {
  const words = ["Mes Projets & Réalisations"];
  return (
    <>
      <h1 className=" text-center text-4xl mb-14 ">
        <Typewriter
          words={words}
          typeSpeed={80}
          deleteSpeed={50}
          loop={1}
          cursor={true}
          delaySpeed={2800}
        />
      </h1>
    </>
  );
};

export default WorkTitle;
