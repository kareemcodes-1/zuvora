import { FlipLink } from "@/lib/animations/flip-links";
import Link from "next/link";
import React, { FC, useState } from "react";
import CartModal from "./cart-modal";
import useCart from "@/store";
import { useSession } from "next-auth/react";

type MenuModalProps = {
  openMenuModal: boolean;
  setOpenMenuModal: React.Dispatch<React.SetStateAction<boolean>>;
};

const MenuModal: React.FC<MenuModalProps> = ({
  openMenuModal,
  setOpenMenuModal,
}) => {
  const [openCartModal, setOpenCartModal] = useState(false);
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

      <div className="bg-white z-[10000] fixed top-0 right-0 left-0 h-screen">
        {/* Flex container to push button to the right */}
        <div className="flex justify-end p-5">
          <button
            onClick={() => setOpenMenuModal(false)}
            className="group relative flex items-center justify-center cursor-pointer"
          >
            <div className="relative">
              <svg viewBox="0 0 200 100" className="lg:w-[6.8rem] w-[6rem]">
                <ellipse
                  className="transition-all duration-300 stroke-black group-hover:stroke-[2.5px] stroke-[1px]"
                  cx="100"
                  cy="50"
                  rx="98"
                  ry="48"
                  style={{ fill: "transparent" }}
                />
              </svg>
              <h1 className="lg:text-[1.3rem] text-[1.2rem] z-[100] font-[200] tracking-[.1rem] telegraf absolute inset-0 flex items-center justify-center transition-colors duration-300 text-black">
                CLOSE
              </h1>
            </div>
          </button>
        </div>

        {/* Navigation content */}
        <div className="flex flex-col gap-[1rem] text-black">
          <div className="flex items-start flex-col p-[1rem] lg:mt-[4rem] mt-[10rem] gap-[1rem]">
            <ul className="flex flex-col gap-[2rem] font-medium tracking-[.2rem]">
              <Link href="/" className="cursor-pointer telegraf font-[200] lg:text-[5rem] text-[3rem]">
                <FlipLink>HOME</FlipLink>
              </Link>


              <div
                className="cursor-pointer telegraf font-[200]"
                 onClick={() => {
    setOpenCartModal(true);
  }}
              >
                <h1 className="cursor-pointer telegraf font-[200] lg:text-[5rem] text-[3rem]">
                  Cart ({cartItems.length})
                </h1>
              </div>


              <Link href="/products" className="cursor-pointer telegraf font-[200] lg:text-[5rem] text-[3rem]">
                <FlipLink>CONTACT</FlipLink>
              </Link>


              {session ? (
              <Link href={'/profile'}
                className="cursor-pointer telegraf font-[200] lg:text-[5rem] text-[3rem]"
              >
                <FlipLink>PROFILE</FlipLink>
              </Link>
            ) : (
              <Link
                href="/auth/login"
                className="cursor-pointer telegraf font-[200] lg:text-[5rem] text-[3rem]"
              >
                <FlipLink>SIGN IN</FlipLink>
              </Link>
            )}
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default MenuModal;
