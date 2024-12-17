import { Sequelize, Options } from "sequelize";
import mysqlConfig from "../config/config.json";
import Board from "./board";

const config: Options = mysqlConfig.development as Options;

export const sequelize: Sequelize = new Sequelize(config);
Board.initialize(sequelize);

export { Board };
