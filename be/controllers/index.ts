import { NextFunction, Router, Request, Response } from "express";

import {
  list,
  view,
  write,
  update,
  boarddelete,
  check,
} from "../services/boards";

const router: Router = Router();

router.get(
  "/boards",
  async (req: Request, res: Response, next: NextFunction) => {
    try {
      const getlist = await list(req.query);
      res.json({ list: getlist });
    } catch (err) {
      next(err);
    }
  }
);

router.get(
  "/boards/:id",
  async (req: Request, res: Response, next: NextFunction) => {
    try {
      const nowparams: number = parseInt(req.params.id);
      if (isNaN(nowparams)) {
        throw new Error("NaN");
      }
      const nowview = await view(nowparams);
      res.json({ view: nowview });
    } catch (err) {
      next(err);
    }
  }
);

router.post(
  "/boards",
  async (req: Request, res: Response, next: NextFunction) => {
    try {
      const { body } = req;

      const nowid = await write(body);
      res.json({ id: nowid });
    } catch (err) {
      next(err);
    }
  }
);

router.patch(
  "/boards/:id",
  async (req: Request, res: Response, next: NextFunction) => {
    try {
      const { body, params } = req;
      const nowparams: number = parseInt(params.id);
      const nowid = await update(body, nowparams);
      res.json({ id: nowid });
    } catch (err) {
      next(err);
    }
  }
);

router.delete(
  "/boards/:id",
  async (req: Request, res: Response, next: NextFunction) => {
    try {
      const nowparams: number = parseInt(req.params.id);
      if (isNaN(nowparams)) {
        throw new Error("NaN");
      }
      const deletecheck = await boarddelete(nowparams);
      res.json(deletecheck);
    } catch (err) {
      next(err);
    }
  }
);

router.post(
  "/boards/:id/pwcheck",
  async (req: Request, res: Response, next: NextFunction) => {
    try {
      const { body, params } = req;
      const nowparams: number = parseInt(params.id);
      const pwcheck = await check(body, nowparams);
      res.json(pwcheck);
    } catch (err) {
      next(err);
    }
  }
);

export default router;
