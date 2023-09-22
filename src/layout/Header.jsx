import React from "react";
import Logo from "./Logo";
import Navigation from "./Navigation";
import { NavLink } from "react-router-dom";

const Header = () => {
  return (
    <div className=" h-24 min-full flex flex-row items-center justify-between mb-[40px]">
      <NavLink to="/">
        <Logo />
      </NavLink>

      <Navigation />
    </div>
  );
};

export default Header;
