import React, { useRef } from "react";
import IconCta from "../../layout/IconCta";
import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { NavLink } from "react-router-dom";

const MyWorks = () => {
  const ref = useRef();
  const isInView = useInView(ref, { once: false });

  return (
    <NavLink to="/works">
      <motion.div
        className="h-full flex flex-col justify-between  lg:p-[20px] md:p-[10px] sm:p-[10px] p-5 w-full  rounded-3xl shadow-myshadow bg-card-gradiant bg-card  border-solid border-[#444] border-[1px] group"
        ref={ref}
        style={{
          transform: isInView ? "none" : "scale(0) opacity(0.7)",
          scale: isInView ? 1 : 0,
          opacity: isInView ? 1 : 0,
          transition: "all ease-in 0.5s",
        }}
      >
        <div className=" text-white lg:text-6xl md:text-5xl sm:text-5xl text-4xl flex flex-row justify-between mt-[30px] ">
          <i className="fa-brands fa-react"></i>
          <img
            src="./img/redux.png"
            alt=""
            className=" lg:h-[60px] md:h-[45px] sm:h-[45px] h-[40px]"
          />
          <i className="fa-brands fa-js"></i>
          <i className="fa-brands fa-css3-alt"></i>
          <i className="fa-brands fa-html5"></i>
        </div>
        <div className="flex flex-row items-center justify-between w-full">
          <h1 className="lg:text-3xl md:text-2xl sm:text-2xl">
            Mes <span className=" text-myBlue">Compétences</span> &
            <span className=" text-myBlue"> Réalisations</span>
          </h1>
          <IconCta />
        </div>
      </motion.div>
    </NavLink>
  );
};

export default MyWorks;
