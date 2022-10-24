import React, { useState, useEffect, useRef } from "react";
import downArrow from "../images/icon-arrow-down.svg";
import upArrow from "../images/icon-arrow-up.svg";

const ComProp = (prop) => {
  return (
    <li className="cursor-pointer hover:text-almost-black my-2">{prop.text}</li>
  );
};

const CompanyDropDown = () => {
  const [dropDown2, setDropDown2] = useState(downArrow);
  const [show1, setShow1] = useState(false);

  let menuRef = useRef();
  useEffect(() => {
    let handler = (e) => {
      if (!menuRef.current.contains(e.target)) {
        setShow1(false);
        setDropDown2(downArrow);
      }
    };
    document.addEventListener("mousedown", handler);
    return () => {
      document.removeEventListener("mousedown", handler);
    };
  });

  const companyHandelClick = () => {
    if (dropDown2 === downArrow) {
      setDropDown2(upArrow);
    } else {
      setDropDown2(downArrow);
    }
    setShow1(!show1);
  };

  return (
    <li
      onClick={companyHandelClick}
      className="cursor-pointer hover:text-almost-black"
      ref={menuRef}
    >
      Company
      <img src={dropDown2} alt="" className="inline-block ml-2" />
      <ul
        className={`min-[641px]:absolute min-[641px]:bg-white min-[641px]:drop-shadow-2xl min-[641px]:p-4 min-[641px]:rounded-lg min-[641px]:mt-4 ${
          show1 ? "active1" : "inactive1"
        }`}
      >
        <ComProp text={"History"} />
        <ComProp text={"Our Team"} />
        <ComProp text={"Blog"} />
      </ul>
    </li>
  );
};

export default CompanyDropDown;
