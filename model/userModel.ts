import { Schema, model } from "mongoose";
import { iUserData } from "../utils/interfaces";
import { FOOD } from "../utils/enums";

const userModel = new Schema<iUserData>(
  {
    email: {
      type: String,
      required: true,
      unique: true,
    },
    password: {
      type: String,
    },
    token: {
      type: String,
    },
    status: {
      type: String,
    },
    verify: {
      type: Boolean,
      default: false,
    },
  },
  { timestamps: true }
);

export default model<iUserData>("users", userModel);
