import React, { useEffect, useState } from "react";
import { navLinks } from "../constants";
import { AlignLeft, X } from "react-feather";
import { Link, useNavigate } from "react-router-dom";
import { logo } from "../images";

const Navbar = () => {
  const navigate = useNavigate();
  const [logstate, setLogstate] = useState("");

  const [stickyClass, setStickyClass] = useState("relative");

  useEffect(() => {
    window.addEventListener("scroll", stickNavbar);

    return () => {
      window.removeEventListener("scroll", stickNavbar);
    };
  }, []);

  const stickNavbar = () => {
    if (window !== undefined) {
      let windowHeight = window.scrollY;
      windowHeight > 200
        ? setStickyClass(
            "fixed flex-1 navbar top-0 left-0 z-50 bg-primary smooth sm:px-20 px-6"
          )
        : setStickyClass("relative");
    }
  };

  useEffect(() => {
    const mystate = localStorage.getItem("logstate");
    setLogstate(mystate);
  }, []);

  const handleLogout = () => {
    // Perform logout actions, such as clearing token from localStorage
    localStorage.removeItem("token");
    localStorage.removeItem("logstate");
    localStorage.removeItem("user");
    console.log("user logged out");
    navigate("/login");
  };
  const [toggle, setToggle] = useState(false);
  return (
    <nav
      id="navbar"
      className={`top-0 flex-1 sm:py-6 py-6 sm:px-6 flex justify-between items-center navbar fixed start-0 z-50 w-full ${stickyClass}`}
    >
      <div className="flex-row space-x-3 flex justify-between items-center">
        <a href="/">
          {" "}
          <img src={logo} className="h-12 object contain" alt="" />
        </a>
      </div>

      <ul className="list-none items-center hidden md:flex justify-end flex-1">
        {navLinks.map((nav, index) => (
          <li
            key={index}
            className={`font-poppins font-normal cursor-pointer text-[16px]
          ${index == navLinks.length - 1 ? "mr-0" : "mr-10"} text-white mr-10
          `}
          >
            <Link
              to={`${nav.path}`}
              className="text-white font-normal px-3 py-2 rounded-md text-sm"
            >
              {nav.name}
            </Link>
          </li>
        ))}
      </ul>

      <div className="md:hidden justify-end items-center flex">
        <div
          onClick={() => setToggle((prev) => !prev)}
          className="cursor-pointer"
        >
          {toggle ? (
            <X color="white" size={30} />
          ) : (
            <AlignLeft color="white" size={30} />
          )}
        </div>

        <div
          className={`${
            toggle ? "flex" : "hidden"
          } p-6 bg-black absolute top-20 right-0 mx-4 my-2 min-w-[140px] rounded-xl sidebar`}
        >
          <ul className="list-none items-center flex flex-col justify-end flex-1">
            {navLinks.map((nav, index) => (
              <li
                key={nav.id}
                className={`font-poppins font-normal hover:text-yellow-500 cursor-pointer text-[16px] ${
                  index === navLinks.length - 1 ? "mr-0" : "mb-4"
                } text-white mr-10`}
              >
                <Link to={`${nav.path}`}>{nav.name}</Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
