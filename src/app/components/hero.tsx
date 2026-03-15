"use client";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useScroll, useTransform, motion } from "framer-motion";
import Image from "next/image";
import React, { useEffect, useRef } from "react";
import SplitText from "gsap/SplitText";
import Link from "next/link";
import { useNavbar } from "../providers/navbar-provider";

gsap.registerPlugin(ScrollTrigger);
gsap.registerPlugin(SplitText);



const Hero = () => {
  const container = useRef<HTMLDivElement | null>(null);

    const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start start", "end start"],
  });

  const { setTheme, theme } = useNavbar();
  useEffect(() => { setTheme("light"); }, []);


  const y = useTransform(scrollYProgress, [0, 1], ["0vh", "100vh"]);

  useEffect(() => {
    const isMobile = window.innerWidth < 768;

    let heroHeading = new SplitText("#hero-heading", { type: "chars, words" });
    gsap.from(heroHeading.chars, {
      yPercent: 100,
      opacity: 0,
      delay: 0.3,
      duration: 1.2,
      stagger: 0.06,
      ease: "power3.out",
    });

    // gsap.fromTo(
    //   ".image-ref",
    //   {
    //     duration: 1.4,
    //     rotateZ: 15,
    //   },
    //   { duration: 1.4, rotateZ: 0 }
    // );

    // gsap.to(
    //   ".image-ref",
    //   { duration: 1.4, rotateZ: 1 }
    // );

    gsap.to(container.current, {
      duration: 2,
      filter: "blur(1rem)",
      ease: "none",
      scrollTrigger: {
        trigger: container.current,
        start: "top top",
        end: "bottom-=30vh top",
        scrub: 2,

       onUpdate: (self) => {
  const rotation = self.progress * 5; 
  const scale = 1 - self.progress * 0.1; // scales from 1 → 0.8

  gsap.set(container.current, { 
    rotateZ: rotation,
    scale: scale
  });
},
        // markers: true, // enable for debug
        onLeave: () => {
          gsap.set(container.current, { autoAlpha: 0 }); // hides after scrolling down
        },
        onEnterBack: () => {
          gsap.set(container.current, { autoAlpha: 1 }); // show again when scrolling back up
        },
      },
    });


  }, []);

  return (
    <div
      ref={container}
      className=" w-full h-screen sticky top-0"
    >
      <motion.section  style={{ y }} className="relative h-full w-full">
        <div className="absolute inset-0 bg-black/30 z-10 pointer-events-none overlay" />
      <div className="absolute inset-0 w-full h-full overflow-hidden">
        <Image
          src="/hero.webp"
          alt="hero-bg"
          fill
          priority
          quality={100}
          sizes="90vw"
          className="object-cover object-top"
        />
      </div>

      <div className="flex flex-col justify-end w-full h-full px-8 pb-[1rem] relative z-[15]">
        <div className="flex items-end justify-between">
          <h1
            className="lg:text-[6.5rem] text-[3rem] !text-white text-start leading-[1.2] uppercase font-[200]"
            id="hero-heading"
          >
            More Than <br /> Just Clothes
          </h1>

          <Link href={'/shop'} className="next-btn btn-base btn-light !mb-[2rem] cursor-pointer">
            Shop now
          </Link>
        </div>
      </div>
      </motion.section>
    </div>
  );
};

export default Hero;
