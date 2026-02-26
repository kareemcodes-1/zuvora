"use client";
import React from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Image from "next/image";
import TestimonialSwiper from "./swiper/testimonial-swiper";


const Testimonials = () => {

  return (
    <section className="bg-black w-full h-screen z-[100] flex items-center justify-center relative overflow-visible">
        <TestimonialSwiper />
    </section>
  );
};

export default Testimonials;
