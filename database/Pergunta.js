const Sequelize = require("sequelize");
const connection = require("./database");

// cria a variavel que recebe o model > chama a conexão > poem o nome da tabela > abre o JSON > define os campos
const Pergunta = connection.define("perguntas", {
  titulo: { type: Sequelize.STRING, allowNull: false },
  descricao: { type: Sequelize.TEXT, allowNull: false },
});

// o comando force: false QUER DIZER PARA O CÓDIGO que se a tabela "pergunta" já existir ele não vai forçar ela a ser criada, o then é executado quando a tabela é criada.
Pergunta.sync({ force: false }).then(() => {
  console.log("tabela criada!");
});

module.exports = Pergunta;
