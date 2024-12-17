import { Request, Response } from "express";
import { Board } from "../model";

export default async (req: Request, res: Response) => {
  try {
    const reqbody = req.body;
    const nowboard: Board | null = await Board.findOne({
      where: { id: +req.params.board },
    });

    if (!nowboard) {
      throw Error("not found");
    }

    await nowboard.update({
      title: reqbody.title,
      content: reqbody.content,
      user: reqbody.user,
      pw: reqbody.pw,
    });
    res.redirect(`/view/${nowboard.id}`);
  } catch (err) {
    res.status(400).json({ check: "fail" });
  }
};
