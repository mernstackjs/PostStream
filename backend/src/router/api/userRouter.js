import { Router } from "express";
import { Register } from "../../controller/authController.js";

const router = Router();

router.post("/register", Register);
export default router;
