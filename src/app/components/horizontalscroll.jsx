"use client";
import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import Link from "next/link";
import {Collection} from "../../../types/index";
import Image from "next/image";

const HorizontalScroll = ({collections}) => {
 useEffect(() => {
  const races = document.querySelector(".races");
  const racesWrapper = document.querySelector(".racesWrapper");

  function getScrollAmount() {
    const racesWidth = races.scrollWidth;
    const wrapperWidth = racesWrapper.offsetWidth;
    // Scroll distance: total width - visible width
    return -(racesWidth - wrapperWidth);
  }

  const tween = gsap.to(races, {
    x: getScrollAmount,
    ease: "none",
  });

  ScrollTrigger.create({
    trigger: ".racesWrapper",
    start: "top top",
    end: () => `+=${Math.abs(getScrollAmount())}`,
    pin: true,
    animation: tween,
    scrub: 1,
    invalidateOnRefresh: true,
    // markers: true,
  });
}, []);

  

  return (
    <section className="racesWrapper lg:px-[3rem] px-[1.5rem] pt-[1.5rem] relative py-[2rem] my-[3rem] overflow-hidden">
      <div className="races flex whitespace-nowrap text-white flex-nowrap">
        <div className="flex gap-[1rem]">
          {collections.length > 0 && (
            collections.map((collection) => (
            <div className="w-[50vw] relative" key={collection._id}>
            <div className="absolute bottom-[1rem] px-[1rem] w-full">
              <div className="flex items-center justify-between w-full">
                <a
                  className=" bg-white border-[#000] border-[2px] text-[#000] py-[0rem] px-[calc(1.82291667vw)] text-[2.5rem] rounded-[calc(4.16666667vw)]"
                >
                  {collection.name}
                </a>
                <Link className="flex items-center justify-center group" href={`collections/${collection.name.toLowerCase()}`}>
                  <svg viewBox="0 0 200 100" className="relative w-[10rem]">
                    <ellipse
                      cx="100"
                      cy="50"
                      rx="98"
                      ry="48"
                      style={{
                        fill: "transparent",
                      }}
                      className="stroke-[#fff] stroke-[1px] group-hover:stroke-[2.5px]"
                    ></ellipse>
                  </svg>
                  <div

                    className=" text-[2rem] text-white z-[100]  tracking-[.1rem] telegraf top-[1rem] flex items-center justify-center absolute"
                  >
                    VIEW
                  </div>
                </Link>
              </div>
            </div>
            <Image
              src={collection.images[0]}
              className="h-[35rem] min-w-[50vw] object-cover"
              alt=""
              width={500}
              height={500}
              quality={100}
            />
          </div>
          ))
          )}

        </div>
      </div>
    </section>
  );
};

export default HorizontalScroll;

export const dynamic = "force-dynamic";
export const fetchCache = "force-no-store";
