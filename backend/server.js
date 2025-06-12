
import express from 'express';
import dotenv from 'dotenv';
import { connectDB } from './config/db.js';
import productRoutes from "./routes/product.js";
import { mongo } from 'mongoose';
dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

app.use(express.json()); // allows us to accept JSON data in req.body

app.use("/api/products",productRoutes)

app.listen(PORT, () => {
  connectDB();
  console.log('Server is running on port 5000');
});