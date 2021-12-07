import { Express, Request, Response } from "express";
import {
  createUserSessionHandler,
  getUserSessionsHandler,
} from "../../controllers/session";
import { createUserHandler } from "../../controllers/user";
import deserializeUser from "../../middlewares/deserializeUser";
import validateResource from "../../middlewares/validateResource";
import { createSessionSchema } from "../../schemas/session";
import { createUserSchema } from "../../schemas/user";

const authRouter = (app: Express) => {
  app.get("/healthcheck", (req: Request, res: Response) => {
    res.sendStatus(200);
  });

  app.post("/api/users", validateResource(createUserSchema), createUserHandler);

  app.post(
    "/api/sessions",
    validateResource(createSessionSchema),
    createUserSessionHandler
  );

  app.get("/api/sessions", deserializeUser, getUserSessionsHandler);
};

export default authRouter;
