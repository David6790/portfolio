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
        className=" flex flex-col justify-evenly h-full  w-full  rounded-3xl shadow-myshadow bg-card-gradiant bg-card  border-solid border-[#444] border-[1px] lg:p-10 md:p-10 sm:p-5 p-5 py-10 group "
        ref={ref}
        style={{
          transform: isInView ? "none" : "opacity:0 translateX(200px) ",
          opacity: isInView ? 1 : 0,
          x: isInView ? 0 : 200,
          transition: "all  ease-in 0.6s ",
        }}
      >
        <div>
          <h1 className=" text-3xl lg:text-4xl md:text-4xl sm:text-3xl">
            Exposez-moi vos besoins.
          </h1>
        </div>
        <h1 className="lg:text-4xl md:text-4xl sm:text-3xl text-3xl text-myBlue">
          Travaillons ensemble.
        </h1>
        <div className="flex flex-row justify-between items-center opacity-50 group-hover:opacity-100  ">
          <p>CONTACTEZ-MOI</p>
          <IconCta />
        </div>
      </motion.div>
    </NavLink>
  );
};

export default ContactCard;
