import { NextRequest, NextResponse } from "next/server";
import Collection from "../../../../../../models/Collection";
import dbConnect from "@/lib/dbConnect";

export async function GET(
  request: NextRequest,
  { params }: { params: { name: string } }
) {
  try {
    await dbConnect();
    const decodedName = decodeURIComponent(params.name.replace(/-/g, " "));
    const collection = await Collection.findOne({ name: decodedName });

    if (!collection) {
      return new NextResponse(JSON.stringify({ error: "Collection not found" }), {
        status: 404,
        headers: { "Content-Type": "application/json" },
      });
    }

    return new NextResponse(JSON.stringify(collection), {
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
