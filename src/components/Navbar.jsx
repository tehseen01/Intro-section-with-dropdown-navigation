import React, { useState, useEffect, useRef } from "react";
import CompanyDropDown from "./CompanyDropDown";
import FeatureDropDown from "./FeatureDropDown";
import MobileNav from "./MobileNav";

const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false);

  // const menuRef = useRef();
  // useEffect(() => {
  //   let handler = (e) => {
  //     if (!menuRef.current.contains(e.target)) {
  //       setShow(false);
  //       setDropDown1(downArrow);
  //     }
  //   };
  //   document.addEventListener("mousedown", handler);
  //   return () => {
  //     document.removeEventListener("mousedown", handler);
  //   };
  // });

  return (
    <header
      className={` w-11/12 m-auto max-sm:flex max-sm:justify-between max-sm:items-center`}
    >
      <nav className="flex items-center mt-4">
        <h1 className="text-4xl font-bold ">snap</h1>
        <div
          className={`flex min-[641px]:items-center  min-[1025px]:gap-80 max-sm:left-40 min-[641px]:justify-between max-sm:absolute max-sm:top-14 max-sm:z-10 max-sm:flex max-sm:flex-col ${
            showMenu ? "showNav" : "hideNav"
          }`}
        >
          <ul className="flex gap-8 min-[641px]:mx-12 text-lg text-medium-gray max-sm:flex max-sm:flex-col  max-sm:gap-4">
            <FeatureDropDown />

            <CompanyDropDown />

            <li className="cursor-pointer hover:text-almost-black">Careers</li>
            <li className="cursor-pointer hover:text-almost-black">About</li>
          </ul>
          <ul className="flex gap-10 min-[1367px]:ml-32 min-[641px]:ml-16 text-lg min-[641px]:mr-12 items-center max-sm:flex max-sm:flex-col max-sm:items-center max-sm:justify-center max-sm:gap-3">
            <li className="cursor-pointer hover:text-almost-black text-medium-gray">
              Login
            </li>
            <li className="border text-medium-gray border-medium-gray hover:border-almost-black rounded-xl py-2 px-4 cursor-pointer hover:text-almost-black max-sm:px-14">
              Register
            </li>
          </ul>
        </div>
      </nav>
      <MobileNav showMenu={showMenu} setShowMenu={setShowMenu} />
    </header>
  );
};

export default Navbar;
