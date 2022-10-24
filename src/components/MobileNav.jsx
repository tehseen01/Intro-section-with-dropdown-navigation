import React, { useState } from "react";

import menu from "../images/icon-menu.svg";
import closeMenu from "../images/icon-close-menu.svg";

const MobileNav = ({ showMenu, setShowMenu }) => {
  const [menuIcon, setMenuIcon] = useState(menu);

  const clickHandler = () => {
    if (menuIcon === menu) {
      setMenuIcon(closeMenu);
    } else {
      setMenuIcon(menu);
    }
    setShowMenu(!showMenu);
  };
  return (
    <div>
      <div
        className={`min-[641px]:hidden min-h-full w-full absolute left-l15 top-0 ${
          showMenu ? "overlay" : "notOverlay"
        }`}
      ></div>
      <div onClick={clickHandler}>
        <img
          src={menuIcon}
          alt=""
          className="flex justify-end min-[641px]:hidden"
        />
      </div>
      <div
        className={`min-[641px]:hidden bg-almost-white absolute top-0 right-0 w-2/3 min-h-full ${
          showMenu ? "toggle" : "notToggle"
        }`}
      >
        <div>
          <img
            src={menuIcon}
            alt=""
            className="absolute right-4 top-5"
            onClick={clickHandler}
          />
        </div>
      </div>
    </div>
  );
};

export default MobileNav;
