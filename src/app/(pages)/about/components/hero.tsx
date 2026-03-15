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

  return (
    <div
      className="relative w-full h-screen"
    >
      <div className="absolute inset-0 bg-black/30 z-10 pointer-events-none overlay" />
      <div className="absolute inset-0 w-full h-full overflow-hidden">
        <Image
          src="https://framerusercontent.com/images/ZOcmQpeHuLkFU8U8hajo3Van96s.jpg?width=1920&height=2644"
          alt="hero-bg"
          fill
          priority
          quality={100}
          sizes="90vw"
          className="object-cover"
        />
      </div>

      <div className="flex flex-col justify-end w-full h-full px-8 pb-[1rem] relative z-[15]">
        <span className="text-[1rem] text-white/85">About</span>
        <div className="flex items-end justify-between">
          <h1
            className="lg:text-[6.5rem] text-[3rem] !text-white text-start leading-[1.2] uppercase font-[200]"
            id="hero-heading"
          >
            GET TO KNOW <br /> ZUVORA
          </h1>
        </div>
      </div>
    </div>
  );
};

export default Hero;
