import React from "react";

const TriggerStyle = () => {
  return (
    <div className=" flex flex-row w-ful justify-center p-8 items-center rounded-3xl shadow-myshadow hover:shadow-myHooverShadow bg-card-gradiant bg-card  border-solid border-[#444] border-[1px]">
      <div className=" flex flex-row w-full justify-around ">
        <button>Élégant</button>
        <button>Lumineux</button>
        <button>Coloré</button>
      </div>
    </div>
  );
};

export default TriggerStyle;
