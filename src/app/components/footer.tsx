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
    <footer className='px-[3rem] mt-[5rem] footer '>
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
            <h1 className='lg:text-[19rem] text-[4.5rem] text-center font-[200] tracking-[.2rem] lg:leading-[15rem] uppercase text-black'>Zuvora</h1>

        <button
          onClick={handleTop}
          className="lg:block hidden prev-btn btn-base btn-dark cursor-pointer rotate-[90deg]"
        >
        </button>
        </div>
    </footer>
       </div>
    </>
  )
}

export default Footer