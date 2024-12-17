import { Router } from "express";
import wirte from "../services/wirte";
import list from "../services/list";
import view from "../services/view";

const router: Router = Router();

router.get("/", list);
router.get("/search/:list", list);
router.post("/write", wirte);
router.get("/view/:board", view);

export default router;
