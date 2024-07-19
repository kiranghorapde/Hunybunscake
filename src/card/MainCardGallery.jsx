// App.js

import React from "react";
import CardGallery from "./CardGallery";


const cardData = [
  {
    imageUrl: "blogimg/img1.jpg",
    title: " TALL AND FANCY",
    dec:" a sweet baked food made from a dough or thick batter usually containing flour and sugar and often shortening, eggs, and a raising agent  "
  },
  {
    imageUrl: "blogimg/img2.jpg ",
    title: " TALL AND FANCY",
    dec:" a sweet baked food made from a dough or thick batter usually containing flour and sugar and often shortening, eggs, and a raising agent  "
  },
  {
    imageUrl: "blogimg/img3.jpg ",
    title: " TALL AND FANCY",
    dec:" a sweet baked food made from a dough or thick batter usually containing flour and sugar and often shortening, eggs, and a raising agent  "
  },
  {
    imageUrl: "blogimg/img4.jpg",
    title: " TALL AND FANCY",
    dec:" a sweet baked food made from a dough or thick batter usually containing flour and sugar and often shortening, eggs, and a raising agent  "
  },
  {
    imageUrl: "blogimg/img1.jpg",
    title: " TALL AND FANCY",
    dec:" a sweet baked food made from a dough or thick batter usually containing flour and sugar and often shortening, eggs, and a raising agent  "
  },
  {
    imageUrl: "blogimg/img2.jpg",
    title: " TALL AND FANCY",
    dec:" a sweet baked food made from a dough or thick batter usually containing flour and sugar and often shortening, eggs, and a raising agent  "
  },
  {
    imageUrl: "blogimg/img4.jpg",
    title: " TALL AND FANCY",
    dec:" a sweet baked food made from a dough or thick batter usually containing flour and sugar and often shortening, eggs, and a raising agent  "
  },
  {
    imageUrl: "blogimg/img2.jpg ",
    title: " TALL AND FANCY",
    dec:" a sweet baked food made from a dough or thick batter usually containing flour and sugar and often shortening, eggs, and a raising agent  "
  },
  {
    imageUrl: "blogimg/img1.jpg",
    title: " TALL AND FANCY",
    dec:" a sweet baked food made from a dough or thick batter usually containing flour and sugar and often shortening, eggs, and a raising agent  "
  },
  {
     imageUrl: "blogimg/img2.jpg ",
     title: " TALL AND FANCY",
     dec:" a sweet baked food made from a dough or thick batter usually containing flour and sugar and often shortening, eggs, and a raising agent  "
  },
  {
    imageUrl: " blogimg/img1.jpg",
    title: " TALL AND FANCY",
    dec:" a sweet baked food made from a dough or thick batter usually containing flour and sugar and often shortening, eggs, and a raising agent  "
  },
  {
     imageUrl: "blogimg/img2.jpg ",
     title: " TALL AND FANCY",
     dec:" a sweet baked food made from a dough or thick batter usually containing flour and sugar and often shortening, eggs, and a raising agent  "
  },
  
  // Add more card data as needed
];

const MainCardGallery = () => {
  return (
    <div className=" sm:grid grid-cols-3 ">
      {cardData.map((card, index) => (
        <CardGallery key={index} {...card} />
      ))}
    </div>
  );
};

export default MainCardGallery;
