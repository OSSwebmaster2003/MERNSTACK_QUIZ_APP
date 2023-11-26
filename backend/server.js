import express from "express";
import morgan from "morgan";
import cors from "cors";
import { config } from "dotenv";
import router from "./router/route.js";

const app = express();

// app middleware
app.use(morgan("tiny"));
app.use(cors());
app.use(express.json());
config();

// application port
const port = process.env.PORT || 8080;

// express routes
app.use("/api", router); /** apis */

app.get("/", (req, res) => {
  try {
    res.json("Get Request");
  } catch (error) {
    res.json(error);
  }
});

app.listen(port, (req, res) => {
  console.log(`server connected to http://localhost:${port}`);
});