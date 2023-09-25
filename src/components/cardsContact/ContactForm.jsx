import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import { motion } from "framer-motion";
import { useInView } from "framer-motion";

const ContactForm = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false });
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_xpgmd0c",
        "template_w6e9k4p",
        form.current,
        "HMY_Qnyy89zicpgev"
      )
      .then(
        (result) => {
          console.log(result.text);
          form.current.reset();
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <motion.div
      ref={ref}
      className="rounded-3xl shadow-myshadow bg-card-gradiant bg-card  border-solid border-[#444] border-[1px] p-10 text-white w-full h-[100%] "
      style={{
        transform: isInView ? "none" : "translateX(200px) opacity(0.7)",
        x: isInView ? 0 : 200,
        opacity: isInView ? 1 : 0,
        transition: "all ease-in 0.5s ",
      }}
    >
      <h1 className=" text-3xl mb-10">
        Travaillons <span className=" text-myBlue"> ensemble </span>
      </h1>
      <form
        ref={form}
        onSubmit={sendEmail}
        className=" text-white flex flex-col gap-10  "
      >
        <input
          type="text"
          name="name"
          placeholder="Votre Nom *"
          className=" rounded-xl bg-form-gradiant bg-card  p-5 focus:outline-none"
        />

        <input
          type="email"
          name="email"
          placeholder="Email *"
          className=" rounded-xl bg-form-gradiant bg-card focus:outline-none  p-5"
        />

        <input
          type="text"
          name="objet"
          placeholder="Objet *"
          className=" rounded-xl bg-form-gradiant bg-card focus:outline-none   p-5"
        />

        <textarea
          name="message"
          placeholder="Votre message *"
          className=" rounded-xl bg-form-gradiant bg-card focus:outline-none  resize-none overflow-scroll p-5"
        />
        <button
          type="submit"
          name="valider"
          className=" rounded-xl bg-form-gradiant bg-card  w-[150px] m-auto  p-5 "
        >
          Envoyer
        </button>
      </form>
    </motion.div>
  );
};

export default ContactForm;