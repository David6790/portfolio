import React from "react";

const Footer = () => {
  return (
    <div className=" w-9/12 flex  items-center   justify-center m-auto mt-20">
      <div>
        <img src="./img/logo/logoSimple.png" alt="" className=" h-14" />
      </div>

      <div>
        <p>
          © All rights reserved by{" "}
          <span className=" text-myBlue">
            <strong>David Long Bin</strong>
          </span>
        </p>
      </div>
    </div>
  );
};

export default Footer;
