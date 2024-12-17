import { Request, Response } from "express";
import { Board } from "../model";

export default async (req: Request, res: Response) => {
  try {
    const nowboard: Board | null = await Board.findOne({
      where: { id: +req.params.board, pw: req.body.pw },
    });
    if (!nowboard) {
      throw Error("check pw");
    }
    res.json({ check: "ok" });
  } catch (err) {
    res.status(400).json({ check: "fail" });
  }
};
