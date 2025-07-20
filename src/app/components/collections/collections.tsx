
import React, { use} from "react";
import HorizontalScroll from "../../components/horizontalscroll";
import Link from "next/link";
import { getCollections } from "../../actions/getCollections";
import gsap from "gsap";
import SplitText from "gsap/SplitText";
import CollectionHeading from "@/lib/animations/collectionHeading";
import { Collection } from "../../../../types";
import Image from "next/image";

gsap.registerPlugin(SplitText);

const Collections = () => {
   const collections: Collection[] = use(getCollections());



  return (
    <section className="lg:px-[2rem] px-[1rem] bg-[#f8f8f8] pt-[3rem]">
      <div className="flex lg:flex-row flex-col lg:gap-0 gap-[3rem] lg:items-center items-start justify-between">
        
        <CollectionHeading />

        <Link
          href={"/collections/all"}
          className="group cursor-pointer transform -translate-y-1/2 flex items-center justify-center text-center"
        >
          <svg viewBox="0 0 200 100" className="relative lg:w-[9rem] w-[6rem]">
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
            <h1 className="lg:text-[2.5rem] text-[1.2rem] font-[200]">ALL</h1>
          </div>
        </Link>
      </div>
      <div className="lg:block hidden">
        <HorizontalScroll collections={collections}/>
      </div>

      <div className="lg:hidden flex flex-col gap-[2rem]">
          {collections.length > 0 && collections.map((collection, index) => (
               <div className="w-full relative" key={index}>
                          <div className="absolute bottom-[1rem] px-[1rem] w-full">
                            <div className="flex items-center justify-between w-full">
                              <a
                                className=" bg-white border-[#000] border-[2px] text-[#000] py-[0rem] px-[calc(1.82291667vw)] lg:text-[2.5rem] text-[2rem] rounded-[calc(4.16666667vw)]"
                              >
                                {collection.name}
                              </a>
                              <Link className="flex items-center justify-center group" href={`collections/${collection.name.toLowerCase()}`}>
                                <svg viewBox="0 0 200 100" className="relative lg:w-[10rem] w-[8rem]">
                                  <ellipse
                                    cx="100"
                                    cy="50"
                                    rx="98"
                                    ry="48"
                                    style={{
                                      fill: "transparent",
                                    }}
                                    className="stroke-[#fff] stroke-[1px] group-hover:stroke-[2.5px]"
                                  ></ellipse>
                                </svg>
                                <div
              
                                  className="lg:text-[2rem] text-[1.5rem] text-white z-[100]  tracking-[.1rem] telegraf top-[1rem] flex items-center justify-center absolute"
                                >
                                  VIEW
                                </div>
                              </Link>
                            </div>
                          </div>
                          <Image
                            src={collection.images[0]}
                            className="h-[25rem] min-w-[50vw] object-cover"
                            alt=""
                            width={500}
                            height={500}
                            quality={100}
                          />
                        </div>
          )) }

      </div>
    </section>
  );
};

export default Collections;

export const dynamic = "force-dynamic";
