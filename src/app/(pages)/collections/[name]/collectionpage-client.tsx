"use client";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import Marquee from "react-fast-marquee";
import { Collection, Product } from "../../../../../types";
import { getCollections } from "@/app/actions/getCollections";
import { getProductByCollection } from "@/app/actions/getProductByCollection";
import ProductCard from "@/app/components/products/product-card";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

const Collections = ({ collection }: { collection: Collection }) => {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    (async function () {
      try {
        setLoading(true);
        const data = await getProductByCollection(collection._id);
        setProducts(data);
      } catch (err) {
        console.error("Failed to load products:", err);
      } finally {
        setLoading(false);
      }
    })();
  }, [collection._id]);

  return (
    <section className="mt-[2rem] mb-[3rem] lg:mx-0 mx-[1rem]">
      <Marquee autoFill speed={120}>
        <h1 className="lg:text-[20rem] text-[8rem] lg:leading-[25rem] leading-[23rem] overflow-hidden">
          &nbsp; {collection.name} COLLECTION
        </h1>
      </Marquee>

      <p className="text-[1rem] font-[200] uppercase text-center mb-[3rem] lg:w-[500px] w-full flex items-center justify-center lg:mx-auto telegraf">
        {collection.description}
      </p>

    <div className="lg:grid grid-cols-3 flex flex-col gap-[1rem] lg:mx-[2rem] mx-[1rem]">

      {loading ? (
        Array.from({length: 6}).map((_, i) => (
          <Skeleton className="h-[28rem]" key={i}/>
        ))
      ) : (
          products.map((product, index) => (
            <ProductCard product={product} key={index} />
          ))

      )}
        </div>
    </section>
  );
};

export default Collections;

export const dynamic = "force-dynamic";
