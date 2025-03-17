import express from "express";
import { getAllProducts } from "../services/productService";

const router = express.Router();

router.get("/", async (req, res) => {
    const products = await getAllProducts();
    res.status(200).json({ products });
    });

export default router;
// In the above code, we have created a product route that fetches all the products from the database and sends them as a response. We have also exported the product route.