import mongoose, { Schema } from "mongoose";

export interface IProduct extends Document {
    title: string;
    image: string;
    price: number;
    stock: number;
}

const productSchema = new Schema<IProduct>({
    title: { type: String, required: true },
    image: { type: String, required: true },
    price: { type: Number, required: true },
    stock: { type: Number, required: true }
});

const productModel = mongoose.model<IProduct>('Product', productSchema);
export  default productModel;
// In the above code, we have created a product model with the title, image, price, and stock fields. We have also exported the product model.