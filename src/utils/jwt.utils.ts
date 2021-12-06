import jwt from "jsonwebtoken";
import config from "config";

const privateKey = config.get<string>("privateKey");

const publicKey = config.get<string>("publicKey");

export const signJwt = (object: Object, options?: jwt.SignOptions) => {
  return jwt.sign(object, privateKey, {
    ...(options || undefined),
    algorithm: "RS256",
  });
};

export const verifyJwt = (token: string) => {
  try {
    const decoded = jwt.verify(token, publicKey);
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
