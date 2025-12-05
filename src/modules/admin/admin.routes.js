import express from "express";
const router = express.Router();
import { createAdmin, loginAdmin } from "./admin.controller.js";

router.post("/admin/create", createAdmin);
router.post("/admin/login", loginAdmin);


export default router;