import dotenv from "dotenv";
dotenv.config({ path: "./config/.env" });
import express from "express";
import cookieParser from "cookie-parser";
import { connectDb } from "./__db.js";
import router from "../src/router/index.js";
import cors from "cors";
const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

//cookie parser
app.use(cookieParser());

// cors
app.use(
  cors({
    origin: "http://localhost:5173",
    credentials: true,
  })
);
//test route

app.get("/v1/test", (req, res) => {
  res.send("test route is working well");
});

// router

app.use("/v1/api", router);

export function start() {
  const PORT = process.env.PORT;
  app.listen(PORT, () => {
    console.log(`server is running on port ${PORT}`);
    connectDb();
  });
}
