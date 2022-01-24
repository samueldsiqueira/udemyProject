const Sequelize = require("sequelize");
const connection = new Sequelize("guiaperguntas", "root", "#adm#1991", {
  host: "localhost",
  dialect: "mysql",
});

module.exports = connection;
