import { Schema, model, Document, models } from "mongoose";
import { Order } from "../types";


export interface OrderDocument extends Order, Document {}

const orderSchema = new Schema<OrderDocument>({
  userId: {
        type: Schema.Types.ObjectId,
        ref: 'User',
        required: true
    },
    products: [
        {
          productId: {
            type: Schema.Types.ObjectId,
            ref: "Product",
          },
          quantity: Number,
        },
      ],
    //   paymentInfo: {
    //     id: { type: String },
    //     gateway: {type: String},
    //     status: { type: String },
    //   },
    //   shippingAddress: {
    //     street: String,
    //     city: String,
    //     state: String,
    //     postalCode: String,
    //     country: String,
    //   },
      totalAmount: Number,
    //   createdAt: {
    //     type: Date,
    //     default: Date.now,
    //   },
}, { timestamps: true });

export default models.Order || model<Order>("Order", orderSchema);