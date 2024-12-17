import { Request, Response } from "express";
import { Board } from "../model";

export default async (req: Request, res: Response) => {
  try {
    const nowboard: Board | null = await Board.findOne({
      where: { id: +req.params.board },
    });

    nowboard?.destroy();

    res.redirect("/");
  } catch (err) {
    res.status(400).json({ check: "fail" });
  }
};
