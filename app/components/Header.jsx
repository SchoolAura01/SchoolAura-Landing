"use client"
import Link from "next/link";
import React, { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import GetStart from "./Landing-Components/sub_Components/GetStart";

const Header = () => {
  const [open, setOpen] = useState(false);
const navLinks=["Hero", "About Us", "Testimonials", "Services", "FAQs", "Contact"];
const menuRef = useRef(null); 
const iconRef = useRef(null);
const iconTl = useRef(null);  
useEffect(() => {
  if (menuRef.current) {
    gsap.set(menuRef.current, {
      height: 0,
      opacity: 0
    });
  }
}, []);
const applyHoverAnimation = ({
  itemSelector,
  linkSelector,
  underlineSelector
}) => {
  const items = document.querySelectorAll(itemSelector);
const cleanups = [];
  items.forEach((item) => {
    const link = item.querySelector(linkSelector);
    const underline = item.querySelector(underlineSelector);

    if (!link || !underline) return;

    const onEnter = () => {
      gsap.to(link, {
        scale: 1.09,
        opacity: 0.9,
        duration: 0.35,
        ease: "power3.out",
        overwrite: "auto"
      });

      gsap.to(underline, {
        opacity: 1,
        duration: 0.35,
        ease: "power3.out"
      });
    };

    const onLeave = () => {
      gsap.to(link, {
        scale: 1,
        opacity: 1,
        duration: 0.35,
        ease: "power3.out"
      });

      gsap.to(underline, {
        opacity: 0,
        duration: 0.35,
        ease: "power3.out"
      });
    };

    item.addEventListener("mouseenter", onEnter);
    item.addEventListener("mouseleave", onLeave);
      cleanups.push(() => {
      item.removeEventListener("mouseenter", onEnter);
      item.removeEventListener("mouseleave", onLeave);
    });
  });
  return () => cleanups.forEach((fn) => fn());
};

useEffect(() => {
  // desktop links 
   const cleanupDesktop = applyHoverAnimation({
    itemSelector: ".nav-item",
    linkSelector: ".nav-link",
    underlineSelector: ".nav-underline"
  });
  // mobile links 
  const cleanupMobile = applyHoverAnimation({
    itemSelector: ".mobile-nav-item",
    linkSelector: ".mobile-nav-link",
    underlineSelector: ".mobile-nav-underline"
  });
  
  // Hamburger to cross button 
  if (!iconRef.current) return;

  const top = iconRef.current.querySelector(".top");
  const middle = iconRef.current.querySelector(".middle");
  const bottom = iconRef.current.querySelector(".bottom");

  iconTl.current = gsap.timeline({ 
    paused: true,
    reversed: true
   });

  iconTl.current
    .to(top, {
      y: 5,
      rotation: 45,
      scaleX: 0.7,  
      transformOrigin: "center",
      duration: 0.35,
      ease: "power3.inOut"
    })
    .to(
      bottom,
      {
        y: -5,
        rotation: -45,
        scaleX: 0.7,  
        transformOrigin: "center",
        duration: 0.35,
        ease: "power3.inOut"
      },
      "<"
    )
    .to(
      middle,
      {
        scaleY: 0,
      transformOrigin: "center",
      duration: 0.25,
        ease: "power2.out"
      },
      "<"
    );
     return () => {
    cleanupDesktop?.();
    cleanupMobile?.();
  };
}, []);

useEffect(() => {
    if (iconTl.current) {
    open ? iconTl.current.play() : iconTl.current.reverse();
  }

  if (!menuRef.current) return;

  const menu = menuRef.current;
  const items = menu.querySelectorAll(".mobile-item");
   let cleanupMobile=null;
  if (open) {
    // OPEN MENU
    gsap.set(menu, { height: "auto",opacity: 1 });
     gsap.set(items, { clearProps: "all" });
    const fullHeight = menu.offsetHeight;

    gsap.fromTo(
      menu,
      { height: 0, opacity: 0 },
      {
        height: fullHeight,
        opacity: 1,
        duration: 0.45,
        ease: "power3.out",
         overwrite: "auto",
        onComplete: () => {
          gsap.set(menu, { height: "auto" });
        }
      }
    );

    gsap.from(items, {
      y: 12,
      opacity: 0,
      stagger: 0.08,
      duration: 0.3,
      delay: 0.12,
      ease: "power2.out",
      overwrite: "auto"
    });
      cleanupMobile = applyHoverAnimation({
    itemSelector: ".mobile-nav-item",
    linkSelector: ".mobile-nav-link",
    underlineSelector: ".mobile-nav-underline"
  });
  } else {
    // CLOSE MENU
    gsap.to(items, {
      y: -12,
      opacity: 0,
      duration: 0.3,
      ease: "power2.in",
      stagger: {
        each: 0.08,
        from: "end"
      },
      overwrite: "auto"
    });

    gsap.to(menu, {
    height: 0,
    opacity: 0,
    duration: 0.45,
    ease: "power3.inOut",
    delay: 0.12
  });
  }
   return () => {
   
    cleanupMobile?.();
  };
}, [open]);


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
          <span className="text-xs sm:text-xl font-medium ">Menu</span>
          <svg
           ref={iconRef}
            className="w-10 h-7 sm:w-17 sm:h-10 sm:scale-120"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.25"
            viewBox="0 0 26 24"
          >
             <path
    className="line top"
    strokeLinecap="round"
    d="M1 7h24"
  />
  <path
    className="line middle"
    strokeLinecap="round"
    d="M1 12h24"
  />
  <path
    className="line bottom"
    strokeLinecap="round"
    d="M1 17h24"
  />
          </svg>
        </button>
 
        {/* DESKTOP MENU */}
        <div className="hidden md:flex">
          <ul className="flex gap-2 md:gap-5 lg:gap-8 2xl:gap-10 font-normal nav-items">
            {navLinks.map(
              (item) => (
                <li key={item} className="nav-item relative cursor-pointer">
                  <Link
                    href="#"
                    className="nav-link inline-block text-heading text-base xl:text-lg"
                  >
                    {item}
                  </Link>
                  <span className="nav-underline absolute left-0 -bottom-1 h-[1px] w-full bg-black opacity-0"></span>
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
        <div
        ref={menuRef}
         className="md:hidden bg-neutral-secondary-soft border-t border-default mobile-menu overflow-hidden"
         >
          <ul className="flex flex-col p-4 space-y-3">
            {navLinks.map(
              (item) => (
                <li key={item} className="mobile-item mobile-nav-item relative cursor-pointer">
                  <Link
                    href="#"
                   
                    className="mobile-nav-link inline-block px-3 py-2 rounded text-heading"
                  >
                    {item}
                  </Link>
                  <span className="mobile-nav-underline absolute left-0 -bottom-1 h-[1px] w-full bg-black opacity-0"></span>
                </li>
              )
            )}
          </ul>
         <GetStart className="md:hidden my-4 ml-4 mobile-item"/>
        </div>
      )} 
     
    </nav>
  );
};

export default Header;
