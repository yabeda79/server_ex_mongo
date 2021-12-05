import { Express, Request, Response } from "express";
import { createUserHandler } from "../../controllers/user";
import validateResource from "../../middlewares/validateResource";
import { createUserSchema } from "../../schemas/user";

const authRouter = (app: Express) => {
  app.get("/healthcheck", (req: Request, res: Response) => {
    res.sendStatus(200);
  });

  app.post("/api/users", validateResource(createUserSchema), createUserHandler);
};

export default authRouter;
