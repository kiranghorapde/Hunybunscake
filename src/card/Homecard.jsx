// Card.js

import React from 'react';


const Homecard = ({ title,title1, imageUrl }) => {
  return (
    <div className="max-w-sm rounded hover:scale-105 object-cover  overflow-hidden shadow-lg">
      <img className="w-[350px] h-[300px] object-cover" src={imageUrl} alt="Card" />
      <div className="px-6 py-4 group">
        <div className="font-bold text-xl mb-2">{title}</div>
        <div className="text-red-600  font-bold text-xl mb-2">{title1}</div>
       
      </div>
    </div>
  );
};

export default Homecard;
