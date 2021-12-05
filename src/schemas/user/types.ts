import { TypeOf } from "zod";
import { createUserSchema } from ".";

export type TCreateUserInput = Omit<
  TypeOf<typeof createUserSchema>,
  "body.passwordConfirmation"
>;
