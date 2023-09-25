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
      <div className=" w-full h-[300px] flex flex-row gap-10 mb-10 ">
        <Portrait />
        <AboutTitle />
      </div>
      <motion.div
        ref={ref}
        className="w-full h-[400px] flex flex-row gap-10 mb-10 "
        style={{
          transform: isInView ? "none" : "opacity:0  ",
          opacity: isInView ? 1 : 0,

          transition: "all 0.8s  ease-in 0.8s ",
        }}
      >
        <div className=" w-6/12 p-[20px] rounded-3xl shadow-myshadow bg-card-gradiant bg-card  border-solid border-[#444] border-[1px] h-full">
          <h1 className="text-3xl mb-5 flex flex-col justify-evenly">
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
        </div>
        <div className=" w-6/12 p-[20px] rounded-3xl shadow-myshadow bg-card-gradiant bg-card  border-solid border-[#444] border-[1px] h-full">
          <h1 className="text-3xl mb-5">Educations</h1>
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
        </div>
      </motion.div>
      <div className=" w-full flex flex-row justify-between h-[250px] gap-10">
        <div className="w-5/12 h-full">
          <Socials />
        </div>
        <div className=" w-7/12 h-full">
          <ContactCard />
        </div>
      </div>
    </Layout>
  );
};

export default About;
