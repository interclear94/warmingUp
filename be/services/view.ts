import { Request, Response } from "express";
import { Board } from "../model";

export default async (req: Request, res: Response) => {
  try {
    const nowboardnum: number = +req.params.board;

    const boardcheck: Board | null = await Board.findOne({
      where: { id: nowboardnum },
      attributes: ["id", "view"],
    });
    if (!boardcheck) {
      throw new Error("not found");
    }
    await boardcheck.update({ view: boardcheck.view + 1 });

    const nowboard: Board | null = await Board.findOne({
      where: { id: nowboardnum },
      attributes: { exclude: ["updatedAt", "deletedAt", "pw"] },
    });

    res.json({ view: nowboard });
  } catch (err) {
    res.status(400).json({ fail: "fail" });
  }
};
