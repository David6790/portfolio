import React from "react";
import Layout from "../layout/Layout";
import ContactForm from "../components/cardsContact/ContactForm";
import ContactInfo from "../components/cardsContact/ContactInfo";
import Socials from "../components/cardsHome/Socials";

const Contact = () => {
  return (
    <Layout>
      <div className="flex flex-row justify-between gap-10 h-[100%]">
        <div className=" flex flex-col w-5/12 gap-10 h-[100%]">
          <ContactInfo />
          <Socials />
        </div>
        <div className=" w-7/12 h-[100%]">
          <ContactForm />
        </div>
      </div>
    </Layout>
  );
};

export default Contact;
