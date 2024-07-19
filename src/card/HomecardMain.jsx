// App.js

import React from "react";
import Card from "./Card";

const cardData = [
  {
    title: "Heart Glaze",
    title1:"$150.0",
    imageUrl: " ",
  },
  {
    title: "Exotic Choco Bite",
    title1:"$150.0",
    imageUrl: "/Images/p2img9.jpg",
  },
  {
    title: "Exotic Choco",
    title1:"$150.0",
    imageUrl: "/Images/p2img8.jpg",
  },
  {
    title: "Honeycomb",
    title1:"$150.0",
    imageUrl: "/Images/p2img7.jpg",
  },
  {
    title: "Cherry Blossom",
    title1:"$150.0",
    imageUrl: "/Images/p2img6.jpeg",
  },
  {
    title: "Black Sause & Flakes",
    title1:"$150.0",
    imageUrl: "/Images/p2img5.jpeg",
  },
  {
    title: "Choco Fista Tall n Fancy",
    title1:"$150.0",
    imageUrl: "/Images/p2img4.jpeg",
  },
  {
    title: "Pista Garden",
    title1:"$150.0",
    imageUrl: "/Images/p2img3.jpg",
  },
  {
    title: "Chicken Barbeque Roll",
    title1:"$150.0",
    imageUrl: "/Images/p2img2.jpeg",
  },
  {
    title: "Choco Fista Tall n Fancy",
    title1:"$150.0",
    imageUrl: "/Images/p2img4.jpeg",
  },
  {
    title: "Chicken Barbeque Roll",
    title1:"$150.0",
    imageUrl: "/Images/p2img2.jpeg",
  },
  {
    title: "Honeycomb",
    title1:"$150.0",
    imageUrl: "/Images/p2img7.jpg",
  },
];

const HomecardMain = () => {
  return (
    <div className="grid grid-cols-1 sm:grid sm:grid-cols-4  py-6 hover:font-serif text-red-900 gap-6">
      {cardData.map((card, index) => (
        <Card key={index} {...card} />
      ))}
    </div>
  );
};

export default HomecardMain;
