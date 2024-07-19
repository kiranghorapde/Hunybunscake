import React from 'react'
import BlogCard1 from './BlogCard1';


const cardData = [
    {
      imageUrl: " blogimg/img1.jpg",
      p:" DESIGNER CAKES", 
    },
    {
      imageUrl: "blogimg/img2.jpg ",
      p:" DESIGNER CAKES", 
    },
    {
      imageUrl: "blogimg/img3.jpg ",
      p:" DESIGNER CAKES", 
    },
    {
      imageUrl: " blogimg/img4.jpg",
      p:" DESIGNER CAKES", 
    },
    {
      imageUrl: "blogimg/img1.jpg",
      p:" DESIGNER CAKES", 
    },
    {
      imageUrl: "blogimg/img2.jpg",
      p:" DESIGNER CAKES", 
    },
    {
      imageUrl: "blogimg/img4.jpg",
      p:" DESIGNER CAKES", 
    },
    {
      imageUrl: "blogimg/img2.jpg ",
      p:" DESIGNER CAKES", 
    },
    {
      imageUrl: "blogimg/img1.jpg",
      p:"DESIGNER CAKES ", 
    },
    {
       imageUrl: "blogimg/img2.jpg ",
       p:"TALL AND FANCY", 
    },
    {
      imageUrl: " blogimg/img1.jpg",
      p:" EXOTIC CAKES", 
    },
    {
       imageUrl: "blogimg/img2.jpg ",
       p:" PREMIUM CAKES", 
    },
    
    // Add more card data as needed
  ];

const Blogcardmain1 = () => {
  return (
    
    <div className=" sm:grid grid-cols-2  ">
    {cardData.map((card, index) => (
      <BlogCard1 key={index} {...card} />
    ))}
  </div>
  )
}

export default Blogcardmain1