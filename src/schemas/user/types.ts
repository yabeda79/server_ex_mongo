import { TypeOf } from "zod";
import { createUserSchema } from "../../schemas/user";

export type TCreateUserInput = Omit<
  TypeOf<typeof createUserSchema>,
  "body.passwordConfirmation"
>;
