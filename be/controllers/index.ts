import { Router } from "express";
import boards from "./boards";

const router: Router = Router();

router.use("/boards", boards);

export default router;
