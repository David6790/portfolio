import React, { useEffect, useRef, useState } from "react";
import Layout from "../layout/Layout";
import { useGetProjectsQuery } from "../API/api";
import { useDispatch, useSelector } from "react-redux";
import { setProjects, works } from "../features/themes/projectSlice";
import Project from "../components/cardsWork/Project";
import { motion } from "framer-motion";

import { useInView } from "framer-motion";
import TestimonialSlider from "../components/testimonilSlider/TestimonialSlider";
import ProjectModal from "../components/ProjectModal/ProjectModal";

const Works = () => {
  const { data: projects, refetch } = useGetProjectsQuery();
  const dispatch = useDispatch();
  const myProject = useSelector(works);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false });
  const [selectedProject, setSelectedProject] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleClick = (project) => {
    setSelectedProject(project);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setSelectedProject(null);
  };

  useEffect(() => {
    refetch();
    if (projects && projects.projects) {
      dispatch(setProjects(projects.projects));
    }
  }, [dispatch, myProject, projects, refetch]);

  return (
    <Layout>
      <ProjectModal
        isOpen={isModalOpen}
        onClose={handleCloseModal}
        project={selectedProject}
      />
      <div className="flex flex-row justify-between gap-10 ">
        <div className=" w-full text-2xl">
          <div className="  flex flex-row justify-center items-center mb-10 mt-10">
            <motion.h1
              ref={ref}
              className=" lg:text-4xl md:text-4xl sm:text-3xl text-2xl"
              style={{
                transform: isInView ? "none" : "opacity:0  ",
                opacity: isInView ? 1 : 0,

                transition: "all  ease-in 0.5s ",
              }}
            >
              ILS M'ONT FAIT <span className=" text-myBlue">CONFIANCE</span>{" "}
            </motion.h1>
          </div>
          <motion.div
            ref={ref}
            style={{
              transform: isInView ? "none" : "opacity:0  ",
              opacity: isInView ? 1 : 0,

              transition: "all ease-in 0.9s ",
            }}
          >
            <TestimonialSlider />
          </motion.div>
          <div className="  flex flex-row justify-center items-center mb-10 mt-20">
            <h1 className=" lg:text-4xl md:text-4xl sm:text-3xl text-2xl">
              LES <span className=" text-myBlue">PROJETS</span> RÉALISÉS
            </h1>
          </div>

          <div className="w-full flex flex-row flex-wrap justify-center mt-20  gap-10">
            {myProject
              ? myProject.map((item) => (
                  <Project
                    item={item}
                    key={item.id}
                    handleClick={() => handleClick(item)}
                  />
                ))
              : ""}
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Works;
