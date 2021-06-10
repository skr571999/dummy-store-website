import { Schema, model, Types, Document } from "mongoose";

interface Product {
  product: string;
  quantity: number;
}
interface Cart extends Document {
  user: any;
  products: Product[];
}

const ProductInfoSchema = new Schema({
  product: {
    type: Types.ObjectId,
    ref: "Product",
  },
  quantity: Number,
});

const CartSchema: Schema = new Schema(
  {
    user: {
      type: Types.ObjectId,
      ref: "User",
      required: true,
    },
    products: [ProductInfoSchema],
  },
  { timestamps: true }
);

export const Cart = model<Cart>("Cart", CartSchema);
