"use client";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Image from "next/image";
import React, { useEffect, useRef } from "react";
import SplitText from "gsap/SplitText";
import Link from "next/link";
import { useNavbar } from "@/app/providers/navbar-provider";

gsap.registerPlugin(ScrollTrigger);
gsap.registerPlugin(SplitText);

const Hero = () => {

     const { setTheme } = useNavbar();
      useEffect(() => { setTheme("light"); }, []);
 
  return (
    <div
      className="relative w-full h-screen overflow-hidden"
    >
      <div className="absolute inset-0 bg-black/30 z-10 pointer-events-none overlay" />
        <div className="absolute inset-0 w-full h-full overflow-hidden">
          <Image
            src="https://framerusercontent.com/images/gxGBTFS3NqzRZXXJyF039j1AQ.jpg?width=2400&height=1800"
            alt="hero-bg"
            fill
            priority
            quality={100}
            sizes="90vw"
            className="object-cover"
          />
        </div>

      <div className="flex flex-col justify-end w-full h-full px-8 pb-[1rem] relative z-[15]">
        <span className="text-[1rem] text-white">Contact</span>
        <div className="flex items-end justify-between">
          <h1
            className="lg:text-[6.5rem] text-[3rem] !text-white text-start leading-[1.2] uppercase font-[200]"
            id="hero-heading"
          >
            GET IN TOUCH <br /> WITH US
          </h1>
        </div>
      </div>
    </div>
  );
};

export default Hero;
