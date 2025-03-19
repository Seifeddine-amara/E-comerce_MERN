import mongoose, { Schema, ObjectId, Document } from "mongoose";

export interface IOrderItem {
    productTitle: string;
    productImage: string;
    unitPrice: number;
    quantity: number;
}

export interface IOrder extends Document {
    userId: ObjectId | string;
    items: IOrderItem[];
    totalAmount: number;
    adress: string;
}

const OrderItemSchema = new Schema<IOrderItem>({
    productTitle: { type: String, required: true },
    productImage: { type: String, required: true },
    unitPrice: { type: Number, required: true },
    quantity: { type: Number, required: true }
});

const orderSchema = new Schema<IOrder>({
    userId: { type: Schema.Types.ObjectId, ref: "User", required: true },
    items: [OrderItemSchema],
    totalAmount: { type: Number, required: true },
    adress: { type: String, required: true }
}, { timestamps: true });

export const orderModel = mongoose.model<IOrder & Document>("Order", orderSchema);
