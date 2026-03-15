"use client";

import Link from "next/link";
import React, { useEffect, useState } from "react";
import useCart from "@/store";
import { useSession, signOut } from "next-auth/react";
import { FlipLink } from "../../../lib/animations/flip-links";
import { Search, ShoppingCart, User } from "lucide-react";
import MenuModal from "../modal/menu-modal";
import CartModal from "../modal/cart-modal";
import { useNavbar } from "@/app/providers/navbar-provider";
import SearchModal from "../modal/search-modal";
import { Collection } from "../../../../types";
import { ChevronDown } from "lucide-react";

const Navbar = ({ collections }: { collections: Collection[] }) => {
  const [navScrolled, setNavScrolled] = useState(false);
  const [openMenuModal, setOpenMenuModal] = useState(false);
  const [openCartModal, setOpenCartModal] = useState(false);
  const [openSearchModal, setOpenSearchModal] = useState(false);

  const { cartItems } = useCart();
  const { data: session, status } = useSession();
  const { theme } = useNavbar();
  

  const navLinks = [
  { label: "Mens", href: `/collections/${collections.find(c => c.name.toLowerCase() === "mens")?.name.toLowerCase() ?? "mens"}` },
  { label: "Womens", href: `/collections/${collections.find(c => c.name.toLowerCase() === "womens")?.name.toLowerCase() ?? "womens"}` },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
];

  useEffect(() => {
  const handleScroll = () => {
    if(window.scrollY > 150){
       console.log("scrollY:", window.scrollY, "navScrolled:");
      setNavScrolled(true);
    }else{
      setNavScrolled(false);
    }
  };

  // ADD this — fire once on mount in case page is already scrolled
  handleScroll();

  window.addEventListener("scroll", handleScroll);
  return () => window.removeEventListener("scroll", handleScroll);
}, []);

  const handleLogout = async () => {
    await signOut({ redirect: true, callbackUrl: "/" });
  };

  return (
    <>
      {openMenuModal && (
        <MenuModal openMenuModal={openMenuModal} setOpenMenuModal={setOpenMenuModal} />
      )}
      {openCartModal && (
        <CartModal openCartModal={openCartModal} setOpenCartModal={setOpenCartModal} />
      )}
      {openSearchModal && (
        <SearchModal openSearchModal={openSearchModal} setOpenSearchModal={setOpenSearchModal} />
      )}

      <header
        className={`${
          navScrolled
            ? "bg-[#f8f8f8] border border-gray-300 text-black"
            : theme === "light"
            ? "bg-transparent text-white"
            : "bg-[#f8f8f8] text-black"
        } fixed z-[105] py-[1.7rem] lg:px-[1.5rem] px-[1.2rem] top-0 right-0 left-0`}
      >
        <nav className="flex items-center justify-between w-full">
          <div className="flex items-center gap-[8rem]">
            <div
              className={`${
                navScrolled ? "text-black" : theme === "light" ? "text-white" : "text-black"
              } lg:text-[1.2rem] text-[1.1rem] uppercase telegraf tracking-[.1rem]`}
            >
              <Link href="/" className="overflow-hidden telegraf font-[500] uppercase">
                <FlipLink>Zuvora</FlipLink>
              </Link>
            </div>

            <div className="flex items-center gap-[2rem]">

              {navLinks.map((link, index) => (
                <Link key={index} href={link.href} className="text-[1rem] font-[200]">
                  {link.label}
                </Link>
              ))}
            </div>
          </div>

          <div className="flex items-center gap-[1.5rem]">
            <button className="text-[1rem] uppercase overflow-hidden" onClick={() => setOpenSearchModal(true)}>
              <Search strokeWidth="1.25px" />
            </button>
            <button className="text-[1rem] uppercase overflow-hidden" onClick={() => setOpenCartModal(true)}>
              <ShoppingCart strokeWidth={"1.25px"} />
            </button>

            {status === "authenticated" ? (
              <div className="flex items-center gap-[1rem]">
                <Link href="/profile" className="text-[1rem] uppercase overflow-hidden flex items-center gap-2">
                  <User strokeWidth={1.25} />
                </Link>
                <button className="text-[1rem] uppercase overflow-hidden" onClick={handleLogout}>
                  LOGOUT
                </button>
              </div>
            ) : (
              <Link href="/auth/login" className="text-[1rem] uppercase overflow-hidden">
                <User strokeWidth={"1.25px"} />
              </Link>
            )}
          </div>
        </nav>
      </header>
    </>
  );
};

export default Navbar;