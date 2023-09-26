import React, { useRef } from "react";
import { motion } from "framer-motion";

import { useInView } from "framer-motion";
import Layout from "../layout/Layout";
import Portrait from "../components/cardsAbout/Portrait";
import AboutTitle from "../components/cardsAbout/AboutTitle";
import Curriculum from "../components/cardsAbout/Curriculum";
import Socials from "../components/cardsHome/Socials";
import ContactCard from "../components/cardsHome/ContactCard";

const About = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false });

  return (
    <Layout>
      <div className=" w-full lg:h-[300px] md:h-[400px] sm:h-[500px] flex lg:flex-row md:flex-row sm:flex-row flex-col lg:gap-10 md:gap-3 sm:gap-3 mb-10 ">
        <Portrait />
        <AboutTitle />
      </div>
      <motion.div
        ref={ref}
        className="w-full lg:h-[400px] md:h-[400px] sm:h-[450px] flex lg:flex-row md:lg:flex-row sm:lg:flex-row flex-col gap-10 mb-10 "
        style={{
          transform: isInView ? "none" : "opacity:0  ",
          opacity: isInView ? 1 : 0,

          transition: "all   ease-in 0.8s ",
        }}
      >
        <motion.div
          ref={ref}
          style={{
            transform: isInView ? "none" : "translateX:-200px  ",
            x: isInView ? 0 : -200,

            transition: "all   ease-in 0.8s ",
          }}
          className=" lg:w-6/12 md:w-6/12 sm:w-6/12 w-full p-[20px] rounded-3xl shadow-myshadow bg-card-gradiant bg-card  border-solid border-[#444] border-[1px] h-full"
        >
          <h1 className="lg:text-3xl md:text-3xl  sm:text-2xl mb-5 flex flex-col justify-evenly">
            Expériences
          </h1>
          <Curriculum
            year={"2013 - 2020"}
            title={
              "Spécialiste en Intégration Technologique pour la Restauration"
            }
            places={"Café de l'Opéra de Strasbourg"}
          />
          <Curriculum
            year={"2018 - 2022"}
            title={"Expert Certifié en Solutions POS"}
            places={"Lightspeed POS Quebec"}
          />
          <Curriculum
            year={"2020 - 2022"}
            title={"Créateur de Solutions Web Wix "}
            places={"Site vitrine, optimisation SEO, design d'interface "}
          />
        </motion.div>
        <motion.div
          ref={ref}
          style={{
            transform: isInView ? "none" : "translateX:200px  ",
            x: isInView ? 0 : 200,

            transition: "all   ease-in 0.8s ",
          }}
          className=" lg:w-6/12 md:w-6/12 sm:w-6/12 w-full p-[20px] rounded-3xl shadow-myshadow bg-card-gradiant bg-card  border-solid border-[#444] border-[1px] h-full "
        >
          <h1 className="lg:text-3xl md:text-3xl  sm:text-2xl mb-5">
            Educations
          </h1>
          <Curriculum
            year={"2009 - 2012"}
            title={"Licence Physique - Mathématiques appliqués"}
            places={"Université de Strasbourg"}
          />
          <Curriculum
            year={"2011 - 2014"}
            title={"Licence Mathématiques et Informatique"}
            places={"Université de Strasbourg"}
          />
          <Curriculum
            year={"2022 - 2023"}
            title={"Intégrateur Web - React "}
            places={"OpenClassrooms"}
          />
        </motion.div>
      </motion.div>
      <div className=" w-full flex lg:flex-row md:flex-row  sm:flex-row  flex-col justify-between lg:h-[250px] md:h-[250px] sm:h-[250px] h-full gap-10">
        <div className="lg:w-5/12 md:w-5/12 sm:w-5/12 w-full h-full">
          <Socials />
        </div>
        <div className=" lg:w-7/12 md:w-5/12 sm:w-5/12 w-full h-full">
          <ContactCard />
        </div>
      </div>
    </Layout>
  );
};

export default About;
