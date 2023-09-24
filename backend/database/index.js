const Sequelize = require("sequelize");

const sequelize = new Sequelize(process.env.APP_DB_NAME, process.env.APP_DB_USER, process.env.APP_DB_PASSWORD, {
  dialect: "sqlite",
  storage: process.env.APP_DB_PATH,
  logging: false,
});

module.exports = sequelize;
