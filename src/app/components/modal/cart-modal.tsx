"use client";

import { createPortal } from "react-dom";
import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { Minus, Plus, X } from "lucide-react";
import Image from "next/image";
import useCart from "@/store";
import { priceFormatter } from "@/lib/priceFormatter";
import { useSession, signIn, signOut } from "next-auth/react";
import { useRouter } from "next/navigation";

type CartModalProps = {
  openCartModal: boolean;
  setOpenCartModal: React.Dispatch<React.SetStateAction<boolean>>;
};

const CartModal = ({ openCartModal, setOpenCartModal }: CartModalProps) => {
  const { cartItems, removeItem, clearCart, increaseQuantity, decreaseQuantity } = useCart();
  const ref = useRef<HTMLDivElement | null>(null);
  const { data: session } = useSession();
  const router = useRouter();

  const checkout = async () => {
    try {
      if (!session?.user) {
        router.push("/auth/login");
      } else {
        router.push("/checkout/payment");
      }
    } catch (err) {
      console.log(err);
    }
  };

  return createPortal(
    <div className="fixed top-0 right-0 h-screen lg:w-[40%] w-full shadow-lg z-[1000000]">
      <div className="flex h-full bg-[#f8f8f8] z-[100] relative" ref={ref}>
        <div className=" w-full lg:border-l border-black h-full sticky top-0 px-[.5rem] pt-[2rem]">
          <div className="flex items-center">
            <h2 className="text-[1.7rem] text-black z-[100] absolute telegraf left-[2rem] font-[200] tracking-[.1rem] telegraf  ">
              CART
            </h2>
          </div>

          <div
            className="absolute right-[1rem] top-[1rem] cursor-pointer"
            onClick={() => setOpenCartModal(false)}
          >
            <X size={30} strokeWidth={1} />
          </div>

          {cartItems.length > 0 ? (
            <div className="flex items-start flex-col mt-[2rem]">
              {cartItems.map(({ item, quantity }, index) => (
                <div
                  key={index}
                  className="flex items-start justify-between w-full border-b py-[1rem]"
                >
                  <div className="flex items-center justify-between">
                    <Image
                      src={item.images[0]}
                      alt=""
                      width={100}
                      height={100}
                      quality={100}
                    />

                    <div>
                      <h1 className="telegraf font-[200]">{item.name}</h1>
                      {/* <h2 className="telegraf font-[200]">
                        <span className="capitalize">Color: </span> Blue
                      </h2> */}
                      <h2 className="telegraf font-[200]">
                        <span className="capitalize">Size: </span>S
                      </h2>
                      <div className="flex items-center gap-[.5rem] mt-[.5rem]">
                        <Minus
                          className="cursor-pointer w-[1rem]"
                          onClick={() => decreaseQuantity(item._id)}
                        />
                        <p className="text-[1rem] font-[200]">{quantity}</p>
                        <Plus
                          className="cursor-pointer w-[1rem]"
                          onClick={() => increaseQuantity(item._id)}
                        />
                      </div>
                    </div>
                  </div>

                  <div className="flex flex-col gap-[2.5rem]">
                    <button
                      className="telegraf font-[200] cursor-pointer"
                      onClick={() => removeItem(item._id)}
                    >
                      REMOVE
                    </button>

                    <div className="telegraf font-[200]">
                      {priceFormatter(item.price)}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="text-center flex items-center justify-center mt-[10rem] telegraf font-[200] lg:text-[2.5rem] text-[2rem] lowercase">
              CART IS EMPTY...
            </div>
          )}

          <div className="absolute bottom-0 w-full">
            <div className="w-full border-t border-black">
              <div className="py-[.5rem] px-[1rem] flex lg:flex-row flex-col lg:items-center items-start gap-[1rem] w-full">
                {/* <h2 className="text-[1.5rem] font-[200]">GRAND TOTAL</h2>
                <div>
                  <span className="text-[1.3rem] telegraf font-[200]">$0</span>
                </div> */}

                <button
                  onClick={clearCart}
                  className=" bg-white border-[#000] lg:w-[50%] w-full border-[2px] text-[#000] py-[0rem] px-[calc(1.82291667vw)] text-[1.8rem] rounded-[calc(4.16666667vw)]"
                >
                  DELETE ALL
                </button>

                <a
                  onClick={checkout}
                  className=" lg:w-[50%] w-full text-center bg-black cursor-pointer text-white border-[2px] py-[0rem] px-[calc(1.82291667vw)] text-[2rem] rounded-[calc(4.16666667vw)]"
                >
                  CHECKOUT
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>,
    document.body
  );
};

export default CartModal;
