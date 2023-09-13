import React from "react";
import IconCta from "../../layout/IconCta";

const ContactCard = () => {
  return (
    <div className=" flex flex-col justify-evenly  w-6/12 rounded-3xl shadow-myshadow bg-card-gradiant bg-card  border-solid border-[#444] border-[1px] p-10 group">
      <div>
        <h1 className=" text-5xl">Et si...</h1>
      </div>
      <div className="flex flex-row justify-between items-center  ">
        <h1 className="text-4xl text-myBlue">On travaillait ensemble ?</h1>
        <IconCta />
      </div>
    </div>
  );
};

export default ContactCard;
