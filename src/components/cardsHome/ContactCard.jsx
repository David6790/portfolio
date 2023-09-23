import React, { useRef } from "react";
import IconCta from "../../layout/IconCta";
import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { NavLink } from "react-router-dom";

const ContactCard = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false });

  return (
    <NavLink to="/contact">
      <motion.div
        className=" flex flex-col justify-evenly h-full  w-full rounded-3xl shadow-myshadow bg-card-gradiant bg-card  border-solid border-[#444] border-[1px] p-10 group"
        ref={ref}
        style={{
          transform: isInView ? "none" : "opacity:0 translateX(200px) ",
          opacity: isInView ? 1 : 0,
          x: isInView ? 0 : 200,
          transition: "all  ease-in 0.6s ",
        }}
      >
        <div>
          <h1 className=" text-5xl">Et si...</h1>
        </div>
        <div className="flex flex-row justify-between items-end ">
          <h1 className="text-4xl text-myBlue">On travaillait ensemble ?</h1>
          <IconCta />
        </div>
      </motion.div>
    </NavLink>
  );
};

export default ContactCard;