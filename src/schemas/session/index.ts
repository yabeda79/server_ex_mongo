import { object, string } from "zod";

export const createSessionSchema = object({
  body: object({
    email: string({ required_error: "Email is required" }).email({
      message: "Email is not valid",
    }),
    password: string({ required_error: "Password is required" }).min(8, {
      message: "Password must contain at least 8 symbols",
    }),
  }),
});
