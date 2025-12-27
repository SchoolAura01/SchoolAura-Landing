"use client"
import Link from "next/link";
import React, { useState } from "react";

import GetStart from "./Landing-Components/sub_Components/GetStart";

const Header = () => {
  const [open, setOpen] = useState(false);
const navLinks=["Hero", "About Us", "Testimonials", "Services", "FAQs", "Contact"];
  return (
    <nav className="fixed w-full z-100 top-0 bg-white">
      <div className="w-full flex items-center justify-between md:justify-evenly mx-auto p-2">
        {/* LOGO */}
          <Link href="/" className="flex items-center">
            <img
              src="/images/school_logo.svg"
              className="h-7 sm:h-9 md:h-9 2xl:h-12 w-auto"
              alt="Logo"
            />
          
          </Link>

        {/* HAMBURGER */}
        <button
          onClick={() => setOpen(!open)}
          className="md:hidden inline-flex items-center justify-center rounded-full hover:bg-neutral-secondary-soft  border border-black px-2"
        >
          <span className="text-sm font-medium">Menu</span>
          <svg
            className="w-10 h-6"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            viewBox="0 0 28 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M1 6h26 M1 12h26 M1 18h26"
            />
          </svg>
        </button>

        {/* DESKTOP MENU */}
        <div className="hidden md:flex">
          <ul className="flex gap-2 md:gap-5 lg:gap-8 2xl:gap-10 font-normal">
            {navLinks.map(
              (item) => (
                <li key={item}>
                  <Link
                    href="#"
                    className="text-heading text-base hover:text-fg-brand transition  xl:text-lg"
                  >
                    {item}
                  </Link>
                </li>
              )
            )}
          </ul>
        </div>
        <div className="hidden md:flex">
          <GetStart/>
        </div>
         
       
      </div>

      {/* MOBILE MENU */}
      {open && (
        <div className="md:hidden bg-neutral-secondary-soft border-t border-default">
          <ul className="flex flex-col p-4 space-y-3">
            {navLinks.map(
              (item) => (
                <li key={item}>
                  <a
                    href="#"
                    onClick={() => setOpen(false)}
                    className="block px-3 py-2 rounded text-heading hover:bg-neutral-tertiary"
                  >
                    {item}
                  </a>
                </li>
              )
            )}
          </ul>
         <GetStart className="md:hidden mt-2 ml-4"/>
        </div>
      )}
     
    </nav>
  );
};

export default Header;
