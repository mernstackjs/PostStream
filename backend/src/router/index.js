import { Router } from "express";
import authRouter from "./api/authRouter.js";
import userRouter from "./api/userRouter.js";
import { authentication } from "../../middleware/authentication.js";

const router = Router();

router.use("/auth", authRouter);
router.use("/auth", authentication, userRouter);
export default router;
