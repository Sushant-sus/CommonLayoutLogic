import React from "react";
import { Link } from "react-router-dom";

// const HeaderData = [
//   { name: "Home", path: "/" },
//   { name: "Contact", path: "/contact" },
//   { name: "About", path: "/about" },
// ];

const Header = () => {
  return (
    <div className="flex pl-6 h-10 bg-red-400">
      {/* {HeaderData.map((item, index) => (
        <Link
          to={item.path}
          key={index}
          className="flex justify-center items-center p-4 w-auto bg-slate-400 hover:bg-slate-300 rounded-lg"
        >
          {item.name}
        </Link> */}
      {/* ))} */}
    </div>
  );
};

export default Header;
