import express from "express";
import myUserController from "../controllers/myUserController";
import { jwtCheck, jwtParse } from "../middleware/auth";
import { validateMyUserRequest } from "../middleware/validation";

const router = express.Router();

router.get("/", jwtCheck, jwtParse, myUserController.getCurrentUser);
router.post("/", jwtCheck, myUserController.createCurrentUser);
router.put(
  "/",
  jwtCheck, // 1. check if the token is valid
  jwtParse, // 2. get the user id from the token
  validateMyUserRequest, // 3. validate the request body
  myUserController.updateCurrentUser // 4. update the user
);

export default router;
