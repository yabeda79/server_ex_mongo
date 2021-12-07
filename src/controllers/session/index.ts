import { Request, Response } from "express";
import { createUserSession, findUserSessions } from "../../services/session";
import { validatePassword } from "../../services/user";
import { signJwt } from "../../utils/jwt.utils";
import config from "config";
import logger from "../../utils/logger";

export const createUserSessionHandler = async (req: Request, res: Response) => {
  try {
    logger.info("createUserSessionHandler");

    const { email, password } = req.body;

    const user = await validatePassword(email, password);

    if (!user) {
      logger.error("Invalid email or password");
      return res.status(401).send("Invalid email or password");
    }

    logger.info("User created");

    const session = await createUserSession(
      user._id as unknown as string,
      req.get("user-agent") || ""
    );

    logger.info("Session created");

    const accessTokenTtl = config.get<string>("accessTokenTtl");

    const accessToken = signJwt(
      { ...user, session: session._id },
      { expiresIn: accessTokenTtl }
    );

    logger.info("Access token created");

    const refreshTokenTtl = config.get<string>("refreshTokenTtl");

    const refreshToken = signJwt(
      { ...user, session: session._id },
      { expiresIn: refreshTokenTtl }
    );

    logger.info("Refresh token created");

    return res.send({ accessToken, refreshToken });
  } catch (e) {
    logger.error((e as Error).message);
    return res.status(500).send("Something went wrong, try again later");
  }
};

export const getUserSessionsHandler = async (req: Request, res: Response) => {
  try {
    logger.info("getUserSessionsHandler");

    const userId = res.locals.user._id;

    const sessions = await findUserSessions({ user: userId, valid: true });

    return res.send(sessions);
  } catch (e) {
    logger.error((e as Error).message);
    return res.status(401).send("Can not find sessions");
  }
};
