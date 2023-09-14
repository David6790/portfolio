import React, { useRef } from "react";
import { motion } from "framer-motion";
import { useInView } from "framer-motion";

const Experience = () => {
  const ref = useRef(null);

  const isInView = useInView(ref, { once: false });
  return (
    <motion.div
      ref={ref}
      className=" flex flex-row justify-evenly items-center h-full w-6/12 rounded-3xl shadow-myshadow bg-card-gradiant bg-card  border-solid border-[#444] border-[1px] py-5 "
      style={{
        transform: isInView ? "none" : "opacity:0; scale(0) ",

        opacity: isInView ? 1 : 0,
        scale: isInView ? 1 : 0,
        transition: "all  ease-in 0.5s ",
      }}
    >
      <div className=" h-full w-[30%] flex flex-col justify-center text-center rounded-3xl shadow-myshadow bg-card-gradiant bg-card  border-solid border-[#444] border-[1px] pl-5 pr-5">
        <div>
          <h1 className=" text-4xl text-myBlue mb-10">02</h1>
        </div>
        <div className=" text-xs">
          <h2>ANNÉE</h2>
          <h2>D'EXPÉRIENCE</h2>
        </div>
      </div>
      <div className=" h-full w-[30%] flex flex-col justify-center text-center rounded-3xl shadow-myshadow bg-card-gradiant bg-card  border-solid border-[#444] border-[1px] pl-5 pr-5">
        <div>
          <h1 className=" text-4xl text-myBlue mb-10">18</h1>
        </div>
        <div className=" text-xs">
          <h2>PROJETS</h2>
          <h2>RÉALISÉS</h2>
        </div>
      </div>
      <div className=" h-full w-[30%] flex flex-col justify-center text-center rounded-3xl shadow-myshadow bg-card-gradiant bg-card  border-solid border-[#444] border-[1px] pl-5 pr-5">
        <div>
          <h1 className=" text-4xl text-myBlue mb-10">10</h1>
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
