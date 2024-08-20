import dotenv from "dotenv";

dotenv.config({ path: "./config/.env" });
import express from "express";
import cookieParser from "cookie-parser";
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

//cookie parser
app.use(cookieParser());

//test route

app.get("/v1/test", (req, res) => {
  res.send("test route is working well");
});

export function start() {
  const PORT = process.env.PORT;
  app.listen(PORT, () => {
    console.log(`server is running on port ${PORT}`);
  });
}
