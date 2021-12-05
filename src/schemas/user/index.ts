import { object, string } from "zod";

export const createUserSchema = object({
  body: object({
    username: string({
      required_error: "Username is a required field",
    }),
    password: string({
      required_error: "Password is a required field",
    }).min(8, "Password requres at least 8 symbols"),
    passwordConfirmation: string({
      required_error: "Confirm password is a required field",
    }),
    email: string({
      required_error: "Email is required",
    }).email("Not a valid email"),
  }).refine((data) => data.password === data.passwordConfirmation, {
    message: "Passwords do not match",
    path: ["passwordConfirmation"],
  }),
});
