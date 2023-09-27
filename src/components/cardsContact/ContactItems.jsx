import React, { useRef } from "react";
import { motion } from "framer-motion";
import { useInView } from "framer-motion";

const ContactItems = ({ mainTitle, logo, info1, info2, mailto }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false });
  return (
    <motion.div
      ref={ref}
      className="flex flex-row justify-start gap-5"
      style={{
        transform: isInView ? "none" : "translateX(-200) opacity(0.7)",
        x: isInView ? 0 : -200,
        opacity: isInView ? 1 : 0,
        transition: "all ease-in 0.5s ",
      }}
    >
      <div className="rounded-xl shadow-myshadow bg-card-gradiant bg-card  border-solid border-[#444] border-[1px] w-[60px] h-[60px] flex flex-row justify-center items-center text-2xl ">
        {mailto ? <a href="mailto:david.lb90@gmail.com">{logo}</a> : logo}
      </div>
      <div className=" flex flex-col justify-between">
        <h2 className=" text-myGrey">{mainTitle}</h2>
        <span>{info1}</span>
        <span>{info2}</span>
      </div>
    </motion.div>
  );
};

export default ContactItems;
