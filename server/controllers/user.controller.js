import { response } from "express";
import User from "../models/user.model.js";
import cloudinary from "../config/cloudinary.js";
import { Readable } from "stream";

// sign up
export const signUp = async (req, res) => {
  try {
    const { email, password, confirmPassword, role, profile } = req.body;

    console.log(`email is ${email}`);

    const isUserExist = await User.findOne({ email: email });

    if (!email.includes("@gmail.com")) {
      return res.status(400).json({
        message: "Missing '@gmail.com' in your email",
        success: false,
        error: null,
        response: null,
      });
    }

    if (!email || !password || !confirmPassword || !role) {
      return res.status(400).json({
        message: "All fields must not be empty",
        success: false,
        error: null,
        response: null,
      });
    }

    if (password !== confirmPassword) {
      return res.status(400).json({
        message: "Password and confirm password don't match",
        success: false,
        error: null,
        response: null,
      });
    }

    if (isUserExist) {
      return res.status(409).json({
        message: "Email is already taken",
        success: false,
        error: null,
        response: null,
      });
    }

    const newUser = new User({
      email,
      password,
      confirmPassword,
      role,
      profile,
    });

    const response = await newUser.save();

    return res.status(200).json({
      message: "You have successfully sign up",
      success: true,
      error: null,
      response: response,
    });
  } catch (error) {
    return res.status(500).json({
      message: "Internal server error",
      success: false,
      error: error.message,
      response: null,
    });
  }
};

// sign in
export const signIn = async (req, res) => {
  try {
    const { email, password } = req.body;

    const isUserExist = await User.findOne({ email: email });

    if (!email.includes("@gmail.com")) {
      return res.status(400).json({
        message: "Missing '@gmail.com' in your email",
        success: false,
        error: null,
        response: null,
      });
    }

    if (!email || !password) {
      return res.status(400).json({
        message: "All fields must not be empty",
        success: false,
        error: null,
        response: null,
      });
    }
    if (!isUserExist) {
      return res.status(404).json({
        message: "Email doesn't exist",
        success: false,
        error: null,
        response: null,
      });
    }

    if (isUserExist.password !== password) {
      return res.status(404).json({
        message: "password doesn't match",
        success: false,
        error: null,
        response: null,
      });
    }

    return res.status(200).json({
      message: "You have successfully sign in",
      success: true,
      error: null,
      response: isUserExist,
    });
  } catch (error) {
    return res.status(500).json({
      message: "Internal server error",
      success: false,
      error: error.message,
      response: null,
    });
  }
};

export const fetchProfile = async (req, res) => {
  try {
    const { id } = req.params;

    const user = await User.findById(id);

    if (!user) {
      return res.status(500).json({
        message: "User not found",
        success: false,
        error: null,
        response: null,
      });
    }

    return res.status(200).json({
      message: "User found",
      success: true,
      error: null,
      response: user,
    });
  } catch (error) {
    res.status(500).json({
      message: "Internal server error",
      success: false,
      error: error.message,
      response: null,
    });
  }
};

export const deleteAllUsers = async (req, res) => {
  await User.deleteMany({});

  return res.status(200).json({
    message: "You have successfully sign up",
    success: true,
    error: null,
    response: response,
  });
};

export const updateProfile = async (req, res) => {
  try {
    const { id } = req.params;
    const { email, password, firstName, lastName, age, phoneNumber } = req.body;

    const user = await User.findById(id);

    let newImage = user.profile.profilePic || {};
    if (req.file) {
      try {
        const result = await new Promise((resolve, reject) => {
          const stream = cloudinary.uploader.upload_stream(
            { folder: "UCONEWEB", resource_type: "auto" },
            (error, result) => {
              if (error) return reject(error);
              resolve(result);
            }
          );

          const readableStream = new Readable();
          readableStream.push(req.file.buffer);
          readableStream.push(null);
          readableStream.pipe(stream);
        });

        newImage = {
          url: result.secure_url,
          publicId: result.public_id,
        };
      } catch (uploadError) {
        return res.status(500).json({
          message: "Image upload failed",
          success: false,
          error: uploadError.message,
          response: null,
        });
      }
    }

    user.email = email;
    user.password = password;
    user.profile.firstName = firstName;
    user.profile.lastName = lastName;
    user.profile.age = age;
    user.profile.profilePic = newImage;
    user.profile.phoneNumber = phoneNumber;

    const response = await user.save();

    return res.status(200).json({
      message: "Profile updated successfully",
      success: true,
      error: null,
      response: response,
    });
  } catch (error) {
    return res.status(500).json({
      message: "Internal server error",
      success: false,
      error: error.message,
      response: null,
    });
  }
};
