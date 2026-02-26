"use client";

import { createPortal } from "react-dom";
import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { Minus, Plus, X } from "lucide-react";
import Image from "next/image";
import useCart from "@/store";
import { priceFormatter } from "@/lib/priceFormatter";
import { useSession } from "next-auth/react";
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

  const [shouldRender, setShouldRender] = useState(openCartModal);

useEffect(() => {
  if (openCartModal) {
    setShouldRender(true);
  }
}, [openCartModal]);
 

  useEffect(() => {
  if (!ref.current) return;

  if (openCartModal) {
    gsap.fromTo(
      ref.current,
      { x: "100%" },
      { x: 0, duration: 0.5, ease: "power3.out" }
    );
  } else {
    gsap.to(ref.current, {
      x: "100%",
      duration: 0.4,
      ease: "power3.in",
      onComplete: () => setShouldRender(false),
    });
  }
}, [openCartModal]);


  const checkout = async () => {
    try {
      if (!session?.user) {
        router.push("/auth/login");
        return;
      }

      const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/stripe/checkout`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ cartItems }),
      });

      const data = await res.json();
      if (data.url) {
        window.location.href = data.url;
      } else {
        console.error("Checkout failed", data);
      }
    } catch (err) {
      console.error(err);
    }
  };

  if (!shouldRender) return null;


  return createPortal(
    <div className="fixed top-0 right-0 h-screen lg:w-[40%] w-full z-[1000000] pointer-events-auto">
      <div
        ref={ref}
        className="flex h-full bg-white relative translate-x-full  shadow-lg"
      >
        <div className="w-full lg:border-l border-black h-full px-2 pt-8">
          <h2 className="text-[1.7rem] text-black absolute left-8 font-light tracking-wide">
            CART
          </h2>

          <div
            className="absolute right-4 top-4 cursor-pointer"
            onClick={() => setOpenCartModal(false)}
          >
            <X size={30} strokeWidth={1} />
          </div>

          {cartItems.length > 0 ? (
            <div className="flex flex-col mt-8">
              {cartItems.map(({ item, quantity }, index) => (
                <div
                  key={index}
                  className="flex justify-between items-start w-full border-b py-4"
                >
                  <div className="flex items-center gap-4">
                    <Image src={item.images[0]} alt="" width={100} height={100} />
                    <div>
                      <h1 className="font-light">{item.name}</h1>
                      <p className="font-light">
                        <span className="capitalize">Size:</span> S
                      </p>
                      <div className="flex items-center gap-2 mt-2">
                        <Minus onClick={() => decreaseQuantity(item._id)} className="cursor-pointer" />
                        <span>{quantity}</span>
                        <Plus onClick={() => increaseQuantity(item._id)} className="cursor-pointer" />
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-col items-end gap-8">
                    <button
                      onClick={() => removeItem(item._id)}
                      className="font-light"
                    >
                      REMOVE
                    </button>
                    <span className="font-light">
                      {priceFormatter(item.price)}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="text-center mt-60 font-light text-3xl">
              CART IS EMPTY...
            </div>
          )}

          <div className="absolute bottom-0 w-full p-4 flex gap-4">
            <button
              onClick={clearCart}
              className="w-1/2 bg-white text-[1.5rem] border-2 border-black text-black py-2 rounded-full"
            >
              DELETE ALL
            </button>

            <button
              onClick={checkout}
              className="w-1/2 bg-black text-[1.5rem] text-white py-2 rounded-full"
            >
              CHECKOUT
            </button>
          </div>
        </div>
      </div>
    </div>,
    document.body
  );
};

export default CartModal;
