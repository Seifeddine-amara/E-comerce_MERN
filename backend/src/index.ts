import dotenv from 'dotenv'
import express from "express";
import mongoose from "mongoose";
import userRoute from "./routes/userRoute";
import { seedInitialProducts } from "./services/productService";
import productRoute from "./routes/productRoute";
import cartRoute from "./routes/cartRoute";
import cors from "cors";

dotenv.config();
const app = express();
app.use(cors());

mongoose
  .connect(process.env.DATABASE_URL || "")
  .then(() => console.log("Connected to MongoDB"))
  .catch((err) => console.log("Failed to connect!", err));

// seed the products to database
seedInitialProducts();


app.use(express.json());
app.use('/user', userRoute);
app.use('/product', productRoute);
app.use('/cart', cartRoute);

app.listen(process.env.PORT, () => {
  console.log(`Server is running at http://localhost:${process.env.PORT}`);
});
