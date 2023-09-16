require("dotenv").config();
const path = require("path");
const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const commitsRoutes = require('./routes/commits');
const repositoriesRoutes = require('./routes/repositories');

const app = express();

app.use(cors());
app.use(bodyParser.json());

app.use('/repositorie', repositoriesRoutes)
app.use('/commits', commitsRoutes)

app.listen(5020);
