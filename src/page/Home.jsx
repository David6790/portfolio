import React from "react";
import Layout from "../layout/Layout";
import PersonnalCard from "../components/cardsHome/PersonnalCard";
import AboutMe from "../components/cardsHome/AboutMe";
import MyWorks from "../components/cardsHome/MyWorks";
import Socials from "../components/cardsHome/Socials";

import ContactCard from "../components/cardsHome/ContactCard";
import TypeWrite from "../components/cardsHome/TypeWrite";
import Skills from "../components/cardsHome/Skills";

const Home = () => {
  return (
    <div>
      <Layout>
        <div className=" flex lg:flex-row w-[100%] justify-between gap-8  lg:h-[350px] mb-10 md:flex-col sm:flex-col flex-col ">
          <div className="lg:w-8/12 md:w-full sm:w-full ">
            <PersonnalCard />
          </div>
          <div className="  lg:w-6/12 flex flex-col justify-start gap-10 0 h-full  md:w-full sm:w-full  ">
            <TypeWrite />
            <AboutMe />
          </div>
        </div>
        <div className="flex lg:flex-row md:flex-row sm:flex-row flex-col  lg:justify-between md:justify-between sm:justify-between justify-evenly  w-full  lg:h-[250px] md:h-[250px] sm:h-[250px] h-[450px] lg:mb-10 md:mb-10 sm:mb-10 gap-8">
          <div className=" lg:w-8/12 md:w-8/12 sm:w-8/12 w-full lg:h-auto md:h-auto sm:h-auto h-[50%] ">
            <MyWorks />
          </div>
          <div className=" lg:w-4/12 md:w-4/12 sm:w-4/12 w-full lg:mb-0 md:mb-0 sm:mb-0 mb-10 lg:h-auto md:h-auto sm:h-auto h-[50%]">
            <Skills />
          </div>
        </div>
        <div className="flex lg:flex-row md:flex-row sm:flex-row flex-col w-[100%] justify-between gap-8  lg:h-[250px] md:h-[250px] sm:h-[250px] h-[400px]  ">
          <div className=" lg:w-5/12 md:w-5/12 sm:w-5/12 w-full lg:h-full md:h-full sm:h-full  h-[50%]">
            <Socials />
          </div>
          <div className=" lg:w-7/12 md:w-7/12 sm:w-7/12 w-full lg:h-full md:h-full sm:h-full  h-[50%]">
            <ContactCard />
          </div>
        </div>
      </Layout>
    </div>
  );
};

export default Home;
