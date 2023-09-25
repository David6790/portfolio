import React from "react";
import ContactItems from "./ContactItems";

const ContactInfo = () => {
  return (
    <div className=" w-full  ">
      <div className=" flex flex-col justify-between  h-[400px]">
        <h1 className="mb-10 text-2xl">
          INFOS DE <span className=" text-myBlue">CONTACT</span>{" "}
        </h1>
        <ContactItems
          mainTitle={"Ecrivez-moi"}
          logo={<i className="fa-regular fa-envelope"></i>}
          info1={"david.lb90@gmail.com"}
        />
        <ContactItems
          mainTitle={"Contactez-moi"}
          logo={<i className="fa-solid fa-phone"></i>}
          info1={"06.29.84.84.36"}
          info2={""}
        />
        <ContactItems
          mainTitle={"Localisation"}
          logo={<i className="fa-solid fa-location-dot"></i>}
          info1={"Strasbourg, France"}
          info2={""}
        />
      </div>
    </div>
  );
};

export default ContactInfo;
