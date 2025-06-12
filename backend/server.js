
import express from 'express';
import dotenv from 'dotenv';
import { connectDB } from './config/db.js';
import { mongo } from 'mongoose';
dotenv.config();

const app = express();

app.use(express.json()); // allows us to accept JSON data in req.body

app.use("/api/products",productRoutes)

app.listen(5000, () => {
  connectDB();
  console.log('Server is running on port 5000');
});