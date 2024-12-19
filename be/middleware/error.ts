import { NextFunction, Request, Response } from "express";

export default (err: any, req: Request, res: Response, next: NextFunction) => {
  if (err.message === "fail") {
    res.status(400).json({ fail: "fail" });
  } else if (err.message === "fail2") {
    res.status(400).json({ check: "fail" });
  } else {
    res.status(400).json(err.message);
  }
};
