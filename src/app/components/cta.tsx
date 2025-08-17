"use client";
import React, { useEffect } from "react";
import CenteredSwiper from "./swiper/centered-swiper";
import Image from "next/image";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Link from "next/link";

const CTA = () => {

   useEffect(() => {
  const containers = gsap.utils.toArray<HTMLDivElement>(".image-container");

  containers.forEach((container) => {
    const image = container.querySelector("img");

    if (!image) return; // safety check

    gsap.to(image, {
      y: () => image.offsetHeight - container.offsetHeight,
      ease: "none",
      scrollTrigger: {
        trigger: container,
        scrub: true,
        pin: false,
        invalidateOnRefresh: true,
      },
    });
  });
}, []);


  return (
    <section className="mt-[5rem] mx-[1rem]">
      <div className="lg:grid flex flex-col grid-cols-2 lg:gap-[1rem] gap-[2rem]">
          
          <div className="relative overflow-hidden w-full lg:h-[30rem] h-[25rem] image-container">
            <Image
              src="/men.png"
              alt="Men"
              quality={100}
              width={500}
              height={500}
              className="absolute bottom-0 left-0 w-full h-[170%] object-cover object-center"
            />
                      <div className="absolute bottom-[3rem] px-[1rem] w-full">
            <div className="flex items-center justify-between w-full">
              <a
                href=""
                className=" bg-white border-[#000] border-[2px] text-[#000] py-[0rem] px-[calc(1.82291667vw)] lg:text-[2.5rem] text-[2rem] rounded-[calc(4.16666667vw)]"
              >
                SUMMER
              </a>
              {/* <div className="group flex items-center justify-center">
                <svg viewBox="0 0 200 100" className="relative w-[10rem]">
                  <ellipse
                    className="stroke-[#fff] stroke-[1px] group-hover:stroke-[2.5px] transition-[.3] duration-300"
                    cx="100"
                    cy="50"
                    rx="98"
                    ry="48"
                    style={{
                      fill: "transparent",
                    }}
                  ></ellipse>
                </svg>
                <Link href={'/collections/all'} className="text-[2rem] text-white z-[100] font-[200]  tracking-[.1rem] telegraf top-[1rem] flex items-center justify-center absolute">
                  VIEW
                </Link>
              </div> */}
            </div>
          </div>
          </div>

        <div className="lg:relative hidden m-auto">
          <CenteredSwiper />
        </div>
      </div>

      <div className="lg:grid flex flex-col grid-cols-2 lg:gap-0 gap-[3rem] lg:pt-0 pt-[3rem]">
        <div className="lg:m-auto lg:px-[calc(8.33333333vw)]">
          <h1 className="lg:text-[calc(3.2vw)] text-[2rem] font-[200]">
            Zuvora is about owning your confidence no matter what anyone else
            thinks{" "}
          </h1>
        </div>

        <div className="relative overflow-hidden lg:w-[50vw] w-full lg:h-[30rem] h-[25rem] image-container">
          <Image
            src="/men1.png"
            alt=""
            quality={100}
            width={500}
            height={500}
            className="absolute bottom-0 left-0 w-full h-[170%] object-cover object-center"
          />
          <div className="absolute bottom-[3rem] px-[1rem] w-full">
            <div className="flex items-center justify-between w-full">
              <a
                href=""
                className=" bg-white border-[#000] border-[2px] text-[#000] py-[0rem] px-[calc(1.82291667vw)] lg:text-[2.5rem] text-[2rem] rounded-[calc(4.16666667vw)]"
              >
                SHIRTS
              </a>

              {/* <div className="group flex items-center justify-center">
                <svg viewBox="0 0 200 100" className="relative w-[10rem]">
                  <ellipse
                    className="stroke-[#fff] stroke-[1px] group-hover:stroke-[2.5px] transition-[.3] duration-300"
                    cx="100"
                    cy="50"
                    rx="98"
                    ry="48"
                    style={{
                      fill: "transparent",
                    }}
                  ></ellipse>
                </svg>
                <Link href={'/collections/all'}  className="text-[2rem] text-white z-[100] font-[200]  tracking-[.1rem] telegraf top-[1rem] flex items-center justify-center absolute">
                  VIEW
                </Link>
              </div> */}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTA;
