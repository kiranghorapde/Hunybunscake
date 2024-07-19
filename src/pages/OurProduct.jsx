
import Prodectpage from "../card/Prodectpage (1)";
const OurProduct = () => {
  return (
    <div className="bg-[#fffafb] absolute px-2 sm:px-0">

     
 <div className="bg-[url('/Prodectimg/BgimgCake.jpg')] bg-no-repeat bg-cover h-auto bg-center sm:h-[650px] "> 
     <img
        className="w-full  border-t-4 border-white shadow-white shadow-2xl"
        src="/Prodectimg/BG firstimg.webp"
        alt=""
      />
  
  <div className="sm:p-14 sm:ml-16 sm:px-0 px-11 sm:pt-0 pt-4 sm:mt-14   "> 
    <h1 className="text-white font-bold text-2xl border-b-2 border-dashed sm:text-start text-center sm:border-none">THE CAKE BOOK</h1><br />
    <p className="text-ellipsis text-white leading-tight ">Fulfill all of your cake needs for any occasion with <br />breakfast cakes, petite cakes, Bundt cakes, snacking cakes,<br /> loaf cakes, holiday cakes and stunning layered cakes. Consider all of <br />your cake cravings satisfied!</p>
     </div>
  </div>

       <div className="  sm:px-11 sm:gap-20  px-3">
        {/* <div className="grid-flow-row-dense sm:text-xl relative">
          <div className="sm:p-4 ">
            {" "}
            <h1 className="text-center border-current  p-2 text-xl uppercase font-bold  border-b-2 border-yellow-500 ">
              Categories
            </h1>
          </div>
          
         <div className="sm:top-5 top-2">
            <button className="flex  sm:gap-2">
               <FaCakeCandles className="text-4xl text-yellow-400" />
               <h1 className="
                ">  Pineapple{" "}</h1>
             </button>
             <br />
             <button className="flex  sm:gap-2">
               <BsCake2 className="text-4xl  text-pink-900" />
               <h1 className="
                "> ClassicVanilla </h1>
             </button>
             <br />
             <button className="flex  sm:gap-2">
              <LiaBirthdayCakeSolid className="text-4xl text-amber-200 bg-black" />
             <h1 className="
             l  ">  Black Forest</h1>
            </button>
             <br />
             <button className="flex  sm:gap-2">
               <BsCake2 className="text-4xl text-red-900" />
               <h1 className="
                "> ChocolateCake </h1>{" "}
             </button>
             <br />
             <button className="flex sm:gap-2">
               <BsCake2 className="text-4xl text-yellow-950" />
               <h1 className=" ">  Butterscotch </h1>
             </button>
            <br />
             <button className="flex  sm:gap-2">
              <BsCake2 className="text-4xl text-red-500" />
              <h1 className=" ">  Red Vlvet </h1>
             </button>
             <br />
           </div>
         </div>   */}

        <div className=" ">
        <Prodectpage/>
        </div>
      </div>
  
    </div>
  );
};

export default OurProduct;
