import express from "express";
import cors from "cors";
import { enquiryRoutes } from "./modules/index.js";

const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/api/v1/", enquiryRoutes);

export default app;