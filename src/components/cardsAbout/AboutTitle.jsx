import React, { useRef } from "react";
import { motion } from "framer-motion";

import { useInView } from "framer-motion";
import { Typewriter } from "react-simple-typewriter";

const AboutTitle = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const words = ["Expertise & Expériences"];
  return (
    <div className=" lg:w-9/12 md:w-8/12 sm:w-7/12 flex flex-col justify-between   ">
      <div className=" h-2/6 flex flex-row justify-evenly items-center text-3xl  ">
        <i className="fa-regular fa-compass text-myGrey"></i>
        <h1 className="lg:text-4xl md:text-xl sm:text-lg">
          <Typewriter
            words={words}
            typeSpeed={80}
            deleteSpeed={50}
            loop={1}
            cursor={false}
            delaySpeed={2800}
          />
        </h1>
        <i className="fa-regular fa-compass text-myGrey"></i>
      </div>

      <motion.div
        ref={ref}
        className="p-[20px] h-4/6 rounded-3xl shadow-myshadow bg-card-gradiant  bg-card  border-solid border-[#444] border-[1px] flex flex-col justify-center"
        style={{
          transform: isInView ? "none" : "opacity:0  ",
          opacity: isInView ? 1 : 0,

          transition: "all 0.6s ease-in 0.5s ",
        }}
      >
        <h1 className=" lg:text-3xl md:text-3xl sm:text-2xl mb-3 ">
          David <span className=" text-myBlue">Long Bin</span>
        </h1>
        <p className=" text-justify text-sm">
          Avec une formation solide en Physique, Mathématiques et Informatique
          de l'Université de Strasbourg, j'ai évolué pour devenir un intégrateur
          web spécialisé en React grâce à OpenClassrooms. Mon parcours m'a doté
          d'une approche rigoureuse et pragmatique. Que ce soit dans la
          conception de solutions technologiques ou la création d'applications
          web, je mets toujours en avant la précision et l'efficacité pour
          répondre aux besoins spécifiques de chaque projet.
        </p>
      </motion.div>
    </div>
  );
};

export default AboutTitle;
