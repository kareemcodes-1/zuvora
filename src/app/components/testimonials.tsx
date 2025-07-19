"use client";
import React, { useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Image from "next/image";
import SplitText from "@/lib/split-text";

gsap.registerPlugin(ScrollTrigger);

const Testimonials = () => {
  useEffect(() => {
    gsap.fromTo(
      ".image-reveal",
      { opacity: 0 },
      {
        // height: "15rem", // final height
        opacity: 1,
        duration: 1.5,
        ease: "power3.out",
        stagger: 0.3,
        scrollTrigger: {
          trigger: ".image-reveal",
          start: "top 80%",
          toggleActions: "play none none reverse",
        },
      }
    );

     gsap.fromTo(
      ".image-reveal-2",
      { height: 0, opacity: 0 },
      {
        height: "10rem", // final height
        opacity: 1,
        duration: 1.5,
        ease: "power3.out",
        stagger: 0.3,
        scrollTrigger: {
          trigger: ".image-reveal-2",
          start: "top 80%",
          toggleActions: "play none none reverse",
        },
      }
    );
  }, []);

  return (
    <section className="bg-black w-full h-[102vh] z-[100] flex items-center justify-center relative overflow-visible">
      <div className="relative w-full h-full max-w-[120rem] flex items-center justify-center">
        <div className="image-reveal absolute left-0 top-[2rem] z-[-1] lg:w-[20rem] w-[10rem] lg:h-[15rem] h-[10rem] overflow-hidden">
          <Image
            src={"/unisex.jpeg"}
            alt=""
            fill
            quality={100}
            className="object-top-center object-cover"
          />
        </div>
        <div className="image-reveal absolute right-0 lg:top-[2rem] bottom-0 lg:w-[20rem] w-[12rem] lg:h-[15rem] h-[10rem] overflow-hidden">
          <Image
            src={"/3.jpg"}
            alt=""
            fill
            quality={100}
            className="object-cover object-top-center"
          />
        </div>
          <div className="text-center my-0 py-0 uppercase font-[200] telegraf">
           <SplitText
        text="Crafted for elegance"
        className="lg:text-[6rem] text-[3rem] text-white relative z-[100]"
        delay={100}
        duration={1}
        ease="power3.out"
        splitType="words"
        from={{ y: 100 }}
        to={{ y: 0 }}
        threshold={0.1}
        textAlign="center"
        rootMargin="-100px"
      />
      <SplitText
        text="made with intention"
        className="lg:text-[6rem] text-[3rem] text-white relative z-[100]"
        delay={100}
        duration={1}
        ease="power3.out"
        splitType="words"
        from={{ y: 100 }}
        to={{ y: 0 }}
        threshold={0.1}
        textAlign="center"
        rootMargin="-100px"
      />
        </div>
        <div className="image-reveal lg:block hidden absolute left-[20rem] top-[20rem] w-[20rem] h-[15rem] overflow-hidden">
          <Image
            src={"/8.jpg"}
            alt=""
            fill
            quality={100}
            className="object-cover"
          />
        </div>
        <div className="image-reveal-2 lg:block hidden absolute left-[65rem] top-[30rem] w-[10rem] h-[10rem] overflow-hidden">
          <Image
            src={"/23.jpg"}
            alt=""
            fill
            quality={100}
            className="object-cover"
          />
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
