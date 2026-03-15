"use client";
import Image from 'next/image';
import React from 'react'
import Marquee from 'react-fast-marquee'
import CenteredSwiper from './swiper/centered-swiper';
import Link from 'next/link';

const BestSellers = () => {
  return (
     <section className="best-sellers w-full">
            <div className="best-sellers-container lg:grid lg:grid-cols-2 flex flex-col h-full">
                  <div className="pb-[7rem] pt-[2rem]">
                            <h2 className="lg:text-[5rem] text-[3rem] mb-[1.5rem] uppercase text-center"> best sellers</h2>

                       <CenteredSwiper />
                  </div>

                    <div className="relative w-full h-full overflow-hidden w-full">
                      <div className="absolute inset-0 bg-black/20 pointer-events-none overlay" />
                    <Image src="/hero.webp" width={500} height={500} quality={100} alt='' className="w-full object-cover h-full" id="seller-img-2"/>
                    <div className='absolute bottom-[2rem] w-full'>
                      <div className='flex items-start justify-between px-[1rem]'>
                       <span className='text-[3rem] uppercase text-white bg-white category-btn border'>DRESSES</span>

                        <Link href={'/'} className=" next-btn btn-base btn-light !mb-[2rem] cursor-pointer uppercase">
            See All
          </Link>
                    </div>
                    </div>
                  </div>
            </div>
        </section>
  )
}

export default BestSellers