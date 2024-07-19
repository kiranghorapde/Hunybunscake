import React from 'react';
import { FaWhatsapp } from "react-icons/fa";

const WhatsAppIcon = () => {
  return (
    <div className=" ">
      <div className=" inner-div bottom-10 left-2 fixed sm:bottom-10 sm:right-0 z-10">
        <a href="https://www.whatsapp.com" target="_blank" rel="noopener noreferrer">
          <FaWhatsapp className="text-green-600 text-5xl  animate-opacity " />
        </a>
      </div>
    </div>
  );
};

export default WhatsAppIcon;
