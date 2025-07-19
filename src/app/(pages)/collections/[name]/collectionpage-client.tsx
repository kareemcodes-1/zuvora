"use client";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import Marquee from "react-fast-marquee";
import { Collection, Product } from "../../../../../types";
import { getCollections } from "@/app/actions/getCollections";
import { getProductByCollection } from "@/app/actions/getProductByCollection";
import ProductCard from "@/app/components/products/product-card";

const Collections = ({ collection }: { collection: Collection }) => {
  const [collections, setCollections] = useState<Collection[]>([]);
  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
    (async function () {
    const data = await getProductByCollection(collection._id);
    setProducts(data);
  })();
  }, [collection._id])

  return (
    <section className="mt-[2rem] mb-[3rem]">
      <Marquee autoFill speed={120}>
        <h1 className="lg:text-[20rem] text-[10rem] leading-[25rem] overflow-hidden">
          &nbsp; {collection.name} COLLECTION
        </h1>
      </Marquee>

      <p className="text-[1rem] font-[200] uppercase text-center mb-[3rem] lg:w-[500px] w-full flex items-center justify-center mx-auto telegraf">
        {collection.description}
      </p>

      <div className="lg:grid grid-cols-3 flex flex-col gap-[1rem] lg:mx-[2rem] mx-[1rem]">
          {products.map((product, index) => (
            <ProductCard product={product} key={index}/>
          ))}
      </div>
    </section>
  );
};

export default Collections;
