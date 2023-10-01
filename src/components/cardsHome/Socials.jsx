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
        scale: isInView ? 1 : 0.7,
        opacity: isInView ? 1 : 0,
        transition: "all ease-in 0.5s ",
      }}
    >
      <div className=" text-white text-4xl flex flex-row justify-evenly mb-5 border-solid border-[#444] rounded-2xl  sm:mx-0 p-5 mx-0 border-[1px]">
        <a
          href="https://github.com/David6790"
          rel="noreferrer"
          target="_blank"
          aria-label="Lien vers github"
        >
          <i className="fa-brands fa-github"></i>
        </a>
        <a
          href="https://www.linkedin.com/in/david-long-bin-65a261137/"
          rel="noreferrer"
          target="_blank"
          aria-label="Lien vers linkedin"
        >
          <i className="fa-brands fa-linkedin-in"></i>
        </a>
        <a
          href="https://www.instagram.com/david_long_bin/"
          rel="noreferrer"
          target="_blank"
          aria-label="Lien vers instagram"
        >
          <i className="fa-brands fa-instagram"></i>
        </a>
      </div>
      <div>
        <h1 className=" text-2xl mb-5">MES RÉSEAUX</h1>
        <p className="text-myBlue  ">FOLLOW ME</p>
      </div>
    </motion.div>
  );
};

export default Socials;
