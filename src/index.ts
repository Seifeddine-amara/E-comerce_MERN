import express from "express";
import mongoose from "mongoose";
import userRoute from "./routes/userRoute";


const app = express();
const PORT = 3000;

mongoose
  .connect("mongodb://localhost:27017/ecommerce")
  .then(() => console.log("Connected to MongoDB"))
  .catch((err) => console.log("Failed to connect!",err));

app.use(express.json());
app.use('/user', userRoute);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
