import React from "react";

const Header = () => {
  return (
    <div className="flex justify-around my-12 mx-auto items-center">
      <h1 className="font-bold text-4xl cursor-pointer">Knowledge Hub</h1>
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
