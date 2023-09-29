import React, { useRef } from "react";
import { motion } from "framer-motion";
import { useInView } from "framer-motion";

const SkillBar = ({ skill, description, level }) => {
  const ref = useRef(null);

  const isInView = useInView(ref, { once: false });
  return (
    <div className="mb-4 flex flex-col justify-between items-center">
      <div className=" flex flex-row justify-between w-full">
        <div className=" flex flex-row justify-start items-center">
          <h3 className="text-xl mr-2">{skill}</h3>
          <h3 className=" text-xs">{description}</h3>
        </div>

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
