"use client";

import { useEffect, useState } from "react";
import { useSession } from "next-auth/react";
import Image from "next/image";
import Link from "next/link";
import { Package } from "lucide-react";
import { getOrders } from "@/app/actions/getOrders";

type OrderProduct = {
  productId: {
    _id: string;
    name: string;
    price: number;
    images: string[];
  };
  quantity: number;
};

type Order = {
  _id: string;
  products: OrderProduct[];
  totalAmount: number;
  paymentInfo: {
    status: string;
    gateway: string;
  };
  shippingAddress: {
    street: string;
    city: string;
    state: string;
    postalCode: string;
    country: string;
  };
  createdAt: string;
};


export default function OrdersPage() {
  const { data: session } = useSession();
  const [orders, setOrders] = useState<Order[]>([]);
  const [loading, setLoading] = useState(true);
  const [expandedOrder, setExpandedOrder] = useState<string | null>(null);

useEffect(() => {
  const fetchOrders = async () => {
    try {
      const data = await getOrders();
      setOrders(data);
    } catch (err) {
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  if (session?.user) fetchOrders();
}, [session]);

  const formatDate = (dateStr: string) => {
    return new Date(dateStr).toLocaleDateString("en-US", {
      year: "numeric",
      month: "long",
      day: "numeric",
    });
  };

  return (
    <section className="min-h-screen w-full bg-[#f8f8f8] pt-[8rem] pb-[4rem] px-[2rem]">
      <div className="max-w-[780px] mx-auto flex flex-col gap-[2rem]">

        {/* Header — matches cart modal style */}
        <div className="flex items-center justify-between pb-[1.5rem] border-b border-black/10">
          <h1 className="text-[2rem] font-black uppercase tracking-[-0.01em]">Orders</h1>
          <span className="text-[0.75rem] uppercase tracking-[0.2rem] text-black/30 font-[300]">
            {orders.length} {orders.length === 1 ? "Order" : "Orders"}
          </span>
        </div>

        {/* Loading */}
        {loading && (
          <div className="flex flex-col gap-[1px]">
            {[1, 2, 3].map((i) => (
              <div key={i} className="h-[100px] bg-black/5 animate-pulse rounded-sm" />
            ))}
          </div>
        )}

        {/* Empty state */}
        {!loading && orders.length === 0 && (
          <div className="flex flex-col items-center justify-center gap-[1.5rem] py-[6rem]">
            <div className="w-[56px] h-[56px] rounded-full border border-black/10 flex items-center justify-center bg-white">
              <Package size={22} strokeWidth={1.25} className="text-black/30" />
            </div>
            <div className="flex flex-col items-center gap-[0.4rem]">
              <p className="text-[0.9rem] uppercase tracking-[0.15rem] font-[400] text-black/60">
                No orders yet
              </p>
              <p className="text-[0.8rem] text-black/30 font-[300]">
                Your completed orders will appear here.
              </p>
            </div>
            <Link
              href="/shop"
              className="mt-[0.5rem] px-[2rem] py-[0.8rem] bg-black text-white text-[0.8rem] uppercase tracking-[0.15rem] font-[300] hover:bg-black/80 transition-colors"
            >
              Start Shopping
            </Link>
          </div>
        )}

        {/* Orders list */}
        {!loading && orders.length > 0 && (
          <div className="flex flex-col gap-[1px] bg-black/5">
            {orders.map((order) => (
              <div key={order._id} className="bg-[#f8f8f8]">

                {/* Order row — always visible */}
                <button
                  onClick={() =>
                    setExpandedOrder(expandedOrder === order._id ? null : order._id)
                  }
                  className="w-full flex items-center justify-between px-[1.5rem] py-[1.4rem] hover:bg-white transition-colors duration-150 text-left"
                >
                  <div className="flex items-center gap-[2rem]">
                    {/* Stacked product thumbnails */}
                    <div className="relative flex">
                      {order.products.slice(0, 3).map((p, i) => (
                        <div
                          key={i}
                          className="w-[44px] h-[44px] bg-white border border-black/10 overflow-hidden flex-shrink-0"
                          style={{ marginLeft: i > 0 ? "-10px" : "0", zIndex: i }}
                        >
                          {p.productId?.images?.[0] ? (
                            <Image
                              src={p.productId.images[0]}
                              alt={p.productId.name}
                              width={44}
                              height={44}
                              className="object-cover w-full h-full"
                            />
                          ) : (
                            <div className="w-full h-full bg-black/5" />
                          )}
                        </div>
                      ))}
                      {order.products.length > 3 && (
                        <div
                          className="w-[44px] h-[44px] bg-black/5 border border-black/10 flex items-center justify-center flex-shrink-0 text-[0.65rem] text-black/40"
                          style={{ marginLeft: "-10px" }}
                        >
                          +{order.products.length - 3}
                        </div>
                      )}
                    </div>

                    <div className="flex flex-col gap-[0.15rem]">
                      <span className="text-[0.8rem] uppercase tracking-[0.1rem] font-[400] text-black">
                        {order.products.length} {order.products.length === 1 ? "Item" : "Items"}
                      </span>
                      <span className="text-[0.72rem] text-black/35 font-[300]">
                        {formatDate(order.createdAt)}
                      </span>
                    </div>
                  </div>

                  <div className="flex items-center gap-[2rem]">
                    {/* Status badge */}
                    <span className="text-[0.65rem] uppercase tracking-[0.12rem] px-[0.7rem] py-[0.3rem] border border-black/15 text-black/50 font-[300]">
                      {order.paymentInfo.status}
                    </span>
                    <span className="text-[0.95rem] font-[500] text-black">
                      ${order.totalAmount.toFixed(2)}
                    </span>
                    <span
                      className={`text-[0.7rem] text-black/30 transition-transform duration-200 ${
                        expandedOrder === order._id ? "rotate-180" : ""
                      }`}
                    >
                      ▾
                    </span>
                  </div>
                </button>

                {/* Expanded order details */}
                {expandedOrder === order._id && (
                  <div className="bg-white border-t border-black/5 px-[1.5rem] py-[1.5rem] flex flex-col gap-[1.5rem]">

                    {/* Products */}
                    <div className="flex flex-col gap-[1px] bg-black/5">
                      {order.products.map((p, i) => (
                        <div
                          key={i}
                          className="bg-white flex items-center gap-[1rem] px-[1rem] py-[1rem]"
                        >
                          <div className="w-[56px] h-[56px] bg-black/5 flex-shrink-0 overflow-hidden">
                            {p.productId?.images?.[0] ? (
                              <Image
                                src={p.productId.images[0]}
                                alt={p.productId.name}
                                width={56}
                                height={56}
                                className="object-cover w-full h-full"
                              />
                            ) : (
                              <div className="w-full h-full bg-black/5" />
                            )}
                          </div>

                          <div className="flex-1 flex items-center justify-between">
                            <div className="flex flex-col gap-[0.2rem]">
                              <span className="text-[0.85rem] uppercase tracking-[0.05rem] font-[400] text-black">
                                {p.productId?.name ?? "Product"}
                              </span>
                              <span className="text-[0.72rem] text-black/35 font-[300]">
                                Qty: {p.quantity}
                              </span>
                            </div>
                            <span className="text-[0.85rem] font-[400] text-black">
                              ${((p.productId?.price ?? 0) * p.quantity).toFixed(2)}
                            </span>
                          </div>
                        </div>
                      ))}
                    </div>

                    {/* Shipping + Total */}
                    <div className="flex items-start justify-between gap-[2rem]">
                      <div className="flex flex-col gap-[0.3rem]">
                        <span className="text-[0.7rem] uppercase tracking-[0.15rem] text-black/30 font-[300]">
                          Shipped To
                        </span>
                        <span className="text-[0.82rem] text-black/60 font-[300] leading-[1.5]">
                          {order.shippingAddress.street}, {order.shippingAddress.city},{" "}
                          {order.shippingAddress.state} {order.shippingAddress.postalCode},{" "}
                          {order.shippingAddress.country}
                        </span>
                      </div>

                      <div className="flex flex-col items-end gap-[0.3rem]">
                        <span className="text-[0.7rem] uppercase tracking-[0.15rem] text-black/30 font-[300]">
                          Total
                        </span>
                        <span className="text-[1.1rem] font-[600] text-black">
                          ${order.totalAmount.toFixed(2)}
                        </span>
                      </div>
                    </div>

                  </div>
                )}
              </div>
            ))}
          </div>
        )}

        {/* Subtotal bar — matches cart */}
        {!loading && orders.length > 0 && (
          <div className="flex items-center justify-between pt-[1rem] border-t border-black/10">
            <span className="text-[0.75rem] uppercase tracking-[0.2rem] text-black/40 font-[300]">
              Total Spent
            </span>
            <span className="text-[1rem] font-[600] text-black">
              ${orders.reduce((sum, o) => sum + o.totalAmount, 0).toFixed(2)}
            </span>
          </div>
        )}

      </div>
    </section>
  );
}