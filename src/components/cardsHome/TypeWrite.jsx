import React, { useRef } from "react";
import { Typewriter } from "react-simple-typewriter";
import { motion } from "framer-motion";
import { useInView } from "framer-motion";

const TypeWrite = () => {
  const words = ["Développeur.", "Freelance.", "Une salope."];
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false });
  return (
    <motion.div
      ref={ref}
      className="  h-[1
        20px]  flex flex-row justify-start items-center rounded-3xl  w-full py-5 px-2  "
      style={{
        transform: isInView ? "none" : " opacity(0.7)",

        opacity: isInView ? 1 : 0,
        transition: "all ease-in 0.5s ",
      }}
    >
      <h1 className=" text-3xl ">
        Je suis
        <span className=" ml-2 text-myBlue ">
          <Typewriter
            words={words}
            typeSpeed={120}
            deleteSpeed={50}
            loop={0}
            cursor={true}
            delaySpeed={2800}
          />
        </span>
      </h1>
    </motion.div>
  );
};

export default TypeWrite;
