"use client";
import Image from 'next/image';
import React from 'react'
import Marquee from 'react-fast-marquee'
import CenteredSwiper from './swiper/centered-swiper';

const BestSellers = () => {
  return (
     <section className="best-sellers">
            <div className="best-sellers-container lg:grid lg:grid-cols-2 flex flex-col">
                  <div className="pb-[2rem] pt-[1rem]">
                            <h2 className="text-[5rem] mb-[1.5rem] uppercase text-center"> best sellers</h2>

                       <CenteredSwiper />
                  </div>

                    <div className="w-full lg:h-auto h-[60vh] overflow-hidden">
                    <Image src="/hero.webp" width={500} height={500} quality={100} alt='' className="w-full object-cover h-full" id="seller-img-2"/>
                  </div>
            </div>
        </section>
  )
}

export default BestSellers