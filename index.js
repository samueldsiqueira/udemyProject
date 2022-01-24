const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const connection = require("./database/database");
const perguntaModel = require("./database/Pergunta");
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
app.get("/", (req, res) => {
  res.render("index");
});

app.get("/perguntar", (req, res) => {
  res.render("perguntar");
});

app.post("/salvarpergunta", (req, res) => {
  var titulo = req.body.titulo;
  var descricao = req.body.descricao;
  res.send(
    "Formulário recebido! titulo " + titulo + " " + "descricao" + descricao,
  );
});

app.listen(8080, () => {
  console.log("App rodando!");
});
