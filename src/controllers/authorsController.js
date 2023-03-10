import authors from "../models/Author.js";

class AuthorController {
  static getAllAuthors = (req, res) => {
    authors.find((err, authors) => {
      res.status(200).json(authors);
    });
  };

  static getaAuthorsById = (req, res) => {
    const id = req.params.id;

    authors.findById(id, (err, authors) => {
      if (err) {
        res
          .status(400)
          .send({ message: `${err.message} - id do autor não localizado` });
      } else {
        res.status(200).send(authors);
      }
    });
  };

  static signUp = (req, res) => {
    let author = new authors(req.body);

    author.save((err) => {
      if (err) {
        res
          .status(500)
          .send({ message: `${err.message} - falha ao cadastrar um autor(a)` });
      } else {
        res.status(201).send(author.toJSON());
      }
    });
  };

  static updateAuthors = (req, res) => {
    const id = req.params.id;

    authors.findByIdAndUpdate(id, { $set: req.body }, (err) => {
      if (!err) {
        res.status(200).send({ message: "Autor atualizado com sucesso" });
      } else {
        res
          .status(500)
          .send({ message: `${err.message} - erro ao atualizar o autor(a)` });
      }
    });
  };

  static deleteAuthors = (req, res) => {
    const id = req.params.id;

    authors.findByIdAndDelete(id, (err) => {
      if (!err) {
        res.status(200).send({ message: "Autor(a) removido com sucesso" });
      } else {
        res.status(500).send({ message: err.message });
      }
    });
  };
}

export default AuthorController;
