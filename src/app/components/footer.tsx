"use client";
import Link from 'next/link'
import React, { useEffect } from 'react'
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const Footer = () => {

    useEffect(() => {
            gsap.set(".footer", { yPercent: -50 });
        
            const uncover = gsap.timeline({ paused: true });
        
            uncover.to(".footer", { yPercent: 0, ease: "none" });
        
            ScrollTrigger.create({
              trigger: ".scroll-trigger",
              start: "bottom bottom",
              end: "+=50%",
              animation: uncover,
              scrub: true
            });
    
        }, []);

        function handleTop() {
            window.scrollTo({
              top: 0,
              behavior: 'smooth'
           });
        }


  return (
     <>
    <div className="section scroll-trigger"></div>
    <div className='overflow-hidden relative bg-[#f8f8f8] w-full'>
    <footer className='mx-[2rem] mt-[5rem] footer'>
        <div className='lg:grid flex flex-col lg:gap-[1rem] gap-[2rem] grid-cols-4 '>
            <div className='flex items-start flex-col gap-[.5rem] text-[#333] text-[.9rem]'>
                <Link href={''}>PRIVACY POLICY</Link>
                <Link href={''}>TERMS OF USE</Link>
                <Link href={''}>FAQ</Link>
            </div>

            <div className='flex items-start flex-col gap-[.5rem] text-[#333] text-[.9rem]'>
                <Link href={''}>PAYMENT METHODS</Link>
                <Link href={''}>RETURNS AND COMPLAINTS</Link>
                <Link href={''}>CONTACT</Link>
            </div>

            <div className='flex items-start flex-col gap-[.5rem] text-[#333] text-[.9rem]'>
                <Link href={''}>ABOUT</Link>
                <Link href={''}>SIZE OF CHART</Link>
                <Link href={''}>SHOWROOM</Link>
            </div>

            <div className='flex items-start flex-col gap-[.5rem] text-[#333] text-[.9rem]'>
                <Link href={''}>FACEBOOK</Link>
                <Link href={''}>INSTAGRAM</Link>
            </div>
        </div>

        <div className='mt-[4rem] flex items-center gap-[1rem] w-full'>
            <h1 className='lg:text-[17rem] text-[4.5rem] text-center font-[200] tracking-[.2rem] lg:leading-[15rem] uppercase text-black'>Zuvora</h1>

        <button
          onClick={handleTop}
          className="lg:flex hidden group cursor-pointer transform -translate-y-1/2  items-center justify-center text-center"
        >
          <svg viewBox="0 0 200 100" className="relative w-[9rem]">
            <ellipse
            className='stroke-[#000] stroke-[1px] group-hover:stroke-[2.5px] transition-[.3] duration-300'
              cx="100"
              cy="50"
              rx="98"
              ry="48"
              style={{
                fill: "transparent",
              }}
            ></ellipse>
          </svg>
          <div className="absolute">
            <h1 className="text-[2rem] font-[200]" >TOP</h1>
          </div>
        </button>
        </div>
    </footer>
       </div>
    </>
  )
}

export default Footer