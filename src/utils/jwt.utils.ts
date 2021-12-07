import jwt from "jsonwebtoken";
import config from "config";
import logger from "../utils/logger";

const privateKey = config.get<string>("privateKey");

const publicKey = config.get<string>("publicKey");

export const signJwt = (object: Object, options?: jwt.SignOptions) => {
  logger.info("Creating access token");
  return jwt.sign(object, privateKey, {
    ...(options || undefined),
    algorithm: "RS256",
  });
};

export const verifyJwt = (token: string) => {
  try {
    logger.info("Verifying token");

    const decoded = jwt.verify(token, publicKey, { algorithms: ["RS256"] });
    logger.info("Token verifyed");
    return {
      valid: true,
      expired: false,
      decoded,
    };
  } catch (e) {
    return {
      valid: false,
      expired: "jwt expired",
      decoded: null,
    };
  }
};
