import { NextRequest, NextResponse } from "next/server";
import Product from "../../../../../models/Product";
import dbConnect from "@/lib/dbConnect";
import { ObjectId } from "mongodb";



export async function GET(
  request: NextRequest,
  { params }: { params: { collectionId: string } }
) {
  try {
    await dbConnect();
   const products = await Product.find({ collectionId: new ObjectId(params.collectionId) });

   console.log(products)

    if (products.length === 0) {
      return new NextResponse(JSON.stringify({ error: "Products not found" }), {
        status: 404,
        headers: { "Content-Type": "application/json" },
      });
    }

    return new NextResponse(JSON.stringify(products), {
      status: 200,
      headers: { "Content-Type": "application/json" },
    });
  } catch (error) {
    console.error("API error:", error);
    return new NextResponse(
      JSON.stringify({ error: "Internal Server Error" }),
      {
        status: 500,
        headers: { "Content-Type": "application/json" },
      }
    );
  }
}
