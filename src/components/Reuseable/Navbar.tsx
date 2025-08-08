"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { Dumbbell, Info, Phone, Wrench, Menu, X } from "lucide-react";

const NavLinks = [
  { name: "Home", url: "/", icon: <Dumbbell size={16} /> },
  { name: "About", url: "/about", icon: <Info size={16} /> },
  { name: "Services", url: "/services", icon: <Wrench size={16} /> },
  { name: "Contact", url: "/contact", icon: <Phone size={16} /> },
];

const NavBar = () => {
  const [open, setOpen] = useState(false);
  const [navBarColor, setNavBarColor] = useState(false);

  const handleToggle = () => setOpen(!open);

  const listenScrollEvent = () => {
    setNavBarColor(window.scrollY > 10);
  };

  useEffect(() => {
    window.addEventListener("scroll", listenScrollEvent);
    return () => {
      window.removeEventListener("scroll", listenScrollEvent);
    };
  }, []);

  return (
    <header className="w-full h-auto bg-transparent overflow-x-hidden fixed z-50 top-0 left-0">
      {/* Desktop Navbar */}
      <nav
        className={`w-full lg:h-28 md:h-24 h-20 ${
          navBarColor ? "bg-zinc-900" : "bg-transparent"
        } lg:px-16 md:px-9 px-8 flex justify-between items-center transition-colors duration-300`}
      >
        {/* Logo */}
        <Link
          href="/"
          className="font-extrabold flex items-center relative md:text-2xl text-lg text-white"
        >
          <span className="text-amber-500">Gym</span>Nex
        </Link>

        {/* Desktop Links */}
        <div className="lg:flex hidden items-center h-full gap-10">
          <ul className="flex items-center justify-center h-full gap-6 relative">
            {NavLinks.map((navlink, index) => (
              <li key={index}>
                <Link
                  href={navlink.url}
                  className="relative inline-flex items-center gap-2 px-2 whitespace-nowrap text-white uppercase text-xs font-bold transition-all duration-200 hover:text-amber-500"
                >
                  {navlink.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Mobile Menu Icon */}
        <div
          className="lg:hidden flex text-white cursor-pointer"
          onClick={handleToggle}
        >
          <Menu size={30} />
        </div>
      </nav>

      {/* Mobile Nav */}
      <nav
        className={`lg:hidden h-screen w-full bg-gray-950/90 fixed top-0 transition-all duration-500 ease-out ${
          open ? "right-0" : "-right-[120vw]"
        }`}
      >
        <div
          className={`w-full md:w-[50%] h-screen bg-zinc-900 flex flex-col justify-between items-center relative transition-all duration-500 ease-out delay-300 ${
            open ? "right-0" : "-right-[120vw]"
          }`}
        >
          <section className="w-full px-4 py-6 flex flex-col gap-16">
            {/* Mobile Header */}
            <div className="w-full flex pt-5 px-4 justify-between items-center">
              <Link
                href="/"
                className="font-extrabold text-2xl text-white"
                onClick={handleToggle}
              >
                <span className="text-white">Gym</span>
                <span className="text-amber-500">Nex</span>
              </Link>
              <div className="text-white cursor-pointer" onClick={handleToggle}>
                <X size={25} />
              </div>
            </div>

            {/* Mobile Links */}
            <ul className="flex flex-col gap-5 pl-5">
              {NavLinks.map((navlink, index) => (
                <li key={index}>
                  <Link
                    href={navlink.url}
                    onClick={handleToggle}
                    className="flex items-center gap-2 text-white text-sm font-semibold hover:text-amber-500 transition-colors"
                  >
                    {navlink.icon}
                    {navlink.name}
                  </Link>
                </li>
              ))}
            </ul>
          </section>
        </div>
      </nav>
    </header>
  );
};

export default NavBar;
