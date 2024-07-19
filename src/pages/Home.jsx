
import Card1Main from "../card/Card1Main";
import CakeSlider from "../components/CakeSlider";


const Home = () => {
  return (
    <div className="bg-[#fffafb] pt-2">
      <div className="">
        <img className="flex justify-center w-[300px]" src=" " alt="" />
      </div>
      <div className="bg-current">
        <CakeSlider />{" "}
      </div>
      <div className="flex justify-center sm:p-14 sm:text-4xl gap-3  font-bold p-5">
        <h1 className="">Bring A Box Of </h1>
        <h1 className="text-green-900">Happiness Today</h1>
      </div>
      <div className=" sm:flex sm:justify-center sm:gap-8  sm:p-2 grid grid-cols-1 ">
        <div>
          <img
            className="w-[500px]"
            src="Images/homepagenew1.jpg"
            alt="img1"
          />
          <div className=" w-40 my-2 flex justify-center mx-auto text-center text-white bg-red-500 border-2 border-red-500 py-2 px-2 focus:outline-none hover:bg-white hover:text-black font-serif rounded text-lg">
            {" "}
            <button className=" sm:text-xl   text-center">order online</button>
          </div>
        </div>
        <div>
          <img className="w-[500px]" src="Images/homepagenew2.jpg" alt="" />
          <div className="w-40 my-2 flex justify-center mx-auto text-white bg-red-500 border-2 border-red-500 py-2 px-2 focus:outline-none hover:bg-white hover:text-black font-serif rounded text-lg">
            <button className="sm:text-xl text-center ">
              visit Our 
            </button>
          </div>
        </div>
      </div>

      <div>
        <div className="bg-yellow-100">
          <div className="flex justify-center sm:p-14 sm:text-4xl gap-4 font-bold p-5">
            <h1 className="">Shop By </h1>
            <h1 className="text-green-900"> Bestseller Categories</h1>
          </div>
          <div className="sm:flex sm:justify-center sm:gap-16   sm:p-12 p-5 ">
            <div className="sm:grid sm:grid-cols-2 grid grid-cols-2  sm:px-12 px-5 sm:py-9 p-14 sm:gap-8  bg-white w-full rounded-3xl ">
              <div className=" ">
                {" "}
                <img
                  className="w-full sm:rounded-none rounded-full"
                  src="Images/homepagenew2.jpg"
                  alt=""
                />
              </div>{" "}
              <div className="py-1 ">
                {" "}
                <h1 className="sm:text-2xl font-bold ">Birthday Surprises</h1>
                <h3 className="p-3">3000+ Unique Gifts</h3>
                <button className="w-40 my-20 flex justify-center mx-auto text-white py-1 bg-red-500 border-2 border-red-500  px-4 focus:outline-none hover:bg-white hover:text-black font-serif rounded text-lg">
                  view all
                </button>
              </div>
            </div>

            <div className="sm:grid sm:grid-cols-2 grid grid-cols-2  sm:px-12 px-5 sm:py-9 p-14 sm:gap-8 bg-white rounded-3xl   w-full">
              <div className=" ">
                {" "}
                <img
                  className="w-full sm:rounded-none rounded-full"
                  src=" /home img/Stand1img.jpg"
                  alt=""
                />{" "}
              </div>
              <div className="py-1">
                <h1 className="sm:text-2xl font-bold">Anniversary Gifts</h1>
                <h3 className="p-3">Flowers | Cakes | Personalised</h3>
                <button className=" w-40 my-20 flex justify-center mx-auto text-white bg-red-500 border-2 border-red-500 py-1 px-4 focus:outline-none hover:bg-white hover:text-black font-serif rounded text-lg">
                  view all
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* first card */}
        <div className="">
          <div className="sm:p-12 p-2">
            <div className="flex justify-center  sm:ml-16 sm:text-4xl text-2xl gap-3 font-bold p-5">
              <h1 className="">Shop By </h1>
              <h1 className="text-pink-600"> By Cake</h1>
            </div>
            <div className=" grid-cols-2 sm:flex sm:justify-between sm:gap-16">
              <marquee behavior="alternate" direction="right">
                {" "}
                <div className="text-center sm:ml-20 text-xl  font-semibold text-gray-950">
                  <h1 className=" sm:px-0 px-6">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit
                  </h1>
                </div>
              </marquee>

              <div className=" flex justify-center p-2">
                <button className=" text-center text-xl  bg-red-500 text-white font-serif rounded-e-3xl rounded-s-3xl sm:h-[60px] sm:w-[160px] animate-opacity">
                  ORDER NOW
                </button>
              </div>
            </div>
            <Card1Main />
          </div>
          <div className="flex justify-center "></div>
        </div>
        {/* second card */}
        <div className="">
          <div className="sm:p-12 p-4">
            <div className="flex justify-center sm:justify-start sm:ml-16 sm:text-4xl text-2xl gap-3 font-bold p-5">
              <h1 className="">Shop By </h1>
              <h1 className="text-pink-600"> 3D & SP Cakes</h1>
            </div>
            <div className=" grid-cols-2 sm:flex sm:justify-between sm:gap-16">
              <marquee behavior="alternate" direction="left">
                {" "}
                <div className="text-center sm:ml-20 text-xl  font-semibold text-gray-950">
                  <h1>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit
                  </h1>
                </div>
              </marquee>
              <div className="flex justify-center p-2">
                <button className="text-center text-xl bg-red-500 text-white font-bold rounded-e-3xl rounded-s-3xl sm:h-[60px] sm:w-[160px] animate-opacity">
                  ORDER NOW
                </button>
              </div>
            </div>
            <Card1Main />
          </div>
          <div className="flex justify-center "></div>
        </div>

        {/* thred card */}
        <div className="">
          <div className="sm:p-12 p-4">
            <div className="flex justify-center sm:justify-start sm:ml-16 sm:text-4xl text-2xl gap-3 font-bold p-5">
              <h1 className="">Shop By </h1>
              <h1 className="text-pink-600"> Pastery</h1>
            </div>
            <div className=" grid-cols-2 sm:flex sm:justify-between sm:gap-16">
              <marquee behavior="alternate" direction="right">
                {" "}
                <div className="text-center sm:ml-20 text-xl  font-semibold text-gray-950">
                  <h1>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit
                  </h1>
                </div>
              </marquee>
              <div className="flex justify-center p-2">
                <button className="text-center text-xl bg-red-500 text-white font-bold rounded-e-3xl rounded-s-3xl sm:h-[60px] sm:w-[160px] animate-opacity">
                  ORDER NOW
                </button>
              </div>
            </div>
            <Card1Main />
          </div>
          <div className="flex justify-center "></div>
        </div>
      </div>
    </div>
  );
};

export default Home;
