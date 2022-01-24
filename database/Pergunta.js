const Sequelize = require("sequelize");
const connection = require("./database");

// cria a variavel que recebe o model > chama a conexão > poem o nome da tabela > abre o JSON  define os campos
const Pergunta = connection.define("pergunta", {
  titulo: { type: Sequelize.STRING, allowNull: false },
  descricao: { type: Sequelize.TEXT, allowNull: false },
});

Pergunta.sync({ force: false }).then(() => {
  console.log("tabela criada!");
});
