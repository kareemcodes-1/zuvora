"use client";

import React, { useRef, useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";

const testimonials = [
  {
    id: 1,
    quote:
      "The quality honestly surprised me. The fabric feels premium and the fit is perfect.",
    author: "ALEXANDRA MIRO",
  },
  {
    id: 2,
    quote:
      "I’ve ordered twice already. The pieces look even better in person and the delivery was fast.",
    author: "JAMES CARTER",
  },
  {
    id: 3,
    quote:
      "Minimal design, great materials, and everything fits so well. Easily one of my favorite brands.",
    author: "EMMA WILSON",
  },
  {
    id: 4,
    quote:
      "You can immediately tell the difference in quality. The stitching and fabric are excellent.",
    author: "DANIEL PARKER",
  },
  {
    id: 5,
    quote:
      "Every piece feels thoughtfully designed. Comfortable, stylish, and easy to wear every day.",
    author: "SOPHIA MARTINEZ",
  },
  {
    id: 6,
    quote:
      "I get compliments every time I wear their clothes. Definitely ordering more soon.",
    author: "OLIVER BENNETT",
  },
];

export default function TestimonialSwiper() {
  const prevRef = useRef(null);
  const nextRef = useRef(null);
  const [swiper, setSwiper] = useState(null);

  useEffect(() => {
      if (
        swiper &&
        swiper.params &&
        swiper.params.navigation &&
        prevRef.current &&
        nextRef.current
      ) {
        swiper.params.navigation.prevEl = prevRef.current;
        swiper.params.navigation.nextEl = nextRef.current;
        swiper.navigation.destroy();
        swiper.navigation.init();
        swiper.navigation.update();
      }
    }, [swiper]);

  return (
    <div className="relative w-full h-full">

      <Swiper
        modules={[Navigation]}
        slidesPerView={1}
        speed={900}
        onSwiper={setSwiper}
         navigation={{
          prevEl: prevRef.current,
          nextEl: nextRef.current,
        }}
        loop={true}
        className="w-full h-full"
      >
        {testimonials.map((item) => (
          <SwiperSlide key={item.id}>
            <div className="w-full h-full flex flex-col items-center justify-center text-center px-6 md:px-20">
              <p className="text-white text-xl md:text-[3rem] font-light leading-relaxed max-w-4xl">
                "{item.quote}"
              </p>

              <span className="text-white/70 text-[1rem] tracking-[0.3em] mt-8">
                {item.author}
              </span>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Navigation */}
      <div className="absolute z-[200000] bottom-10 right-10">
         <div className="flex gap-[1.5rem]">
           <button ref={prevRef}  className="prev-btn btn-base btn-light cursor-pointer">
         
        </button>


        <button  ref={nextRef} className="next-btn btn-base btn-light cursor-pointer right-0">
    
        </button>
         </div>
      </div>

    </div>
  );
}
