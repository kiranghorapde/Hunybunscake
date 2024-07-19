// Card.js

import React from "react";

const CardGallery = ({ imageUrl,dec,title  }) => {
  return (
    <div className="sm:p-5 bg-yellow-50 ">
      <img className="w-full  rounded-e-3xl  rounded-s-3xl  border-primary border-y-4 border-red-800  sm:w-[400px] sm:h-[200px] gap-6 p-4" src={imageUrl} alt="Card" />
      <div className="text-center group ">
       <div className="  font-serif  text-red-800 underline underline-offset-2 text-xl p-3">{title}</div>
         <p className=" hidden group-hover:block text-lg hover:underline underline-offset-4  font-serif text-red-900 ">{dec}</p>
      </div>

      </div>
    
  );
};

export default CardGallery;
