import { ObjectId } from "mongoose";
import { cartModel } from "../models/cartModel";
import productModel from "../models/productModel";



interface CreateCartForUser {
    userId: ObjectId | string;
}


const createCartForUser = async ({ userId }: CreateCartForUser) => {
    const cart = await cartModel.create({ userId, totalAmount:0 });
    await cart.save();
    return cart;
};

interface GetActiveCartForUser {
    userId: string;
}

export const getActiveCartForUser = async ({ userId }: GetActiveCartForUser) => {
    let cart = await cartModel.findOne({ userId, status: "active" });
    if (!cart) {
        cart = await createCartForUser({ userId });
    }
    return cart;
}

interface AddItemToCart {
    userId: string;
    productId: any;
    quantity: number;
}
export const addItemToCart = async ({ userId, productId, quantity }: AddItemToCart) => {
    const cart = await getActiveCartForUser({ userId });

    const existInCart = cart.items.find((p) => p.product.toString() === productId); 
    if (existInCart) {
        const product = await productModel.findById(productId);
        if (!product) {
            return { data: "Product not found", statusCode: 404 };
        }
        if (product.stock < existInCart.quantity + quantity) {
            return { data: "Not enough stock", statusCode: 400 };
        }
        existInCart.quantity += quantity;
        cart.totalAmount += product.price * quantity;
        await cart.save();
        return { data: cart, statusCode: 200 };
    } 
   
    //Fetch the product
    const product = await productModel.findById(productId);
    if (!product) {
        return { data: "Product not found", statusCode: 404 };
    }
    if (product.stock < quantity) {
        return { data: "Not enough stock", statusCode: 400 };
    }
    
    //Add the product to the cart
    cart.items.push({
        product: productId,
        quantity,
        unitPrice: product.price,
    });
    //Update the total amount   
    cart.totalAmount += product.price * quantity;
    await cart.save();
    return { data: cart, statusCode: 200 };


}