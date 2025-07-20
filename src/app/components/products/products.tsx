"use client";
import React, { useEffect, useState } from 'react'
import VirtualSwiper from "../swiper/virtual-swiper";
import { getProducts } from '../../actions/getProducts';
import { Product } from '../../../../types';
import gsap from "gsap";
import SplitText from "gsap/SplitText";
import Link from 'next/link';

gsap.registerPlugin(SplitText);

const Products = () => {

    useEffect(() => {
          let productHeading = new SplitText("#product-heading", { type: "chars" });
        gsap.from(productHeading.chars, {
          yPercent: 100,
          duration: 1,
          stagger: 0.05,
          ease: "power3.out",
           scrollTrigger: {
              trigger: "#product-heading",
              start: "top 100%",
              end: "bottom 20%",
              toggleActions: "play none none reverse",
               },
        });


       }, [])

  return (
     <section className='px-[2rem] lg:py-[4rem] py-[2rem]'>
          {/* <div> */}
               <div className='flex items-start justify-between w-full'>
                    <div className='lg:mb-[3rem] lg:hidden block overflow-hidden'>
                         <h1 className='lg:hidden block text-[2.5rem] uppercase font-[200]' id='product-heading'><span className=''>Featured</span> <br /> Products</h1>
                    </div>

                       <div className='lg:mb-[1rem] lg:block hidden'>
                           <h1 className='lg:block hidden text-[4.5rem] uppercase font-[200]' id='product-heading'><span className=''>Featured</span> Products</h1>
                       </div>
               </div>


               <VirtualSwiper/>
          {/* </div> */}
     </section>
  )
}

export default Products