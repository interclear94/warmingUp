import { Request, Response } from "express";
import { Board } from "../model";
import QueryString from "qs";

export default async (req: Request, res: Response) => {
  try {
    const nowquery: QueryString.ParsedQs = req.query;
    const search: { title?: string; user?: string } = {};
    let nowpage: number = 1;

    if (+req.params.list > 1) {
      nowpage = +req.params.list;
    }

    if (nowquery.title) {
      search.title = String(nowquery.title);
    } else if (nowquery.user) {
      search.user = String(nowquery.user);
    }

    const list: { rows: Board[]; count: number } = await Board.findAndCountAll({
      where: search,
      attributes: { exclude: ["updatedAt", "deletedAt", "pw"] },
      offset: (nowpage - 1) * 10,
      limit: 10,
      order: [["id", "desc"]],
    });

    res.json({ list: list });
  } catch (err) {
    res.status(400).json({ fail: "fail" });
  }
};
