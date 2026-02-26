import { NextRequest, NextResponse } from "next/server";
import Stripe from "stripe";

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY as string, {
  apiVersion: "2025-06-30.basil", // use a valid version
});

export async function POST(req: NextRequest) {
  try {
    // cartItems = [{ name, price, images, quantity }]
    const { cartItems } = await req.json();

    if (!cartItems || !Array.isArray(cartItems) || cartItems.length === 0) {
      return NextResponse.json({ error: "Cart is empty" }, { status: 400 });
    }

   const session = await stripe.checkout.sessions.create({
  payment_method_types: ["card"],
  mode: "payment",
  line_items: cartItems.map((entry) => ({
    price_data: {
      currency: "usd",
      product_data: {
        name: entry.item.name,
        images: entry.item.images,
      },
      unit_amount: Math.round(entry.item.price * 100), // cents
    },
    quantity: entry.quantity,
  })),
  success_url: `${process.env.NEXT_PUBLIC_BASE_URL}/success`,
  cancel_url: `${process.env.NEXT_PUBLIC_BASE_URL}/cancel`,
});



    return NextResponse.json({ url: session.url });
  } catch (error) {
    console.error("Checkout error:", error);
    return NextResponse.json(
      { error: "Internal Server Error" },
      { status: 500 }
    );
  }
}
