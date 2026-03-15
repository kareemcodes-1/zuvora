"use client";
import React from "react";
import Link from "next/link";
import { Collection } from "../../../../types";
import Image from "next/image";

const CollectionCard = ({ collections }: {collections: Collection[]}) => {
  return (
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-2 ">
        {collections.length > 0 &&
          collections.map((collection) => (
            <div className="relative group" key={collection._id.toString()}>
              <div className="absolute inset-0 bg-black/20 pointer-events-none overlay" />
              <Image
                src={collection.images[0]}
                className="w-full h-full object-cover"
                alt={collection.name}
                width={800}
                height={560}
                quality={100}
              />

              {/* Overlay */}
              <div className="absolute bottom-[3rem] px-[1rem] w-full">
                <div className="flex items-center justify-between w-full">
                  <span className="text-[3rem] uppercase text-white bg-white category-btn border">
                    {collection.name}
                  </span>

                  <Link

                    className="next-btn btn-base btn-light"
                    href={`collections/${collection.name.toLowerCase()}`}
                  >

                  </Link>
                </div>
              </div>
            </div>
          ))}
      </div>
  );
};

export default CollectionCard;

export const dynamic = "force-dynamic";
export const fetchCache = "force-no-store";