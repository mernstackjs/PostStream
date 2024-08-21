import { Router } from "express";

const router = Router();

import authRouter from "./api/userRouter.js";
router.use("/auth", authRouter);
export default router;
