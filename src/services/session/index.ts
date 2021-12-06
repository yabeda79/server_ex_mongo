import { FilterQuery } from "mongoose";
import SessionModel from "../../models/session";
import { ISessionModel } from "../../models/session/types";
import logger from "../../utils/logger";

export const createUserSession = async (userId: string, userAgent: string) => {
  const session = await SessionModel.create({ user: userId, userAgent });

  return session.toJSON();
};

export const findUserSessions = async (query: FilterQuery<ISessionModel>) => {
  logger.info("Finding sessions...");

  const sessions = await SessionModel.find({ query }).lean();

  logger.info("Send response");

  return sessions;
};
