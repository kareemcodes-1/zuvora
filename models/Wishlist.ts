import { Schema, model, Document, models } from "mongoose";
import { Wishlist } from "../types";


export interface WishlistDocument extends Wishlist, Document {}

const wishlistSchema = new Schema<WishlistDocument>({
  productId: { 
         type: Schema.Types.ObjectId, 
         ref: 'Product', 
         required: true 
    },
    userId: { 
        type: Schema.Types.ObjectId, 
        ref: 'User', 
        required: true 
    }, 
}, { timestamps: true });

export default models.Wishlist || model<Wishlist>("Wishlist", wishlistSchema);