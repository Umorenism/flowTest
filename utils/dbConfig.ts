import env from "dotenv";
import { connect } from "mongoose";
env.config();

export const dbConfig = async () => {
  try {
    await connect(process.env.DATABASE_URL!)
      .then(() => {
        console.log("db sucessfully activated ....🌼🌼🌼");
      })
      .catch(() => console.error());
  } catch (error) {
    return error;
  }
};
