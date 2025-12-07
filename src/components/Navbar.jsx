import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const location = useLocation();

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Solution", path: "/solution" },
    { name: "Product", path: "/product" },
  ];

  return (
    <header className="bg-[#1A4F8B] text-white">
      <nav className="flex items-center justify-between p-5">
        <h2 className="text-2xl font-bold">Mavero</h2>

        <div className="hidden md:flex gap-10 text-lg">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              to={link.path}
              className={`hover:text-[#00C2FF] transition ${
                location.pathname === link.path
                  ? "text-[#00C2FF] font-semibold"
                  : ""
              }`}
            >
              {link.name}
            </Link>
          ))}
        </div>

        <div className="hidden md:flex gap-4">
          <button className="bg-[#00C2FF] px-4 py-2 rounded-xl">Sign In</button>
          <button className="border border-[#00C2FF] px-4 py-2 rounded-xl">
            Get Started
          </button>
        </div>

        <button
          className="md:hidden flex flex-col gap-1"
          onClick={() => setOpen(!open)}
        >
          <span className="w-6 h-[3px] bg-white"></span>
          <span className="w-6 h-[3px] bg-white"></span>
          <span className="w-6 h-[3px] bg-white"></span>
        </button>
      </nav>

      {open && (
        <div className="md:hidden flex flex-col gap-5 px-6 pb-6 bg-[#1A4F8B] border-t border-[#00C2FF]/20">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              to={link.path}
              onClick={() => setOpen(false)}
              className={`text-lg hover:text-[#00C2FF] transition ${
                location.pathname === link.path
                  ? "text-[#00C2FF] font-semibold"
                  : ""
              }`}
            >
              {link.name}
            </Link>
          ))}

          <div className="flex flex-col gap-3">
            <button className="bg-[#00C2FF] px-4 py-2 rounded-xl w-full">
              Sign In
            </button>
            <button className="border border-[#00C2FF] px-4 py-2 rounded-xl w-full">
              Get Started
            </button>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
