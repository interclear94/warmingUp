import { Request, Response } from "express";
import { Board } from "../model";

export default async (req: Request, res: Response) => {
  try {
    const nowboardnum: number = +req.params.board;

    const nowboard: Board | null = await Board.findOne({
      where: { id: nowboardnum },
      attributes: { exclude: ["updatedAt", "deletedAt", "pw"] },
    });
    if (nowboard) {
      res.redirect(`/view/${nowboard.id}`);
    } else {
      throw Error("not found");
    }
  } catch (err) {
    res.status(400).json({ fail: "fail" });
  }
};
