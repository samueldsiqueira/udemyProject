const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const connection = require("./database/database");
const Pergunta = require("./database/Pergunta");
const req = require("express/lib/request");
const res = require("express/lib/response");
// Database
connection
  .authenticate()
  .then(() => {
    console.log("conexão feita com banco de dados");
  })
  .catch((msgErro) => {
    console.log(msgErro);
  });
// Estrutura chamada promisse

// Estou dizendo para o Express usar o EJS como View engine
app.set("view engine", "ejs");
app.use(express.static("public"));

// body parser recebe os dados enviados pelo metodo post
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// rotas
// Pergunta.findAll(); = SELECT * ALL FROM pergunt. raw siginifica true
app.get("/", (req, res) => {
  Pergunta.findAll({
    raw: true,
    order: [
      ["id", "DESC"], //ASC = crescente || DESC = decrescente
    ],
  }).then((perguntas) => {
    res.render("index", {
      perguntas: perguntas,
    });
  });
});
app.get("/perguntar", (req, res) => {
  res.render("perguntar");
});

//  Pergunta.create(); = "INSERT INTO perguntas ... Pergunta"
app.post("/salvarpergunta", (req, res) => {
  var titulo = req.body.titulo;
  var descricao = req.body.descricao;
  Pergunta.create({
    titulo: titulo,
    descricao: descricao,
  }).then(() => {
    res.redirect("/");
  });
});
//buscar na rota a pergunta com id igual
app.get("/pergunta/:id", (req, res) => {
  var id = req.params.id;
  Pergunta.findOne({
    where: { id: id },
  }).then((pergunta) => {
    if (pergunta != undefined) {
      //pergunta encontrada
      res.render("pergunta");
    } else {
      //não encontrada
      res.redirect("/");
    }
  });
});

app.listen(8080, () => {
  console.log("App rodando!");
});
