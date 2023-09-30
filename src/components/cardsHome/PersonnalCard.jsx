import React, { useRef } from "react";
import IconCta from "../../layout/IconCta";
import { motion } from "framer-motion";

import { useInView } from "framer-motion";
import { NavLink } from "react-router-dom";

const PersonnalCard = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false });

  return (
    <NavLink to="/about">
      <motion.div
        ref={ref}
        className="  group flex flex-row w-full lg:justify-between md:justify-evenly sm:justify-evenly justify-between items-center lg:gap-10 md:gap-8 sm:gap-5 gap-5   p-[20px] rounded-3xl shadow-myshadow bg-card-gradiant bg-card  border-solid border-[#444] border-[1px] h-full "
        style={{
          transform: isInView ? "none" : "opacity:0  ",
          opacity: isInView ? 1 : 0,

          transition: "all  ease-in 0.5s ",
        }}
      >
        <div className=" lg:h-[100%] md:h-[50%] sm:h[50%] h-[50%] lg:w-[50%] md:w-[25%] sm:w-[25%] w-[50%] ">
          <img
            src="./img/david5.webp"
            alt="photoDavid"
            className=" w-[100%] h-[100%]  rounded-tl-3xl rounded-br-3xl  object-cover"
          />
        </div>
        <div className=" flex flex-col justify-evenly  w-[50%] md:gap-4  h-full  ">
          <div>
            <h2 className=" mb-5 lg:mt-8 md:mt-5 sm:mt-5 ">DEVELOPPEUR WEB</h2>
            <h1 className=" lg:text-4xl md:text-4xl sm:text-4xl text-2xl lg:mb-5 md:mb-5 sm:mb-5 mb-5">
              <span className="text-myBlue">David </span>
              <span>Long Bin.</span>
            </h1>
            <p className="  lg:flex md:flex sm:flex  lg:text-base md:text-base sm:text-xs text-xs ">
              Expert en développement front-end, créateur d'expériences web
              uniques.
            </p>
          </div>

          <div className=" w-full flex flex-row lg:justify-start md:justify-start justify-between  items-center opacity-50 group-hover:opacity-100 h-full  ">
            <div className="h-full w-full flex flex-row justify-between  items-center ">
              <p className=" lg:text-xs  md:text-xs sm:text-xs text-xs  lg:mr-5 md:mr-3 ">
                À PROPOS DE MOI
              </p>
            </div>
            <IconCta />
          </div>
        </div>
      </motion.div>
    </NavLink>
  );
};

export default PersonnalCard;
