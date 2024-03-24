import dotenv from "dotenv";

type Env = {
  MONGO_URL: string;
};

dotenv.config();
export const { MONGO_URL = "mongodb://localhost:27017/" } = process.env;
