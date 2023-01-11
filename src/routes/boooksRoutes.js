import express from "express";
import BookController from "../controllers/booksController.js";

const router = express.Router();

router
  .get("/books", BookController.getAllBooks)
  .get("/books/search", BookController.getBookByPublisher)
  .get("/books/:id", BookController.getBookById)
  .post("/books", BookController.signUp)
  .put("/books/:id", BookController.updateBook)
  .delete("/books/:id", BookController.deleteBook);

export default router;
