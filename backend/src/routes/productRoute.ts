import express from "express";
import { getAllProducts } from "../services/productService";

const router = express.Router();

router.get("/", async (req, res) => {
    try {
        const products = await getAllProducts();
        res.status(200).json({ products });
    } catch (err) {
        res.status(500).send(err);
    }

});

export default router;

/* In the above code, we have created a product route that fetches all the products 
from the database and sends them as a response. We have also exported the product route. */