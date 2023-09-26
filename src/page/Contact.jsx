import React from "react";
import Layout from "../layout/Layout";
import ContactForm from "../components/cardsContact/ContactForm";
import ContactInfo from "../components/cardsContact/ContactInfo";
import Socials from "../components/cardsHome/Socials";

const Contact = () => {
  return (
    <Layout>
      <div className="flex lg:flex-row md:flex-row sm:flex-row flex-col justify-between gap-10 h-[100%]">
        <div className=" flex flex-col lg:w-5/12 md:w-5/12 sm:w-5/12 w-full gap-10 h-[100%]">
          <ContactInfo />
          <Socials />
        </div>
        <div className=" lg:w-7/12 md:w-7/12 sm:w-7/12 w-full  h-[100%]">
          <ContactForm />
        </div>
      </div>
    </Layout>
  );
};

export default Contact;
