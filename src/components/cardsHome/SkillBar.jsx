import React, { useRef } from "react";
import { motion } from "framer-motion";
import { useInView } from "framer-motion";

const SkillBar = ({ skill, level }) => {
  const ref = useRef(null);

  const isInView = useInView(ref, { once: false });
  return (
    <div className="mb-4 flex flex-col justify-between items-center">
      <div className=" flex flex-row justify-between w-full">
        <h3 className="text-xl">{skill}</h3>
        <div className="text-xs">{level}%</div>
      </div>

      <div className=" w-full rounded-full">
        <motion.div
          ref={ref}
          className=" bg-myBlue text-xs leading-none  text-center text-white rounded-full h-[3px]"
          style={{
            width: `${level}%`,
            transform: isInView ? "none" : "scaleX(0) ",
            transformOrigin: "left",

            scaleX: isInView ? 1 : 0,
            transition: `all   ease-in 1.5s `,
          }}
        ></motion.div>
      </div>
    </div>
  );
};

export default SkillBar;
