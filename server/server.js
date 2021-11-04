const express = require("express");
const mongoose = require("mongoose");
const morgan = require("morgan"); //outils de monitoring dans le terminal du status des requetes
const bodyParser = require("body-parser");
const cors = require("cors");
const { readdirSync } = require("fs"); //file system inclut dans node
require("dotenv").config();

// app
const app = express();

// db
mongoose
  .connect(process.env.DATABASE, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useFindAndModify: true,
  })
  .then(() => console.log("DB CONNECTED"))
  .catch((err) => console.log(`DB CONNECTION ERR ${err}`));

// middlewares
app.use(morgan("dev"));
app.use(bodyParser.json({ limit: "2mb" })); // gestion d'érreur si le client envoie des fichiers > 2mb
app.use(cors());

// routes middleware .....  Methodes routes defractorer, methode map qui passe en boucle dans chaque fichier de routes
readdirSync("./routes").map((r) => app.use("/api", require("./routes/" + r)));

// port
const port = process.env.PORT || 8000;

app.listen(port, () => console.log(`Server is running on port ${port}`));
