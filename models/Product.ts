import { Schema, model, Document, models, Types } from "mongoose";
import { Product } from "../types";

export interface ProductDocument extends Product, Document {}

const productSchema = new Schema<ProductDocument>({
  name: {
        type: Schema.Types.String,
        required: true,
    },
    collectionId: { 
        type: Schema.Types.ObjectId, 
        ref: 'Collection', required: true 
    },
    userId: { 
        type: Schema.Types.ObjectId, 
        ref: 'User', required: true 
    },
    description: {
        type: Schema.Types.String,
    },
    price: {
        type: Schema.Types.Number,
        required: true,
    },
    sizes: [{type: Schema.Types.String}],
    inStock:{
        type: Schema.Types.Boolean,
        required: true,
        default: true,
    },
    images: [{ type: Schema.Types.String }], 
}, { timestamps: true });

export default models.Product || model<Product>("Product", productSchema);