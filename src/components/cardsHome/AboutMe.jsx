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
      className=" flex flex-col items-center h-[60%] overflow-hidden justify-center  "
      style={{
        transform: isInView ? "none" : " opacity(0) ",
        opacity: isInView ? 1 : 0,

        transition: "all 0.9s ease-in 0.9s",
      }}
    >
      <div>
        <img
          src={"./img/signature.png"}
          alt="signature"
          className="lg:w-full md:w-60 md:mt-[-90px] lg:mt-0    "
        />
      </div>
    </motion.div>
  );
};

export default AboutMe;
