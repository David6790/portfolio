import React, { useRef } from "react";
import { motion } from "framer-motion";
import { useInView } from "framer-motion";

const Experience = () => {
  const ref = useRef(null);

  const isInView = useInView(ref, { once: false });
  return (
    <motion.div
      ref={ref}
      className=" flex lg:flex-row md:flex-col lg:justify-evenly md:justify-around items-center h-full w-full rounded-3xl shadow-myshadow bg-card-gradiant bg-card  border-solid border-[#444] border-[1px] lg:py-5 md:py-3  md:px-5 "
      style={{
        transform: isInView ? "none" : "opacity:0 scale(0) ",

        opacity: isInView ? 1 : 0,
        scale: isInView ? 1 : 1,
        transition: "all  ease-in 0.5s ",
      }}
    >
      <div className=" lg:h-full md:h-[40%] lg:w-[40%] md:w-[100%]  flex flex-col justify-center text-center rounded-3xl shadow-myshadow bg-card-gradiant bg-card  border-solid border-[#444] border-[1px] pl-1 pr-1">
        <div>
          <h1 className=" lg:text-4xl md:text-2xl text-myBlue lg:mb-10 md:mb-0">
            +18
          </h1>
        </div>
        <div className=" text-xs">
          <h2>PROJETS</h2>
          <h2>RÉALISÉS</h2>
        </div>
      </div>
      <div className=" lg:h-full md:h-[40%] lg:w-[40%] md:w-[100%] flex flex-col justify-center text-center rounded-3xl shadow-myshadow bg-card-gradiant bg-card  border-solid border-[#444] border-[1px] pl-5 pr-5">
        <div>
          <h1 className=" lg:text-4xl md:text-2xl text-myBlue lg:mb-10 md:mb-0">
            +18
          </h1>
        </div>
        <div className=" text-xs ">
          <h2>CLIENTS</h2>
          <h2>SATISFAITS</h2>
        </div>
      </div>
    </motion.div>
  );
};

export default Experience;
