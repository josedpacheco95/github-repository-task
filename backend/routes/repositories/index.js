const express = require("express");
const repositoriesController = require('../../controllers/repositories')

const repositories = express.Router();

repositories.get("/", repositoriesController.getRepositorie);

module.exports = repositories;
