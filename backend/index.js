import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import helmet from "helmet";
import mongoose from "./database/connect.js";
import studentRouter from "./routes/student-route.js";

dotenv.config();

const app = express();

app.use(helmet());
app.use(cors());
app.use(express.json());

const router = express.Router();

router.use("/student", studentRouter);

app.listen(process.env.PORT, () => {
  console.log("Server Running");
});
