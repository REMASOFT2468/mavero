import React from "react";

const Navbar = () => {
  return (
    <div className="bg-[#1A4F8B] flex p-5 text-white justify-between">
      <div className="mt-[10px] font-bold">
        <h1>Mavero</h1>
      </div>
      <div className="hidden w-[200px] justify-between items-center md:flex">
        <p>Home</p>
        <p>About</p>
        <p>Services</p>
      </div>
      <div className="flex w-[180px] md:w-[200px] justify-between items-center ">
        <a
          href=""
          className="bg-[#00C2FF] p-2 text-[#F7F9FC] rounded-xl md:w-20 text-center"
        >
          Login
        </a>
        <a href="" className="border-2 border-[#00C2FF] p-2 rounded-xl">
          Get Started
        </a>
      </div>
    </div>
  );
};

export default Navbar;
