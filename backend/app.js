require("dotenv").config();
const path = require("path");
const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const database = require("./database");
const authRoutes = require("./routes/auth");
const commitsRoutes = require("./routes/commits");
const repositoriesRoutes = require("./routes/repositories");
const generalError = require("./middlewares/error");
const isAuth = require("./middlewares/auth");

const app = express();

app.use(cors());
app.use(bodyParser.json());

app.use("/auth", authRoutes);
app.use("/repositorie", isAuth, repositoriesRoutes);
app.use("/commits", isAuth, commitsRoutes);
// app.use("/repositorie", repositoriesRoutes);
// app.use("/commits", commitsRoutes);

app.use(generalError);

database
  .sync()
  .then((result) => {
    console.log("Connected!");
    app.listen(5020);
  })
  .catch((error) => console.log(error));
