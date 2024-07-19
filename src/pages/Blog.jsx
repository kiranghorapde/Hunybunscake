import React from "react";
import MainCardGallery from "../card/MainCardGallery";
import Blogcardmain1 from "../card/Blogcardmain1";

const Blog = () => {
  return (
    <div className="w-full bg-[#fffafb] sm:p-5 sm:px-12 px-3 ">
      <marquee
        className="text-center  font-bold text-2xl border-b-3 border-double bg-red-950 text-white p-3 "
        behavior="alternate"
        direction=""
      >
        <h2 className=" "> LET'S CELEBRATE</h2>
      </marquee>
      <div className="sm:grid grid-cols-2">
        <img src="blogimg/firstb1.jpg" alt="" />

        <div className="">
          <Blogcardmain1 />
        </div>
      </div>
    </div>
  );
};

export default Blog;
