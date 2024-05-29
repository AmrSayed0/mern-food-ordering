import express from "express";
import myUserController from "../controllers/myUserController";
import { jwtCheck } from "../middleware/auth";

const router = express.Router();

// /api/my/user
router.post("/", jwtCheck, myUserController.createCurrentUser);

export default router;
