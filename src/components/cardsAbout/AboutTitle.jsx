import React, { useRef } from "react";
import { motion } from "framer-motion";

import { useInView } from "framer-motion";
import { Typewriter } from "react-simple-typewriter";

const AboutTitle = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false });
  const words = ["Expertise & Expériences"];
  return (
    <div className=" w-9/12 flex flex-col justify-between   ">
      <div className=" h-2/6 flex flex-row justify-evenly items-center text-3xl  ">
        <i className="fa-regular fa-compass text-myGrey"></i>
        <h1 className="text-4xl">
          <Typewriter
            words={words}
            typeSpeed={80}
            deleteSpeed={50}
            loop={1}
            cursor={false}
            delaySpeed={2800}
          />
        </h1>
        <i className="fa-regular fa-compass text-myGrey"></i>
      </div>

      <motion.div
        ref={ref}
        className="p-[20px] h-4/6 rounded-3xl shadow-myshadow bg-card-gradiant  bg-card  border-solid border-[#444] border-[1px] flex flex-col justify-center"
        style={{
          transform: isInView ? "none" : "opacity:0  ",
          opacity: isInView ? 1 : 0,

          transition: "all 0.6s ease-in 0.5s ",
        }}
      >
        <h1 className=" text-3xl mb-3 ">
          David <span className=" text-myBlue">Long Bin</span>
        </h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas
          fugiat voluptatibus praesentium at consequuntur quibusdam sapiente
          eligendi maxime aperiam eos dolorum a velit ipsam neque ex eum, odio
          deserunt laudantium.Lore
        </p>
      </motion.div>
    </div>
  );
};

export default AboutTitle;
