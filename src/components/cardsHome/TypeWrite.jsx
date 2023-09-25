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
      className="  lg:h-[120px] md:h-[120px] sm:h-[120px] h-auto flex flex-row lg:justify-start items-center rounded-3xl  w-full lg:py-5 md:py-5 sm:py-5 py-0  md:justify-center sm:justify-center justify-center  "
      style={{
        transform: isInView ? "none" : " opacity(0.7)",

        opacity: isInView ? 1 : 0,
        transition: "all ease-in 0.5s ",
      }}
    >
      <h1 className=" lg:text-2xl md:text-2xl sm:text-2xl text-3xl ">
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
