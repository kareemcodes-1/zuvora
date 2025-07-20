import Image from "next/image";
import React from "react";
import { Product } from "../../../../types";
import { Link } from "lucide-react";
import Skeleton from 'react-loading-skeleton';
import "react-loading-skeleton/dist/skeleton.css";
import { priceFormatter } from "@/lib/priceFormatter";

const ProductCard = ({product}: {product: Product}) => {

  // console.log(product);

  return (
    <a href={`/products/p/${product?.name.replace(/\s+/g, '-')}`} className="flex flex-col">
        <div className="bg-[#f0f0f0] lg:h-[32rem] h-[25rem] w-full rounded-[calc(3.90625vw)]">
        <Image
          width={500}
          height={500}
          quality={100}
          src={product.images[0]}
          alt={product?.name}
          className=" h-full w-full object-cover"
        />
        </div>


      <div className="mt-[1rem]">
        <h3 className="font-[200] uppercase text-[.9rem]">
          {product.name}
        </h3>
        <span>
          <em className="font-[200] uppercase text-[.9rem]">{priceFormatter(product.price)}</em>
        </span>
      </div>
    </a>
  );
};

export default ProductCard;