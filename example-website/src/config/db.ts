import mongoose from "mongoose";
import { MONGO_URL } from "./env";

mongoose
  .connect(MONGO_URL)
  .then(() => {
    console.log("Successfully connected to MongoDB.");
  })
  .catch((err: Error) => {
    console.error("Error connecting to MongoDB: ", err);
    process.exit(1);
  });
