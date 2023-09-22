import React, { useEffect } from "react";
import Layout from "../layout/Layout";
import { useGetProjectsQuery } from "../API/api";
import { useDispatch, useSelector } from "react-redux";
import { setProjects, works } from "../features/themes/projectSlice";

const Works = () => {
  const { data: projects, refetch } = useGetProjectsQuery();
  const dispatch = useDispatch();
  const myProject = useSelector(works);

  useEffect(() => {
    refetch();
    if (projects && projects.projects) {
      dispatch(setProjects(projects.projects));
    }
    console.log("refetched");
    console.log(myProject);
    // eslint-disable-next-line
  }, [refetch]);

  return (
    <Layout>
      <div>
        {myProject
          ? myProject.map((item) => (
              <div key={item.id}>
                <h2>{item.name}</h2>
                <img src={item.image} alt="" />
              </div>
            ))
          : ""}
      </div>
    </Layout>
  );
};

export default Works;
