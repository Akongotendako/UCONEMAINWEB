import express from "express";
import {
  deleteAllUsers,
  fetchProfile,
  signIn,
  signUp,
  updateProfile,
} from "../controllers/user.controller.js";
import multer from "multer";

const router = express.Router();

const storage = multer.memoryStorage();
const upload = multer({ storage: storage });

router.post("/", signUp);
router.post("/sign-in", signIn);
router.post("/:id", upload.single("profilePic"), updateProfile);
router.get("/:id", fetchProfile);
router.delete("/", deleteAllUsers);

export default router;
