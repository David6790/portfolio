import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Routeur from "./Routeur";
import { AnimatePresence } from "framer-motion";
import { useGetProjectsQuery } from "./API/api";
import { works } from "./features/themes/projectSlice";
import { setProjects } from "./features/themes/projectSlice";

function App() {
  const dispatch = useDispatch();
  const myProject = useSelector(works);
  const { data: projects, refetch } = useGetProjectsQuery();
  useEffect(() => {
    if (!myProject || myProject.length === 0) {
      refetch();
      if (projects && projects.projects) {
        dispatch(setProjects(projects.projects));
      }
    }
  }, [dispatch, myProject, projects, refetch]);
  return (
    <div className={" bg-spe-gradient  text-white App  m-auto"}>
      <main className=" lg:max-w-[1440px] min-h-screen m-auto leading-[19.2px] font-main-font scroll-smooth py-[30px] lg:px-[130px] md:px-[50px] sm:px-[20px] px-[10px] ">
        <AnimatePresence>
          <Routeur />
        </AnimatePresence>
      </main>
    </div>
  );
}

export default App;
