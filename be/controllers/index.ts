import { Router } from "express";
import wirte from "../services/wirte";
import list from "../services/list";
import view from "../services/view";
import check from "../services/check";
import update from "../services/update";
import boarddelete from "../services/delete";

const router: Router = Router();

router.get("/", list);
router.get("/search/:list", list);
router.post("/write", wirte);
router.get("/view/:board", view);
router.put("/check/:board", check);
router.patch("/write/:board", update);
router.delete("/delete/:board", boarddelete);

export default router;
