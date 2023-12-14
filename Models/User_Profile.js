import { Schema, model } from "mongoose";
import mongoose from 'mongoose';

const UserProfileInfoSchema = new Schema({
  email: {
    type: String,
    required: true,
    unique: true,
  },
  firstName: {
    type: String,
    required: true,
  },
  lastName: {
    type: String,
    required: true,
  },
  phone: {
    type: String,
    required: true,
  },
  dob: { type: Date, required: true },
  gender: { type: String, required: true },
  address:{type:String,required:true},
  createdDate: {
    type: Date,
    default: Date.now,
  },
  RegisterInfo: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'RegisterInfo'
  }
});

export default model("UserProfileInfo", UserProfileInfoSchema);
