import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
  {
    email: {
      type: String,
      required: true,
      unique: true,
    },
    name: {
      type: String,
      required: false,
    },
    password: {
      type: String,
      required: true,
    },
    aadhaar: {
      type: String,
      required: false,
    },
    pan: {
      type: String,
      required: false,
    },
    
  },
  { timestamps: true }
);

const User = mongoose.model("User", userSchema);

export default User;
