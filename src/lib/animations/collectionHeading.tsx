"use client";
import React from "react";
import gsap from "gsap";
import { useEffect } from "react";
// import SplitText from "gsap/SplitText";
import SplitText from "../split-text";

const CollectionHeading = () => {

  return (
    <div className="overflow-hidden">
      <SplitText
        text="Explore our"
        className="lg:text-[4.5rem] text-[2.5rem] uppercase leading-[1.3] font-[200] overflow-hidden telegraf text-start"
        delay={100}
        duration={1}
        ease="power3.out"
        splitType="words"
        from={{ y: 100 }}
        to={{ y: 0 }}
        threshold={0.1}
        textAlign="start"
        rootMargin="-100px"
      />

      <SplitText
        text="latest collections"
        className="lg:text-[4.5rem] text-[2.5rem] uppercase leading-[1.3] font-[200] overflow-hidden telegraf text-start"
        delay={100}
        duration={1}
        ease="power3.out"
        splitType="words"
        from={{ y: 100 }}
        to={{ y: 0 }}
        threshold={0.1}
        textAlign="start"
        rootMargin="-100px"
      />
    </div>
  );
};

export default CollectionHeading;
