import React from "react";
import IconCta from "../../layout/IconCta";

const MyWorks = () => {
  return (
    <div className="h-full flex flex-col justify-between  p-[20px] w-full  rounded-3xl shadow-myshadow bg-card-gradiant bg-card  border-solid border-[#444] border-[1px] group">
      <div className=" text-white text-6xl flex flex-row justify-between mt-[30px] ">
        <i className="fa-brands fa-react"></i>
        <img src="./img/redux.png" alt="" className=" h-[60px]" />
        <i class="fa-brands fa-js"></i>
        <i class="fa-brands fa-css3-alt"></i>
        <i class="fa-brands fa-html5"></i>
        <img src="https://icones8.fr/icon/A6r5yddU9uA0/redux" alt="" />
      </div>
      <div className="flex flex-row items-center justify-between w-full">
        <h1 className="text-3xl">
          Mes <span className=" text-myBlue">Compétences</span> &
          <span className=" text-myBlue"> Réalisations</span>
        </h1>
        <IconCta />
      </div>
    </div>
  );
};

export default MyWorks;
