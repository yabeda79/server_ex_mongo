import mongoose from "mongoose";
import { IUserModel } from "../user/types";

export interface ISessionModel extends mongoose.Document {
  user: IUserModel["_id"];
  valid: boolean;
  userAgent: string;
  createdAt: Date;
  updatedAt: Date;
}
