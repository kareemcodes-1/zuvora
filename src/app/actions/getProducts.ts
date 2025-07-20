"use server";

export async function getProduct(name: string) {
  try {
    const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/products/product/${name}`);
    const data = await res.json();
    return data;
  } catch (error) {
    console.log(error);
  }
}

export async function getProducts() {
  try {
    const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/products`);
    const data = await res.json();
    return data;
  } catch (error) {
    console.log(error);
  }
}

export async function createProducts() {
  try {
    const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/products`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        name: "ROOFTOP BLACK MUSLIN open back midi",
        collectionId: "60d21b4667d0d8992e610c85",
        userId: "60d21b4567d0d8992e610c84",
        description: "A great product",
        price: 184.08,
        sizes: ["S", "M", "L"],
        inStock: true,
        images: [
          `${process.env.NEXT_PUBLIC_BASE_URL}_next/image?url=https%3A%2F%2Fframerusercontent.com%2Fimages%2FLrkevucVgn2R7EhTyUixgdDx8.png`,
        ],
      }),
    });
    const data = await res.json();
    return data;
  } catch (error) {
    console.log(error);
  }
}


export const dynamic = "force-dynamic";
export const fetchCache = "force-no-store";
