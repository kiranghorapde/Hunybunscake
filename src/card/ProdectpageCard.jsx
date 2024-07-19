import React from "react";

const ProdectpageCard = ({ imageUrl, description, prc,  btn, Add }) => {
  return (
    <div>
      <div className=" bg-slate-100 p-3">
        <img
          className=" gap-3   p-1 rounded-full font-serif w-[340px] sm:h-[300px]"
          src={imageUrl}
          alt="Card"
        />
        <h1 className=" flex justify-center text-center  sm:text-xl text-sm text-red-950 font-serif">
          {description}
        </h1>

        <div className="text-black font-bold flex justify-center sm:gap-4  gap-2 ">
          <div
            className="sm:h-7   sm:text-xl text-xs text-white bg-red-950 border-2   focus:outline-none hover:bg-white hover:text-black font-serif  "
            type="submit"
          >
            {btn}
          </div> 
        </div>
        <div className="flex  pt-2">         <a
          className="flex justify-start  h-10 w-36 "
          href="https://www.whatsapp.com/"
        >
          <img className="  " src={prc} alt="img1" />{" "}
        </a>

        <p className=" bg-yellow-400 rounded-xl w-36 text-center h-7">{Add}</p>
        </div>
      </div>
    </div>
  );
};

export default ProdectpageCard;
