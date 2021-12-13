import mongoose from "mongoose";
import { IUserModel } from "../user/types";

export interface IProductModel extends mongoose.Document {
  user: IUserModel["_id"];
  title: string;
  description: string;
  price: number;
  image: string;
  createdAt: Date;
  updatedAt: Date;
}
