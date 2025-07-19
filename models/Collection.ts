import { Schema, model, Document, models, Types } from "mongoose";
import { Collection } from "../types";

export interface CollectionDocument extends Collection, Document {}

const collectionSchema = new Schema<CollectionDocument>({
  name: {
        type: Schema.Types.String,
        required: true,
    },
    userId: { 
        type: Schema.Types.ObjectId, 
        ref: 'User', required: true 
    },
    description: {
        type: Schema.Types.String,
    },
    images: [{ type: Schema.Types.String }], 
}, { timestamps: true });

export default models.Collection || model<Collection>("Collection", collectionSchema);