import { TypeOf } from "zod";
import {
  createProductSchema,
  deleteProductSchema,
  getProductSchema,
  updateProductSchema,
} from "./";

export type TCreateProductSchema = TypeOf<typeof createProductSchema>;

export type TUpdateProductSchema = TypeOf<typeof updateProductSchema>;

export type TGetProductSchema = TypeOf<typeof getProductSchema>;

export type TDeleteProductSchema = TypeOf<typeof deleteProductSchema>;
