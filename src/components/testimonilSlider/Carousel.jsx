import React from "react";
import Slider from "react-slick";

const Carousel = ({ testimonials }) => {
  const settings = {
    infinite: true,
    speed: 1000,

    autoplay: true,
    cssEase: "ease-out",
    autoplaySpeed: 10000,
    arrows: true,
  };

  return (
    <Slider
      {...settings}
      className=" rounded-3xl shadow-myshadow bg-card-gradiant bg-card  border-solid border-[#444] border-[1px] lg:h-[400px] md:h-[400px] sm:h-auto flex flex-row justify-center items-center p-10"
    >
      {testimonials.map((testimonial, index) => (
        <div
          key={index}
          className="w-full border-l-2 border-r-2 border-gray-300   "
        >
          <div className=" flex lg:flex-row md:flex-row sm:flex-col lg:text-start md:text-start sm:text-center w-full h-full justify-center items-center gap-8">
            <div>
              <img
                src={testimonial.image}
                alt={testimonial.name}
                className=" lg:h-[250px] md:h-[250px] sm:h-[150px] rounded-full border-[1px] border-white  border-solid "
              />
            </div>
            <div className="w-[50%] ">
              <h1 className=" text-2xl text-myBlue">{testimonial.name}</h1>
              <h2 className="text-xl mb-5 text-myGrey">
                {testimonial.position}
              </h2>
              <p className=" text-base italic">
                <i className="fa-solid fa-quote-left text-xl mr-5"></i>
                {testimonial.review}
                <i className="fa-solid fa-quote-right text-xl ml-5"></i>
              </p>
            </div>
          </div>
        </div>
      ))}
    </Slider>
  );
};

export default Carousel;
