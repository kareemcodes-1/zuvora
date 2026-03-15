"use client";

import React, { useEffect, useState, useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
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
      <div className="relative w-[400px] mx-auto">
        {" "}
        {/* Control Swiper's width here */}
        <Swiper
          modules={[Navigation, Autoplay]}
          onSwiper={setSwiperRef}
          slidesPerView={1}
          speed={1200}
          autoplay={{
            delay: 3000,
            disableOnInteraction: false,
          }}
          loop={true}
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

        <div className="absolute z-[200000] bottom-[-4rem] right-[-9rem]">
        <div className="flex gap-[1.5rem]">
          <button ref={prevRef} className="prev-btn btn-base btn-dark cursor-pointer" />
          <button ref={nextRef} className="next-btn btn-base btn-dark cursor-pointer" />
        </div>
      </div>
      </div>
    </>
  );
};

export default CenteredSwiper;

export const dynamic = "force-dynamic";
export const fetchCache = "force-no-store";
