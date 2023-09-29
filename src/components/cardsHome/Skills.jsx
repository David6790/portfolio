import React, { useRef } from "react";
import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import SkillBar from "./SkillBar";

const Skills = () => {
  const ref = useRef(null);

  const isInView = useInView(ref, { once: false });
  const skills = [
    { name: <i className="fa-brands fa-html5"></i>, level: 95 },
    { name: <i className="fa-brands fa-css3"></i>, level: 95 },
    { name: <i className="fa-brands fa-js"></i>, level: 80 },
    { name: <i className="fa-brands fa-react"></i>, level: 75 },
  ];

  return (
    <motion.div
      ref={ref}
      className=" flex lg:flex-col md:flex-col sm:flex-col flex-col lg:justify-evenly md:justify-around sm:justify-around justify-evenly  items-center h-full w-[100%] rounded-3xl shadow-myshadow bg-card-gradiant bg-card  border-solid border-[#444] border-[1px] lg:py-5 md:py-3 py-5  sm:py-3 md:px-5 sm:px-5 px-5  "
      style={{
        transform: isInView ? "none" : "opacity:0 scale(0) ",

        opacity: isInView ? 1 : 0,
        scale: isInView ? 1 : 1,
        transition: "all  ease-in 0.8s ",
      }}
    >
      <h1 className=" lg:text-xl md:text-base sm:text-base text-xl mb-2">
        Mes <span className=" text-myBlue">Compétences</span>
      </h1>
      <div className=" flex flex-col w-full h-full">
        {skills.map((skill) => (
          <SkillBar key={skill.name} skill={skill.name} level={skill.level} />
        ))}
      </div>
    </motion.div>
  );
};

export default Skills;
