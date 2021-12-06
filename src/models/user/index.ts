import mongoose from "mongoose";
import bcrypt from "bcrypt";
import config from "config";
import { IUserModel } from "./types";
import logger from "../../utils/logger";

const userSchema = new mongoose.Schema(
  {
    email: { type: String, required: true, unique: true },
    username: { type: String, required: true, unique: true },
    password: { type: String, required: true },
  },
  {
    timestamps: true,
  }
);

userSchema.pre("save", async function (next) {
  const self = this as IUserModel;

  logger.info(this);

  if (!self.isModified("password")) {
    return next();
  }

  const saltWorkFactor = config.get<number>("saltWorkFactor");

  const salt = await bcrypt.genSalt(saltWorkFactor);

  const hash = await bcrypt.hash(self.password, salt);

  self.password = hash;

  return next();
});

userSchema.methods.comparePassword = async function (
  candidatePassword: string
) {
  const self = this as IUserModel;

  return bcrypt.compare(candidatePassword, self.password).catch((e) => false);
};

const UserModel = mongoose.model<IUserModel>("User", userSchema);

export default UserModel;
