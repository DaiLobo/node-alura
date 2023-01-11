import express from "express";
import db from "./config/dbConnect.js";
import routes from "./routes/index.js";

db.on("error", console.log.bind(console, "Erro de conexção"));
db.once("open", () => {
  console.log("Conexão com o banco feita com sucesso");
});

// app recebe uma instância do express
const app = express();

app.use(express.json());

routes(app);

// const livros = [
//   {
//     id: 1,
//     title: "Senhor dos aneis",
//   },
//   {
//     id: 2,
//     title: "Percy Jackson",
//   },
// ];

// function searchBook(id) {
//   return books.findIndex((livro) => livro.id == id);
// }

// app.get("/books", (req, res) => {
//   books.find((err, books) => res.status(200).json(books));
// });

// app.get("/books/:id", (req, res) => {
//   let index = searchBook(req.params.id);
//   res.json(books[index]);
// });

// app.post("/books", (req, res) => {
//   books.push(req.body);
//   res.status(201).send("Livro cadastrado com sucesso");
// });

// app.put("/books/:id", (req, res) => {
//   let index = searchBook(req.params.id);
//   books[index].title = req.body.title;

//   return res.json(books);
// });

// app.delete("/books/:id", (req, res) => {
//   let { id } = req.params;
//   let index = searchBook(id);
//   books.splice(index, 1);
//   res.send(`Livro ${id} removido com sucesso`);
// });

export default app;
