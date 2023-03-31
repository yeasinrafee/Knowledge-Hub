import React from "react";

const Header = () => {
  return (
    <div className="flex flex-col md:flex-row justify-around my-12 mx-auto items-center w-full">
      <h1 className="font-bold text-4xl cursor-pointer mb-5 md:mb-0">
        Knowledge Hub
      </h1>
      <div className="nav-links text-xl cursor pointer">
        <a className="mr-5" href="#">
          Home
        </a>
        <a className="mr-5" href="#">
          Content
        </a>
        <a className="mr-5" href="#">
          Blog
        </a>
        <a href="#">Login</a>
      </div>
    </div>
  );
};

export default Header;
