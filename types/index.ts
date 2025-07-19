import { Schema, model, Document, models, Types } from "mongoose";

export type Collection = {
  _id: Types.ObjectId;
  name: string;
  userId: Types.ObjectId;
  description: string;
  images: Array<string>;
}

export type Product = {
 _id: Types.ObjectId;
  name: string;
  collectionId: Types.ObjectId;
  userId: Types.ObjectId;
  description: string;
  price: number;
  sizes: Array<string>;
  inStock: boolean;
  images: Array<string>;
}

export type Order = {
    // _id?: string;
    userId: User;
    products: {
        productId: Product;
        quantity: number;
    }[];    
    totalAmount: number;
    createdAt: string;
};

export type Wishlist = {
    userId: User;
    productId: Product;
}

export type User = {
    // _id?: string,
    name: string,
    email: string,
    password: string;
}

export type Cart = {
    product: Product;
    quantity: number;
}