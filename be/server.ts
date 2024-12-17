import express, { Express } from "express";
import morgan from "morgan";
import router from "./controllers";
import cors from "cors";
import { sequelize } from "./model";

const app: Express = express();

sequelize.sync({ force: false });

app.use(morgan("dev"));
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(
  cors({
    origin: "http://localhost:3000",
    credentials: true,
  })
);
app.use("/api", router);

app.listen(3000, () => {
  console.log("hello");
});
