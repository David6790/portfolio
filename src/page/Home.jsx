import React from "react";

import Layout from "../layout/Layout";
import PersonnalCard from "../components/cards/PersonnalCard";
import { NavLink } from "react-router-dom";
import TriggerStyle from "../components/cards/TriggerStyle";
import AboutMe from "../components/cards/AboutMe";
import MyWorks from "../components/cards/MyWorks";
import Socials from "../components/cards/Socials";
import Experience from "../components/cards/Experience";
import ContactCard from "../components/cards/ContactCard";

const Home = () => {
  return (
    <div>
      <Layout>
        <div className=" flex flex-row w-[100%] justify-between gap-8  h-[350px] mb-10 ">
          <div className="w-8/12 ">
            <NavLink to="/about">
              <PersonnalCard />
            </NavLink>
          </div>
          <div className="  w-6/12 flex flex-col justify-start gap-10 0 h-full  ">
            <TriggerStyle />
            <AboutMe />
          </div>
        </div>
        <div className="flex flex-row w-[100%] justify-between gap-8  h-[250px] mb-10 ">
          <div className=" w-8/12">
            <NavLink to="/works">
              <MyWorks />
            </NavLink>
          </div>
          <div className="w-4/12 h-full">
            <Socials />
          </div>
        </div>
        <div className="flex flex-row w-[100%] justify-between gap-8  h-[250px]  ">
          <Experience />
          <ContactCard />
        </div>
      </Layout>
    </div>
  );
};

export default Home;
