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
        className="  group flex flex-row w-full lg:justify-between md:justify-evenly sm:justify-evenly justify-between items-center gap-11 p-[20px] rounded-3xl shadow-myshadow bg-card-gradiant bg-card  border-solid border-[#444] border-[1px] h-full "
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
        <div className=" flex flex-col justify-between w-[50%] md:gap-4  h-full ">
          <div>
            <h2 className=" mb-5 mt-12 ">DEVELOPPEUR WEB</h2>
            <h1 className=" text-4xl lg:mb-5 md:mb-5 sm:mb-5 mb-0">
              <span className="text-myBlue">David </span>
              <span>Long Bin.</span>
            </h1>
            <p className=" hidden lg:flex md:flex sm:flex ">
              Développeur Frontend basé à Strasbourg
            </p>
          </div>

          <div className=" w-full flex flex-row justify-end opacity-50 group-hover:opacity-100  ">
            <IconCta />
          </div>
        </div>
      </motion.div>
    </NavLink>
  );
};

export default PersonnalCard;
