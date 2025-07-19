"use client";
import React, { useEffect, useState } from "react";
import { Product } from "../../../../../../types/index";
import ProductCard from "@/app/components/products/product-card";
import Loading from "@/app/components/loading/loading";
import Skeleton from "react-loading-skeleton";
import { Minus, Plus } from "lucide-react";
import useCart from "@/store";
import Image from "next/image";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { priceFormatter } from "@/lib/priceFormatter";
import { getProducts } from "@/app/actions/getProducts";

const ProductPageClient = ({ product }: { product: Product }) => {
  const { addItem } = useCart();
  const [quantity, setQuantity] = useState(1);
  const [selectedSize, setSelectedSize] = useState<string>(product.sizes[0]);
  const [products, setProducts] = useState<Product[]>([]);

  const selectSize = (size: string) => {
    setSelectedSize(size);
  };

  useEffect(() => {
      (async function (){
          const products = await getProducts();
          setProducts(products.slice(1,5));
      })()
  }, [])

  if (!product) return <Loading />;

  return (
    <section className="products-page relative min-h-screen pt-[4rem]">
      <div className="flex flex-col lg:flex-row">
        <div className="lg:w-1/2 w-full overflow-hidden px-4 lg:px-12 py-12 space-y-8">
          {product.images.map((img, index) => (
            <div
              className="bg-[#f0f0f0] lg:h-[32rem] h-[25rem] w-full flex items-center justify-center"
              key={index}
            >
              <Image
                src={img}
                alt={product.name}
                width={500}
                height={500}
                className="flex items-center justify-center"
              />
            </div>
          ))}
        </div>

        <div className="lg:w-1/2 w-full px-6 lg:px-12 lg:py-12">
          <div className="sticky top-[5rem] flex flex-col justify-between product-description">
            <div className="">
              <h1 className="lg:text-[2.5rem] text-[2rem] mb-[1rem] telegraf font-[200]">{product.name}</h1>
              <span className="lg:text-[2rem] text-[1.8rem] telegraf font-[200]">
                {priceFormatter(product.price)}
              </span>
            </div>

            {/* <p className="text-[.9rem] uppercase font-[200] mt-[1rem] telegraf">
              A rich, deeply moisturizing body cream that hydrates and nourishes
              your skin...
            </p> */}

            <div className="flex items-center gap-[.5rem] my-[1rem] w-full">
              {product.sizes.map((size) => (
                <button
                  key={size}
                  onClick={() => selectSize(size)}
                  className={`${
                    selectedSize === size
                      ? "bg-black text-white"
                      : "bg-white text-black"
                  } hover:bg-black hover:text-white cursor-pointer border-[#000] border-[2px] telegraf font-[200] py-[0rem] lg:px-[calc(1.82291667vw)] px-[1rem] text-[1.5rem] rounded-[calc(4.16666667vw)]`}
                >
                  {size}
                </button>
              ))}
            </div>

            <Accordion type="single" collapsible>
              <AccordionItem value="item-1">
                <AccordionTrigger className="lg:text-[1.5rem] text-[1.2rem] telegraf font-[200] ">PRODUCT DESCRIPTION</AccordionTrigger>
                <AccordionContent>
                 {product.description}
                </AccordionContent>
              </AccordionItem>
            </Accordion>

            <div className="flex flex-col gap-2">
              <div className="flex gap-4 items-center w-full justify-between my-[1.2rem] border-[#21050517] rounded-[.2rem] border-[1px] p-[1rem] h-[3rem]">
                <Minus
                  className="cursor-pointer"
                  onClick={() => setQuantity(Math.max(1, quantity - 1))}
                />
                <p className="lg:text-[1.5rem] text-[1.2rem]">{quantity}</p>
                <Plus
                  className="cursor-pointer"
                  onClick={() => setQuantity(quantity + 1)}
                />
              </div>
            </div>


            <div className="flex lg:flex-row flex-col items-center w-full gap-[1rem]">
              <button
                onClick={() =>
                  addItem({ item: product, quantity, selectedSize })
                }
                className="bg-black text-white hover:bg-transparent hover:text-black transition-[.3s] cursor-pointer telegraf font-[200] border-[#000] border-[2px] py-[0rem] px-[calc(1.82291667vw)] text-[1.8rem] w-full rounded-[calc(3.64583333vw)]"
              >
                ADD TO CART
              </button>
              <button className="bg-white hover:bg-black hover:text-white transition-[.3s] cursor-pointer telegraf font-[200] border-[#000] border-[2px] text-[#000] py-[0rem] px-[calc(1.82291667vw)] text-[1.8rem] w-full rounded-[calc(3.64583333vw)]">
                WISHLIST
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="mx-[2rem] my-[4rem]">
        <h1 className="text-center lg:text-[2.5rem] text-[1.5rem] mb-[2rem]">Related Products</h1>
        <div className="lg:grid grid-cols-3 gap-[1rem]">
         {products.map((p, index) => (
           <ProductCard product={p} key={index} />
         ))}
        </div>
      </div>
    </section>
  );
};

export default ProductPageClient;
