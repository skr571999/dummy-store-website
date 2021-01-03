import express from "express";
import mongoose from "mongoose";
import cors from "cors";

import UserRoutes from "./user/routes";
import ProductRoutes from "./product/routes";
import CartRoutes from "./cart/routes";

const app = express();

const PORT = process.env.PORT || 8000;
const DB_URL = process.env.DB_URL || "mongodb://localhost:27017/test";

const connectDB = async () => {
  try {
    const con = await mongoose.connect(DB_URL, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useFindAndModify: false,
      // serverSelectionTimeoutMS: 2000,
    });
    console.log(`Connected to '${con.connection.name}' DB`);
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
  console.log(`⚡️[server]: Server is running at https://localhost:${PORT}`);
});
