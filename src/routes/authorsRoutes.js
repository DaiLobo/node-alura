import express from "express";
import AuthorController from "../controllers/authorsController.js";

const router = express.Router();

router
  .get("/authors", AuthorController.getAllAuthors)
  .get("/authors/:id", AuthorController.getaAuthorsById)
  .post("/authors", AuthorController.signUp)
  .put("/authors/:id", AuthorController.updateAuthors)
  .delete("/authors/:id", AuthorController.deleteAuthors);

export default router;
