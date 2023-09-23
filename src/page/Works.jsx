import React, { useEffect, useRef } from "react";
import Layout from "../layout/Layout";
import { useGetProjectsQuery } from "../API/api";
import { useDispatch, useSelector } from "react-redux";
import { setProjects, works } from "../features/themes/projectSlice";
import Project from "../components/cardsWork/Project";
import { motion } from "framer-motion";

import { useInView } from "framer-motion";
import TestimonialSlider from "../components/testimonilSlider/TestimonialSlider";

const Works = () => {
  const { data: projects, refetch } = useGetProjectsQuery();
  const dispatch = useDispatch();
  const myProject = useSelector(works);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false });

  useEffect(() => {
    refetch();
    if (projects && projects.projects) {
      dispatch(setProjects(projects.projects));
    }
  }, [dispatch, myProject, projects, refetch]);

  return (
    <Layout>
      <div className="flex flex-row justify-between gap-10 ">
        <div className=" w-full text-2xl">
          <div className="  flex flex-row justify-center items-center mb-10 mt-10">
            <motion.h1
              ref={ref}
              className=" text-4xl"
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

              transition: "all 0.3s  ease-in 0.9s ",
            }}
          >
            <TestimonialSlider />
          </motion.div>
          <div className="  flex flex-row justify-center items-center mb-10 mt-20">
            <h1 className=" text-4xl">
              LES <span className=" text-myBlue">PROJETS</span> RÉALISÉS
            </h1>
          </div>

          <div className="w-full flex flex-row flex-wrap justify-center mt-20  gap-10">
            {myProject
              ? myProject.map((item) => (
                  <Project
                    imageSrc={item.image}
                    mission={item.typeOfMission.toUpperCase()}
                    name={item.name}
                    key={item.id}
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
