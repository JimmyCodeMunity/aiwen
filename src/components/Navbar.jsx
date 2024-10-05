import React, { useEffect, useState } from "react";
import { navLinks } from "../constants";
import { AlignLeft, X } from "react-feather";
import { Link, useNavigate } from "react-router-dom";
import { logo } from "../images";
import * as Icon from 'react-feather'

const Navbar = () => {
  const navigate = useNavigate();
  const [logstate, setLogstate] = useState("");
  const [stickyClass, setStickyClass] = useState("relative");
  const [dropdownOpen, setDropdownOpen] = useState(false);

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
      <script src="https://unpkg.com/taos@1.0.5/dist/taos.js"></script>
      <div className="flex-row space-x-3 flex justify-between items-center">
        <a href="/">
          <img src={logo} className="h-12 object contain" alt="Logo" />
          <p className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-pink-600 md:text-lg text-xs">
            AI women empowerment Network
          </p>
        </a>
      </div>

      <ul className="list-none items-center hidden md:flex justify-end flex-1">
        {navLinks.map((nav, index) => (
          <li
            key={index}
            className={`font-poppins font-normal cursor-pointer text-[16px] ${
              index == navLinks.length - 1 ? "mr-0" : "mr-10"
            } text-white relative`}
          >
            {/* Check if nav item has subtopics */}
            {nav.subtopics ? (
              <div
                className="relative"
                onMouseEnter={() => setDropdownOpen(true)}
                onMouseLeave={() => setDropdownOpen(false)}
              >
                <Link
                  to={nav.path}
                  className="text-white flex font-normal px-3 py-2 rounded-md text-sm"
                >
                  {nav.name}
                  <Icon.ChevronDown color="white" size={15}/>
                </Link>
                {/* Dropdown menu */}
                {dropdownOpen && (
                  <ul className="absolute left-0 mt-2 w-48 bg-black text-white rounded-lg shadow-lg">
                    {nav.subtopics.map((sub, subIndex) => (
                      <li key={subIndex} className="px-4 py-2 hover:bg-pink-500">
                        <Link to={sub.path}>{sub.name}</Link>
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            ) : (
              <Link
                to={nav.path}
                className="text-white font-normal px-3 py-2 rounded-md text-sm"
              >
                {nav.name}
              </Link>
            )}
          </li>
        ))}
      </ul>

      <div className="md:hidden justify-end items-center flex">
        <div onClick={() => setToggle((prev) => !prev)} className="cursor-pointer">
          {toggle ? <X color="white" size={30} /> : <AlignLeft color="white" size={30} />}
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
                } text-white`}
              >
                {/* Check if mobile nav item has subtopics */}
                {nav.subtopics ? (
                  <div>
                    <Link to={nav.path}>{nav.name}</Link>
                    <ul className="mt-2 ml-4">
                      {nav.subtopics.map((sub, subIndex) => (
                        <li key={subIndex} className="hover:text-yellow-500">
                          <Link to={sub.path}>{sub.name}</Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                ) : (
                  <Link to={nav.path}>{nav.name}</Link>
                )}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
