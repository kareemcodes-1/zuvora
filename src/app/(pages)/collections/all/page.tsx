"use client";
import React, { useEffect, useState } from 'react'
import { Collection, Product } from '../../../../../types';
import { getCollections } from '@/app/actions/getCollections';
import Marquee from 'react-fast-marquee';
import { getProducts } from '@/app/actions/getProducts';
import ProductCard from '@/app/components/products/product-card';
import { Types } from 'mongoose';
import Loading from '../../../components/loading/loading';

const AllCollection = () => {
  const [collections, setCollections] = useState<Collection[]>([]);
  const [products, setProducts] = useState<Product[]>([]);
  const [filteredProducts, setFilteredProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true); 

  useEffect(() => {
    (async function () {
      try {
        const collectionsResult = await getCollections();
        const productsResult = await getProducts();

        setCollections(collectionsResult);
        setProducts(productsResult);
        setFilteredProducts(productsResult);
      } catch (error) {
        console.error("Error fetching data:", error);
      } finally {
        setLoading(false);
      }
    })();
  }, []);

  function filterProducts(collectionId: Types.ObjectId) {
    const filtered = products.filter((product) => product.collectionId === collectionId);
    setFilteredProducts(filtered);
  }

  if (loading) return <Loading />;
  return (
     <section>
      <Marquee autoFill speed={120}>
        <h1 className="lg:text-[20rem] text-[10rem] leading-[25rem] overflow-hidden">
          &nbsp; SHOP ALL
        </h1>
      </Marquee>

      <div className='lg:flex hidden items-center justify-end gap-[0rem]'>
         {collections.map((collection, index) => (
           <button key={index}
           onClick={() => filterProducts(collection._id)}
          className="group cursor-pointer transform -translate-y-1/2 flex p-[1rem] items-center justify-center text-center"
        >
          <svg viewBox="0 0 200 100" className="relative w-[8rem]">
            <ellipse
              cx="100"
              cy="50"
              rx="98"
              ry="48"
              style={{
                fill: "transparent",
              }}
              className="stroke-[#000] stroke-[1px] group-hover:stroke-[2.5px] transition duration-300"
            ></ellipse>
          </svg>
          <div className="absolute">
            <h1 className="text-[1.5rem] font-[200]">{collection.name}</h1>
          </div>
        </button>
         ))}
      </div>

      <div className="lg:grid flex flex-col lg:gap-[1rem] gap-[1.5rem] grid-cols-3 mx-[2rem] my-[2rem] mb-[4rem]">
          {filteredProducts.map((product, index) => (
            <ProductCard product={product} key={index}/>
          ))}
      </div>
    </section>
  )
}

export default AllCollection

export const dynamic = "force-dynamic";
export const fetchCache = "force-no-store";