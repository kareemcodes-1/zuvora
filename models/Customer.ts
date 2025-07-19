import { Schema, model, Document, models } from "mongoose";
import { Customer } from "../types/index";


export interface CustomerDocument extends Customer, Document {}

const customerSchema = new Schema<CustomerDocument>({
  userId: {
        type: Schema.Types.ObjectId, 
        ref: 'User',
        required: true
    },
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    country: {
        type: String
    }
}, { timestamps: true });

export default models.Customer || model<Customer>("Customer", customerSchema);