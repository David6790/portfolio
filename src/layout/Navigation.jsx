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
      <div className=" lg:w-4/12 md:w-6/12 sm:w-8/12 w-full flex flex-row justify-end">
        <ul className=" w-full lg:flex md:flex sm:hidden hidden flex-row justify-around items-center   ">
          <NavLink
            to="/"
            className={(nav) =>
              nav.isActive ? "text-white" : " text-[#9f9f9f] hover:text-white"
            }
          >
            <li>Home</li>
          </NavLink>
          <NavLink
            to="/about"
            className={(nav) =>
              nav.isActive ? "text-white" : " text-[#9f9f9f] hover:text-white"
            }
          >
            <li>About</li>
          </NavLink>
          <NavLink
            to="/works"
            className={(nav) =>
              nav.isActive ? "text-white" : " text-[#9f9f9f] hover:text-white"
            }
          >
            <li>Works</li>
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
        >
          <i className="fa-solid fa-bars text-3xl"></i>
        </button>
        {isOpen && (
          <motion.div
            className="fixed top-0 right-0 h-2/3 w-2/3 rounded-tl-3xl rounded-bl-3xl shadow-md  bg-opacity-50 bg-black backdrop-blur-md  border-solid border-[#444] border-[1px] z-50 p-10 group"
            initial={{
              opacity: 0,
              scale: 0,
            }}
            animate={{
              opacity: 1,
              scale: 1,
              transition: {
                ease: "easeOut",
                duration: 0.45,
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
              <NavLink to="/" className=" text-myGrey hover:text-white ">
                Home
              </NavLink>
              <NavLink to="/about" className=" text-myGrey hover:text-white ">
                About
              </NavLink>
              <NavLink to="/works" className=" text-myGrey hover:text-white ">
                Works
              </NavLink>
              <NavLink to="/contact" className=" text-myGrey hover:text-white ">
                Contacts
              </NavLink>
            </ul>
          </motion.div>
        )}
      </div>
    </>
  );
};

export default Navigation;
