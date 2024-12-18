import express, { Express } from "express";
import morgan from "morgan";
import router from "./controllers";
import cors from "cors";
import { sequelize } from "./model";
import errorHandler from "./middleware/error";

const app: Express = express();

sequelize.sync({ force: false });

app.use(morgan("dev"));
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(
  cors({
    origin: ["http://localhost:5500", "http://127.0.0.1:5500"],
    credentials: true,
  })
);
app.use("/api", router);
app.use(errorHandler);

app.listen(3000, () => {
  console.log("hello");
});
