"use client";

import Link from "next/link";
import React, { useEffect, useState } from "react";
import CartModal from "../modal/cart-modal";
import useCart from "@/store";
import { useSession, signIn, signOut } from "next-auth/react";
import SplitText from "@/lib/split-text";
import { FlipLink } from "../../../lib/animations/flip-links";
import { Menu } from "lucide-react";
import MenuModal from "../modal/menu-modal";

const Navbar = () => {
  const [openCartModal, setOpenCartModal] = useState(false);
  const [openMenuModal, setOpenMenuModal] = useState(false);
  const { cartItems } = useCart();
  const { data: session } = useSession();

  return (
    <>
      {openCartModal && (
        <CartModal
          openCartModal={openCartModal}
          setOpenCartModal={setOpenCartModal}
        />
      )}


      {openMenuModal && (
        <MenuModal
          openMenuModal={openMenuModal}
          setOpenMenuModal={setOpenMenuModal}
        />
      )}

      <header className="fixed z-[1000] py-[1.4rem] lg:px-[1.5rem] px-[1.2rem] top-0 right-0 left-0">
        <nav className={`flex items-center justify-between w-full`}>
          <div
            className={`
            text-black lg:text-[1.2rem] text-[1rem] font-[100] uppercase telegraf tracking-[.1rem]`}
          >
            <Link
              href="/"
              className="overflow-hidden telegraf font-[200] uppercase"
            >
              <FlipLink>Zuvora™</FlipLink>
            </Link>
          </div>

          {/* <Menu
            className={`w-[2rem] h-[2rem] ${
              navScrolled ? "text-black" : "text-white"
            } cursor-pointer`}
          /> */}

          <button onClick={() => setOpenMenuModal(true)} className="group cursor-pointer flex items-center justify-center relative">
            <svg viewBox="0 0 200 100" className="lg:w-[6.8rem] w-[6rem]">
              <ellipse
                className={`transition-all duration-300 stroke-black group-hover:stroke-[2.5px]
                stroke-[1px]`}
                cx="100"
                cy="50"
                rx="98"
                ry="48"
                style={{ fill: "transparent" }}
              ></ellipse>
            </svg>
            <h1
             
              className={`lg:text-[1.3rem] text-[1.2rem] z-[100] font-[200] tracking-[.1rem] telegraf flex items-center justify-center absolute transition-colors duration-300 text-black
              `}
            >
              MENU
            </h1>
          </button>

          {/* <div
            className={`lg:flex hidden items-center gap-[2rem] uppercase ${
              navScrolled ? "text-black" : "text-white"
            }`}
          >
            <div
              className="cursor-pointer telegraf font-[200]"
              onClick={() => setOpenCartModal(true)}
            >
              <h1 className="telegraf font-[200] uppercase">Cart ({cartItems.length})</h1>
            </div>

             <div>
              <Link href="/contact" className="overflow-hidden">
                <h1 className="telegraf font-[200] uppercase"><FlipLink>Contact</FlipLink></h1>
              </Link>
            </div>


            {session ? (
              <Link href={'/profile'}
                className="cursor-pointer telegraf font-[200]"
              >
                <FlipLink>PROFILE</FlipLink>
              </Link>
            ) : (
              <Link
                href="/auth/login"
                className="cursor-pointer telegraf font-[200]"
              >
                <FlipLink>SIGN IN</FlipLink>
              </Link>
            )}
          </div> */}
        </nav>
      </header>
    </>
  );
};

export default Navbar;
