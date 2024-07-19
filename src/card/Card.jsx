import React from 'react';

const imgurl = "https://www.fnp.com/images/pr/l/v20221130121907/creamy-drip-chocolate-cake-half-kg_1.jpg";

const Card = () => {
  return (
    <div>
      <div className=" m-auto mt-3 p-3  sm:p-0 card bg-[#dcdde1] w-full border-3 text-blue-700 border-black rounded-3xl hover:shadow-lg transition-all duration-1000 overflow-hidden hover:bg-[#f7d794]">
        <img src={imgurl} className="object-center  card-img-top w-full h-48 sm:object-cover" alt="..." />
        <div className="card-body p-3">
          <h5 className="card-title font-bold text-red-900">CHOCO ALMOND ICE CREAM</h5>
          <p className="card-text mb-3">
          <span className='text-xl font-medium'>INGREDIENTS</span><br/>
           Milk, Sugar, Anjeer Pulp, Kaju
          </p>
          <a href="https://www.whatsapp.com" target="_blank" rel="noopener noreferrer" className="btn mb-3">
            <img  className='w-[100px] sm:w-full' src='https://www.freeiconspng.com/uploads/logo-whatsapp-png-file-15.png' alt="WhatsApp" />
          </a>

          <button className='btn btn-danger'>READ MORE</button>
        </div>
      </div>
    </div>
  );
};

export default Card;
