import mongoose from "mongoose";
import { IProductModel } from "./types";
import { customAlphabet } from "nanoid";

const nanoId = customAlphabet("abcdefghijklmnopqrstuvwxyz0123456789", 16);

const productSchema = new mongoose.Schema(
  {
    productId: {
      type: String,
      required: true,
      unique: true,
      default: () => `product_${nanoId()}`,
    },
    user: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
    title: { type: String, required: true },
    description: { type: String, required: true },
    price: { type: Number, required: true },
    image: { type: String, required: true },
  },
  {
    timestamps: true,
  }
);

const ProductModel = mongoose.model<IProductModel>("Product", productSchema);

export default ProductModel;
