"use client";
import ProductCard from "@/app/components/products/product-card";
import { useEffect, useState } from "react";
import { Product } from "../../../../../types";
import { useNavbar } from "@/app/providers/navbar-provider";
import FilterModal from "@/app/components/modal/filter-modal";
import useFilter from "@/hooks/use-filter";
import { Collection } from "mongoose";

type Category = "All" | "Hoodies" | "T-Shirts" | "Pants" | "New Arrivals" | "Sale";
const categories: Category[] = ["All", "Hoodies", "T-Shirts", "Pants", "New Arrivals", "Sale"];

export default function CollectionProducts({collection, products }: {collection: Collection, products: Product[] }) {
  const [activeCategory, setActiveCategory] = useState<Category>("All");
  const [openFilterModal, setOpenFilterModal] = useState(false);
  const { sort, sizes } = useFilter();

  const filteredProducts = [...products]
    .filter((p) => sizes.length === 0 || p.sizes?.some((s) => sizes.includes(s)))
    .sort((a, b) => {
      if (sort === "name-az") return a.name.localeCompare(b.name);
      if (sort === "name-za") return b.name.localeCompare(a.name);
      if (sort === "price-asc") return a.price - b.price;
      if (sort === "price-desc") return b.price - a.price;
      return 0;
    });

  const { setTheme } = useNavbar();
  
  useEffect(() => { setTheme("dark"); }, []);

  return (
    <>
      {openFilterModal && (
        <FilterModal
        openFilterModal={openFilterModal}
        setOpenFilterModal={setOpenFilterModal}
      />
      )}

      <section className="min-h-screen w-full mt-[2rem] py-[5rem] px-[2rem]">
        <div className="flex flex-col h-full gap-[2rem]">
          <h1 className="text-[5.5rem] font-black font-extralight">{collection.name} COLLECTION</h1>

          <div className="flex items-center justify-between w-full">
            <div className="flex items-center gap-[2rem] pb-[1rem]">
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setActiveCategory(category)}
                  className={`text-[1rem] transition-colors duration-200 ${
                    activeCategory === category
                      ? "text-black font-[500]"
                      : "text-black/40 font-[300] hover:text-black"
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>
            <button
              className="!cursor-pointer next-btn btn-base btn-dark"
              onClick={() => setOpenFilterModal(true)}
            >
              Filter
            </button>
          </div>

          <div className="lg:grid grid-cols-3 flex flex-col gap-[1rem]">
            {filteredProducts.map((product, index) => (
              <ProductCard product={product} key={index} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
}