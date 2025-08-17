"use client";
import React, { useEffect, useRef } from "react";
import VirtualSwiper from "../swiper/virtual-swiper";
import { getProducts } from "../../actions/getProducts";
import { Product } from "../../../../types";
import gsap from "gsap";
import SplitText from "gsap/SplitText";
import Link from "next/link";
import { default as SplitWords } from "@/lib/split-text";

gsap.registerPlugin(SplitText);

const Products = () => {
  const headingRef = useRef<HTMLHeadingElement | null>(null);

  useEffect(() => {
    if (!headingRef.current) return;

    // Split the heading text into characters
    const productHeading = new SplitText(headingRef.current, { type: "chars" });

    gsap.from(productHeading.chars, {
      yPercent: 100,
      duration: 1.2,
      stagger: 0.06,
      ease: "power3.out",
      scrollTrigger: {
        trigger: headingRef.current,
        start: "top 100%",
        end: "bottom 20%",
        toggleActions: "play none none reverse",
      },
    });
  }, []);

  return (
    <section className="px-[2rem] lg:pt-[3rem] py-[2rem]">

      <SplitWords
                      text="Featured Products"
                      className="lg:text-[4.5rem] text-[2.5rem] telegraf font-[200] overflow-hidden"
                      delay={300}
                      duration={1}
                      ease="power3.out"
                      splitType="words"
                      from={{ y: 100 }}
                      to={{ y: 0 }}
                      threshold={0.1}
                      textAlign="start"
                      rootMargin="0px"
                    />

      <VirtualSwiper />
    </section>
  );
};

export default Products;
