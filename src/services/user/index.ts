import { DocumentDefinition } from "mongoose";
import UserModel from "../../models/user";
import { IUserModel } from "../../models/user/types";

export const createUser = async (
  input: DocumentDefinition<
    Omit<
      IUserModel,
      "createdAt" | "updatedAt" | "passwordConfirmation" | "comparePassword"
    >
  >
) => {
  try {
    return await UserModel.create(input);
  } catch (e) {
    throw new Error((e as Error).message);
  }
};
