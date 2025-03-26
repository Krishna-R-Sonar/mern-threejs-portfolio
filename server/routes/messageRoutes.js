// server/routes/messageRoutes.js
import express from "express";
import { getMessages, createMessage } from "../controllers/messageController.js";

const router = express.Router();

router.post("/", createMessage);
router.get("/", (req, res) => {
  if (req.query.secret !== process.env.OWNER_SECRET) {
    return res.status(401).json({ error: "Unauthorized" });
  }
  return getMessages(req, res);
});

export default router;