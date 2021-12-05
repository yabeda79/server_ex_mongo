import { Express, Request, Response } from "express";

const authRouter = (app: Express) => {
  app.get("/healthcheck", (req: Request, res: Response) => {
    res.sendStatus(200);
  });
};

export default authRouter;
