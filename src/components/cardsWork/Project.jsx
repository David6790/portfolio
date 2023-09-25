import React, { useRef } from "react";
import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import IconCta from "../../layout/IconCta";

const Project = ({ imageSrc, mission, name, handleClick }) => {
  const ref = useRef(null);

  const isInView = useInView(ref, { once: false });
  return (
    <motion.div
      onClick={handleClick}
      ref={ref}
      style={{
        transform: isInView ? "none" : "opacity:0 ",

        opacity: isInView ? 1 : 0,

        transition: "all ease-in 0.8s ",
      }}
      className="lg:w-[350px] md:w-[250px] sm:w-[400px] lg:h-[350px] md:h-[280px] sm:h-[350px] rounded-3xl shadow-myshadow bg-card-gradiant bg-card  border-solid border-[#444] border-[1px] lg:p-5 md:p-2 sm:p-5  flex flex-col justify-between group cursor-pointer"
    >
      <img
        src={imageSrc}
        alt={name}
        className=" h-4/6 object-cover rounded-2xl"
      />
      <div className=" flex flex-row justify-between items-center">
        <div>
          <h2 className=" text-myGrey lg:text-sm md:text-xs sm:text-sm ">
            {mission}
          </h2>
          <h1 className=" lg:text-xl md:text-base sm:text-xl">{name}</h1>
        </div>
        <div>
          <IconCta />
        </div>
      </div>
    </motion.div>
  );
};

export default Project;
