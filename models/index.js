const { Sequelize } = require("sequelize");

const sequelize = new Sequelize({
  dialect: "sqlite",
  storage: "./db/database.sqlite",
});

const db = {
  sequelize,
  Sequelize,
};

module.exports = db;
