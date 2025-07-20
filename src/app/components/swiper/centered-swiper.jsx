"use client";

import React, { useEffect, useState, useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import { getProducts } from "../../actions/getProducts";

import "swiper/css";
import "swiper/css/navigation";
import ProductCard from "../products/product-card";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

const CenteredSwiper = () => {
  const prevRef = useRef(null);
  const nextRef = useRef(null);
  const [swiperRef, setSwiperRef] = useState(null);
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    (async function () {
      try {
        const data = await getProducts();
        setProducts(data);
      } catch (error) {
        setLoading(false);
      } finally {
        setLoading(false);
      }
    })();
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
      <button
        ref={prevRef}
        className="lg:flex hidden group custom-swiper-button-prev absolute left-[-5rem] top-[15rem] z-10 cursor-pointer transform -translate-y-1/2 items-center justify-center"
      >
        <svg viewBox="0 0 200 100" className="relative w-[9rem]">
          <ellipse
            cx="100"
            cy="50"
            rx="98"
            ry="48"
            style={{ fill: "transparent" }}
            className="stroke-[#000] stroke-[1px] group-hover:stroke-[2.5px] transition-[.3] duration-300"
          ></ellipse>
        </svg>

        <div className="absolute">
          <h1 className="text-[2.5rem] font-[200]">PREV</h1>
        </div>
      </button>

      <button
        ref={nextRef}
        className="lg:flex hidden group custom-swiper-button-next absolute top-[15rem] right-[-5rem] z-10 cursor-pointer transform -translate-y-1/2 items-center justify-center"
      >
        <svg viewBox="0 0 200 100" className="relative w-[9rem]">
          <ellipse
            cx="100"
            cy="50"
            rx="98"
            ry="48"
            style={{ fill: "transparent" }}
            className="stroke-[#000] stroke-[1px] group-hover:stroke-[2.5px] transition-[.3] duration-300"
          ></ellipse>
        </svg>

        <div className="absolute">
          <h1 className="text-[2.5rem] font-[200]">NEXT</h1>
        </div>
      </button>

      <div className="max-w-[400px] !overflow-hidden">
        {" "}
        {/* Control Swiper's width here */}
        <Swiper
          modules={[Navigation]}
          onSwiper={setSwiperRef}
          slidesPerView={1}
          // loop={true}
          className="mySwiper"
          navigation={{
            prevEl: prevRef.current,
            nextEl: nextRef.current,
          }}
        >
          {loading
            ? [...Array(4)].map((_, index) => (
                <SwiperSlide key={index}>
                    <Skeleton className="h-[32rem] w-full" />
                </SwiperSlide>
              ))
            : products.length > 0 && products.map((product, index) => (
                <SwiperSlide key={index}>
                  <ProductCard product={product} />
                </SwiperSlide>
              ))}
        </Swiper>
      </div>
    </>
  );
};

export default CenteredSwiper;

export const dynamic = "force-dynamic";
