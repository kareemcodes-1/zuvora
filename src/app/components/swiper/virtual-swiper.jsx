"use client";
import React, { useRef, useState, useEffect } from "react";
import { Navigation, Autoplay } from "swiper/modules";
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
        modules={[ Navigation, Autoplay]}
        onSwiper={setSwiperRef}
        slidesPerView={3}
        centeredSlides={true}
        spaceBetween={10}  
        speed={900}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        loop={true}
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
        className="lg:!mt-[2rem] virtual-swiper relative"
      >

        <div className="lg:!mt-[4rem] pt-[10rem]">
          {loading ? (
          [...Array(4)].map((_, index) => (
               <SwiperSlide key={index} >
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

        <div className="absolute z-[200000] bottom-10 right-10">
         <div className="flex gap-[1.5rem]">
           <button ref={prevRef}  className="prev-btn btn-base btn-dark cursor-pointer">
         
        </button>


        <button  ref={nextRef} className="next-btn btn-base btn-dark cursor-pointer">
    
        </button>
         </div>
      </div>
      </Swiper>
    </>
  );
}

export const dynamic = "force-dynamic";
export const fetchCache = "force-no-store";
