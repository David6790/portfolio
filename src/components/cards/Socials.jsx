import React from "react";
import IconCta from "../../layout/IconCta";

const Socials = () => {
  return (
    <div className=" flex flex-col justify-between rounded-3xl shadow-myshadow bg-card-gradiant w-full h-full bg-card p-[20px]  border-solid border-[#444] border-[1px] group">
      <div className=" text-white text-6xl flex flex-row justify-evenly  mt-[30px] border-solid border-[#444] rounded-3xl p-2 border-[1px]">
        <i className="fa-brands fa-instagram"></i>
        <i class="fa-brands fa-github"></i>
      </div>
      <div className=" flex flex-col ">
        <p className="text-myBlue ">FOLLOW ME</p>
        <div className="flex flex-row items-center justify-between w-full">
          <h1 className="text-3xl">Mes Réseaux</h1>
          <IconCta />
        </div>
      </div>
    </div>
  );
};

export default Socials;
