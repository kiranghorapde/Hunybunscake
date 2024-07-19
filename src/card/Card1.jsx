import React from "react";

const Card1 = ({ title, title1, imageUrl, p }) => {
  return (
    <div className=" shadow-2xl sm:p-5  ps-0.5 hover:bg-green-50 rounded-ee-3xl rounded-ss-3xl ">
      
      <div className="flex justify-center ">
        <img
          className=" m-auto border-2 border-pink-500 border-double rounded-full ease-in-out  transform sm:duration-1000"
          src={imageUrl}
          alt="Card"
        />
      </div>

      <div className="sm:px-6 sm:py-4 group hover:translate-y-2 transform ease-in-out duration-1000">
        <div className=" group text-center sm:text-2xl text-xl sm:p-2 hover:underline hover:font-serif underline-offset-auto">
          {title}
        </div>
        <div className=" hidden group-hover:block  font-bold text-center sm:text-xl  hover:font-serif underline-offset-auto">
          {p}
        </div>

        <div className="text-center text-xl hover:underline hover:font-serif text-red-800 underline-offset-auto">
          {title1}
        </div>
      </div>
    </div>
  );
};

export default Card1;
