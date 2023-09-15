import React, { useRef } from "react";
import { motion } from "framer-motion";
import { useInView } from "framer-motion";

const AboutMe = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, {
    once: false,
  });

  return (
    <motion.div
      ref={ref}
      className=" flex flex-colitems-center h-[75%] overflow-hidden justify-center items-center "
      style={{
        transform: isInView ? "none" : " opacity(0);  translateX(200px) ",
        opacity: isInView ? 1 : 0,
        x: isInView ? 0 : 200,
        transition: "all 0.5s ease-in 0.9s",
      }}
    >
      <div>
        <img src="./img/signature.png" alt="signature" className="w-full  " />
      </div>
    </motion.div>
  );
};

export default AboutMe;
