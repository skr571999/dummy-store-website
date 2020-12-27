import { Schema, model } from "mongoose";

const ProductSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
      trim: true,
    },
    price: String,
    brand: String,
    category: String,
    description: String,
    images: [Object],
  },
  { timestamps: true }
);

export const Product = model("Product", ProductSchema);
