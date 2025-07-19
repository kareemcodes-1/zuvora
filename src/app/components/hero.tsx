"use client";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Image from "next/image";
import React, { useEffect, useRef } from "react";
import SplitText from "gsap/SplitText";

gsap.registerPlugin(ScrollTrigger);
gsap.registerPlugin(SplitText);

const Hero = () => {

  const container = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const isMobile = window.innerWidth < 768;

    let heroHeading = new SplitText("#hero-heading", { type: "chars, words" });
    gsap.from(heroHeading.chars, {
      yPercent: 100,
      opacity: 0,
      delay: 0.3,
      duration: 1.2,
      stagger: 0.06,
      // ease: "back.out"
    });

    SplitText.create("#hero-description", {
      type: "words lines",
      mask: "lines",
      autoSplit: true,
      onSplit(self) {
        return gsap.from(self.words, {
          duration: 1.2,
          delay: .7,
          opacity: 0,
          y: 100,
          autoAlpha: 0,
          stagger: 0.07,
        });
      },
    });

    gsap.fromTo(".image-ref", {
      scale: 0.8, duration: 1.2, rotateZ: 15,
    }, {scale: 1, duration: 1.2, rotateZ: 0});

    gsap.to(container.current, {
      y: "150vh",
      scale: isMobile ? 0.8 : 0.9,
      rotateZ: isMobile ? -5: 15,
      duration: 2,
      filter: "blur(1rem)",
      ease: "none",
      scrollTrigger: {
        trigger: container.current,
        start: "top top",
        end: "bottom top",
        scrub: 1.5,
        // markers: true, // enable for debug
      },
    });
  }, []);

  return (
<div ref={container} className="relative w-full h-screen overflow-hidden z-[-1]">

      
      <Image
  src="/cover.jpg"
  width={1920}
  height={1080}
  quality={100}
  className="image-ref w-full h-full absolute inset-0 object-cover lg:object-center object-[20%] pointer-events-none z-[-1]"
  alt="image"
/>

  
  <div className="flex flex-col justify-end w-full h-full px-8 pb-20">
    <div className="overflow-hidden">
      <h1
        className="lg:text-[6.5rem] text-[3rem] !text-white text-start leading-[1.2] uppercase font-[200]"
        id="hero-heading"
      >
        More Than <br /> Just Clothes
      </h1>
    </div>

    <p
      className="text-end lg:flex hidden items-end justify-end ml-auto text-white text-[1.2rem] w-[350px] mt-[-5rem] telegraf font-[200] uppercase"
      id="hero-description"
    >
      Worn with meaning, made with purpose.
    </p>
  </div>

</div>

  );
};

export default Hero;
