import { omit } from "lodash";
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
    const user = await UserModel.create(input);

    return omit(user.toJSON(), "password");
  } catch (e) {
    throw new Error((e as Error).message);
  }
};

export const validatePassword = async (email: string, password: string) => {
  try {
    const user = await UserModel.findOne({ email });

    if (!user) {
      return false;
    }

    const isValid = await user.comparePassword(password);

    if (!isValid) {
      return false;
    }

    return omit(user.toJSON(), "password");
  } catch (e) {
    throw new Error((e as Error).message);
  }
};
