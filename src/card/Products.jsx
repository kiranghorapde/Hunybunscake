import React from 'react';
import { FaRupeeSign } from "react-icons/fa";


const imgurl = "https://captionsgram.com/wp-content/uploads/2021/02/chocolate-cake-caption-1.jpg";

const products = () => {
  return (
    <div>
      <div>
        <img src={imgurl} className="object-center  card-img-top w-full h-48 sm:object-cover" alt="..." />
        <div className="card-body p-3">
          <h5 className="">CHOCO ALMOND BERRY CAKE</h5>
          <p className="card-text mb-3">
            <span className='text-xl font-medium'>INGREDIENTS</span><br />
            Milk, Sugar, Anjeer, Pulp, Kaju,pista
          </p>

          <button className='btn btn-danger text-pink-500'>READ MORE</button>
        </div>
      </div>



      <h1 className=' text-3xl text-left'>CHOCO ALMOND <span>BERRY CAKE</span></h1>

      <div className=' grid grid-cols-4 bg-white'>
        <div>
          <img className='w-[220px] h-[200px] object-cover rounded-full ml-4 ' src='https://th.bing.com/th/id/OIP.RF-npsXIp5x4jIvpPilMsgHaLH?rs=1&pid=ImgDetMain'></img>
          <p className='text-center'>Chiken barbeque Roll</p>
          <p className='flex justify-center'><FaRupeeSign className='mt-1' /><span className='text-pink-600'>200</span></p>
        </div>


        <div>
          <img className='w-[220px] h-[200px] object-cover rounded-full ml-4 ' src='https://brownedbutterblondie.com/wp-content/uploads/2019/01/Chocolate-Chocolate-Layer-Cake-BP-3.jpg'></img>
          <p className='text-center'>Pista Garden</p>
          <p className='flex justify-center'><FaRupeeSign className=' text-pink-500mt-1 ' /><span className='text-pink-600'>250</span></p>
        </div>


        <div>
          <img className='w-[220px] h-[200px] object-cover rounded-full ml-4 ' src='https://th.bing.com/th/id/OIP._VVgO127MunGorhSHuR2GgHaE8?w=202&h=135&c=7&r=0&o=5&dpr=1.5&pid=1.7'></img>
          <p className='text-center'>Black Berry</p>
          <p className='flex justify-center'><FaRupeeSign className='mt-1' /><span className='text-pink-600'>150</span></p>
        </div>


        <div>
          <img className='w-[220px] h-[200px] object-cover rounded-full ml-4 ' src='https://i.pinimg.com/originals/53/35/97/533597015f87bbcc85a6a447c096d735.jpg'></img>
          <p className='text-center'>Chocolate Crpsi</p>
          <p className='flex justify-center'><FaRupeeSign className='mt-1' /><span className='text-pink-600'>300</span></p>
        </div>


        <div>
          <img className='w-[220px] h-[200px] object-cover rounded-full ml-4 ' src='https://th.bing.com/th/id/OIP.cC95UPJW4HXnbyVXUOgW0wHaLK?w=202&h=304&c=7&r=0&o=5&dpr=1.5&pid=1.7'></img>
          <p className='text-center'>Dark Chocolate</p>
          <p className='flex justify-center'><FaRupeeSign className='mt-1' /><span className='text-pink-600'>520</span></p>
        </div>


        <div>
          <img className='w-[220px] h-[200px] object-cover rounded-full ml-4 ' src='https://nouba.com.au/wp-content/uploads/2016/12/vibrant-floral-wedding-perth-photographer-we-are-all-stardust-22.jpg'></img>
          <p className='text-center'>Butterskoch</p>
          <p className='flex justify-center'><FaRupeeSign className='mt-1' /><span className='text-pink-600'>160</span></p>
        </div>

        <div>
          <img className='w-[220px] h-[200px] object-cover rounded-full ml-4 ' src='https://i.pinimg.com/originals/75/a0/4d/75a04d7d7cbd7cfaa10d13766f110145.jpg'></img>
          <p className='text-center'>Dark milk</p>
          <p className='flex justify-center'><FaRupeeSign className='mt-1' /><span className='text-pink-600'>320</span></p>
        </div>


        <div>
          <img className='w-[220px] h-[200px] object-cover rounded-full ml-4 ' src='https://th.bing.com/th?q=Chocolate+Crumb+Cake&w=120&h=120&c=1&rs=1&qlt=90&cb=1&dpr=1.5&pid=InlineBlock&mkt=en-IN&cc=IN&setlang=en&adlt=moderate&t=1&mw=247'></img>
          <p className='text-center'>Rich Chocolate</p>
          <p className='flex justify-center'><FaRupeeSign className='mt-1' /><span className='text-pink-600'>400</span></p>
        </div>

        <div>
          <img className='w-[220px] h-[200px] object-cover rounded-full ml-4 ' src='https://th.bing.com/th?q=Flourless+Chocolate+Cake&w=120&h=120&c=1&rs=1&qlt=90&cb=1&dpr=1.5&pid=InlineBlock&mkt=en-IN&cc=IN&setlang=en&adlt=moderate&t=1&mw=247'></img>
          <p className='text-center'>Venila cake</p>
          <p className='flex justify-center'><FaRupeeSign className='mt-1' /><span className='text-pink-600'>520</span></p>
        </div>


        <div>
          <img className='w-[220px] h-[200px] object-cover rounded-full ml-4 ' src='https://th.bing.com/th/id/OIP.NW8cZu2vNVfl1izyTjhFQwHaLH?pid=ImgDet&w=202&h=303&c=7&dpr=1.5'></img>
          <p className='text-center'>Ice Cake</p>
          <p className='flex justify-center'><FaRupeeSign className='mt-1' /><span className='text-pink-600'>160</span></p>
        </div>

        <div>
          <img className='w-[220px] h-[200px] object-cover rounded-full ml-4 ' src='https://th.bing.com/th/id/OIP.br2n4fLO47gdv7CgOrSY2wHaKX?pid=ImgDet&w=202&h=283&c=7&dpr=1.5'></img>
          <p className='text-center'>Black forest</p>
          <p className='flex justify-center'><FaRupeeSign className='mt-1' /><span className='text-pink-600'>480</span></p>
        </div>


        <div>
          <img className='w-[220px] h-[200px] object-cover rounded-full ml-4 ' src='https://th.bing.com/th/id/OIP.MU27pPdl307Q_sDxFcR6HQHaJ3?pid=ImgDet&w=202&h=269&c=7&dpr=1.5'></img>
          <p className='text-center'>Rose wood</p>
          <p className='flex justify-center'><FaRupeeSign className='mt-1' /><span className='text-pink-600'>600</span></p>
        </div>


      </div>
      <h1 className='text-center'><span className='text-pink-500'>Order From Nearest Center</span></h1>
      <div className=' flex justify-center'>
        <img className='w-[300px]' src='https://cakesonline.monginis.net/assets/images/no-shop-img.png'></img>
        <p></p>
      </div>

    </div>
  );
};

export default products;
