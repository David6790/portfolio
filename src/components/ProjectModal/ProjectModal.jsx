import React from "react";

const ProjectModal = ({ isOpen, onClose, project }) => {
  if (!isOpen) return null;
  return (
    <div className="fixed top-0 left-0 w-screen h-screen bg-modalBg z-10 p-20">
      <div className=" w-full h-full rounded-3xl shadow-myshadow bg-spe-gradient border-solid border-[#444] border-[1px] p-10 ">
        <div className=" flex flex-row h-[10%]  justify-between mb-5">
          <h1 className=" text-3xl text-myBlue">{project.name}</h1>
          <button onClick={onClose} className="text-sm text-white underline">
            Fermer
          </button>
        </div>
        <div className=" flex flex-row w-full h-[90%] p-2   ">
          <div className="flex flex-row w-[100%] h-[100%] justify-between gap-10 p-2 ">
            <img
              src={project.image}
              alt={project.name}
              className="rounded-3xl shadow-myshadow bg-spe-gradient border-solid border-[#444] border-[1px] p-5 w-[50%] object-contain  "
            />

            <div className="rounded-3xl shadow-myshadow bg-spe-gradient border-solid border-[#444] border-[1px] p-5 overflow-scroll">
              <h1 className=" text-xl text-myBlue mb-5">
                Contexte de la mission :{" "}
              </h1>
              <p className=" text-sm mb-10">{project.missionContext}</p>
              <h1 className=" text-xl text-myBlue mb-5">Défis techniques: </h1>
              <p className=" text-sm mb-10">{project.technicalChallenges}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectModal;