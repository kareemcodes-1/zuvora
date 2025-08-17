"use client";
import React from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import Image from "next/image";
import { useEffect, useRef } from "react";
import SplitText from "gsap/SplitText";
import { default as SplitWords } from "@/lib/split-text";
import TextOpacity from "../../lib/animations/text-opacity";

gsap.registerPlugin(ScrollTrigger);
gsap.registerPlugin(SplitText);

const About = () => {
  const ref = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    // gsap.fromTo(
    //   ref.current,
    //   { y: "100vh" },
    //   {
    //     y: "0vh",
    //     paused: true,
    //     pin: true,
    //     // pinSpacing: true,
    //     // paused: true,
    //     scrollTrigger: {
    //       trigger: ref.current,
    //       start: "top 100%",
    //       end: "bottom 20%",
    //       scrub: 1,
    //     },
    //   }
    // );

     const split1 = new SplitText("#about-desc1", { type: "words, lines" });

  gsap.from(split1.words, {
    y: 100,
    autoAlpha: 0,
    duration: 1,
    stagger: 0.05,
    scrollTrigger: {
      trigger: "#about-desc1",
      start: "top 90%",
      end: "bottom 20%",
      toggleActions: "play none none reverse",
      // markers: true,
    },
  });

  const split2 = new SplitText("#about-desc2", { type: "lines" });

  gsap.from(split2.lines, {
    y: 100,
    autoAlpha: 0,
    duration: 0.8,
    stagger: 0.05,
    scrollTrigger: {
      trigger: "#about-desc2",
      start: "top 90%",
      end: "bottom 20%",
      toggleActions: "play none none reverse",
      // markers: true,
    },
  });

  }, []);

  return (
    <section
      // style={{ padding: "2rem" }}
      ref={ref}
      className="bg-[#000000] py-[3rem] mb-[3rem] lg:px-[2rem] px-[1rem] z-[100]"
    >
      <div>
        <span
          className="text-[1rem] mb-[1rem] text-white text-start telegraf font-[200]"
          id="about-desc1"
        >

        </span>

         <SplitWords
                text="We don’t just sell clothes. we create art."
                className=" text-[1rem] mb-[1rem] text-tran text-white text-start telegraf font-[200] overflow-hidden"
                delay={50}
                duration={1}
                ease="power3.out"
                splitType="words"
                from={{ y: 100 }}
                to={{ y: 0 }}
                threshold={0.1}
                textAlign="start"
                rootMargin="0px"
              />

        <TextOpacity />

        {/* <p className="flex ml-auto items-end justify-end text-white w-[500px] mt-[6rem] uppercase telegraf font-[200] overflow-hidden" id="about-desc2">
      
        </p> */}
        <div className="flex ml-auto items-end justify-end">
          <SplitWords
                text="We design and offer fashion pieces that are as stylish as they are functional, while fostering a conversation around self-expression, body confidence, and empowerment."
                className=" text-white lg:w-[500px] mt-[6rem] uppercase telegraf font-[200] overflow-hidden"
                delay={100}
                duration={1}
                ease="power3.out"
                splitType="lines"
                from={{ y: 100 }}
                to={{ y: 0 }}
                threshold={0.1}
                textAlign="start"
                rootMargin="-100px"
              />
        </div>
      </div>
    </section>
  );
};

export default About;
