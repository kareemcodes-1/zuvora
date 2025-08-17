"use client";
import React, { useRef, useState, useEffect } from "react";
import { Virtual, Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import { getProducts } from '../../actions/getProducts';

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import ProductCard from "../../components/products/product-card";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

export default function VirtualSwiper() {
  const [swiperRef, setSwiperRef] = useState(null);
  const prevRef = useRef(null);
  const nextRef = useRef(null);
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

       useEffect(() => {
       (async function (){
        try {
        const data = await getProducts();
        setProducts(data);
        } catch (error) {
            setLoading(false);
        }finally{
            setLoading(false);
        }
     })()
  
     }, []);


  useEffect(() => {
    if (
      swiperRef &&
      swiperRef.params &&
      swiperRef.params.navigation &&
      prevRef.current &&
      nextRef.current
    ) {
      swiperRef.params.navigation.prevEl = prevRef.current;
      swiperRef.params.navigation.nextEl = nextRef.current;
      swiperRef.navigation.destroy();
      swiperRef.navigation.init();
      swiperRef.navigation.update();
    }
  }, [swiperRef]);


  return (
    <>
      <Swiper
        modules={[Virtual, Navigation, Pagination]}
        onSwiper={setSwiperRef}
        slidesPerView={3}
        centeredSlides={true}
        spaceBetween={10}
        navigation={{
          prevEl: prevRef.current,
          nextEl: nextRef.current,
        }}
        breakpoints={{
    0: {
      slidesPerView: 1,
      centeredSlides: false,
    },
    768: {
      slidesPerView: 2,
    },
    1024: {
      slidesPerView: 3,
      centeredSlides: true,
    },
  }}
        virtual
        className="lg:!mt-[2rem] virtual-swiper"
      >
        <button
          ref={prevRef}
          className="lg:absolute hidden group custom-swiper-button-prev z-10  top-[3rem] left-0 cursor-pointer transform -translate-y-1/2 flex items-center justify-center text-center"
        >
          <svg viewBox="0 0 200 100" className="relative w-[9rem]">
            <ellipse
              cx="100"
              cy="50"
              rx="98"
              ry="48"
              style={{ fill: "transparent" }}
              className="stroke-[#000] stroke-[1px] group-hover:stroke-[2.5px] transition duration-300"
            ></ellipse>
          </svg>

          <div className="absolute">
            <h1 className="text-[2.5rem] font-[200]">PREV</h1>
          </div>
        </button>
        <button
          ref={nextRef}
          className="lg:absolute hidden custom-swiper-button-next  top-[3rem] right-0  z-10 cursor-pointer transform -translate-y-1/2 flex items-center justify-center"
        >
          <svg viewBox="0 0 200 100" className="relative w-[9rem]">
            <ellipse
              cx="100"
              cy="50"
              rx="98"
              ry="48"
              style={{
                fill: "transparent",
                stroke: "#000",
                strokeWidth: "1px",
              }}
            ></ellipse>
          </svg>

          <div className="absolute">
            <h1 className="text-[2.5rem] font-[200]">NEXT</h1>
          </div>
        </button>

        <div className="lg:!mt-[4rem] pt-[10rem]">
          {loading ? (
          [...Array(4)].map((_, index) => (
               <SwiperSlide key={index} virtualIndex={index}>
              <div key={index} className="mb-4">
              <Skeleton className="!h-[32rem]" />
               </div>
           </SwiperSlide>
             ))
        ): (
              products.length > 0 && products.slice(0, 5).map((product, index) => (
              <SwiperSlide key={index} virtualIndex={index}>
                <ProductCard product={product}/>
              </SwiperSlide>
            ))
        )}
        </div>
      </Swiper>
    </>
  );
}

export const dynamic = "force-dynamic";
export const fetchCache = "force-no-store";
