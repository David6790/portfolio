import React from "react";

const Curriculum = ({ year, title, places }) => {
  return (
    <div>
      <div className="mb-5">
        <h2 className=" text-myGrey mb-1">{year}</h2>
        <h1 className=" text-base">{title}</h1>
        <p className=" text-myGrey mt-1">{places}</p>
      </div>
    </div>
  );
};

export default Curriculum;
