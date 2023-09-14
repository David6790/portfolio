import React, { useRef } from "react";
import { motion } from "framer-motion";
import { useInView } from "framer-motion";

const TriggerStyle = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false });

  return (
    <motion.div
      ref={ref}
      className=" flex flex-row w-ful justify-center p-8 items-center rounded-3xl shadow-myshadow hover:shadow-myHooverShadow bg-card-gradiant bg-card  border-solid border-[#444] border-[1px]"
      style={{
        transform: isInView ? "none" : " opacity(0);  translateX(200px) ",
        opacity: isInView ? 1 : 0,
        x: isInView ? 0 : 200,
        transition: "all  ease-in 1s",
      }}
    >
      <div className=" flex flex-row w-full justify-around ">
        <button>Élégant</button>
        <button>Lumineux</button>
        <button>Coloré</button>
      </div>
    </motion.div>
  );
};

export default TriggerStyle;