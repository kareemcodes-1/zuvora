"use server";

import dbConnect from "@/lib/dbConnect";

export async function getCollections() {
  try {
    await dbConnect();
    const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/collections`);
    console.log(res);
    const data = await res.json();
    return data;
  } catch (error) {
    console.log(error);
  }
}

export async function getCollection(name: string) {
  try {
    const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/collections/collection/${name}`);
    const data = await res.json();
    return data;
  } catch (error) {
    console.log(error);
  }
}

export async function createCollection() {
  try {
    // const res = await fetch("http://localhost:3000/api/collections", {
    //   method: "POST",
    //   headers: { "Content-Type": "application/json" },
    //   body: JSON.stringify({
    //     name: "Sample Collection",
    //     userId: "60d21b4567d0d8992e610c84",
    //     description: "A great product",
    //     images: ["https://example.com/image.jpg"],
    //   }),
    // });
    // const data = await res.json();
    // return data;
  } catch (error) {
    console.log(error);
  }
}
