import React, { useRef } from "react";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";

const Socials = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false });

  return (
    <motion.div
      className=" flex flex-col justify-evenly   rounded-3xl shadow-myshadow bg-card-gradiant w-full py-5 px-5 h-full bg-card   border-solid border-[#444] border-[1px] group"
      ref={ref}
      style={{
        transform: isInView ? "none" : "scale(0) opacity(0.7)",
        scale: isInView ? 1 : 0,
        opacity: isInView ? 1 : 0,
        transition: "all ease-in 0.5s ",
      }}
    >
      <div className=" text-white text-4xl flex flex-row justify-evenly mb-5 border-solid border-[#444] rounded-2xl mx-5 p-5 border-[1px]">
        <i className="fa-brands fa-instagram"></i>
        <i className="fa-brands fa-github"></i>
        <i className="fa-brands fa-linkedin-in"></i>
      </div>
      <div className="px-5 ">
        <h1 className=" text-2xl mb-5">MES RÉSEAUX</h1>
        <p className="text-myBlue  ">FOLLOW ME</p>
      </div>
    </motion.div>
  );
};

export default Socials;
