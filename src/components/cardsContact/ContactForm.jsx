import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import ConfirmationModal from "./ConfirmationModal";

const ContactForm = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false });
  const [isLoading, setIsLoading] = useState(false);
  const form = useRef();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalMessage, setModalMessage] = useState("");

  const sendEmail = (e) => {
    e.preventDefault();
    setIsLoading(true);

    emailjs
      .sendForm(
        process.env.REACT_APP_SERVICE,
        process.env.REACT_APP_TEMPLATE,
        form.current,
        process.env.REACT_APP_ID
      )
      .then(
        (result) => {
          form.current.reset();
          setIsLoading(false);
          setModalMessage("Votre message a été envoyé avec succès!");
          setIsModalOpen(true);
        },
        (error) => {
          console.log(error.text);
          setModalMessage("Une erreur s'est produite, merci de réessayer");
          setIsModalOpen(true);
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
        Exposez-moi <span className=" text-myBlue"> vos besoins : </span>
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
          required
        />

        <input
          type="email"
          name="email"
          placeholder="Votre Email *"
          className=" rounded-xl bg-form-gradiant bg-card focus:outline-none  p-5"
          required
        />

        <input
          type="text"
          name="objet"
          placeholder="Objet du message *"
          className=" rounded-xl bg-form-gradiant bg-card focus:outline-none   p-5"
          required
        />

        <textarea
          name="message"
          placeholder="Votre message *"
          className=" rounded-xl bg-form-gradiant bg-card focus:outline-none  resize-none overflow-scroll p-5"
          required
        />
        <button
          type="submit"
          name="valider"
          className=" rounded-xl bg-form-gradiant bg-card  w-[150px] m-auto  p-5 "
        >
          {isLoading ? "En cours ..." : "Envoyer"}
        </button>
      </form>

      <ConfirmationModal
        isOpen={isModalOpen}
        message={modalMessage}
        onClose={() => setIsModalOpen(false)}
      />
    </motion.div>
  );
};

export default ContactForm;
