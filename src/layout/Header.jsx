import React from "react";
import Logo from "./Logo";
import Navigation from "./Navigation";
import { NavLink } from "react-router-dom";

const Header = () => {
  return (
    <div className=" lg:h-24 md:h24 sm:h24 h-[100px] min-full flex flex-col lg:flex-row md:flex-row sm:flex-row items-center justify-between mb-[40px]">
      <NavLink to="/">
        <Logo />
      </NavLink>

      <Navigation />
    </div>
  );
};

export default Header;
