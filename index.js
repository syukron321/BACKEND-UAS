const express = require("express");
const app = express();
const port = 5000;
const routerFotos = require("./routers/fotos");

const mongoose = require("mongoose");
const cors = require("cors");
require("dotenv").config();

//untuk menerima req.body
app.use(cors({ origin: "*" }));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

mongoose.connect(process.env.DATABASE_URL, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const db = mongoose.connection;
db.on("error", console.error.bind(console, "koneksi error"));
db.once("open", function () {
  console.log("Berhasil terkoneksi ke mongodb");
});

app.get("/about", (req, res) => {
  res.send("About");
});

app.use(routerFotos);

app.listen(port, () => {
  console.log("server berjalan pada port " + port);
});
