import { NextFunction, Request, Response } from "express";
import { get } from "lodash";
import { reIssueAccessToken } from "../../services/session";
import { verifyJwt } from "../../utils/jwt.utils";
import logger from "../../utils/logger";

const deserializeUser = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const accessToken = get(req, "headers.authorization", "").replace(
    /^Bearer\s/,
    ""
  );

  const refreshToken = get(req, "headers.x-refresh", "");

  if (!accessToken) {
    return next();
  }

  const { decoded, expired } = verifyJwt(accessToken);

  logger.info("Token verifyed");

  if (decoded) {
    res.locals.user = decoded;
    return next();
  }

  if (expired && refreshToken) {
    logger.info("Token expired, trying to generate new...");

    const newAccessToken = await reIssueAccessToken({ refreshToken });

    if (newAccessToken) {
      res.setHeader("x-access-token", newAccessToken);

      const result = verifyJwt(newAccessToken);
      res.locals.user = result.decoded;

      return next();
    }
  }

  return next();
};

export default deserializeUser;
