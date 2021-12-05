import mongoose from "mongoose";
import bcrypt from "bcrypt";
import config from "config";
import { IUserModel } from "./types";

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

userSchema.pre("save", async (next) => {
  const self = this as IUserModel;

  if (!self.isModified("password")) {
    return next();
  }

  const saltWorkFactor = config.get<number>("saltWorkFactor");

  const salt = await bcrypt.genSalt(saltWorkFactor);

  const hash = await bcrypt.hash(self.password, salt);

  self.password = hash;

  return next();
});

userSchema.methods.comparePassword = async (candidatePassword: string) => {
  const self = this as IUserModel;

  return bcrypt.compare(candidatePassword, self.password).catch((e) => false);
};

const UserModel = mongoose.model("User", userSchema);

export default UserModel;
