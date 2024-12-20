import dotenv from "dotenv";
import { Options } from "sequelize";
dotenv.config();

const { DATABASE, HOST, USERNAME, PASSWORD } = process.env;

const db_config: Options = {
  dialect: "mysql",
  database: DATABASE,
  host: HOST,
  username: USERNAME,
  password: PASSWORD,
  timezone: "+09:00",
};

export default db_config;
