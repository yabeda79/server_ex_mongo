import { Request, Response } from "express";
import { TCreateUserInput } from "../../schemas/user/types";
import { createUser } from "../../services/user";
import logger from "../../utils/logger";
import { omit } from "lodash";
import { DocumentDefinition } from "mongoose";
import { IUserModel } from "../../models/user/types";

export const createUserHandler = async (
  req: Request<{}, {}, TCreateUserInput["body"]>,
  res: Response
) => {
  try {
    const body = req.body;

    // TODO : resolve ts

    const user = await createUser(
      body as DocumentDefinition<
        Omit<IUserModel, "createdAt" | "updatedAt" | "passwordConfirmation">
      >
    );

    return res.send(omit(user.toJSON(), "password"));
  } catch (e) {
    logger.error(e);
    return res.status(409).send(e.message);
  }
};
