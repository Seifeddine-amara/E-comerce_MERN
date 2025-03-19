import express from "express";
import mongoose from "mongoose";
import userRoute from "./routes/userRoute";
import { seedInitialProducts } from "./services/productService";
import productRoute from "./routes/productRoute";
import cartRoute from "./routes/cartRoute";


const app = express();
const PORT = 3001;

mongoose
  .connect("mongodb://localhost:27017/ecommerce")
  .then(() => console.log("Connected to MongoDB"))
  .catch((err) => console.log("Failed to connect!",err));

// seed the products to database
seedInitialProducts();


app.use(express.json());
app.use('/user', userRoute);
app.use('/product', productRoute);
app.use('/cart', cartRoute);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
