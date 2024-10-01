import express from "express";
import { createEvent, getAllEvents } from "../controllers/eventsController.js";

const router = express.Router();

router.post("/", createEvent); // Route to create an event
router.get("/getall", getAllEvents); // Route to get all events

export default router;
