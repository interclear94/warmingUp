import { Router } from "express";
import wirte from "../services/wirte";

const router: Router = Router();

router.post("/write", wirte);

export default router;
