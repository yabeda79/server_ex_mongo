import mongoose from "mongoose";
import config from "config";
import logger from "./logger";

const connect = async () => {
  const dbUri = config.get<string>("dbUri");

  try {
    await mongoose.connect(dbUri);
    logger.info("connected to DB");
  } catch (e) {
    logger.error("Could not connect to DB");
    logger.error((e as Error).message);
    process.exit(1);
  }
};

export default connect;
