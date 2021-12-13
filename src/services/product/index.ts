import {
  DocumentDefinition,
  FilterQuery,
  QueryOptions,
  UpdateQuery,
} from "mongoose";
import ProductModel from "../../models/product";
import { IProductModel } from "../../models/product/types";

export const createProduct = async (
  input: DocumentDefinition<Omit<IProductModel, "createdAt" | "updatedAt">>
) => {
  return ProductModel.create(input);
};

export const findProduct = (
  query: FilterQuery<IProductModel>,
  options: QueryOptions = { lean: true }
) => {
  return ProductModel.findOne(query, {}, options);
};

export const findAndUpdateProduct = (
  query: FilterQuery<IProductModel>,
  update: UpdateQuery<IProductModel>,
  options: QueryOptions
) => {
  return ProductModel.findOneAndUpdate(query, update, options);
};

export const deleteProduct = (query: FilterQuery<IProductModel>) => {
  return ProductModel.deleteOne(query);
};
