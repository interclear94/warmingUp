import { Request, Response, urlencoded } from "express";
import { Board } from "../model";
import QueryString from "qs";
import { Op } from "sequelize";

interface Search {
  title?: { [Op.like]: string };
  user?: { [Op.like]: string };
}

export default async (req: Request, res: Response) => {
  try {
    const nowquery: QueryString.ParsedQs = req.query;
    const search: Search = {};
    let nowpage: number = 1;

    if (+req.params.list > 1) {
      nowpage = +req.params.list;
    }

    if (nowquery.title) {
      search.title = { [Op.like]: `%${String(nowquery.title)}%` };
    } else if (nowquery.user) {
      search.user = { [Op.like]: `%${String(nowquery.user)}%` };
    }

    const list: { rows: Board[]; count: number } = await Board.findAndCountAll({
      where: { ...search },
      attributes: { exclude: ["updatedAt", "deletedAt", "pw"] },
      offset: (nowpage - 1) * 8,
      limit: 8,
      order: [["id", "desc"]],
    });

    res.json({ list: list });
  } catch (err) {
    res.status(400).json({ fail: "fail" });
  }
};
