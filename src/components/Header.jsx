import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { CgClose } from "react-icons/cg";
import { FaBars } from "react-icons/fa";
import { FaCartShopping } from "react-icons/fa6";
import { FaUserCircle } from "react-icons/fa";
import { BiUserPin } from "react-icons/bi";

const navData = [
  { title: "Home", linkTo: "/" },
  { title: "About Us", linkTo: "about" },
  {
    title: "Our Product",
    subMenu: [
      { title: "Product", linkTo: "productnew" },
      { title: "Classic Vanilla", linkTo: "classicvanilla" },
      { title: "Pineapple", linkTo: "pineapple" },
      { title: "Black Forest", linkTo: "blackforest" },
      { title: "Chocolate Cake", linkTo: "chocolate" },
      { title: "Butterscotch", linkTo: "butterscotch" },
    ],
  },
  { title: "Blog", linkTo: "blog" },
  { title: "Our History", linkTo: "ourhistory" },
  { title: "Contact", linkTo: "contacttwo" },
];

const Header = () => {
  const [open, setOpen] = useState(false);
  const [subMenuOpen, setSubMenuOpen] = useState(false);
  return (
    <div className="bg-[#081450]  h-auto text-white">
      {/* Heder Secstion Only Cart */}

      <div className=" flex justify-end gap-4 pt-7 ">
        
      </div>
      <div className="w-full sm:flex sm:justify-between sm:p-6 ">
        <div className=" px-3 sm:px-0  py-1 flex justify-between items-center ">
          <div className="rounded-full sm:pt-0 pt-12">
            <img
              className="w-[140px]  animate-bounce  rounded-full sm:ml-12 ml-10 bg-white"
              src="logoimgFirstbgremevo.png"
              alt=""
            />
          </div>

          <div
            onClick={() => setOpen(!open)}
            className="block sm:hidden text-primary text-xl mr-5 "
          >
            {open ? <CgClose /> : <FaBars />}
          </div>
        </div>

        <div
          className={`flex sm:flex-row justify-start  text-[#f3f3f5] sm:mt-0 flex-col p-10 font-serif   ${
            open ? `block` : `hidden sm:flex`
          }  sm:gap-x-10 2xl :gap-x-7 gap-2    mb:bg-white`}  
        >
          {navData.map((menuItem, index) => (
            <button
              key={index}
              className=" text-start text-base uppercase sm:text-xl font-bold relative  sm:py-4"
            >
              {menuItem.linkTo ? (
                <NavLink
                  to={menuItem.linkTo}
                  onClick={() => {
                    setOpen(!open), setSubMenuOpen(false);
                  }}
                  className="link-underline-white  font-serif  text-primary "
                >
                  {menuItem.title}
                </NavLink>



              ) : (
                <div>
                  <a
                    onClick={() => {
                      setSubMenuOpen(!subMenuOpen);
                    }}
                    className="flex cursor-pointer items-center text-base sm:text-xl justify-between py-2   font-serif group-hover:text-white lg:mr-0 lg:inline-flex lg:py-0 lg:px-0"
                  >
                    {menuItem.title}
                    <span className="pl-1 mt-1">
                      <svg
                        width="15"
                        height="14"
                        viewBox="0 0 15 14"
                        className={`${subMenuOpen ? "rotate-180" : ""} `}
                      >
                        <path
                          d="M7.81602 9.97495C7.68477 9.97495 7.57539 9.9312 7.46602 9.8437L2.43477 4.89995C2.23789 4.70308 2.23789 4.39683 2.43477 4.19995C2.63164 4.00308 2.93789 4.00308 3.13477 4.19995L7.81602 8.77183L12.4973 4.1562C12.6941 3.95933 13.0004 3.95933 13.1973 4.1562C13.3941 4.35308 13.3941 4.65933 13.1973 4.8562L8.16601 9.79995C8.05664 9.90933 7.94727 9.97495 7.81602 9.97495Z"
                          fill="currentColor"
                        />
                      </svg>
                    </span>
                  </a>
                  {subMenuOpen && menuItem.subMenu && (
                    <div
                      className={`relative bg-[#081450]  h-auto text-white left-0  ${
                        subMenuOpen ? "opacity-100 lg:visible z-50" : ""
                      }    lg:absolute lg:top-[90%] lg:block lg:w-[200px]  lg:opacity-100 lg:shadow-lg lg:group-hover:visible lg:group-hover:top-full z-[99]`}
                    >
                      {menuItem.subMenu.map((submenuItem, index) => (
                        <Link
                          to={submenuItem.linkTo}
                          onClick={() => {
                            setSubMenuOpen(!subMenuOpen), setOpen(!open);
                          }}
                          key={index}
                          className="block py-2 font-bold w-full text-center hover:border-b-2  hover:-translate-y-2 rounded-2xl  border-y-white text-white  mr-10 text-sm sm:text-base  hover:opacity-90 "
                        >
                          {submenuItem.title}
                        </Link>
                        
                      ))}
                    </div>
                  )}
                </div>
              )}
            </button>
          ))}
          <div className="">
            {" "}
            <Link to="login">
              <div className=" inner-div flex  sm:gap-1   sm:right-0 text-white   sm:pt-5   sm:mr-3 hover:border-yellow-200 hover:border-b-2">
                <FaUserCircle className="w-7 h-7 " /> 
              </div>{" "}
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
