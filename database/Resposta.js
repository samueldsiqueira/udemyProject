const Sequelize = require("sequelize");
const connection = require("./database");

const Resposta = connection.define("respostas", {
  corpo: {
    type: Sequelize.TEXT,
    allowNull: false,
  },
  pergundaId: {
    type: Sequelize.INTEGER,
    allowNull: false,
  },
});

Resposta.sync({ foce: false });

module.exports = Resposta;
