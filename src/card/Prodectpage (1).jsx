// App.js

import React from "react";
import ProdectpageCard from "./ProdectpageCard";

const cardData = [
  {
    description: "CLASSICVANILLA",
    prc:"Socialimg/whtsappimg.png",
    Add : "Add to cart",
    imageUrl: "Marqesimg/img1.jpg",
    btn : "11% Off"
    },
  {
    description: "EXOTIC CAKES ",
    prc:" Socialimg/whtsappimg.png",
    Add : "Add to cart",
    imageUrl: "Marqesimg/img2.jpg ",
    btn : "11% Off"
    },
  {
    description: "PREMIUM CAKES ",
    prc:" Socialimg/whtsappimg.png",
    Add : "Add to cart",
    imageUrl: "Marqesimg/img3.jpg",
    btn : "11% Off"
  },
  {
    description: " DESIGNER CAKES  ",
    prc:" Socialimg/whtsappimg.png",
    Add : "Add to cart",
    imageUrl: " Marqesimg/img4.jpg",
    btn : "11% Off"
  },
  {
    description: " DESIGNER CAKES  ",
    prc:" Socialimg/whtsappimg.png",
    Add : "Add to cart",
    imageUrl: " Marqesimg/img6.jpg",
    btn : "11% Off"
    },
  {
    description: " DESIGNER CAKES  ",
    prc:" Socialimg/whtsappimg.png",
    Add : "Add to cart",
    imageUrl: " Marqesimg/img4.jpg",
    btn : "11% Off"
  },
  {
    description: " DESIGNER CAKES  ",
    prc:" Socialimg/whtsappimg.png",
    Add : "Add to cart",
    imageUrl: " Marqesimg/img10.jpg",
    btn : "11% Off"
    },
   {
    description: " DESIGNER CAKES  ",
    prc:" Socialimg/whtsappimg.png",
    Add : "Add to cart",
    imageUrl: "Marqesimg/img9.jpg ",
    btn : "11% Off"  },
  {
    description: " DESIGNER CAKES  ",
    prc:" Socialimg/whtsappimg.png",
    Add : "Add to cart",
    imageUrl: " Marqesimg/img2.jpg",
    btn : "11% Off"  },
  {
    description: " DESIGNER CAKES  ",
    prc:" Socialimg/whtsappimg.png",
    Add : "Add to cart",
    imageUrl: " Marqesimg/img3.jpg",
    btn : "11% Off"
  },
  {
    description: " DESIGNER CAKES  ",
    prc:" Socialimg/whtsappimg.png",
    Add : "Add to cart",
    imageUrl: "Marqesimg/img9.jpg ",
    btn : "11% Off"
  },
  {
    description: " DESIGNER CAKES  ",
    prc:" Socialimg/whtsappimg.png",
    Add : "Add to cart",
    imageUrl: "Marqesimg/img1.jpg ",
    btn : "11% Off"
  
  }
   // Add more card data as needed
];

const Prodectpage = () => {
  return (
    <div className=" sm:grid sm:grid-cols-4 sm:gap-2 gap-2 grid grid-cols-2   sm:p-10 p-2" >
     
      {cardData.map((card, index) => (
        <ProdectpageCard key={index} {...card} /> 
     ))}
    </div>
  );
};

export default Prodectpage;
