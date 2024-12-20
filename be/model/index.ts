import { Sequelize } from "sequelize-typescript";
import db_config from "../config/config";

export const sequelize: Sequelize = new Sequelize({
  ...db_config,
  models: [__dirname + "/*.model.ts"],
  modelMatch: (filename, member) => {
    return filename.substring(0, filename.indexOf("model")) === member;
  },
});
