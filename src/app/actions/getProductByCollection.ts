"use server";

import dbConnect from "@/lib/dbConnect";
import { Types } from "mongoose";

export async function getProductByCollection(collectionId: Types.ObjectId) {
  try {
    await dbConnect();
    console.log(collectionId);
    const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/products/${collectionId}`);
    const data = await res.json();
    return data;
  } catch (error) {
    console.log(error);
  }
}
