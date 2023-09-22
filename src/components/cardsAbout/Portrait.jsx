import React, { useRef } from "react";
import { motion } from "framer-motion";

import { useInView } from "framer-motion";

const Portrait = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false });
  return (
    <motion.div
      ref={ref}
      style={{
        transform: isInView ? "none" : "opacity:0  ",
        opacity: isInView ? 1 : 0,

        transition: "all  ease-in 0.5s ",
      }}
      className="h-[100%] w-3/12 p-[20px] rounded-3xl shadow-myshadow bg-card-gradiant bg-card  border-solid border-[#444] border-[1px]"
    >
      <img
        src="./img/david2.jpg"
        alt="photoDavid"
        className=" w-[100%] h-[100%] rounded-3xl  object-cover"
      />
    </motion.div>
  );
};

export default Portrait;
