import React from 'react'
import MainCardGallery from '../card/MainCardGallery'

const ClassicVanilla = () => {
  return (
    <div>  
      <div > 
        <div className="sm:w-50  sm:px-0 px-4 sm:mx-60 my-5 sm:my-10 border-b-4  border-red-900 rounded-e-3xl  rounded-s-3xl"> 
       <marquee ehavior= "alternate " direction=" right" >
         
        <h1 className=" font-serif text-2xl"> ||  Celebrate Special Occasions  ||    </h1>
        </marquee> 
        </div>
        <div className="grid sm:grid-cols-2 gap-6 p-11">
          <div>   <img src="Images/Anniversary_webimg2.webp" alt="" /> 
          <h3 className=" text-2xl font-serif text-black text-center border-b-4  rounded-s-3xl border-red-900 rounded-e-3xl ">Birthday</h3>
          </div>
         <div>  <img src="/Images/Birthday_webimg1.jpg" alt="" />
         <h3 className=" text-2xl font-serif text-black text-center border-b-4  rounded-s-3xl border-red-900 rounded-e-3xl "  >Anniversary</h3>
         </div>
        </div>
      </div>

      <MainCardGallery/>
      
    </div>
  )
}

export default ClassicVanilla

