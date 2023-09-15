import React, { useRef } from "react";
import IconCta from "../../layout/IconCta";
import { motion } from "framer-motion";
import { useInView } from "framer-motion";

const Socials = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false });

  return (
    <motion.div
      className=" flex flex-col justify-between rounded-3xl shadow-myshadow bg-card-gradiant w-full h-full bg-card p-[20px]  border-solid border-[#444] border-[1px] group"
      ref={ref}
      style={{
        transform: isInView ? "none" : "scale(0); opacity(0.7)",
        scale: isInView ? 1 : 0,
        opacity: isInView ? 1 : 0,
        transition: "all ease-in 0.7s ",
      }}
    >
      <div className=" text-white text-6xl flex flex-row justify-evenly  mt-[30px] border-solid border-[#444] rounded-3xl p-2 border-[1px]">
        <i className="fa-brands fa-instagram"></i>
        <i className="fa-brands fa-github"></i>
      </div>
      <div className=" flex flex-col ">
        <p className="text-myBlue ">FOLLOW ME</p>
        <div className="flex flex-row items-center justify-between w-full">
          <h1 className="text-3xl">Mes Réseaux</h1>
          <IconCta />
        </div>
      </div>
    </motion.div>
  );
};

export default Socials;
