import React from "react";
import { NavLink } from "react-router-dom";

const Navigation = () => {
  return (
    <div className=" lg:w-4/12 md:w-6/12">
      <ul className=" w-full flex flex-row justify-around items-center  ">
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
    </div>
  );
};

export default Navigation;
