import express from "express";
const router = express.Router();
import { createEnquiry, getEnquiry, getEnquiryById, updateEnquiry, deleteEnquiry } from "./enquiry.controller.js";

router.post("/enquiry", createEnquiry);
router.get("/enquiry", getEnquiry);
router.get("/enquiry/:id", getEnquiryById);
router.put("/enquiry/:id", updateEnquiry);
router.delete("/enquiry/:id", deleteEnquiry);

export default router;