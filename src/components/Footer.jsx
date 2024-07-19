import { useNavigate } from "react-router-dom";
import Footerimg from "./Footerimg";
const Footer = () => {
  const navigait = useNavigate();
  return (
    <footer className="text-gray-600 bg-[#081450]  body-font">
      <div className="container px-5 py-20 mx-auto flex md:items-center lg:items-start md:flex-row md:flex-nowrap flex-wrap flex-col">
        <div className="w-64 flex-shrink-0 md:mx-0 mx-auto text-center sm:p-7 md:text-left">
          <div className="rounded-full">
            <img
              className="w-[140px]  rounded-full sm:ml-0 ml-10 bg-white"
              src="logoimgFirstbgremevo.png"
              alt=" "
            />
          </div>
        </div>

        <div className="flex-grow flex flex-wrap md:pl-20 -mb-10 md:mt-0 mt-10 md:text-left text-center">
          <div className="lg:w-1/4 md:w-1/2 w-full px-4">
            <h2 className="title-font  text-white  font-bold tracking-widest  mb-5 text-2xl">
              Quick Links
            </h2>
            <h3 className="flex-row text-xl  text-white font-serif gap -inset-5 ">
              <div className=" hover:underline  hover:font-serif underline-offset-aut">
                {" "}
                <button
                  onClick={() => navigait("/")}
                  className="hover:border-b-2 hover:border-red-600"
                >
                  Home
                </button>
              </div>
              <div className=" hover:underline hover:font-serif underline-offset-auto">
                {" "}
                <button
                  onClick={() => navigait("about ")}
                  className="hover:border-b-2 hover:border-red-600"
                >
                  About
                </button>
              </div>
              <div className=" hover:underline hover:font-serif underline-offset-auto">
                <button
                  onClick={() => navigait(" produc")}
                  className="hover:border-b-2 hover:border-red-600"
                >
                  Our product
                </button>
              </div>
              <div className=" hover:underline hover:font-serif underline-offset-auto ">
                <button
                  onClick={() => navigait("blog ")}
                  className="hover:border-b-2 hover:border-red-600"
                >
                  Blog
                </button>
              </div>
              <div className=" hover:underline hover:font-serif underline-offset-auto">
                {" "}
                <button onClick={() => navigait("ourhistory")}>
                  Our History{" "}
                </button>
              </div>
            </h3>

            <nav className="list-none mb-10"></nav>
          </div>

          <div className="lg:w-1/4 md:w-1/2 w-full px-4">
            <h2 className="title-font   text-white font-bold  tracking-widest  mb-5 text-2xl">
              Categories
            </h2>

            <h3 className="  flex-row text-xl  text-white font-seriftext-red-950 font-serif gap -inset-5">
              <div className="hover:underline hover:font-serif underline-offset-auto">
                {" "}
                <button
                  onClick={() => navigait("/")}
                  className="hover:border-b-2 hover:border-red-600"
                >
                  Classic Vanilla
                </button>
              </div>
              <div className=" hover:underline hover:font-serif underline-offset-auto">
                {" "}
                <button
                  onClick={() => navigait("about ")}
                  className="hover:border-b-2 hover:border-red-600"
                >
                  Pineapple
                </button>
              </div>
              <div className="hover:underline hover:font-serif underline-offset-auto">
                <button
                  onClick={() => navigait("produc")}
                  className="hover:border-b-2 hover:border-red-600"
                >
                  Chocolate Cake
                </button>
              </div>
              <div className=" hover:underline hover:font-serif underline-offset-auto">
                <button
                  onClick={() => navigait("blog")}
                  className="hover:border-b-2 hover:border-red-600"
                >
                  Butterscotch
                </button>
              </div>
              <div className=" hover:underline hover:font-serif underline-offset-auto">
                {" "}
                <button onClick={() => navigait("ourhistory")}>
                  Red Vltve
                </button>
              </div>
            </h3>
          </div>

          <div className="lg:w-1/4 md:w-1/2 w-full px-4">
            <h2 className="title-font  text-white font-bold tracking-widest  mb-5 text-2xl cursor-pointer">
              Cafe Address
            </h2>
            <h3 className="text-white font-serif flex-row text-xl gap -inset-5 cursor-pointer">
              <h1 className="">Hunny Buns cafe</h1>
              <h4 className="">CIDCO Cannought, Connaught Place, </h4>
              <h4 className="">Aurangabad, 431003</h4>
            </h3>
          </div>
          <div className="lg:w-1/4 md:w-1/2 w-full px-4">
            <h2 className="title-font    text-white font-bold tracking-widest  mb-5 text-2xl">
              Follow Us on
            </h2>
            <h3 className="text-white">
              {/* <Footericons /> */}
              <Footerimg />
            </h3>
          </div>
        </div>
      </div>

      <div className="bg-red-500 ">
        <div className="  text-center mx-auto py-4 px-5 flex flex-wrap justify-center font-serif flex-col sm:flex-row">
          <p className="text-white text-xl text-center">
            Copyright © 2024 | All rights reserved
            <a
              href="https://twitter.com/knyttneve"
              rel="noopener noreferrer"
              className="text-white ml-1 text-xl"
              target="_blank"
            >
              Designed & Developed by Kiran Ghorpade
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
