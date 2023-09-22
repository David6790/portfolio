import React, { useEffect } from "react";
import Layout from "../layout/Layout";
import { useGetProjectsQuery } from "../API/api";
import { useDispatch, useSelector } from "react-redux";
import { setProjects, works } from "../features/themes/projectSlice";
import Project from "../components/cardsWork/Project";

import ContactCard from "../components/cardsHome/ContactCard";
import WorkTitle from "../components/cardsWork/WorkTitle";

const Works = () => {
  const { data: projects, refetch } = useGetProjectsQuery();
  const dispatch = useDispatch();
  const myProject = useSelector(works);

  useEffect(() => {
    refetch();
    if (projects && projects.projects) {
      dispatch(setProjects(projects.projects));
    }
  }, [dispatch, myProject, projects, refetch]);

  return (
    <Layout>
      <div className="flex flex-row justify-between ">
        <div className="w-4/12 ">
          <div className=" h-1/5">
            <ContactCard />
          </div>
        </div>
        <div className=" w-9/12">
          <WorkTitle />
          <div className="w-full flex flex-row flex-wrap justify-center  gap-10">
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
