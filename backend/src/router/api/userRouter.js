import { Router } from "express";
import { currentUser } from "../../controller/userController.js";

const router = Router();

router.get("/current-user", currentUser);

export default router;
