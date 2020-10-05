import { Schema, model } from "mongoose";

const EMAIL_REGEX = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

const UserSchema = new Schema(
    {
        fullName: {
            type: String,
            required: true,
            minlength: 5,
            trim: true,
        },
        emailId: {
            type: String,
            required: true,
            trim: true,
            validate: EMAIL_REGEX,
        },
        storeId: String,
        mobileNo: String,
        gender: String,
        city: String,
        country: String,
        password: {
            type: String,
            required: true,
            trim: true,
            // minlength: 6,
        },
    },
    { timestamps: true }
);

export const User = model("User", UserSchema);
