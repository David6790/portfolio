import React from "react";
import { motion, AnimatePresence } from "framer-motion";

const ProjectModal = ({ isOpen, onClose, project }) => {
  if (!isOpen) return null;
  return (
    <AnimatePresence>
      <motion.div
        className="fixed top-0 left-0 w-screen h-screen bg-modalBg z-10 lg:p-20  p-5"
        initial={{
          opacity: 0,
          scale: 0,
        }}
        animate={{
          opacity: 1,
          scale: 1,
          transition: {
            ease: "easeOut",
            duration: 0.45,
          },
        }}
        exit={{
          opacity: 0,
          scale: 0.75,
          transition: {
            ease: "easeIn",
            duration: 0.55,
          },
        }}
      >
        <div className=" w-full h-full rounded-3xl shadow-myshadow bg-spe-gradient border-solid border-[#444] border-[1px] lg:p-10 md:p-10 sm:p-10 p-5 ">
          <div className=" flex flex-row lg:h-[10%] h-[5%]  justify-between items-center lg:mb-5 md:mb-5 sm:mb-5 mb-2">
            <h1 className=" lg:text-3xl  text-xl text-myBlue">
              {project.name}
            </h1>
            <button onClick={onClose} className="text-sm text-white underline">
              Fermer
            </button>
          </div>
          <div className=" flex flex-row w-full h-[90%] p-2 cursor-pointer   ">
            <div className="flex lg:flex-row flex-col w-[100%] h-[100%] justify-between gap-10 p-2 ">
              <div className="lg:w-6/12 w-full ">
                <a href={project.link} target="_blank" rel="noreferrer">
                  <img
                    src={project.image}
                    alt={project.name}
                    className="rounded-3xl shadow-myshadow bg-spe-gradient border-solid border-[#444] border-[1px] p-5 lg:w-[100%]  lg:h-full h-[200px] w-[100%] lg:object-contain md:object-cover object-contain  "
                  />
                </a>
              </div>

              <div className=" lg:w-6/12 w-full rounded-3xl shadow-myshadow bg-spe-gradient border-solid border-[#444] border-[1px] p-5 overflow-scroll">
                <h1 className=" text-xl text-myBlue mb-5">
                  Contexte de la mission :
                </h1>
                <p className=" text-sm mb-10">{project.missionContext}</p>
                <h1 className=" text-xl text-myBlue mb-5">Défis techniques:</h1>
                <p className=" text-sm mb-10">{project.technicalChallenges}</p>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </AnimatePresence>
  );
};

export default ProjectModal;
