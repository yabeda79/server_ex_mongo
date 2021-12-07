import { get } from "lodash";
import { FilterQuery, UpdateQuery } from "mongoose";
import SessionModel from "../../models/session";
import { ISessionModel } from "../../models/session/types";
import { signJwt, verifyJwt } from "../../utils/jwt.utils";
import logger from "../../utils/logger";
import { findUser } from "../user";
import config from "config";

const accessTokenTtl = config.get<string>("accessTokenTtl");

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

export const updateUserSessions = async (
  query: FilterQuery<ISessionModel>,
  update: UpdateQuery<ISessionModel>
) => {
  logger.info("Updaring sesions...");

  return SessionModel.updateOne(query, update);
};

export const reIssueAccessToken = async ({
  refreshToken,
}: {
  refreshToken: string;
}) => {
  const { decoded } = verifyJwt(refreshToken);
  const sessionId = get(decoded, "session");

  if (!decoded || !sessionId) {
    return false;
  }

  const session = await SessionModel.findById(sessionId);

  if (!session || !session.valid) {
    return false;
  }

  const user = await findUser({ _id: session.user });

  if (!user) {
    return false;
  }

  const accessToken = signJwt(
    { ...user, session: session._id },
    { expiresIn: accessTokenTtl }
  );

  return accessToken;
};
