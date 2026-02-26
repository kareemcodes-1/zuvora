"use client";

import Link from "next/link";
import React, { useEffect, useState } from "react";
import useCart from "@/store";
import { useSession, signIn, signOut } from "next-auth/react";
import { FlipLink } from "../../../lib/animations/flip-links";
import { Menu, ShoppingCart, User } from "lucide-react";
import MenuModal from "../modal/menu-modal";

const Navbar = () => {
  const [navScrolled, setNavScrolled] = useState(false);
  const [openMenuModal, setOpenMenuModal] = useState(false);
  const { cartItems } = useCart();
  const { data: session } = useSession();

  useEffect(() => {
    const handleScroll = () => {
      setNavScrolled(window.scrollY > 2);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      {openMenuModal && (
        <MenuModal
          openMenuModal={openMenuModal}
          setOpenMenuModal={setOpenMenuModal}
        />
      )}

      <header className={`${navScrolled ? 'bg-[#f8f8f8] shadow-sm border-gray-200 text-black' : 'bg-transparent text-white'} fixed z-[1000] py-[1.7rem] lg:px-[1.5rem] px-[1.2rem] top-0 right-0 left-0`}>
        <nav className={`flex items-center justify-between w-full`}>
          <div className="flex items-center gap-[8rem]">
            <div
            className={`${
              navScrolled ? "text-black" : "text-white"
            } lg:text-[1.2rem] text-[1.1rem] uppercase telegraf tracking-[.1rem]`}
          >
            <Link
              href="/"
              className="overflow-hidden telegraf font-[500] uppercase"
            >
              <FlipLink>Zuvora</FlipLink>
            </Link>
          </div>



          <div className="flex items-center gap-[2rem]">
             {['Shop', 'About', 'Contact'].map((link, index) => (
              <Link
                key={index}
                href={'/'}
                 className="text-[1rem] font-[200]"
                >
                  {link}
             </Link>
             ))}
          </div>
          </div>

               <div className="flex items-center gap-[1.5rem]">
          <button className=" text-[1rem] uppercase overflow-hidden">
              <ShoppingCart strokeWidth={'1.25px'} />
          </button>
          <button className=" text-[1rem] uppercase overflow-hidden">
              <User strokeWidth={'1.25px'}/>
          </button>
        </div>
        </nav>
      </header>
    </>
  );
};

export default Navbar;


          {/* <Menu
            className={`w-[2rem] h-[2rem] ${
              navScrolled ? "text-black" : "text-white"
            } cursor-pointer`}
          /> */}

          {/* <button onClick={() => setOpenMenuModal(true)} className="group flex items-center justify-center relative">
            <svg viewBox="0 0 200 100" className="lg:w-[6.8rem] w-[6rem]">
              <ellipse
                className={`transition-all duration-300 ${
                  navScrolled
                    ? "stroke-black group-hover:stroke-[2.5px]"
                    : "stroke-white group-hover:stroke-[2.5px]"
                } stroke-[1px]`}
                cx="100"
                cy="50"
                rx="98"
                ry="48"
                style={{ fill: "transparent" }}
              ></ellipse>
            </svg>
            <h1
             
              className={`cursor-pointer lg:text-[1.3rem] text-[1.2rem] z-[100] font-[200] tracking-[.1rem] telegraf flex items-center justify-center absolute transition-colors duration-300 ${
                navScrolled ? "text-black" : "text-white"
              }`}
            >
              MENU
            </h1>
          </button> */}