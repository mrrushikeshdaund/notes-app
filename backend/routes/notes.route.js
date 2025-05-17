import express from "express";
import {
  createNote,
  deleteNote,
  getNotes,
  updateNote,
  addCollaborator,
  removeCollaborator,
} from "../controllers/notes.controller.js";
import { verifyToken } from "../controllers/auth.controller.js";

const router = express.Router();

router.post("/createNote",  createNote);
router.post("/getNotes", getNotes);
router.put("/updateNote", updateNote);
router.delete("/deleteNote", deleteNote);
router.post("/addCollaborator", addCollaborator);
router.post("/removeCollaborator", removeCollaborator);

export default router;
