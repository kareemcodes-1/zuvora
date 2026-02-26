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
      "Bravo I've just washed and blow dried my hair. I am totally blown away by the quality of the products.",
    author: "ALEXANDRA MIRO",
  },
  {
    id: 2,
    quote:
      "The experience felt premium from start to finish. The attention to detail is unmatched.",
    author: "JAMES CARTER",
  },
  {
    id: 3,
    quote:
      "Clean design, smooth interactions, and incredible product quality. Absolutely love it.",
    author: "EMMA WILSON",
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
              <p className="text-white text-xl md:text-3xl font-light leading-relaxed max-w-4xl">
                "{item.quote}"
              </p>

              <span className="text-white/70 text-sm tracking-[0.3em] mt-8">
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
