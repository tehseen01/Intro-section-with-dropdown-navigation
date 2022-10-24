import React, { useState, useEffect, useRef } from "react";

import calender from "../images/icon-calendar.svg";
import planing from "../images/icon-planning.svg";
import reminder from "../images/icon-reminders.svg";
import todo from "../images/icon-todo.svg";
import downArrow from "../images/icon-arrow-down.svg";
import upArrow from "../images/icon-arrow-up.svg";

const list = [
  {
    id: 1,
    img: todo,
    text: "Todo List",
  },
  {
    id: 2,
    img: calender,
    text: "Calendar",
  },
  {
    id: 3,
    img: reminder,
    text: "Reminder",
  },
  {
    id: 4,
    img: planing,
    text: "Planning",
  },
];
const FeatureDropDown = () => {
  const [dropDown1, setDropDown1] = useState(downArrow);
  const [show, setShow] = useState(false);

  let menuRef = useRef();
  useEffect(() => {
    let handler = (e) => {
      if (!menuRef.current.contains(e.target)) {
        setShow(false);
        setDropDown1(downArrow);
      }
    };
    document.addEventListener("mousedown", handler);
    return () => {
      document.removeEventListener("mousedown", handler);
    };
  });

  const handelClick = () => {
    if (dropDown1 === downArrow) {
      setDropDown1(upArrow);
    } else {
      setDropDown1(downArrow);
    }
    setShow(!show);
  };
  return (
    <li
      onClick={handelClick}
      className="cursor-pointer hover:text-almost-black font-normal "
      ref={menuRef}
    >
      Features
      <img src={dropDown1} alt="" className={`inline-block ml-2 `} />
      <ul
        className={`min-[641px]:absolute min-[641px]:bg-white min-[641px]:drop-shadow-2xl min-[641px]:p-4 min-[641px]:rounded-md min-[641px]:mt-4 min-[641px]:ml-ml2  ${
          show ? "active" : "inactive"
        }`}
      >
        {list.map((item) => {
          const { id, img, text } = item;
          return (
            <li
              className="my-2 px-2 cursor-pointer hover:text-almost-black"
              key={id}
            >
              <img src={img} alt="" className="inline-block mr-4" />
              {text}
            </li>
          );
        })}
      </ul>
    </li>
  );
};

export default FeatureDropDown;
