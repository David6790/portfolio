import React from "react";
import Layout from "../layout/Layout";
import PersonnalCard from "../components/cardsHome/PersonnalCard";
import AboutMe from "../components/cardsHome/AboutMe";
import MyWorks from "../components/cardsHome/MyWorks";
import Socials from "../components/cardsHome/Socials";
import Experience from "../components/cardsHome/Experience";
import ContactCard from "../components/cardsHome/ContactCard";
import TypeWrite from "../components/cardsHome/TypeWrite";

const Home = () => {
  return (
    <div>
      <Layout>
        <div className=" flex lg:flex-row w-[100%] justify-between gap-8  lg:h-[350px]   mb-10 md:flex-col ">
          <div className="w-8/12 md:w-full ">
            <PersonnalCard />
          </div>
          <div className="  lg:w-6/12 flex flex-col justify-start gap-10 0 h-full  md:w-full  ">
            <TypeWrite />
            <AboutMe />
          </div>
        </div>
        <div className="flex flex-row  justify-between w-full  h-[250px]  mb-10 gap-8">
          <div className=" w-8/12">
            <MyWorks />
          </div>
          <div className=" w-4/12">
            <Experience />
          </div>
        </div>
        <div className="flex flex-row w-[100%] justify-between gap-8  h-[250px]  ">
          <div className=" w-5/12">
            <Socials />
          </div>
          <div className=" w-7/12">
            <ContactCard />
          </div>
        </div>
      </Layout>
    </div>
  );
};

export default Home;
