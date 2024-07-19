import { Link, Outlet } from "react-router-dom";

function History() {
  return (
    <div className="h-auto text-3xl text-bold text-center bg-[#fffafb]">
      <div className=" bg-[#fffafb]">
        <div className="w-11/12 mx-auto py-5">
          <h1 className="py-7 text-center font-bold text-3xl text-red-950 font-serif underline  underline-offset-8">
            {" "}
            The History of Cakes
          </h1>
          <p className="text-xl p-3 font-serif">
            For those of us who share an affinity for sweets, cake probably
            ‘takes the cake’ as our favorite dessert ever. It’s the one treat
            most commonly associated with momentous celebrations, and it can
            even manage to evoke nostalgia. Not to mention, a flavor profile
            exists for practically every taste, even those who don’t like
            chocolate (although we have to respectfully agree to disagree here).{" "}
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-7 sm:gap-x-10">
            <div className="col-span-1">
              <div className="grid sm:grid-cols-1 grid-cols-2 gap-x-12 gap-y-6 sm:gap-x-0 ">
                <Link to="vision">
                  <button className=" flex mx-auto text-white bg-red-500 border-2 border-red-500 py-2 px-2 focus:outline-none hover:bg-white hover:text-black font-serif rounded text-lg">
                      <h1 className="flex mx-auto text-white bg-red-500 border-2 border-red-500 py-2 px-8 focus:outline-none hover:bg-white hover:text-black font-serif rounded text-lg">  2021</h1>
                  </button>
                </Link>
                <Link to="mision">
                  <button className="flex mx-auto text-white bg-red-500 border-2 border-red-500 py-2 px-2 focus:outline-none hover:bg-white hover:text-black font-serif rounded text-lg">
                    <h1 className="flex mx-auto text-white bg-red-500 border-2 border-red-500 py-2 px-8 focus:outline-none hover:bg-white hover:text-black font-serif rounded text-lg">  2022 </h1>
                  </button>
                </Link>
              </div>
            </div>
            <div className="sm:col-span-6 bg-white px-10">
              <Outlet />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default History;
