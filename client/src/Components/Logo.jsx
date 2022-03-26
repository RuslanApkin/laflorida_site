import React from "react";
import icon from "../img/icon.svg";

const Logo = () => {
  return (
    <div className="flex lg:ml-0">
      <a href="#">
        <span className="sr-only">La Florida</span>
        <img className="h-15 w-auto" src={icon} alt="" />
      </a>
    </div>
  );
};

export default Logo;
