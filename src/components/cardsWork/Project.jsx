import React, { useRef } from "react";
import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import IconCta from "../../layout/IconCta";

const Project = ({ imageSrc, mission, name }) => {
  const ref = useRef(null);

  const isInView = useInView(ref, { once: false });
  return (
    <motion.div
      ref={ref}
      style={{
        transform: isInView ? "none" : "opacity:0 ",

        opacity: isInView ? 1 : 0,

        transition: "all ease-in 1.2s ",
      }}
      className="w-[350px] h-[350px] rounded-3xl shadow-myshadow bg-card-gradiant bg-card  border-solid border-[#444] border-[1px] p-5  flex flex-col justify-between group"
    >
      <img
        src={imageSrc}
        alt={name}
        className=" h-4/6 object-cover rounded-2xl"
      />
      <div className=" flex flex-row justify-between items-center">
        <div>
          <h2 className=" text-myGrey text-sm ">{mission}</h2>
          <h1 className=" text-xl">{name}</h1>
        </div>
        <div>
          <IconCta />
        </div>
      </div>
    </motion.div>
  );
};

export default Project;
