import React from "react";
import icon from "../img/icon.svg";
import { Link } from "react-router-dom";

const Logo = () => {
  return (
    <div className="flex lg:ml-0">
      <Link to="/">
        <span className="sr-only">La Florida</span>
        <img className="h-15 w-auto" src={icon} alt="" />
      </Link>
    </div>
  );
};

export default Logo;
