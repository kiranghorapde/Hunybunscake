import React from 'react'
import Card1 from './Card1';




const cardData = [
  {
    title: "Heart Glaze",
    title1:"₹ 625",
     p:" Decorated Chocolate Truffle Cake Half Kg Eggless",
    imageUrl: "cakeimg/img1.webp ",
  },
  {
    title: "Exotic Choco Bite",
    p:" Decorated Chocolate Truffle Cake Half Kg Eggless",

    title1:"₹ 625",
    imageUrl: "cakeimg/img2.webp ",
  },
  {
    title: "Exotic Choco",
    p:" Decorated Chocolate Truffle Cake Half Kg Eggless",

    title1:"₹ 625",
    imageUrl: "cakeimg/img3.jpg ",
  },
  {
    title: "Honeycomb",
    p:" Decorated Chocolate Truffle Cake Half Kg Eggless",
    title1:"₹ 625",
    imageUrl: "cakeimg/img4.jpg ",
    ret: "5.0 "
  },
  
];
const Card1Main = () => {
  return (

    <div className="grid grid-cols-2 sm:grid sm:grid-cols-4 gap-2 sm:gap-4">
      {cardData.map((card, index) => (
        <Card1 key={index} {...card} />
      ))}
    </div>
        
  
  )
}

export default Card1Main