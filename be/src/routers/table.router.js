import {
  getTables,
  getTableById,
  addTable,
  uploadTable,
  deleteTable,
} from "../controllers/table.controller.js";
import express from "express";

const router = express.Router();

// get all Tables
router.get("/", getTables);
// get user by id
router.get("/:id", getTableById);
// register
router.post("/", addTable);
// upload
router.put("/:id", uploadTable);
// delete
router.delete("/:id", deleteTable);

export default router;
