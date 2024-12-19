import { Request, Response } from "express";
import { Board } from "../model";
import QueryString from "qs";
import { Op } from "sequelize";

interface Search {
  title?: { [Op.like]: string };
  user?: { [Op.like]: string };
}

export const list = async (nowquery: QueryString.ParsedQs) => {
  try {
    const search: Search = {};
    let nowpage: number = 1;
    if (nowquery.title) {
      search.title = { [Op.like]: `%${String(nowquery.title)}%` };
    }
    if (nowquery.user) {
      search.user = { [Op.like]: `%${String(nowquery.user)}%` };
    }
    if (!isNaN(parseInt(String(nowquery.page)))) {
      nowpage = parseInt(String(nowquery.page));
    }
    const list: { rows: Board[]; count: number } = await Board.findAndCountAll({
      where: { ...search },
      attributes: { exclude: ["updatedAt", "deletedAt", "pw"] },
      offset: (nowpage - 1) * 8,
      limit: 8,
      order: [["id", "desc"]],
    });

    return list;
  } catch (err: any) {
    throw Error(err);
  }
};

export const view = async (nowparams: number) => {
  try {
    const boardcheck: Board | null = await Board.findOne({
      where: { id: nowparams },
      attributes: ["id", "view"],
    });
    if (!boardcheck) {
      throw new Error("Not Found");
    }
    await boardcheck.update({ view: boardcheck.view + 1 });

    const nowboard: Board | null = await Board.findOne({
      where: { id: nowparams },
      attributes: { exclude: ["updatedAt", "deletedAt", "pw"] },
    });

    return nowboard;
  } catch (err: any) {
    throw Error(err);
  }
};

export const write = async (body: any) => {
  try {
    const nowboard: Board = await Board.create({
      title: body.title,
      content: body.content,
      user: body.user,
      pw: body.pw,
      view: 0,
    });
    return nowboard.id;
  } catch (err: any) {
    throw new Error("fail");
  }
};

export const update = async (body: any, nowparams: number) => {
  try {
    const nowboard: Board | null = await Board.findOne({
      where: { id: nowparams },
    });

    if (!nowboard) {
      throw Error("not found");
    }

    await nowboard.update({
      title: body.title,
      content: body.content,
      user: body.user,
      pw: body.pw,
    });

    return nowboard.id;
  } catch (err: any) {
    // res.status(400).json({ check: "fail" });
    throw new Error("fail");
  }
};

export const boarddelete = async (nowparams: number) => {
  try {
    const nowboard: Board | null = await Board.findOne({
      where: { id: nowparams },
    });

    nowboard?.destroy();

    return { check: "ok" };
  } catch (err: any) {
    throw new Error("fail2");
  }
};

export const check = async (body: any, nowparams: number) => {
  try {
    const nowboard: Board | null = await Board.findOne({
      where: { id: nowparams, pw: body.pw },
    });
    if (!nowboard) {
      throw new Error();
    }
    return { check: "ok" };
  } catch (err: any) {
    throw new Error("fail2");
  }
};
