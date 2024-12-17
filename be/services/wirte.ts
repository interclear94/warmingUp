import { Request, Response } from "express";
import { Board } from "../model";

export default async (req: Request, res: Response) => {
  try {
    const reqbody = req.body;

    console.log(req.body);

    const nowboard: Board = await Board.create({
      title: reqbody.title,
      content: reqbody.content,
      user: reqbody.user,
      pw: reqbody.pw,
      view: 0,
    });
    res.redirect(`/view/${nowboard.id}`);
  } catch (err) {
    // console.log(err);
    res.status(400).json({ fail: "fail" });
  }
};
