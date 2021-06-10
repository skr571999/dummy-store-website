import express from "express";
import mongoose from "mongoose";
import cors from "cors";

import UserRoutes from "./apps/user/routes";
import ProductRoutes from "./apps/product/routes";
import CartRoutes from "./apps/cart/routes";
import dotenv from "dotenv";
import { MONGODB_URL } from "./constants";

dotenv.config();
const app = express();

const PORT = process.env.PORT || 8000;

const connectDB = async () => {
  try {
    const con = await mongoose.connect(MONGODB_URL, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useFindAndModify: false,
      // serverSelectionTimeoutMS: 2000,
    });
    console.log(`⚡️[db] : Connected to '${con.connection.name}' DB`);
  } catch (err) {
    console.log("DB Error : ", err.message);
    process.exit();
  }
};

connectDB();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

app.get("/", (req, res) => res.send("Express + TypeScript Server"));
app.use("/user", UserRoutes);
app.use("/product", ProductRoutes);
app.use("/cart", CartRoutes);

app.use("/uploads", express.static("uploads"));

app.use((req, res) => {
  res.status(404).send({
    message: "Invalid Path. This path does not Exists",
  });
});

app.listen(PORT, () => {
  console.log(`⚡️[NODE_ENV]: ${process.env.NODE_ENV}`);
  console.log(`⚡️[server]: Running at ${PORT}`);
});
