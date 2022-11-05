import React, { useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { BsChevronDown } from "react-icons/bs";
import { CgClose } from "react-icons/cg";
import { Link } from "react-router-dom";
import images from "../images";
import useAuth from "../hooks/useAuth";
const Navbar = () => {
  const [navbar, setNavbar] = useState(false);
  const { token, handleAuthLogout } = useAuth();

  return (
    <nav
      className={`w-full  ${
        navbar && "bg-[#0c0809] h-screen "
      }  mx-auto top-0 md:h-auto `}
    >
      <div className="justify-between   mx-auto  md:items-center md:flex px-3 sm:px-6 ">
        <div>
          <div className="flex items-center justify-between py-3 md:py-5 md:block">
            <Link onClick={() => setNavbar(false)} to="/">
              <img className="" src={images.nav} alt="logo" />
            </Link>
            <div className="md:hidden">
              <button
                className="p-2  rounded-md outline-none focus:border-[#FAFAFA] focus:border"
                onClick={() => setNavbar(!navbar)}
              >
                {navbar ? (
                  <CgClose className="w-6 h-6" color="#FAFAFA" size={25} />
                ) : (
                  <GiHamburgerMenu
                    className="w-6 h-6"
                    color="#FAFAFA"
                    size={25}
                  />
                )}
              </button>
            </div>
          </div>
        </div>
        <div>
          <div
            className={`flex-1    md:block md:pb-0 md:mt-0 ${
              navbar ? "block" : "hidden"
            }`}
          >
            <ul className=" mt-10 md:mt-0 items-center justify-center  lg:gap-2  space-y-8 md:flex md:space-x-1 lg:space-x-4 md:space-y-0">
              <li
                onClick={() => setNavbar(false)}
                className="text-[#E5E5E5]  text-[24px] "
              >
                <Link to="/game">PlayGame</Link>
              </li>
            </ul>

            <div className="mt-3 space-y-2  md:hidden ">
              {token ? (
                <button
                  onClick={() => {
                    setNavbar(false);
                    handleAuthLogout();
                  }}
                  className="inline-block max-w-xs bg-white w-full px-4 py-2 text-center  rounded-md shadow"
                >
                  login
                </button>
              ) : (
                <Link
                  to="/login"
                  onClick={() => setNavbar(false)}
                  className="inline-block max-w-xs bg-white w-full px-4 py-2 text-center  rounded-md shadow"
                >
                  login
                </Link>
              )}
            </div>
          </div>
        </div>
        <div className="hidden space-x-2 md:inline-block">
          {token ? (
            <button
              onClick={handleAuthLogout}
              className="inline-block text-white bg-black w-full px-12 py-2 text-center  rounded-md shadow"
            >
              Logout
            </button>
          ) : (
            <Link
              to="/login"
              className="inline-block text-white bg-black w-full px-12 py-2 text-center  rounded-md shadow"
            >
              login
            </Link>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
