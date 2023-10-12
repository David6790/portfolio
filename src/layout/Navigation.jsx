import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import IconCta from "./IconCta";
import { motion } from "framer-motion";

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleClick = () => {
    setIsOpen(!isOpen);
  };
  return (
    <>
      <div className=" lg:w-8/12 md:w-8/12 sm:w-9/12 w-full flex flex-row justify-end ">
        <ul className=" w-full lg:flex md:flex sm:hidden hidden flex-row justify-end lg:gap-10 md:gap-5  items-center   ">
          <NavLink
            to="/"
            className={(nav) =>
              nav.isActive ? "text-white" : " text-[#9f9f9f] hover:text-white"
            }
          >
            <li>Accueil</li>
          </NavLink>
          <NavLink
            to="/about"
            className={(nav) =>
              nav.isActive ? "text-white" : " text-[#9f9f9f] hover:text-white"
            }
          >
            <li>A propos de moi</li>
          </NavLink>
          <NavLink
            to="/works"
            className={(nav) =>
              nav.isActive ? "text-white" : " text-[#9f9f9f] hover:text-white"
            }
          >
            <li>Mes projets</li>
          </NavLink>
          <NavLink
            to="/contact"
            className={(nav) =>
              nav.isActive ? "text-white" : " text-[#9f9f9f] hover:text-white"
            }
          >
            <li>Contacts</li>
          </NavLink>
        </ul>
        <button
          className="lg:hidden md:hidden sm:block block"
          onClick={handleClick}
          aria-label="menu"
        >
          <i className="fa-solid fa-bars text-3xl"></i>
        </button>
        {isOpen && (
          <motion.div
            className="fixed top-0 right-0 h-2/3 w-2/3 rounded-tl-3xl rounded-bl-3xl shadow-md  bg-opacity-50 bg-black backdrop-blur-md  border-solid border-[#444] border-[1px] z-50 p-10 group"
            initial={{
              opacity: 0,
              x: "200px",
            }}
            animate={{
              opacity: 1,
              x: 0,

              transition: {
                ease: "easeOut",
                duration: 0.6,
              },
            }}
            exit={{
              opacity: 0,
              scale: 0.75,
              transition: {
                ease: "easeIn",
                duration: 0.55,
              },
            }}
          >
            <div className="flex flex-row justify-between items-center">
              <IconCta />
              <button className=" text-sm" onClick={handleClick}>
                X
              </button>
            </div>

            <ul className="flex flex-col justify-center items-start h-full space-y-8 text-xl ">
              <NavLink to="/">Accueil</NavLink>
              <NavLink to="/about">A propos de moi</NavLink>
              <NavLink to="/works">Mes projets</NavLink>
              <NavLink to="/contact">Contacts</NavLink>
            </ul>
          </motion.div>
        )}
      </div>
    </>
  );
};

export default Navigation;
